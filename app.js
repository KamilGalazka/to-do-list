Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addNewTaskToList() {
      if (this.newTask !== "") {
        this.tasks.push(this.newTask);
        this.newTask = "";
      }
    },
    deleteTaskFun(index) {
      this.tasks.splice(index, 1);
    },
  },
}).mount("#app");
