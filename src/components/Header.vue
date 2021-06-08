<template>
    <div class="header">
        <div class="projname">互联网医疗健康平台</div>
        <div class="user">未登录</div>
    </div>
</template>
<script>
export default {
    name:'Header'
}
</script>

<style scoped>
    .header{
        position: absolute;
        height: 100%;
        width: 100%;
    }
    .header div{
        text-align: center;
        color: #fff;
    }
    .projname{
        position: absolute;
        width: 15%;
        padding: 25px 0 26px;
        font-weight: bold;
        font-size: 20px;
    }
    .user{
        position: absolute;
        width: 10%;
        padding: 25px 0 26px;
        left: 90%;
    }
</style>