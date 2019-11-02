<template>
  <div class="hau-widget widget-chart">
    <div v-if="IsSetting" class="widget-setting">
      <h3>{{option.Title}}</h3>
       <div class="row">
          <div class="form-group col-6">
            <label for="widget-hidden">Hide Header</label>
            <b-form-checkbox v-model="option.data['HideHeader']" switch>
              <span v-if="option.data['HideHeader']">Hide</span>
              <span v-else>Show</span>
            </b-form-checkbox>
          </div>
          <div class="form-group col-6">
            <label for="widget-name">Default</label>
            <input id="widget-name" class="form-control" v-model="option.data['value']" />
          </div>
          <div class="form-group col-6">
            <label for="widget-permission">Unit</label>
            <input id="widget-permission" class="form-control" v-model="option.data['Unit']" />
          </div>
        </div>
    </div>
    <div v-else class="widget-display">
          <div v-if="!option.data['HideHeader']" class="chart-title">{{option.Title}}</div>
          <div class="chart-body" :class="{'hide-header':option.data['HideHeader']}">
            <canvas ref="chart" height="100%" width="100%"/>
          </div>
          <div class="chart-bottom">

          </div>   
  </div>
</template>
<style>
.widget-chart .widget-display{
  padding: 0 !important;
  border: 1px solid #aaa;
}
.widget-chart .chart-title{
    padding:10px 5px;
    background: #f8f9fc;
    border-bottom: 3px solid #aaa;
    font-weight: 700!important;
    font-size: 1rem;
    color:blue !important;
    width: 100%;
}
.widget-chart .chart-body{
    height: calc(100% - 40px);
    width: 100%;
    padding-bottom: 5px;
    position: relative;
}
.widget-chart .chart-body canvas{
  width: 100% !important;
  height: 100% !important;
}
.widget-chart .chart-body.hide-header{
  height: 100% !important;
}
</style>
<script>
var Chart = require('chart.js');
export default {
  props: {
    option: null,
    IsSetting: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    Title: "",
    Value: 0,
    ChartData:{
        labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
        datasets: [{
            label: 'Test1',
            data: [4, 6, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },{
            label: 'Test2',
            data: [8, 9, 3, 3, 6, 5],
            backgroundColor: 'rgba(255, 22, 132, 0.2)',
            borderColor: 'rgba(255, 99, 251, 1)',
            borderWidth: 1
        }]
    },
    ChartType:"bar",
    _chart:null
  }),
  mounted(){
    this.renderChart(this.ChartType,this.ChartData);
  },
  created() {
    if(this.option!=undefined){
      this.Title = this.option.Title;
      if( this.option.data===undefined)  this.option.data={}
      this.Value = this.option.data.Value;      
    }
  },
  updated(){
    if(this.option!=undefined){
      this.Title = this.option.Title;
      if( this.option.data===undefined)  this.option.data={}
      this.Value = this.option.data.Value;      
    }
  },
  watch: {
    option(_option) {
      if(_option!==undefined){
        this.Title = _option.Title;
        if(_option.data===undefined) _option.data={}
        this.Value = _option.data.Value;
      }
    }
  },
  methods:{
    renderChart(_type,_data){
      if(this._chart)this._chart.destroy();
      var ctx = this.$refs.chart.getContext('2d');
      this._chart = new Chart(ctx,{
        type:_type,
        data:_data
      });
    }
  }
};
</script>