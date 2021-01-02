const fibonacciRecursive = (i: number): number => {
    if (i<=1) return i;
    return fibonacciRecursive(i-1) + fibonacciRecursive(i-2);
}
