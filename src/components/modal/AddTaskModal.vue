<script setup>
import { useTaskStore } from "@/stores/tasks";

const store = useTaskStore();
</script>
<template>
  <div class="form">
    <h3>Add a new task</h3>
    <label for="title">Title*</label>
    <input
      type="text"
      name="title"
      placeholder="Enter a title..."
      v-model="store.newTask.name"
    /><br />
    <label for="description">Description*</label>
    <textarea
      name="description"
      rows="4"
      placeholder="Enter a description..."
      v-model="store.newTask.description"
    ></textarea
    ><br />
    <button @click="store.addNewTask" class="btn gray">Add Task</button>
    <p v-if="store.showError" class="error">
      Please enter the title and description for the task!
    </p>
  </div>
</template>
<style>
.error {
  margin-top: 20px;
  background: #c73333;
  color: white;
  padding: 2px 10px;
  max-width: max-content;
}
</style>
