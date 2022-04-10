Vue.createApp({
    data() {
      return {

        dolist:[
            {
                title:'do home works',
                completed:false
            },
            {
                title:'read books',
                completed:true
            },
            {
                title:'make dinner',
                completed:true
            },
            {
                title:'sleep',
                completed:false
            },
        ],
        newDolistInput:'',
      }
    },
    methods:{
        toggleDone(){

        },
        addDolist(){
           
           var newDolist = {
                    title: this.newDolistInput ,
                    completed:false
            }
            this.dolist.push(newDolist)
            this.newDolistInput = '' 
            
        },
        
        clearCompleted() {
            this.tasks = this.tasks.filter(this.inProgress);
          },
          inProgress(task) {
            return ! this.isCompleted(task);
          },
          isCompleted(task) {
            return task.completed;
          }
        // methods: {
        //     toggleTodo(todo) {
        //         item.completed = !item.completed
        //     },
        //   },
        //   completeTask(task) {
        //     task.completed = ! task.completed;
        //   },
        // toggle:false,
    }
  }).mount('.app')