for (let i = 0; i <4; i++) {  

  let a=''    

  for (let j=4; j>i+1; j--) {//打印左上角的空白部分

​    a=a+" " 

  }

  for (let j = 0; j<2*i+1; j++) {//打印*

​    a=a+"*" 

  }

  console.log(a)

  a=a+'\n'

}

/*下半部分 */

for( let i = 1; i <= 3; i++){

  let a='' 

  for( let j = 1;j <= i; j++){//空格 1 2 3 so 

​    a=a+" " 

  }

  for( let j = 1; j <= 2*(3 - i + 1 )-1; j++){//*5 3 1 倒着来的基数

​    a=a+"*" 

  }

  console.log(a)

  a=a+'\n'

}