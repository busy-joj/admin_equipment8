<template>
    <!-- active 중복 불가 -->
    <div class="tab-nav">
        <!-- <BasicTab v-for="(tab, i) in sortOption" :key="i" @click="activeTab(tab,i)" :tab="tab" :class="{active : tab.isActive}" >{{ tab.text }}</BasicTab> -->
        <BasicTab v-for="(tab, i) in categories" :key="i"  @click="clickTab(tab, i)" :class="{active : tab.isActive}">{{ tab.text }}</BasicTab>
    </div>
</template>

<script>
import BasicTab from '~/components/basic/BasicTab'


export default {
    components:{
        BasicTab
    },
    data(){
        return {
            categories:[
                { 
                    text : '전체',
                    code : 'all',
                    isActive : false
                },
                { 
                    text : '대여가능',
                    code : 'available',
                    isActive : false
                },
                { 
                    text : 'Android',
                    code : 'android',
                    isActive : false
                },
                { 
                    text : 'iOS',
                    code : 'ios',
                    isActive : false
                },
                { 
                    text : '폰',
                    code : 'phone',
                    isActive : false
                },
                { 
                    text : '태블릿',
                    code : 'tablet',
                    isActive : false
                },
                { 
                    text : '유심',
                    code : 'usim',
                    isActive : false
                },
                { 
                    text : '기타',
                    code : 'etc',
                    isActive : false
                }
            ],
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
        },

        clickTab(tab, i) {
            console.log('MainTabs.vue clickTab', tab)
            const selected = i
            this.categories.forEach((tab, i) => {
                if (i === selected) {
                    console.log('i === selected')
                    tab.isActive = true
                } else {
                    tab.isActive = false
                }
            })
            this.$emit("clickTab", tab)
        }
    }
}
</script>

<style lang="scss" scoped>
.tab-nav{margin-bottom:40px;position:absolute;top:6px;right:0;display:flex;gap:4px;}
</style>