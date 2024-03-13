//تعریف متغیرهاومقداردهی به آن ها
const color=["#c9c0bb","#6d7b8d","#66cdaa","#808000","#ffdf00","#ee9a4d","#7d0552"];
const items=document.querySelectorAll(".item");
const rows=5,cols=5;
const modalDiv=document.querySelector(".modal");
const modalButten=document.querySelector(".modalBtn");
const modalP=document.querySelector(".modal p");
let score=25;

//تابع رنگ دهی به مربع ها و شرط برد وباخت گزاشتن
function colorizeItems(){
    let maincolor=color[Math.floor(Math.random() * color.length)];
    items.forEach(value=>value.style.backgroundColor=maincolor);

    let target=Math.floor(Math.random() * (rows*cols));
    items[target].style.backgroundColor=lightenColor(maincolor,15);

    items.forEach((item,number)=>{
        //اگر مربع انتخاب شده مساوی خانه درست بود فراخوانی تابع برد
        if(number===target){
            item.removeEventListener("click",loseGame);
            item.addEventListener("click",nextLevel)
        }
        //اگر مربع انتخاب شده مساوی خانه درست نبود فراخوانی تابع باخت
        else{
            item.removeEventListener("click",nextLevel);
            item.addEventListener("click",loseGame)
        }
    });
}

//تابعی برای رنگ متفاوت دادن به یکی از مربع ها
function lightenColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

//تابع برد ورفتن به مرحله بعدی
function nextLevel(){
    score++;
    document.getElementById("score").innerText = "امتیاز شما:" + score;
    colorizeItems();
}

//تابع باخت وامتیازدهی نهایی
function loseGame(){
    modalDiv.style.display="flex";
    modalP.innerText = "امتیاز شما:" + score;
}

//کلیک برروی دکمه دوباره بازی و فراخوانی تابع مدنظر
modalButten.addEventListener("click",btnModale)

//تابعی برای بستن کادر باخت و فراخوانی تابع ریست
function btnModale(){
    modalDiv.style.display="none";
        location.href="../index.html";
    initialGame();
}

//تابع ریست کردن بازی ازاول
function initialGame(){
    score=25;
    document.getElementById("score").innerText="امتیازشما:25"
    colorizeItems();
}
initialGame();

