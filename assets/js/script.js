const {createApp} = Vue;

createApp ({
    data(){
        return{
            tasks: [
                {
                    text: 'Ricordare ad Andrea di dar da mangiare ai cavalli',
                    done: false
                },
                {
                    text: 'Comprare un profumo al Pilla Store',
                    done: true
                },
                {
                    text: 'Dire al Teacher che sulla Marinara si mette origano e non rosmarino',
                    done: false
                },
            ],
            shake: false,
        }
    },

    methods: {
        deleteTask (index){
            this.tasks.splice(index, 1)
        },
    },

    mounted (){
        
    }
}).mount('#app')