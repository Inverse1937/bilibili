<template>
    <div class="tabs">
        <RouterLink to="/" tag="div" exact class="tab-item">首页</RouterLink>
        <RouterLink to="/hot" tag="div" class="tab-item">热门</RouterLink>
        <RouterLink to="/tothem" tag="div" class="tab-item">追番</RouterLink>
        <Router-link to="/thegen" tag="div" class="tab-item">国创</Router-link>
        <Router-link to="/music" tag="div" class="tab-item">音乐</Router-link>
    </div>
</template>

<script>
    export default {
        name: "Tabs"
    }
</script>
<style lang="scss" scoped>
.tabs{
display: flex;
padding-left: 1.024rem;
white-space: nowrap;
    .tab-item{
    text-align: center;
    float: left;
    width: 1.36533rem;
    color: #767676;
    font-size: .59733rem;
    margin-right: 1.49333rem;
    line-height: 1.28rem;
    &.link-active {
            color: #fb759b;
            border-bottom:2px solid #fb759b;
        }
    }
}


</style>