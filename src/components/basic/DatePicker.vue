<template>
    <Datepicker v-model="startDate" />
    <Datepicker v-model="endDate" :config="options"/>
</template>

<script>
import Datepicker from "vue3-datepicker";

export default {
  name: "DatePicker",
  data() {
    return {
      isFocused: false,
      startDate: new Date(),
      endDate: new Date(),
      options: {
            format: 'YYYY-MM-DD',
            debug:true, //degug속성 적용
        }
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

</style>