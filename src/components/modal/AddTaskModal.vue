<script setup>
import { defineProps } from "vue";
const props = defineProps(["showError"]);
</script>
<template>
  <div class="form">
    <h3>Add a new task</h3>
    <label for="title">Title*</label>
    <input type="text" name="title" placeholder="Enter a title..." /><br />
    <label for="description">Description*</label>
    <textarea
      name="description"
      rows="4"
      placeholder="Enter a description..."
    ></textarea
    ><br />
    <button @click="addNewTask" class="btn gray">Add Task</button>
    <p v-if="showError" class="error">
      Please enter the title and description for the task!
    </p>
  </div>
</template>
<style></style>
