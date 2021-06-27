'use strict';
let hours = [
    '6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00pm'
]

let location1 = {
    City : 'Seattle',
    min : 23,
    max : 65,
    AvgCookie : 6.3,
    CustomersNumbers :[],


    randomCustomer : function (){
        for (let i = 0; i < hours.length; i++) {
            this.CustomersNumbers.push(randomGenerate(this.min,this.max));
            
        }
    },
    print:function(){
        // get element fro the html
        let div = document.getElementById('informationOfSales');
        // create an elemnt inside html
        let paragraph =document.createElement('p');
        // get the child from the parent
        div.appendChild(paragraph);
        paragraph.textContent= this.City;
        

        let ulHours =document.createElement('ul');
        div.appendChild(ulHours);

        let list =document.createElement('li');
        ulHours.appendChild(list);
        list.textContent=hours;
        
    }
    
}
console.log(Seattle);


// random a function to generate a random number of customer per hour.

function randomGenerate(min, max){

return Math.floor(Math.random()*(max-min+1)+min)

}


console.log(RandomGenerate(23, 65));

let Tokyo = {
    min1 : 3,
    max1 : 24,
    AvgCookie1 : 1.2,
}
function randomGenerate1(min1, max1){

    return Math.floor(Math.random()*(max1-min1+1)+min1)
    
    }

console.log(RandomGenerate1(3, 24));

let Dubai = {
    min2 : 11,
    max2 : 38,
    AvgCookie2: 3.7,
}

function randomGenerate2(min2, max2){

    return Math.floor(Math.random()*(max2-min2+1)+min2)
    
    }

console.log(RandomGenerate2(11, 38));

let Paris ={
    min3:20,
    max3:38,
    AvgCookie3:2.3,
}
function randomGenerate3(min1, max1){

    return Math.floor(Math.random()*(max3-min3+1)+min3)
    
    }

console.log(RandomGenerate(20, 38));

let Lima={
    min4:2,
    max4:16,
    AvgCookie:4.6,
}
function randomGenerate4(min1, max1){

    return Math.floor(Math.random()*(max4-min4+1)+min4)
    
    }

console.log(RandomGenerate4(2, 16));

