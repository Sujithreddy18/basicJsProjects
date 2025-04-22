const num1 = document.getElementById('number1')
const num2 = document.getElementById('number2')

const result = document.getElementById('result')

function calculate(operator){
    x = parseInt(num1.value)
    y = parseInt(num2.value)
    if (isNaN(x) || isNaN(y)){
        result.innerText = 'Please enter a valid input'
        return
    }
    
    switch(operator){
        case '+':
            result.innerText= `sum is ${x+y}`
            break
        case '-':
            result.innerText= `sub is ${x-y}`
            break
        case '*':
            result.innerText= `mul is ${x*y}`
            break
        case '/':
            if (y===0){
                result.innerText = `cannot divide when denominator is 0`
            }
            else{
                result.innerText= `div is ${x/y}`

            }
            break

    }


}