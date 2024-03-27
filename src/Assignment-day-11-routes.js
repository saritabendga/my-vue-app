


import {createRouter ,createWebHashHistory} from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import ProductComponent from './components/ProductComponent.vue'
import ContactComponent from './components/ContactComponent.vue'

 const  routes =[
    {path :'/' ,component : HomeComponent},
    {path :'/home' ,component :HomeComponent },
    {path :'/contact' ,component :  ContactComponent},
    {path :'/products' ,component : ProductComponent},
 ]

 const router= createRouter({
    history : createWebHashHistory(),
    routes
 })

 export default router