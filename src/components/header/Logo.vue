<template>
  <!-- 로그인 전 click 되지 않도록 작업 필요 2022-08-19 by.jyj -->
  <RouterLink
    to="/main"
    class="logo">
    <h1>
      <img
        src="~/assets/img-tit.png"
        alt="디지털사업부 테스트 장비 대여" /><span class="blind">디지털사업부 테스트 장비 대여</span>
    </h1>
  </RouterLink>
</template>

<style lang="scss" scoped>
.logo{
    h1{width:278px;
      img{width:100%;}
    }
}
</style>