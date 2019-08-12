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
import Login from '@/login/Login';
import Index from '@/login/Index';
Vue.use(Router);

export default new Router({
    routes: [{
        path: '*',
        redirect: { name: 'App' },
    },{
        path: '/app',
        name: 'App',
        component: App,
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
        component: Login
    },{
        path: '/index',
        name: 'Index',
        component: Index
    }]
});