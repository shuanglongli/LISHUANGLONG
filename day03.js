// 创建对象
// 1. 通过Object构造函数
let myObject = new Object();
myObject.name = 'xiaojichao';
myObject.age = 20;

console.log(myObject);

// 2. 通过对象字面量创建对象
const oStudent = {};
oStudent.name = 'xiao';
oStudent.age = 21;

const oStudent1 = {
    name: 'xiao',
    age: 21
};

console.log(oStudent1.name);

console.log(typeof oStudent1);  // object

// array
const a1 = new Array();

const a2 = [];
console.log(typeof a2);  // object
console.log(a2[0]);

const a2 = [];
a2[0] = 'a';
a2[1] = 2;
a2[5] = true;

console.log(typeof a2);
console.log(a2 instanceof Array);

console.log(a2[2]);

const a3 = [1,2,3,'abc',true,undefined,null,a2,oStudent];


const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];

delete avengers[2];
console.log(avengers);

const number1 = [1,2,3,4]
let a = number1[0];
let b = number1[1];
let c = number1[2];
let d = number1[3];
console.log(`a=${a}, b=${b}, c=${c}`);

const [a,b,c,d] = [1,2,3,4];
console.log(`a=${a}, b=${b}, c=${c}`);

const [a,b] = ['xiaojichao',true,1,2,2,1];
console.log(`a=${a}, b=${b}`)


const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
console.log(avengers.length);
avengers.length = 1;
console.log(avengers);
avengers.length = 0;
console.log(avengers);

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
avengers.pop();
console.log(avengers);
avengers.push('xiaojichao');
console.log(avengers);

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
console.log(avengers.shift());
console.log(avengers);

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
avengers.unshift("xiaojichao");
console.log(avengers);

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const heroes = ['蝙蝠侠','神奇女侠','闪电侠', '水行侠'];
const ah = avengers.concat(heroes);
console.log(avengers,heroes,ah);


const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const heroes = ['蝙蝠侠','神奇女侠','闪电侠', '水行侠'];
const ah = [...avengers, ...heroes];
console.log(ah);

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const av1 = avengers.join();
const av2 = avengers.join(' & ');
console.log(av1);
console.log(av2);

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const av3 = avengers.slice(1, 3)

console.log(avengers)
console.log(av3)

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const av4 = avengers.splice(1,2,'xiao','ji','adsfa');
console.log(av4);

console.log(avengers)

const number1 = [1,2,23,10,3,8,9];
const a = number1.sort();
console.log(number1);
console.log(a);

const str = ['a','b','c','1']
str.reverse();
console.log(str);

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const a = avengers.indexOf('美国队长');
console.log(a);

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const b = avengers.includes("美国队长")
console.log(b)


// 多维数组
const ma = [[1,2],[3,4]];
console.log(ma);
console.log(ma[0][0])
console.log(ma[0][1])

const summer = ['Jun', 'Jul', 'Aug']; 
const winter = ['Dec', 'Jan', 'Feb']; 
const nested = [ summer, winter ]; 
console.log(nested);

const flat = [...summer,...winter];
console.log(flat);

// Set
const oSet = new Set();
oSet.add(1)
oSet.add(2)
oSet.add(3).add(4).add(5)
oSet.add(5)
console.log(oSet);

const list1 = new  Set([1,2,3,4,5,6])
console.log(list1);

const list2 = new Set('Hello');
console.log(list2);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4.size)

list4.size = 2
console.log(list4)

const list5 = new Set().add('the').add('quick').add('brown').add('fox');
a = list5.has('brown')
console.log(a)

const list5 = new Set().add('the').add('quick').add('brown').add('fox');
const b = list5.delete('fox');
console.log(b)
console.log(list5)

list5.clear();

console.log(list5);

const list6 = new Set().add('the').add('quick').add('brown').add('fox');
const a = Array.from(list6);
console.log(a);

const list6 = new Set().add('the').add('quick').add('brown').add('fox');
const a = [...list6];
console.log(a);

const oArray1 = [1,2,12,1,2,3,4,4,4,5]
const oSet1 = new Set(oArray1);
console.log(oSet1);
const oArray2 = [...oSet1];
console.log(oArray2);


// weakset

let student = {
    name: 'xiao',
    age: 10
};

const strong = new Set();
strong.add(student);
student = null;
console.log(strong.has(student));
console.log([...strong][0]);

let student = {
    name: 'xiao',
    age: 10
};
const weak =  new WeakSet();
weak.add(student);
//student = null
console.log(weak.has(student));

// Map
const oMap = new Map()
oMap.set(1, "I")
oMap.set(2,'II').set('b',"III").set(4,"IV").set('a',"V")
console.log(oMap)
console.log(oMap.size)
const a = oMap.get(5)
console.log(a)
oMap.set('name','xiaojichao')
const b = oMap.get('name')
console.log(oMap)
console.log(b)
console.log(oMap.has('name'))
const c = oMap.delete('name')
console.log(C)
oMap.clear()
console.log(oMap)


const oMap = new Map().set(1, "I").set(2,'II').set('b',"III").set(4,"IV").set('a',"V")
const oArray = [...oMap];
console.log(oArray);

const oMap = new Map().set(1, "I").set(2,'II').set('b',"III").set(4,"IV").set('a',"V")
const oArray = Array.from(oMap)
console.log(oArray);

const student = {
    name: 'xiao',
    age: 21
};

student.name = 'xiao'
student.age = 21
student = null;