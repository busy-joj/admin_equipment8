<template>
    <Datepicker v-model="startDate" />
    <Datepicker v-model="endDate" />
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
.v3dp__datepicker{width:50% !important;}
.datepicker-txt{font-size:12px;color:#A4A4A4;line-height:40px;padding-left:32px;display:inline-flex;align-items:center;
  span{display:inline-block;
    &.icon{width:14px;height:14px;background: url(~/assets/ico-error.png) no-repeat;background-size:100%;}
    &.txt{margin-left:4px;}
  }
}
</style>