

//  Js code
const user = [{
    name : "Dom",
    age : 32,
    occupation: "web developer"
},
    {
        name : "tom",
        age : 42,
        occupation : "weaving"


}];


for(let key in user){
    console.log(user[key])
}


for(let key of user){
    console.log(user[key].name)
}


user.forEach(function(){
    console.log(user);
});


for(let i = 0; i<=user.length; i++){
var value = user[i]
    console.log(value.name)
}


//  Resume

const resume = [
    general : {
   
    "name" : "Yuvaraj S",
    "email" : "yuaaraj@gmail.com",
    "mobNumber" : 9578403010,
    "eduQualification" : "B.E",
    "address" : "13, Rattaisuttripalayam, avalpoondurai,Erode"
},
{
    "skills" : "javascript, Html, css",
    "level" : "beginner",
    "languages known" : "Tamil, English"




}
]

console.log(resume)
