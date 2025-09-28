<script setup>
import { reactive, ref, computed } from "vue";
import Task from "../components/Task.vue";
import FilterTasks from "../components/FilterTasks.vue";
import ModalWindow from "../components/modal/ModalWindow.vue";
import AddTaskModal from "../components/modal/AddTaskModal.vue";

const tasks = reactive([
  {
    name: "Website design",
    description:
      "Define the style guide, branding and create the webdesign on Figma.",
    completed: true,
    id: 1,
  },
  {
    name: "Website development",
    description: "Develop the portfolio website using Vue JS.",
    completed: false,
    id: 2,
  },
  {
    name: "Hosting and infrastructure",
    description:
      "Define hosting, domain and infrastructure for the portfolio website.",
    completed: false,
    id: 3,
  },
  {
    name: "Composition API",
    description:
      "Learn how to use the composition API and how it compares to the options API.",
    completed: true,
    id: 4,
  },
  {
    name: "Pinia",
    description: "Learn how to setup a store using Pinia.",
    completed: true,
    id: 5,
  },
  {
    name: "Groceries",
    description: "Buy rice, apples and potatos.",
    completed: false,
    id: 6,
  },
  {
    name: "Bank account",
    description: "Open a bank account for my freelance business.",
    completed: false,
    id: 7,
  },
]);

const showError = ref(false);

let newTask = {};

let filterTasks = ref("");
let modalActive = ref(false);

function addNewTask() {
  if (newTask.name && newTask.description) {
    tasks.push({
      // id: Math.floor(Math.random() * 1000000),
      id: Math.max(...tasks.map((task) => task.id)) + 1,
      completed: false,
      name: newTask.name,
      description: newTask.description,
    });
    newTask = {};
    showError.value = false;
  } else {
    showError.value = true;
  }
}

function toggleCompletex(id) {
  tasks.forEach((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
  });
}

function setFilter(value) {
  filterTasks.value = value;
}

const filterFunction = computed(() => {
  if (filterTasks.value === "todo") {
    return tasks.filter((task) => !task.completed);
  } else if (filterTasks.value === "done") {
    return tasks.filter((task) => task.completed);
  } else {
    return tasks;
  }
});
</script>

<template>
  <main class="container">
    <div class="header">
      <div class="header-side">
        <h1>Tasks Manager</h1>
      </div>
      <div class="header-side">
        <button class="btn secondary" @click="modalActive = true">
          + Add task
        </button>
      </div>
    </div>

    <FilterTasks :filterTasks="filterTasks" @setFilter="setFilter" />

    <div class="tasks">
      <Task :tasks="filterFunction" @toggleComplete="toggleCompletex" />
    </div>

    <ModalWindow v-if="modalActive" @closeModal="modalActive = false">
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
