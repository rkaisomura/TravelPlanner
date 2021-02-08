document.addEventListener('DOMContentLoaded', function(){

    //By default, submit button is disabled
    document.querySelector('#submit').disabled = true;
    document.querySelector('#item').onkeyup = () => {
        if( document.querySelector('#item').value.length > 0) {
            document.querySelector('#submit').disabled = false;
        } else {
        document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {
        const item = document.querySelector('#item').value;
        console.log(item);

        const li = document.createElement('li');
        li.innerHTML = item;

        document.querySelector('#packing').append(li);

        document.querySelector('#item').value = '';
        document.querySelector('#submit').disabled = true;

        //Stop form from submitting
        return false;
    }
})