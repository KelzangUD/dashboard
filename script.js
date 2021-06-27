// weather data
let city = document.getElementById("card");
let week = document.getElementById("oneWeekForcast");
let history = document.getElementById("historical");
var ctx = document.getElementById("hourly").getContext("2d");
var ctx1 = document.getElementById("hourly1").getContext("2d");
document.querySelector("#weather").scrollIntoView({
  behavior: "smooth",
});
// Card Section
var cityName = "thimphu";
var apiKey = "01830b1f275e89f0d8ddb2a7376ca39f";
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    const card = `<div class="card">
    <h5 class="card-header" id="cityName">${data.name}, ${data.sys.country}</h5>
    <div class="card-body">
      <p>Temperature:<span> ${Math.round(
        data.main.temp - 273.15
      )}&#8451</span></p>
      <p>Humidity:<span> ${data.main.humidity}%</span></p>
      <p>Weather: <span>${data.weather[0].description}</span></p>
    </div>
  </div>`;
    city.innerHTML = "";
    city.insertAdjacentHTML("afterbegin", card);
  })
  .catch((err) => {
    console.log(err);
  });

// One Week forcast
var lat = 27.4661;
var lon = 89.6419;
fetch(
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${apiKey}`
)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    function createTable(data) {
      for (let i = 0; i < 7; i++) {
        let date = new Date(data.daily[i].dt * 1000).toDateString();
        let row = `
        <tr>
                <td>${date}</td>
                <td>${Math.round(data.daily[i].temp.max - 273.15)}/${Math.round(
          data.daily[i].temp.min - 273.15
        )} &#8451;</td>
                <td>${data.daily[i].weather[0].description}</td>
        </tr>`;
        week.innerHTML += row;
        // week.insertAdjacentHTML("afterbegin", row);
      }
    }
    createTable(data);
  })
  .catch((err) => {
    console.log(err);
  });

// hourly
fetch(
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily&appid=${apiKey}`
)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    let date = [];
    for (let j = 0; j < 24; j++) {
      let dateNum = new Date(data.hourly[j].dt * 1000).getHours();
      date.push(dateNum);
    }
    const temp = [];
    for (let i = 0; i < 24; i++) {
      // console.log(date);
      temp.push(Math.round(data.hourly[i].temp - 273.15));
    }
    // console.log(temp);
    let [
      current,
      hr1,
      hr2,
      hr3,
      hr4,
      hr5,
      hr6,
      hr7,
      hr8,
      hr9,
      hr10,
      hr11,
      hr12,
      hr13,
      hr14,
      hr15,
      hr16,
      hr17,
      hr18,
      hr19,
      hr20,
      hr21,
      hr22,
      hr23,
    ] = date;
    var xlabel = [
      `Now:${current}:00`,
      `${hr1}:00`,
      `${hr2}:00`,
      `${hr3}:00`,
      `${hr4}:00`,
      `${hr5}:00`,
      `${hr6}:00`,
      `${hr7}:00`,
      `${hr8}:00`,
      `${hr9}:00`,
      `${hr10}:00`,
      `${hr11}:00`,
      `${hr12}:00`,
      `${hr13}:00`,
      `${hr14}:00`,
      `${hr15}:00`,
      `${hr16}:00`,
      `${hr17}:00`,
      `${hr18}:00`,
      `${hr19}:00`,
      `${hr20}:00`,
      `${hr21}:00`,
      `${hr22}:00`,
      `${hr23}:00`,
    ];
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "Temperature",
            data: temp,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            ticks: {
              callback: function (value, index, values) {
                return value + "\xBA";
              },
            },
          },
        },
      },
    });
    const humidity = [];
    let date1 = [];
    for (let j = 0; j < 24; j++) {
      let dateNum = new Date(data.hourly[j].dt * 1000).getHours();
      date1.push(dateNum);
    }
    for (let i = 0; i < 24; i++) {
      humidity.push(data.hourly[i].humidity);
    }
    // console.log(humidity);
    let [
      currenta,
      hr1a,
      hr2a,
      hr3a,
      hr4a,
      hr5a,
      hr6a,
      hr7a,
      hr8a,
      hr9a,
      hr10a,
      hr11a,
      hr12a,
      hr13a,
      hr14a,
      hr15a,
      hr16a,
      hr17a,
      hr18a,
      hr19a,
      hr20a,
      hr21a,
      hr22a,
      hr23a,
    ] = date1;
    var xlabel = [
      `Now:${currenta}:00`,
      `${hr1a}:00`,
      `${hr2a}:00`,
      `${hr3a}:00`,
      `${hr4a}:00`,
      `${hr5a}:00`,
      `${hr6a}:00`,
      `${hr7a}:00`,
      `${hr8a}:00`,
      `${hr9a}:00`,
      `${hr10a}:00`,
      `${hr11a}:00`,
      `${hr12a}:00`,
      `${hr13a}:00`,
      `${hr14a}:00`,
      `${hr15a}:00`,
      `${hr16a}:00`,
      `${hr17a}:00`,
      `${hr18a}:00`,
      `${hr19a}:00`,
      `${hr20a}:00`,
      `${hr21a}:00`,
      `${hr22a}:00`,
      `${hr23a}:00`,
    ];
    var myChart = new Chart(ctx1, {
      type: "bar",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "Humidity",
            data: humidity,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            ticks: {
              callback: function (value, index, values) {
                return value + "\xBA";
              },
            },
          },
        },
      },
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Connection with firebase
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAbt78_YF7qzceOjse-vt3BE1m_5oP9824",
  authDomain: "vegetables-ff8bb.firebaseapp.com",
  projectId: "vegetables-ff8bb",
  storageBucket: "vegetables-ff8bb.appspot.com",
  messagingSenderId: "952827483909",
  appId: "1:952827483909:web:605542659497d4dfee896c",
  measurementId: "G-LQSH5ESFE2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let database = firebase.database();

