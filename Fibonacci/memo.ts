const memo = [];

const fibonacciMemo = (i: number): number => {
    if (i<=1) return i;
    if (memo[i]) return memo[i];
    memo[i] = fibonacciMemo(i-1) + fibonacciMemo(i-2);
    return memo[i];
}
