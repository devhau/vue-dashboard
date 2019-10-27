<template>
  <v-row>
    <vue-dashboard :option.sync="DashboardConfig" @SaveOption="(data)=>console.log(data)" />
  </v-row>
</template>

<script>
export default {
  data: () => ({
    DashboardConfig: {
      Title: "Dashboard",
      Layout: [
        {
          id: "widget-000007",
          Title: "Fine",
          type: "Base",
          Permission: "00007",
          position: {
            x: 8,
            y: 2,
            w: 4,
            h: 5
          },
          hidden: false,
          pinned: false,
          data: {}
        },
        {
          id: "widget-000001",
          Title: "Day",
          type: "Base",
          Permission: "00001",
          position: {
            x: 0,
            y: 0,
            w: 3,
            h: 2
          },
          hidden: false,
          pinned: false,
          data: {}
        },
        {
          id: "widget-000002",
          Title: "Month",
          type: "Base",
          Permission: "00002",
          position: {
            x: 3,
            y: 0,
            w: 3,
            h: 2
          },
          hidden: false,
          pinned: false,
          data: {}
        },
        {
          id: "widget-000003",
          Title: "Year",
          type: "Base",
          Permission: "00003",
          position: {
            x: 6,
            y: 0,
            w: 3,
            h: 2
          },
          hidden: false,
          pinned: false,
          data: {}
        },
        {
          id: "widget-000004",
          Title: "All",
          type: "Base",
          Permission: "00004",
          position: {
            x: 9,
            y: 0,
            w: 3,
            h: 2
          },
          hidden: false,
          pinned: false,
          data: {}
        },
        {
          id: "widget-000005",
          Title: "Char",
          type: "Base",
          Permission: "00005",
          position: {
            x: 0,
            y: 2,
            w: 4,
            h: 5
          },
          hidden: false,
          pinned: false,
          data: {}
        },
        {
          id: "widget-000006",
          Title: "Line",
          type: "Base",
          Permission: "00006",
          position: {
            x: 4,
            y: 2,
            w: 4,
            h: 5
          },
          hidden: false,
          pinned: false,
          data: {}
        }
      ]
    }
  })
};
</script>
