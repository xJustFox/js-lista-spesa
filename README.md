### Esercizio di oggi: Lista della spesa con ciclo while
nome repo: `js-lista-spesa`

#### Consegna: 
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

### Problem Solving:
1- Inizializza un array `shoppingList`; <br>
    1.1- Aggiungi  gli elementi della lista della spesa all'array;<br>
2- Inizializza una variabile `listContainer`;<br>
    2.1- Assegna alla variabile `list` un tag `ul` con id `shopping-list`;<br>
3- Inizializza la variabile `i`;<br>
    3.1- Assegna alla variabile `i` il valore 1; <br>
4- Inizializza l'istruzione `while`;<br>
    4.1- Assegna alla condizione di `while` la variabile `i` < della lunghezza dell'array `shoppingList`;<br>
    4.2- Incrementa `i` per far proseguire il loop;<br>
5- Inizializza una costante `li`;<br>
    5.1- Assegna alla variabile `li` un tag `"li"` attraverso l'istruzioni `.createElement`;<br>
6- Aggiungi gli elementi di `shoppingList` alla variabile `li`;<br>
7- Aggiungi la variabile `li` alla variabile `listContainer` attraverso l'istruzione `.appendChild`;<br>