function fadePreloader() {
    if($('#preloader').length) {
      $('#preloader').delay(2000).fadeOut(0, function(){
        $('#preloader').remove();
      });
    }
  }
  
  $(document).ready(function(){
    fadePreloader()  
  });

setTimeout(function () {    
    fadePreloader()
 }, 20000);









 $(document).ready(function() {
  $('#last-btn').click(function(f) {
    f.preventDefault();

    var btn = $(this);

    $.ajax({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      dataType: "json",
      data: {
        "name": "Luke Skywalker", 
        "height": "172", 
        "mass": "77", 
        "hair_color": "blond", 
        "skin_color": "fair", 
        "eye_color": "blue", 
        "birth_year": "19BBY", 
        "gender": "male", 
        "homeworld": "https://swapi.dev/api/planets/1/", 
        "films": [
            "https://swapi.dev/api/films/1/", 
            "https://swapi.dev/api/films/2/", 
            "https://swapi.dev/api/films/3/", 
            "https://swapi.dev/api/films/6/"
        ], 
        "species": [], 
        "vehicles": [
            "https://swapi.dev/api/vehicles/14/", 
            "https://swapi.dev/api/vehicles/30/"
        ], 
        "starships": [
            "https://swapi.dev/api/starships/12/", 
            "https://swapi.dev/api/starships/22/"
        ], 
        "created": "2014-12-09T13:50:51.644000Z", 
        "edited": "2014-12-20T21:17:56.891000Z", 
        "url": "https://swapi.dev/api/people/1/"
      },
      success: function(data) {
        console.log(data);
      },
      error: function(er) {
        console.log(er);
      }
    });
  });
});





 function fadePreloaderEndList() {
  if($('#preloaderEndList').length) {
    $('#preloaderEndList').delay(10000).fadeOut(0, function(){
      $('#preloaderEndList').remove();
    });
  }
}

$(document).ready(function(){
  fadePreloaderEndList()  
});

setTimeout(function () {    
  fadePreloaderEndList()
}, 20000);

 var progressbar = $('#progressbar'),
 max = progressbar.attr('max'),
 value = progressbar.val(),
 time = (2000/max)*5;
 var loading = function() {
  value += 1;
  addValue = progressbar.val(value);
  $('.persent').html(value + '%');
}

var animate = setInterval(function() {
  loading()
  if (value == max) {
    clearInterval(animate);
  } else {}
}, time);





for (let year = 1920; year <= 2020; year++) {
  let options = document.createElement("OPTION");
  document.getElementById("year").appendChild(options).innerHTML = year;
};

for (let month = 1; month <= 12; month++) {
  let options = document.createElement("OPTION");
  document.getElementById("month").appendChild(options).innerHTML = month;
};

for (let day = 1; day <= 31; day++) {
  let options = document.createElement("OPTION");
  document.getElementById("day").appendChild(options).innerHTML = day;
};




const allSel = document.querySelectorAll('.selector-block');
allSel.forEach((sel) => {
  sel.addEventListener('blur', function (){
    let selNum = sel.selectedIndex;
    if(selNum === 0){
        sel.className = ('invalid')
    }
    else{
        sel.className = ('valid')
    }
  });
});

document.getElementById("year").addEventListener("change", function(e){
  let data = e.target.value;
  let newYear = 2022;
  let age = newYear - data;

  document.getElementById("next").addEventListener("click", function() {
    if (age => 18, age <= 35) {
      document.getElementById("next").href="18-35.html";
    } else if (age => 36, age <= 45) {
      document.getElementById("next").href="36-45.html";
    } else if (age => 46) {
      document.getElementById("next").href="46.html";
    } else if (selNum === 0) {
      sel.className = ('invalid')
    };

  });
  
});





