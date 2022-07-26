<template>
  <div class="container">
    <Search />
    <h2>장비목록</h2>
    <MainTabs />
    <CardList />
  </div>
</template>

<script>
import Search from '~/components/Search'
import MainTabs from '~/components/MainTabs'
import CardList from '~/components/CardList'

export default {
  components:{
    Search,
    MainTabs,
    CardList
  }
}
</script>