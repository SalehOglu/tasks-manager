<script setup>
import { useTaskStore } from "@/stores/tasks";

const store = useTaskStore();
</script>
<template>
  <div class="filters">
    <div>
      <p>Filter by state</p>
      <div class="badges">
        <div
          class="badge"
          @click="store.setFilter('todo')"
          :class="{ selected: store.filterTasks === 'todo' }"
        >
          To-Do
        </div>
        <div
          class="badge"
          @click="store.setFilter('done')"
          :class="{ selected: store.filterTasks === 'done' }"
        >
          Done
        </div>
        <span
          class="clear"
          v-if="store.filterTasks"
          @click="store.setFilter('')"
        >
          x clear
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.filters {
  display: flex;
  flex-direction: column;
  margin: 40px 0;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 14px 0;
    align-items: center;
    .badge {
      padding: 8px 7px;
      background-color: var(--gray-color);
      color: var(--black-color);
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      border-radius: 8px;
      cursor: pointer;
      user-select: none;
      &:hover {
        background-color: #fff;
      }
      &.selected {
        background-color: #e42c5f;
        color: var(--white-color);
      }
    }
  }

  .clear {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
  }
}
</style>
