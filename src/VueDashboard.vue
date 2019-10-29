<template>
  <div class="hauerp-vue-dashboard">
    <div class="popup-dashboard-setting" v-if="IsShowSetting">  
      <div class="popup-body">
        <DashboardSetting :option="OprionTemp" />
         <div class="popup-bottom">
            <button type="button" class="btn btn-success" @click="SaveSetting()">Save</button>
            <button type="button" class="btn btn-warning" @click="ClosePopup()">Close</button>
          </div>
      </div>
     
    </div>
     <h2 style="padding-left: 5px">
      <i class="fa fa-dashboard"/>  <span v-if="option&&option.Title!==undefined">{{option.Title}}</span><span v-else>Dashboard</span> 
      <button type="button" class="btn btn-primary btn-sm btn-setting-dashboard" @click="ShowSetting()"><i class="fas fa-cog"/>Setting</button>
    </h2>
    <DashboardContainer :layout.sync="option.Layout" :key="IndexDashboard" />
  </div>
</template>
<style>
.hauerp-vue-dashboard {
  width: 100%;
  height: 100%;
  padding: 20px;
  min-height: 400px;
}
.popup-dashboard-setting{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.popup-dashboard-setting .popup-body{
  clear: both;
  width: 80%;
  margin: 70px auto;
  background: #fff;

}
.popup-bottom{
  padding: 10px;
  text-align: right;
}
</style>
<script>

import DashboardContainer from "./DashboardContainer.vue";
import DashboardSetting from "./DashboardSetting.vue";
export default {
  components:{DashboardContainer,DashboardSetting},
  props: {
    option: null
  },
  mounted:{
    
  }
  ,
  data: () => ({
    OprionTemp: {},
    IndexDashboard:0,
    IsShowSetting: false
  }),
  created(){
    if(this.option==null){
      this.option={};
      this.$emit("option:update",this.option);
    }
  },
  methods: {
    ShowSetting() {
      this.OprionTemp = JSON.parse(JSON.stringify(this.option));
      this.IsShowSetting = true;
    },
    SaveSetting(){
      this.option={}
      this.option=JSON.parse(JSON.stringify(this.OprionTemp));
      this.$emit("SaveOption", this.OprionTemp);
      this.IndexDashboard++;
      this.ClosePopup();
    },
    ClosePopup(){
      this.OprionTemp ={}
      this.IsShowSetting = false;

    }
  }
};
</script>