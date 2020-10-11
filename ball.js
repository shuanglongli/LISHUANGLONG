/*john队三场的得分*/

let john1=89

let john2=120

let john3=103

/*mike队三场的得分*/

let mike1=116

let mike2=94

let mike3=123

/*john队平均分*/ 

let johnpj

johnpj = (john1+john2+john3)/3

/*mike队*/

let mikepj

mikepj = (mike1+mike2+mike3)/3

if(johnpj>mikepj){

  console.log ("john队胜利，平均分为%"+johnpj)

}

else if(mikepj>johnpj){

  console.log ("mike队胜利，平均分为"+mikepj)

}

else{

  console.log ("两队平局，平均分一样为"+mikepj)

}





/*mary队三场得分*/

let mary1=97

let mary2=134

let mary3=105

/*john队三场的得分*/

let john1=89

let john2=120

let john3=103

/*mike队三场的得分*/

let mike1=116

let mike2=94

let mike3=123

/*john队平均分*/ 

let johnpj

johnpj = (john1+john2+john3)/3

/*mike队平均分*/

let mikepj

mikepj = (mike1+mike2+mike3)/3

/*mary队平均分*/

let marypj=(mary1+mary2+mary3)/3

if(johnpj>mikepj&&johnpj>marypj){

  console.log ("john队胜利，平均分为%"+johnpj)

}

else if(mikepj>johnpj&&mikepj>mary3){

  console.log ("mike队胜利，平均分为"+mikepj)

}

else if(marypj>johnpj&&marypj>mikepj){

  console.log ("mary队胜利，平均分为"+marypj)

}

else{

  console.log ("三队平局，平均分一样为"+mikepj)

}