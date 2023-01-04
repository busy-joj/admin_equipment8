<template>
  <ContentTop>
    <template v-slot:h2>
      <h2>계정관리</h2>
    </template>
    <template v-slot:content>
      <Search @clickSearch="clickSearch" />
    </template>
  </ContentTop>
  <ContentBottom>
    <template #content>
      <BasicTable>
        <template #thead>
          <th width="7%" class="input">
              <input type="checkbox" v-model="selectAll">
          </th>
          <th width="14%">관리자</th>
          <th width="9%">No.</th>
          <th width="12%">사번</th>
          <th width="12%">이름</th>
          <th width="24%">이메일</th>
          <th width="20%">연락처</th>
          <th><span class="icon more"></span><span class="blind">자세히 보기</span></th>
        </template>
        <template #tlist="{row}">
          <td><input type="checkbox" v-model="seleted"></td><!-- 체크박스 -->
          <td>{{ row.rentalStatusText }}</td><!-- 관리자 -->
          <td>{{ row.deviceType }}</td><!-- No. -->
          <td>{{ row.osName }}</td><!-- 사번 -->
          <td>{{ row.deviceName }}</td><!-- 이름 -->
          <td>{{ row.userName }}&#40;{{row.userId}}&#41;</td><!-- 이메일 -->
          <td>{{ row.endRentalDate }}일</td><!-- 연락처 -->
          <td><IconButton :class="{more : true}" @click.stop="getEquipmentInfo(row)"></IconButton></td>
        </template>
      </BasicTable>
      <Pagination />
    </template>
  </ContentBottom>
  <Collapse :class="{'collapse':true, 'show':isCollapse}">
      <template v-slot:content>
        <CollapseAccount :id="'collapseAccount'" :rowInfo="rowInfo"></CollapseAccount>
        <CollapseBottom :class="{'accont-btns':true}">
              <template v-slot:contentBtn>
                <BasicButton
                  @click="handleSubmit"
                  :class="{primary : true, lg:true }"
                  type="submit">저장
                </BasicButton>
                <BasicButton
                  @click="handleCollapsed"
                  :class="{white : true, lg:true}"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseAccount"
                  :aria-expanded="!accessibility"
                  aria-controls="collapseAccount">
                  닫기
                </BasicButton>
              </template>
            </CollapseBottom>
      </template>
  </Collapse>
</template>

<script>
import ContentTop from '~/components/layout/ContentTop'
import ContentBottom from '~/components/layout/ContentBottom'

import Search from '~/components/main/Search'

import Collapse from '~/components/collapse/Collapse'
import CollapseBottom from '~/components/collapse/CollapseBottom'
import CollapseAccount from '~/components/collapse/CollapseAccount'

import BasicTable from '~/components/basic/BasicTable'
import BasicButton from '~/components/basic/BasicButton'
import IconButton from '~/components/basic/IconButton'
import Pagination from '~/components/basic/Pagination.vue'

export default {
    components:{
        ContentTop,
        ContentBottom,
        Collapse,
        CollapseBottom,
        CollapseAccount,
        Search,
        BasicTable,
        BasicButton,
        IconButton,
        Pagination
    },
    data(){
      return{
        selected: [],
        isCollapse : false
      }
    },
    methods:{
      handleCollapsed() {
        this.isCollapse = !this.isCollapse
      },
      getEquipmentInfo(rowInfo){
        this.rowInfo = rowInfo
        this.isCollapse = !this.isCollapse
      }
    }
}
</script>

<style lang="scss" scoped>

</style>