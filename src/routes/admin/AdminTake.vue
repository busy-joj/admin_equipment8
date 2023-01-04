<template>
  <ContentTop>
    <template v-slot:h2>
      <h2>수령확인</h2>
    </template>
    <template v-slot:content>
      <Search @clickSearch="clickSearch" />
    </template>
  </ContentTop>
  <ContentBottom>
    <template #content>
      <BasicTable :class="{dropdown : true}">
        <template #thead>
          <th width="14.5%">이름</th>
          <th width="11%">사번</th>
          <th width="11.5%">신청일자</th>
          <th width="16%">대여시작일</th>
          <th width="">
            <input class="form-check" type="checkbox" v-model="selectAll">
            신청내역
          </th>
          <th width="3.7%"><span class="blind">펼침</span></th>
        </template>
        <template #tlist="{row}">
          <td>{{ row.no }}</td>
          <td>{{ row.userId }}</td>
          <td>{{ row.start }}</td>
          <td>{{ row.device.length }}</td>
          <td>
            <!-- [C] 더미 데이터 / 추후 수정 필요 by jyj 22-12-28 -->
            <template v-for="(item) in row.device" :key="item" >
              <span class="list-item" :class="{'show':row.isDropdown}">
                <template v-if="1 < row.device.length && !row.isDropdown">
                  <input class="form-check" type="checkbox" :value="item" :id="item" v-model="selected">
                  <label :for="item">{{item}} 외 {{row.device.length}}건</label>
                </template>
                
                <template v-else>
                  <input class="form-check" type="checkbox" :value="item" :id="item" v-model="selected">
                  <label class="form-check-label" :for="item">{{item}}</label>
                </template>
              </span>
            </template>
          </td>
          <td><IconButton :class="{arrow : true, active: row.isDropdown}" @click="handleDropDown(row)" v-if="1 < row.device.length"></IconButton></td>
        </template>
      </BasicTable>   
    </template>
  </ContentBottom>

  <BasicButton
      @click="handleConfirm"
      :class="{primary : true, mn: true, fixed: true}"
      v-show=" 0 < selected ">
      수령확인
      <span :class="{num : true}">{{ selected.length }}</span>
  </BasicButton>
</template>

<script>
import ContentTop from '~/components/layout/ContentTop'
import ContentBottom from '~/components/layout/ContentBottom'

import Search from '~/components/main/Search'
import BasicTable from '~/components/basic/BasicTable'
import BasicButton from '~/components/basic/BasicButton'
import IconButton from '~/components/basic/IconButton'

export default {
  components:{
      ContentTop,
      ContentBottom,
      Search,
      BasicTable,
      BasicButton,
      IconButton
  },
  data(){
    return{
      selected: []
    }
  },
  methods:{
    handleDropDown(row) {
      row.isDropdown = !row.isDropdown
    },
    handleConfirm() {
      console.log('AdminTake.vue  click="handleConfirm"')
    }
  },
  computed: {
    selectAll: {}
  }
}
</script>

<style lang="scss" scoped>
th,td{
  &:first-child{padding-left:40px !important;text-align:left !important;}
  .list-item{
    &:not(:first-child){display:none;}
    &.show{display:block;}
    & + .list-item{padding-top:13px;}
  }
  .btn.arrow{filter:brightness(0);transform:rotate(90deg);width:16px !important;height:16px !important;
    &.active{transform:rotate(-90deg);}
  }
  .form-check{margin-right:20px;}
}
</style>