import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'; // 创建路由实例和指定路由模式 ;路由记录的类
import { usePermissStore } from '../store/permiss'; //权限管理
import NProgress from 'nprogress' //显示页面顶部的进度条,表示页面加载或路由导航进度
import 'nprogress/nprogress.css'
import Home from "../views/home.vue"; // nprogress 的 CSS 样式

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/MainPage',
    },

    {
        path: '/MainPage',
        name: 'MainPage',
        meta: {
            title: 'MainPage',
        },
        component: () => import(/* webpackChunkName: "main" */ '../views/MainPage.vue'), // 假设 MainPage 组件位于此路径
    },
    // 可以在这里添加 MainPage 的其他子路由

    {
        path: '/Input',
        name: 'Input',
        meta: {
            title: 'Input',
            permiss: '2',
        },
        component: () => import(/* webpackChunkName: "Input" */ '../views/Input.vue'),
    },


    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [

            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页',
                    permiss: '1',
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
            },
            {
                path: '/table',
                name: 'basetable',
                meta: {
                    title: '表格',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/table.vue'),
            },
            {
                path: '/charts',
                name: 'basecharts',
                meta: {
                    title: '图表',
                    permiss: '11',
                },
                component: () => import(/* webpackChunkName: "charts" */ '../views/charts.vue'),
            },
            {
                path: '/form',
                name: 'baseform',
                meta: {
                    title: '表单',
                    permiss: '5',
                },
                component: () => import(/* webpackChunkName: "form" */ '../views/form.vue'),
            },
            {
                path: '/tabs',
                name: 'tabs',
                meta: {
                    title: 'tab标签',
                    permiss: '3',
                },
                component: () => import(/* webpackChunkName: "tabs" */ '../views/tabs.vue'),
            },
            {
                path: '/donate',
                name: 'donate',
                meta: {
                    title: '鼓励作者',
                    permiss: '14',
                },
                component: () => import(/* webpackChunkName: "donate" */ '../views/donate.vue'),
            },
            {
                path: '/permission',
                name: 'permission',
                meta: {
                    title: '权限管理',
                    permiss: '13',
                },
                component: () => import(/* webpackChunkName: "permission" */ '../views/permission.vue'),
            },
            {
                path: '/upload',
                name: 'upload',
                meta: {
                    title: '上传插件',
                    permiss: '6',
                },
                component: () => import(/* webpackChunkName: "upload" */ '../views/upload.vue'),
            },
            {
                path: '/icon',
                name: 'icon',
                meta: {
                    title: '自定义图标',
                    permiss: '10',
                },
                component: () => import(/* webpackChunkName: "icon" */ '../views/icon.vue'),
            },
            {
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心',
                },
                component: () => import(/* webpackChunkName: "user" */ '../views/user.vue'),
            },
            {
                path: '/editor',
                name: 'editor',
                meta: {
                    title: '富文本编辑器',
                    permiss: '8',
                },
                component: () => import(/* webpackChunkName: "editor" */ '../views/editor.vue'),
            },
            {
                path: '/markdown',
                name: 'markdown',
                meta: {
                    title: 'markdown编辑器',
                    permiss: '9',
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/markdown.vue'),
            },
            {
                path: '/export',
                name: 'export',
                meta: {
                    title: '导出Excel',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "export" */ '../views/export.vue'),
            },
            {
                path: '/import',
                name: 'import',
                meta: {
                    title: '导入Excel',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "import" */ '../views/import.vue'),
            },
        ],
    },

    {
                path: '/403',
                name: '403',
                meta: {
                    title: '没有权限',
                },
                component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
            },

            {
                path: '/RegistrationForm',
                name: 'RegistrationForm',
                meta: {
                    title: '登录',
                },

                component: () => import(/* webpackChunkName: "login" */ '../views/RegistrationForm.vue'),
            }

    ];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

//这是一个全局的前置守卫。每当导航触发时，全局前置守卫按创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。
router.beforeEach((to, from, next) => {
    NProgress.start(); // 启动某种进度条或加载指示器的命令。
    // 检查是否是公共页面，如果是则直接跳过登录和权限检查
    if (to.path === '/MainPage') {
        next();
        return;
    }
    const role = localStorage.getItem('ms_username'); // 使用 localStorage 来获取登录用户的角色。
    const permiss = usePermissStore(); //使用状态管理库（如 Pinia）来为 permissStore 的 store 中获取权限信息。

    if (!role && to.path !== '/RegistrationForm') {  // 如果没有登录且不是要跳转到注册页面，则重定向到注册页面
        next('/RegistrationForm');
    } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
        // 如果没有权限，则重定向到403页面
        next('/403');
    } else {
        next(); // 所有检查都通过，允许导航
    }
});



router.afterEach(() => {   // 配置路由历史模式,创建了一个基于哈希模式的历史记录
    NProgress.done()// 完成导航后，结束进度条或加载指示器
})

export default router;
