"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatefrontend"]("app",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OSMap.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OSMap.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      homedataLocations: [],\n      marketdataLocations: []\n    };\n  },\n  mounted() {\n    //add \n    axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://localhost:8000/store_closure/api/homedata/locations/').then(response => {\n      this.homedataLocations = response.data;\n      this.displayMap();\n\n      // this.homedataLocations = response.data\n      // console.log(this.homedataLocations)\n      // this.displayMap()\n    }).catch(error => {\n      console.log(error);\n    });\n    axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://localhost:8000/store_closure/api/marketdata/locations/').then(response => {\n      this.marketdataLocations = response.data;\n\n      //this.marketdataLocations = response.data\n      //console.log(this.marketdataLocations)\n      //this.displayMap()\n    }).catch(error => {\n      console.log(error);\n    });\n  },\n  methods: {\n    displayMap() {\n      // Initialize the map\n      let mapOptions = {\n        //center:[40.0171, -83.0168],\n        center: [40.0363228657714, -82.98385714469946],\n        zoom: 14\n      };\n      let map = new (leaflet__WEBPACK_IMPORTED_MODULE_1___default().map)('OpenStreetMap', mapOptions);\n      let layer = new (leaflet__WEBPACK_IMPORTED_MODULE_1___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\n      map.addLayer(layer);\n      var legend = leaflet__WEBPACK_IMPORTED_MODULE_1___default().control({\n        position: 'bottomright'\n      });\n      legend.onAdd = function (map) {\n        var div = leaflet__WEBPACK_IMPORTED_MODULE_1___default().DomUtil.create('div', 'info legend');\n      };\n      let categoryIcons = {\n        LRHC: leaflet__WEBPACK_IMPORTED_MODULE_1___default().icon({\n          iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',\n          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',\n          iconSize: [25, 41],\n          iconAnchor: [12, 41],\n          popupAnchor: [1, -34],\n          shadowSize: [41, 41]\n        }),\n        ERHC: leaflet__WEBPACK_IMPORTED_MODULE_1___default().icon({\n          iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',\n          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',\n          iconSize: [25, 41],\n          iconAnchor: [12, 41],\n          popupAnchor: [1, -34],\n          shadowSize: [41, 41]\n        }),\n        ERLC: leaflet__WEBPACK_IMPORTED_MODULE_1___default().icon({\n          iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',\n          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',\n          iconSize: [25, 41],\n          iconAnchor: [12, 41],\n          popupAnchor: [1, -34],\n          shadowSize: [41, 41]\n        }),\n        LRLC: leaflet__WEBPACK_IMPORTED_MODULE_1___default().icon({\n          iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',\n          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',\n          iconSize: [25, 41],\n          iconAnchor: [12, 41],\n          popupAnchor: [1, -34],\n          shadowSize: [41, 41]\n        }),\n        SPM: leaflet__WEBPACK_IMPORTED_MODULE_1___default().icon({\n          iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',\n          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',\n          iconSize: [25, 41],\n          iconAnchor: [12, 41],\n          popupAnchor: [1, -34],\n          shadowSize: [41, 41]\n        }),\n        CSPM: leaflet__WEBPACK_IMPORTED_MODULE_1___default().icon({\n          iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',\n          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',\n          iconSize: [25, 41],\n          iconAnchor: [12, 41],\n          popupAnchor: [1, -34],\n          shadowSize: [41, 41]\n        })\n      };\n\n      // Add markers for each location\n      this.homedataLocations.forEach(location => {\n        let categoryIcon = categoryIcons[location.category];\n        leaflet__WEBPACK_IMPORTED_MODULE_1___default().marker([location.latitude, location.longitude], {\n          icon: categoryIcon\n        }).addTo(map);\n      });\n      // Add markers for each location\n      this.marketdataLocations.forEach(location => {\n        let categoryIcon = categoryIcons[location.category];\n        leaflet__WEBPACK_IMPORTED_MODULE_1___default().marker([location.latitude, location.longitude], {\n          icon: categoryIcon\n        }).addTo(map);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL09TTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL09TTWFwLnZ1ZT9mODk2Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZCA9XCJPcGVuU3RyZWV0TWFwXCI+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4gIGltcG9ydCBMIGZyb20gJ2xlYWZsZXQnXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaG9tZWRhdGFMb2NhdGlvbnM6IFtdLFxuICAgICAgICBtYXJrZXRkYXRhTG9jYXRpb25zOiBbXSxcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQgKCkge1xuICAgICAgLy9hZGQgXG4gICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9zdG9yZV9jbG9zdXJlL2FwaS9ob21lZGF0YS9sb2NhdGlvbnMvJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5ob21lZGF0YUxvY2F0aW9ucyA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgdGhpcy5kaXNwbGF5TWFwKCk7XG5cbiAgICAgICAgLy8gdGhpcy5ob21lZGF0YUxvY2F0aW9ucyA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ob21lZGF0YUxvY2F0aW9ucylcbiAgICAgICAgLy8gdGhpcy5kaXNwbGF5TWFwKClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH0pO1xuICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvc3RvcmVfY2xvc3VyZS9hcGkvbWFya2V0ZGF0YS9sb2NhdGlvbnMvJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5tYXJrZXRkYXRhTG9jYXRpb25zID0gcmVzcG9uc2UuZGF0YVxuXG4gICAgICAgIC8vdGhpcy5tYXJrZXRkYXRhTG9jYXRpb25zID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubWFya2V0ZGF0YUxvY2F0aW9ucylcbiAgICAgICAgLy90aGlzLmRpc3BsYXlNYXAoKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGRpc3BsYXlNYXAgKCkge1xuICAgICAgICBcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgbWFwXG4gICAgICAgIGxldCBtYXBPcHRpb25zID0ge1xuICAgICAgICAgIC8vY2VudGVyOls0MC4wMTcxLCAtODMuMDE2OF0sXG4gICAgICAgICAgY2VudGVyOls0MC4wMzYzMjI4NjU3NzE0LCAtODIuOTgzODU3MTQ0Njk5NDZdLFxuICAgICAgICAgIHpvb206MTRcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWFwID0gbmV3IEwubWFwKCdPcGVuU3RyZWV0TWFwJyAsIG1hcE9wdGlvbnMpO1xuICAgICAgICBsZXQgbGF5ZXIgPSBuZXcgTC5UaWxlTGF5ZXIoJ2h0dHA6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnKTtcbiAgICAgICAgbWFwLmFkZExheWVyKGxheWVyKTtcblxuICAgICAgICB2YXIgbGVnZW5kID0gTC5jb250cm9sKHtwb3NpdGlvbjogJ2JvdHRvbXJpZ2h0J30pO1xuXG4gICAgICAgIGxlZ2VuZC5vbkFkZCA9IGZ1bmN0aW9uIChtYXApIHtcbiAgICAgICAgIHZhciBkaXYgPSBMLkRvbVV0aWwuY3JlYXRlKCdkaXYnLCAnaW5mbyBsZWdlbmQnKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGNhdGVnb3J5SWNvbnMgPSB7XG4gICAgICAgICAgTFJIQyA6IEwuaWNvbih7XG4gICAgICAgICAgICBpY29uVXJsOiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9wb2ludGhpL2xlYWZsZXQtY29sb3ItbWFya2Vycy9tYXN0ZXIvaW1nL21hcmtlci1pY29uLTJ4LXJlZC5wbmcnLFxuICAgICAgICAgICAgc2hhZG93VXJsOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbGVhZmxldC8xLjMuNC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnLFxuICAgICAgICAgICAgaWNvblNpemU6IFsyNSwgNDFdLFxuICAgICAgICAgICAgaWNvbkFuY2hvcjogWzEyLCA0MV0sXG4gICAgICAgICAgICBwb3B1cEFuY2hvcjogWzEsIC0zNF0sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiBbNDEsIDQxXVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIEVSSEMgOiBMLmljb24oe1xuICAgICAgICAgICAgaWNvblVybDogJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vcG9pbnRoaS9sZWFmbGV0LWNvbG9yLW1hcmtlcnMvbWFzdGVyL2ltZy9tYXJrZXItaWNvbi0yeC1ibHVlLnBuZycsXG4gICAgICAgICAgICBzaGFkb3dVcmw6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9sZWFmbGV0LzEuMy40L2ltYWdlcy9tYXJrZXItc2hhZG93LnBuZycsXG4gICAgICAgICAgICBpY29uU2l6ZTogWzI1LCA0MV0sXG4gICAgICAgICAgICBpY29uQW5jaG9yOiBbMTIsIDQxXSxcbiAgICAgICAgICAgIHBvcHVwQW5jaG9yOiBbMSwgLTM0XSxcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IFs0MSwgNDFdXG4gICAgICAgICAgfSksXG4gICAgICAgICAgRVJMQyA6IEwuaWNvbih7XG4gICAgICAgICAgICBpY29uVXJsOiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9wb2ludGhpL2xlYWZsZXQtY29sb3ItbWFya2Vycy9tYXN0ZXIvaW1nL21hcmtlci1pY29uLTJ4LWdyZWVuLnBuZycsXG4gICAgICAgICAgICBzaGFkb3dVcmw6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9sZWFmbGV0LzEuMy40L2ltYWdlcy9tYXJrZXItc2hhZG93LnBuZycsXG4gICAgICAgICAgICBpY29uU2l6ZTogWzI1LCA0MV0sXG4gICAgICAgICAgICBpY29uQW5jaG9yOiBbMTIsIDQxXSxcbiAgICAgICAgICAgIHBvcHVwQW5jaG9yOiBbMSwgLTM0XSxcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IFs0MSwgNDFdXG4gICAgICAgICAgfSksXG4gICAgICAgICAgTFJMQyA6IEwuaWNvbih7XG4gICAgICAgICAgICBpY29uVXJsOiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9wb2ludGhpL2xlYWZsZXQtY29sb3ItbWFya2Vycy9tYXN0ZXIvaW1nL21hcmtlci1pY29uLTJ4LW9yYW5nZS5wbmcnLFxuICAgICAgICAgICAgc2hhZG93VXJsOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbGVhZmxldC8xLjMuNC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnLFxuICAgICAgICAgICAgaWNvblNpemU6IFsyNSwgNDFdLFxuICAgICAgICAgICAgaWNvbkFuY2hvcjogWzEyLCA0MV0sXG4gICAgICAgICAgICBwb3B1cEFuY2hvcjogWzEsIC0zNF0sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiBbNDEsIDQxXVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIFNQTSA6IEwuaWNvbih7XG4gICAgICAgICAgICBpY29uVXJsOiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9wb2ludGhpL2xlYWZsZXQtY29sb3ItbWFya2Vycy9tYXN0ZXIvaW1nL21hcmtlci1pY29uLTJ4LXZpb2xldC5wbmcnLFxuICAgICAgICAgICAgc2hhZG93VXJsOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbGVhZmxldC8xLjMuNC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnLFxuICAgICAgICAgICAgaWNvblNpemU6IFsyNSwgNDFdLFxuICAgICAgICAgICAgaWNvbkFuY2hvcjogWzEyLCA0MV0sXG4gICAgICAgICAgICBwb3B1cEFuY2hvcjogWzEsIC0zNF0sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiBbNDEsIDQxXVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIENTUE0gOiBMLmljb24oe1xuICAgICAgICAgICAgaWNvblVybDogJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vcG9pbnRoaS9sZWFmbGV0LWNvbG9yLW1hcmtlcnMvbWFzdGVyL2ltZy9tYXJrZXItaWNvbi0yeC15ZWxsb3cucG5nJyxcbiAgICAgICAgICAgIHNoYWRvd1VybDogJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2xlYWZsZXQvMS4zLjQvaW1hZ2VzL21hcmtlci1zaGFkb3cucG5nJyxcbiAgICAgICAgICAgIGljb25TaXplOiBbMjUsIDQxXSxcbiAgICAgICAgICAgIGljb25BbmNob3I6IFsxMiwgNDFdLFxuICAgICAgICAgICAgcG9wdXBBbmNob3I6IFsxLCAtMzRdLFxuICAgICAgICAgICAgc2hhZG93U2l6ZTogWzQxLCA0MV1cbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEFkZCBtYXJrZXJzIGZvciBlYWNoIGxvY2F0aW9uXG4gICAgICAgIHRoaXMuaG9tZWRhdGFMb2NhdGlvbnMuZm9yRWFjaChsb2NhdGlvbiA9PiB7XG5cbiAgICAgICAgICBsZXQgY2F0ZWdvcnlJY29uID0gY2F0ZWdvcnlJY29uc1tsb2NhdGlvbi5jYXRlZ29yeV07XG4gICAgICAgICAgTC5tYXJrZXIoW2xvY2F0aW9uLmxhdGl0dWRlLCBsb2NhdGlvbi5sb25naXR1ZGVdLCB7aWNvbjogY2F0ZWdvcnlJY29ufSkuYWRkVG8obWFwKTtcblxuICAgICAgICB9KVxuICAgICAgICAvLyBBZGQgbWFya2VycyBmb3IgZWFjaCBsb2NhdGlvblxuICAgICAgICB0aGlzLm1hcmtldGRhdGFMb2NhdGlvbnMuZm9yRWFjaChsb2NhdGlvbiA9PiB7XG5cbiAgICAgICAgICBsZXQgY2F0ZWdvcnlJY29uID0gY2F0ZWdvcnlJY29uc1tsb2NhdGlvbi5jYXRlZ29yeV07XG4gICAgICAgICAgTC5tYXJrZXIoW2xvY2F0aW9uLmxhdGl0dWRlLCBsb2NhdGlvbi5sb25naXR1ZGVdLCB7aWNvbjogY2F0ZWdvcnlJY29ufSkuYWRkVG8obWFwKTtcblxuICAgICAgICB9KVxuXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OSMap.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OSMap.vue?vue&type=template&id=7b8bc8f8":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OSMap.vue?vue&type=template&id=7b8bc8f8 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  id: \"OpenStreetMap\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9PU01hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I4YmM4ZjguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQUE7O0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL09TTWFwLnZ1ZT9mODk2Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZCA9XCJPcGVuU3RyZWV0TWFwXCI+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4gIGltcG9ydCBMIGZyb20gJ2xlYWZsZXQnXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaG9tZWRhdGFMb2NhdGlvbnM6IFtdLFxuICAgICAgICBtYXJrZXRkYXRhTG9jYXRpb25zOiBbXSxcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQgKCkge1xuICAgICAgLy9hZGQgXG4gICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9zdG9yZV9jbG9zdXJlL2FwaS9ob21lZGF0YS9sb2NhdGlvbnMvJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5ob21lZGF0YUxvY2F0aW9ucyA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgdGhpcy5kaXNwbGF5TWFwKCk7XG5cbiAgICAgICAgLy8gdGhpcy5ob21lZGF0YUxvY2F0aW9ucyA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ob21lZGF0YUxvY2F0aW9ucylcbiAgICAgICAgLy8gdGhpcy5kaXNwbGF5TWFwKClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH0pO1xuICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvc3RvcmVfY2xvc3VyZS9hcGkvbWFya2V0ZGF0YS9sb2NhdGlvbnMvJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5tYXJrZXRkYXRhTG9jYXRpb25zID0gcmVzcG9uc2UuZGF0YVxuXG4gICAgICAgIC8vdGhpcy5tYXJrZXRkYXRhTG9jYXRpb25zID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubWFya2V0ZGF0YUxvY2F0aW9ucylcbiAgICAgICAgLy90aGlzLmRpc3BsYXlNYXAoKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGRpc3BsYXlNYXAgKCkge1xuICAgICAgICBcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgbWFwXG4gICAgICAgIGxldCBtYXBPcHRpb25zID0ge1xuICAgICAgICAgIC8vY2VudGVyOls0MC4wMTcxLCAtODMuMDE2OF0sXG4gICAgICAgICAgY2VudGVyOls0MC4wMzYzMjI4NjU3NzE0LCAtODIuOTgzODU3MTQ0Njk5NDZdLFxuICAgICAgICAgIHpvb206MTRcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWFwID0gbmV3IEwubWFwKCdPcGVuU3RyZWV0TWFwJyAsIG1hcE9wdGlvbnMpO1xuICAgICAgICBsZXQgbGF5ZXIgPSBuZXcgTC5UaWxlTGF5ZXIoJ2h0dHA6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnKTtcbiAgICAgICAgbWFwLmFkZExheWVyKGxheWVyKTtcblxuICAgICAgICB2YXIgbGVnZW5kID0gTC5jb250cm9sKHtwb3NpdGlvbjogJ2JvdHRvbXJpZ2h0J30pO1xuXG4gICAgICAgIGxlZ2VuZC5vbkFkZCA9IGZ1bmN0aW9uIChtYXApIHtcbiAgICAgICAgIHZhciBkaXYgPSBMLkRvbVV0aWwuY3JlYXRlKCdkaXYnLCAnaW5mbyBsZWdlbmQnKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGNhdGVnb3J5SWNvbnMgPSB7XG4gICAgICAgICAgTFJIQyA6IEwuaWNvbih7XG4gICAgICAgICAgICBpY29uVXJsOiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9wb2ludGhpL2xlYWZsZXQtY29sb3ItbWFya2Vycy9tYXN0ZXIvaW1nL21hcmtlci1pY29uLTJ4LXJlZC5wbmcnLFxuICAgICAgICAgICAgc2hhZG93VXJsOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbGVhZmxldC8xLjMuNC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnLFxuICAgICAgICAgICAgaWNvblNpemU6IFsyNSwgNDFdLFxuICAgICAgICAgICAgaWNvbkFuY2hvcjogWzEyLCA0MV0sXG4gICAgICAgICAgICBwb3B1cEFuY2hvcjogWzEsIC0zNF0sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiBbNDEsIDQxXVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIEVSSEMgOiBMLmljb24oe1xuICAgICAgICAgICAgaWNvblVybDogJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vcG9pbnRoaS9sZWFmbGV0LWNvbG9yLW1hcmtlcnMvbWFzdGVyL2ltZy9tYXJrZXItaWNvbi0yeC1ibHVlLnBuZycsXG4gICAgICAgICAgICBzaGFkb3dVcmw6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9sZWFmbGV0LzEuMy40L2ltYWdlcy9tYXJrZXItc2hhZG93LnBuZycsXG4gICAgICAgICAgICBpY29uU2l6ZTogWzI1LCA0MV0sXG4gICAgICAgICAgICBpY29uQW5jaG9yOiBbMTIsIDQxXSxcbiAgICAgICAgICAgIHBvcHVwQW5jaG9yOiBbMSwgLTM0XSxcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IFs0MSwgNDFdXG4gICAgICAgICAgfSksXG4gICAgICAgICAgRVJMQyA6IEwuaWNvbih7XG4gICAgICAgICAgICBpY29uVXJsOiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9wb2ludGhpL2xlYWZsZXQtY29sb3ItbWFya2Vycy9tYXN0ZXIvaW1nL21hcmtlci1pY29uLTJ4LWdyZWVuLnBuZycsXG4gICAgICAgICAgICBzaGFkb3dVcmw6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9sZWFmbGV0LzEuMy40L2ltYWdlcy9tYXJrZXItc2hhZG93LnBuZycsXG4gICAgICAgICAgICBpY29uU2l6ZTogWzI1LCA0MV0sXG4gICAgICAgICAgICBpY29uQW5jaG9yOiBbMTIsIDQxXSxcbiAgICAgICAgICAgIHBvcHVwQW5jaG9yOiBbMSwgLTM0XSxcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IFs0MSwgNDFdXG4gICAgICAgICAgfSksXG4gICAgICAgICAgTFJMQyA6IEwuaWNvbih7XG4gICAgICAgICAgICBpY29uVXJsOiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9wb2ludGhpL2xlYWZsZXQtY29sb3ItbWFya2Vycy9tYXN0ZXIvaW1nL21hcmtlci1pY29uLTJ4LW9yYW5nZS5wbmcnLFxuICAgICAgICAgICAgc2hhZG93VXJsOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbGVhZmxldC8xLjMuNC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnLFxuICAgICAgICAgICAgaWNvblNpemU6IFsyNSwgNDFdLFxuICAgICAgICAgICAgaWNvbkFuY2hvcjogWzEyLCA0MV0sXG4gICAgICAgICAgICBwb3B1cEFuY2hvcjogWzEsIC0zNF0sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiBbNDEsIDQxXVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIFNQTSA6IEwuaWNvbih7XG4gICAgICAgICAgICBpY29uVXJsOiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9wb2ludGhpL2xlYWZsZXQtY29sb3ItbWFya2Vycy9tYXN0ZXIvaW1nL21hcmtlci1pY29uLTJ4LXZpb2xldC5wbmcnLFxuICAgICAgICAgICAgc2hhZG93VXJsOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbGVhZmxldC8xLjMuNC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnLFxuICAgICAgICAgICAgaWNvblNpemU6IFsyNSwgNDFdLFxuICAgICAgICAgICAgaWNvbkFuY2hvcjogWzEyLCA0MV0sXG4gICAgICAgICAgICBwb3B1cEFuY2hvcjogWzEsIC0zNF0sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiBbNDEsIDQxXVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIENTUE0gOiBMLmljb24oe1xuICAgICAgICAgICAgaWNvblVybDogJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vcG9pbnRoaS9sZWFmbGV0LWNvbG9yLW1hcmtlcnMvbWFzdGVyL2ltZy9tYXJrZXItaWNvbi0yeC15ZWxsb3cucG5nJyxcbiAgICAgICAgICAgIHNoYWRvd1VybDogJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2xlYWZsZXQvMS4zLjQvaW1hZ2VzL21hcmtlci1zaGFkb3cucG5nJyxcbiAgICAgICAgICAgIGljb25TaXplOiBbMjUsIDQxXSxcbiAgICAgICAgICAgIGljb25BbmNob3I6IFsxMiwgNDFdLFxuICAgICAgICAgICAgcG9wdXBBbmNob3I6IFsxLCAtMzRdLFxuICAgICAgICAgICAgc2hhZG93U2l6ZTogWzQxLCA0MV1cbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEFkZCBtYXJrZXJzIGZvciBlYWNoIGxvY2F0aW9uXG4gICAgICAgIHRoaXMuaG9tZWRhdGFMb2NhdGlvbnMuZm9yRWFjaChsb2NhdGlvbiA9PiB7XG5cbiAgICAgICAgICBsZXQgY2F0ZWdvcnlJY29uID0gY2F0ZWdvcnlJY29uc1tsb2NhdGlvbi5jYXRlZ29yeV07XG4gICAgICAgICAgTC5tYXJrZXIoW2xvY2F0aW9uLmxhdGl0dWRlLCBsb2NhdGlvbi5sb25naXR1ZGVdLCB7aWNvbjogY2F0ZWdvcnlJY29ufSkuYWRkVG8obWFwKTtcblxuICAgICAgICB9KVxuICAgICAgICAvLyBBZGQgbWFya2VycyBmb3IgZWFjaCBsb2NhdGlvblxuICAgICAgICB0aGlzLm1hcmtldGRhdGFMb2NhdGlvbnMuZm9yRWFjaChsb2NhdGlvbiA9PiB7XG5cbiAgICAgICAgICBsZXQgY2F0ZWdvcnlJY29uID0gY2F0ZWdvcnlJY29uc1tsb2NhdGlvbi5jYXRlZ29yeV07XG4gICAgICAgICAgTC5tYXJrZXIoW2xvY2F0aW9uLmxhdGl0dWRlLCBsb2NhdGlvbi5sb25naXR1ZGVdLCB7aWNvbjogY2F0ZWdvcnlJY29ufSkuYWRkVG8obWFwKTtcblxuICAgICAgICB9KVxuXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OSMap.vue?vue&type=template&id=7b8bc8f8\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "394d43052ece2ada"; }
/******/ }();
/******/ 
/******/ }
);