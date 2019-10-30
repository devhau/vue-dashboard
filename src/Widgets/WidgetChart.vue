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
    line-height: 50px;
    padding: 5px;
    background: #f8f9fc;
    border-bottom: 3px solid #aaa;
    font-weight: 700!important;
    font-size: 1rem;
    color:blue !important;
    height: 50px;
    width: 100%;
}
.widget-chart .chart-body{
    height: calc(100% - 50px);
    width: 100%;
}
.widget-chart .chart-body.hide-header{
  height: 100% !important;
}
</style>
<script>
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
    Value: 0
  }),
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
  }
};
</script>