let vegTable = document.getElementById("vegTable");
let ref = database.ref();
ref.on("value", (snap) => {
  let data = snap.val();
  console.log(data);
  console.log(data.potato.qty);
  let row = `
      <tr>
              <td>Potato</td>
              <td>${data.potato.qty}</td>
              <td>${data.potato.forecast}</td>
      </tr>
      <tr>
              <td>Tomato</td>
              <td>${data.tomato.qty}</td>
              <td>${data.tomato.forecast}</td>
      </tr>`;
  vegTable.innerHTML += row;
});

let disTable = document.getElementById("disTable");
ref.on("value", (snap) => {
  let data = snap.val();
  console.log(data);
  console.log(data.potato.qty);
  let row = `
      <tr>
              <td>Potato</td>
              <td>${data.potato.disease}</td>
              <td>${data.potato.temp}</td>
              <td></td>
              <td>${data.potato.humidity}</td>
              <td>${data.potato.patogen}</td>
      </tr>
      <tr>
              <td>Tomato</td>
              <td>${data.tomato.disease}</td>
              <td>${data.tomato.temp}</td>
              <td>${data.tomato.rain}</td>
              <td>${data.tomato.humidity}</td>
              <td>${data.tomato.patogen}</td>
      </tr>`;
  disTable.innerHTML += row;
});
// function createTable(data) {
//   console.log(data);
//   for (let i = 0; i < data.length; i++) {
//     let row = `
//     <tr>
//             <td>${data.vegetable}</td>
//             <td>${data.qty}</td>
//             <td>${data.forecast}</td>
//     </tr>`;
//     vegTable.innerHTML += row;
//     // week.insertAdjacentHTML("afterbegin", row);
//   }
// }
// createTable(data);

// Historical Data
// let currentDate = new Date();
// let unixTime = Math.round(currentDate.getTime() / 1000) - 2200;
// console.log(unixTime);
// let day = Date.parse(unixTime * 1000);
// console.log(day);
// fetch(
//   `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=${apiKey}`
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     // function createTable(data) {
//     //   for (let i = 0; i < 12; i++) {
//     //     let time = data.hourly[i].dt;
//     //     console.log(time);
//     //     let day = new Date(time).toDateString();
//     //     console.log(day);
//     //     let row = `
//     //     <table class="table">
//     //       <tbody>
//     //         <tr>
//     //             <td>${day}</td>
//     //         </tr>
//     //       </tbody>
//     //     </table>`;
//     //     history.innerHTML += "";
//     //     history.insertAdjacentHTML("afterbegin", row);
//     //   }
//     // }
//     // createTable(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// const xhr = new XMLHttpRequest();
// xopen("GET", "http://localhost:8080/");
// xhr.onload = () => {
//   conshr.t data = JSON.parse(xhr.response);
//   console.log(data);
//   let tableBody = document.getElementById("tableBody");
