<template>
  <div class="container">
    <Search />
    <h2>장비목록</h2>
    <MainTabs />
    
  </div>
</template>

<script>
import Search from '~/components/Search'
import MainTabs from '~/components/MainTabs'


export default {
  components:{
    Search,
    MainTabs,

  }
}
</script>