const swap = (x: number, y: number,  A: number[]) => {
    let temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}

const bubbleSort = (A: number[]) => {
    const N = A.length;
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < (N - 1); y++) {
            if (A[y] > A[y+1]) {
                swap(y, y+1, A);
            }
        }
    }
}