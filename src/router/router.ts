import Vue from 'vue';
import Router from 'vue-router';
import routes from './router-components';

Vue.use(Router);
// @ts-ignore
Router.prototype.goBack = function() {
  // @ts-ignore
  this.isBack = true;
  window.history.go(-1);
};
const router = new Router({
  routes,
});
router.beforeEach((to: any, from: any, next: any) => {
  next();
});
router.afterEach(() => {
});
export default router;