var number = array => {
    let newArr = []
  array.forEach( (element, index) => {
      newArr.push( `${index + 1} : ${element}` )
  });
  return newArr; 
}
