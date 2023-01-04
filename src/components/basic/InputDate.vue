<template>
    <div class="datapicker-box-item">
      <slot name="tit"></slot>
      <slot name="date"></slot>
    </div>
</template>

<script>
import Datepicker from "vue3-datepicker";

export default {
  name: "InputDate",
  props: {
    startDate: {
      type: Date
    },
    endDate: {
      type: Date
    }
  },
  data() {
    return {
      isFocused: false,
      date: {
        start: new Date(),
        end: new Date()
      }
    };
  },

  created() {
    // props로 넘어온 값이 자식 컴포넌트에 세팅
    this.date.start = this.startDate 
    this.date.end = this.endDate
  },

  components: {
    Datepicker,
  },
  methods: {
    handleRentalStartDate() {
      console.log('handleRentalStartDate', this.date.start)
      this.$emit('onChangeDatePicker', this.date)
    },

    handleRentalEndDate() {
      console.log('handleRentalEndDate', this.date.end)
      this.$emit('onChangeDatePicker', this.date)
    }
  }
};
</script>

<style lang="scss" scoped>
.datepicker-txt{font-size:12px;color:#A4A4A4;line-height:40px;padding-left:32px;display:inline-flex;align-items:center;
  .icon{display:inline-block;width:14px;height:14px;background: url(~/assets/ico-error.png) no-repeat;background-size:100%;}
  .txt{display:inline-block;margin-left:4px;}
}
</style>