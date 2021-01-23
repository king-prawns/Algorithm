const memo = [];

const FibonacciMemo = (i: number): number => {
    if (i <= 1) return i;
    if (memo[i]) return memo[i];
    memo[i] = FibonacciMemo(i-1) + FibonacciMemo(i-2);
    return memo[i];
}

export default FibonacciMemo;
