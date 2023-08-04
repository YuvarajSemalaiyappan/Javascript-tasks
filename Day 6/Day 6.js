

class person {
    constructor(firstName, lastName, dob, mail, mobile){
this.firstName = firstName;
this.lastName = lastName;
this.dob = dob;
this.mail = mail;
this.mobile = mobile;
    }
}


var a = new person("yuvaraj", "semalaiyappan", "16.8.1994", "yuaaraj@gmail.com", "9578403010")
console.log(a);


class uberprice {
    constructor(kms, ratePerKm ){
        this.kms = kms;
        this.ratePerKm = ratePerKm
    }


    calulateprice() {
        let calc = (this.kms * this.ratePerKm)
        console.log("Your uber bill is"+" " +calc)
    }
   
}
let cal = new uberprice(18, 20)
console.log(cal.calulateprice())
