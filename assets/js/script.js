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
            //flag che determina il movimento dell'icona del cestino con valore booleano
            shake           : false,
            newTask         : '',
            errorMessage    : ''
        }
    },

    methods: {
        // con questa funzione si prende l'index delle tasks
        // .splice cancella la singola task cliccando sull'apposita icona
        deleteTask (index){
            if (this.tasks[index].done) {
                this.tasks.splice(index, 1)
            } else {
                this.errorMessageHide('Per eliminare il Task devi prima averlo completato')
            }
        },

        // con questa funzione si crea un nuovo task e lo si "butta" nell'array tasks
        createTask (){
            // si imposta la condizione che il testo della nuova task deve essere di almeno
            // 5 caratteri - se è così allora si crea l'oggetto con done false di default
            if(this.newTask.length > 4) {
                const newTask = {
                    text: this.newTask,
                    done: false
                }
                // con unshift si pusha la task creata e la si mette in cima all'array (push la mette in fondo)
                this.tasks.unshift(newTask);
                //si resetta il campo dell'input
                this.newTask = '';
            } else {
                // qualora il testo del nuovo task abbia meno di 5 caratteri viene 
                // stampato in pagina il messaggio di errore
                this.errorMessageHide ('Attenzione, il testo deve contenere almeno 5 caratteri!')
            }
        },
        // questa funzione fa si che qualsiasi messaggio di errore 
        // scompaia dopo 3 secondi
        errorMessageHide (error) {
            this.errorMessage = error;
            setTimeout(() => {
                this.errorMessage = '';
            }, 3000)
        }
        //TODO: chiedere ai Tutor perchè ho dovuto passare *error* nelle parentesi
        // della funzione
    },

}).mount('#app')