<template>
    <Datepicker v-model="startDate" />
    <Datepicker v-model="endDate" />
    <div class="datepicker-txt">
      <span class="icon"></span>
      <span class="txt">대여 기간은 최대 1년 입니다.</span>
    </div>
</template>

<script>
import Datepicker from "vue3-datepicker";

export default {
  name: "DatePicker",
  data() {
    return {
      isFocused: false,
      startDate: '0000-00-00',
      endDate: new Date()
    };
  },
  components: {
    Datepicker,
  },
//   methods: {
//     handleOnFocus() {
//       console.log("Focused");
//       this.isFocused = true;
//     },
//     handlOnBlur() {
//       this.isFocused = false;
//     },
//   },
};
</script>

<style lang="scss" scoped>
.datepicker-txt{font-size:12px;color:#A4A4A4;line-height:40px;padding-left:32px;display:inline-flex;align-items:center;
  span{display:inline-block;
    &.icon{width:14px;height:14px;background: url(~/assets/ico-error.png) no-repeat;background-size:100%;}
    &.txt{margin-left:4px;}
  }
}
</style>