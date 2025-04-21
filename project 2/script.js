const colorInput = document.getElementById('colorInput');
const colorCode = document.getElementById('colorCode');
const copyButton = document.getElementById('copyButton');
const ComplementaryContainer = document.getElementById('ComplementaryContainer');
const saveColorButton = document.getElementById('saveColorButton');
const favoritesContainer = document.getElementById('favoritesContainer');

colorInput.addEventListener('input', () => {
    const selectedColor = colorInput.value;
    //console.log(selectedColor);
    showInputColor(selectedColor);
    createComplementColor(selectedColor);
    showComplementaryColor(selectedColor);

})


function showInputColor(color){
colorCode.textContent = color;
colorCode.style.color = color;
//console.log(colorCode.textContent);
}

function showComplementaryColor(color){
    const complementaryColor = createComplementColor(color)
    ComplementaryContainer.innerHTML = ''; //clear previous color
    
    complementaryColor.forEach((compColor) => {
         const colorBox = document.createElement('div');
         colorBox.classList.add('color-box');
         colorBox.style.backgroundColor = compColor;
         ComplementaryContainer.appendChild(colorBox)

    })
}

function createComplementColor(color){
    const base = parseInt(color.slice(1),16)
    const complementaryColor =  (0xFFFFFF ^ base).toString(16).padStart(6,'0'); 
    return [`#${complementaryColor}`]
}

copyButton.addEventListener('click',()=>{
    navigator.clipboard.writeText(colorCode.textContent)
    .then(() => alert('Color code copied') )
    .catch((err) => console.error('failed to copy', err) )
})


saveColorButton.addEventListener('click', () => {

    const color = colorCode.textContent;
    addfavColor(color)

})

function addfavColor (color){
  
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;
}