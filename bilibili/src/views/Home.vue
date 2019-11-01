<template>
    <div class="home">
      <ContentHome :updata="updata" :lunbo="lunbo"/>
    </div>
  </template>
  
  <script>
   import ContentHome from "../components/content/ContentHome"
  
  export default {
    name: 'home',
    data: () => ({
      updata: {},
      lunbo:{}
    }),
    mounted() {
      this.getOffData();
    },
    methods: {
      async getOffData() {
          let res = await this.$http("/api/data")
          this.updata = res.data.list
          this.lunbo = res.data.lunbo
        } 
    },
    components: {
      ContentHome
    }
  }
  </script>
  <style lang="scss" scoped>
  .home{
    display: flex;
    width: 100%;
    height: 100%;
  }
  </style>
  