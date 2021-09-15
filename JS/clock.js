document.getElementById("myName").innerText= prompt("lütfen adınızı giriniz","");
const gunler = ["PAZAR","PAZARTESİ","SALI","ÇARŞAMBA","PERŞEMBE","CUMA","CUMARTESİ"];
const aylar = ["OCAK","ŞUBAT","MART","NİSAN","MAYIS","HAZİRAN","TEMMUZ","AĞUSTOS","EYLÜL","EKİM","KASIM","ARALIK"];
function showTime(){
    var time = new Date();
    var y = time.getFullYear();
    var mm = aylar[time.getMonth()];
    var d = time.getDate();
    var h =time.getHours();
    var m =time.getMinutes();
    var s =time.getSeconds();
    var gun = gunler[time.getDay()];
    var currenttime = d+" "+mm+" "+y+ "  "+ h +":"+m+":" +s +" "+gun;
    document.getElementById("myClock").innerText=currenttime;
}
setInterval(showTime,1000);
