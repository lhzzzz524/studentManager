import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stuList: [],
    stuInfo: {},
    index: 0,
    isShowDialog: false,
    test: [1, 2, 3]
  },
  mutations: {
    initStuList (state, {data}) {
      state.stuList = data
    },
    updateStuList (state, {user, index}) {
      if (user) {
        state.stuList.splice(index, 1, user);
      } else {
        state.stuList.splice(index, 1);
      }
      
    },
    updateStuInfo (state, {index}) {
      state.stuInfo = state.stuList[index];
    },
    updateIndex (state, index) {
      state.index = index;
    },
    updateIsShowDialog (state, flag) {
      state.isShowDialog = flag;
    },
    changeTest (state, val) {
      state.test.push(val);
    }
  },
  actions: {

  }
})
