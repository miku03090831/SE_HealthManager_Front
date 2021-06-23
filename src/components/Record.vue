<template>
    <div class="Record">
        <StatOfRecord></StatOfRecord>
        <RecordList :user=user></RecordList>
    </div>
</template>

<script>
import StatOfRecord from "./StatOfRecord";
import RecordList from "./RecordList";
export default {
    name:'Record',
    props:['user'],
    components:{
        StatOfRecord,
        RecordList
    }
}
</script>

<style scoped>
    .Record{
        width: 100%;
        height: 100%;
    }
</style>