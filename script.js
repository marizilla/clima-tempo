const api = {
  key: "9a27a9cb5f1ddae3aeacf82591733391",
  base: "https://api.openweathermap.org/data/2.5/",
  lang: "pt_br",
  units: "metric"
}

//Captura de dados
let lat;
let long;

//Manipulação do DOM
const place = document.querySelector("#place");
const ico = document.querySelector("#ico");
const temp = document.querySelector("#temp");
const description = document.querySelector("#description");
const date = document.querySelector("#date");
const clock = document.querySelector("#clock"); 
const store = document.querySelector("#store");
const low_high = document.querySelector("#lowhigh");


//Mostrar informações na tela
const displayInfo = info => {
  place.innerHTML = `${info.name}, ${info.sys.country}`; 
  ico.setAttribute("src", "http://openweathermap.org/img/wn/" + info.weather[0].icon + "@2x.png");
  temp.innerHTML = Math.round(info.main.temp) + " &deg;C";
  description.innerHTML = capitalizeFirstLetter(info.weather[0].description);
  low_high.innerHTML = "min: " +Math.round(info.main.temp_min) + " &deg;C | " + "max: " + Math.round(info.main.temp_max) + " &deg;C";

  store.addEventListener("click", storeData);


//Funcionamento do localStorage
function storeData(){
let historico = [];
  info.min = min;
  info.hour= hour;
  info.week = week;  
  info.day = day;
  info.month = month;
  info.year = year;
  

    if(!localStorage.getItem("Dados Salvos")) {
      historico.push(info);
      localStorage.setItem("Dados Salvos", JSON.stringify(historico));
      } else {
      historico = JSON.parse(localStorage.getItem("Dados Salvos"));
      historico.push(info);
      localStorage.setItem("Dados Salvos", JSON.stringify(historico));
       }
      alert ("As informações foram salvas! Recarregue a página ou clique no 'x'")

      console.log ("Saved data" + localStorage.getItem("Dados Salvos"));
  }

//Imprimir as informações salvas na tela  
  if(localStorage.getItem("Dados Salvos")){
    let historico = [];
    historico = JSON.parse(localStorage.getItem("Dados Salvos"));         

    var imprimir = "";
    for (i=0; i< historico.length; i++){
      imprimir += 
      '<div class="historico"> <div class="dados"> <p class="data">' + historico[i].day + 
      " " + months[historico[i].month] + 
      " " + historico[i].year + ' | ' + historico[i].hour + ":" + historico[i].min + 
      '</p> <p class="temp">' + Math.round(historico[i].main.temp) + "&deg; C" + 
      ' <br> '
      + historico[i].weather[0].description + 
      '</p> </div> <div class="imagem"> <img src="http://openweathermap.org/img/wn/' 
      + historico[i].weather[0].icon + '@2x.png"> </div> </div>';              
      }

      document.getElementById("modal").innerHTML = imprimir;
      }else {
        alert("Você ainda não salvou nenhum dado!")
      }
      
  }

//Rodando API
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position){
      console.log(position)
      lat = position.coords.latitude;
      long = position.coords.longitude;
      
      const apiWork = `${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`;
               
      const getWeather = async () => {
          try{
              const promisse = await fetch(apiWork);
              const dadosObtidos = await promisse.json();
              

              console.log (dadosObtidos);
              dadosObtidos = displayInfo(dadosObtidos);

              }
          catch(error) {
              console.log (error.message);
          }
      }
      
      getWeather();
          
  }, function(error){console.log(error)
      });
} else {
  alert("Seu navegador parece não ser compatível com o serviço de geolocalização");
}


const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const weeks = ["Domingo","Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

const dateBuilder = new Date();
const week = dateBuilder.getDay();
const day = dateBuilder.getDate();
const month = dateBuilder.getMonth();
const year = dateBuilder.getFullYear();

const today = `${weeks[week]}, ${day} de ${months[month]} de ${year}`;

date.innerHTML = today;

//Horário
const hour = dateBuilder.getHours();
const min = dateBuilder.getMinutes();

const minConvert = min < 10 ? "0"+min : min;
const now = hour + ":" + minConvert;

clock.innerHTML = now;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//Abrir modal
function openModal(){
  const viewModal = document.querySelector(".modal");
  viewModal.style.display = 'flex'
  
}

//Fechar modal
function closeModal(){
  location.reload();
  const viewModal = document.querySelector(".modal");
  viewModal.style.display = 'none'  
}
    

