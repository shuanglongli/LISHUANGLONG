// 第一题

function mean1() {

  let sum = 0

  let s =0;

  for(let i=0; i <arguments.length; i++) {

​      sum+=(arguments[i]);

  }

  s =sum/arguments.length

  return s;

}

let a = mean1(1,2,3,4,5)

console.log(a)



// 第二题

function mean2(num){

  const sum =num.reduce((sum,curVal)=>sum+curVal)/num.length;

  return sum; 

}

let a = mean2([1,2,3,4,5])

console.log(a)



// 第三题

const arr1=[1,2,3,4,5,6]

const arr2=arr1.map((sum)=>{

  if(sum%2==0){

​    return sum

  }

})

const asd =[];

arr2.forEach(

  item=>{

​    if(item){

​      asd.push(item)

​    }

  }

)

function mean3(num){

  const sum =num.reduce((sum,curVal)=>sum+curVal)/num.length;

  return sum; 

}

let a = mean3(asd)

console.log(a)