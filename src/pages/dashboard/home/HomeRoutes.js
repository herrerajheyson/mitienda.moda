import EmptyRouterView from "/src/pages/general/EmptyRouterView.vue"
import Home from './Home.vue'

const home_routes = {
  path: '/home',
  component: EmptyRouterView,
  children: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
  ]
}

export default home_routes;
