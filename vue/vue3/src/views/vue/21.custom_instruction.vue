<template>
  <div class="drag-test" v-drag></div>
</template>
<script lang="ts" setup>
  const vDrag = {
    mounted: (el: HTMLElement) => {
      el.onmousedown = (dowEv: MouseEvent) => {
        console.log(dowEv);
        console.log(el.clientWidth, el.offsetWidth);
        const x = dowEv.clientX - el.offsetLeft;
        const y = dowEv.clientY - el.offsetTop;
        document.onmousemove = (moveEv: MouseEvent) => {
          let left = moveEv.clientX - x;
          let top = moveEv.clientY - y;
          el.style.left = left + 'px';
          el.style.top = top + 'px';
        };
        document.onmouseup = () => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    },
  };
</script>
<style lang="less" scoped>
  .drag-test {
    width: 100px;
    height: 100px;
    background: red;
    padding: 10px;
    position: fixed;
    border: 10px pink solid;
    overflow: scroll;
  }
</style>
