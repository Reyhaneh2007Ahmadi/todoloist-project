Vue.createApp({
    data() {
      return {
        message: 'Hello Vue!',
        dolist:[
            {
                title:'do home works',
                completed:true
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
                completed:true
            },
        ]
      }
    }
  }).mount('#app')