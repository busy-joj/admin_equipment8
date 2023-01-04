<template>
    <div class="input-box">
        <!-- validate 실패시 클래스 was-validated:invalid 추가 -->
        <form @submit="signUpSubmit" class="input-box-signUp needs-validation">
            <div>
                <!-- <label for="nameSignUp">이름</label> -->
                <!-- <input type="text" v-model="signUpData.nameSignUp" id="nameSignUp" class="form-control"  required> -->
                <label for="user_name">이름</label>
                <input type="text" v-model="signUpData.user_name" id="user_name" class="form-control"  required>
                <div class="invalid-feedback">이름을 다시 확인해주세요.</div>
            </div>
            <div>
                <!-- <label for="emailSignUp">회사 이메일</label> -->
                <label for="user_email">회사 이메일</label>
                <div class="input-inside">
                    <!-- <input type="text" v-model="signUpData.emailSignUp" id="emailSignUp" class="form-control"  required> -->
                    <input type="text" v-model="signUpData.user_email" id="user_email" class="form-control" required>
                    <span class="inside-txt">@kbsmedia.co.kr</span>
                </div>
                <div class="invalid-feedback">등록되지 않은 이메일입니다.</div>
            </div>
            <div>
                <!-- <label for="contactSignUp">휴대전화<span>-없이 입력</span></label> -->
                <!-- <input type="number" v-model="signUpData.contactSignUp" id="contactSignUp" class="form-control"  required> -->
                <label for="user_contact">휴대전화<span>-없이 입력</span></label>
                <input type="text" 
                    v-model="signUpData.user_contact" 
                    id="user_contact" 
                    class="form-control" 
                    maxlength="11"
                    @keypress="handleInputHpno" 
                    @keydown="handleInputHpno" 
                    @keyup="handleInputHpno" 
                    required>
                <div class="invalid-feedback">번호를 다시 확인해주세요.</div>
            </div>
            <div>
                <!-- <label for="idSignUp">사번<span>5자리 입력</span></label> -->
                <!-- <input type="number" v-model="signUpData.idSignUp" id="idSignUp" class="form-control" required> -->
                <label for="user_empno">사번<span>5자리 입력</span></label>
                <input type="text" 
                    v-model="signUpData.user_empno" 
                    id="user_empno" 
                    class="form-control" 
                    maxlength="5" 
                    @keypress="handleInputEmpno" 
                    @keydown="handleInputEmpno" 
                    @keyup="handleInputEmpno" 
                    required>
                <div class="invalid-feedback">등록되지 않은 사번입니다.</div>
            </div> 
            <div>
                <!-- <label for="pwSignUp">비밀번호<span>최소 4글자 이상 입력</span></label> -->
                <!-- <input type="password" v-model="signUpData.pwSignUp" id="pwSignUp" class="form-control"  required> -->
                <label for="user_password">비밀번호<span>최소 4글자 이상 입력</span></label>
                <input type="password" v-model="signUpData.user_password" id="user_password" class="form-control"  required>
                <div class="invalid-feedback">최소 4자리 이상 입력해주세요.</div>
            </div>    
            <div>
                <!-- <label for="pwConfirm">비밀번호<span>최소 4글자 이상 입력</span></label> -->
                <!-- <input type="password" v-model="signUpData.pwConfirm" id="pwConfirm" class="form-control"  required> -->
                <label for="user_password_confirm">비밀번호<span>최소 4글자 이상 입력</span></label>
                <input type="password" v-model="signUpData.user_password_confirm" id="user_password_confirm" class="form-control"  required>
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
import { api } from '~/api/api'

