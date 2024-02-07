<template>
	<div class="page-container">
		<h1>字符计数器</h1>
		<el-form ref="form" :model="form" label-position="top">
			<el-form-item label="请输入要统计的文本">
				<el-input v-model="form.textInput"></el-input>
			</el-form-item>
			<el-form-item label="统计选项">
				<el-checkbox-group v-model="form.countOption">
					<el-checkbox label="countChar">字符总数</el-checkbox>
					<el-checkbox label="countEnglish">英文字母数量</el-checkbox>
					<el-checkbox label="countChinese">汉字数量</el-checkbox>
					<el-checkbox label="countNumber">数字数量</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="是否统计标点符号">
				<el-switch v-model="includePunctuation"></el-switch>
			</el-form-item>
		</el-form>
		<el-button type="primary" @click="count()">统计</el-button>
		<div>
			<p v-if="form.countOption.indexOf('countChar') !== -1">字符总数：<span>{{ result.charCount }}</span></p>
			<p v-if="form.countOption.indexOf('countEnglish') !== -1">英文字母数量：<span>{{ result.englishCount }}</span></p>
			<p v-if="form.countOption.indexOf('countChinese') !== -1">汉字数量：<span>{{ result.chineseCount }}</span></p>
			<p v-if="form.countOption.indexOf('countNumber') !== -1">数字数量：<span>{{ result.numberCount }}</span></p>
		</div>
		
	</div>
</template>

<script>	
	export default {
		data() {
			return {
				form: {
					textInput: "",
					countOption: ["countChar", "countEnglish", "countChinese", "countNumber"],
				},
				result: {
					charCount: 0,
					englishCount: 0,
					chineseCount: 0,
					numberCount: 0
				},
				includePunctuation: false // 新增：标点符号是否包括在字符总数中
			};
		},
		methods: {
			count() {
				// 获取统计选项和要统计的文本
				const countOption = this.form.countOption;
				const textInput = this.form.textInput;

				// 初始化变量
				let charCount = 0;
				let englishCount = 0;
				let chineseCount = 0;
				let numberCount = 0;

				// 统计各种字符数量
				for (let i = 0; i < textInput.length; i++) {
					const char = textInput.charAt(i);
					if (/[a-zA-Z]/.test(char)) {
						englishCount++;
					} else if (/[\u4e00-\u9fa5]/.test(char)) {
						chineseCount++;
					} else if (/\d/.test(char)) {
						numberCount++;
					} else if (this.includePunctuation) { // 如果包含标点符号则统计
						charCount++;
					}
				}

				// 更新页面显示的统计结果
				this.result.charCount = charCount + englishCount + chineseCount + numberCount;
				this.result.englishCount = englishCount;
				this.result.chineseCount = chineseCount;
				this.result.numberCount = numberCount;
			},
		},
	};
</script>



