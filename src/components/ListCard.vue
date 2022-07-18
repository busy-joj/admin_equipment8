<template>
  <div class="inner">
    <div class="list-card">
      <div v-for="item in equipment" :key="item.model" class="list-card-item" :class="{'selected' : item.isSelected}" >
        <a href="#" @click="item.isSelected = !item.isSelected">
          <div class="item-info">
            <span class="model-name">{{ item.model }}</span>
            <span class="model-made">{{ item.os }}</span>
          </div>
          <div class="item-state">
            <div class="select">
              <span v-if="!item.isSelected" class="txt">선택</span>
              <span v-else class="txt">선택됨</span>
              <span class="icon"></span></div>
          </div>
        </a>
        <button class="btn-info-detail" @click="modal()"><span class="blind">상세보기</span></button>     
      </div>
    </div>
    <button class="btn btn-go-rent">대여신청<span class="selected-num">1</span></button> 
  </div>


  <div class="detail-info" id="exampleModal" :class="{'show' : isAddClass}">
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
        <button type="button" class="btn btn-detail-close" data-bs-dismiss="modal" @click="modal()">취소</button>
        <button type="button" class="btn btn-go-rent">대여</button>
      </div>
    </div>
  </div> 

</template>

<script>
export default {
  data(){
    return {
      equipment:[
        {
          model: 'Galaxy A9 Pro',
          os: 'Android 11',
          isSelected : false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false
        }
      ],
        isAddClass : false
    }
    
  },
  methods:{
    modal(){
      this.isAddClass = !this.isAddClass;
    }
  }
}
</script>

<style lang="scss" scoped>
.inner{position:relative;
  .list-card{display:flex;flex-wrap:wrap;justify-content:space-between;
    .list-card-item{border:1px solid #D9D9D9;border-radius:4px;position:relative;flex-basis:282px;cursor: pointer;margin-bottom:24px;
      a{display: block;text-decoration:none;color:#000;
        .item-info{height:92px;
          display:flex;flex-direction:column;padding:24px 16px;
          span{display: block;
            &.model-name{font-weight:600;}
          }
        }
        .item-state{height:56px;
          .select{font-size:14px;font-weight:600;height:100%;display:flex;align-items:center;justify-content:space-between;padding:0 16px;border-radius:0px 0px 4px 4px;
            .txt{color:$white;}
            .icon{width:24px;height:24px;background:url(~/assets/icon-arrow-r.png) no-repeat;background-size:100%;}
          }
        }
      }
      &:hover{border:1px solid #3F3F3F;box-shadow:0 16px 16px rgb(63 63 63 / 24%);transform:translateY(-16px);transition:all .3 ease;
        .select{background:#3f3f3f;}
      }
      &.selected{cursor: pointer;border:1px solid $primary;
        .item-state{
          .select{background:$primary;
                .icon{background:url(~/assets/icon-check.png) no-repeat;background-size:100%;}
          }
        }
        &:hover{box-shadow:0 16px 16px rgb(63 63 63 / 24%);transform:translateY(-16px);transition:all .3 ease;}
      }
      &.rented{opacity: .32;
        .btn-info-detail{cursor: inherit;}
      }
      .btn-info-detail{position:absolute;width:24px;height:24px;background:url(~/assets/icon-search.png);background-size:100%;top:20px;right:16px;border:none;}
    }
  }
  .btn-go-rent{
    position:absolute;top:-80px;right:0;background: $primary;padding:8px 30px 7px;color:#fff;font-weight:bold;border-radius:4px;
    .selected-num{margin-left:5px;}
  }
}

.detail-info{
  position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(56,56,56,.5);display:flex;align-items:center;justify-content:center;display:none;
  &.show{display:flex;}
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
      border-top:none;padding:0 0.75rem 0.75rem 0.75rem;
      button{padding:9px 29px;font-size:14px;font-weight:bold;
        &.btn-detail-close{background:none;color:#3f3f3f;margin-right:8px;}
        &.btn-go-rent{background:$primary;color:#fff;}
      }

    }
  }
}
</style>