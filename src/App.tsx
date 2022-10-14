import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { Global, css, useTheme } from '@emotion/react'
import { Menu } from "./components/menu";
import {Body, Header} from "./components/typografy";

const Wrapper = styled.div`
  text-align: center;
  display: flex;
`

const BodyWrapper = styled.div`
  flex: 1 0 calc(100vw - ${props => props.theme.variables.grid} * 4);
`

function App() {
    const { t } = useTranslation()
    const theme = useTheme()

    return (
        <Wrapper className="App">
            <Global styles={css`
              
body {
  margin: 0;
  font-family: 'Neucha', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: repeating-linear-gradient(transparent,transparent calc(${theme.variables.grid} - 1px), ${theme.colors.gridColor} ${theme.variables.grid} ),
              repeating-linear-gradient( 90deg, transparent,transparent calc(${theme.variables.grid} - 1px), ${theme.colors.gridColor} ${theme.variables.grid} );
  background-color: ${theme.colors.background};
  color: ${theme.colors.color};
  min-height: 100vh;
  transition: all 1s;
  transition-property: background-color, color, background;
}

body::before {
  content: '';
  display: block;
  position: absolute;
  right: calc(${theme.variables.grid} * 4 - ${theme.variables.fieldBorderWidth});
  top: 0;
  background: #ff8100;
  height: 100vh;
  width: ${theme.variables.fieldBorderWidth};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}            

`} />
            <BodyWrapper>
                <Header>{t('hello')}</Header>
                <Body>{t('whoiam')}</Body>
            </BodyWrapper>
          <Menu />
        </Wrapper>
    );
}

export default App;
