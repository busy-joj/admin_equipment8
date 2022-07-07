<template>
  <div class="user-info">
    <span class="name">김지현</span>
    <div class="dropdown">
        <button class="btn" type="button" aria-expanded="false" @click="dropdown()"></button>
        <ul class="dropdown-menu" :class="{'show' : isAddClass}">
          <li v-for="menu in infoDropdown" :key="menu.name">
            <img :src="getImgUrl(menu.img)" alt="menu.img">
            <!-- <img  :src="`~/assets/icon-info-${img}.png`" alt=""> -->
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
                        img : 'icon-info-my',
                        href : '/mypage'
                    },
                    {
                        name : '패스워드 변경',
                        img : 'icon-info-pw',
                        href : '/movie'
                    },
                    {
                        name : '로그아웃',
                        img : 'icon-info-logout',
                        href : '/about'
                    },
                ],
                isAddClass : false
            }
        },
        methods :{
          dropdown (){
            this.isAddClass = !this.isAddClass;
          },
          getImgUrl(pet){
            var images = require.context('../assets/', false, /\.png$/)
            return images('./' + pet + ".png")
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