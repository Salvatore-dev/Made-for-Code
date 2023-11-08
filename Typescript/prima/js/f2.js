"use strict";
// const n : number = 10
// const n2 : number = 20
// console.log(n, n2);
// type user = {
//     name: string,
//     age?: number,
//     username?: string
// }
// const utente : user = {
//     name: 'John',
//     age: sum2(1,23),
//     username: "johnny"
// }
// console.log(utente, sum2(3, 10));
// function sum2(x:number, y: number) : number {
//     return x+y
// }
// function t(array: number[]) {
//     return array.reduce((acc, el)=>el+acc,0)
// }
// console.log(t([1,2,3,100,5]));
// // ---     ---- #####    ---  Lezione 9   --- --- -----      -----  ----  #######
// function multiply(x : number, y : number) : number {
//     return x * y
//   }
//   console.log( multiply(10, 4) )
//   const n1 : number = multiply(10, NaN) 
//   console.log( isNaN(n1) ? 'green' : 'pink' )
//   const x : number = NaN
//   console.log(typeof x)
//   const uc = (s : string) => s.toUpperCase()
//   console.log( uc('ciao') )
//   // console.log( uc(10) )
//   function doSome1(v : string | number) {
//     switch(typeof v) {
//       case 'number':
//         console.log(v * 10)
//       break
//       case 'string':
//         console.log(v + '++++')
//       break
//     }
//   }
//   doSome1(10)
//   doSome1('ciao')
//   //doSome1([1,2,3])
//   function firstPlusLast(numbers : number[]) : void {
//     console.log(numbers[0] + numbers[numbers.length - 1])
//   }
//   firstPlusLast([1,2,3])
//   function getFirstPlusLast(numbers : number[]) : number[] {
//     return numbers.map((number) => {
//       return number * 10
//     })
//   }
//   console.log(getFirstPlusLast([1,2,3]))
//   function fn(v : boolean) : string | number {
//     return (v) ? 'ciao' : 10
//   }
//   const n3 : string | number = fn(true)
//   type FnSum = {
//     (x: number, y: number) : number
//   }
//   function fn2( fn : FnSum ) : number {
//     return fn(10, 5)
//   }
//   const sum : FnSum = (x, y) => x + y
//   console.log( 'vedi qui', fn2(sum) )
//   type User = {
//     username: string, 
//     age: number,
//     values?: number[]
//   }
//   const u1 : User = {
//     username: 'lverdi',
//     age: 10
//   }
//   function printUserData(u : User) {
//     console.log(`${u.username} ${u.age * 10} ${u.values ?? ''}`)
//   }
//   printUserData(u1)
//   type UserData = {
//     data: User,
//     country: string,
//     fn:  FnSum
//   }
//   const obj : UserData = {
//     data: u1,
//     country: 'Italy',
//     fn: (a : number, b : number) : number => a + b
//   }
//   // function Box(props: ReactProps, children, ReactChildren) : ReactJsx {
//   // }
// // Esercizio TS: realizzare una funzione che prende in ingresso un Array di stringhe e un dato di tipo Dog. 
// //Il tipo Dog è un oggetto che ha proprietà name, breed (razza) e price opzionale.
// //La funzione deve restituire una stringa composta dall'unione delle stringhe dell'array 
// // e di nome e razza del cane se non è presente il prezzo, 
// // altrimenti deve restituire il prezzo moltiplicato per 2
// type StringOrNumber = string | number
// function esTs1(s: string[], d: Dog) : StringOrNumber {
//     let result : StringOrNumber = ''
//     s.forEach((str) => {
//         result += str + ' '
//     })
//     if (!d.price) {
//         result += d.name + ' '
//         result += d.breed + ' '
//     } else {
//         let n = d.price *2
//         result = n
//     }
//     return result
// }
// type Dog = {
//     name:string;
//     breed: string;
//     price?: number;
// }
// const bobby : Dog ={
//     name:"Bobby",
//     breed:"German Shepherd"
// }
// const lola : Dog ={
//     name:"Lola",
//     breed:"Bulldog",
//     price:50
// }
// const res1 : StringOrNumber = esTs1(['ciao', "bau", "miao"], lola)
// console.log(res1);
// //Esercizio TS2: realizzare un tipo Student avente id, firstname, lastname, rates (Array di numeri)
// //Creare una funzione che accetta due student e restituisce le student con la media voto migliore
// function bestStudent(S1: Student, S2: Student) : Student {
//     let m1 : number = media(S1.rates)
//     let m2 : number = media(S2.rates)
//     console.log("m1 ", m1, "m2 ", m2);
//     if (m1>m2) {
//         return S1
//     } else {
//         return S2
//     }
// }
// type Student = {
//     id:number;
//     firstname:string;
//     lastname:string;
//     rates : number[]
// }
// const student1: Student = {
//     id: 1,
//     firstname: "John",
//     lastname: "Doe",
//     rates: [90, 85, 78, 92, 88],
// };
// const student2: Student = {
//     id: 2,
//     firstname: "Jane",
//     lastname: "Smith",
//     rates: [88, 91, 76, 85, 90],
// };
// const student3: Student = {
//     id: 3,
//     firstname: "Alice",
//     lastname: "Johnson",
//     rates: [79, 82, 95, 88, 91],
// };
// function media(a:number[]) : number {
//     let sum : number = a.reduce((acc, curr)=> curr+ acc, 0) / a.length
//     return sum
// }
// console.log(bestStudent(student1, student3));
// // ex 1: realizzare una funzione che accetta un oggetto di tipo Rectangle (base e height, numeri).
// // realizzare un array di Rectangle e stampare per ognuno di essi l'area.
// //e la funzione restituisce il prodott tra le proprietà del rettangolo passato in ingresso
// type Rectangle ={
//   base: number;
//   height: number;
// }
// function getArea( r: Rectangle) : number {
//   let result : number
//  result = r.base * r.height
//   return result
// }
// let rectangleArray : Array<Rectangle> = [{base:4, height:5}, {base:6, height:7}, {base: 10, height: 200}, {base:200, height: 60}]
// rectangleArray.forEach((el) : void => {
//   console.log(getArea(el));
// })
// // Realizzare un interfaccia Student che abbia fullname, e array di voti, 
// //e un metodo avg che prende in ingresso un numero e restituisce una stringa.
// //Il metodo deve restituire 'OK , 'NOT OK' o '=' rispettivamente se la media voto dello studente è piu alta, 
// //piu bassa o uguale al numero passato alla funzione.
// //creare uno studente e testare la sua avg con i numeri 8 e 5.
// interface Student1 {
//   fullName: string;
//   votes: number[];
//   avg(num: number):string;
// }
// enum valutation {
//   NOT_OK = "non ok",
//   OK = "ok",
//   EQUALS = "="
// }
// function media1 (array: number[]) : number {
//   let sum : number= array.reduce((acc,curr) => curr + acc, 0)/array.length
//   return sum
// }
// const st2 : Student1 ={
//   fullName : "Marco de Rossi",
//   votes : [6,7,8,9],
//   avg(num:number) : string {
//     const medie : number = media1(this.votes);
//     if (medie > num ) {
//       return valutation.OK
//     } else {
//       if (medie < num){
//         return valutation.NOT_OK
//     } else {
//       return valutation.EQUALS
//     }
//   }
// }
// }
//  console.log(st2.avg(5));
// //esercizio 2
// //realizzare in ts una funzione che accetta un elemento HTML 
// //e un oggetto di tipo Dimensions (che ha width ed height come parametri numerici).
// //Il tipo dinemsnions è un'interfaccia che poi viene ampliata per contenere anche la proprietà bg, 
// //che può essere RED, BLUE o GREEN, per impostare le caratteristiche all'elemento.
// //Per realizzare la funzione usare una arrow di tipo FnCSS, che consente di applicare quanto detto sopra, 
// //e chiamarla con l'elemento con id #box, impostando valori: 400,330, BLUE
// interface Dimensions {
//   width: number;
//   height: number;
// }
// enum Colors {
//   RED = 'red',
//   BLUE = 'blue',
//   GREEN = 'green',
// }
// interface DimensionsExtended extends Dimensions {
//   bg: Colors;
// }
// type FnCSS = {
//   (el: HTMLElement | null, dim: DimensionsExtended): HTMLElement | null
// }
// const editBox: FnCSS = (el, dim) => {
//   if (el == null)
//       return null
//   el.style.width = `${dim.width}px`
//   el.style.height = `${dim.height}px`
//   el.style.backgroundColor = `${dim.bg}`
//   return el
// }
// const box: HTMLElement | null = document.getElementById('box')
// editBox(box, { width: 400, height: 330, bg: Colors.BLUE })
// //Esercizio: Realizzare una funzione Fn che prende in ingresso due parametri di tipo Person, 
// // e un booleano. Una persona ha nome, cognome, un metodo fullname che restituisce nome e cognome 
// // concatenati, età e un metodo isadult che mi dice booleanamente se la persona è maggiorenne.
// // Ha inoltre un genere (M o F), e un campo place. 
// //Place è un tipo avente city, country e cap opzionale.
// //La funzione Fn restituisce la persona più anziana se il terzo parametro è true, 
// // o quella più giovane se è false.
// //Dal dato restituito da Fn, stampare tutte le informazioni della persona.
// //Inoltre, creare un Array di 5 persone con dati a piacere, trovare il più giovane e 
// //il più anziano e passarli a Fn con true, stampando il valore prodotto.
// function fn1 (p1: Person, p2: Person, B: boolean) : Person {
//   if (B == true) {
//     if (p1.age > p2.age){
//       return p1
//     } else return p2
//   } else {
//     if (p1.age > p2.age){
//       return p2
//     } else return p1
//   }
// }
// type Person = {
//   name: string;
//   lastname: string;
//   fullname() : string;
//   age: number;
//   isAdult() : boolean;
//   gender: "F"|"M";
//   location : Place;
// }
// type Place ={
//   city : string;
//   country : string;
//   cap?: number;
// }
// const Mario : Person ={
//   name:"Mario",
//   lastname: 'Rossi',
//   fullname(): string {return `${this.name} ${this.lastname}`},
//   age: 28,
//   isAdult():boolean {return this.age > 18? true : false},
//   gender: 'M',
//   location: {
//     city: 'Napoli',
//     country: 'Italia',
//     cap: 84097
//   }
// }
// const Luigi: Person = {
//   name: "Luigi",
//   lastname: "Verdi",
//   fullname() { return `${this.name} ${this.lastname}` },
//   age: 25,
//   isAdult() { return this.age > 18 },
//   gender: "M",
//   location: {
//     city: "Roma",
//     country: "Italia",
//     cap: 89334
//   }
// };
// const Maria: Person = {
//   name: "Maria",
//   lastname: "Bianchi",
//   fullname() { return `${this.name} ${this.lastname}` },
//   age: 30,
//   isAdult() { return this.age > 18 },
//   gender: "F",
//   location: {
//     city: "Milano",
//     country: "Italia",
//   }
// };
// const Giuseppe: Person = {
//   name: "Giuseppe",
//   lastname: "Ferrari",
//   fullname() { return `${this.name} ${this.lastname}` },
//   age: 17,
//   isAdult() { return this.age > 18 },
//   gender: "M",
//   location: {
//     city: "Firenze",
//     country: "Italia",
//     cap: 50123
//   }
// };
// const Elena: Person = {
//   name: "Elena",
//   lastname: "Ricci",
//   fullname() { return `${this.name} ${this.lastname}` },
//   age: 67,
//   isAdult() { return this.age > 18 },
//   gender: "F",
//   location: {
//     city: "Torino",
//     country: "Italia",
//   }
// };
// const compare1 : Person = fn1 (Mario, Luigi, true)
// const compare2 : Person = fn1 (Elena, Maria, false)
// console.log(compare1, compare1.fullname(), compare1.isAdult());
// console.log(compare2, compare2.fullname(), compare2.isAdult());
// const persons : Person[] = [Maria, Mario, Elena, Giuseppe, Luigi]
// const Oldest : Person = persons.reduce((acc, curr,)=>{
//   if(curr.age > acc.age){ 
//     return curr;
//   }
//   return acc;
// })
// const Youngest : Person = persons.reduce((acc, curr) => {
//   if(curr.age < acc.age){
//     return curr
//   }
//     return acc
// })
// console.log(Oldest);
// console.log(Youngest);
// console.log(fn1(Oldest, Youngest, true));
// type ElementsCss = {
//   w: number,
//   h: number,
//   bg: string
// }
// class Box {
//   public selector : string 
//   public Css : ElementsCss
//   static CounterAll = 0
//   static CounterElement : {[key: string]: number} = {}
//   constructor(selector : string, Css: ElementsCss ){
//     this.selector = selector
//     this.Css = Css
//     Box.CounterAll++; 
//   if (!Box.CounterElement[selector]) {
//     Box.CounterElement[selector] = 1
//   } else {
//     Box.CounterElement[selector]++
//   }
//   }
//   public make() : HTMLElement {
//     let element = document.createElement(this.selector)
//     element.style.width = `${this.Css.w}px`;
//     element.style.height = `${this.Css.h}px`;
//     element.style.backgroundColor = this.Css.bg;
//     return element
//   }
//   public static printCounterAll() {
//     console.log(`Elements created: ${Box.CounterAll}`)
//   }
//   public static printCounterElemenet(){
//     for (let key in Box.CounterElement){
//        console.log(`I ${key} creati sono: ${Box.CounterElement[key]}`)
//     }
//   }
// }
// const divCss : ElementsCss = {
//   w: 200,
//   h: 300,
//   bg: 'red'
// }
// const div : Box = new Box('div', divCss ) 
// const firstElement = div.make()
// console.log(firstElement);
// document.body.appendChild(firstElement).textContent = "sono qui"
// Box.printCounterAll()
// Box.printCounterElemenet()
// class Section extends Box {
//   constructor(Css : ElementsCss) {
//     super("section", Css  )
//   }
// }
// const section = new Section({ w: 200, h: 400, bg: 'blue' });
// const secondElement = section.make();
// console.log(secondElement);
// const span : Box = new Box("p", {w: 50, h: 100, bg: "green"})
// const terzoElemento = span.make()
// console.log(terzoElemento);
// document.body.appendChild(secondElement).appendChild(terzoElemento).innerHTML= `<span id= "ciao"> ciao</p>`
// Box.printCounterAll()
// Box.printCounterElemenet()
// class Append {
//   private static el1: HTMLElement | null = null;
//   private static el2: HTMLElement | null = null;
//   static bind(el1: HTMLElement, el2: HTMLElement): void {
//     Append.el1 = el1;
//     Append.el2 = el2;
//   }
//   static make(): void {
//     if (Append.el1 && Append.el2) {
//       Append.el1.appendChild(Append.el2);
//     }
//   }
// }
//creare in js+ts un'app che permette di recuperare l'input da un campo input testuale 
// e scriverlo sotto in real-time, passando dalla logica di una classe Input. 
// Inoltre, se l'input digitato è "mela", in un elemento adiacente appare la foto di una mela. 
// La gestione dell'apparizione della mela deve essere gestita tramite componenti statiche ed enum. 
//new Input('text').mount()
var Fruit;
(function (Fruit) {
    Fruit["Apple"] = "Mela";
    Fruit["Banana"] = "Banana";
    Fruit["Caff\u00E8"] = "Caff\u00E8";
})(Fruit || (Fruit = {}));
class Input {
    constructor() {
        this.parent = document.getElementById('box');
        this.input = document.createElement('input');
        this.imageContenitor = document.createElement('div');
        const contenitor = document.createElement('div');
        Input.img.style.display = "none";
        this.imageContenitor.appendChild(Input.img);
        Input.img.src = "https://tse1.mm.bing.net/th?id=OIP.Nzrv91SIf_1rdCAG6PejIgHaE8&pid=Api&P=0&h=180";
        this.input.addEventListener('input', (e) => {
            let value = this.input.value.toLowerCase();
            console.log(value);
            contenitor.textContent = value;
            if (value === 'mela') {
                this.showApple();
            }
            else {
                this.hideApple();
            }
        });
        this.parent.appendChild(this.input);
        this.parent.appendChild(contenitor);
        this.parent.appendChild(this.imageContenitor);
    }
    showApple() {
        Input.img.style.display = 'block';
    }
    hideApple() {
        Input.img.style.display = 'none';
    }
    mount() {
        console.log(this.parent);
        return this.parent;
    }
}
Input.img = document.createElement('img');
const input1 = new Input();
input1.mount();
// document.addEventListener('DOMContentLoaded', function() {
//   const input1 = new Input();
//   input1.mount();
// });
