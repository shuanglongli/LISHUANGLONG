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

const asd = []; //新数组存储偶数

const mean2 = () => {

    let l = asd.length;

    let Avg = asd.reduce((asd, sum) => asd + sum) / l;

    console.log(Avg)

} //求平均值

const mean3 = (arr1, callback) => {

    const arr2 = arr1.map((sum) => {

        if (sum % 2 == 0) {

            return sum

        }

    }) //取偶数

    // const asd = [];

    arr2.forEach(

        item => {

            if (item) {

                asd.push(item)

            }

        }

    ) //偶数组成新的数组

    if (typeof (callback) === "function") {

        callback()

    } //回调mean2()

}

mean3([1, 2, 3, 4, 5, 6, 7, 8], mean2)
