

var x = document.getElementById("location");
var latitude, longitude, altitude;

function getPreciseLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showExactPosition)
    }else{
        x.innerHTML = "la localisation n'est pas prise en charge"
    }
}

function showExactPosition(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    altitude = position.coords.altitude;
  
    // x.innerHTML = "latitude "+position.coords.latitude+"longitude :"+position.coords.longitude;
    var emailAddress = 'christiantshikwata282@gmail.com';

    var subject = 'veuillez me localiser je suis en danger!';
    var message =  latitude +','+ longitude+','+ altitude ;

    // Encode the subject and message
    subject = encodeURIComponent(subject);
    message = encodeURIComponent(message);

    // Send the email
    var mailto = 'mailto:' + emailAddress + '?subject=' + subject + '&body=' + message;
    window.location.href = mailto;


    // Set the request method

}
