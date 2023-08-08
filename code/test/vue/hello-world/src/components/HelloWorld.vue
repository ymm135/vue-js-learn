<template>
  <div class="hello">
    <h2 @click="showName">提示信息: {{tips}}</h2>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

import mixin from "@/mixin";

export default {
  name: 'HelloWorld',
  props: {
    tips: String
  },
  data() {
    return {
      msg: "Hello Vue"
    }
  },
  methods:{
    showName(){
      alert(this.msg)
    }
  },
  mixins:[mixin]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
