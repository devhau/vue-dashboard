<template>
  <div class="widget-chart">
    <div v-if="IsSetting" class="widget-setting">
      <h3>{{option.Title}}</h3>
       <div class="row">
          <div class="form-group col-6">
            <label for="widget-name">Giá trị mặc định</label>
            <input id="widget-name" class="form-control" v-model="option.data.Value" />
          </div>
          <div class="form-group col-6">
            <label for="widget-permission">Unit</label>
            <input id="widget-permission" class="form-control" v-model="option.data.Unit" />
          </div>
        </div>
    </div>
    <div v-else class="widget-display">
        <div class="chart-card">
            <div class="chart-card-title">Thiết lập thử</div>
            <div class="chart-card-body">

            </div>
            <div class="chart-card-bottom">

            </div>
            
    </div>
  </div>
</template>
<style>
.widget-chart{
  height: 100%;
  border: 1px solid #e3e6f0;
}
.widget-chart .chart-card{
    width: 100%;
    height: 100%;
    background: #ffffff;
}
.widget-chart .chart-card .chart-card-title{
    line-height: 50px;
    padding: 5px;
    background: #f8f9fc;
    border-bottom: 1px solid #e3e6f0;
    font-weight: 700!important;
    font-size: 1rem;
    color:#4e73df!important;
    height: 50px;
    width: 100%;
}
.widget-chart .chart-card .chart-card-body{
    height: calc(100% - 50px);
    width: 100%;
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