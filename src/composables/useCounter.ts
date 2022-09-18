import { ref, onMounted } from 'vue'

export function useCounter() {
  onMounted(() => {
    console.log('init')
  })
  const count = ref(0)
  function add(val: number) {
    count.value += val
  }

  return {
    count,
    add
  }
}
