<template>
    <div class="input-box">
        <form @submit="signUpSubmit" class="input-box-signUp">
            <div>
                <label for="nameSignUp">이름</label>
                <input type="text" v-model="signUpData.nameSignUp" id="nameSignUp" class="form-control"  required>
            </div>
            <div>
                <label for="emailSignUp">회사 이메일</label>
                <input type="email" v-model="signUpData.emailSignUp" id="emailSignUp" class="form-control"  required>
            </div>
            <div>
                <label for="contactSignUp">휴대전화<span>-없이 입력</span></label>
                <input type="number" v-model="signUpData.contactSignUp" id="contactSignUp" class="form-control"  required>
            </div>
            <div>
                <label for="idSignUp">사번<span>5자리 입력</span></label>
                <input type="number" v-model="signUpData.idSignUp" id="idSignUp" class="form-control" required>
            </div> 
            <div>
                <label for="pwSignUp">비밀번호<span>최소 4글자 이상 입력</span></label>
                <input type="password" v-model="signUpData.pwSignUp" id="pwSignUp" class="form-control"  required>
            </div>    
            <div>
                <label for="pwConfirm">비밀번호<span>최소 4글자 이상 입력</span></label>
                <input type="password" v-model="signUpData.pwConfirm" id="pwConfirm" class="form-control"  required>
            </div>

            <div class="btn-sign-up">
                <BasicButton :class="{primary : true, lg: true, mn:true}" type="submit" :disabled="btnDisabled">계정 등록</BasicButton>
            </div>
        </form>
        <!-- /.input-signUp> -->
    </div><!-- /.input-box -->
</template>

<script>
import BasicButton from '~/components/basic/BasicButton'

export default {
    components:{
        BasicButton
    },
    data(){
        return{
            signUpData:{
                nameSignUp:"",
                emailSignUp:"",
                contactSignUp:"",
                idSignUp:"",
                pwSignUp:"",
                pwConfirm:""
            },
            btnDisabled:true
        }
    },
    watch:{
        signUpData:{
            handler(e){
                e.nameSignUp !== "" && e.emailSignUp !== ""  && e.contactSignUp !== "" && e.idSignUp !== "" && e.pwSignUp !== "" && e.pwConfirm !== "" ? (this.btnDisabled = false) : (this.btnDisabled = true)
            },
            deep: true
        }
    },
    methods:{
        signUpSubmit(){
            console.log(
                this.signUpData.nameSignUp,
                this.signUpData.emailSignUp,
                this.signUpData.contactSignUp,
                this.signUpData.idSignUp,
                this.signUpData.pwSignUp,
                this.signUpData.pwConfirm
            )
        }
    }
}
</script>

<style lang="scss" scoped>
.input-box{margin:40px 0 0 0;
    div{position:relative;margin-top:24px;
        &:first-child{margin-top:0px;}
        &.on::before{filter: brightness(0%);}
        input.form-control{padding:12px 16px !important;font-size:14px;color:$M-black;height:42px;
            &::placeholder{color:$M-gray4}
            &:focus{
                border-color: $primary;
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0), 0 0 0px rgba(0, 0, 0, 0);
            }
        }
        label{display:flex;font-size:14px;color:$M-gray5;margin-bottom:8px;justify-content: space-between;
            span{color:$M-gray4;}
        }
        &.btn-sign-up{margin:40px 0 0 0;
            .btn{font-weight:normal;font-size:16px;line-height:14px;}
        }
    }
}
</style>