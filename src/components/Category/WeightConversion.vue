<template>
	<div class="page-container">
		<h1>重量单位转换</h1>
		<el-form>
			<el-row>
				<el-col :md="20" :sm="24">
					<el-form-item label="原始单位">
						<el-select v-model="fromUnit" placeholder="请选择原始单位" @change="convert()">
							<el-option label="千克/公斤(kg)" value="kg"></el-option>
							<el-option label="克(g)" value="g"></el-option>
							<el-option label="吨(t)" value="t"></el-option>
							<el-option label="斤(jin)" value="jin"></el-option>
							<el-option label="钱(qian)" value="qian"></el-option>
							<el-option label="两(liang)" value="liang"></el-option>
							<el-option label="磅(lb)" value="lb"></el-option>
							<el-option label="盎司(oz)" value="oz"></el-option>
							<el-option label="公担(q)" value="q"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="数值">
						<el-input v-model.number="val" placeholder="请输入数值" @input="convert()"></el-input>
					</el-form-item>
					<el-form-item label="目标单位">
						<el-select v-model="toUnit" placeholder="请选择目标单位" @change="convert()">
							<el-option label="千克/公斤(kg)" value="kg"></el-option>
							<el-option label="克(g)" value="g"></el-option>
							<el-option label="吨(t)" value="t"></el-option>
							<el-option label="斤(jin)" value="jin"></el-option>
							<el-option label="钱(qian)" value="qian"></el-option>
							<el-option label="两(liang)" value="liang"></el-option>
							<el-option label="磅(lb)" value="lb"></el-option>
							<el-option label="盎司(oz)" value="oz"></el-option>
							<el-option label="公担(q)" value="q"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="转换结果">
						<el-input disabled v-model="result" placeholder="转换结果"></el-input>
					</el-form-item>
				</el-col>
			</el-row>

			<el-form-item style="text-align: right;">
				<el-button @click="clear()">重置</el-button>
				<el-button @click="$router.back()">返回</el-button>
			</el-form-item>
		</el-form>

		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				val: 0,
				fromUnit: "",
				toUnit: "",
				result: 0,
			};
		},
		methods: {
			convert() {
				const conversionFactors = {
					kg: 1000,
					g: 1,
					t: 1000000,
					jin: 500,
					qian: 5,
					liang: 20,
					lb: 453.59237,
					oz: 28.349523125,
					q: 100000,
				};

				if (this.fromUnit && this.toUnit) {
					const factor =
						conversionFactors[this.fromUnit] / conversionFactors["g"] /
						(conversionFactors[this.toUnit] / conversionFactors["g"]);
					this.result = this.val * factor;
				}
			},
			clear() {
				this.val = 0;
				this.fromUnit = "";
				this.toUnit = "";
				this.result = 0;
			},
		},
	};
</script>
