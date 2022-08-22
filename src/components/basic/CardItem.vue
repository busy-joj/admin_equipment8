<template>
  <div class="list-card-item" :class="{'selected' : equipment.isSelected, 'rented' : equipment.isRented}" @mouseover="hover=true" @mouseleave="hover=false">
    <a href="#">
      <div class="item-info">
        <span class="model-name">{{ equipment.model }}</span>
        <span class="model-made">{{ equipment.os }}</span>
      </div>
      <div class="item-state">
        <div v-if="equipment.isRented" class="rented">
          <span class="icon"></span>
          <span class="txt">김지현</span>
          <span class="date">2022.06.23</span>
        </div>
        <div v-else class="select">
          <span v-if="!equipment.isSelected" class="txt">선택하기</span>
          <span v-else-if="equipment.isSelected && hover" class="txt">취소하기</span>
          <span v-else class="txt">선택완료</span>
          <span class="icon"></span>
        </div>
      </div>
    </a>
    <div class="btn-info-detail">
      <IconButton @click.stop="getEquipmentInfo(equipment)"></IconButton>
    </div>
  </div>
</template>

<script>
import IconButton from '~/components/basic/IconButton'

export default {
  components:{
    IconButton
  },
  data(){
    return {
      showModal:false,
      hover:false
    }
  },
  props:{
    equipment:{
        type:Object,
        default(){
            return {
                model:'model',
                os: 'os',
                isSelected:false,
                isRented:false
            }
        }
    }
  },
  methods:{
    getEquipmentInfo(equipment){
      this.$emit('getEquipmentInfo',equipment)
      this.$emit('showModal')
    }
  }
}
</script>

<style lang="scss" scoped>
.list-card-item{border:1px solid $M-gray3;border-radius:4px;position:relative;flex-basis:282px;cursor: pointer;box-shadow:4px 4px 10px rgb(0 0 0 / 4%);
  a{display: block;text-decoration:none;color:$M-gray6;
    .item-info{height:92px;
      display:flex;flex-direction:column;padding:24px 16px;
      span{display: block;
        &.model-name{font-weight:600;margin-bottom:7px;}
      }
    }
    .item-state{height:56px;
      .select{font-size:14px;font-weight:600;height:100%;display:flex;align-items:center;justify-content:space-between;padding:0 16px;border-radius:0px 0px 4px 4px;
        .txt{color:$white;visibility:hidden;}
        .icon{width:24px;height:24px;background:url(~/assets/icon-check.png) no-repeat;background-size:100%;visibility:hidden;}
      }
      .rented{font-size:14px;font-weight:600;height:100%;display:flex;align-items:center;justify-content:space-between;margin:0 16px;border-radius:0px 0px 4px 4px;border-top:1px solid $M-gray3;
        .icon{width:24px;height:24px;border-radius:50%;background-color:$M-gray6;}
        .txt{color:$M-gray6;}
        .date{width:160px;text-align:right;}
      }
    }
  }
  &:hover{border:1px solid $M-primary;box-shadow:4px 4px 10px rgb(44 141 255 / 16%);
    .item-state{
      .select{background:$M-primary;
        .txt{visibility:visible;}
        .icon{visibility:visible;}
      }
    }
  }
  &.selected{cursor: pointer;border:1px solid $primary;box-shadow:4px 4px 10px rgb(44 141 255 / 16%);
    .item-state{
      .select{background:#fff;
        .txt{color:$M-primary;visibility:visible;}
        .icon{background:url(~/assets/icon-bs-check.png) no-repeat;background-size:100%;visibility:visible;}
      }
    }
    &:hover{box-shadow:4px 4px 10px rgb(0 0 0 / 4%);border:1px solid $M-gray4;
      .item-state{
        .select{background:$M-gray4;
          .txt{color:#fff;visibility:visible;}
          .icon{background:url(~/assets/icon-close.png) no-repeat;background-size:100%;visibility:visible;}
        }
      }
    }
  }
  &.rented{opacity: .32;pointer-events: none;
    .btn-info-detail{cursor: inherit;}
  }
  .btn-info-detail{position:absolute;top:24px;right:16px;letter-spacing:15px;height:18px;background:url(~/assets/icon-more.png);background-size:100%;background-position:center;}
}

.apply{
  .list-card-item{
    &.selected{cursor: pointer;border:1px solid $M-gray4;box-shadow:4px 4px 10px rgb(0 0 0 / 4%);
      .item-state{
        .select{background:#fff;
          .txt{visibility:hidden;}
          .icon{visibility:hidden;}
        }
      }
    }
  }
  .btn-info-detail{width:26px;height:26px;background:url(~/assets/icon-close.png);background-color:#a4a4a4;border-radius:50%;background-size:90%;background-position:center;}
}
</style>