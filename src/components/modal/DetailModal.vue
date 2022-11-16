<template>
    <div class="detail-info">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    {{ equipmentInfo.model }}
                </h5>
            </div>
            <div class="modal-body">
                <dl>
                    <dt>제조사</dt>
                    <dd>{{ equipmentInfo.manufacturer }}</dd>
                </dl>
                <dl>
                    <dt>OS</dt>
                    <dd>{{ equipmentInfo.os }}</dd>
                </dl>
                <dl>
                    <dt>장비종류</dt>
                    <dd>{{ equipmentInfo.type }}</dd>
                </dl>
                <dl>
                    <dt>모델번호</dt>
                    <dd>{{ equipmentInfo.modelNumber }}</dd>
                </dl>
                <dl>
                    <dt>시리얼 번호</dt>
                    <dd>{{ equipmentInfo.serialNumber }}</dd>
                </dl>
                <dl>
                    <dt>구입일(인수일)</dt>
                    <dd>{{ equipmentInfo.purchaseDate }}</dd>
                </dl>
                <dl>
                    <dt>비고</dt>
                    <dd>{{ equipmentInfo.description }}</dd>
                </dl>
            </div>
            <div class="modal-footer">
                <!-- 클릭시 applyList[]에 담기도록 작업 필요 -->
                <BasicButton @click="handleSubmit" :class="{primary : true, lg:true , 'btn-cart-submit':true}" type="submit"><span class="icon"></span>신청하기</BasicButton>
                <BasicButton :class="{white : true, lg:true}" @click="$emit('closeModal')">닫기</BasicButton>
            </div>
        </div>
    </div>

</template>

<script>
import BasicButton from '~/components/basic/BasicButton'
export default {
    components:{
        BasicButton
    },
    data(){
        return{}
    },
    props:{
        equipmentInfo:{
            type:Object,
            default(){
                return {
                    id: '0', 
                    name: '', // 기기명
                    manufacturer: '', // 제조사
                    os: '', // OS
                    type: '', // 장비종류
                    modelNumber: '', // 모델 번호
                    serialNumber: '', // 시리얼 번호
                    purchaseDate: '', // 구입일(인수일)
                    description: '', // 비고 : 구입일 모름(인수일 기재) 본사에서 구입(라디오)
                    user: '',
                    date: '',
                    isSelected: false, 
                    isRented: false,
                    endRentalDate: '',
                    rentalUser: ''
                }
            }
        }
    },
    methods:{
        handleSubmit() {
            console.log('TODO')
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
        .modal-body{display: flex;flex-wrap:wrap;gap:0px;justify-content:space-between;margin-bottom:48px;
            dl{min-height:52px;margin:0;display:flex;font-size:14px;width:49%;flex-direction:column;
                dt{margin:0;font-weight:400;color:$M-gray4;margin-bottom:16px;}
                dd{margin:0;color:$M-black;}
            }
        }
        .modal-footer{border-top:none;
            .btn-cart-submit{display:flex;align-items:center;justify-content:center;margin-bottom:16px;
                .icon{display:inline-block;width:24px;height:24px;background:url(~/assets/icon-cart.png) center/100% no-repeat;margin-right:8px;}
            }
        }
    }
}
</style>