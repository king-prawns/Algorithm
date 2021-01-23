const MergeTwoSortedArray = (A1: number[], A2: number[], R: number[] = []): number[] => {
    const L1 = A1.length;
    const L2 = A2.length;
    let x = 0;
    let y = 0;
    let k = 0;

    while (x < L1 && y < L2) {
        if (A1[x] < A2[y]) {
            R[k] = A1[x];
            k++;
            x++;
        } else {
            R[k] = A2[y];
            k++;
            y++;
        }
    }

    while (x < L1) {
        R[k] = A1[x];
        k++;
        x++;
    }

    while (y < L2) {
        R[k] = A2[y];
        k++;
        y++;
    }

    return R;
}

export default MergeTwoSortedArray;
