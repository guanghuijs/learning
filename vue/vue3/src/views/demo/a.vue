<template>
  <div class="bubble-sort-container">
    <div class="array-container">
      <div
        v-for="(value, index) in array"
        :key="index"
        class="bar"
        :class="{
          'bar-active':
            index === activeIndex1 ||
            index === activeIndex2,
        }"
        :style="{ height: `${value * 10}px` }"
      >
        {{ value }}
      </div>
    </div>
    <button @click="startSorting">开始排序</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        array: [],
        activeIndex1: -1,
        activeIndex2: -1,
        isSorting: false,
      };
    },
    methods: {
      generateRandomArray() {
        const length = 15;
        const max = 100;
        this.array = Array.from(
          { length },
          () => Math.floor(Math.random() * max) + 1,
        );
      },
      async bubbleSort() {
        if (this.isSorting) return;
        this.isSorting = true;

        const len = this.array.length;
        for (let i = 0; i < len - 1; i++) {
          for (let j = 0; j < len - 1 - i; j++) {
            this.activeIndex1 = j;
            this.activeIndex2 = j + 1;
            await this.sleep(500); // 暂停以显示动画效果

            if (this.array[j] > this.array[j + 1]) {
              [this.array[j], this.array[j + 1]] = [
                this.array[j + 1],
                this.array[j],
              ];
            }
          }
          this.activeIndex1 = -1;
          this.activeIndex2 = -1;
          await this.sleep(500); // 暂停以显示动画效果
        }

        this.isSorting = false;
      },
      sleep(ms) {
        return new Promise((resolve) =>
          setTimeout(resolve, ms),
        );
      },
      startSorting() {
        this.generateRandomArray();
        this.bubbleSort();
      },
    },
    mounted() {
      this.generateRandomArray();
    },
  };
</script>

<style scoped>
  .bubble-sort-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .array-container {
    display: flex;
    gap: 5px;
    margin-bottom: 20px;
  }

  .bar {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 20px;
    background-color: #3498db;
    color: white;
    font-size: 12px;
    transition: height 0.5s ease;
  }

  .bar-active {
    background-color: #e74c3c;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
</style>

<route lang="yaml">
meta:
  title: 冒泡排序
  sort: 30
</route>
