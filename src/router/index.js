import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/homepage/Homepage'
import Technicalexp from '@/components/technicalexp/Technicalexp'
import Aboutxs from '@/components/aboutxs/Aboutxs'
import Developercenter from '@/components/developercenter/Developercenter'
import Firmservice from '@/components/firmservice/Firmservice'
import Profile from  '@/components/technicalexp/tech/Profile'
import Experience from  '@/components/technicalexp/tech/Experience'
import newuser from '@/components/developercenter/newuser/newuser'
import authent from '@/components/developercenter/newuser/authent'
import apisum from '@/components/developercenter/api/apisum'
import enterprise from '@/components/firmservice/enterprise'
import cooperation from '@/components/firmservice/cooperation'
import Match from  '@/components/technicalexp/tech/Match'
import Verify from  '@/components/technicalexp/tech/Verify'
import Blank from  '@/components/technicalexp/tech/Blank'
import Appmanage from  '@/components/login/appmanage'
import Newmessage from  '@/components/login/newmessage'
import Createapp from  '@/components/login/createapp'
<<<<<<< .mine
import detect from '@/components/developercenter/api/detect'
import sdk from '@/components/developercenter/dev/sdk'
import redirect from '@/components/redirect'
import devRedirect from '@/components/devRedirect'
||||||| .r384

=======
import detect from '@/components/developercenter/api/detect'
import sdk from  '@/components/developercenter/dev/sdk'

>>>>>>> .r430
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
<<<<<<< .mine
||||||| .r384
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    // {
    //   path: '/test',
    //   name: 'Test',
    //   component: Test
    // },
=======
    {
      path: '/',
      redirect: '/homepage/homepage'
    },
    {
      path: '/homepage',
      redirect: '/homepage/homepage'
    },
    // {
    //   path: '/test',
    //   name: 'Test',
    //   component: Test
    // },
>>>>>>> .r430
    {
      path: '/login/appmanage',
      name: 'appmanage',
      component: Appmanage
    },
    {
      path: '/login/newmessage',
      name: 'newmessage',
      component: Newmessage
      // beforeEnter: (to, from, next) =>{
      //     alert();
      //      console.debug(next())
      // }
    },
    {
      path: '/login/createapp',
      name: 'createapp',
      component: Createapp
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage
    },
    {
<<<<<<< .mine
      path: '/tech',
      name: 'tech',
||||||| .r384
      path: '/technicalexp/technicalexp',
      name: 'technicalexp',
=======
      path: '/technicalexp',
      name: 'technicalexp',
      component: Technicalexp
    },
    {
      path: '/technicalexp/technicalexp',
      name: 'technicalexp',
>>>>>>> .r430
      component: Technicalexp,
      children: [
        {
          path: '/tech/profile',
          name: 'profile',
          component: Profile
        },
        {
          path: '/tech/experience',
          name: 'experience',
          component: Experience
        },
        {
          path: '/tech/match',
          name: 'match',
          component: Match
        },
        {
          path: '/tech/verify',
          name: 'verify',
          component: Verify
        },
        {
          path: '/tech/blank',
          name: 'blank',
          component: Blank
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: Aboutxs
    },
    {
      path: '/develop',
      name: 'develop',
      component: Developercenter,
      children: [
          {
            path: 'newuser',
            name: 'newuser',
            component: newuser,
        },
          {
              path: 'authent',
              name: 'authent',
              component: authent,
          },
          {
              path: 'apisum',
              name: 'apisum',
              component: apisum,
<<<<<<< .mine
          },
          {
              path: 'detect',
              name: 'detect',
              component: detect,
          },{
              path: 'sdk',
              name: 'sdk',
              component: sdk,
          },
           { path: '*', component: devRedirect}
         ]
||||||| .r384
          }]
=======
          },
          {
              path: 'detect',
              name: 'detect',
              component: detect,
          },
          {
              path: 'sdk',
              name: 'sdk',
              component: sdk,
          },
          {
              path: '*',
              redirect: newuser,
          },
          {
              path: '/',
              redirect: newuser,
          }
          ]
>>>>>>> .r430
    },
    {
<<<<<<< .mine
      path: '/service',
      name: 'service',
||||||| .r384
      path: '/firmservice/firmservice',
      name: 'firmservice',
=======
      path: '/firmservice',
      name: 'firmservice',
>>>>>>> .r430
      component: Firmservice,
        children: [
            {
                path: 'enterprise',
                name: 'enterprise',
                component: enterprise,
            } ,
            {
                path: 'cooperation',
                name: 'cooperation',
                component: cooperation,
            }]
    },
      {
          path: '*',
          redirect: Homepage,
      }
    ,
      {
          path: '*', component: redirect
      }
  ]
})
