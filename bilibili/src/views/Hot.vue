<template>
    <div class="hot">
        <div class="title-item">
            <div class="head-item" v-for="(typen,index) in typen" :key="index">
                <span>{{typen.name}}</span>
            </div>
        </div>
        <HotContent :typen="typen"/>
    </div>
</template>

<script>
import HotContent from "../components/hot/HotContent"

    export default {
        name: "Hot",
        data: () => ({
      typen: [],
    }),
    mounted() {
      this.getHotData();
    },
    methods: {
      async getHotData() {
          let res = await this.$http("/api/typen")
        //   console.log(res)
          this.typen = res.data
          
          console.log(this.typen[0].content)
        } 
    },
        components:{
            HotContent
        }
    }
</script>

<style lang="scss" scoped>
   .hot{
       .title-item{
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            border-bottom: .02133rem solid #ccc;
            &::-webkit-scrollbar{
               display: none
            }
           .head-item{
               display: inline-block;
               color: #767676;
               font-size: .59733rem;
               line-height:  1.87733rem;
               margin-left:  1.024rem;
           }
       }
   }

</style>
