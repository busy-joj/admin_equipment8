<template>
  <div class="search-box">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control input-search"
        placeholder="검색어를 입력해 주세요."
        aria-label="검색어를 입력해주세요."
        aria-describedby="button-addon2"
        v-model="keyword"
        @keyup.enter="searchItem" />
      <BasicButton
        class="primary btn-search mn"
        id="button-addon2">
        검색하기
      </BasicButton>
    </div>
  </div>
</template>

<script>
import BasicButton from '~/components/basic/BasicButton'

export default {
    components:{
        BasicButton
    },
    data(){
        return{
            keyword:''
        }
    },
    methods:{
        searchItem(){
            // this.$store.dispatch('equipments/searchEquipment',{
            //     keyword : this.keyword
            // })

            this.$emit("clickSearch", this.keyword)
        }
    }
}
</script>

<style lang="scss" scoped>
.search-box{position:relative;width:100%;
    .btn-search{position:absolute;top:0;right:0;padding:15px 52px;}
    .input-search{padding:15px 0 15px 16px;font-size:16px;background: none;border:1px solid $M-gray3;color:$M-black;border-radius:4px !important;box-shadow:4px 4px 10px rgba(0, 0, 0, .04);
        &:focus{border-color:$primary;box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0), 0 0 0px rgba(0, 0, 0, 0);}
        &::placeholder{color:$M-gray4;}
    }
    .btn-cancel{position:absolute;bottom:15px;right:0;}
}
</style>