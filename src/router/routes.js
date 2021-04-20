import Cards from '../pages/Cards'
import Article from '../pages/Article.vue'
import Home from '../pages/Home.vue'
import NotFound from '../pages/NotFound'

const routes = [
    { path: '/', component: Home },
    { path: '/home?', component: Home },
    { path: '/:cards', component: Cards },
    // { path: '/article/:postId(\\d+)', component: Article },
    { path: '/:article/:id', component: Article },
    { path: '/:match(.*)', component: NotFound },
]

export default routes