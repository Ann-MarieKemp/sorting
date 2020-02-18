
describe('Split Array Function', function(){
  it('is able to split an array into two halves', function(){
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
  });
});

describe('Merge Function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1,3,5],[2,4,6])).toEqual([1,2,3,4,5,6]);
  })
})

describe('mergeSort Function', function(){
  it('is able to merge sort array', function(){
    expect(mergeSort([1,7,5,3,9,8])).toEqual([1,3,5,7,8,9]);
  })
})
