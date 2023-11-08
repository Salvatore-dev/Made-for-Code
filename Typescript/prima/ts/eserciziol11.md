ex1
creare in ts, una classe chiamata Box che prende in ingresso due parametri:
- selector: una stringa che indica il tipo di elemento (es div)
- un oggetto di tipo ElementCss che deve avere w, h e bg come props
la classe permette di creare un elemento del tipo indicato con le caratteristiche indicate.
Il suo metodo make crea e restituisce l'elemento:

const div = new Box('div', {w: 100, h: 300, bg: 'green'})
const el = div.make()

la classe ha anche una prop statica che tiene traccia di quanti elementi sono stati creati, e di quanti elementi di un dato tipo (es div sono stati creati).

creare una sottoclasse Section che consente di creare in modo semplificato una <section> sfruttando le caratteristiche ereditate.Ó

const s = new Section( {w: 100, h: 300, bg: 'green'}) 

creare una classe Append, che accetta due elementi nel metodo statico bind. il primo elemento deve essere aggiunto al secondo elemento tramite il metodo statico make.

Append.bind(el1, el2)
Append.make() // aggiunge el2 a el1

Testare questo funzionamento