<template>
	<div class="page-container">
		<h1>写字板</h1>
		<textarea v-model="content" class="editor"></textarea>
		<div class="controls">
			<el-button type="primary" @click="save">保存</el-button>
			<el-button type="danger" @click="clear">清除</el-button>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				content: localStorage.getItem('content') || ''
			}
		},
		methods: {
			save() {
				localStorage.setItem('content', this.content)
				alert('内容已保存！')
			},
			clear() {
				localStorage.removeItem('content')
				this.content = ''
				alert('内容已清除！')
			}
		}
	}
</script>

<style>
	.editor {
		width: 100%;
		height: 400px;
		font-size: 16px;
		line-height: 1.5;
		border: solid 1px #ccc;
		padding: 10px;
		box-sizing: border-box;
		margin-bottom: 20px;
	}

	.controls {
		display: flex;
		justify-content: center;
	}

	.controls button {
		margin-right: 10px;
	}
</style>
