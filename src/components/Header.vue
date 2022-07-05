<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
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
    <UserInfo />
  </header>
</template>

<script>
import Logo from '~/components/Logo'
import UserInfo from '~/components/UserInfo'
    export default{
      components:{
        Logo,
        UserInfo
      },
        data(){
            return {
                navigation:[
                    {
                        name : '장비대여',
                        href : '/'
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
                        href : '/Account'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
header{
  height:64px;
  background: #000;
  padding:0 40px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  .logo{
    margin-right:40px;
  }
  .nav{gap:75px;
    .nav-link{color:#fff;padding:0;
      &.active{color:#2c8dff;background: none;}
    }
  }
  
}
</style>