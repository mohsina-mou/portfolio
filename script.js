var myDate = new Date();
var hrs = myDate.getHours();

if (hrs < 12) {
    document.getElementById("greetings").innerHTML = "Good Morning";

}
else if (hrs >= 12 && hrs <= 17) {
    document.getElementById("greetings").innerHTML = "Good Afternoon";


}
else if (hrs >= 17 && hrs <= 24) {
    document.getElementById("greetings").innerHTML = "Good Evening";
}