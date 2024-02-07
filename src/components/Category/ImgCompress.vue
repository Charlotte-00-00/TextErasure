<template>
	<div class="page-container">
		<el-row>
			<el-col>
				<h1>图片压缩</h1>
				<el-form ref="form" :model="form">
					<el-form-item label="请选择要压缩的图片文件">
						<el-upload ref="upload" class="upload-demo" action="" :show-file-list="false"
							:before-upload="beforeUpload" :on-change="handleChange">
							<el-button size="medium" type="primary">选择文件</el-button>
							<div slot="tip" class="el-upload__tip">只能上传 png、jpg、jpeg、gif、bmp、svg、webp、tif 格式的图片</div>
						</el-upload>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="compressImage()">压缩</el-button>
					</el-form-item>
					<div v-if="compressedImage">
						<el-form-item label="原始图片大小：">
							{{ originalFileSize }} KB
						</el-form-item>
						<el-form-item label="压缩后的图片大小：">
							{{ compressedFileSize }} KB
						</el-form-item>
						<el-form-item label="压缩率：">
							{{ ((1 - compressedFileSize / originalFileSize) * 100).toFixed(1) }}%
						</el-form-item>
						<el-form-item label="压缩后的图片：">
							<img :src="compressedImage" alt="压缩后的图片" style="width: 100%;">
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
				},
				compressedImage: null,
				originalFileSize: null,
				compressedFileSize: null,
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
			handleChange(file) {
				this.form.imageFile = file.raw;
			},
			compressImage() {
				const file = this.form.imageFile;

				if (!file) {
					this.$message.error('请先选择要压缩的图片文件！');
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

						const maxWidth = 800;
						const maxHeight = 600;

						if (width > height) {
							if (width > maxWidth) {
								height *= maxWidth / width;
								width = maxWidth;
							}
						} else {
							if (height > maxHeight) {
								width *= maxHeight / height;
								height = maxHeight;
							}
						}

						canvas.width = width;
						canvas.height = height;

						context.drawImage(image, 0, 0, width, height);

						const compressedDataURL = canvas.toDataURL(file.type);

						this.originalFileSize = Math.round(file.size / 1024);
						this.compressedFileSize = Math.round(compressedDataURL.length / 1024);
						this.compressedImage = compressedDataURL;
					};
				};

				reader.readAsDataURL(file);
			},
		},
	};
</script>


