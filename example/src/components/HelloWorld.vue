<template>
    <vue-dashboard :option.sync="DashboardConfig" @SaveOption="(data)=>console.log(data)" />
</template>

<script>
import widgets from './widgets';
export default {
  data: () => ({
    DashboardConfig: {...widgets}
  })
};
</script>
