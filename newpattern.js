let value = 4;



let length = 2 * value - 1;

for (let r = 0; r < length; r++) {
    let result = "";

         for (let c = 0; c < length; c++) {
        let edge = Math.min(r, c, length - r - 1, length - c - 1);
        result += (value - edge) + " ";
    }

    console.log(result);
   }