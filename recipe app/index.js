let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/vl/l/search.php?s=";

let userInp = document.getElementById("user-inp").value;


fetch(url + "").then(response => response.json())
.then((data) => {console.log(data); 
    
});