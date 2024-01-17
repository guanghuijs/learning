<template>
  <div>
    <div class="test_active">拉拉</div>
    <div class="fullscreenTest" @click="fullscreen" ref="fullscreenTest">
      全屏展示
    </div>
    <div class="base">
      <p>1515</p>
      <div>1</div>
      <div>2</div>
      <div>
        3
        <div>3-1</div>
      </div>
      <div>4</div>
      <div>5</div>
    </div>
    <div class="range">
      <input type="number" min="5" max="10" v-model="num" />
      <button @click="num++">num++</button>
    </div>
    <div class="indeterminate">
      <input type="radio" />
      <input type="checkbox" indeterminate />
    </div>

    <div class="invalid">
      <input type="email" value="supportEmail" />
      <input type="week" value="supportEmail" />
    </div>

    <div class="optional">
      <input required />
      <input />
    </div>

    <div class="inputAttr">
      <input placeholder="你好" />
      <input readonly />
      <input required />//必填
    </div>

    <div class="selection">索拉卡放假了世界发了加上了</div>

    <div class="visited">
      <a href="#">1</a>
      <a href="#">2</a>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  const num = ref(4);

  const fullscreen = () => {
    (
      document.querySelector('.fullscreenTest') as HTMLElement
    ).requestFullscreen();
  };

  onMounted(() => {
    // (document.querySelector('input[type=checkbox]').indeterminate as HTMLElement) = true
  });
</script>
<style lang="less" scoped>
  .test_active:active {
    color: red;
  }

  .fullscreenTest:fullscreen {
    background: red;
  }

  .base div:first-of-type {
    background: red;
  }

  .range {
    input:in-range {
      color: red;
    }
    input:out-of-range {
      color: blueviolet;
    }
  }

  .indeterminate {
    input:indeterminate {
      box-shadow: 0 0 1px red;
    }
  }

  .invalid {
    input:invalid {
      color: red;
    }
  }

  .base div:last-child {
    background: yellow;
  }

  .base div:nth-child(n + 1) {
    background: blue;
  }

  .base div:only-of-type {
    background: red;
  }

  .optional {
    input:optional {
      box-shadow: 0 0 1px red;
    }
  }

  .inputAttr {
    input::placeholder {
      //选择已规定 "placeholder" 属性的 input 元素。
      color: yellow;
    }
    input:read-only {
      //选择已规定 "readonly" 属性的 input 元素
      box-shadow: 0 0 1px red;
    }
    input:read-write {
      //选择未规定 "readonly" 属性的 input 元素。
      box-shadow: 0 0 1px red;
    }
    input:read-write {
      //选择未规定 "readonly" 属性的 input 元素。
      box-shadow: 0 0 1px red;
    }
    input:required {
      //选择已规定 "required" 属性的 input 元素
      box-shadow: 0 0 1px blue;
    }
  }

  .selection::selection {
    //选择用户已选取的元素部分。
    color: #5a9bff;
    background: yellow;
  }

  .visited {
    a:visited {
      color: blueviolet;
    }
  }
</style>
