<template>
  <div class="user-info">
    <span class="name">김지현</span>
    <div class="dropdown">
        <button class="btn" type="button" aria-expanded="false" @click="dropdown()"></button>
        <ul class="dropdown-menu" :class="{'show' : isAddClass}">
          <li v-for="menu in infoDropdown" :key="menu.name">
            <RouterLink
              :to="menu.href"
              class="dropdown-item"
              @click="dropdown()">
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
                // 관리자 페이지 작업후 href 수정 예정 2022-08-19 by.jyj
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
  flex-basis:278px;display:flex;text-decoration: none;align-items:center;justify-content:flex-end;
  .name{
    display:block;font-size: 16px;color:$white;
  }
  .dropdown{
    .btn{width:32px;height:32px;border-radius: 50%;margin-left:12px;background:url(~/assets/icon-user.png) center/60% no-repeat;background-color: $white;}
    .dropdown-menu{top:42px;right:-7px;padding:12px 0 0 0;border:1px solid $M-gray3;--bs-dropdown-min-width:127px;
      &::after{position:absolute;content:'';width:0px;height:0px;border-bottom: 8px solid $white;border-left: 4px solid transparent; border-right: 4px solid transparent;top:-8px;right:18px;}
      li{padding:0 16px;
        .dropdown-item{padding:0px 0px 14px 18px;position:relative;font-size:14px;color:$M-black;line-height:14px;
          &:hover{background-color:rgba(0,0,0,0) !important;}
        }
        &:last-child{border-top:1px solid #D9D9D9;padding-top:12px;}
      }
      @for $i from 1 through $li{
        li:nth-child(#{$i}) a:before{content:'';position:absolute;width:14px;height:14px;background: url(~/assets/icon-info-#{$i}.png) no-repeat;background-size:100%;top:0;left:0;filter: brightness(0%);}
      }
    }
  }
} 
</style>