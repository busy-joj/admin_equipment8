<template>
    <div class="detail-info">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    {{ rowInfo.equipment }}
                </h5>
            </div>
            <div class="modal-body input-box">
                <form action="">
                    <div class="item md">
                        <label for="">장비명</label>
                        <input type="text" class="form-control" v-model="rowInfo.equipment">
                    </div>
                    <div class="item md">
                        <label for="">OS</label>
                        <input type="text" class="form-control" v-model="rowInfo.OS">
                    </div>
                    <div class="item md">
                        <label for="">장비종류</label>
                        <input type="text" class="form-control" v-model="rowInfo.OS">
                    </div>
                    <div class="item md">
                        <label for="">모델번호</label>
                        <input type="text" class="form-control" v-model="rowInfo.modelNo">
                    </div>
                    <div class="item md">
                        <label for="">시리얼번호</label>
                        <input type="text" class="form-control" v-model="rowInfo.serialNo">
                    </div>
                    <div class="item md">
                        <label for="">wifi MAC 주소</label>
                        <input type="text" class="form-control" v-model="rowInfo.OS">
                    </div>
                    <div class="item md">
                        <label for="">제조사</label>
                        <input type="text" class="form-control" v-model="rowInfo.OS">
                    </div>
                    <div class="item md">
                        <InputDate>
                            <template v-slot:tit>
                                <span class="txt">구입일&#40;인수일&#41;</span>
                            </template>
                            <template v-slot:date>
                                <Datepicker />
                            </template>
                        </InputDate>
                    </div>
                    <div class="item">
                        <label for="">비고</label>
                        <input type="text" class="form-control" v-model="rowInfo.OS">
                    </div>
                </form>
            </div>
            <div class="modal-bottom">
                <BasicButton @click="handleSubmit" :class="{primary : true, md:true , mn:true}" type="submit" :disabled="btnDisabled"><span class="icon"></span>수정하기</BasicButton>
                <BasicButton :class="{white : true, md:true, mn:true}" @click="$emit('closeModal')">닫기</BasicButton>
            </div>
        </div>
    </div>

</template>

<script>
import Datepicker from "vue3-datepicker";
import InputDate from '~/components/basic/InputDate'
import BasicButton from '~/components/basic/BasicButton'

export default {
    components:{
        Datepicker,
        InputDate,
        BasicButton
    },
    data(){
        return{
            btnDisabled:true
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
    },
    methods:{
        handleSubmit() {
            console.log('TODO')
        }
    },
    watch:{
        rowInfo:{
            deep:true,
            handler(){
                this.btnDisabled = false
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>
.detail-info{
    position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.32);display:flex;align-items:center;justify-content:center;z-index:80;
    .modal-content{width:762px;min-height:636px;border:1px solid $M-gray3;background:#fff;border-radius:4px;padding:40px;
        .modal-header{margin-bottom:32px;
            .modal-title{font-size:32px;color:$M-gray6;font-weight:600;padding:0;line-height:44px;}
        }
        .modal-body{margin-bottom:28px;
            form{flex-direction:row;align-content:space-between;justify-content:space-between;flex-wrap:wrap;
                .item{width: 100%;
                    &.md{width:48%;}
                }
            }
        }
        .modal-bottom{display:flex;gap:20px;justify-content:space-between;}
    }
}
</style>