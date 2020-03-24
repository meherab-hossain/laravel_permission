/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css'


Vue.component('admin', require('./components/Admin.vue').default);


Vue.use(Vuetify)
window.Vue = require('vue');


const app = new Vue({
    el: '#app',

});
