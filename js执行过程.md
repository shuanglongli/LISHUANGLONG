1.全局
预处理阶段=解析：只关注以var声明的变量和以function声明的方法 --添加到--词法环境LexicalEnvironment (简称le)
le{
对变量的预处理
 **a:undefined**



 对function的预处理
**f:'function f() {**
console.log("ffffff");
}'----------**函数字符串的引用**
}


eg：

　　　　console.log(a);--undefined


　　　　console.log(f);----function f() {console.log("ffffff");


　　　　var a = 6;----预处理阶段undefined


　　　　console.log(a);


　　　　b = 8;


　　　　function f() {


　　　　console.log("ffffff");-----预处理阶段function f() {console.log("ffffff");


　　　　}
　　　　}



 执行
 从上到下依次执行
 var变量在词法环境中的值

函数声明的提升：函数声明永远是一等公民 (var在前，输出function;function在前，输出function)

 2.函数

- \* 预处理阶段--没有调用的时候没有le，每调用一次产生一个新的le
- \* 函数参数 --优先函数参数(只要传参就有值，实参的数目小于形参的数目是就自动把剩下的值设置为undefined)
- \* 内部声明式的函数是特等公民，权限超越所有

 内部先找function 再找参数 再找var 声明的变量

 外部js解析器先找离当前最近的词法环境，若是当前没有那么就找往上找父级的le,不找子级的词法环境


 内部的le中有function 里边a,b如果不声明 就是全局声明变量   如果声明a，b就是此函数le的声明变量

执行：同上

 

eg：

　　　　var a=2;---预处理阶段undefined
　　　　function f () {
　　　　g();------调用新的词法环境

　　　　var a = 10;
　　　　function g () {
　　　　var a = 88;
　　　　var s = "呵呵"
　　   function h () {
 　　　 console.log(a);----88

　　　　}
　　　　h()-----调用新的词法环境


　　　　}
　　　　}