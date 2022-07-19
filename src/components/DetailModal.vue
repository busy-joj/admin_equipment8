<template>
    <div>
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
            </div>
            <div class="modal-body">
                <dl>
                    <dt>제조사</dt>
                    <dd>삼성</dd>
                </dl>
                <dl>
                    <dt>장비종류</dt>
                    <dd>폰</dd>
                </dl>
                <dl>
                    <dt>OS</dt>
                    <dd>Android11</dd>
                </dl>
                <dl>
                    <dt>모델번호</dt>
                    <dd>SM-960N</dd>
                </dl>
                <dl>
                    <dt>시리얼 번호</dt>
                    <dd>R3CR10CZPOF</dd>
                </dl>
                <dl>
                    <dt>구입일(인수일)</dt>
                    <dd>2018. 11 .12.</dd>
                </dl>
                <dl>
                    <dt>비고</dt>
                    <dd>구입일 모름(인수일 기재) 본사에서 구입(라디오)</dd>
                </dl>
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-detail-close" data-bs-dismiss="modal" @click="$emit('close')">취소</button>

                <RouterLink to="../routes/RentApply">
                    <button type="button" class="btn btn-go-rent">대여</button>
                </RouterLink>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.detail-info{
    position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(56,56,56,.5);display:flex;align-items:center;justify-content:center;
    .modal-content{width:420px;min-height:476px;border:1px solid #d9d9d9;background:#fff;border-radius:4px;
        .modal-header{padding:24px 32px;border-bottom:.5px solid #e1e1e1; 
        .modal-title{font-size:16px;color:#242424;font-weight:600;padding:0;}
        }
        .modal-body{padding:24px 32px;
        dl{display:flex;font-size:14px;
            dt{width:30%;color:#242424;font-weight:400}
            dd{color:#a4a4a4;}
        }
        }
        .modal-footer{
        border-top:none;padding:0 32px 24px 32px;
            button{padding:9px 29px;font-size:14px;font-weight:bold;
                &.btn-detail-close{background:none;color:#3f3f3f;margin-right:8px;}
                &.btn-go-rent{background:$primary;color:#fff;}
            }
        }
    }
}
</style>