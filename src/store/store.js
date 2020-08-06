import Vue from 'vue';
import Vuex from 'vuex';

/*
 * Load modules
 * import misc from './modules/misc';
 */
import general from './modules/general';

// Add logrocket and LogRocket vuex plugin

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    general,
  },
});
