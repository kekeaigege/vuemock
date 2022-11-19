<template>
  <div>
    <div class="h1">wd</div>
  </div>
</template>
<script>
import {getBannerData,getTabData}  from "../src/api/axios/data"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  async mounted() {
    let result = await getBannerData();
    console.log(result);
        let results = await getTabData();
    console.log(results);
  }
}
</script>
<style lang="less" scoped>
.h1{
  width: 3.5rem;
  background-color: rgb(200, 238, 139);
  height:3rem;
}
</style>
