<template>
    <div class="input-box">
        <form @submit="signUpSubmit" class="input-box-signUp needs-validation" :class="{ 'was-validated': valid}">
            <div>
                <label for="nameSignUp">이름</label>
                <input type="text" v-model="signUpData.nameSignUp" id="nameSignUp" class="form-control"  required>
                <div class="invalid-feedback">이름을 다시 확인해주세요.</div>
            </div>
            <div>
                <label for="emailSignUp">회사 이메일</label>
                <div class="input-inside">
                    <input type="text" v-model="signUpData.emailSignUp" id="emailSignUp" class="form-control"  required>
                    <span class="inside-txt">@kbsmedia.co.kr</span>
                </div>
                <div class="invalid-feedback">등록되지 않은 이메일입니다.</div>
            </div>
            <div>
                <label for="contactSignUp">휴대전화<span>-없이 입력</span></label>
                <input type="number" v-model="signUpData.contactSignUp" id="contactSignUp" class="form-control"  required>
                <div class="invalid-feedback">번호를 다시 확인해주세요.</div>
            </div>
            <div>
                <label for="idSignUp">사번<span>5자리 입력</span></label>
                <input type="number" v-model="signUpData.idSignUp" id="idSignUp" class="form-control" required>
                <div class="invalid-feedback">등록되지 않은 사번입니다.</div>
            </div> 
            <div>
                <label for="pwSignUp">비밀번호<span>최소 4글자 이상 입력</span></label>
                <input type="password" v-model="signUpData.pwSignUp" id="pwSignUp" class="form-control"  required>
                <div class="invalid-feedback">최소 4자리 이상 입력해주세요.</div>
            </div>    
            <div>
                <label for="pwConfirm">비밀번호<span>최소 4글자 이상 입력</span></label>
                <input type="password" v-model="signUpData.pwConfirm" id="pwConfirm" class="form-control"  required>
                <div class="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
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
            btnDisabled:true,
            valid:false,
            succesed:false

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
        validate(){

        },
        signUpSubmit(){
            console.log(
                this.signUpData.nameSignUp,
                this.signUpData.emailSignUp,
                this.signUpData.contactSignUp,
                this.signUpData.idSignUp,
                this.signUpData.pwSignUp,
                this.signUpData.pwConfirm,
                this.succesed
            )
            if(this.valid){
                this.succesed = true
                this.$router.push('Succesed')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.input-box{margin:40px 0 0 0;
    .btn-sign-up{margin:40px 0 0 0;
        .btn{font-weight:normal;font-size:16px;line-height:14px;}
    }
}
</style>