<template>
    <div class="search-box">
        <div class="btn-search">
            <IconButton :class="{search : true, big:true}"><span class="blind">검색</span></IconButton>
        </div>
        <input @input="changeKeyword" :value="keyword" type="text" class="input-search" placeholder="장비를 검색해보세요!" @keyup.enter="search">
        <div class="btn-cancel">
            <IconButton :class="{close : true}" @click="keyword = ''"><span class="blind">닫기</span></IconButton>
        </div>
    </div>
</template>

<script>
import IconButton from '~/components/basic/IconButton'

export default {
    components:{
        IconButton
    },
    data(){
        return{
            keyword:''
        }
    },
    methods:{
        changeKeyword(e){
            this.keyword = e.target.value
        }
    }
}
</script>

<style lang="scss" scoped>
.search-box{position:relative;width:100%;margin-bottom:40px;
    .btn-search{position:absolute;bottom:14px;}
    .input-search{width:100%;padding:14px 0 14px 48px;font-size:24px;background: none;border:none;border-bottom:1px solid #d9d9d9;color:#000;
        &::placeholder{color:#a4a4a4;}
    }
    .btn-cancel{position:absolute;bottom:15px;right:0;}
}
</style>