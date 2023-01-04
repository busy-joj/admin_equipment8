<template>
    <div class="pagination-box">
        <ul class="pagination">
          <li class="page"><a href="#none" class="page-link pre"><span class="blind">이전</span></a></li>
          <li class="page"><a href="#none" class="page-link active" >1</a></li>
          <li class="page"><a href="#none" class="page-link">2</a></li>
          <li class="page"><a href="#none" class="page-link">3</a></li>
          <li class="page"><a href="#none" class="page-link">4</a></li>
          <li class="page"><a href="#none" class="page-link next"><span class="blind">next</span></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.pagination-box{margin-top:16px;
  .pagination{justify-content:flex-end;margin:0;}
  .page-link{width:20px;height:20px;border-radius:50%;background:transparent;color:$M-gray4;display:flex;padding:0;align-items:center;justify-content:center;border:1px solid transparent;font-size:14px;
    &.active{border:1px soild $M-primary;background: $M-primary;color:#fff;}
    &.pre{background:url(~/assets/icon-arrow-r.png)center/ 16px no-repeat;filter:brightness(0);transform:rotate(180deg);margin-right:12px}
    &.next{background:url(~/assets/icon-arrow-r.png)center/ 16px no-repeat;filter:brightness(0);margin-left:12px}
  }
}
</style>