import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue';

export const useTaskStore = defineStore('tasks', () => {
    const defaultTasks = [
    {
        name: "Website development",
        description: "Develop the portfolio website using Vue JS.",
        completed: false,
        id: 1,
    },
    {
        name: "Composition API",
        description:
        "Learn how to use the composition API and how it compares to the options API.",
        completed: true,
        id: 2,
    },
    {
        name: "Pinia",
        description: "Learn how to setup a store using Pinia.",
        completed: true,
        id: 3,
    },
    ];

    const storedTasks = localStorage.getItem('tasks');

    const tasks = reactive(storedTasks ? JSON.parse(storedTasks) : defaultTasks);
    let filterTasks = ref("");

    const filterFunction = computed(() => {
        if (filterTasks.value === "todo") {
            return tasks.filter((task) => !task.completed);
        } else if (filterTasks.value === "done") {
            return tasks.filter((task) => task.completed);
        } else {
            return tasks;
        }
    });

    function setFilter(value) {
        filterTasks.value = value;
    }

    function toggleComplete(id) {
        tasks.forEach((task) => {
            if (task.id === id) {
            task.completed = !task.completed;
            }
        });
    }

    const showError = ref(false);

    let newTask = reactive({
        name: '',
        description: '',
    });

    let modalActive = ref(false);

    function openModal() {
        modalActive.value = true;
    }
    function closeModal() {
        modalActive.value = false;
    }

    function addNewTask() {
        if (newTask.name && newTask.description) {
            tasks.push({
            // id: Math.floor(Math.random() * 1000000),
            id: tasks.length ? Math.max(...tasks.map((task) => task.id)) + 1 : 1,
            completed: false,
            name: newTask.name,
            description: newTask.description,
            });
            newTask.name = '';
            newTask.description = '';
            showError.value = false;
            closeModal();
        } else {
            showError.value = true;
        }
    }

    function deleteTask(id) {
         const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            tasks.splice(index, 1);
        }
    }

  return { tasks, filterTasks, filterFunction, setFilter, toggleComplete, showError, newTask, addNewTask, modalActive, openModal, closeModal, deleteTask};
})