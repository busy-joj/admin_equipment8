<template>
    <div class="row mb" :class="id">
        <label :for="id" class="col-sm-2 col-form-label">
            <slot></slot>
        </label>
        <div class="col-sm-10" v-if="id == 'date'">
            <InputDate />
        </div>
        <div v-else class="col-sm-10">
            <input :type="type" class="form-control" :id="id" :value="value">
            <span v-if="id == 'myEmail'" class="email-default">@kbsmedia.co.kr</span>
        </div>
    </div>
</template> 

<script>
import InputDate from '~/components/basic/InputDate'

export default {
    components:{
        InputDate
    },
    props:{
        id:{
            type: String,
            default:''
        },
        type:{
            type: String,
            default:'text'
        },
        value:{
            type: String,
            default:''            
        },
        readonly:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.row.mb{margin:0 0 16px 0;
    &:last-child{margin:0;}
}
.myEmail{
    input{display: inline-block;width:50%;
    & + span{margin-left:24px;font-weight:bold;}
    }
}
    label{font-weight:bold;}
</style>