import Vue from "vue";
import VueRouter from "vue-router";
import BaseView from "@/components/baseView/Index"

Vue.use(VueRouter);

const routes = [
  /*{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/!* webpackChunkName: "about" *!/ "../views/About.vue")
  }*/
  {
    path: '/',
    component: BaseView,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/Index'),
        name: 'Home'
      },
      {
        path: 'course',
        component: () => import("@/views/videoCourse/VideoCourse"),
        name: 'VideoCourse'
      },
      {
        path: 'article',
        component: () => import("@/views/articleShare/ArticleShare"),
        name: 'ArticleShare'
      },
      {
        path: 'user',
        component: () => import("@/views/user/Index"),
        name: 'User'
      },
      {
        path: '/course/details/:courseid',
        component: () => import("@/views/videoCourse/VideoDetails"),
        name: 'VideoDetails'
      },
      {
        path: '/article/details/:articleid',
        component: () => import("@/views/articleShare/ArticleDetails"),
        name: 'ArticleDetails'
      },
      {
        path: '/user/viewsrecoard',
        component: () => import("@/views/user/ViewsRecord"),
        name: 'ViewsRecord'
      },
      {
        path: '/user/viewsrecoard/video/:userid',
        component: () => import('@/views/user/RecordList'),
        name: 'VideoRecordList'
      },
      {
        path: '/user/viewsrecoard/article/:userid',
        component: () => import('@/views/user/RecordList'),
        name: 'ArticleRecordList'
      }
    ]
  },
  {
    path: '/',
    redirect: '/home'
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
