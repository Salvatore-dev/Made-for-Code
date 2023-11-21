
App 2
Realizzazione di un blog culinario, che mostra ricette.
In home, abbiamo tutte le ricette inserite. Ogni ricetta, è composta da id, nome, preparazione (testo) e avrà 
un collegamento tabellare alle sue "istruzioni". Ogni istruzione è composta da id, testo, id_ricetta.
In /dashboard possiamo creare, modificare ed eliminare una ricetta, e per ogni ricetta possiamo creare, 
modificare ed eliminare le sue istruzioni.
Ogni ricetta è graficamente rappresentata dai suoi contenuti, in cui, prima del testo, compaiono in ordine 
cronologico le sue istruzioni.
In home, solo titolo e testo delle ricette vengono mostrati. Cliccando su "show more" è possibile entrare 
nella scheda della singola ricetta che mostra tutti i suoi dati, comprensivi di istruzioni. (/recipes/titolo-dellaricetta).
I dati dell'applicazione vanno salvati in un database.
Opzionalmente, è possibile prevedere un file upload per collegare un'immagine ad una ricetta



Librerie installate
npm install --save mysql2

npm install framer-motion

