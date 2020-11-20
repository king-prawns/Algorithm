const swap = (x: number, y: number,  A: number[]) => {
    let temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}

const selectionSort = (A: number[]) => {
    const N = A.length;
    for (let x = 0; x < N-1; x++) {
        let min = x;
        for (let y = x+1; y < N; y++) {
            if (A[y] < A[min]) {
                min = y;
            }
        }
        swap(x, min, A);
    }
}