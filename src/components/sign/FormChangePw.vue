<template>
    <div class="input-box">
        <form @submit="changeSubmit" class="input-box-change needs-validation">
            <div>
                <label for="nowPw">현재 비밀번호</label>
                <input type="password" v-model="changePwData.nowPw" id="nowPw" class="form-control"  required>
            </div>    
            <div>
                <label for="newPw">새 비밀번호<span>최소 4글자 이상 입력</span></label>
                <input type="password" v-model="changePwData.newPw" id="newPw" class="form-control"  required>
            </div>
            <div>
                <label for="newPwConfirm">비밀번호 재확인<span>최소 4글자 이상 입력</span></label>
                <input type="password" v-model="changePwData.newPwConfirm" id="newPwConfirm" class="form-control"  required>
            </div>
            <div class="btn-change">
                <BasicButton :class="{primary : true, lg: true, mn:true}" type="submit" :disabled="btnDisabled">변경</BasicButton>
            </div>
        </form>
        <!-- /.input-box-change> -->
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
            changePwData:{
                nowPw:"",
                newPw:"",
                newPwConfirm:"",
            },
            btnDisabled:true,
            valid:false,
            succesed:false
        }
    },
    watch:{
        changePwData:{
            handler(e){
                e.nowPw !== "" && e.newPw !== ""  && e.newPwConfirm !== "" ? (this.btnDisabled = false) : (this.btnDisabled = true)
            },
            deep: true
        }
    },
    methods:{
        changeSubmit(){
            this.valid = true
            console.log(
                this.changePwData.nowPw,
                this.changePwData.newPw,
                this.changePwData.newPwConfirm
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
    &.btn-change{margin:40px 0 0 0;}
}

</style>