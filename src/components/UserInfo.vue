<template>
  <div class="user-info">
    <span class="name">김지현</span>
    <div class="dropdown">
        <button class="btn" type="button" aria-expanded="false" @click="dropdown()"></button>
        <ul class="dropdown-menu" :class="{'show' : isAddClass}">
          <li v-for="menu in infoDropdown" :key="menu.name">
            <RouterLink
              :to="menu.href"
              class="dropdown-item">
              {{ menu.name }}
            </RouterLink>
          </li>
        </ul> 
    </div>
  </div>
</template>

<script>
export default{
        data(){
            return {
                infoDropdown:[
                    {
                        name : '내 정보', 
                        href : '/mypage'
                    },
                    {
                        name : '패스워드 변경',
                        href : '/changepw'
                    },
                    {
                        name : '로그아웃',
                        href : '/about'
                    },
                ],
                isAddClass : false
            }
        },
        methods :{
          dropdown (){
            this.isAddClass = !this.isAddClass;
          }
        }
    }
</script>

<style lang="scss" scoped>
$li:3;

.user-info{
  display:flex;text-decoration: none;align-items:center;
  .name{
    display:block;font-size: 16px;color:$white;
  }
  .dropdown{
    .btn{width:32px;height:32px;border-radius: 50%;background: $white;margin-left:12px;}
    .dropdown-menu{top:42px;right:-7px;padding:12px 0 0 0;border:1px solid #D9D9D9;
      &::after{position:absolute;content:'';width:0px;height:0px;border-bottom: 8px solid $white;border-left: 4px solid transparent; border-right: 4px solid transparent;top:-8px;right:18px;}
      li{padding:0 16px;
        .dropdown-item{padding:0px 0px 12px 20px;position:relative;}
        &:last-child{border-top:1px solid #D9D9D9;padding-top:12px;}
      }
      @for $i from 1 through $li{
        li:nth-child(#{$i}) a:before{content:'';position:absolute;width:14px;height:14px;background: url(~/assets/icon-info-#{$i}.png) no-repeat;background-size:100%;top:5px;left:0;}
      }
    }
  }
} 
</style>