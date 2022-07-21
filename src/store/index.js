import { createStore } from 'vuex'
import equipments from './equipments'
import members from './members'

export default createStore({
    modules:{
        equipments,
        members
    }
})