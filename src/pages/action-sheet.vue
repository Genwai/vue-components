<template>
  <div class="page">
    <aciton-sheet></aciton-sheet>
    <aciton-open></aciton-open>
  </div>
</template>

<script type="text/ecmascript-6">
import acitonSheet from '../components/action-sheet/action-sheet'
import acitonOpen from '../components/action-sheet/action-open'

export default {
  data() {
    return {

    }
  },
  components: {
      acitonSheet,
      acitonOpen
  }
}
</script>

<style scoped lang="stylus">
</style>
