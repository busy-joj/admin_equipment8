<template>
<!-- 데이터 작업 후 ItemCard 컴포넌트 작업할 것 2022-07-20 -->
  <div class="inner">
    <div class="list-card">
      <div v-for="( item, index ) in equipment" :key="item.model" class="list-card-item" :class="{'selected' : item.isSelected, 'rented' : item.isRented}">
        <a href="#" @click.capture.stop="select($event, index)">
          <div class="item-info">
            <span class="model-name">{{ item.model }}</span>
            <span class="model-made">{{ item.os }}</span>
          </div>
          <div class="item-state">
            <div v-if="item.isRented" class="rented">
              <span class="icon"></span>
              <span class="txt">김지현</span>
              <span class="date">2022.06.23</span>
            </div>
            <div v-else class="select">
              <span v-if="!item.isSelected" class="txt">선택</span>
              <span v-else class="txt">선택됨</span>
              <span class="icon"></span>
            </div>
          </div>
        </a>
        <div class="btn-info-detail">
          <IconButton :class="{search : true}" @click.stop="showModal = true"><span class="blind">상세보기</span></IconButton>
        </div>
      </div>
    </div>
    
    <RouterLink to="../routes/RentApply" class="btn-go-rent">
      <BasicButton :class="{primary : true, mn: true}">대여신청<span class="selected-num">1</span></BasicButton>
    </RouterLink>
  </div>

  <DetailModal v-if="showModal" class="detail-info" @closeModal="showModal = false"/>
</template>

<script>
import DetailModal from '~/components/DetailModal'
import BasicButton from '~/components/basic/BasicButton'
import IconButton from '~/components/basic/IconButton'

export default {
  components:{
    DetailModal,
    BasicButton,
    IconButton
  },
  data(){
    return {
      equipment:[
        {
          model: 'Galaxy A9 Pro',
          os: 'Android 11',
          isSelected : false,
          isRented: true
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false,
          isRented: false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false,
          isRented: false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false,
          isRented: false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false,
          isRented: false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false,
          isRented: false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false,
          isRented: false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false,
          isRented: false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false,
          isRented: false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false,
          isRented: false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false,
          isRented: false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false,
          isRented: false
        },
        {
          model: 'Galaxy A10 Pro',
          os: 'Android 112',
          isSelected : false,
          isRented: false
        }
      ],
        showModal : false
    }
  },
  methods:{
    select(e, i){
      e.preventDefault();
      this.equipment[i].isSelected = !this.equipment[i].isSelected 
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
          .rented{font-size:14px;font-weight:600;height:100%;display:flex;align-items:center;justify-content:space-between;padding:0 16px;border-radius:0px 0px 4px 4px;
            .icon{width:24px;height:24px;border-radius:50%;background-color:#242424;}
            .txt{color:#242424;}
            .date{width:160px;text-align:right;}
            
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
      &.rented{opacity: .32;pointer-events: none;
        .btn-info-detail{cursor: inherit;}
      }
      .btn-info-detail{position:absolute;top:20px;right:16px;}
    }
  }
  .btn-go-rent{
    position:absolute;top:-80px;right:0;
    .selected-num{margin-left:5px;}
  }
}
</style>