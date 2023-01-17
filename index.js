let display = document.getElementById('display');
let total = 0;
let previousAction = '';

function pressNumber(num){

    display.innerText += num;
}
function pressDivision()
{
    if(display.innerText != null & previousAction == ''){
        total += Number(display.innerText);
        display.innerText = '';
        previousAction = 'Division';
        }
        else if(display.innerText != null & previousAction == 'Division')
        {
            total += Number(display.innerText);
            display.innerText = '';
            previousAction = 'Division';
        }
        else if(display.innerText != null & previousAction == 'Add')
        {
            total += Number(display.innerText);
            display.innerText = '';
            previousAction = 'Division';
        }
        else if(display.innerText != null & previousAction == 'Take')
        {
            total -= Number(display.innerText);
            display.innerText = '';
            previousAction = 'Division';
        }
        else if(display.innerText != null & previousAction == 'Multiply')
        {
            total *= Number(display.innerText);
            display.innerText = '';
            previousAction = 'Division';
        }
        else if(display.innerText != null & previousAction == 'equal')
        {
            display.innerText = '';
            previousAction = 'Division';
        }
}
function pressAddition()
{
    if(display.innerText != null & previousAction == ''){
    total += Number(display.innerText);
    display.innerText = '';
    previousAction = 'Add';
    }
    else if(display.innerText != null & previousAction == 'Add')
    {
        total += Number(display.innerText);
        display.innerText = '';
        previousAction = 'Add';
    }
    else if(display.innerText != null & previousAction == 'Take')
    {
        total -= Number(display.innerText);
        display.innerText = '';
        previousAction = 'Add';
    }
    else if(display.innerText != null & previousAction == 'Multiply')
    {
        total *= Number(display.innerText);
        display.innerText = '';
        previousAction = 'Add';
    }
    else if(display.innerText != null & previousAction == 'Division')
    {
        total += Number(display.innerText);
        display.innerText = '';
        previousAction = 'Add';
    }
    else if(display.innerText != null & previousAction == 'equal')
    {
        display.innerText = '';
        previousAction = 'Add';
    }
    
}

function pressSubtraction(){
    if(display.innerText != null & previousAction == ''){
        total += Number(display.innerText);
        display.innerText = '';
        previousAction = 'Take';
        }
    else if(display.innerText != null & previousAction == 'Take')
    {
        total -= Number(display.innerText);
        display.innerText = '';
        previousAction = 'Take';
    }
    else if(display.innerText != null & previousAction == 'Add')
    {
        total += Number(display.innerText);
        display.innerText = '';
        previousAction = 'Take';
    }
    else if(display.innerText != null & previousAction == 'Multiply')
    {
        total *= Number(display.innerText);
        display.innerText = '';
        previousAction = 'Take';
    }
    else if(display.innerText != null & previousAction == 'Division')
    {
        total += Number(display.innerText);
        display.innerText = '';
        previousAction = 'Take';
    }
    else if(display.innerText != null & previousAction == 'equal')
    {
        display.innerText = '';
        previousAction = 'Take';
    }
    
}
function pressMultiplication()
{
    if(display.innerText != null & previousAction == ''){
        total += Number(display.innerText);
        display.innerText = '';
        previousAction = 'Multiply';
    }
    else if(display.innerText != null & previousAction == 'Multiply')
    {
        total *= Number(display.innerText);
        display.innerText = '';
        previousAction = 'Multiply';
    }
    else if(display.innerText != null & previousAction == 'Add')
    {
        total += Number(display.innerText);
        display.innerText = '';
        previousAction = 'Multiply';
    }
    else if(display.innerText != null & previousAction == 'Take')
    {
        total -= Number(display.innerText);
        display.innerText = '';
        previousAction = 'Multiply';
    }
    else if(display.innerText != null & previousAction == 'Division')
    {
        total += Number(display.innerText);
        display.innerText = '';
        previousAction = 'Multiply';
    }
    else if(display.innerText != null & previousAction == 'equal')
    {
        display.innerText = '';
        previousAction = 'Multiply';
    }

}

function pressResult(){
    if(previousAction == 'Add'){
        total += Number(display.innerText);
        display.innerText = total;
        previousAction = 'equal';
    }
    else if(previousAction == 'Take'){
        total -= Number(display.innerText);
        display.innerText = total;
        previousAction = 'equal';
    }
    else if(previousAction == 'Multiply'){
        total *= Number(display.innerText);
        display.innerText = total;
        previousAction = 'equal';
    }
    else if(previousAction == 'Division'){
        total /= Number(display.innerText);
        display.innerText = total;
        previousAction = 'equal';
    }
    
}

function clearResult(){
    total = 0;
    display.innerText = '';
    previousAction = '';
}