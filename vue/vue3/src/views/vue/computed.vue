<template>
  <h3>计算定义的变量</h3>
  <div>{{ fullName }}</div>
  <h3>vue3过滤器替代方案</h3>
  <div v-for="({ name, price, unit }, index) in arr">
    {{ name }}{{ calPrice(price, unit) }}
  </div>
  <div v-for="item in score">
    {{ calScore(item) }}
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue';

  const person = ref({ firstName: '吴', lastName: '光辉' });

  const fullName = computed(() => {
    return person.value.firstName + person.value.lastName;
  });

  const arr = [
    { name: '毛衣', price: '100.00', unit: '$' },
    { name: '帽子', price: '10.00', unit: '￥' },
  ];

  const calPrice = computed(() => (price: any, unit: string) => {
    return unit + price;
  });

  const score = [90, 80, 66, 55, 50, 82, 74, 63, 68, 999, -212];

  const calScore = computed(() => (score: number) => {
    if (score >= 90 && score <= 100) {
      return '优';
    } else if (score >= 80 && score < 90) {
      return '良';
    } else if (score >= 60 && score < 80) {
      return '中';
    } else if (score >= 0 && score < 60) {
      return '差';
    } else {
      return '成绩不合法';
    }
  });
</script>

<style lang="less" scoped></style>

<route lang="yaml">
meta:
  title: 计算属性
  sort: 4
</route>
