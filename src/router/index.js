import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import MainPage from '@/components/MainPage';
import Home from '@/components/MainPage/Home';
import AbilityTest from '@/components/MainPage/AbilityTest';
import News from '@/components/MainPage/News';
import AboutUs from '@/components/MainPage/AboutUs';
import ContactUs from '@/components/MainPage/ContactUs';
import ExamTable from '@/components/MainPage/ExamTable';
import DoTest from '@/components/DoTest';
import RestPage from '@/components/RestPage';
import TestResult from '@/components/TestResult';
import GuidePage from '@/components/GuidePage';
import Login from '@/login/Login';
import Index from '@/login/Index';
import NotFound from '@/NotFound';

import ControlApp from '@/ControlApp';
import ControlMainPage from '@/components/ControlMainPage';
import PaperList from '@/components/controlMainPage/PaperList';
import ControlLogin from '@/login/ControlLogin';

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
                next({name: 'Login'});
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
    },{
        path: '/login',
        name: 'Login',
        component: Login,
        props: (route) => { query: route.query.reg }
    },{
        path: '/index',
        name: 'Index',
        component: Index
    },{
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
            redirect: { name: 'PaperList' },
            children: [{
                path: 'paperList',
                name: 'PaperList',
                component: PaperList,
            }],
        }]
    },{
        path: '/ctrlLogin',
        name: 'ControlLogin',
        component: ControlLogin,
    }]
});