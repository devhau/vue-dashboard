<template>
  <div class="dashboard-setting">
    <div v-if="IsShowCode" class="row" :key="'Code'+CountWidget+'_'+ReRender">
      <div class="col-12" style="padding:5px 15px">
        <button class="btn btn-warning btn-sm" @click="IsShowCode=false">Hide code</button>
      </div>
      <div class="col-12" style="padding:5px 15px">
        <textarea disabled rows="15" v-html="option" class="form-control"></textarea>
      </div>
    </div>
    <div v-else-if="IsShowView" class="row" :key="'Code'+CountWidget+'_'+ReRender">
      <div class="col-12" style="padding:5px 15px">
        <button
          class="btn btn-warning btn-sm"
          @click="()=>{this.ReRender++;this.IsShowView=false; }"
        >Hide View</button>
      </div>
      <div class="col-12">
        <div style="padding:5px 1px;height:500px;overflow:auto;">
          <DashboardContainer dragSelector="*" :layout.sync="option.Layout" />
        </div>
      </div>
    </div>
    <div v-else class="row" :key="'Setting'+CountWidget+'_'+ReRender">
      <div class="col-lg-4">
        <input v-model="option.Title" class="form-control" placeholder="Name of dashboard" />
        <div class="row" style="margin-top:5px;margin-bottom:5px;">
          <div class="col-4">
            <button class="btn btn-primary btn-sm" @click="AddWidget()">Add widget</button>
          </div>
          <div class="col-4">
            <button class="btn btn-warning btn-sm" @click="IsShowCode=true">Show code</button>
          </div>
          <div class="col-4">
            <button class="btn btn-warning btn-sm" @click="IsShowView=true">Show view</button>
          </div>
        </div>
        <ul :key="'ListWidget'+CountWidget+'_'+ReRender" class="widgets">
          <li
            v-for="item in this.option.Layout"
            @click="CurrentWidget=item"
            :class="{'active':item.id===CurrentWidget.id}"
            :key="item.Key"
          >{{item.Title}}</li>
        </ul>
      </div>
      <div class="col" :key="'SettingWidget'+CountWidget+'_'+ReRender">
        <div class="row">
          <div class="form-group col-6">
            <label for="widget-name">Name widget :</label>
            <input id="widget-name" class="form-control" v-model="CurrentWidget.Title" />
          </div>
          <div class="form-group col-6">
            <label for="widget-permission">Code:</label>
            <input
              id="widget-permission"
              class="form-control"
              disabled
              v-model="CurrentWidget.Permission"
            />
          </div>
          <div class="form-group col-6">
            <label for="widget-hidden">Visit widget</label>
            <b-form-checkbox id="widget-hidden" v-model="CurrentWidget.hidden" switch>
              <span v-if="CurrentWidget.hidden">Hide</span>
              <span v-else>Show</span>
            </b-form-checkbox>
          </div>
          <div class="form-group col-6">
            <label for="widget-pinned">Pinned widget</label>
            <b-form-checkbox id="widget-pinned" v-model="CurrentWidget.pinned" switch>
              <span v-if="CurrentWidget.pinned">Pinned</span>
              <span v-else>Not Pinned</span>
            </b-form-checkbox>
          </div>
        </div>
        <fieldset style="max-height:400px;min-height:250px; overflow-y:auto;overflow-x:hidden;">
          <legend>Setting Data</legend>

          <div class="row">
            <div class="form-group col-6">
              <label for="widget-type">Type widget</label>
              <select
                class="form-control"
                id="widget-type"
                v-model="CurrentWidget.type"
                @change="ReRender++"
              >
                <option v-for="item in ['Base','Short']" :value="item" :key="item">{{item}}</option>
              </select>
            </div>
            <div class="form-group col-12">
              <component
                :is="GetWidgetType"
                :key="CurrentWidget.Key"
                :option="CurrentWidget"
                :IsSetting="true"
              />
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardContainer from "./DashboardContainer.vue";
import Widgets from './Widgets/index'
export default {
  components:{...Widgets,DashboardContainer},
  props: {
    option: null
  },
  computed: {
    GetWidgetType() {
      return "Widget" + this.CurrentWidget.type;
    }
  },
  data: () => ({
    IsShowCode: false,
    IsShowView: false,
    CountWidget: 0,
    CurrentWidget: null,
    ReRender: 0
  }),
  created() {
    if (this.option === undefined) {
      this.option = {};
    }
    if (this.option.Title === undefined) {
      this.option.Title = "Dashboard";
    }
    if (this.option.Layout === undefined) {
      this.option.Layout = [];
      this.AddWidget();
    } else {
      this.CountWidget = this.option.Layout.length;
      this.CurrentWidget = this.option.Layout[0];
    }
  },
  methods: {
    GetCodeNew() {
      var CodeNew = this.CountWidget + 1 + "";
      var len = 5 - CodeNew.length;
      do {
        CodeNew = "0" + CodeNew;
        len--;
      } while (len > 0);
      return CodeNew;
    },
    checkCollision(rect1, rect2) {
      return (
        (rect1.x === rect2.x && rect1.y === rect2.y) ||
        (rect1.x < rect2.x + rect2.w &&
          rect1.x + rect1.w > rect2.x &&
          rect1.y < rect2.y + rect2.h &&
          rect1.y + rect1.h > rect2.y)
      );
    },
    GetPositionNew() {
      var dong = 0;
      var isDone = false;
      var positionNew = {
        x: 0,
        y: 0,
        w: 4,
        h: 2
      };
      do {
        for (var cot = 0; cot < 13; cot++) {
          positionNew = {
            x: cot,
            y: dong,
            w: 4,
            h: 2
          };
          isDone = true;
          if (this.CountWidget > 0) {
            this.option.Layout.forEach(element => {
              if (this.checkCollision(positionNew, element.position)) {
                isDone = false;
                return false;
              }
            });
          }

          if (isDone) {
            break;
          }
        }
        if (isDone) {
          break;
        }
        dong++;
      } while (!isDone);

      return positionNew;
    },
    AddWidget() {
      var codeNew = this.GetCodeNew();
      this.CurrentWidget = {
        id: "widget-0" + codeNew,
        Title: "widget New : " + codeNew,
        type: "Base",
        Permission: codeNew,
        position: this.GetPositionNew(),
        hidden: false,
        pinned: false
      };
      this.option.Layout.push(this.CurrentWidget);
      this.CountWidget++;
    }
  }
};
</script>
<style>
.dashboard-setting{
  padding: 10px;
}
.dashboard-setting .widgets {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  overflow: auto;
  max-height: calc(100% - 80px);
  height: calc(100% - 80px);
}
.dashboard-setting .widgets li {
  padding: 5px;
  font-weight: 700;
}
.dashboard-setting .widgets .active,
.dashboard-setting .widgets li:hover {
  cursor: pointer;
  background: rgb(111, 80, 250);
  color: #fff;
}
.dashboard-setting fieldset {
  display: block;
  margin-left: 2px;
  margin-right: 2px;
  padding-top: 0.35em;
  padding-bottom: 0.625em;
  padding-left: 0.75em;
  padding-right: 0.75em;
  border: 1px groove #ccc;
}

.dashboard-setting legend {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  display: block;
  padding-left: 5px;
  padding-right: 5px;
  border: none;
}
</style>