<template>
	<div class="page-container">
		<el-row>
			<el-col>
				<h1>图片加水印</h1>
				<el-form ref="form" :model="form" label-position="top">
					<el-form-item label="请选择要添加水印的图片文件">
						<el-upload ref="upload" class="upload-demo" action="" :show-file-list="false"
							:before-upload="beforeUpload" :on-change="handleUploadChange">
							<el-button size="medium" type="primary">选择文件</el-button>
							<div slot="tip" class="el-upload__tip">只能上传 png、jpg、jpeg、gif、bmp、svg、webp、tif 格式的图片</div>
						</el-upload>
					</el-form-item>
					<el-form-item label="水印文字">
						<el-input v-model="form.watermarkText"></el-input>
					</el-form-item>
					<el-form-item label="字体大小">
						<el-slider v-model="form.fontSize" :min="10" :max="72" :step="2"></el-slider>
					</el-form-item>
					<el-form-item label="透明度">
						<el-slider v-model="form.opacity" :min="0" :max="100" :step="5"></el-slider>
					</el-form-item>
					<el-form-item label="旋转角度">
						<el-slider v-model="form.rotate" :min="-180" :max="180" :step="15"></el-slider>
					</el-form-item>
					<el-form-item label="文本间距">
						<el-slider v-model="form.textSpacing" :min="-10" :max="50" :step="1"></el-slider>
					</el-form-item>
					<el-form-item label="文字颜色">
						<el-color-picker v-model="form.textColor"></el-color-picker>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="addWatermark()">添加水印</el-button>
					</el-form-item>
					<div v-if="watermarkedImage">
						<el-form-item label="原始图片大小：">
							{{ originalFileSize }} KB
						</el-form-item>
						<el-form-item label="添加水印后的图片大小：">
							{{ watermarkedFileSize }} KB
						</el-form-item>
						<el-form-item label="添加水印后的图片：">
							<img :src="watermarkedImage" alt="Watermarked Image" style="width: 100%;">
						</el-form-item>
					</div>
				</el-form>
			</el-col>
		</el-row>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					imageFile: null,
					watermarkText: '',
					fontSize: 24,
					opacity: 50,
					rotate: 0,
					textSpacing: 10,
					textColor: '#000000',
				},
				watermarkedImage: null,
				originalFileSize: null,
				watermarkedFileSize: null,
			};
		},
		methods: {
			beforeUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isPNG = file.type === 'image/png';
				const isGIF = file.type === 'image/gif';
				const isBMP = file.type === 'image/bmp';
				const isWEBP = file.type === 'image/webp';
				const isSVG = file.type === 'image/svg+xml';
				const isTIF = file.type === 'image/tiff';
				const isValidType = isJPG || isPNG || isGIF || isBMP || isWEBP || isSVG || isTIF;

				if (!isValidType) {
					this.$message.error('只能上传 png、jpg、jpeg、gif、bmp、svg、webp、tif 格式的图片');
				}

				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isLt2M) {
					this.$message.error('上传图片大小不能超过 2MB');
				}

				return isValidType && isLt2M;
			},
			handleUploadChange(file) {
				this.form.imageFile = file.raw;
			},
			addWatermark() {
				const file = this.form.imageFile;

				if (!file) {
					this.$message.error('请先选择要添加水印的图片文件！');
					return;
				}

				const image = new Image();
				const reader = new FileReader();
				reader.onload = (event) => {
					image.src = event.target.result;
					image.onload = () => {
						const canvas = document.createElement('canvas');
						const context = canvas.getContext('2d');

						let width = image.width;
						let height = image.height;

						canvas.width = width;
						canvas.height = height;

						context.drawImage(image, 0, 0, width, height);

						// Add watermark
						context.fillStyle = this.form.textColor;
						context.font = `${this.form.fontSize}px Arial`;
						context.globalAlpha = this.form.opacity / 100;

						const textWidth = context.measureText(this.form.watermarkText).width;
						const textHeight = this.form.fontSize;
						const spacing = this.form.textSpacing;
						const rows = Math.ceil(height / (textHeight + spacing));
						const cols = Math.ceil(width / (textWidth + spacing));

						for (let i = 0; i < rows; i++) {
							for (let j = 0; j < cols; j++) {
								const x = j * (textWidth + spacing);
								const y = i * (textHeight + spacing) + textHeight;

								context.save();
								context.translate(x, y);
								if (Math.random() >= 0.5) {
									context.rotate(Math.PI / 180 * (Math.random() * 30 - 15));
								} else {
									context.rotate(Math.PI / 180 * (-Math.random() * 30 + 15));
								}
								context.fillText(this.form.watermarkText, 0, 0);
								context.restore();
							}
						}

						const watermarkedDataURL = canvas.toDataURL(file.type);

						this.originalFileSize = Math.round(file.size / 1024);
						this.watermarkedFileSize = Math.round(watermarkedDataURL.length / 1024);
						this.watermarkedImage = watermarkedDataURL;
					};
				};

				reader.readAsDataURL(file);
			},
		},
	};
</script>
