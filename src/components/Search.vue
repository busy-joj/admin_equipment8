<template>
    <div class="search-box">
        <button class="btn " type="button" id="button-addon1"><span class="blind">검색</span></button>
        <input type="text" class="input-search" placeholder="장비를 검색해보세요!">
    </div>
</template>

<style lang="scss" scoped>
.search-box{position:relative;width:100%;margin-bottom:40px;
    .btn{position:absolute;width:32px;height:32px;background:url(~/assets/icon-search.png);background-size:100%;padding:0;bottom:14px;}

    .input-search{width:100%;padding:14px 0 14px 48px;font-size:24px;background: none;border:none;border-bottom:1px solid #d9d9d9;color:#000;
        &::placeholder{color:#a4a4a4;}
    }
}
</style>