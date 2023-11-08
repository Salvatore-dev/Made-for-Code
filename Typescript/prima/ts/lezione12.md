class C1 {
  protected prop1 : number
  protected prop2 : number

  constructor(p1: number, p2: number) {
    this.prop1 = p1
    this.prop2 = p2
    console.log('C1 constructor called!')
  }
}

class C2 extends C1 {
  private prop3 : number

  constructor(p1: number, p2: number, p3: number) {
    super(p1, p2)
    this.prop3 = p3
    console.log('C2 constructor called!')
  }
}

const v1 = new C2(1,2,3)

//part2
const m1:Map<number, string> = new Map()

m1.set(1, 'Anna')
m1.set(2, 'Luca')

if( m1.has(2) ) {
  console.log(m1.get(2))
}

const m2:Map<string, Map<string, number[]>> = new Map()

m2.set('javascript', new Map([
  ['funzioni', [6,7,8]],
  ['oggetti', [9,10,7]]
]))

m2.forEach((map, key) => {
  console.log(${key.toUpperCase()})

  map.forEach((rates, topic) => {
    console.log(${topic}: ${rates})
  })
})

//part3

type Box<T> = {
  width: T
}

const b1: Box<number> = {width: 100}
const b2: Box<string> = {width: '100px'}

function fn<T1, T2>(v1: T1, v2: T2): Map<T1, T2> {
  if( typeof v1 == 'number' && typeof v2 == 'number' ) {
    console.log( v1 + v2 )
  }

  else if( typeof v1 == 'string' && typeof v2 == 'string' ) {
    console.log( v1 + ' ' + v2 )
  }

  else {
    console.log('give me numbers or strings')
  }

  return new Map([
    [v1, v2]
  ])

}

const m1: Map<number, number> =  fn(10, 5)
const m2: Map<string, string> = fn('ciao', 'javascript')
const m3: Map<number[], number[]> = fn([], [])/