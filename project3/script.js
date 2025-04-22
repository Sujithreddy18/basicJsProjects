const quotes = [
    'quote 1',
    'quote 2',
    'quote 3',
    'quote 4',
    'quote 5'
]



const generateButton = document.getElementById('generateButton');

function generateQuote(){
    const random = Math.floor(Math.random() * quotes.length)
    const quoteDisplay = document.getElementById('quoteDisplay')
    quoteDisplay.innerText = quotes[random]
}

generateButton.addEventListener('click',generateQuote);