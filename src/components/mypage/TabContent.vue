<template>
  <div class="input-box">
    <LabelInput
      id="가"
      type="text"
      :value="value"
      for="라"
      @input="update">
      <template #label>
        이름
      </template>
      <template #feedback>
        이름을 다시 확인해주세요.
      </template>
    </LabelInput>
  </div>
  <BasicButton />
</template>

<script>
import BasicButton from '~/components/basic/BasicButton'
import LabelInput from '~/components/basic/LabelInput'

export default {
    components:{
        BasicButton,
        LabelInput
    },
    data(){
        return{
            value:''
        }
    },
    methods:{
        update(val){
            // console.log(val)
            // const a = val.data
            const res = val.data
            this.value = res
            console.log(this.value)
        }
    }
}
</script>
    
<style>

</style>