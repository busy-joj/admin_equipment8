<template>
    <div>
        <button type="button" class="tab">
            <slot></slot>
        </button>
        <!-- <input type="radio" class="btn-check" :name="name" :id="tab.id" autocomplete="off"> -->
        <!-- <label class="btn tab" :for="tab.id"><slot></slot></label> -->
    </div>
</template>

<script>
export default {
    props:{
        tab:{
            type:Object,
            default(){
                return {
                    text:"전체",
                    id:"all",
                    isActive:"false"
                }
            }
        },
        name:{
            type:String,
            default:'option'
        }        
    }
}
</script>

<style lang="scss" scoped>
// .btn.tab{font-size:14px;color:$M-gray4;padding:8px 12px;border:none;background:none;border-radius:4px;line-height:18px;}
// .btn-check:checked + .btn.tab{background-color:$M-gray2;color:$M-black;}
// .active{
//     .btn.tab{background-color:$M-gray2;color:$M-black;}
// }

button.tab{font-size:14px;color:$M-gray4;padding:8px 12px;margin-right:4px;border:none;background:none;border-radius:4px;line-height:18px;
    &.active{background-color:$M-gray2;color:$M-black;}
    &:last-child{margin-right:0;}
}
</style>