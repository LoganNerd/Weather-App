// var button = document.getElementById("submit")
// var locationInput = document.getElementById("location")
// var location = document.getElementById("loc")
// var temperature = document.getElementById("temp")
// var wind = document.getElementById("windSpeed")
// var humidity = document.getElementById("humidity")
var url = "https://api.openweathermap.org/data/2.5/forecast?"
var iconUrl = "https://openweathermap.org/img/wn/13d@4x.png"
var apiKey = "e641eca1d4d40412dee9a14c4d25aac3"
var long = ""
var lat = ""


// button.addEventListener("click", startApp);


let weatherCard = {

  apiKey: "e641eca1d4d40412dee9a14c4d25aac3",

  
  collectWeatherData: function (city) {

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=` + city + ` &appid=${apiKey}`)
        .then((response) => {
            return response.json();
          })
        .then((data) => {
            this.printWeather(data);
          })
  },



  printWeather: function (data) {
    const { name } = data.city;
    const {icon, description} = data.list[0].weather[0];
    const {temp} = data.list[0].main;
    const { speed } = data.list[0].wind;
    const { humidity } = data.list[0].main;
    console.log(name , icon , description, temp, speed, humidity);
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
    document.querySelector(".loc").innerText = " " + name;
    document.querySelector(".temp").innerText = " " + temp;
    document.querySelector(".windSpd").innerText = " " + speed;
    document.querySelector(".hum").innerText = " " + humidity;
  },

  searchBar: function() {
    this.collectWeatherData(document.querySelector(".locForm").value);
  }
};


  document.querySelector(".submit").addEventListener("click", function() {
      weatherCard.searchBar();
  });
// function getApi() {
//   // fetch request gets a list of all the repos for the node.js organization
//   var requestUrl = 'https://api.github.com/orgs/nodejs/repos';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data)
//       //Loop over the data to generate a table, each table row will have a link to the repo url
//       for (var i = 0; i < data.length; i++) {
//         // Creating elements, tablerow, tabledata, and anchor
//         var createTableRow = document.createElement('tr');
//         var tableData = document.createElement('td');
//         var link = document.createElement('a');

//         // Setting the text of link and the href of the link
//         link.textContent = data[i].html_url;
//         link.href = data[i].html_url;

//         // Appending the link to the tabledata and then appending the tabledata to the tablerow
//         // The tablerow then gets appended to the tablebody
//         tableData.appendChild(link);
//         createTableRow.appendChild(tableData);
//         tableBody.appendChild(createTableRow);
//       }
//     });
// }

var icon = document.getElementById("icon");





