<script setup lang="ts">
  import { computed, ref, unref } from 'vue';
  import { NButton } from 'naive-ui';

  import { Page } from '@packages/components';

  import { weeks, calendar } from './js/calendar.helper';
  import { useSysStoreRefs } from '@/stores/sys';

  const { primaryColor } = useSysStoreRefs();
  const date = ref(new Date());
  const _date = computed(() => {
    return calendar(unref(date));
  });

  const toggleYear = (number = 1) => {
    const { year } = unref(_date);
    const temp = new Date(unref(date));
    temp.setFullYear(year + number);
    date.value = temp;
  };
  const toggleMouth = (number = 1) => {
    const { month } = unref(_date);
    const temp = new Date(unref(date));
    temp.setMonth(month + number);
    date.value = temp;
  };
</script>

<template>
  <page title="日历">
    <div class="calendar">
      <div class="opt flex-between">
        <n-button @click="toggleYear(-1)">上一年</n-button>
        <n-button @click="toggleMouth(-1)">上个月</n-button>
        <div>{{ _date.year }}-{{ _date.month + 1 }}-{{ _date.date }}</div>
        <n-button @click="toggleMouth(1)">下个月</n-button>
        <n-button @click="toggleYear(1)">下一年</n-button>
      </div>
      <div class="calendar-week">
        <div class="week-item" v-for="week in weeks" :key="week">
          {{ week }}
        </div>
      </div>
      <div class="calendar-main">
        <div
          class="prev-day"
          v-for="prevDay in _date.calendarPrevArr"
          :key="prevDay"
        >
          {{ prevDay }}
        </div>
        <div
          class="currentMonth-day"
          v-for="day in _date.days"
          :class="day === _date.date ? 'today' : ''"
        >
          {{ day }}
        </div>
        <div class="after-day" v-for="afterDay in _date.calendarAfter">
          {{ afterDay }}
        </div>
      </div>
    </div>
  </page>
</template>

<style scoped lang="less">
  .calendar-week {
    display: flex;
    align-items: center;
    div {
      height: 50px;
      width: calc(100% / 7);
      text-align: center;
      line-height: 50px;
    }
  }

  .calendar-main {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    div {
      height: 50px;
      width: calc(100% / 7);
      text-align: center;
      line-height: 50px;
      cursor: pointer;
      user-select: none;
    }
    .after-day,
    .prev-day {
      opacity: 0.5;
    }
    .today {
      background: v-bind(primaryColor);
      color: white;
    }
  }
</style>

<route lang="yaml">
meta:
  title: 日历
  sort: 9
</route>
