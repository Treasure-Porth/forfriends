const Name = document.getElementById("name")
const Pass = document.getElementById("password")
const sub = document.getElementById("submit")
const incorrect = document.getElementById("incorrect")

sub.addEventListener("click", function(){
    checker()
})

function checker() {
    if (Name.value == "ayesha" && Pass.value == "chompa") {
        window.location.href = "./samreen.html"
    }
    else if (Name.value == "fatema" && Pass.value == "naruto") {
        window.location.href = "./fatema.html"
    }
    else if  (Name.value == "aunton" && Pass.value == "rajshahi") {
        window.location.href = "./aunton.html"
    }
    else if (Name.value == "alif" && Pass.value == "murikha") {
        window.location.href = "./alif.html"
    }
    else if (Name.value == "samanta" && Pass.value == "egg") {
        window.location.href = "./samanta.html"
    }
    else{
        let text = "invalid name or password. i didn't create any account on that name or password. try again"
        incorrect.innerHTML = text;
    }
}
