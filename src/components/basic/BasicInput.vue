<template>    
    <input :type="type" class="form-control" :id="id" :placeholder="placeholder">
</template> 

<script>


export default {
    props:{
        id:{
            type: String,
            default:''
        },
        type:{
            type: String,
            default:'text'
        },
        placeholder:{
            type: String,
            default:''            
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