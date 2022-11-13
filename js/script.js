const toDoList = {
  data() {
    return {
        task:"",
        listOfToDo: [],
        // listOfDoing:[],
        listOfDone:[],
    };
  },

  methods: {
    clickButton: function (e) {
      // console.log("clickButton", clickButton);
    //   const index = this.listOfToDo.length;
    //   const value = this.listOfToDo[index];

      this.listOfToDo.push(this.task);
      this.task=""
    //   this.listOfToDo.push(this.)
    },

    itemValue: function (e) {
      this.task = e.target.value;
      
    },

    selectChoice: function(e, taskToMove){
        const value = e.target.value;
        // this.value = DOING ? this.listOfDoing.push(this.task)
        // this.value = DONE ? this.listOfDone.push(this.task)
        // if(value==='DOING'){
        //     this.listOfDoing.push(taskToMove)
        // } else 
        if(value==='DONE'){
          this.listOfToDo.pop(taskToMove)
            this.listOfDone.push(taskToMove)
            
        }
    }
  },

  computed: {
    itemInList: function (e) {
      return this.listOfToDo.item;
    },
  },
};

Vue.createApp(toDoList).mount("#root");
