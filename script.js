var currentStation = document.getElementById("currentStation"),
  footer = document.getElementById("footer"),
  footerHeader = document.getElementById("footerHeader"),
  stationList = document.getElementsByClassName("stationName");

//clearStationList() sets class of all radio stations siblings to nonActive:
function clearStationList() {
  for (i = 0; i < stationList.length; i++) {
    stationList[i].className = "stationName nonActive";
  }
}
//clearStationDetails() hides every .stationDetails div:
function clearStationDetails() {
  var stationDetails = document.getElementsByClassName("stationDetails");
  for (i = 0; i < stationDetails.length; i++) {
    stationDetails[i].style.height = "0";
    stationDetails[i].style.margin = "0";
  }
}

//toggleStation(element) switches between radio stations, appends content to the footer:
function toggleStation(element) {
  if (element.className == "stationName nonActive") {
    clearStationList();
    clearStationDetails();
    footerHeader.innerHTML = "currently playing";
    currentStation.innerHTML = element.textContent;
    //show div before li:
    element.parentElement.getElementsByClassName("stationDetails")[0].style.height = "200px";
    //mark active state:
    element.className = "stationName active";
  } else {
    footerHeader.innerHTML = "";
    currentStation.innerHTML = "";
    //hide div before li:
    element.parentElement.getElementsByClassName("stationDetails")[0].style.height = "0";
    element.parentElement.getElementsByClassName("stationDetails")[0].style.margin = "0";
    //mark non-active state:
    element.className = "stationName nonActive";
  }
}