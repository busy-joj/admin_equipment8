<template>
  <header :class="{'center':!signIn}"> <!-- 로그인 상태에서는 class="center" false -->

    <Logo />
    <div class="nav nav-pills" v-if="signIn && manager">
      <div 
        v-for="nav in navigation"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <UserInfo v-if="signIn"/>
  </header>
</template>

<script>
import Logo from '~/components/header/Logo'
import UserInfo from '~/components/header/UserInfo'
    export default{
      components:{
        Logo,
        UserInfo,
      },
        data(){
            return {
                signIn : false,
                manager : false,
                navigation:[
                  // 관리자 페이지 작업후 href 수정 예정 2022-08-19 by.jyj
                    {
                        name : '장비대여',
                        href : '/main'
                    },
                    {
                        name : '장비관리',
                        href : '/movie'
                    },
                    {
                        name : '수령확인',
                        href : '/about'
                    },
                    {
                        name : '계정관리',
                        href : '/account'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
header{
  position:fixed;
  z-index: 100;
  width:100%;
  height:64px;
  background: #000;
  padding:0 40px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  &.center{
    @include landscape{justify-content: center;}
  }

  .nav{gap:72px;
    .nav-link{color:$M-gray3;padding:0;
      &:hover{color:$white;}
      &.active{color:$M-primary;background: none;}
    }
  }
  
}
</style>