/*
  引入vant组件
*/
import Vue from 'vue';
import {
  Field,
  Button,
  Popup,
  Cell,
  Loading,
  Toast,
  NavBar,
  Icon,
  Dialog,
  Tab,
  Tabs,
  Notify,
  Lazyload,
  List,
  Sticky,
  NumberKeyboard,
  Swipe,
  SwipeItem
} from 'vant';

export default function() {
  Vue.use(Field);
  Vue.use(Button);
  Vue.use(Popup);
  Vue.use(Cell);
  Vue.use(Loading);
  Vue.use(Toast);
  Vue.use(NavBar);
  Vue.use(Icon);
  Vue.use(Dialog);
  Vue.use(Tab);
  Vue.use(Tabs);
  Vue.use(Notify);
  Vue.use(List);
  Vue.use(Sticky);
  Vue.use(NumberKeyboard);
  Vue.use(Swipe);
  Vue.use(SwipeItem);
  Vue.use( Lazyload)
}
