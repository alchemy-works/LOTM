import { html, styled, HashRouter as Router, Route, Switch, Suspense, Redirect, lazy } from './modules.js'

const Container = styled.div`
  height: 100vh;
`

const Content = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 60px);
`

const Footer = styled.div`
  box-sizing: border-box;
  height: 60px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const NavButton = styled.span`
  min-width: 60px;
  text-align: center;
  cursor: pointer;
`

const loading = html`
    <div>Loading...</div>
`

const Message = lazy(() => import('./Message.js'))

export default function App(props) {

    return html`
        <${Container}>
            <${Content}>
                <${Router}>
                    <${Suspense} fallback=${loading}>
                        <${Switch}>
                            <${Route} path="/" exact>
                                <${Redirect} to="/message" />
                            </Route>
                            <${Route} path="/message">
                                <${Message} />
                            </Route>
                            <${Route} path="*">
                                <div>No match route</div>
                            </Route>
                        </Switch>
                    </Suspense>
                </Router>
            </Content>
            <${Footer}>
                <${NavButton}>消息</NavButton>
                <${NavButton}>联系人</NavButton>
                <${NavButton}>发现</NavButton>
                <${NavButton}>我</NavButton>
            </Footer>
        </Container>
    `
}