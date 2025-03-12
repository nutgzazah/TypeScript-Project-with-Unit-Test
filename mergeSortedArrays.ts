export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let result: number[] = [];
    let i = 0, j = 0, k = collection_3.length - 1;
    
    while (i < collection_1.length || j < collection_2.length || k >= 0) {
        let candidates: { value: number; index: 'i' | 'j' | 'k' }[] = [];
        if (i < collection_1.length) candidates.push({ value: collection_1[i], index: 'i' });
        if (j < collection_2.length) candidates.push({ value: collection_2[j], index: 'j' });
        if (k >= 0) candidates.push({ value: collection_3[k], index: 'k' });
        
        let minCandidate = candidates.reduce((min, curr) => curr.value < min.value ? curr : min);
        result.push(minCandidate.value);
        if (minCandidate.index === 'i') i++;
        else if (minCandidate.index === 'j') j++;
        else k--;
    }
    return result;
}