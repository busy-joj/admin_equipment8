<template>
    <div class="input-box">
        <form @submit="FindSubmit" class="input-box-find">
            <div>
                <label for="userName">이름</label>
                <input type="text" v-model="FindData.userName" id="userName" class="form-control"  required>
            </div>
            <div>
                <label for="userName">회사 이메일</label>
                <div class="input-inside">
                    <input type="text" v-model="FindData.userEmail" id="userName" class="form-control"  required>
                    <span class="inside-txt">@kbsmedia.co.kr</span>
                </div>
            </div>
            <div>
                <label for="userContact">휴대전화<span>-없이 입력</span></label>
                <input type="number" v-model="FindData.userContact" id="userContact" class="form-control"  required>
            </div>
            <div>
                <label for="userId">사번<span>5자리 입력</span></label>
                <input type="number" v-model="FindData.userId" id="userId" class="form-control" required>
            </div> 

            <div class="btn-find">
                <BasicButton :class="{primary : true, lg: true, mn:true}" type="submit" :disabled="btnDisabled">계정 비밀번호 변경하기</BasicButton>
            </div>
        </form>
        <div class="error-msg" v-if="error && !succesed">
            <span>등록 정보가 일치하지 않습니다. 다시 한번 확인해주세요.</span>
        </div>
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
            FindData:{
                userName:"",
                userEmail:"",
                userContact:"",
                userId:""
            },
            btnDisabled:true,
            succesed:false
        }
    },
    watch:{
        FindData:{
            handler(e){
                e.userName !== "" && e.userEmail !== ""  && e.userContact !== "" && e.userId !== "" ? (this.btnDisabled = false) : (this.btnDisabled = true)
            },
            deep: true
        }
    },
    methods:{
        FindSubmit(){
            console.log(
                this.FindData.userName,
                this.FindData.userEmail,
                this.FindData.userContact,
                this.FindData.userId,
                this.succesed
            )
            //성공했을 경우
            if(this.succesed){
                this.$router.push('ChangePw')
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
.input-box{margin-top:40px;
    .btn-find{margin-top:40px;}
    .error-msg{text-align: center;}
}
</style>