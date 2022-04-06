<template>
  <div class="charts">
    <div id="left" style="width: 600px; height: 400px"></div>
    <div id="right" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["stuList"]),
  },
  data() {
    return {
      series: [
        {
          type: "pie",
          data: [],
        },
      ],
      sexSeries: [
        {
          type: "pie",
          data: [],
        },
      ],
    };
  },
  methods: {
    LeftEcharts() {
      let echarts = require("echarts");
      let charts = echarts.init(document.getElementById("left"));
      let rightCharts = echarts.init(document.getElementById("right"));
      let option = {
        title: {
          text: "地区分布",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        series: this.series,
      };
      let option1 = {
        title: {
          text: "男女比例",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        series: this.sexSeries,
      };
      charts.setOption(option);
      rightCharts.setOption(option1);
    },
  },
  mounted() {
    const xmap = this.stuList.map((item) => {
      return item.address;
    });
    const obj = {};
    xmap.forEach((item) => {
      if (obj[item]) {
        obj[item]++;
      } else {
        obj[item] = 1;
      }
    });
    for (let x in obj) {
      this.series[0].data.push({
        value: obj[x],
        name: x,
      });
    }

    const lmap = this.stuList.map((item) => {
      return item.sex;
    });
    const obj1 = {};
    lmap.forEach((item) => {
      if (obj1[item]) {
        obj1[item]++;
      } else {
        obj1[item] = 1;
      }
    });
    for (let x in obj1) {
      this.sexSeries[0].data.push({
        value: obj1[x],
        name: x == "0" ? "男" : "女",
      });
    }
    console.log(this.sexSeries[0].data);
    this.LeftEcharts();
  },
};
</script>

<style  scoped>
.charts {
  position: relative;
  top: 50%;
  margin-top: -200px;
  display: flex;
  justify-content: center;
}
</style>