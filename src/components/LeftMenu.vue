<template>
  <div class="left-menu">
    <p>学生管理</p>
    <ul class="nav_list">
      <slot name="about"></slot>
      <slot name="stuList"></slot>
      <slot name="addStu"></slot>
      <slot name="del"></slot>
      <slot name="edit"></slot>
      <slot name="find"></slot>
      <slot name="chart"></slot>
    </ul>
  </div>
</template>

<style scoped>
.left-menu {
  float: left;
  width: 160px;
  height: 100%;
  background-color: rgb(98, 115, 146);
  box-sizing: border-box;
  padding: 20px;
  font-size: 14px;
  color: #fff;
}
.left-menu p {
  color: rgb(221, 208, 208);
  font-weight: 700;
}
.nav_list {
  padding: 0;
  list-style: none;
  text-align: center;
}
.nav_list li {
  box-sizing: border-box;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
}
.item:hover {
  background-color: rgb(168, 168, 168);
  color: #000;
}

.exa_active {
  background-color: #fff;
  color: #000;
}

@media screen and (max-width: 768px) {
  /* 当视口宽度小于768px时，改变导航位置 */
  .left-menu {
    display: none;
  }
}
</style>
