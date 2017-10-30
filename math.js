/* Write a function called zero_negativity(). This function should take an array. 
Return true if the input array contains no negative numbers, return false if it does.*/
function zero_negativity(arr){
    for (let i = 0; i<arr.length; i++){
        if (arr[i] < 0){
            return false;
        }
    }
    return true;
}
let test1 = zero_negativity([2,4,2,7]);
console.log(test1);
let test2 = zero_negativity([2,4,-2,7]);
console.log(test2);



/*Write a function called is_even(). This function should take an number. 
Return true if the input number is even, return false if the number is odd. */
function is_even(num){
    if (!(num % 2)){
        return true;
    }
    return false;
}
console.log(is_even(4));



/*Write a function called how_many_even(). This function should take an array. 
Return the total number of elements in the array that are even.*/
function how_many_even(arr){
    let count = 0;
    for (let i=0; i< arr.length; i++){
        if (!(arr[i] % 2)){
            count++;
        }
    }
    return count;
}
console.log(how_many_even([2,4,3,5,7,1]));



/*Write a function called create_dummy_array(). This function should take a number n. 
Return an array of random numbers between 0 and 9 with the length of n. */
function create_dummy_array(num){
    let arr = [];
    for (let i = 0;i<num;i++){
        arr.push(Math.floor(Math.random()*10));
    }
    return arr;
}
let arr2 = create_dummy_array(5);
console.log(arr2);



/*Write a function called random_choice(). This function should take an array. 
Return a random element of the array, based on its length. 
This function should never return undefined. */
function random_choice(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

let rand_num = random_choice([2,4,3,6,8,0]);
console.log(rand_num);