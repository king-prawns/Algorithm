const swap = (x: number, y: number,  A: number[]) => {
    let temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}

const InsertionSort = (A: number[]) => {
    const N = A.length;
    for (let x = 1; x < N; x++) {
        let y = x;
        while (y > 0 && A[y-1] > A[y]) {
            swap(y-1, y, A);
            y--;
        }
    }
}