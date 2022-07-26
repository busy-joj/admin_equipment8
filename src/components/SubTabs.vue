<template>
    <!-- acitve 중복불가능 -->
    <div class="tab-nav">
        <BasicTab v-for="(item, i) in tabs" :key="i" @click="currentTab = i" :class="currentTab === i ? 'active' : ''">{{ item.text }}</BasicTab>
    </div>
    <div class="tab-content">
        <SubTabCont v-show="currentTab === 0">가나다라</SubTabCont>
        <SubTabCont v-show="currentTab === 1">마바사아</SubTabCont>
    </div>
</template>

<script>
import BasicTab from '~/components/basic/BasicTab'
import SubTabItem from '~/components/SubTabCont'

export default {
    components:{
        BasicTab,
        SubTabItem
    },
    data(){
        return{
                currentTab: 0,
                tabs:[
                    {   
                        text : '계정 정보',
                        isActive : true
                    },
                    { 
                        text : '신청 내역 조회',
                        isActive : false
                    }
                ]
                
            }
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
.tab-nav{margin-bottom:24px;}
</style>