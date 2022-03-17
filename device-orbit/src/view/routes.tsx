
import { Route, Router } from 'react-router';
import { Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { routeInfos } from '../router';


const history = createBrowserHistory();

const ScreenRoutes = () => {
     

        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={routeInfos.LoginPage.component} />
                    <Route exact path='/devices' component={routeInfos.DevicePage.component} />
                </Switch>
            </Router>
        );
        
}

export default ScreenRoutes;