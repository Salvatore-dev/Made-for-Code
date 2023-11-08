// type mixed_String_Number = string | number;

// const x : mixed_String_Number = 10;

// type Square = {
//   late: number
// }

// type FnSquare = {
//   (s:Square) : number
// }

// const s1 : Square = {late:10}

// const squareArea : FnSquare = (s) => {
//   return s.late * s.late
// }

// const r1 : number =  squareArea({late: 10})
// console.log(r1)

// interface Point {
//   x: number,
//   y: number
// }

// const p1 : Point = {x: 20, y: 10}

// interface Point3D extends Point {
//   z: number
// }

// interface Point3D {
//   w?: string
// }

// const p2 : Point3D = {x: 10, y: 20, z: 30}

// type T1 = {
//   x: number
// }

// type T2 = T1 & {
//   y: number
// }

// type T3 = {
//   t1: T1,
//   t2: T2,
//   t3: Point3D[]
// }

// enum Rate {
//   BAD = 0,
//   NORMAL = 5,
//   GOOD = 10
// }

// const vote1 : Rate = Rate.GOOD
// console.log(vote1)

// type Student = {
//   fullname: string,
//   rate: Rate
// }

// const st1 : Student = {fullname: 'luigi verdi', rate: Rate.NORMAL} 

// function getStudentRate(s : Student, rateCmp : Rate) {
//   console.log(s.rate > rateCmp ? 'ok' : 'not ok')
// }

// getStudentRate(st1, Rate.GOOD)
// getStudentRate(st1, Rate.BAD)