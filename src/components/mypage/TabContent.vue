<template>
  <div class="input-box">
    <form >
        <div>
            <label for="nameSignUp">이름</label>
            <input type="text" id="nameSignUp" v-model="name" class="form-control"  required>
            <div class="invalid-feedback">이름을 다시 확인해주세요.</div>
        </div>
        <div>
            <label for="emailSignUp">회사 이메일</label>
            <div class="input-inside">
                <input type="text" id="emailSignUp" v-model="email" class="form-control"  required>
                <span class="inside-txt">@kbsmedia.co.kr</span>
            </div>
            <div class="invalid-feedback">등록되지 않은 이메일입니다.</div>
        </div>
        <div>
            <label for="contactSignUp">휴대전화<span>-없이 입력</span></label>
            <input type="number" id="contactSignUp" v-model="contact" class="form-control"  required>
            <div class="invalid-feedback">번호를 다시 확인해주세요.</div>
        </div>
        <div>
            <label for="idSignUp">사번<span>5자리 입력</span></label>
            <input type="number" id="idSignUp" v-model="id" class="form-control" required>
            <div class="invalid-feedback">등록되지 않은 사번입니다.</div>
        </div> 
        <div>
            <label for="pwSignUp">비밀번호<span>최소 4글자 이상 입력</span></label>
            <input type="password" id="pwSignUp" v-model="pw" class="form-control"  required>
            <div class="invalid-feedback">최소 4자리 이상 입력해주세요.</div>
        </div>    
        <div>
            <label for="pwConfirm">비밀번호<span>최소 4글자 이상 입력</span></label>
            <input type="password" id="pwConfirm" v-model="pwConfirm" class="form-control"  required>
            <div class="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
        </div> 
        <div class="btn-modify">
          <BasicButton :class="{primary : true, lg: true, mn:true}" type="submit" :disabled="btnDisabled">수정하기 </BasicButton>
        </div>   
    </form>
  </div>
</template>

<script>
import BasicButton from '~/components/basic/BasicButton'

export default {
  components:{
      BasicButton
  },  
  data(){
    return{
      name:'홍길동',
      email:'honggildong1234',
      contact:10123456,
      id:'12342',
      pw:'12341',
      pwConfirm:'12341',
      btnDisabled:false
    }
  }
}
</script>

<style>
.input-box{padding:24px 0 0 0;}
.btn-modify{margin-top:40px !important;}
</style>