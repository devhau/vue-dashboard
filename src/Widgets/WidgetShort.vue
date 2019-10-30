<template>
  <div class="hau-widget widget-short">
    <div v-if="IsSetting" class="widget-setting">
      <h3>{{option.Title}}</h3>
       <div class="row">
          <div class="form-group col-6">
            <label for="widget-name">Default</label>
            <input id="widget-name" class="form-control" v-model="option.data['Value']" />
          </div>
          <div class="form-group col-6">
            <label for="widget-permission">Unit</label>
            <input id="widget-permission" class="form-control" v-model="option.data.Unit" />
          </div>
        </div>
    </div>
    <div v-else class="widget-display">
      <div class="row">
        <div class="col">
          <h5 class="card-title text-uppercase text-muted mb-0">{{Title}}</h5>
          <span class="h2 font-weight-bold mb-0">{{Value}}</span>
        </div>
        <div class="col-auto">
          <div class="icon">
            <i class="fas fa-calendar fa-2x"></i>
          </div>
        </div>
      </div>
      <p class="mt-3 mb-0 text-muted text-sm">
        <span class="text-success mr-2">
          <i class="fa fa-arrow-up"></i> {{option.data['Value']}}%
        </span>
        <span class="text-nowrap"></span>
      </p>
    </div>
  </div>
</template>
<style>
.widget-short{
  height: 100%;
  width: 100%;
}
.widget-short .widget-display{
  border: 1px solid #aaa;
  border-left: 15px solid #aaa;
  color:blue !important;
  padding: 0px 10px !important;
}
.widget-short .icon{
  background: wheat;
  border: 1px solid wheat;
  border-radius: 60px;
  height: 60px;
  width: 60px;
  text-align: center;
  line-height: 69px;
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