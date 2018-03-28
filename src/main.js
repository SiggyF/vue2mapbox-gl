import VMapbox from './components/VMapbox.vue';
import VMapboxLayer from './components/VMapboxLayer.vue';
import VMapboxSource from './components/VMapboxSource.vue';
import VMapboxGeocoder from './components/VMapboxGeocoder.vue';
import VMapboxNavigationControl from './components/VMapboxNavigationControl.vue';

function install(Vue, options) {
  Vue.component('v-mapbox', VMapbox);
  Vue.component('v-mapbox-layer', VMapboxLayer);
  Vue.component('v-mapbox-source', VMapboxSource);
  Vue.component('v-mapbox-navigation-control', VMapboxNavigationControl);
  Vue.component('v-mapbox-geocoder', VMapboxGeocoder);
};
export default install;
