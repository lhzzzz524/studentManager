<template>
    <div class="stuList">
        <table>
            <thead>
                <td>学号</td>
                <td>姓名</td>
                <td>性别</td>
                <td>邮箱</td>
                <td>年龄</td>
                <td>手机号</td>
                <td>住址</td>
                <td>操作</td>
            </thead>
            <tbody>
                <tr v-for="(item, index) in stuList" :key="index">
                    <td>{{ item.sNo }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.sex === 0 ? '男' : '女' }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ new Date().getFullYear() - item.birth }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.address }}</td>
                    <td>
                        <button class="btn edit" @click="editStuInfo(index)">编辑</button>
                        <button class="btn del" @click="delStuInfo(index)">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <update-stu v-if="isShowDialog" @click.native="hideDialog"></update-stu>
    </div>
    
</template>

<script>
import UpdateStuInfo from '../components/student/UpdateStuInfo'
import UpdateStu from '../components/student/UpdateStu'
import { mapMutations, mapState } from 'vuex'
import axios from 'axios';
export default {
    components: {
        UpdateStuInfo,
        UpdateStu
    },
    mounted () {
        const req = axios.get('http://api.duyiedu.com/api/student/findByPage', {
            params: {
                page: 1,
                size: 8,
                appkey: '1419479392_1553871312917'
            }
        })
            .then(res => {
                if (res.data.status === 'success') {
                    const data = res.data.data.findByPage;
                    this.initStuList({ data });
                    console.log(res);
                } else {
                    alert(res.data.msg);
                }
            }, err => {
                alert(err);
            })
    },
    data () {
        return {
            // isShowDialog: false
        }
    },
    computed: {
        ...mapState(['isShowDialog']),
        ...mapState(['stuList'])
    },
    methods: {
        ...mapMutations(['initStuList']),
        ...mapMutations(['updateStuInfo']),
        ...mapMutations(['updateIndex']),
        ...mapMutations(['updateIsShowDialog']),
        ...mapMutations(['updateStuList']),
        editStuInfo (index) {
            this.updateStuInfo({ index });
            this.updateIndex(index);
            this.updateIsShowDialog(true);
        },
        hideDialog (event) {
            this.updateIsShowDialog(false);
        },
        delStuInfo (index) {
            const sNo = this.stuList[index].sNo
            axios.get('http://api.duyiedu.com/api/student/delBySno', {
                params: {
                    sNo,
                    appkey: '1419479392_1553871312917'
                }
            }).then(res => {
                this.updateStuList({index});
                console.log(this.stuList);
                alert(res.data.msg)
            })
        }
    }
}
</script>

<style>
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
</style>
