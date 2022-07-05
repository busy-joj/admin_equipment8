<template>
  <RouterLink
    to="/"
    class="logo">
    <h1>
      <img
        src="~/assets/img-logo-kbsmedia.png"
        alt="KBS미디어" /><span class="blind">KBS미디어</span>
    </h1>
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main";
.logo{
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    color: $black;
    text-decoration: none;
    &:hover{
        color:$black;
    }
    span{
        color:$primary
    }
}
</style>