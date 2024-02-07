export function merge(
    coll1: number[],
    coll2: number[],
    coll3: number[]
  ): number[] {
    const mergedColl: number[] = [];
    let i = 0, j = 0, k = 0, l = 0, m = 0;
    coll3=coll3.reverse();
    let coll4 :number[],coll5:number[]; 
    while (i < coll1.length && j < coll2.length && k < coll3.length) {
      if (coll1[i] <= coll2[j] && coll1[i] <= coll3[k]) {
        mergedColl.push(coll1[i++]);
      } else if (coll2[j] <= coll1[i] && coll2[j] <= coll3[k]) {
        mergedColl.push(coll2[j++]);
      } else {
        mergedColl.push(coll3[k++]);
      }
    }
    if (i==coll1.length) {
        coll4 = coll2
        coll5 = coll3
        l=j,m=k
    } else if (j==coll2.length) {
        coll4 = coll1
        coll5 = coll3
        l=i,m=k
    } else {
        coll4 = coll1
        coll5 = coll2
        l=i,m=j
    }
    while (l < coll4.length && m < coll5.length) {
        if (coll4[l] <= coll5[m] ) {
          mergedColl.push(coll4[l++]);
        } else {
          mergedColl.push(coll5[m++]);
        }
    }
    while (l < coll4.length) {
        mergedColl.push(coll4[l++]);
        }
    while (m < coll5.length) {
        mergedColl.push(coll5[m++]);
        }        
    return mergedColl;
  }