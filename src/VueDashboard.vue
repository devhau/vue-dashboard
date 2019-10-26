<template>
  <div class="hauerp-vue-dashboard">
     <h2 style="padding-left: 5px">
      <i class="fa fa-dashboard"/>  <span v-if="Option&&Option.Title!==undefined">{{Option.Title}}</span><span v-else>Bảng điều khiển</span> 
      <div class="btn btn-primary btn-sm btn-setting-dashboard" @click="ShowSetting()"><i class="fa fa-cog"/> Thiết lập</div>
    </h2>
    <DashboardContainer />
    <DashboardSetting :option="OprionTemp" />
  </div>
</template>
<style>
.hauerp-vue-dashboard {
  width: 100%;
  height: 100%;
  background: #cccccc;
  clear: both;
}
</style>
<script>
export default {
  props: {
    Option: null
  },
  data: () => ({
    OprionTemp: {},
    IsShowSetting: false
  }),
  methods: {
    ShowSetting() {
      this.OprionTemp = this.Option;
      this.IsShowSetting = true;
    }
  }
};
</script>