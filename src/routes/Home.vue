<template>
  <div class="container">
    <Search />
    <h2>장비대여</h2>
    
    <ListCard />
  </div>
</template>

<script>
import Search from '~/components/Search'
import ListCard from '~/components/ListCard'

export default {
  components:{
    Search,
    ListCard
  }
}
</script>