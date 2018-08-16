

var count5 = document.getElementsByClassName("Column-Favorite-Dispatch_Background ");
var background = [];
background[0] ="url('image/HobbiPetrusenko.jpg')";
background[1]= "url('image/HobbiTurankova.jpg')";
background[2] = "url('image/HobbiAntonovich.jpg')";
background[3]= "url('image/HobbiPervukhin.jpg')";
background[4]="url('image/HobbiBibik.jpg')";
background[5]="url('image/HobbiArtemy.jpg')";
background[6]="url('image/HobbiSenakosova.jpg')";
background[7]="url('image/HobbiEvchenko.jpg')";
background[8]="url('image/HobbiVoitekhovich.jpg')";
background[9]="url('image/HobbiKarelin.jpg')";
background[10]="url('image/HobbiZasimowicz.jpg')";
background[11]="url('image/HobbiPankrat.jpg')";
background[12]="url('image/HobbiAntonenko.jpg')";
background[13]="url('image/HobbiShostak.jpg')";
background[14]="url('image/HobbiLazickiy.jpg')";
background[15]="url('image/HobbiErmolaev.jpg')";



var cast = document.getElementsByClassName("Column-Favorite-Dispatch_Photo");
var avatar = [];
avatar[0] = "url('image/Petrusenko.jpg')";
avatar[1] = "url('image/Turankova.jpg')";
avatar[2] = "url('image/Antonovich.jpg')";
avatar[3] = "url('image/Pervukhin.jpg')";
avatar[4] = "url('image/Bibik.jpg')";
avatar[5] = "url('image/Artemy.jpg')";
avatar[6] = "url('image/Senakosova.jpg')";
avatar[7] = "url('image/Evchenko.jpg')";
avatar[8] = "url('image/Voitekhovich.jpg')";
avatar[9] = "url('image/Karelin.jpg')";
avatar[10] = "url('image/Zasimowicz.jpg')";
avatar[11] = "url('image/Pankrat.jpg')";
avatar[12] = "url('image/Antonenko.jpg')";
avatar[13] = "url('image/Shostak.jpg')";
avatar[14] = "url('image/Lazickiy.jpg')";
avatar[15] = "url('image/Ermolaev.jpg')";



var account = document.getElementsByClassName("Column-Favorite-Dispatch_Nickname");
var nickname = [];
nickname[0] = "Petrusenko Sergei";
nickname[1] = "Turankova Marina";
nickname[2] = "Antonovich Vasily ";
nickname[3] = "Pervukhin Sergey";
nickname[4] = "Pervukhin Natasha";
nickname[5] = "Artemy Nastya ";
nickname[6] = "Senakos Polina";
nickname[7] = "Evchenko Alina";
nickname[8] = "Voitekhov Zhenya ";
nickname[9] = "Karelin Anton";
nickname[10] = "Zasimowicz Olya";
nickname[11] = "Pankrat Nikita";
nickname[12] = "Antonenko Denis";
nickname[13] = "Shostak Veronik";
nickname[14] = "Lazickiy Artem ";
nickname[15] = "Ermolaev Sasha";




var Main = document.getElementsByClassName("Column-Favorite-Dispatch_Comment");
var comment = [];
comment[0] = "Your talent amazes! This is awesome.";
comment[1] = "Thanks to those who are with me now";
comment[2] = "Record the silence and cut into full volume!";
comment[3] = "It is better to meet once than";
comment[4] = "Love is the best feeling in the world.";
comment[5] = "I like a lot of walking.";
comment[6] = "I love English I like London.";
comment[7] = "I love the world fashion. I'm a future designer";
comment[8] = "I love programming at home.";
comment[9] = "Music is my life is my everything.";
comment[10] = "I was in different countries of the world.";
comment[11] = "I dream of becoming a programmer.";
comment[12] = "I dance wherever I can, dancing my life.";
comment[13] = "A lawyer is a person who can argue any person.";
comment[14] = "The army is needed to become a man.";
comment[15] = "Railway dream job, meet sunrises and sunsets.";





var p = document.getElementById("Column-Favorite-Dispatch_lake");
var value = p.innerText;
function like() {
    if(p.innerText ==value) p.innerText = + value +1;
    else  p.innerText = value;
}

function chenge1() {
    var RandomCount1 = Math.random() * 16;
    var FloorCount1 = Math.floor(RandomCount1);
    if(  FloorCount1<16){
        count5[0].style.backgroundImage=background[FloorCount1];
        cast[0].style.backgroundImage=avatar[FloorCount1];
        account[0].innerHTML=nickname[FloorCount1];
        Main[0].innerText=comment[FloorCount1];
    }
}
setInterval(chenge1,40000);
window.onload=chenge1();
