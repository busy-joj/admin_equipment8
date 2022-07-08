<template>
  <div class="list-card">
    <ul>
      <!-- 대여가능 .normal / 선택함 .selected / 대여불가 .rented -->
      <li class="list-card-item normal">
        <div class="item-info">
          <span class="model-name">Galaxy A9 Pro</span>
          <span class="model-made">Android 11</span>
        </div>
        <div class="item-state">
          <div class="select"><span class="txt">선택</span><span class="icon"></span></div>
        </div>
        <button class="btn-info-detail"></button>        
      </li>
      <li class="list-card-item normal">
        <div class="item-info">
          <span class="model-name">Galaxy A9 Pro</span>
          <span class="model-made">Android 11</span>
        </div>
        <div class="item-state">
          <div class="select"><span class="txt">선택</span><span class="icon"></span></div>
        </div>
        <button class="btn-info-detail"></button>        
      </li>
      <li class="list-card-item normal">
        <div class="item-info">
          <span class="model-name">Galaxy A9 Pro</span>
          <span class="model-made">Android 11</span>
        </div>
        <div class="item-state">
          <div class="select"><span class="txt">선택</span><span class="icon"></span></div>
        </div>
        <button class="btn-info-detail"></button>        
      </li>
      <li class="list-card-item normal">
        <div class="item-info">
          <span class="model-name">Galaxy A9 Pro</span>
          <span class="model-made">Android 11</span>
        </div>
        <div class="item-state">
          <div class="select"><span class="txt">선택</span><span class="icon"></span></div>
        </div>
        <button class="btn-info-detail"></button>        
      </li>
    </ul>
  </div>
</template>
 
<style lang="scss" scoped>
@import "~/scss/main";
ul{margin:0;padding:0;display:flex;justify-content:space-between;
  .list-card-item{border:1px solid #D9D9D9;border-radius:4px;position:relative;flex-basis:282px;
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
    .btn-info-detail{position:absolute;width:24px;height:24px;background:url(~/assets/icon-search.png);background-size:100%;top:20px;right:16px;border:none;}

    &.normal{cursor: pointer;
      &:hover{border:1px solid #3F3F3F;box-shadow:0 16px 16px rgb(63 63 63 / 24%);transform:translateY(-16px);transition:all .3 ease;
        .select{background:#3f3f3f;}
      }
    }
    &.selected{cursor: pointer;border:1px solid $primary;
      .select{background:$primary;
        .icon{background:url(~/assets/icon-check.png) no-repeat;background-size:100%;}
      }
      &:hover{box-shadow:0 16px 16px rgb(63 63 63 / 24%);transform:translateY(-16px);transition:all .3 ease;
        .icon{background:url(~/assets/icon-close.png) no-repeat;background-size:100%;}
      }
    }
    &.rented{opacity: .32;
      .btn-info-detail{cursor: inherit;}
    }
  }
}

</style>