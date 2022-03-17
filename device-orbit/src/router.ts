import Devices from "./view/device";
import Login from "./view/login";



export const routeInfos = {
    LoginPage: {
        id: 'login',
        path: '/',
        component: Login
    },
    DevicePage: {
        id: 'devices',
        path: '/devices',
        component: Devices
    }
}