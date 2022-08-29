<template>
    <!-- active 중복 불가 -->
    <div class="tab-nav">
        <BasicTab v-for="(tab, i) in sortOption" :key="i" @click="activeTab(tab,i)" :tab="tab" :class="{active : tab.isActive}" >{{ tab.text }}</BasicTab>
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
            sortOption:[
                { 
                    text : '전체',
                    id:'option1',
                    isActive : true
                },
                { 
                    text : '대여가능',
                    id:'option2',
                    isActive : false
                },
                { 
                    text : 'Android',
                    id:'option3',                    
                    isActive : false
                },
                { 
                    text : 'iOS',
                    id:'option4',                    
                    isActive : false
                },
                { 
                    text : '폰',
                    id:'option5',                    
                    isActive : false
                },
                { 
                    text : '태블릿',
                    id:'option6',                    
                    isActive : false
                },
                { 
                    text : '유심',
                    id:'option7',                    
                    isActive : false
                },
                { 
                    text : '기타',
                    id:'option8',                    
                    isActive : false
                }
            ],
                name:'sortOption'
            }
    },
    methods:{
        activeTab(tab, i){
            const seleted = i
            this.sortOption.forEach((tab, i)=>{
                if(i === seleted){
                    tab.isActive = true
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
.tab-nav{margin-bottom:40px;position:absolute;top:6px;right:0;display:flex;gap:4px;}
</style>