import { createStore } from 'vuex'
import equipments from './equipments'
import members from './members'

import createPersistedState from 'vuex-persistedstate'

export default createStore({
    modules:{
        equipments,
        members
    },
    plugins: [
        createPersistedState()
    ]
})