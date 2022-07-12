<template>
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
      <button class="btn-info-detail"></button>     
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
    
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
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
</style>