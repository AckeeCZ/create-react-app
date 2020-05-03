import {
    React,
    // @use-auth-module-begin
    Login,
    // @use-auth-module-end,
    Switch,
    Route,
    UI,
} from '../dependencies';

import HomePage from './HomePage';
import NoMatchPage from './NoMatchPage';

const navItems = [
    {
        messageId: 'page.home.title',
        to: '/',
    },
    // @use-auth-module-begin
    {
        messageId: 'page.auth.title',
        to: '/auth',
    },
    // @use-auth-module-end
    {
        messageId: 'page.noMatch.title',
        to: '/no-match',
    },
];

const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true,
    },
    // @use-auth-module-begin
    {
        path: '/auth',
        component: Login,
    },
    // @use-auth-module-end
    {
        component: NoMatchPage,
    },
];

const { Container, Navbar } = UI;

const App = () => {
    return (
        <Container>
            <Navbar navItems={navItems} />

            <Switch>
                {routes.map((route, index) => (
                    <Route {...route} key={index} />
                ))}
            </Switch>
        </Container>
    );
};

export default App;
