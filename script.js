let count = 0;

document.querySelector("textarea").addEventListener("keypress", function(event){
    count++;
    let press = event.key;
    document.querySelector("h2").innerHTML = "You Have " + count + " Correcter in Message Area.";
});

document.addEventListener("keypress", function(event){
    let press = event.key;
    document.querySelector("h1").innerHTML = "You Have Pressed " + press;
});