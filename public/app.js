var x = document.getElementById("myAudio");


// playAudio();
setInterval(updateTime, 1000)
$("#play").on("click", playAudio)
$("#stop").on("click", pauseAudio)
$("#hide-chads").on("click", hideChad)
$("#show-chads").on("click", showChad)
$("#yo").on("click", function(){console.log("yo")})
let startDate = moment('05/07/2016 9:00:00 AM', 'MM/DD/YYYY hh:m:s A');
let daysDiff = moment().diff(startDate, "days")
let arr = [];
let imgSrc = "../assets/cropped_chad.jpg"
let imgHtml = ''

  imgHtml += '<div class="col-md-1">'
  imgHtml += '<img class="img-responsive" src="' + imgSrc +'">'
  imgHtml += '</div>'
for (var i = 0; i < daysDiff; i++) {
  $("#chad-box").append(imgHtml)
}

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}
function updateTime () {
  $("#chad-years").html(moment().diff(startDate, "years") + " years")
  $("#chad-months").html(moment().diff(startDate, "months") + " months")
  $("#chad-weeks").html(moment().diff(startDate, "weeks") + " weeks")
  $("#chad-days").html(moment().diff(startDate, "days") + " days")
  $("#chad-hours").html(moment().diff(startDate, "hours") + " hours")
  $("#chad-minutes").html(moment().diff(startDate, "minutes") + " minutes")
  $("#chad-seconds").html(moment().diff(startDate, "seconds") + " seconds")
}

function hideChad () {
  $("#chad-box").addClass("hidden")
  $("#hide-chads").addClass("hidden")
  $("#show-chads").removeClass("hidden")
}
function showChad () {
  $("#chad-box").removeClass("hidden")
  $("#hide-chads").removeClass("hidden")
  $("#show-chads").addClass("hidden")
}
