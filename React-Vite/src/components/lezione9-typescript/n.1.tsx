function multiply(x : number, y : number) : number {
    return x * y
  }
  
  console.log( multiply(10, 4) )
  
  const n1 : number = multiply(10, NaN) 
  console.log( isNaN(n1) ? 'green' : 'pink' )
  
  const x : number = NaN
  console.log(typeof x)
  
  const uc = (s : string) => s.toUpperCase()
  
  console.log( uc('ciao') )
  // console.log( uc(10) )
  
  function doSome1(v : string | number) {
    switch(typeof v) {
      case 'number':
        console.log(v * 10)
      break
  
      case 'string':
        console.log(v + '++++')
      break
    }
  }
  
  doSome1(10)
  doSome1('ciao')
  //doSome1([1,2,3])
  
  function firstPlusLast(numbers : number[]) : void {
    console.log(numbers[0] + numbers[numbers.length - 1])
  }
  
  firstPlusLast([1,2,3])
  
  function getFirstPlusLast(numbers : number[]) : number[] {
    return numbers.map((number) => {
      return number * 10
    })
  }
  
  console.log(getFirstPlusLast([1,2,3]))
  
  function fn(v : boolean) : string | number {
    return (v) ? 'ciao' : 10
  }
  
  const n3 : string | number = fn(true)
  
  type FnSum = {
    (x: number, y: number) : number
  }
  
  function fn2( fn : FnSum ) : number {
    return fn(10, 5)
  }
  
  const sum : FnSum = (x, y) => x + y
  console.log( fn2(sum) )
  
  type User = {
    username: string, 
    age: number,
    values?: number[]
  }
  
  const u1 : User = {
    username: 'lverdi',
    age: 10
  }
  
  function printUserData(u : User) {
    console.log(`${u.username} ${u.age * 10} ${u.values ?? ''} ` )
  }
  
  printUserData(u1)
  
  type UserData = {
    data: User,
    country: string,
    fn:  FnSum
  }
  
  const obj : UserData = {
    data: u1,
    country: 'Italy',
    fn: (a : number, b : number) : number => a + b
  }
  
  
  // function Box(props: ReactProps, children, ReactChildren) : ReactJsx {
  
  // }