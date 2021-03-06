//Show modal for the user to info the flight info - it is just a text input
//Based on> https://www.w3schools.com/howto/howto_css_modals.asp

document.addEventListener('click', event => {
    const element = event.target;
    
    if(element.className === 'flightinfo'){
        const modal = document.getElementById("flightmodal");
        const closeflight = document.getElementsByClassName("closeflight")[0];
        const save = document.getElementById("saveflight");
        modal.style.display = "block";
        closeflight.onclick = function() {
            modal.style.display = "none";
        }
        save.onclick = function() {
            const info = document.getElementById('info').value;
            document.getElementById('flightcontent').innerHTML = 'Flight information: ' + info;
            modal.style.display = "none";
        }
    }
})