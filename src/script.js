import {createApp}  from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import CompOne from './compOne.vue'
const store = createStore ({    state() {
        return {
            count :10
    
        }
    },
})

const app = createApp(App)
app.component('comp-one',CompOne)
app.use(store)
app.mount('#app')