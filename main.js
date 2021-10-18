const addOne = function (arr){
  let res =[]
  arr.forEach(item => {
    res.push(item + 1);
  });
  return res
}///DONE


/////////////////////////////////////////////CHALLENGE 2

const addExclamation = (arr) => {
  let res =[]
  arr.forEach(item => {
    res.push(item + "!");
  });
  return res
}///DONE


/////////////////////////////////////////////CHALLENGE 3

const addOneByMap = (arr) => {

      nweArray = arr.map(function(item){
      return item +=1 ;
    
    })
    return nweArray
}///DONE


/////////////////////////////////////////////CHALLENGE 4


const addQuestion = (arr) => {
  nweArray = arr.map(function(item){
    return item+"?";
  
  })
  return nweArray

};///DONE


/////////////////////////////////////////////CHALLENGE 5

const forLoopTwoToThe = (arr) => {
  
  res = arr.map(function (item){
      return Math.pow(2 , item) 
    })
      return res;
}///DONE


/////////////////////////////////////////////CHALLENGE 6


const typeNum = (arr) => {

  res = arr.filter(function(item) {
    return (typeof item === "number")
  });
  return res;
}///DONE

/////////////////////////////////////////////CHALLENGE 7 

const containsAnd = (arr) => {
  res = arr.filter(function(item) {
   arr[item].includes('and')
    })
  return res ;
}  // I tried to solve it but i failed  :(


/////////////////////////////////////////////CHALLENGE 8


const oddValues = (arr) => {
  res = arr.filter(function(item) {
   arr[item] % 2 != 0 ;
  })
  return res;
}  // I tried to solve it but i failed  :(

/////////////////////////////////////////////CHALLENGE 9


const addValues = (arr) => {
res = arr.reduce(function (item1 , item2){
  return item1 + item2;
})
return res
}///DONE

/////////////////////////////////////////////CHALLENGE 9

