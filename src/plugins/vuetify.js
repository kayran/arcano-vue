import '@mdi/font/scss/materialdesignicons.scss';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import * as Components from 'vuetify/lib/components';

import pt from 'vuetify/src/locale/pt.ts';

const themeColors = {
  primary: '#00aaa7',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#ff0037',
  info: '#4a90e2',
  success: '#00d85a',
  warning: '#ffb500',
  youtube: '#e91d00',
  facebook: '#39579a',
  instagram: '#fbd63f',
  twitter: '#059ff5',
};

const config = {
  icons: {
    // iconfont: 'md', This is Material Icons
    iconfont: 'mdi', // Ths is Material Design Icons
  },
  theme: {
    themes: {
      dark: themeColors,
      light: themeColors,
    },
  },
  lang: {
    locales: {
      pt,
    },
    current: 'pt',
  },
  components: {
    ...Components
  }
};

Vue.use(Vuetify, config);

export default new Vuetify(config);
