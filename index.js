const Name = document.getElementById("name")
const Pass = document.getElementById("password")
const sub = document.getElementById("submit")
const incorrect = document.getElementById("incorrect")
let i = false 

sub.addEventListener("click", function(){
    checker()
})

function checker() {
    if (Name.value == "ayesha" && Pass.value == "chompa") {
        window.location.href = "./samreen.html"
        i = true
    }
    if (Name.value == "fatema" && Pass.value == "naruto") {
        window.location.href = "./fatema.html"
        i = true
    }
    if  (Name.value == "aunton" && Pass.value == "rajshahi") {
        window.location.href = "./aunton.html"
        i = true
    }
    if (Name.value == "alif" && Pass.value == "murikha") {
        window.location.href = "./alif.html"
        i = true
    }
    if (Name.value == "samanta" && Pass.value == "egg") {
        window.location.href = "./samanta.html"
        i = true
    }
    dblcheck()

}
 function dblcheck() {
     if ( i == false ) {
         let msg = "invalid username or password.i didn't make any acc with that"
         incorrect.innerhtml = msg
     }
 }
