
const car = {
    name:'dd',
    price: 90,
}

const arr = [
    {name:'dd'},{name:'bb'}
]

for (let v in car) {
    console.log(v)
}

arr.forEach(function (a,b,c){
    console.log(a,b,c)
})

function callback(func){
    func()
}

function log(){
    console.log("dddddddddd")
}

callback(log)