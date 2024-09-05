<script setup lang="ts"></script>

<template>
  <div id="box1"></div>
  <teleport to="#box1">
    <div>我系渣渣辉box1</div>
  </teleport>
  <teleport to="#box2">
    <div>我系渣渣辉box2</div>
  </teleport>
  <div id="box2"></div>
  <Teleport defer to="#box3">
    <div>我系渣渣辉box3</div>
  </Teleport>
  <div id="box3"></div>
</template>
