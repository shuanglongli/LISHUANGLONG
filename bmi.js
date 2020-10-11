let markBMI

let johnBMI

/*mark的身高体重*/

let markmass = 56

let markheight = 1.73

/*john的身高体重*/

let johnmass = 65

let johnheight = 185

/*mark的BMI*/

markBMI = markmass / (markheight * markheight)

/*john的BMI*/

johnBMI = johnmass / (johnheight * johnheight)

let asd = Boolean(markBMI-johnBMI>0)

if(asd===true){

  console.log ('mark的BMI比john高')

} 

else if (asd===false){

  console.log ('mark的BMI比john低')

} 

else {

  console.log ('mark的BMI和john一样')

}