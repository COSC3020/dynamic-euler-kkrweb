// Kane Kriz
// UWYO COSC 3020 Algorithms
// Dynamic Euler - primary js file
// 17 April 2025
//
//


//



function factorial(n) 
{
    if(n === 0) 
    {
        return 1;
    }
        
    else
    {
        return n * factorial(n - 1);
    }
}

function e(n) //verify this is actually bottom up dynamic programming, trace to see if any repeated work
{
    var sum = 0;
    var currentFactorial = 1; 
    var currentVal = 0;

    while(currentVal <= n) 
    {
        if (currentVal > 0) 
        {
            currentFactorial = factorial(currentVal);
        }
        
        sum += 1.0 / currentFactorial;
        currentVal++;
    }

    return sum;
}
