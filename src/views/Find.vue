<template>
  <div class="stuList">
    <div class="search">
      <div>
        <el-input
          v-model="input"
          placeholder="请输入名字"
          class="name-search"
        ></el-input>
        <el-button icon="el-icon-search" circle></el-button>
      </div>
      <div>
        <el-input
          v-model="mix"
          placeholder="请输入年龄"
          class="age-search"
        ></el-input>
        <span>-</span>
        <el-input
          v-model="max"
          placeholder="请输入年龄"
          class="age-search"
        ></el-input>
      </div>
    </div>
    <table>
      <thead>
        <td>学号</td>
        <td>姓名</td>
        <td>性别</td>
        <td>邮箱</td>
        <td>年龄</td>
        <td>手机号</td>
        <td>住址</td>
      </thead>
      <tbody>
        <tr v-for="(item, index) in listData()" :key="index">
          <td>{{ item.sNo }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.sex === 0 ? "男" : "女" }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.birth }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UpdateStuInfo from "../components/student/UpdateStuInfo";
import UpdateStu from "../components/student/UpdateStu";
import { mapMutations, mapState } from "vuex";
import axios from "axios";
import mock from "../mockData/mock.json";
export default {
  components: {
    UpdateStuInfo,
    UpdateStu,
  },
  mounted() {
    if (mock.status === "success") {
      //将数据注入store
      const data = mock.data.findByPage;
      this.initStuList({ data });
    }
  },
  data() {
    return {
      input: "",
      mix: "",
      max: "",
    };
  },
  computed: {
    ...mapState(["stuList"]),
  },
  methods: {
    ...mapMutations(["initStuList"]),
    ...mapMutations(["updateStuList"]),
    delStuInfo(index) {
      this.updateStuList({ index });
    },
    btn() {
      return this.stuList.filter((item) => item.name.includes(this.input));
    },
    map() {
      return this.stuList.filter((item) => {
        return item.birth >= this.mix && item.birth <= this.max;
      });
    },
    myDefault() {
      return this.btn().filter((item) => {
        return item.birth >= this.mix && item.birth <= this.max;
      });
    },
    onlyMax() {
      return this.stuList.filter((item) => {
        return item.birth <= this.max;
      });
    },
    onlyMix() {
      return this.stuList.filter((item) => {
        return item.birth >= this.mix;
      });
    },
    maxNull() {
      return this.btn().filter((item) => {
        return item.birth >= this.mix;
      });
    },
    mixNull() {
      return this.btn().filter((item) => {
        return item.birth <= this.max;
      });
    },
    listData() {
      //只输入名字
      if (this.input && !this.mix && !this.max) {
        return this.btn();
        //大小年龄都输入了
      } else if (!this.input && this.mix && this.max) {
        return this.map();
        //都输入
      } else if (this.input && this.mix && this.max) {
        return this.myDefault();
        //只输入了最大年龄
      } else if (!this.input && !this.mix && this.max) {
        return this.onlyMax();
        //没有输入最大年龄
      } else if (this.input && this.mix && !this.max) {
        return this.maxNull();
        //只输入最小年龄
      } else if (!this.input && this.mix && !this.max) {
        return this.onlyMix();
        //没有输入最小年龄
      } else if (this.input && !this.mix && this.max) {
        return this.mixNull();
      }
      return this.stuList;
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  text-align: center;
  font-size: 14px;
}
table thead {
  background-color: rgb(227, 232, 238);
  color: rgb(111, 147, 151);
  font-weight: 700;
}
table tbody {
  background-color: #fff;
}
.btn {
  cursor: pointer;
  padding: 2px 10px;
  margin: 5px 1px;
  outline: none;
  border: none;
  border-radius: 5px;
}
.edit {
  background-color: rgb(92, 184, 92);
}
.edit:hover {
  background-color: rgb(83, 168, 83);
}
.del {
  background-color: rgb(217, 83, 79);
}
.del:hover {
  background-color: rgb(179, 78, 75);
}
td {
  height: 32px;
}
.search {
  display: flex;
  margin: 20px;
}
.search div {
  flex: 1;
  text-align: center;
}
.el-button {
  position: relative;
  top: 1px;
  right: 40px;
  height: 38px;
}
/deep/ .el-input__inner {
  border-radius: 20px;
}
/deep/.name-search {
  width: 300px;
}
/deep/ .age-search {
  width: 105px;
}
span {
  margin: 0 10px;
}
</style>
