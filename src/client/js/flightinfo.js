document.addEventListener('click', event => {
    const element = event.target;
    
    if(element.className === 'flightinfo'){
        const modal = document.getElementById("flightmodal");
        const close = document.getElementsByClassName("close")[0];
        const save = document.getElementById("saveflight");
        modal.style.display = "block";
        close.onclick = function() {
            modal.style.display = "none";
        }
        save.onclick = function() {
            const info = document.getElementById('info').value;
            document.getElementById('flightcontent').innerHTML = 'Flight information: ' + info;
            modal.style.display = "none";
        }
    }
})