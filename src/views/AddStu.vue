<template>
    <div>
        <form class="addStu" @submit.prevent>
            <div><label for="">姓名</label><input type="text" v-model="user.name"></div>
            <div class="sex-box">
                <label for="sex">性别</label>
                <input name="sex" type="radio" value="0" v-model="user.sex">男
                <input name="sex" type="radio" value="1" v-model="user.sex">女
            </div>
            <div><label for="">学号</label><input type="text" v-model="user.sNo"></div>
            <div><label for="">邮箱</label><input type="text" v-model="user.email"></div>
            <div><label for="">出生年</label><input type="text" v-model="user.birth"></div>
            <div><label for="">手机号</label><input type="text" v-model="user.phone"></div>
            <div><label for="">地址</label><input type="text" v-model="user.address"></div>
            <div class="operation">
                <input type="submit" value="提交" @click="addStu" />
                <input type="reset" value="重置" @click="resetUser" />
            </div>
        </form>
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            user: {
                sNo: '',
                name: '',
                email: '',
                sex: '',
                birth: '',
                phone: '',
                address: ''
            }
        }
    },
    methods: {
        addStu () {
            axios.get('http://api.duyiedu.com/api/student/addStudent', {
                params: {
                    appkey: '1419479392_1553871312917',
                    ...this.user
                }
            }).then(res => {
                alert(res.data.msg);
                this.resetUser();
            })
        },
        resetUser () {
            for (let prop in this.user) {
                this.user[prop] = '';
            }
        }
    }
};
</script>

<style scoped>
.addStu {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  height: 250px;
  background-color: #fff;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
}
.addStu > div {
  width: 100%;
}
.addStu > div > label {
  display: inline-block;
  width: 80px;
  text-align: right;
  margin-right: 10px;
}
.sex-box input {
  margin: 0 5px;
}
.operation {
  display: flex;
  justify-content: center;
}
.operation input {
  margin: 0 10px;
}
</style>
