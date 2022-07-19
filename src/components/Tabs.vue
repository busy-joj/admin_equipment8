<template>
    <ul class="nav nav-pills">
        <li class="nav-item" v-for="(item, i) in category" :key="i" >
            <BasicTab @click="activeTab($event,i)" :class="{active : item.isActive}">{{item.text}}</BasicTab>
        </li>
    </ul>
</template>

<script>
import BasicTab from '~/components/basic/BasicTab'

    export default {
    components:{
        BasicTab
    },
    data(){
        return{
                category:[
                { 
                    text : '전체',
                    isActive : false
                },
                { 
                    text : '대여가능',
                    isActive : false
                },
                { 
                    text : 'Android',
                    isActive : false
                },
                { 
                    text : 'iOS',
                    isActive : false
                },
                { 
                    text : '폰',
                    isActive : false
                },
                { 
                    text : '태블릿',
                    isActive : false
                },
                { 
                    text : '유심',
                    isActive : false
                },
                { 
                    text : '기타',
                    isActive : false
                }
                ],
                
            }
    },
    methods:{
        activeTab(e,i){
        e.preventDefault();
        console.log(this.isActive)
        this.category[i].isActive = !this.category[i].isActive
        console.log(this.isActive)
        }
    }
    }
</script>

<style lang="scss" scoped>
.nav{margin-bottom:40px;
    .nav-link{font-size:14px;color:#3f3f3f;padding:9px 12px;margin-right:20px;
        &.active{font-weight:bold;background-color:#f0f0f0;color:#3f3f3f;}
    }
}
</style>