<template>
  <div class="datapicker-box-item">
    <span class="txt">시작일</span>
    <Datepicker v-model="startDate" />
  </div>
    <div class="datapicker-box-item">
    <span class="txt">반납일</span>
    <Datepicker v-model="endDate" />
  </div>

</template>

<script>
import Datepicker from "vue3-datepicker";

export default {
  name: "DatePicker",
  data() {
    return {
      isFocused: false,
      startDate: new Date(),
      endDate: new Date()
    };
  },
  components: {
    Datepicker,
  }
};
</script>

<style lang="scss" scoped>
.datapicker-box-item{display:flex;width:50%;flex-direction:column;align-content:space-between;position:relative;
  &:last-child::before{position: absolute;content:'~';bottom:10px;left:-17px;}
  .txt{font-size:14px;color:$M-gray5;margin-bottom:8px;}
}

.v3dp__datepicker{width:100%;}
.datepicker-txt{font-size:12px;color:#A4A4A4;line-height:40px;padding-left:32px;display:inline-flex;align-items:center;
  span{display:inline-block;
    &.icon{width:14px;height:14px;background: url(~/assets/ico-error.png) no-repeat;background-size:100%;}
    &.txt{margin-left:4px;}
  }
}
</style>