import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import ProductsAdmin from './components/ProductsAdmin.vue'
import ContactAdmin from './components/ContactAdmin.vue'
import InstallationAdmin from './components/InstallationAdmin.vue'
import CreateProd from './components/CreateProd.vue'
import Home from './components/Home.vue'
import Productos from './components/Productos.vue'
import Producto from './components/Producto.vue'


const routes = [
    {
        path: '/',
        name: 'root',
        component: App
    },
    {
        path:'/productsAdmin',
        name: 'ProductsAd',
        component: ProductsAdmin,
    },
    {
        path:'/contactAdmin',
        name: 'ContactAd',
        component: ContactAdmin,
    },
    {
        path:'/InstallationAdmin',
        name: 'InstallationAd',
        component: InstallationAdmin,
    },
    {
        path:'/createProduct',
        name: 'CreateProduct',
        component: CreateProd,
    },
    {
      path: "/Home",
      name: "Home",
      component: Home,
    },{
        path: '/productos',
        name: "Productos",
        component: Productos,
    },
    {
        path: '/producto',
        name: "Producto",
        component: Producto,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router