/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(input)
{
    const numbers = input.split(':');
    const hour = parseInt(numbers[0],10);
    if(hour < 12)
    {
        return "Good Morning"
    }
    else if (hour >= 12 && hour <= 17)
    {
        return "Good Afternoon"
    }
    else
    {
        return "Good Evening"
    }
}

/* Write your implementation of displayMessage() */
function displayMessage(input)
{
  document.querySelector('#greeting').innerText = input
}

