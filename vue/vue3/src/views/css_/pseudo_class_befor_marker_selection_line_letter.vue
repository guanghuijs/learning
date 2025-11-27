<template>
  <div class="text-box">
    <p>
      Once upon a time, there was a little boy named Tim who loved to read books. One day,
      he found a magical book that transported him into the world of his favorite
      characters.
    </p>
    <p>
      Tim entered the book and found himself in a mystical forest. He explored the
      enchanted trees and encountered talking animals and fairies. He followed a path
      through the forest and arrived at a castle where he met a brave knight and a
      beautiful princess.
    </p>
    <p>
      The knight told Tim that a wicked witch had cast a spell on the castle, and he
      needed Tim's help to break the curse. Together, they searched for clues to find the
      witch and discovered that she was hiding in a nearby cave.
    </p>
    <p>
      Tim and the knight bravely entered the cave and faced the witch. She threatened to
      turn them into toads, but Tim was not afraid. He used his wits and quick thinking to
      outsmart the witch.
    </p>
  </div>
</template>

<style lang="less" scoped>
  .text-box {
    ::first-letter {
      font-size: 30px;
      color: red;
    }
    ::first-line {
      color: #999;
    }
    ::selection {
      background: gold;
    }
    p {
      margin: 0;
      display: list-item;
    }
    p::marker {
      color: blue;
      content: '★';
    }
  }
</style>

<route lang="yaml">
meta:
  title: 更多伪类
  sort: 19
</route>
