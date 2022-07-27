<template>
    <!-- active 중복 가능 -->
    <div class="tab-nav">
        <BasicTab v-for="(item, i) in category" :key="i"  @click="activeTab($event,i)" :class="{active : item.isActive}">{{item.text}}</BasicTab>
    </div>
    <CardList />
</template>

<script>
import BasicTab from '~/components/basic/BasicTab'
import CardList from '~/components/CardList'

    export default {
    components:{
        BasicTab,
        CardList
    },
    data(){
        return{
                category:[
                { 
                    text : '전체',
                    isActive : true
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
        this.category[i].isActive = !this.category[i].isActive
        }
    }
    }
</script>

<style lang="scss" scoped>
.tab-nav{margin-bottom:40px;}
</style>