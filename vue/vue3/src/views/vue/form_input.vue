<template>
  <h3>表单输入绑定</h3>
  <input :value="text" @input="(event) => (text = event.target.value)" />
  {{ text }}
  <h3>v-model{{ text }}</h3>
  <input v-model="text" />
  <h3>绑定复选框文本域</h3>
  <div>
    <input v-model="flag" type="checkbox" />
    {{ flag }}
    <div></div>
    <textarea v-model="text"></textarea>
  </div>
  <h3>单选按钮</h3>
  <div>
    <div>
      <label>
        <input type="radio" name="sex" value="男" v-model="sex" />
        男
      </label>
      <label>
        <input type="radio" name="sex" value="女" v-model="sex" />
        女
      </label>
      <div>{{ sex }}</div>
    </div>
  </div>
  <h3>下拉选择器</h3>
  <div>
    <p>{{ hobby }}</p>
    <select v-model="hobby">
      <option value="抽烟">抽烟</option>
      <option value="喝酒">喝酒</option>
      <option value="烫头">烫头</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const text = ref();
  const flag = ref(true);
  const sex = ref('男');
  const hobby = ref('抽烟');
</script>

<route lang="yaml">
meta:
  title: 表单 输入框
  sort: 10
</route>
