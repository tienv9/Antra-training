// 1
function reverseNumber(num) {
    let newString = String(num).split("").reverse().join("");

    return Number(newString);
}

// console.log(reverseNumber(32243));
// console.log(reverseNumber(4200));


// 2 
function checkPalindrome(str) {
    let newString = str.toLowerCase();
    let reverseString = newString.split("").reverse().join("");

    return newString === reverseString;
}

// console.log(checkPalindrome("madam"));
// console.log(checkPalindrome("nurse"));

//3 
function genCombination(str) {
    let res = [];

    for(let i = 0; i < str.length; i++) {
        let comb = "";
        for(let j = i; j < str.length; j++){
            comb += str[j];
            res.push(comb);
        }
    }

    return res;
}

// console.log(genCombination("dog"));
// console.log(genCombination("cat"));

//4 
function orderString(str) {
    return str.split("").sort().join("");
}

// console.log(orderString("webmaster")); 
// console.log(orderString("helloworld")); 

//5
function turnUpperCase(str) {
    let newString = str.split(" ");
    let res = "";

    for(let i = 0; i < newString.length; i++) {
        if(newString[i].length > 0 ) {
            res += newString[i].charAt(0).toUpperCase() + newString[i].slice(1) + " ";
        }
    }
    return res.trim();
}

// console.log(turnUpperCase("the quick brown fox"));

//6
function longestWord(str) { // will only return first longest word and ignore the rest if these an equal length word to the longest word
    let newString = str.split(" ");
    let longest = "";

    for(let i = 0; i < newString.length; i++) {
        if(newString[i].length > longest.length) {
            longest = newString[i];
        }
    }

    return longest;
}

// console.log(longestWord("Web Development Tutorial"));

//7 
function vowelCount(str) {
    let vowelList = "aeiou";
    let newString = str.toLowerCase();
    let count = 0;

    for(let i = 0; i < newString.length; i++) {
        if(vowelList.includes(newString[i])) {
            count++;
        }
    }
    return count;
}

// console.log(vowelCount("The quick brown fox"));

//8
function primeCheck(num) {
    if(num <= 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else if (num % 2 === 0) {
        return false;
    }

    for(let i = 3; i <= Math.sqrt(num); i += 2) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(primeCheck(53));
// console.log(primeCheck(18));

//9 
function typeCheck(str) {
    return typeof(str);
}

// console.log(typeCheck(undefined));

//10 
function createMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                row.push(1);
            } else {
                row.push(0);
            }
        }
        matrix.push(row);
    }

    return matrix;
}

// console.log(createMatrix(5));

//11 
function lowestHighest(arr) {
    let sorted = arr.sort((a, b) => a - b);
    secondLow = sorted[1];
    secondHigh = sorted[arr.length - 2];

    console.log(sorted);
    return [secondLow, secondHigh];
}

// console.log(lowestHighest([1,2,3,4,5]));

//12
function perfectNumber(num) {
    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}

// console.log(perfectNumber(40));
// console.log(perfectNumber(496));

//13 
function getFactors(num) {
    let fac = [];

    for (let i = 1; i <= num; i++) {
        if(num % i === 0) {
            fac.push(i);
        }
    }
    return fac;
}

// console.log(getFactors(12));
// console.log(getFactors(29));

//14
function countCoin(num, coins) {
    let res = [];

    for(let i = 0; i < coins.length; i++) {
        while(num >= coins[i]) {
            num -= coins[i];
            res.push(coins[i]);
        }
    }

    return res;
}

// console.log(countCoin(46, [25, 10, 5, 2, 1]));

//15
function calExp(b, n) {
    return Math.pow(b, n);
}

// console.log(calExp(2, 3)); 


//16 
function uniqueString(str) {
    let res = "";

    for (let i = 0; i < str.length; i++) {
        if(!res.includes(str[i])){
            res += str[i];
        }
    }

    return res;
}

// console.log(uniqueString("thequickbrownfoxjumpsoverthelazydog"));

//17
function countLetter(str) {
    let count = {};
    lower = str.toLowerCase();

    for(let i = 0; i < lower.length; i++) {
        let char = lower[i];
        if (char >= 'a' && char <= 'z') {
            if (count[char]) {
                count[char]++;
            } else {
                count[char] = 1;
            }
        }
    }
    return count;
}

// console.log(countLetter("Thee dogg"));

//18
function binarySearch(arr, target) {
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        }
    }
    return "not found";
}

// console.log(binarySearch([10, 1, 7, 53, 2, 15], 2));
// console.log(binarySearch([10, 1, 7, 53, 2, 15], 9));

//19
function findLargerElement(arr, num) {
    let res = [];
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            res.push(arr[i]);
        }
    }

    return res;
}

// console.log(findLargerElement([10, 1, 7, 53, 2, 15], 5));

//20
function randomString(n) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let res = "";

    for(let i = 0; i < n; i++) {
        let randIndex = Math.floor(Math.random() * chars.length);
        res += chars[randIndex];
    }

    return res;
}

// console.log(randomString(5));
// console.log(randomString(20));

//21
function findSubsetCombination(arr, subsetLength) {
    let res = [];

    function combine(currentSet, start) {
        if(currentSet.length === subsetLength) {
            res.push([...currentSet]);
            return; 
        }
        for(let i = start; i < arr.length; i++) {
            currentSet.push(arr[i]);
            combine(currentSet, i + 1);
            currentSet.pop();
        }
    }

    combine([], 0)
    return res;
}

// console.log(findSubsetCombination([1, 2, 3], 2));

//22
function countNumberOfLetter(str, letter) {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === letter) {
            count++;
        }
    }
    return count;
}

// console.log(countNumberOfLetter('microsoft.com', 'o'));

//23
function firstNonRepeatedChar(str) {
    let count = {};
    lower = str.toLowerCase();

    for(let i = 0; i < lower.length; i++) {
        let char = lower[i];
        if (char >= 'a' && char <= 'z') {
            if (count[char]) {
                count[char]++;
            } else {
                count[char] = 1;
            }
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (count[str[i]] === 1) {
            return str[i];
        }
    }

    return false;
}

    // console.log(firstNonRepeatedChar('abacddbec'));


//24
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            if(arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//25
function longestCountry(arr) {
    let longest = "";

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;

}

// console.log(longestCountry(["Australia", "Germany", "United States of America"]));

//26
function longestSubstring(str) {
    let current = "";
    let longest = "";

    for(let i = 0; i < str.length; i++) {
        let char = str[i];

        let index = current.indexOf(char);
        if (index !== -1) {
            current = current.slice(index + 1);
        }

        current += char;
        
        if (current.length > longest.length) {
            longest = current;
        }
    }

    return longest;
}

// console.log(longestSubstring("abcabcbb"));
// console.log(longestSubstring("pwwkew"));

//27
function longestPalindrome(s) {
    let res = "";

    function isPalindrome(str) {
        return str === str.split("").reverse().join("");
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substr = s.slice(i, j + 1);
            if (isPalindrome(substr) && substr.length > res.length) {
                res = substr;
            }
        }
    }

    return res;
}


// console.log(longestPalindrome("bananas"));
// console.log(longestPalindrome("abracadabra"));

//28
function goodbye() {
    console.log("Goodbye!");
}

function helloName(name, func) {
    console.log("Hello " + name + "!");
    func();
}

// helloName("Eric", goodbye);
//29
function dummyHelloFunction() {
    return "Hello!";
}

function getFunctionName(fn) {
    return fn.name;
}

// console.log(getFunctionName(dummyHello));



