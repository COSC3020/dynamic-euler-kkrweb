// Kane Kriz
// UWYO COSC 3020 Algorithms
// Dynamic Euler - primary js file
// 17 April 2025
//
//


//



function factorial(n) //untouched besides formatting as of now
{
    if(n === 0) 
    {
        return 1;
    }
        
    else()
    {
        return n * factorial(n - 1);
    }
}


function e(n) //now functions as bottom up dynamic programming as directed? No more repeated work?
{
    var sum = 0;
    var nextFactorial = 1;
    var currentTerm = 0;

    while(currentTerm <= n) 
    {
        sum += 1.0 / nextFactorial;
        currentTerm++;
        
        if(currentTerm <= n) 
        {
            nextFactorial *= currentTerm;
        }
    }

    return sum;
}
