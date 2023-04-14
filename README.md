Vue To Do List &checkmark;
===
> Creare una *To Do List* sulla base di quella svolta a lezione. <br>
Ogni Task della To Do sarà un oggetto formato da due proprietà: <br>
- *text*: una stringa che indica il testo del *To Do*;
- *done*: un valore `booleano` (*true*/*false*) che indica se il Task è stato realizzato oppure no.
### Milestone #1
Stampare all'interno di una lista `html` un *item* per ogni task, se la proprietà *done* è `===` a *true* **&rArr;** visualizzare il testo della Task ~~barrato~~.
### Milestone #2
Visualizzare di fianco ad ogni item una icona al cui *@click* il Task viene rimosso dalla lista.
### Milestone #3
Predisporre un campo di `input` testuale ed un pulsante *aggiungi*: cliccando sul quest'ultimo il testo digitato viene letto e utilizzato per creare un nuovo Task che viene quindi aggiunto alla lista di quelli già esistenti.

---
### Bonus
1- Oltre al *@click* sul pulsante, intercettare anche la `keyup.enter` per aggiungere il Task alla lista; <br>
2- Al *@click* sul testo della Task, invertire il valore della proprietà `done` del Task corrispondente (se *done* `===` *false* `=>` *true* e viceversa).
