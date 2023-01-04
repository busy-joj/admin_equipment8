<template>
  <ContentTop>
    <template v-slot:h2>
      <h2>대여내역</h2>
    </template>
    <template v-slot:content>
      <Search @clickSearch="clickSearch" />
    </template>
  </ContentTop>
  <ContentBottom>
    <template #content>
      <BasicTable>
        <template #thead>
          <th width="7.5%" class="input">
              <input type="checkbox" v-model="selectAll">
          </th>
          <th width="9.5%">현재상태</th>
          <th width="8.5%">사번</th>
          <th width="8.5%">대여자</th>
          <th width="10.5%">대여일</th>
          <th width="12.5%">반납일</th>
          <th width="8.5%">연체일</th>
          <th width="22%">이메일</th>
          <th>연락처</th>
        </template>
        <template #tlist="{row}">
          <td><input type="checkbox" v-model="seleted"></td>
          <td>{{ row.rentalStatusText }}</td><!-- 현재상태 -->
          <td>{{ row.userId }}</td><!-- 사번 -->
          <td>{{ row.userName }}</td><!-- 대여자 -->
          <td>{{ row.start }}</td><!-- 대여일 -->
          <td>{{ row.end }}</td><!-- 반납일 -->
          <td>{{ row.device }}일</td><!-- 연체일 -->
          <td>{{ row.OS }}</td><!-- 이메일 -->
          <td>{{ row.ModelNo }}</td><!-- 연락처 -->
        </template>
      </BasicTable>   
      <Pagination />
      
    </template>
  </ContentBottom>
</template>

<script>
import ContentTop from '~/components/layout/ContentTop'
import ContentBottom from '~/components/layout/ContentBottom'

import Search from '~/components/main/Search'
import Pagination from '~/components/basic/Pagination'
import BasicTable from '~/components/basic/BasicTable'

export default {
    components:{
        ContentTop,
        ContentBottom,
        Search,
        Pagination,
        BasicTable
    },
    data(){
      return{
        selected: [],
      }
    }
}
</script>

<style lang="scss" scoped>

</style>