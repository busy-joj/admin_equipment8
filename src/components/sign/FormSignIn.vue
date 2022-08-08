<template>
    <div class="input-box">
        <InputSignIn v-for="signIn in formSignIn" :key="signIn.id" :signIn="signIn"/>
    </div><!-- /.input-box -->

    <div class="btn-box-sign">
        <div class="btn-login">
        <BasicButton :class="{gray2 : true, lg: true, mn: true}" @click="signInSubmit">로그인</BasicButton>
        </div>
        <div class="btn-other">
            <RouterLink to="../routes/SignUp" class="btn-signup">계정 생성</RouterLink>
            <RouterLink to="../routes/SignFind" class="btn-find">비밀번호 찾기</RouterLink>
        </div>
    </div><!-- /.btn-box -->
</template>

<script>
import BasicButton from '~/components/basic/BasicButton'
import InputSignIn from '~/components/sign/InputSignIn'

export default {
    components:{
        BasicButton,
        InputSignIn
    },
    data(){
        return{
            formSignIn:[
                {
                    id:'username',
                    value:null,
                    type:'number',
                    placeholder:'사번',
                    isFocus:false
                },
                {
                    id:'password',
                    value:null,
                    type:'password',
                    placeholder:'비밀번호',
                    isFocus:false
                },
                {
                    id:'keep',
                    value:'off',
                    type:'ckeckbox',
                    placeholder:'사번',
                    isFocus:false
                }
            ]   
        }
    },
    methods:{
        signInSubmit(){
            
        }
    }
}
</script>

<style lang="scss" scoped>
.input-box{margin-bottom:40px;}
.btn-box-sign{
    .btn-login{
        .btn{font-weight:normal;font-size:16px;line-height:14px;}
    }
    .btn-other{text-align: center;margin-top:32px;
        a{text-decoration: none;font-size:12px;color:$M-gray5;
        + a{margin-left:19px;position:relative;
            &::before{position:absolute;content:'';width:1px;height:9px;background:$M-gray4;top:3px;left:-8px;}
        }
        }
    }
}
</style>