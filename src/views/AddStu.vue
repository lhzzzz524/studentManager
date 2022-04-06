<template>
  <div class="form">
    <el-card class="box-card">
      <el-form
        :model="user"
        ref="form"
        size="mini"
        label-position="left"
        label-width="70px"
        :rules="rules"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="user.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="学号" prop="sNo">
          <el-input v-model="user.sNo"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="user.email"></el-input>
        </el-form-item>
        <el-form-item label="出生年" prop="birth">
          <el-input v-model="user.birth"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="user.phone"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="user.address"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">提交</el-button>
          <el-button @click="resetUser">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import mock from "../mockData/mock.json";
import axios from "axios";
import About from "./About.vue";
export default {
  components: { About },
  data() {
    return {
      user: {
        sNo: "",
        name: "",
        email: "",
        sex: "",
        birth: "",
        phone: "",
        address: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入名字", trigger: "blur" },
          { min: 3, max: 4, message: "长度在 3 到 4 个字符", trigger: "blur" },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        sNo: [
          { required: true, message: "请输入学号", trigger: "blur" },
          {
            min: 8,
            max: 10,
            message: "长度在 8 到 10 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            min: 8,
            max: 10,
            message: "长度在 8 到 10 个字符",
            trigger: "blur",
          },
        ],
        birth: [{ required: true, message: "请输入出生年月", trigger: "blur" }],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { max: 11, message: "请输入真确的手机号", trigger: "blur" },
        ],
        address: [
          { required: true, message: "请输入家庭地址", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(valid);
          mock.data.findByPage.push(this.user);
          alert("提交成功!");
        } else {
          console.log("提交失败");
          return false;
        }
      });
    },
    resetUser() {
      for (let prop in this.user) {
        this.user[prop] = "";
      }
    },
  },
};
</script>

<style >
.box-card {
  width: 350px;
  padding: 30px;
}
.form {
  width: 300px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
