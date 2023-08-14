
/*

তোমাকে এমন একটা ফাংশন বানাতে হবে যেটা একটি সংখ্যা ইনপুট নিবে। function টির নাম হবেঃ isInteger()। আউটপুট হিসেবে একটি boolean রিটার্ন করবেঃ

সংখ্যাটি integer হলে true রিটার্ন করবে।  অন্যথায় false রিটার্ন করবে।

*/

/* function isInteger(x){
    if (typeof x !== 'number'){
        return "please give me a number"
    }

    if (x % 1 === 0){
        return true;
    }
    else{
        return false;
    }

}

console.log(isInteger(2)); */





/*

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে 

*/


//Method - 1

/* function isJavaScriptFile(fileName){
    if(typeof fileName !== "string"){
        return "Please provide a valid input"
    }
    if(fileName.toLowerCase().endsWith(".js") === true){
        return true;
    }
    else{
        return false;
    }
}

console.log(isJavaScriptFile(8)) */

//Method - 1

/* function isJavaScriptFile(filename){
    if(typeof filename !== "string"){
        return "please provide me a valid file name (string)."
    }else{
        const arr = filename.split(".");
        const lastElement = arr.pop()

        if(lastElement.toLowerCase() === "js"){
            return true;
        }else{
            return false;
        }
    }

}

console.log(isJavaScriptFile('asif.js')) */



/*

তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")
এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
Sample Input & Output
Input: 5
Output: 7.5

*/

/* function mindGame(x){
    if(typeof x !== "number"){
        return "please provide a number";
    }
    else if(x <=0){
        return "Please provide a positive number"
    }
    else{
        const result = (((x*3)+10)/2)-5
        return result;
    }
}
console.log(mindGame(5)) */


/*

তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  
এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
Input : 6
Output: -1
Input: -15
Output: -22
Input: 15
Output: 30

*/

/* function isLGSeven(x){
    if(typeof x !== "number"){
    return "please provide a number";
    }
    else{
        const differ = x - 7;
        if(differ < 7){
            return differ;
        }
        else{
            return x * 2;
        }
    }

}

console.log(isLGSeven(-15)) */




/*

তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
Sample Input & Output:-
Input: [ 1,2,5 ]
Output: 0
Input: [ 2, -5, -7, -13 ]
Output: 3

*/

/* function findingBadData(arr){
    if(!Array.isArray(arr)){
        return "please provide me an array of number"
    }
    else{
        let badData = 0;

        for(let i = 0; i < arr.length; i++){
            if(typeof arr[i] !== "number"){
                return "please provide me an array of number"
            }
            else{
                if(arr[i] < 0){
                    badData ++;
                }
            }
        }
        return badData;
    }
}

const arr = [1,-2,3,4,-5,];
console.log(findingBadData(arr)); */




/*

Problem 5: Convert your gems into diamond
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303

*/


