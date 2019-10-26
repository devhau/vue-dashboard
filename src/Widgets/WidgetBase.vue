<template>
  <div class="widget-short">
    <div v-if="IsSetting" class="widget-setting">
      <h3>{{option.Title}}</h3>      
    </div>
    <div v-else class="widget-display">
     <h3>{{option.Title}}</h3>      
    </div>
  </div>
</template>
<style>
.widget-short{
  height: 100%;
}
.widget-short .icon{
  width: 80px;
  height: 80px;
  text-align: center;
  vertical-align: middle;
  line-height: 100%;
  border: 1px solid #ccc;
  padding:3px;
  border-radius: 100%;
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