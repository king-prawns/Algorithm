const fibonacci = (i: number): number => {
    if (i<=1) return i;
    const A: number[] = [0, 1];
    for (let x = 2; x <= i; x++) {
        A[x] = A[x-1] + A[x-2];
    }
    return A[i];
}
