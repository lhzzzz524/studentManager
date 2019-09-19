<template>
    <div class="dialog">
        <update-stu-info @click.native.stop :test="test"></update-stu-info>
    </div>
</template>

<script>
import UpdateStuInfo from './UpdateStuInfo';
export default {
    components: {
        UpdateStuInfo
    }
}
</script>

<style scoped>
    .dialog {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(104, 104, 104, .6);
    }
</style>
