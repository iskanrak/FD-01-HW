var ChangeFontNavirator = document.getElementsByClassName("ChangeFontNavirator");
var TabCheck=document.getElementsByClassName("Active_Tab");
var NavButton=document.getElementsByClassName("NavigatorButton");
var Counter=document.getElementById("Counter");
var countmaps=document.getElementsByClassName("CountMaps");
var CountPharos=document.getElementsByClassName("CountPharos");
var pharos = [];
var maps = [];
var NavigatorStyle = document.getElementsByClassName("ChangeFontNavirator")
var font = document.getElementById('font');

pharos[0] ="0px";
pharos[1] ="-18px";
pharos[2] ="-36px";
pharos[3] ="-53px";
pharos[4] ="-72px";
pharos[5] ="-92px";
pharos[6] ="-112px";
pharos[7] ="-132px";
pharos[8] ="-152px";
pharos[9] ="-172px";
pharos[10] ="-192px";
maps[0]="https://yandex.ru/map-widget/v1/?um=constructor%3A9ec31b71091a49fd7bebba847b4922286c4d881440f60ffb76c53b89c52603ff&amp;source=constructor";
maps[1]="https://yandex.ru/map-widget/v1/?um=constructor%3A6b3d8eb1d7134c77ef768c7bd36eb01457307c20e5f7d4931dc027f1809455c3&amp;source=constructor";
maps[2]="https://yandex.ru/map-widget/v1/?um=constructor%3Adea1420c0b9e687a1189c7bc2704ca88afc0aae37c8b179c88cbccee003f5a1a&amp;source=constructor";
maps[3]="https://yandex.ru/map-widget/v1/?um=constructor%3A321432691404f44cd2d21a1da41df49286eaa12c733ea97044f656f54d8aa38e&amp;source=constructor";
maps[4]="https://yandex.ru/map-widget/v1/?um=constructor%3Ad4c2c0c10d062219acfa3261794b087cdb6094a7a86036b5444e0a0a3fb41ac0&amp;source=constructor";
maps[5]="https://yandex.ru/map-widget/v1/?um=constructor%3Af48a47f72bb8e6c3ba72ffdca063866b1f91462af09bfe1597f4cfd40d365afd&amp;source=constructor";
maps[6]="https://yandex.ru/map-widget/v1/?um=constructor%3Ac81bfd727a258f0c90f2d6478371e0babf07026546f5ca704eac833b3ce98712&amp;source=constructor";
maps[7]="https://yandex.ru/map-widget/v1/?um=constructor%3A5333438d4150df6d75b8211edef45ed55da9ea89cf9e17e2613066682c1c268f&amp;source=constructor";
maps[8]="https://yandex.ru/map-widget/v1/?um=constructor%3Aed8b1a973e1c0a3fcd8fa9d8897f61d822f2b9acb65ca1eabb07bff409387474&amp;source=constructor";
maps[9]="https://yandex.ru/map-widget/v1/?um=constructor%3A4fc2f79749f6f561f149619604e5eb9230d3b8b0643391c744b94aa147a5cd89&amp;source=constructor";
maps[10]="https://yandex.ru/map-widget/v1/?um=constructor%3Af13c106cefa63f49f53a284a9e347b7c12dd056cfb4aca27215c537bdb8c8594&amp;source=constructor";

function Clear(){
    for(i=0; i<4;i++){
        TabCheck[i].style.display = "none";
        NavButton[i].style.borderBottom = "none";
        NavButton[i].style.backgroundColor="white";
        }
}
window.onload = Clear();
TabCheck[0].style.display = "flex";
NavButton[0].onclick=function(){
    Clear();
    TabCheck[0].style.display = "flex";
    NavButton[0].style.borderBottom = "3px solid #4daf7b";
    NavButton[0].style.backgroundColor="#f8f3f0";
    CountPharos[0].style.backgroundPosition=pharos[0];
}
NavButton[1].onclick=function(){
    Clear();
    eventGame();
    TabCheck[1].style.display = "block";
    NavButton[1].style.borderBottom = "3px solid #4daf7b";
    NavButton[1].style.backgroundColor="#f8f3f0";
}
NavButton[2].onclick=function(){
    Clear();
    TabCheck[2].style.display = "flex";
    NavButton[2].style.borderBottom = "3px solid #4daf7b";
    NavButton[2].style.backgroundColor="#f8f3f0";
}
NavButton[3].onclick=function(){
    Clear();
    TabCheck[3].style.display = "flex";
    NavButton[3].style.borderBottom = "3px solid #4daf7b";
    NavButton[3].style.backgroundColor="#f8f3f0";
}

function chenge(){
    var RandomCount = Math.random()*10;
    var FloorCount= Math.floor(RandomCount);
    CountPharos[0].style.backgroundPosition=pharos[FloorCount];
    countmaps[0].src=maps[FloorCount];
}
function show_selected() {
    var valuefont = font[font.selectedIndex].value;
    for (var s=0; s<27;s++){
        ChangeFontNavirator[s].style.fontFamily=valuefont;
    }
}
document.getElementById('AplyFont').addEventListener('click', show_selected);
setInterval(chenge,40000);
window.onload=chenge();

