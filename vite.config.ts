import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// 定义Vite的配置对象
export default defineConfig({
	// 设置项目的根目录
	base: './',
	// 插件列表
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	// 优化依赖项
	optimizeDeps: {
		include: ['schart.js']
	},
	// 开发服务器配置
	server: {
		// 代理配置
		proxy: {
			// 对于所有以'/api'开头的请求，将其代理到'http://localhost:8089'
			'/api': {
				target: 'http://localhost:8089', // 目标服务器地址
				changeOrigin: true, // 是否改变源地址
				// 重写路径，移除'/api'前缀
				rewrite: (path) => path.replace(/^\/api/, '') // 使用箭头函数进行路径重写
			}
		}
	},

});