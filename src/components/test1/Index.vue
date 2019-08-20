<template>
  <div class="test" @click="onClictTest">
    rollup test
  </div>
</template>
<script>
export default {
  name: 'Test',
  methods: {
    onClictTest() {
      console.log('rollup test')
    }
  }
}
</script>
<style lang="scss">
  .test {
    width: 200px;
    height: 200px;
    background: red;
  }
</style>