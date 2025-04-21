# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?



//

the linter is upset so I am adding this line in the hope it fixes itself


Name: Kane Kriz

Start Date: 17 April 2025

Last Edited: 21 April 2025

Feedback Request 1 Date: 21 April 2025




//




Response: 

The implementation calculates Euler's number through seeking the follow Euler's summation formula using the implementation and stored values.

The primary logic of the implementation is held within the `e(n)` function.

Within the `e(n)` function, shown in the while loop structure `while(currentVal <= n)`, the factorial values are computed iteratively rather than recursively. 

The `currentFactorial` variable persists across loop iterations.

This is evident with the line `currentFactorial *= currentVal`, which is only called when `currentVal > 0`.

This allows each new factorial to be calculated in constant time by multiplying the previous value.

The `factorial()` function's purpose is to help logically avoid repeated work via the iterative factorial update functionality within the summation `sum += 1.0 / currentFactorial`. 

Each iteraton of the loop performs only constant work via only having to perform simple constant operations. 

The loop structure via `currentVal++` in the while loop executes n+1 times.

Each iteration performs two constant time opertations, being updating of `currentFactorial` and accumulating the summation.

The check `if(currentVal > 0)` operates in constant time.

The preservation of computed factorial values in `currentFactorial` avoids repeated work through reuse across iterations. 

The algorithm must process each term in the series exactly once.

This is ensured via loop condition `currentVal <= n`.

The worst case big theta time complexity of the implementation is thus Θ(n), due to the linear number of iterations each performing individual constant work.





//




Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


Citations:

“Dynamic Programming vs Memoization vs Tabulation | Programming.Guide.” Programming.guide, 2016, programming.guide/dynamic-programming-vs-memoization-vs-tabulation.html. Accessed 21 Apr. 2025.

Dynamic Programming vs Memoization. “Dynamic Programming vs Memoization.” Computer Science Stack Exchange, 2 Nov. 2018, cs.stackexchange.com/questions/99513/dynamic-programming-vs-memoization. Accessed 21 Apr. 2025.
