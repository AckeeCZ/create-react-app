import {
    React,
    hot,
    // @use-auth-module-begin
    Auth,
    // @use-auth-module-end,
    Switch,
    Route,
} from '../dependencies';

import Container from './Container';
import Navbar from './Navbar';
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
        component: Auth,
    },
    // @use-auth-module-end
    {
        component: NoMatchPage,
    },
];

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

export default hot(module)(App);
