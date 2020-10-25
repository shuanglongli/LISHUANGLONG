// 第一题

let tip
const tiparray =[]
const zongjine =[]
const tipCalculator = function (a){
    if (a<50){
        tip = a*0.2
    }
    else if (50<a<200)
        {tip = a*0.15}
    else
        {tip = a*0.1}
    return tip
}
tiparray[0] =tipCalculator(124)
tiparray[1] =tipCalculator(48)
tiparray[2] =tipCalculator(268)
console.log(tiparray)
zongjine[0] = 124+tipCalculator(124)
zongjine[1] = 48+tipCalculator(48)
zongjine[2] = 268+tipCalculator(268)
console.log(zongjine)




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