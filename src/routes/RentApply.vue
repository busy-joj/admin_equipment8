<template>
  <!-- 버튼 테스트중!! -->
  <div class="container" style="background: red">
    <h2>대여신청</h2>
    <BasicButton :class="{none : true , mn : true}">신청</BasicButton>
    <BasicButton :class="{gray : true}">대여</BasicButton>
    <BasicButton :class="{white : true}">대여</BasicButton>
    <BasicButton :class="{primary : true}">대여</BasicButton>
    <BasicButton :class="{primary : true}">대여</BasicButton>

    <IconButton :class="{search : true}"></IconButton>
    <IconButton :class="{search : true, big:true}"></IconButton>
    <IconButton :class="{close : true}"></IconButton>
    <IconButton :class="{check : true}"></IconButton>
    <IconButton :class="{arrow : true}"></IconButton>
    
  </div>
  
</template>

<script>
import BasicButton from '~/components/basic/BasicButton'
import IconButton from '~/components/basic/IconButton'

export default {
  components:{
    BasicButton,
    IconButton
  },
  data(){
    return{
            category:[
              { 
                text : '전체',
                isActive : false
              },
              { 
                text : '대여가능',
                isActive : false
              },
              { 
                text : 'Android',
                isActive : false
              },
              { 
                text : 'iOS',
                isActive : false
              },
              { 
                text : '폰',
                isActive : false
              },
              { 
                text : '태블릿',
                isActive : false
              },
              { 
                text : '유심',
                isActive : false
              },
              { 
                text : '기타',
                isActive : false
              }
            ],
            
        }
  },
  methods:{
    activeTab(e,i){
      e.preventDefault();
      console.log(this.isActive)
      this.category[i].isActive = !this.category[i].isActive
      console.log(this.isActive)
    }
  }
}
</script>