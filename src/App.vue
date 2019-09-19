<template>
    <div id="app">
        <top-nav></top-nav>
        <div class="main_box">
            <left-menu>
                <template #stuList>
                    <router-link tag="li" to="/stuList" class="item">学生列表</router-link>
                </template>
                <template #addStu>
                    <router-link tag="li" to="/addStu" class="item">添加学生</router-link>
                </template>
            </left-menu>
            <div class="content">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from './components/TopNav';
import LeftMenu from './components/LeftMenu';
export default {
    components: {
        TopNav,
        LeftMenu
    }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    html,
    body,
    #app {
        position: relative;
        z-index: -10;
        width: 100%;
        height: 100%;
    }

    .main_box {
        position: relative;
        z-index: -2;
        width: 100%;
        height: calc(100% - 80px);
        background-color: rgb(230, 230, 230);
    }

    .content {
        position: relative;
        float: left;
        width: calc(100% - 160px);
        height: 100%;
    }

    @media screen and (max-width: 768px) {
        /* 当视口宽度小于768px时，侧边导航消失，将conten区宽度设为100% */
        .content {
            width: 100%;
        }
    }
</style>
