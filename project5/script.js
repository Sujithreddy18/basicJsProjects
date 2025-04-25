const limit = 200;
const textInput = document.getElementById('textInput');
const charCount= document.getElementById('charCount');
const warning = document.getElementById('warningMessage')
function updateCharacterLength(){
    const textLength = textInput.value.length;
    charCount.innerText = `${textLength}/${limit} characters` 
    warning.innerText =   ``

    if (textLength < limit){
        charCount.style.color = 'green'
    }
    else if (textLength === limit){
        charCount.style.color = 'orange'
    }
    else {
        charCount.style.color = 'red';
        warning.innerText = `you have reached the limit of characters`

    }
}

textInput.addEventListener('input',updateCharacterLength)