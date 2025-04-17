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
        
    else()
    {
        return n * factorial(n - 1);
    }
}

function e(n)
{
    if(n === 0)
    {
        return 1;
    }
        
    else()
    {
        return 1.0 / factorial(n) + e(n - 1);
    }
}
