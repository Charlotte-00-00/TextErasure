<template>
  <div class="page-container">
    <h1>进制转换工具</h1>
    <el-form ref="form" :model="form" label-position="top">
      <el-form-item label="请输入要转换的数值">
        <el-input v-model="form.numInput"></el-input>
      </el-form-item>
      <el-form-item label="从哪种进制转换">
        <el-radio-group v-model="form.convertType">
          <el-radio-button label="binToOther">从二进制转换</el-radio-button>
          <el-radio-button label="octToOther">从八进制转换</el-radio-button>
          <el-radio-button label="decToOther">从十进制转换</el-radio-button>
          <el-radio-button label="hexToOther">从十六进制转换</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="convert()">转换</el-button>
    <div>
      <p>二进制：<span>{{ result.binResult }}</span></p>
      <p>八进制：<span>{{ result.octResult }}</span></p>
      <p>十进制：<span>{{ result.decResult }}</span></p>
      <p>十六进制：<span>{{ result.hexResult }}</span></p>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        numInput: "",
        convertType: "binToOther",
      },
      result: {
        binResult: "",
        octResult: "",
        decResult: "",
        hexResult: "",
      },
    };
  },
  methods: {
    convert() {
      // 获取转换类型和要转换的数值
      const convertType = this.form.convertType;
      const numInput = this.form.numInput;

      // 进行转换
      let binResult = "";
      let octResult = "";
      let decResult = "";
      let hexResult = "";

      switch (convertType) {
        case "binToOther":
          decResult = BigInt(parseInt(numInput, 2));
          octResult = decResult.toString(8);
          hexResult = decResult.toString(16).toUpperCase();
          binResult = numInput;
          break;
        case "octToOther":
          decResult = BigInt(parseInt(numInput, 8));
          binResult = decResult.toString(2);
          hexResult = decResult.toString(16).toUpperCase();
          octResult = numInput;
          break;
        case "decToOther":
          decResult = BigInt(numInput);
          binResult = decResult.toString(2);
          octResult = decResult.toString(8);
          hexResult = decResult.toString(16).toUpperCase();
          break;
        case "hexToOther":
          decResult = BigInt(`0x${numInput}`);
          binResult = decResult.toString(2);
          octResult = decResult.toString(8);
          hexResult = numInput.toUpperCase();
          break;
        default:
          break;
      }

      // 更新页面显示的转换结果
      this.result.binResult = binResult;
      this.result.octResult = octResult;
      this.result.decResult = decResult.toString();
      this.result.hexResult = hexResult;
    },
  },
};
</script>
