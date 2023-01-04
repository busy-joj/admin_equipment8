<template>
  <ContentTop>
    <template v-slot:h2>
      <h2>장비관리</h2>
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
          <th width="8.5%">상태</th>
          <th width="7%">종류</th>
          <th width="11.5%">OS</th>
          <th width="15%">장비명</th>
          <th width="14%">대여자 이름&#40;사번&#41;</th>
          <th width="10%">반납 예정일</th>
          <th width="13%">모델&#40;유심&#41; 번호</th>
          <th width="10%">시리얼 번호</th>
          <th><span class="icon more"></span><span class="blind">자세히 보기</span></th>
        </template>
        <template #tlist="{row}">
          <td><input type="checkbox" v-model="seleted"></td><!-- 체크박스 -->
          <td>{{ row.rentalStatusText }}</td><!-- 상태 -->
          <td>{{ row.deviceType }}</td><!-- 종류 -->
          <td>{{ row.osName }}</td><!-- OS -->
          <td>{{ row.deviceName }}</td><!-- 장비명 -->
          <td>{{ row.userName }}&#40;{{row.userId}}&#41;</td><!-- 대여자 이름(사번) -->
          <td>{{ row.endRentalDate }}일</td><!-- 반납 예정일 -->
          <td>{{ row.deviceModelNumber }}</td><!-- 모델(유심) 번호 -->
          <td>{{ row.deviceSerialNumber }}</td><!-- 시리얼 번호 -->
          <td><IconButton :class="{more : true}" @click.stop="getEquipmentInfo(row)"></IconButton></td>
        </template>
      </BasicTable>   
      <Pagination />

      <div class="btn-admin">
          <BasicButton :class="{primary : true, md: true, mn:true}" type="submit" :disabled="btnDisabled">선택 장비 반납</BasicButton>
          <BasicButton @click="handleCollapsed" :class="{white : true, md: true, mn:true}" type="submit" >신규 장비 등록 +</BasicButton>
      </div>   
    </template>
  </ContentBottom>

  <Collapse :class="{'collapse':true, 'show':isCollapse}">
      <template v-slot:content>
        <CollapseEquip :id="'collapseEquip'"></CollapseEquip>
        <CollapseBottom :class="{'apply-btns':true}">
              <template v-slot:contentBtn>
                <BasicButton
                  @click="handleSubmit"
                  :class="{primary : true, lg:true}"
                  type="submit">
                  신청하기
                </BasicButton>
                <BasicButton
                  @click="handleCollapsed"
                  :class="{white : true, lg:true}"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEquip"
                  :aria-expanded="!accessibility"
                  aria-controls="collapseEquip">
                  닫기
                </BasicButton>
              </template>
            </CollapseBottom>
      </template>
  </Collapse>

  <InputModal v-if="showModal" @closeModal="showModal = false" :rowInfo="rowInfo"/>
</template>

<script>
import ContentTop from '~/components/layout/ContentTop'
import ContentBottom from '~/components/layout/ContentBottom'

import Search from '~/components/main/Search'

import Collapse from '~/components/collapse/Collapse'
import CollapseBottom from '~/components/collapse/CollapseBottom'
import CollapseEquip from '~/components/collapse/CollapseEquip'

import InputModal from '~/components/modal/InputModal'

import BasicTable from '~/components/basic/BasicTable'
import BasicButton from '~/components/basic/BasicButton'
import IconButton from '~/components/basic/IconButton'
import Pagination from '~/components/basic/Pagination'

export default {
    components:{
        ContentTop,
        ContentBottom,
        Collapse,
        CollapseBottom,
        CollapseEquip,
        InputModal,
        Search,
        BasicTable,
        BasicButton,
        IconButton,
        Pagination
    },
    data(){
      return{
        selected: [],
        rowInfo:[],
        isCollapse : false,
        showModal : false,
        btnDisabled : true
      }
    },
    methods:{
      handleCollapsed() {
        console.log('AdminEquip.vue handleCollapsed', this.isCollapse)
        this.isCollapse = !this.isCollapse
      },
      getEquipmentInfo(rowInfo){
        this.rowInfo = rowInfo
        this.showModal = !this.showModal
      }
    }
}
</script>

<style lang="scss" scoped>
.btn-admin{display:flex;gap:12px;margin-top:36px;}
</style>