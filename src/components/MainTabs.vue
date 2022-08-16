<template>
    <!-- active 중복 가능 -->
    <div class="tab-nav">
        <BasicTab v-for="(tab, i) in category" :key="i"  @click="activeTab(tab,i)" :class="{active : tab.isActive}">{{ tab.text }}</BasicTab>
    </div>
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
        activeTab(tab, i){
            const seleted = i
            this.category.forEach((tab, i)=>{
                if(i === seleted){
                    tab.isActive = !tab.isActive
                }else{
                    tab.isActive = false
                }
            })
            this.$emit("activeTab", tab)
        }
    }
}
</script>

<style lang="scss" scoped>
.tab-nav{margin-bottom:40px;position:absolute;top:6px;right:0;}
</style>