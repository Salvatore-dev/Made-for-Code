/*
    const handleToggle = (index) => {
        setList(prev => prev.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    completed: !item.completed
                }
            } else {
                return item;
            }
        }));
    }

*/
let globalObjId = 1
function makeObj(voice, completed = false) {
  return {
    id: globalObjId++,
    voice,
    completed
  }
}

let objs = [
  makeObj('fai la spesa'),
  makeObj('prendi anna da scuola'),
  makeObj('gioca alla play')
]
objs.push(makeObj('paga le spese', true))

console.log(objs)

function toggleCompleted(objs, index) {
     return objs.map((obj, i) => {
       if( (i + 1) == index ) {
          // return {
          //   id: obj.id,
          //   voice: obj.voice,
          //   completed: !obj.completed
          // }
          return {...obj, completed: !obj.completed}
       }

       return obj
    })
}

objs = toggleCompleted(objs, 3)
objs = toggleCompleted(objs, 4)
console.log(objs)

objs.forEach((obj) => {
  console.log(`ID: ${obj.id},
    Voice: ${obj.voice},
    Completed: ${obj.completed},
    -----------------------`
  )
})

const o1 = {x: 1, y: 2}
const o2 = { ...o1, y: 200, z: 3 }
console.log(o2)