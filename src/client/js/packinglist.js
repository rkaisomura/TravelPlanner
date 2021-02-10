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

    // Remove the item and the button of the list
    document.addEventListener('click', event => {
        const element = event.target;
        if(element.className === 'remove'){
            element.parentElement.remove();
        }
    })

    //Clicking on 'Submit' button
    document.querySelector('form').onsubmit = () => {
        const item = document.querySelector('#item').value;
        //console.log(item);

        //Create an item list with 'remove' button
        const li = document.createElement('li');
        li.innerHTML = item;
        li.innerHTML = `${item} <button class="remove">remove</button><br>`;

        document.querySelector('#packing').append(li);

        document.querySelector('#item').value = '';
        document.querySelector('#submit').disabled = true;

        //Stop form from submitting
        return false;
    }
})