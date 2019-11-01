<template>
    <div class="home-item">
        <Carousel :lunbo="lunbo"/>
        <Content :updata="updata"/>
    </div>
</template>

<script>
import Carousel from "./Carousel"
import Content from "./Content"

    export default {
        name: "ContentHome",
        props:['updata','lunbo'],

        components:{
            Carousel,
            Content
        }
    }
</script>

<style lang="scss" scoped>
.home-item{
    flex: 1;
    display: block;
    margin: 0 .5rem;
}
</style>