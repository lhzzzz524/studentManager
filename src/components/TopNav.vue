<template>
  <div class="top-nav">
    <div class="title">
      <img src="../assets/images/logo.png" alt="四川大学锦江学院" />
      <span>四川大学锦江学院</span>
    </div>
    <div class="nav">
      <div class="el-icon-s-operation nav-icon" @click="changeNav"></div>
    </div>
    <ul
      :class="{ nav_list: true, navClick: top_nav_isClick }"
      @mouseleave="hideNav"
    >
      <router-link tag="li" to="/about" @click.native="hideNav"
        >关于我</router-link
      >
      <router-link tag="li" to="/stuList" @click.native="hideNav"
        >学生列表</router-link
      >
      <router-link tag="li" to="/addStu" @click.native="hideNav"
        >添加学生</router-link
      >
      <router-link tag="li" to="/chart" @click.native="hideNav"
        >图表</router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top_nav_isClick: false,
    };
  },
  methods: {
    changeNav() {
      this.top_nav_isClick = !this.top_nav_isClick;
    },
    hideNav() {
      this.top_nav_isClick = false;
    },
  },
};
</script>


<style scoped>
.top-nav {
  position: relative;
  width: 100%;
  height: 80px;
  line-height: 80px;
  background-color: rgb(117, 125, 136);
}
.title {
  float: left;
  margin-left: 20px;
  color: #fff;
}
.title img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
.title span {
  margin-left: 10px;
}

.nav {
  display: none;
  width: 100px;
  float: right;
  text-align: center;
  margin-right: 20px;
}
/* 点击后显示导航 */
ul.navClick {
  transform: translateY(0);
  transition: all 0.2s linear;
}
.nav-icon {
  font-size: 28px;
  color: #fff;
  vertical-align: middle;
}
.nav_list {
  position: absolute;
  left: 0;
  top: 80px;
  width: 100%;
  line-height: 30px;
  list-style: none;
  background-color: rgb(65, 65, 65);
  font-size: 14px;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  transform: translateY(-100%);
  z-index: -1;
  transition: all 0.2s linear;
}
.nav_list li:hover {
  background-color: rgb(184, 184, 184);
  color: #000;
}

@media screen and (max-width: 768px) {
  /* 当视口宽度小于768px时，改变导航位置 */
  .nav {
    display: block;
  }
}
</style>
