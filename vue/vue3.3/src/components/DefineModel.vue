<script setup lang="ts">
  // before
  const props = defineProps<{
    cont: number;
  }>();
  const emits = defineEmits<{
    'update:cont': [cont: number];
  }>();
  // const add = () => {
  //   emits('update:cont', props.cont + 1);
  // };

  // after
  const num = defineModel('num', {
    required: true,
    default: 2,
  });

  const add = () => {
    emits('update:cont', props.cont + 1);
    num.value++;
  };
</script>

<template>
  <div>cont:{{ cont }} | num:{{ num }}</div>
  <button @click="add">++</button>
</template>

<style scoped></style>
