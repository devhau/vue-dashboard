<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span style="color:#fff;font-weight:700">Vue</span>
        <span style="color:red;font-weight:700"> Dashboard</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/hauerp/vue-dashboard"
        target="_blank"
      >
        <span class="mr-2" style="color:#fff;font-weight:400">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>
<style>
.theme--light.v-sheet {
   color: #FFFFFF !important;
    background-color: #3f51b5  !important;
}
</style>
<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
