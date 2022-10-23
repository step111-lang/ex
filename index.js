
const di=document.querySelector(".di");
const message=document.querySelector(".message");
const messo=document.querySelector(".messo");
const navbar=document.querySelector(".navbar");
const del=document.querySelector(".del");
const tt=document.querySelector(".tt");
const add=document.querySelector(".add");
const inp=document.getElementById("inp").value.toLowerCase();
const long=document.querySelector(".long");
const longc=document.querySelector(".longc");
const short=document.querySelector(".short");
const ext=document.querySelector(".ext");
const sendbtn=document.querySelector(".sendbtn");

var log=[
 {
 position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"kennedy pitter",
 time:"3:50"
},
{
position:"2",
 relay:"long",
 name:"jammy nat",
 time:"3:50"
},
{
 position:"3",
 name:"peter",
 time:"3:50"
}
,
{
 position:"3",
 name:"Timothy brian",
 time:"3:50"
},
{
 position:"4",
 name:"alfred janes",
 time:"3:50"
},
{
position:"6",
 relay:"long",
 name:"lucus joc",
 time:"3:50"
},
{
 position:"1",
 name:"james",
 time:"3:50"
}
];
var shot=[
 {
 position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"james",
 time:"3:50"
},
{
position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"james",
 time:"3:50"
},
{
position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"james",
 time:"3:50"
}
];
var relay=[
 {
 position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"Stephen",
 time:"3:50"
},
{
position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"2",
 name:"james kuria",
 time:"3:50"
},
{
 position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"james",
 time:"3:50"
},
{
position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
}];
var sprint=[
 {
 position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"Stephen",
 time:"3:50"
},
{
position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"2",
 name:"james kuria",
 time:"3:50"
},
{
 position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"james",
 time:"3:50"
},
{
position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
}];
function guko(arr){
let update="";
for(let i=0;i<arr.length;i++){
  update+=`   
    <div class="cont">
       <div class="position">${arr[i].position}</div> <div class="Name">${arr[i].name}</div><div class="time">${arr[i].time}</div>
    </div>
         `;
 }
return update;
}
document.querySelector(".longc").innerHTML=`${guko(log)}`;
document.querySelector(".shortc").innerHTML=`${guko(shot)}`;
document.querySelector(".relayc").innerHTML=`${guko(relay)}`;
document.querySelector(".sprintc").innerHTML=`${guko(sprint)}`;
function jump(){
var inp=document.getElementById("inp").value.toLowerCase();
var tok=document.getElementById("paret");
var cont=tok.getElementsByClassName("Name");
for(let i=0;i<cont.length;i++){
if(cont[i].innerHTML.toLowerCase().indexOf(inp) > -1){
   cont[i].parentNode.style.display="";
 }else{
cont[i].parentNode.style.display="none";
}
 }
}

del.addEventListener("click",()=>{
 navbar.style.width="0";
});
add.addEventListener("click",()=>{
 navbar.style.width="220px";
 navbar.classList.toggle("navba");
});
let date=new Date();
let d=date.getDate();
let m=date.getMonth();
let y=date.getFullYear();
let ttdate=`${d}.${m}.${y}`;
let arri=[
{
location:"EMBU",
time:"22.9.2022"
},
{
location:"JKUAT",
time:"1.9.2022"
}
];
const evtcalender=document.querySelector(".evtcalender");
const evtsub=evtcalender.getElementsByTagName("h5");
for(let j=0;j<arri.length;j++){
  for(let i=0;i<evtsub.length;i++){
      if(ttdate >= arri[j].time && evtsub[i].innerHTML.indexOf(arri[j].location) > -1){
         let bt=document.createElement("strike");
           bt.appendChild(evtsub[i]);
           evtcalender.appendChild(bt);
       }
     }
  }
var messar=[
{
 time:"18/10/2022",
 mess:"Welcome to the athletics WebApp"
},
{
 time:"20/10/2022",
 mess:"Happy madaraka to everyone"
},
{
 time:"22/10/2022",
 mess:"Great job done guys,let's keep on pushing."
}
];
function messaf(mesar){
let mesart="";
for(let i=0;i<mesar.length;i++){
mesart+=`
 <h5><h4>${mesar[i].time}</h4>${mesar[i].mess}</h5>
`;
}
return mesart;
}
document.querySelector(".messages").innerHTML=`${messaf(messar)}`;

messo.addEventListener("click",()=>{
 message.classList.toggle("xlm");
 

});
const picpa=document.querySelector(".picpa");
var imd=document.getElementsByTagName("img");
var dis=document.getElementById("dis");
for(let i=0;i< imd.length;i++){
 imd[i].addEventListener("click",(e)=>{
 dis.src=e.target.src;
 if(e.target.src!=""){
   dis.innerHTML="NO PIC FOUND";
  }
});
}
function deli(){
  
  picpa.classList.toggle("blo");
 }
function gall(){
  picpa.classList.toggle("blo");
 }

