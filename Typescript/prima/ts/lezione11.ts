// String.prototype.hello = function() {
//     return "Hello " + this.toString()
//   }
  
//   console.log( "ciao".hello() )
  
//   function Square(late) {
//     this.late = late
//     this.area = function() {
//       return this.late * this.late
//     }
//   }
  
//   const s1 = new Square(10)
//   console.log( s1.area() )
  
//   const s2 = new Square(4)
//   console.log( s2.area() )


//   class Square {
//     #late = 1;
  
//     constructor(late) {
//       this.setLate(late)
//     }
  
//     area() {
//       return this.#late * this.#late
//     }
  
//     setLate(late) {
//       if(late > 0)
//         this.#late = late
//     }
//   }
  
//   const s1 = new Square(-10)
//   s1.setLate(-20)
  
//   console.log( s1.area() )
  
//   const s2 = new Square(4)
//   console.log( s2.area() )
  
  
//   // part 2
  
//   class Person {
//     #firstname
//     #lastname
  
//     constructor(firstname, lastname) {
//       this.#firstname = firstname
//       this.#lastname = lastname
//     }
  
//     get fullname() {
//       return `${this.#firstname} ${this.#lastname}` 
//     }
  
//     set fullname(s) {
//       const [fn, ln] = s.split(' ')
//       this.#firstname = fn
//       this.#lastname = ln
//     }
  
//     m1() {
//       console.log('m1 di Person')
//     }
//   }
  
//   const p1 = new Person('luigi', 'verdi')
//   console.log( p1.fullname )
  
//   p1.fullname = 'Anna Verdi'
//   console.log( p1.fullname )
  
  
//   class Player extends Person {
//     m1() {
//       super.m1()
//       console.log('m1 di Player')
//     }
  
//     m2() {
//       console.log('m2')
//     }
//   }
  
//   const pl1 = new Player('anna', 'rossi')
//   console.log(pl1.fullname)
//   pl1.m1()
//   pl1.m2()
  
//   //part 3
  
//   function fn<T>(x: T) : T { 
//     switch(typeof x) {
//       case 'number': 
//         return x * 10 as T
  
//       case 'string':
//         return x + ' ciao' as T
  
//        default:
//         return x
//     }
//   }
  
//   console.log(fn(10))
//   console.log(fn('ciao'))
  
  
//   type Box<T, S> = {
//     width: T,
//     backgroundColor: S
//   }
  
//   type Square = {
//     late: number
//   }
  
//   const box1 : Box<number, string> = {width: 10, backgroundColor: 'ciao'}
//   const box2 : Box<boolean, number[]> = {width: true, backgroundColor: [10,20,30]}
//   const box3 : Box<number, Square> = {width: 10, backgroundColor: {late: 10}}
  
//   function squareArea( s : Square | null ) {
//     return (s as Square).late * (s as Square).late
//   }
  
//   console.log( squareArea({late: 10}) )
//   // console.log( squareArea(null) )
  
//   class Box2 {
//     x: number;
//     y: number;
  
//     constructor(x: number, y: number) {
//       this.x = x
//       this.y = y
//     }
  
//     area() : number {
//       return this.x * this.y
//     }
  
//     get doubleX() : number {
//       return this.x * 2
//     }
//   }
  
//   const b1 : Box2 = new Box2(10, 5)
//   const boxes : Box2[] = [b1]
//   console.log(b1.doubleX)
  
//   //part 4
  
//   interface I1 {
//     readonly x: number
//   }
  
//   const a : I1 = {x: 10}
//   // a.x = 20
//   console.log(a.x)
  
//   class Animal {
//     public name : string
//     protected age : number
  
//     constructor(name : string, age: number) {
//       this.name = name
//       this.age = age
//     }
  
//     public getAge() : number {
//       return this.age
//     }
  
//     public setAge(age : number) : void {
//       if(age < 0) {
//         console.log('Warning: age must be > 0')
//         return
//       }
  
//       this.age = age
//     }
//   }
  
//   class Dog extends Animal {
//     public static planet : string = 'Earth'
//     private static readonly breed : string = 'Dog'
//     private price : number
//     private static dogsInstantiated : number = 0
  
//     constructor(name : string, age: number, price: number) {
//       super(name, age)
//       this.price = price
  
//       Dog.dogsInstantiated++
//     }
  
//     public static staticM1() {
//       console.log('staticM1 called')
//       console.log( this.planet )
//     }
  
//     public static printDogsCreated() {
//       console.log(`Dogs created: ${this.dogsInstantiated}`)
//     }
  
//     roar() : void {
//       console.log(Dog.breed)
//       console.log('ho ' + this.age + ' anni')
//       console.log('bau bau')
//     }
//   }
  
//   const a1 : Animal = new Animal('fuffy', 10)
//   a1.name = 'altro nome'
//   console.log(a1.name)
  
//   a1.setAge(100)
//   console.log(a1.getAge())
  
//   const d1 : Dog = new Dog('abc', 5, 1000_00)
//   console.log(d1.getAge())
//   d1.roar()
  
//   console.log( Dog.planet )
//   Dog.staticM1()
  
//   const d2 : Dog = new Dog('abc', 5, 1000_00)
//   const d3 : Dog = new Dog('abc', 5, 1000_00)
  
//   Dog.printDogsCreated()
  
  