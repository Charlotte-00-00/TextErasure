<template>
	<div class="page-container">
		<h1>综合计算器</h1>
		<el-form ref="form" :model="form" label-position="top">
			<el-form-item label="输入数字（用,分隔）">
				<el-input v-model="form.numbers" placeholder="请输入数字"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="calculate">计算</el-button>
				<el-button @click="resetForm">重置</el-button>
			</el-form-item>
			<el-row>
				<el-col :span="8">
					<el-form-item label="数量">
						<el-input v-model="results.count" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="算数平均值">
						<el-input v-model="results.mean" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="几何平均值">
						<el-input v-model="results.geometricMean" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>

			<el-row>
				<el-col :span="8">
					<el-form-item label="中位数">
						<el-input v-model="results.median" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="最大值">
						<el-input v-model="results.max" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="最小值">
						<el-input v-model="results.min" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>

			<el-row>
				<el-col :span="8">
					<el-form-item label="相加结果">
						<el-input v-model="results.sum" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="相乘结果">
						<el-input v-model="results.product" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="样本标准差">
						<el-input v-model="results.sampleStandardDeviation" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>

			<el-row>
				<el-col :span="8">
					<el-form-item label="样本标准差的方差">
						<el-input v-model="results.sampleVariance" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="总体标准差">
						<el-input v-model="results.populationStandardDeviation" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="总体标准差的方差">
						<el-input v-model="results.populationVariance" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>

		</el-form>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					numbers: '',
				},
				results: {
					count: null,
					mean: null,
					geometricMean: null,
					median: null,
					max: null,
					min: null,
					sum: null,
					product: null,
					sampleStandardDeviation: null,
					sampleVariance: null,
					populationStandardDeviation: null,
					populationVariance: null,
				},
			};
		},
		methods: {
			calculate() {
				const numbers = this.form.numbers.split(',').map(Number);

				if (!numbers.every(Number.isFinite)) {
					this.$message.error('请输入有效数字！');
					return;
				}

				const sortedNumbers = numbers.slice().sort((a, b) => a - b);
				const count = numbers.length;
				const mean = numbers.reduce((acc, val) => acc + val, 0) / count;
				const geometricMean = Math.pow(numbers.reduce((acc, val) => acc * val, 1), 1 / count);
				const median =
					count % 2 === 0 ?
					(sortedNumbers[count / 2 - 1] + sortedNumbers[count / 2]) / 2 :
					sortedNumbers[Math.floor(count / 2)];
				const max = Math.max(...numbers);
				const min = Math.min(...numbers);
				const sum = numbers.reduce((acc, val) => acc + val, 0);
				const product = numbers.reduce((acc, val) => acc * val, 1);
				const sampleVariance =
					numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (count - 1);
				const sampleStandardDeviation = Math.sqrt(sampleVariance);
				const populationVariance =
					numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / count;
				const populationStandardDeviation = Math.sqrt(populationVariance);

				this.results.count = count;
				this.results.mean = mean.toFixed(2);
				this.results.geometricMean = geometricMean.toFixed(2);
				this.results.median = median;
				this.results.max = max;
				this.results.min = min;
				this.results.sum = sum;
				this.results.product = product;
				this.results.sampleStandardDeviation = sampleStandardDeviation.toFixed(2);
				this.results.sampleVariance = sampleVariance.toFixed(2);
				this.results.populationStandardDeviation = populationStandardDeviation.toFixed(2);
				this.results.populationVariance = populationVariance.toFixed(2);
			},
			resetForm() {
				this.form.numbers = '';
				Object.keys(this.results).forEach((key) => {
					this.results[key] = null;
				});
			},
		},
	};
</script>
