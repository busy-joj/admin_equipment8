<template>
  <div class="container">
    <Search />
    <h2>장비목록</h2>
    <Tabs />
    <ListCard />
  </div>
</template>

<script>
import Search from '~/components/Search'
import Tabs from '~/components/Tabs'
import ListCard from '~/components/ListCard'

export default {
  components:{
    Search,
    Tabs,
    ListCard
  }
}
</script>