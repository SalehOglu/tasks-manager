import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue';

export const useTaskStore = defineStore('tasks', () => {
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
    ]);

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
            id: Math.max(...tasks.map((task) => task.id)) + 1,
            completed: false,
            name: newTask.name,
            description: newTask.description,
            });
            newTask.name = '';
            newTask.description = '';
            showError.value = false;
            modalActive.value = false;
        } else {
            showError.value = true;
        }
    }

  return { tasks, filterTasks, filterFunction, setFilter, toggleComplete, showError, newTask, addNewTask, modalActive, openModal, closeModal}
})