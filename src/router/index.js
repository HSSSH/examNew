import Vue from 'vue';
import Router from 'vue-router';

//懒加载
const App = () => import(/* webpackChunkName: "group-app"*/'@/App');
const Index = () => import(/* webpackChunkName: "group-app"*/'@/login/Index');
const NotFound = () => import(/* webpackChunkName: "group-app"*/'@/NotFound');

const MainPage = () => import(/* webpackChunkName: "group-mainPage"*/'@/components/MainPage');
const Home = () => import(/* webpackChunkName: "group-mainPage"*/'@/components/MainPage/Home');
const AbilityTest = () => import(/* webpackChunkName: "group-mainPage"*/'@/components/MainPage/AbilityTest');
const News = () => import(/* webpackChunkName: "group-mainPage"*/'@/components/MainPage/News');
const AboutUs = () => import(/* webpackChunkName: "group-mainPage"*/'@/components/MainPage/AboutUs');
const ContactUs = () => import(/* webpackChunkName: "group-mainPage"*/'@/components/MainPage/ContactUs');
const ExamTable = () => import(/* webpackChunkName: "group-mainPage"*/'@/components/MainPage/ExamTable');
const UserPage = () => import(/* webpackChunkName: "group-mainPage"*/'@/components/MainPage/UserPage');

const DoTest = () => import(/* webpackChunkName: "group-doTest"*/'@/components/DoTest');
const RestPage = () => import(/* webpackChunkName: "group-doTest"*/'@/components/RestPage');
const TestResult = () => import(/* webpackChunkName: "group-doTest"*/'@/components/TestResult');
const GuidePage = () => import(/* webpackChunkName: "group-doTest"*/'@/components/GuidePage');

const ControlApp = () => import(/* webpackChunkName: "group-controlApp"*/'@/ControlApp');
const ControlMainPage = () => import(/* webpackChunkName: "group-controlApp"*/'@/components/ControlMainPage');
const PaperList = () => import(/* webpackChunkName: "group-controlApp"*/'@/components/controlMainPage/PaperList');
const PaperListSimple = () => import(/* webpackChunkName: "group-controlApp"*/'@/components/controlMainPage/PaperListSimple');
const DocList = () => import(/* webpackChunkName: "group-controlApp"*/'@/components/controlMainPage/DocList');
const UserList = () => import(/* webpackChunkName: "group-controlApp"*/'@/components/controlMainPage/UserList');
const Report = () => import(/* webpackChunkName: "group-controlApp"*/'@/components/controlOther/Report');
const Report2 = () => import(/* webpackChunkName: "group-controlApp"*/'@/components/controlOther/Report2');
const Report3 = () => import(/* webpackChunkName: "group-controlApp"*/'@/components/controlOther/Report3');
const ControlLogin = () => import(/* webpackChunkName: "group-controlApp"*/'@/login/ControlLogin');

import store from '@/store/index';
import { getLoginUser } from '@/api/login'
Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        redirect: { name: 'App' },
    },{
        path: '/app',
        name: 'App',
        component: App,
        beforeEnter: (to, from, next) => {
            getLoginUser().then(data => {
                store.dispatch('setLoginUser', data);
                next();
            }).catch(() => {
                next({name: 'Index'});
            })
        },
        redirect: { name: 'MainPage' },
        children: [{
            path: 'mainPage',
            name: 'MainPage',
            component: MainPage,
            redirect: { name: 'AbilityTest' },
            children: [{
                path: 'home',
                name: 'Home',
                component: Home
            }, {
                path: 'abilityTest',
                name: 'AbilityTest',
                component: AbilityTest,
            }, {
                path: 'news',
                name: 'News',
                component: News,
            }, {
                path: 'aboutUs',
                name: 'AboutUs',
                component: AboutUs,
            }, {
                path: 'contactUs',
                name: 'ContactUs',
                component: ContactUs,
            }, {
                path: 'examTable',
                name: 'ExamTable',
                component: ExamTable,
            }, {
                path: 'userPage',
                name: 'UserPage',
                component: UserPage,
            }],
        },{
            path: 'guidePage/:examId',
            name: 'GuidePage',
            component: GuidePage
        },{
          path: 'doTest/:examId',
          name: 'DoTest',
          component: DoTest
        },{
          path: 'restPage/:examId',
          name: 'RestPage',
          component: RestPage
        },{
          path: 'testResult/:result/:totalScore',
          name: 'TestResult',
          component: TestResult
        }]
    },
    {
        path: '/index',
        name: 'Index',
        component: Index
    },
    {
		path: '*',
        name: 'NotFound',
        component: NotFound
    },{
        path: '/ctrlApp',
        name: 'ControlApp',
        component: ControlApp,
        beforeEnter: (to, from, next) => {
            getLoginUser().then(data => {
                store.dispatch('setLoginUser', data);
                next();
            }).catch(() => {
                next({name: 'ControlLogin'});
            })
        },
        redirect: { name: 'ControlMainPage' },
        children: [{
            path: 'ctrlMainPage',
            name: 'ControlMainPage',
            component: ControlMainPage,
            redirect: { name: 'PaperListSimple' },
            children: [{
                path: 'paperList',
                name: 'PaperList',
                component: PaperList,
            },{
                path: 'paperListSimple',
                name: 'PaperListSimple',
                component: PaperListSimple,
            },{
                path: 'userList',
                name: 'UserList',
                component: UserList,
            },{
                path: 'docList',
                name: 'DocList',
                component: DocList,
            }],
        },{
            path: 'report/:pid/:uid',
            name: 'Report',
            component: Report,
        },{
            path: 'report2',
            name: 'Report2',
            component: Report2,
        },{
            path: 'report3/:pid/:uid',
            name: 'Report3',
            component: Report3,
        }]
    },{
        path: '/ctrlLogin',
        name: 'ControlLogin',
        component: ControlLogin,
    }]
});