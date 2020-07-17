'use strict';

module.exports.handler = async event => {
  try {
    for (const record of event.Records) {

      //parse string to JSON
      var obj = JSON.parse(record.body);

      return await this.bothElements(obj.arr1, obj.arr2);
    }
  } catch (error) {
    return error
  }
};


module.exports.bothElements = async (arr1, arr2) => {
  let arryAux = Array()

  //loop the first array and find an element equal in the second array
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) > -1) {
      arryAux.push(arr1[i]);
    }
  }

  //sorts elements from smallest to largest
  return arryAux.sort((a, b) => a - b);
}
