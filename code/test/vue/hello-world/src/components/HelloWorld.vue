<template>
  <div>
    <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textValue">
    </el-input>
    <el-button type="primary" @click="getText">加载数据</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age:0,
    }
  },
  computed: {
      textValue(){
        return this.name + '_哈哈_'+this.age
      }
  },
  methods: {
    getText() {
      // http://localhost:3000/users
      let url = '/demo/users';
      this.$axios.get(url)
          .then(response => {
            console.log(response.data);
            this.name = response.data.user
            this.age = response.data.age
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    }
  }
};
</script>
