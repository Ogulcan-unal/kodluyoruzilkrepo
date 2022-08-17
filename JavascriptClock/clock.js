let userName = prompt ("İsminizi Giriniz")
let myName = document.querySelector("#myName")
let days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]

myName.innerHTML = `${myName.innerHTML} ${userName}`

function clockFunction(){
    let dateTime = new Date();
    let day = days[dateTime.getDay()];
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML = `${hr}: ${min}: ${sec}: ${day}`
}

    setInterval(clockFunction, 1000);