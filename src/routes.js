import { HomePage } from './pages/home-page.jsx'
import { Login } from './pages/login.jsx'
import { SignUp } from './pages/sign-up.jsx'
import { Messenger } from './pages/messenger.jsx'
import { Explore } from './pages/explore.jsx'
import { Profile } from './pages/profile.jsx'


const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/sign-up',
        component: SignUp,
    },
    {
        path: '/messenger',
        component: Messenger
    },
    {
        path: '/explore',
        component: Explore
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/',
        component: HomePage,
    },


]

export default routes