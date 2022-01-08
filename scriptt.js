//Convert any text to whale language! 
let input = 'turpentine and turtles';
let Arr = input.toUpperCase().split(""); // ['T', 'U', 'R', 'P', 'E', 'N', 'T', 'I', 'N', 'E', ' ', 'A', 'N', 'D', ' ', 'T', 'U', 'R', 'T', 'L', 'E', 'S']
// console.log(input[0])
let emptyArr = []; /// [E,E]

for (let i = 0; i < Arr.length; i++) {

    if (Arr[i] === "I" || Arr[i] === "E" || Arr[i] === "O" || Arr[i] === "A" || Arr[i] === "U" || Arr[i] === "Y") {

        emptyArr.push(Arr[i])

        if (Arr[i] === "E" || Arr[i] === "U") {
            emptyArr.push(Arr[i])
        }

    }

}

console.log(emptyArr.join(""))
