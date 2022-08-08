<template>
    <div v-if="signIn.id === 'keep'" :class="signIn.id" >
        <input type="checkbox" :id="signIn.id" name="logKeep" :value="signIn.value">
        <label :for="signIn.id" class="txt">로그인 상태 유지</label>
    </div>

    <div v-else :class="[signIn.id, {'on': signIn.isFocus} ]" >
        <input :type="signIn.type" @focus="focusIn(signIn)" :placeholder="signIn.placeholder" class="form-control" :id="signIn.id" v-model="signIn.value">
        <IconButton v-if="signIn.value !== null" :class="{close : true}" @click="resetValue(signIn)"></IconButton>
    </div>
</template>

<script>
import IconButton from '~/components/basic/IconButton'

export default {
    components:{
        IconButton
    },
    props:{
        signIn:{
            type:Object,
            default(){
                return{
                    id:'username',
                    value:null,
                    type:'number',
                    placeholder:'사번',
                    isFocus:false
                }
            }
        }
    },
    methods:{
        focusIn(signIn){
            signIn.isFocus = true
        },
        resetValue(signIn){
            signIn.value = null
            signIn.isFocus = false
        }
    }
}
</script>

<style lang="scss" scoped>
div{position:relative;margin-bottom:24px;
    &:last-child{margin-bottom:0px;}
    &.username::before{position:absolute;content:'';width:16px;height:16px;top:14px;left:13px;background: url(~/assets/icon-user.png) no-repeat;background-size:100%;}
    &.password::before{position:absolute;content:'';width:16px;height:16px;top:14px;left:13px;background: url(~/assets/icon-info-2.png) no-repeat;background-size:100%;}
    &.on::before{filter: brightness(0%);}
    input.form-control{padding:12px 40px !important;font-size:14px;color:$M-black;line-height:14px;
        &::placeholder{color:$M-gray4}
        &:focus{
            border-color: $primary;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0), 0 0 0px rgba(0, 0, 0, 0);
        }
    }
    &.keep{margin-top:12px;
        input[type="checkbox"]{display:none;
        & + label{position:relative;padding:0 0 0 32px;font-size:14px;color:$M-gray5;cursor:pointer;line-height:24px;
                &::before{position:absolute;content:'';width:24px;height:24px;border-radius:50%;top:0px;left:0;background:url(~/assets/ico-check-set.png);background-position:0px 0px;background-size:100%;}
        }
        &:checked+label{
            &::before{content:'';background-position:0px 24px;}
        }
        }
    }
    button.btn.icon.close{width:16px;height:16px;background-color:$M-gray3;position:absolute;top:14px;right:12px;}
}
</style>