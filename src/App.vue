<script lang="ts" setup>
import { ref } from 'vue'
import { TBox, TText, useInput } from '@temir/core'
const count = ref(0)
setInterval(() => {
  count.value++
}, 100)
useInput((input, key) => {
  console.log(input)
  if (input === '1')
    process.exit(0)
}, { isActive: true })
</script>
  
<template>
  <TBox
    :margin="5"
    :width="30"
    :height="5"
    border-style="double"
    justify-content="center"
    align-items="center"
  >
    <TText color="#42b883">
      Hi TEMIR !! {{ count }}
    </TText>
  </TBox>
</template>
