Vue.createApp({
    data() {
      return {
        newDolistInput:'',
        newStatus:true,
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
            
        }
    }
  }).mount('.app')