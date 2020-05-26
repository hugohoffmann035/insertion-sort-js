const numbers = [1,2,3,4,5,6]

const insertionSort = (arr) => {
  for(let i=1;i<arr.length;i++){
    let atual = arr[i]
    let anterior = i-1

    while(anterior>=0 && atual < arr[anterior]){
      arr[anterior+1] = arr[anterior]
      anterior = anterior-1
    }
    arr[anterior+1] = atual
  }
  return arr
}

const reverseInsertionSort = (arr) => {
  for(let i=1;i<arr.length;i++){
    let atual = arr[i]
    let anterior = i-1

    while(anterior>=0 && atual > arr[anterior]){
      arr[anterior+1] = arr[anterior]
      anterior = anterior-1
    }
    arr[anterior+1] = atual
  }
  return arr
}

//console.log(reverseInsertionSort(numbers))