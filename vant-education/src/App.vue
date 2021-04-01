<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.van-doc-demo-section {
    box-sizing: border-box;
    min-height: calc(100vh - 56px);
    padding-bottom: 20px;
    
}
.van-doc-demo-section.has-header{
  margin-top: 56px;
}

.van-doc-demo-block {
    padding: 0 16px;
}
</style>
