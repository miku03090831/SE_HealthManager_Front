<template>
    <div class="Record">
        <StatOfRecord></StatOfRecord>
        <RecordList></RecordList>
    </div>
</template>

<script>
import StatOfRecord from "./StatOfRecord";
import RecordList from "./RecordList";
export default {
    name:'Record',
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