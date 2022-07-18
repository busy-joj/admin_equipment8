<template>
    <ul class="nav nav-pills">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">전체</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">대여가능</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Android</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">iOS</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">폰</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">태블릿</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">유심</a>
        </li>        
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">기타</a>
        </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav{margin-bottom:40px;
    .nav-link{font-size:14px;color:#3f3f3f;padding:9px 12px;margin-right:20px;
        &.active{font-weight:bold;background-color:#f0f0f0;color:#3f3f3f;}
    }
}
</style>