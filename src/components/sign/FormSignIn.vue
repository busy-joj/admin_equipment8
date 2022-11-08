<template>
    <div class="input-box">
        <!-- validate 실패시 클래스 was-validated:invalid 추가 -->
        <form @submit="signInSubmit" class="input-box-signIn needs-validation">
            <div>
                <input type="number" id="nameSignIn" v-model="signInData.empno" class="form-control" placeholder="사번" required>
                <label for="nameSignIn"></label>
                <IconButton v-if="signInData.empno !== ''" :class="{close : true}" @click="signInData.empno = ''"></IconButton>
                <div class="invalid-feedback">이름을 다시 확인해주세요.</div>
            </div>
            <div>
                <input type="password" id="pwSignIn" v-model="signInData.password" class="form-control" placeholder="비밀번호" required>
                <label for="pwSignIn"></label>
                <IconButton v-if="signInData.password !== ''" :class="{close : true}" @click="signInData.password = ''"></IconButton>
                <div class="invalid-feedback">비밀번호를 다시 확인해주세요.</div>
            </div>
            <div class="keep">
                <input type="checkbox" id="keepSignIn" v-model="signInData.rememberMe">
                <label for="keepSignIn" class="txt">로그인 상태 유지</label>
            </div>
        </form>
    </div><!-- /.input-box -->

    <div class="btn-box-sign">
        <div class="btn-sign-in">
        <BasicButton :class="{primary : true, lg: true, mn: true}" @click="signInSubmit" :disabled="btnDisabled">로그인</BasicButton>
        </div>
        <div class="btn-other">
            <RouterLink to="../routes/SignUp" class="btn-signup">계정 생성</RouterLink>
            <RouterLink to="../routes/SignFind" class="btn-find">비밀번호 찾기</RouterLink>
        </div>
    </div><!-- /.btn-box -->
</template>

<script>
import BasicButton from '~/components/basic/BasicButton'
import IconButton from '~/components/basic/IconButton'

import { api } from '~/api/api'

export default {
    components:{
        BasicButton,
        IconButton
    },
    data(){
        return{
            signInData:{
                empno:'',
                password:'',
                rememberMe:false
            },
            btnDisabled:true,
            valid:false,
            succesed:false
        }
    },
    watch:{
        signInData:{
            handler(e){
                e.empno !== "" && e.password !== "" ? (this.btnDisabled = false) : (this.btnDisabled = true)
            },
            deep: true
        }
    },
    methods:{
        signInSubmit(){
            // this.valid = true
            // console.log(
            //     this.signInData.nameSignIn,
            //     this.signInData.pwSignIn,
            //     this.succesed
            // )
            // if(this.valid){
            //     this.succesed = true
            //     this.$router.push('main')
            // }

            this.$store.dispatch('members/LOGIN', this.signInData).then(response => {
                console.log('signInSubmit response', response)
                this.valid = true
                this.$cookies.set("accessToken", response.access_token)
                this.$router.push('main')
            }).catch(error => {
                console.log('catch error', error)
                this.valid = false
                alert('INTERNAL SERVER ERROR') // etc: Server Shutdown
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.input-box{margin-top:48px;margin-bottom:40px;
    .input-box-signIn{
        input.form-control{padding:12px 40px;
            &:focus + label{filter: brightness(0%);}    
        }
        label{width:16px;height:16px;top:14px;left:13px;position:absolute;
            &[for="nameSignIn"]{background:url(~/assets/icon-user.png) no-repeat;background-size:100%;}
            &[for="pwSignIn"]{background:url(~/assets/icon-info-2.png) no-repeat;background-size:100%;}
        }
        &.was-validated{
            input:focus{box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0), 0 0 0px rgba(0, 0, 0, 0);}
        }
    }
    .keep{
        input[type="checkbox"]{display:none;
            & + label{width:100%;height:24px;top:0;left:0;position:relative;padding:0 0 0 32px;font-size:14px;color:$M-gray5;cursor:pointer;line-height:24px;
                &::before{position:absolute;content:'';width:24px;height:24px;border-radius:50%;top:0px;left:0;background:url(~/assets/ico-check-set.png);background-position:0px 0px;background-size:100%;}
            }
            &:checked+label{
                &::before{content:'';background-position:0px 24px;}
            }
        }        
    }
    button.btn.icon.close{width:16px;height:16px;background-color:$M-gray3;position:absolute;top:14px;right:12px;}
}
.btn-box-sign{
    .btn-sign-in{
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