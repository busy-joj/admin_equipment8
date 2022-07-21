<template>
  <div class="container">
    <Search />
    <h2>장비목록</h2>
    <Tabs />
    <CardList />
  </div>
</template>

<script>
import Search from '~/components/Search'
import Tabs from '~/components/Tabs'
import CardList from '~/components/CardList'

export default {
  components:{
    Search,
    Tabs,
    CardList
  }
}
</script>