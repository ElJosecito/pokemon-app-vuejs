import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './storage'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import the icons you need */
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(faHeart, faHeartRegular)

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

app.component('font-awesome-icon', FontAwesomeIcon)
