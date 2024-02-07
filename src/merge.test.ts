import { merge } from './merge';

describe('merge function', () => {
  it('should merge three sorted arrays into one sorted array', () => {
    const coll1 = [1, 3, 5];
    const coll2 = [2, 4, 6];
    const coll3 = [6, 4, 2];

    const mergedColl = merge(coll1, coll2, coll3);
    expect(mergedColl).toEqual([1, 2, 2, 3, 4, 4, 5, 6, 6,]);
  });

  it('should merge empty arrays into an empty array', () => {
    const coll1: number[] = [];
    const coll2: number[] = [];
    const coll3: number[] = [];

    const mergedColl = merge(coll1, coll2, coll3);
    expect(mergedColl).toEqual([]);
  });

  it('should merge one empty array and two non-empty arrays into a sorted array', () => {
    const coll1: number[] = [];
    const coll2 = [1, 4, 5, 8];
    const coll3 = [9, 5, 3];

    const mergedColl = merge(coll1, coll2, coll3);
    expect(mergedColl).toEqual([1, 3, 4, 5, 5, 8, 9]);
  });

  it('should merge two empty arrays and one non-empty array into a sorted array', () => {
    const coll1: number[] = [];
    const coll2: number[] = [];
    const coll3 = [3, 2, 1];

    const mergedColl = merge(coll1, coll2, coll3);
    expect(mergedColl).toEqual([1, 2, 3]);
  });

  it('should work', () => {
    const coll1 = [1, 1, 3, 5, 9 ,12];
    const coll2 = [2, 2, 4, 6 ,13];
    const coll3 = [6];

    const mergedColl = merge(coll1, coll2, coll3);
    expect(mergedColl).toEqual([1, 1, 2, 2, 3, 4, 5, 6, 6, 9, 12, 13]);
  });
});