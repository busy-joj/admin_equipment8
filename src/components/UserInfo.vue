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
                        // img : require('~/assets/icon/icon-info-my.png'),
                        href : '/'
                    },
                    {
                        name : '패스워드 변경',
                        // img : require('~/assets/icon/icon-info-pw.png'),
                        href : '/movie'
                    },
                    {
                        name : '로그아웃',
                        // img : require('~/assets/icon/icon-info-logout.png'),
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
@import "~/scss/main";

.user-info{
  display:flex;text-decoration: none;align-items:center;
  .name{
    display:block;font-size: 16px;color:$white;
  }
  .dropdown{
    // &::after{position:absolute;content:'';width:0px;height:0px;border-bottom: 10px solid red;border-left: 10px solid transparent; border-right: 10px solid transparent;}
        .btn{width:32px;height:32px;border-radius: 50%;background: $white;margin-left:12px;}
        .dropdown-menu{top:42px;right:0;
          li:last-child{border-top:1px solid #000;}
        }
  } 
    
}
  
</style>