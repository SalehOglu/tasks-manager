<script setup>
import { reactive, ref, computed } from "vue";
import Task from "./components/Task.vue";
import FilterTasks from "./components/FilterTasks.vue";
import ModalWindow from "./components/modal/ModalWindow.vue";
import AddTaskModal from "./components/modal/AddTaskModal.vue";
import { useTaskStore } from "@/stores/tasks";

const store = useTaskStore();
</script>

<template>
  <main class="container">
    <div class="header">
      <div class="header-side">
        <h1>Tasks Manager</h1>
      </div>
      <div class="header-side">
        <button class="btn secondary" @click="store.modalActive = true">
          + Add task
        </button>
      </div>
    </div>

    <FilterTasks />

    <div class="tasks">
      <Task />
    </div>

    <ModalWindow v-if="store.modalActive">
      <AddTaskModal />
    </ModalWindow>
  </main>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-side {
    display: flex;
    align-items: center;

    h1 {
      text-transform: capitalize;
      font-size: 42px;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
    }

    .secondary {
      margin-left: 12px;
    }
  }
}

.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.add-task {
  margin-top: 60px;

  input,
  textarea {
    width: 360px;
    max-width: 100%;
    margin-top: 12px;
    padding: 5px;
  }

  button {
    width: 360px;
    margin-top: 12px;
  }
}

.error {
  margin: 10px 0;
  color: #ff8e8e;
}
</style>
