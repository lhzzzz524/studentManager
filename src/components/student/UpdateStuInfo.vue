<template>
    <div >
        <form class="addStu" @submit.prevent>
            <div><label for="">姓名</label><input type="text" :value="stuInfo.name" @input="changeModal('name', $event.target.value)"></div>
            <div class="sex-box">
                <label for="sex">性别</label>
                <input name="sex" type="radio" value="0" :checked="stuInfo.sex === 0" @change="changeModal('sex', 0)">男
                <input name="sex" type="radio" value="1" :checked="stuInfo.sex === 1" @change="changeModal('sex', 1)">女
            </div>
            <div><label for="">学号</label><input type="text" :value="stuInfo.sNo" @input="changeModal('sNo', $event.target.value)"></div>
            <div><label for="">邮箱</label><input type="text" :value="stuInfo.email" @input="changeModal('email', $event.target.value)"></div>
            <div><label for="">出生年</label><input type="text" :value="stuInfo.birth" @input="changeModal('birth', $event.target.value)"></div>
            <div><label for="">手机号</label><input type="text" :value="stuInfo.phone" @input="changeModal('phone', $event.target.value)"></div>
            <div><label for="">地址</label><input type="text" :value="stuInfo.address" @input="changeModal('address', $event.target.value)"></div>
            <div class="operation">
                <input type="submit" value="提交" @click="updateStu" />
                <input type="reset" value="重置" />
            </div>
        </form>
        
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
export default {
    data () {
        return {
            user: {}
        }
    },
    computed: {
        ...mapState(['stuInfo']),
        ...mapState(['index'])
    },
    methods: {
        ...mapMutations(['updateStuList']),
        ...mapMutations(['updateIsShowDialog']),
        changeModal (prop, val) {
            this.user[prop] = val;
        },
        updateStu () {
            const user = Object.assign({}, this.stuInfo, this.user);
            const index = this.index;
            axios.get('http://api.duyiedu.com/api/student/updateStudent', {
                params: {
                    appkey: '1419479392_1553871312917',
                    ...user
                }
            }).then(res => {
                this.updateStuList({user, index});
                this.updateIsShowDialog(false);
                alert(res.data.msg);
            })
        }
    }
}
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
        justify-content: center;;
    }
    .operation input {
        margin: 0 10px;
    }
</style>
