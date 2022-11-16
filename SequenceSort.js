const PromptSync = require("prompt-sync");
const prompt = require("prompt-sync")();

let arreglo = [5, 2, 4, 7, 1, 3, 2, 6]
let arr1 = []; let arr2 = []; let arr3 = []; let arr4 = []; let arr5 = []; let arr6 = []; let arr7 = []

arreglo.forEach((value, index) => {
console.log(arreglo.slice(index,index+1)); 
});

for(index = 0; index < 8; index = index + 2)
{
    const arr = arreglo.slice(index,index+1).concat(arreglo.slice(index+1,index+2))
    arr.sort(function(a, b) {
        return a - b;
      });
      console.log(arr);
   
      if (arr1.length === 0)
      {
        arr1 = arr
      }
      else
      {
        if (arr2.length === 0)
        {
          arr2 = arr
        }
        else
        {
            if (arr3.length === 0)
            {
              arr3 = arr
            }
            else
            {
                if (arr4.length === 0)
                {
                    arr4 = arr
                    arr5 = arr1.concat(arr2)
                    arr6 = arr3.concat(arr4)

                    arr5.sort(function(a, b) {
                        return a - b;
                    });
                    console.log(arr5);
                    arr6.sort(function(a, b) {
                        return a - b;
                    });
                    console.log(arr6);

                    arr7 = arr5.concat(arr6)
                    arr7.sort(function(a, b) {
                        return a - b;
                    });
                    console.log(arr7);
                }
                else
                {
                  console.log("no")
                }
            }
        }
    }   
}