const SwapElementsInArray = (A: number[], x: number, y: number) => {
    let temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}

export default SwapElementsInArray;
