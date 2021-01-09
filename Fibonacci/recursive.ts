const FibonacciRecursive = (i: number): number => {
    if (i<=1) return i;
    return FibonacciRecursive(i-1) + FibonacciRecursive(i-2);
}
