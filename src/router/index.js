import Vue from "vue";
import iView from "iview";
import Router from "vue-router";
import Hello from "@/components/Hello";
import Rtimemoniter from "@/components/moniter/Rtimemoniter";
// search
import Search from "@/components/search/Search";
import Face from "@/components/search/manager/face";
import Photosearch from "@/components/search/manager/photosearch";
import Alarm from "@/components/search/manager/alarm";
import Photorequire from "@/components/search/manager/photorequire";
// setting
import Setting from "@/components/setting/Setting";


Vue.use(Router)
Vue.use(iView)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/moniter/rtimemoniter',
      name: 'rtimemoniter',
      component: Rtimemoniter
    },
    {
      path: '/search/search',
      name: 'search',
      component: Search,
      children: [
        {
          path: '/manager/face',
          name: 'face',
          component: Face
        },
        {
          path: '/manager/photosearch',
          name: 'photosearch',
          component: Photosearch
        },
        {
          path: '/manager/alarm',
          name: 'alarm',
          component: Alarm
        },
        {
          path: '/manager/photorequire',
          name: 'photorequire',
          component: Photorequire
        }
      ]
    },
    {
      path: '/setting/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
