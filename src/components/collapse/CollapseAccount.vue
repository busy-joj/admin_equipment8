<template>
  <div>
    <div class="input-box">
      <h3>회원 정보 수정</h3>
      <div class="list-item">
        <form action="">
            <div class="item">
                <label for="">이름</label>
                <input type="text" id=""  class="form-control" v-model="rowInfo.equipment">
            </div>
            <div class="item">
                <label for="">사번</label>
                <input type="text" id=""  class="form-control" v-model="rowInfo.equipment">
            </div>
            <div class="item">
                <label for="">이메일</label>
                <input type="text" id=""  class="form-control" v-model="rowInfo.equipment">
            </div>
            <div class="item">
                <label for="">휴대전화</label>
                <input type="text" id=""  class="form-control" v-model="rowInfo.equipment">
            </div>
            <div class="item">
                <label for="">권리자권한</label>
                <select class="form-select" aria-label="example" required>
                    <option value="" disabled selected>권한 여부를 선택해주세요</option> <!-- placeholder  -->
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="item">
                <label for="">비고</label>
                <textarea cols="50" rows="5" class="form-control"></textarea>
            </div>
        </form>
      </div>            
    </div>
  </div>
</template>

<script>
export default {
    components:{},
    data(){
        return{
            succeed:false,
        }
    },
    props:{
        rowInfo:{
            type:Object,
            default(){
                return {
                    no: '', 
                    equipment: '', // 장비명
                    OS: '', // OS
                    rentalStatusText: '', // 제조사
                    modelNo: '', // 모델 번호
                    serialNo: '', // 시리얼 번호
                    start:''
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
h3{margin-bottom:24px;}

.list-item{
    form{display:flex;flex-direction:row;gap:24px;flex-wrap:wrap;justify-content:space-between;
        .item{width:100%;margin:0;
            &.md{width:280px;}
            .form-select{
                option:disabled{display:none;}
            }
        }
    }
}
</style> 