export default {
    components:{
        BasicButton
    },
    data(){
        return{
            signUpData:{
                // nameSignUp:"",
                // emailSignUp:"",
                // contactSignUp:"",
                // idSignUp:"",
                // pwSignUp:"",
                // pwConfirm:""
                user_name:"",
                user_email:"",
                user_contact:"",
                user_empno:"",
                user_password:"",
                user_password_confirm:""
            },
            btnDisabled:true,
            valid:false,
            succesed:false,
            validation: {
                signUpData: {
                    isOk: false,
                    user_name: false,
                    user_email: false, 
                    user_contact: false, 
                    user_empno: false, 
                    user_password_confirm: false, 
                }
            }
        }
    },
    watch:{
        signUpData:{
            handler(e){
                // e.nameSignUp !== "" && e.emailSignUp !== ""  && e.contactSignUp !== "" && e.idSignUp !== "" && e.pwSignUp !== "" && e.pwConfirm !== "" ? (this.btnDisabled = false) : (this.btnDisabled = true)
                e.user_name !== "" && e.user_email !== ""  && e.user_contact !== "" && e.user_empno !== "" && e.user_password !== "" && e.user_password_confirm !== "" ? (this.btnDisabled = false) : (this.btnDisabled = true)
            },
            deep: true
        }
    },
    methods:{
        // signUpSubmit(){
        //     console.log(
        //         this.signUpData.nameSignUp,
        //         this.signUpData.emailSignUp,
        //         this.signUpData.contactSignUp,
        //         this.signUpData.idSignUp,
        //         this.signUpData.pwSignUp,
        //         this.signUpData.pwConfirm,
        //         this.succesed
        //     )
        //     if(this.valid){
        //         this.succesed = true
        //         this.$router.push('Succesed')
        //     }
        // }

        isInputOnlyNumber(event) {
            event = (event) ? event : window.event;
            var charCode = (event.which) ? event.which : event.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                event.preventDefault()
                return false
            } else {
                return true
            }
        },

        // input type number 사용 시 input a -> input b 이동하여 key 입력하는 순간 input a의 맨 앞 한 글자가 삭제되는 버그 발생
        handleInputHpno(event) {
            event = (event) ? event : window.event;
            if (this.isInputOnlyNumber(event)) {
                if (event.target.value.length > event.target.maxLength) {
                    event.preventDefault()
                    event.target.value = event.target.value.slice(0, event.target.maxLength)
                }
            }
        },

        handleInputEmpno(event) {
            event = (event) ? event : window.event;
            if (this.isInputOnlyNumber(event)) {
                if (event.target.value.length > event.target.maxLength) {
                    event.preventDefault()
                    event.target.value = event.target.value.slice(0, event.target.maxLength)
                }
            }
        },

        checkSignUpDataBeforeSubmit() {
            this.checkUserName()
            this.checkUserEmail()
            this.checkUserContact()
            this.checkUserEmpNo()
            this.checkUserPassword()

            this.validation.signUpData.isOk = this.validation.signUpData.user_name 
                                                && this.validation.signUpData.user_email
                                                && this.validation.signUpData.user_contact
                                                && this.validation.signUpData.user_empno
                                                && this.validation.signUpData.user_password
                                                && this.validation.signUpData.user_password_confirm

            return this.validation.signUpData.isOk
        },

        checkUserName() {
            // 이름
            if (this.signUpData.user_name) {
                this.validation.signUpData.user_name = true
            } else {
                this.validation.signUpData.user_name = false
                console.log('check 이름')
            }
        },

        checkUserEmail() {
            // 회사 이메일
            if (this.signUpData.user_email) {
                const patternPhone = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
                if (patternPhone.test(this.signUpData.user_email + '@kbsmedia.co.kr')) {
                    this.validation.signUpData.user_email = true
                } else {
                    this.validation.signUpData.user_email = false
                    console.log('check 회사 이메일 정규식')
                }
                this.validation.signUpData.user_email = true
            } else {
                this.validation.signUpData.user_email = false
                console.log('check 회사 이메일')
            }
        },

        checkUserContact() {
            // 휴대전화
            if (this.signUpData.user_contact) {
                const patternPhone = /01[016789][^0][0-9]{2,3}[0-9]{3,4}/
                if (patternPhone.test(this.signUpData.user_contact)) {
                    this.validation.signUpData.user_contact = true
                } else {
                    this.validation.signUpData.user_contact = false
                    console.log('check 휴대전화 정규식')
                }
            } else {
                this.validation.signUpData.user_contact = false
                console.log('check 휴대전화')
            }
        },

        checkUserEmpNo() {
            // 사번
            if (this.signUpData.user_empno) {
                if (this.signUpData.user_empno.length == 5) {
                    this.validation.signUpData.user_empno = true
                } else {
                    this.validation.signUpData.user_empno = false
                    console.log('check 사번 길이')
                }
            } else {
                this.validation.signUpData.user_empno = false
                console.log('check 사번')
            }
        },

        checkUserPassword() {
            // 비밀번호
            if (this.signUpData.user_password) {
                if (this.signUpData.user_password.length >= 4) {
                    this.validation.signUpData.user_password = true
                } else {
                    this.validation.signUpData.user_password = false
                    console.log('check 비밀번호 길이')
                }
            } else {
                this.validation.signUpData.user_password = false
                console.log('check 비밀번호')
            }
            // 비밀번호 확인
            if (this.signUpData.user_password_confirm) {
                if (this.signUpData.user_password_confirm.length >= 4) {
                    this.validation.signUpData.user_password_confirm = true
                } else {
                    this.validation.signUpData.user_password_confirm = false
                    console.log('check 비밀번호 확인 길이')
                }
            } else {
                this.validation.signUpData.user_password_confirm = false
                console.log('check 비밀번호 확인')
            }
            // 비밀번호 && 비밀번호 확인
            if (this.signUpData.user_password === this.signUpData.user_password_confirm) {
                this.validation.signUpData.user_password = true
                this.validation.signUpData.user_password_confirm = true
            } else {
                this.validation.signUpData.user_password = false
                this.validation.signUpData.user_password_confirm = false
                console.log('check 비밀번호 && 비밀번호 확인')
            }
        },

        makeSignUpData() {
            const copiedData = Object.assign({}, this.signUpData)
            copiedData.user_email = copiedData.user_email + '@kbsmedia.co.kr'
            return copiedData
        },

        signUpSubmit() {
            this.btnDisabled = true
            if (this.checkSignUpDataBeforeSubmit()) {
                const data = this.makeSignUpData()
                api.signUp(data).then(response => {
                    console.log('response', response)
                    if (response) {
                        // 계정 생성
                        if (response.status == 201) { // CREATED
                            console.log('response.data', response.data)
                            console.log('response.headers', response.headers)

                            alert('계정 등록이 완료되었습니다.')

                            const signInData = {
                                empno: this.signUpData.user_empno,
                                password: this.signUpData.user_password
                            }

                            this.signInSubmit(signInData)

                            console.log('response.data', this.signUpData.user_empno)
                            console.log('response.data', this.signUpData.user_password)
                            

                        }

                        // 계정 생성
                        if (response.status == 200) {
                            if (response.data.isSuccessful) {
                                console.log('response.data.isSuccessful == true')
                            } else {
                                console.log('response.data.isSuccessful == false')
                                if (response.data.error) {
                                    console.log('response.data.error', response.data.error)
                                    if (response.data.error.message == 'User already exist') {
                                        alert('이미 등록된 사용자입니다.')
                                    }
                                }
                            }
                        }

                        // if (response.status == 200) {
                        //     if (response.data.isSuccessful) {
                        //         console.log('response.data.isSuccessful == true')
                        //     } else {
                        //         console.log('response.data.isSuccessful == false')
                        //     }
                        // }
                        // else if (response.status == 400) {
                        //     if (response.data.error) {
                        //         console.log('response.data.error', response.data.error)
                        //         console.log('response.data.error.message', response.data.error.message)
                        //     }

                        //     if (response.data.errors) {
                        //         response.data.errors.forEach(function(item) {
                        //             console.log(item);
                        //         });
                        //     }
                        // }

                    } else {
                        this.valid = false

                        console.log('else response', response)

                        if (response.data.error) {
                            // 이미 등록된 사용자입니다.

                            console.log('response.data.error', response.data.error)
                            console.log('response.data.error.message', response.data.error.message)

                            if (response.data.error.message == 'User already exist') {
                                alert('이미 등록된 사용자입니다.') // etc: Server Shutdown, java.sql.SQLSyntaxErrorException
                            }
                            // 확인되지 않은 사용자입니다.
                        }

                        console.log('TODO 오류 발생') // etc: Server Shutdown, java.sql.SQLSyntaxErrorException
                    }

                    this.btnDisabled = false

                }).catch(error => {
                    console.log('catch error', error)
                    this.valid = false
                    alert('TODO 예외 발생')
                    this.btnDisabled = false
                })
            }
        },

        signInSubmit(signInData) {
            api.signIn(signInData).then(response => {
                console.log(response)
                if (response && response.status == 200) {
                    if (response.data) {
                        if (response.data.access_token) {

                            console.log('response.data.access_token', response.data.access_token)

                            this.valid = true
                            this.$cookies.set("accessToken", response.data.access_token); // 1일 후에 만료되는 jwt 이름으로 jwt value 저장

                            const a = this.$cookies.get("accessToken")

                            console.log('a', a)

                            this.$router.push('main')
                        } 
                        else { 
                            this.valid = false
                            if (response.data.error) {
                                if (response.data.error.field == 'empno') {
                                    alert('등록되지 않은 사용자입니다. 아래 \'계정 등록\' 버튼을 눌러 계정을 등록해주세요.')
                                } else if (response.data.error.field == 'password') {
                                    alert('비밀번호가 올바르지 않습니다.')
                                }
                            }
                        }
                    } else {
                        this.valid = false
                    }
                } else {
                    console.log('response', response)
                    this.valid = false
                    alert('TODO 오류 발생') // etc: Server Shutdown
                }
            }).catch(error => {
                console.log('catch error', error)
                this.valid = false
                alert('TODO 예외 발생')
            })
        }

    }
}
</script>

<style lang="scss" scoped>
.input-box{margin:40px 0 0 0;
    .btn{font-weight:normal;font-size:16px;line-height:14px;}
}
</style>