<template>
    <div id="collapseApply" :class="{'collapse':true,'apply':true,'show':isCollapse}">
        <div class="apply-list">
            <h3>대여 신청할 기기목록</h3>
            <div class="apply-list-item">
                <ApplyCardList :applyList="applyList"/>
            </div>
        </div>
        <div class="apply-date">
            <h3>대여 기간</h3>
            <div class="datepicker-box">
                <DatePicker/>
            </div>

        </div>
        <div class="apply-btns">
            <BasicButton @click="applySubmit" :class="{primary : true, lg:true , 'btn-cart-submit':true}" type="submit"><span class="icon"></span>신청하기<span class="selected-num">{{ countItem }}</span></BasicButton>
            <BasicButton @click="collapse" :class="{white : true, lg:true , 'btn-cart-close':true}" data-bs-toggle="collapse" data-bs-target="#collapseApply" :aria-expanded="!accessibility" aria-controls="collapseApply">닫기</BasicButton>
        </div>
        
    </div>

    <BasicButton @click="collapse" :class="{primary : true, mn: true, 'btn-cart':true}" v-show="0 < countItem" data-bs-toggle="collapse" data-bs-target="#collapseApply" :aria-expanded="accessibility" aria-controls="collapseApply"><span class="icon"></span>신청하기<span class="selected-num">{{ countItem }}</span></BasicButton>
</template>

<script>
import { mapState } from 'vuex'

import BasicButton from '~/components/basic/BasicButton'
import DatePicker from '~/components/basic/DatePicker'
import ApplyCardList from '~/components/apply/ApplyCardList'

export default {
    components:{
        BasicButton,
        DatePicker,
        ApplyCardList
    },
    data(){
        return{
            isCollapse : false,
            accessibility : false,
            succeed:false
        }
    },
    computed:{
    ...mapState('equipments',[
        'countItem',
        'applyList'
        ])
    },
    methods:{
        collapse(){
            this.isCollapse = !this.isCollapse
        },
        applySubmit(){
            this.$router.push('Success')
        }
    }
}
</script>

<style lang="scss" scoped>
#collapseApply.apply{position:fixed;top:64px;right:0;width:668px;height:100%;background:#fff;box-shadow:0px 4px 8px rgba(0,0,0,.24);z-index: 50;padding:40px;overflow-y:auto;
    &::-webkit-scrollbar{display:none;}
    .apply-list{}
    .apply-date{min-height:500px;margin:80px 0 0 0;
        .datepicker-box{display:flex;gap:24px;}
    }
    h3{margin-bottom:24px;}
    .apply-btns{position:fixed;bottom:0;width:588px;padding-bottom:40px;background:#fff;
        .btn-cart-submit{display:flex;align-items:center;justify-content:center;margin-bottom:16px;font-weight:600;
            span{display:inline-block;
                &.icon{width:24px;height:24px;background:url(~/assets/icon-cart.png) center/100% no-repeat;margin-right:8px;}
                &.selected-num{margin-left:8px;background: #fff;color:$M-primary;border:1px solid $M-primary;line-height:18px;padding:0px 8px;border-radius: 16px;}
            }  
        }
        .btn-cart-close{font-weight:600;}
    }
}
.btn-cart{position:fixed;bottom:40px;right:40px;display:flex;align-items:center;border-radius:40px;font-weight:600;padding:15px 16px !important;z-index:10;
    span{display:inline-block;
        &.icon{width:24px;height:24px;background:url(~/assets/icon-cart.png) center/100% no-repeat;margin-right:8px;}
        &.selected-num{min-width:28px;margin-left:8px;background: #fff;color:$M-primary;border:1px solid $M-primary;line-height:18px;padding:0px 8px;border-radius: 16px;}
    }    
}
</style>