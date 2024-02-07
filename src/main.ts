import { createApp } from 'vue';
import { createPinia } from 'pinia';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';
import router from './router';
import { usePermissStore } from './store/permiss';
import 'element-plus/dist/index.css';
import './assets/css/icon.css';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

// import { quillEditor,Quill } from 'vue3-quill';
import ElementPlus from 'element-plus'
// import customQuillModule from 'customQuillModule'
// Quill.register('modules/customQuillModule', customQuillModule)

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus)

// app.use(quillEditor)
nprogress.configure({showSpinner: false})

router.beforeEach((to, from, next) => {
    nprogress.start()
    next();
    nprogress.done()

});


// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
// 自定义权限指令
const permiss = usePermissStore();
app.directive('permiss', {
    mounted(el, binding) {
        if (!permiss.key.includes(String(binding.value))) {
            el['hidden'] = true;
        }
    },
});

app.mount('#app');
