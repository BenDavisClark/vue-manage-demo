<template>
  <div>
    <el-row>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>导航二</el-breadcrumb-item>
        <el-breadcrumb-item>地图</el-breadcrumb-item>
      </el-breadcrumb>
      <br/>
    </el-row>

    <div class="mapcontainer">
      <div class="amap-page-container">
        <div id="container"></div>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
import remoteLoad from '../../utils/remoteLoad.js'
export default {
  data () {
    return {
      selected: '',
      zoom: 12,
      center: [120.149799, 30.246539],
      markers: [],
      map: '',
      count: '',
      cluster: []
    }
  },
  created () {
    if (window.AMap && window.AMapUI) {
      this.initMap()
    } else {
      Promise.all([
        remoteLoad(
          'http://webapi.amap.com/maps?v=1.4.4&key=7f7cef2b7c475e679344f813fe161775&plugin=AMap.MarkerClusterer',
          'http://cache.amap.com/lbs/static/addToolbar.js'
        )
      ]).then(() => {
        this.initMap()
      })
    }
  },
  methods: {
    initMap () {
      let AMap = window.AMap
      this.map = new AMap.Map('container', {
        resizeEnable: true,
        center: this.center,
        zoom: this.zoom
      })
      var that = this
      this.map.plugin(['AMap.ToolBar'], function () {
        var tool = new AMap.ToolBar()
        that.map.addControl(tool)
      })
       //this.getMarker()
    },
    rerender: function () {
      this.$store.commit('SECHOOSEN', '')
      this.map.clearMap()
      this.initMap()
    },
    getMarker: function () {
      this.$store.commit('SET_SELECTED', this.selected)
      let AMap = window.AMap
      var selected = this.selected
      var that = this
      this.axios
        .post('/api/post/getrestaurant', { selected: selected })
        .then(res => {
          var data = res.data
          that.$store.commit('SET_RESTAURANT', data)
          var pointmarker = []
          for (let i = 0; i < data.length; i++) {
            var resname = data[i].resname
            var point = new AMap.Marker({
              position: data[i].lnglat.split(','),
              icon: 'static/mark.png',
              offset: new AMap.Pixel(-15, -15),
              animation: 'AMAP_ANIMATION_DROP',
              title: resname
            })
            point.on('click', function () {
              alert(data[i].resname)
            })
            pointmarker.push(point)
          }
          that.markers = pointmarker
          that.count = pointmarker.length
          setTimeout(() => {
            that.addCluster()
          }, 1000)
        })
      if (this.$store.state.res.choose) {
        var index = this.$store.state.res.choose - 1
        var item = this.$store.state.res.restaurant[index]
        this.map.setCenter(item.lnglat.split(','))
        this.map.setZoom(19)
      }
    },
    addCluster: function () {
      let AMap = window.AMap
      if (this.cluster.length) {
        this.cluster.setMap(null)
      }
      this.cluster = new AMap.MarkerClusterer(this.map, this.markers, {
        gridSize: 40,
        renderCluserMarker: this._renderCluserMarker
      })
    },
    _renderCluserMarker: function (context) {
      let AMap = window.AMap
      var factor = Math.pow(context.count / this.count, 1 / 18)
      var div = document.createElement('div')
      var Hue = 180 - factor * 180
      var bgColor = 'hsla(' + Hue + ',100%,50%,0.7)'
      var fontColor = 'hsla(' + Hue + ',100%,20%,1)'
      var borderColor = 'hsla(' + Hue + ',100%,40%,1)'
      var shadowColor = 'hsla(' + Hue + ',100%,50%,1)'
      div.style.backgroundColor = bgColor
      var size = Math.round(
        30 + Math.pow(context.count / this.count, 1 / 5) * 20
      )
      div.style.width = div.style.height = size + 'px'
      div.style.border = 'solid 1px ' + borderColor
      div.style.borderRadius = size / 2 + 'px'
      div.style.boxShadow = '0 0 1px ' + shadowColor
      div.innerHTML = context.count
      div.style.lineHeight = size + 'px'
      div.style.color = fontColor
      div.style.fontSize = '14px'
      div.style.textAlign = 'center'
      context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2))
      context.marker.setContent(div)
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
.amap-page-container,
.mapcontainer,
.amap-container {
  height: 800px;
}
.select-container {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 140px;
}
.select-area {
  font-size: 14px;
  width: auto;
  border: none;
  background: #fff;
  border-radius: 0 !important;
  outline: none;
  -webkit-appearance: none;
}
.select-area option {
  display: block;
  text-align: center;
  border-radius: none !important;
}
.el-aside, .el-main{
  overflow: hidden;
}
</style>
