<template>
    <BasicTable>
        <template v-slot:thead>
            <th>No.</th>
            <th>장비명</th>
            <th>종류</th>
            <th>OS</th>
            <th>대여 시작일</th>
            <th>반납 예정일</th>
            <th>모델(유심)번호</th>
            <th>시리얼 번호</th>
        </template>
        <template v-slot:tlist="tlist">
            <th>{{tlist.row.no}}</th>
            <th>{{tlist.row.equipment}}</th>
            <th>{{tlist.row.device}}</th>
            <th>{{tlist.row.OS}}</th>
            <th>{{tlist.row.start}}</th>
            <th>{{tlist.row.end}}</th>
            <th>{{tlist.row.ModelNo}}</th>
            <th>{{tlist.row.serialNo}}</th>
        </template>
    </BasicTable>
</template>

<script>
import  BasicTable from '~/components/basic/BasicTable'

export default {
    components:{
        BasicTable
    }
}
</script>

<style lang="scss" scoped>
th{padding:13px 0;}
</style>