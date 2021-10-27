import { html, styled, HashRouter as Router, Route, Switch, Suspense, Redirect, lazy } from './modules.js'

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100vh;
`

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.125rem;
  line-height: 1.75rem;
`

const loading = html`
    <${CenterBox}>Loading...</CenterBox>
`

const Message = lazy(() => import('./Messages.js'))
const Contacts = lazy(() => import('./Contacts.js'))

export default function App(props) {

    return html`
        <${Container}>
            <${Router}>
                <${Suspense} fallback=${loading}>
                    <${Switch}>
                        <${Route} path="/" exact>
                            <${Redirect} to="/messages" />
                        </Route>
                        <${Route} path="/messages">
                            <${Message} />
                        </Route>
                        <${Route} path="/contacts">
                            <${Contacts} />
                        </Route>
                        <${Route} path="*">
                            <div>No match route</div>
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        </Container>
    `
}