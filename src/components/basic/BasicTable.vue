<template>
    <div class="table-box">
        <table>
            <thead class="table-header">
                <tr>
                    <slot name="thead"></slot>
                </tr>
            </thead>
            <tbody class="table-body">
                <template v-for="row in list" :key="row">
                    <tr>
                        <slot name="tlist" :row="row"></slot>
                    </tr>
                </template>
                <tr v-if="list.length === 0">
                    <td colspan="30" class="txt-center">신청 내역이 없습니다.</td>
                </tr>
            </tbody>
        </table>    
    </div>
</template>

<script>
export default {
    data(){
        return{
            // 더미 데이터
            list:[
                {no:1,equipment:'Galaxy A9 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
                {no:2,equipment:'Galaxy A10 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
                {no:3,equipment:'Galaxy 11 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
                {no:4,equipment:'Galaxy 12 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
                {no:5,equipment:'Galaxy 13 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
                {no:6,equipment:'Galaxy 14 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
                {no:7,equipment:'Galaxy 15 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
                {no:8,equipment:'Galaxy 16 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
                {no:9,equipment:'Galaxy A9 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
                {no:10,equipment:'Galaxy A9 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.table-box{margin-top:24px;border:1px solid $M-gray3;border-radius:4px;padding:8px 16px;width:100%;
    table{width:100%;text-align:center;font-size:14px;color:$M-gray5;
        tr{border-bottom:1px solid $M-gray3;
            // &:last-child{border:none;}
        }
        th{padding:13px 0;}
        .table-header{
            tr{font-weight:bold;color:$M-gray5;}
        }
        .table-body{
            tr:last-child{border-bottom:none;}
            .txt-center{text-align: center;padding:21px 0 13px;}
        }
    }
}
</style>