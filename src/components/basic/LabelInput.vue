<template>
  <div>
    <label :for="id"><slot name="label"></slot></label>
    <input
      :type="type"
      :id="id"
      class="form-control"
      required
      @input="update()" />
    <div class="invalid-feedback">
      <slot name="feedback"></slot>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        id:{
            type:String
        },
        for:{
            type:String
        },
        type:{
            type:String
        },

        value:{
            type:Object
            }
    },
    methods:{
        update(val){
            this.$emit('input',val)
        }
    }
}
</script>

<style>

</style>