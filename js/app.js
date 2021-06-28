'use strict';
let hours = [
    '6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00pm'
]
function randomGenerate(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // return Math.floor((Math.random() * (max-min)) +min);
    // return 5;
    
}

let location1 = {
    City : 'Seattle',
    min : 23,
    max : 65,
    AvgCookie : 6.3,
    CustomersNumbers :[],
    totalCookies: 0,
    kookiesAverage : [],



    randomCustomer1 : function (){
        for (let i = 0; i < hours.length; i++) {
            // this.CustomersNumbers.push(randomCustomere(this.min,this.max));
           let value= randomGenerate(this.min,this.max);
        //    console.log(value);


            this.CustomersNumbers.push(value);
            let multiply = Math.floor(this.AvgCookie * value) ;

            this.kookiesAverage.push(multiply);
            
        }

    },
    printCookie : function(){
        // get element fro the html
        let div = document.getElementById('informationOfSales');
        // create an elemnt inside html
        let paragraph =document.createElement('p');
        // get the child from the parent
        div.appendChild(paragraph);
        paragraph.textContent= this.City;
        

        let ulHours =document.createElement('ul');
        div.appendChild(ulHours);

        for (let x =0; x< hours.length; x++) {
            this.totalCookies=this.totalCookies +this.CustomersNumbers[x];
        
        let list =document.createElement('li');
        ulHours.appendChild(list);
        list.textContent=hours[x]+this.kookiesAverage[x] + 'cookies';
    }

    let total =document.createElement('li');
    ulHours.appendChild(total);
    total.textContent='Total' + this.totalCookies + 'cookies';
 
    }
    
};
location1.randomCustomer1();
location1.printCookie();
console.log(location1);

// ==========================================================================


// function randomGenerate(min,max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
    // return Math.floor((Math.random() * (max-min)) +min);
    // return 5;
    


let location2 = {
    City : 'Tokyo',
    min : 3,
    max : 24,
    AvgCookie : 1.2,
    CustomersNumbers :[],
    totalCookies: 0,
    kookiesAverage : [],



    randomCustomer1 : function (){
        for (let i = 0; i < hours.length; i++) {
            // this.CustomersNumbers.push(randomCustomere(this.min,this.max));
           let value= randomGenerate(this.min,this.max);
        //    console.log(value);


            this.CustomersNumbers.push(value);
            let multiply = Math.floor(this.AvgCookie * value) ;

            this.kookiesAverage.push(multiply);
            
        }

    },
    printCookie : function(){
        // get element fro the html
        let div = document.getElementById('informationOfSales');
        // create an elemnt inside html
        let paragraph =document.createElement('p');
        // get the child from the parent
        div.appendChild(paragraph);
        paragraph.textContent= this.City;
        

        let ulHours =document.createElement('ul');
        div.appendChild(ulHours);

        for (let x =0; x< hours.length; x++) {
            this.totalCookies=this.totalCookies +this.CustomersNumbers[x];
        
        let list =document.createElement('li');
        ulHours.appendChild(list);
        list.textContent=hours[x]+this.kookiesAverage[x] + 'cookies';
    }

    let total =document.createElement('li');
    ulHours.appendChild(total);
    total.textContent='Total' + this.totalCookies + 'cookies';
 
    }
    
};
location2.randomCustomer1();
location2.printCookie();
console.log(location2);


// ==========================================================================

// function randomGenerate(min,max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
    // return Math.floor((Math.random() * (max-min)) +min);
    // return 5;
    


let location3 = {
    City : 'Dubai',
    min : 11,
    max : 38,
    AvgCookie : 3.7,
    CustomersNumbers :[],
    totalCookies: 0,
    kookiesAverage : [],



    randomCustomer1 : function (){
        for (let i = 0; i < hours.length; i++) {
            // this.CustomersNumbers.push(randomCustomere(this.min,this.max));
           let value= randomGenerate(this.min,this.max);
        //    console.log(value);


            this.CustomersNumbers.push(value);
            let multiply = Math.floor(this.AvgCookie * value) ;

            this.kookiesAverage.push(multiply);
            
        }

    },
    printCookie : function(){
        // get element fro the html
        let div = document.getElementById('informationOfSales');
        // create an elemnt inside html
        let paragraph =document.createElement('p');
        // get the child from the parent
        div.appendChild(paragraph);
        paragraph.textContent= this.City;
        

        let ulHours =document.createElement('ul');
        div.appendChild(ulHours);

        for (let x =0; x< hours.length; x++) {
            this.totalCookies=this.totalCookies +this.CustomersNumbers[x];
        
        let list =document.createElement('li');
        ulHours.appendChild(list);
        list.textContent=hours[x]+this.kookiesAverage[x] + 'cookies';
    }

    let total =document.createElement('li');
    ulHours.appendChild(total);
    total.textContent='Total' + this.totalCookies + 'cookies';
 
    }
    
};
location3.randomCustomer1();
location3.printCookie();
console.log(location3);

// ===================================================================================


// function randomGenerate(min,max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
    // return Math.floor((Math.random() * (max-min)) +min);
    // return 5;
    


let location4 = {
    City : 'Paris',
    min : 20,
    max : 38,
    AvgCookie : 2.3,
    CustomersNumbers :[],
    totalCookies: 0,
    kookiesAverage : [],



    randomCustomer1 : function (){
        for (let i = 0; i < hours.length; i++) {
            // this.CustomersNumbers.push(randomCustomere(this.min,this.max));
           let value= randomGenerate(this.min,this.max);
        //    console.log(value);


            this.CustomersNumbers.push(value);
            let multiply = Math.floor(this.AvgCookie * value) ;

            this.kookiesAverage.push(multiply);
            
        }

    },
    printCookie : function(){
        // get element fro the html
        let div = document.getElementById('informationOfSales');
        // create an elemnt inside html
        let paragraph =document.createElement('p');
        // get the child from the parent
        div.appendChild(paragraph);
        paragraph.textContent= this.City;
        

        let ulHours =document.createElement('ul');
        div.appendChild(ulHours);

        for (let x =0; x< hours.length; x++) {
            this.totalCookies=this.totalCookies +this.CustomersNumbers[x];
        
        let list =document.createElement('li');
        ulHours.appendChild(list);
        list.textContent=hours[x]+this.kookiesAverage[x] + 'cookies';
    }

    let total =document.createElement('li');
    ulHours.appendChild(total);
    total.textContent='Total' + this.totalCookies + 'cookies';
 
    }
    
};
location4.randomCustomer1();
location4.printCookie();
console.log(location4);

// ===================================================================================

// function randomGenerate(min,max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
    // return Math.floor((Math.random() * (max-min)) +min);
    // return 5;
    


let location5 = {
    City : 'Lima',
    min : 2,
    max : 16,
    AvgCookie : 4.6,
    CustomersNumbers :[],
    totalCookies: 0,
    kookiesAverage : [],



    randomCustomer1 : function (){
        for (let i = 0; i < hours.length; i++) {
            // this.CustomersNumbers.push(randomCustomere(this.min,this.max));
           let value= randomGenerate(this.min,this.max);
        //    console.log(value);


            this.CustomersNumbers.push(value);
            let multiply = Math.floor(this.AvgCookie * value) ;

            this.kookiesAverage.push(multiply);
            
        }

    },
    printCookie : function(){
        // get element fro the html
        let div = document.getElementById('informationOfSales');
        // create an elemnt inside html
        let paragraph =document.createElement('p');
        // get the child from the parent
        div.appendChild(paragraph);
        paragraph.textContent= this.City;
        

        let ulHours =document.createElement('ul');
        div.appendChild(ulHours);

        for (let x =0; x< hours.length; x++) {
            this.totalCookies=this.totalCookies +this.CustomersNumbers[x];
        
        let list =document.createElement('li');
        ulHours.appendChild(list);
        list.textContent=hours[x]+this.kookiesAverage[x] + 'cookies';
    }

    let total =document.createElement('li');
    ulHours.appendChild(total);
    total.textContent='Total' + this.totalCookies + 'cookies';
 
    }
    
};
location5.randomCustomer1();
location5.printCookie();
console.log(location5);



// let location2 = {
//     City : 'Tokyo',
//     min : 3,
//     max : 24,
//     AvgCookie : 1.2,
//     CustomersNumbers :[],
//     totalCookies: 0,


//     randomCustomer : function (){
//         for (let i = 0; i < hours.length; i++) {
//             this.CustomersNumbers.push(randomCustomer(this.min,this.max));
            
//         }
//     },
//     printCookie : function(){
//         // get element fro the html
//         let div = document.getElementById('informationOfSales');
//         // create an elemnt inside html
//         let paragraph =document.createElement('p');
//         // get the child from the parent
//         div.appendChild(paragraph);
//         paragraph.textContent= this.City;
        

//         let ulHours =document.createElement('ul');
//         div.appendChild(ulHours);

//         for (let x =0; x< hours.length; x++) {
//             this.totalCookies=this.totalCookies *this.CustomersNumbers[x];
        
//         let list =document.createElement('li');
//         ulHours.appendChild(list);
//         list.textContent=hours[x]+this.CustomersNumbers[x] + 'cookies';
//     }

//     let total =document.createElement('li');
//     ulHours.appendChild(total);
//     total.textContent='Total' + this.totalCookies + 'cookies';
 
//     }
    
// };
// location2.randomCustomer();
// location2.printCookie();




// let location3 = {
//     City : 'Dubai',
//     min : 11,
//     max : 38,
//     AvgCookie : 3.7,
//     CustomersNumbers :[],
//     totalCookies: 0,


//     randomCustomer : function (){
//         for (let i = 0; i < hours.length; i++) {
//             this.CustomersNumbers.push(randomCustomer(this.min,this.max));
            
//         }
//     },
//     printCookie : function(){
//         // get element fro the html
//         let div = document.getElementById('informationOfSales');
//         // create an elemnt inside html
//         let paragraph =document.createElement('p');
//         // get the child from the parent
//         div.appendChild(paragraph);
//         paragraph.textContent= this.City;
        

//         let ulHours =document.createElement('ul');
//         div.appendChild(ulHours);

//         for (let x =0; x< hours.length; x++) {
//             this.totalCookies=this.totalCookies *this.CustomersNumbers[x];
        
//         let list =document.createElement('li');
//         ulHours.appendChild(list);
//         list.textContent=hours[x]+this.CustomersNumbers[x] + 'cookies';
//     }

//     let total =document.createElement('li');
//     ulHours.appendChild(total);
//     total.textContent='Total' + this.totalCookies + 'cookies';
 
//     }
    
// };
// location3.randomCustomer();
// location3.printCookie();




// let location4 = {
//     City : 'Paris',
//     min : 20,
//     max : 38,
//     AvgCookie : 2.3,
//     CustomersNumbers :[],
//     totalCookies: 0,


//     randomCustomer : function (){
//         for (let i = 0; i < hours.length; i++) {
//             this.CustomersNumbers.push(randomCustomer(this.min,this.max));
            
//         }
//     },
//     printCookie : function(){
//         // get element fro the html
//         let div = document.getElementById('informationOfSales');
//         // create an elemnt inside html
//         let paragraph =document.createElement('p');
//         // get the child from the parent
//         div.appendChild(paragraph);
//         paragraph.textContent= this.City;
        

//         let ulHours =document.createElement('ul');
//         div.appendChild(ulHours);

//         for (let x =0; x< hours.length; x++) {
//             this.totalCookies=this.totalCookies *this.CustomersNumbers[x];
        
//         let list =document.createElement('li');
//         ulHours.appendChild(list);
//         list.textContent=hours[x]+this.CustomersNumbers[x] + 'cookies';
//     }

//     let total =document.createElement('li');
//     ulHours.appendChild(total);
//     total.textContent='Total' + this.totalCookies + 'cookies';
 
//     }
    
// };
// location4.randomCustomer();
// location4.printCookie();




// let location5 = {
//     City : 'Lima',
//     min : 2,
//     max : 16,
//     AvgCookie : 4.6,
//     CustomersNumbers :[],
//     totalCookies: 0,


//     randomCustomer : function (){
//         for (let i = 0; i < hours.length; i++) {
//             this.CustomersNumbers.push(randomCustomer(this.min,this.max));
            
//         }
//     },
//     printCookie : function(){
//         // get element fro the html
//         let div = document.getElementById('informationOfSales');
//         // create an elemnt inside html
//         let paragraph =document.createElement('p');
//         // get the child from the parent
//         div.appendChild(paragraph);
//         paragraph.textContent= this.City;
        

//         let ulHours =document.createElement('ul');
//         div.appendChild(ulHours);

//         for (let x =0; x< hours.length; x++) {
//             this.totalCookies=this.totalCookies *this.CustomersNumbers[x];
        
//         let list =document.createElement('li');
//         ulHours.appendChild(list);
//         list.textContent=hours[x]+this.CustomersNumbers[x] + 'cookies';
//     }

//     let total =document.createElement('li');
//     ulHours.appendChild(total);
//     total.textContent='Total' + this.totalCookies + 'cookies';
 
//     }
    
// };
// location5.randomCustomer();
// location5.printCookie();








// random a function to generate a random number of customer per hour.

// function randomGenerate(min, max){

// return Math.floor(Math.random()*(max-min+1)+min)

// }


// console.log(RandomGenerate(23, 65));

// let Tokyo = {
//     min1 : 3,
//     max1 : 24,
//     AvgCookie1 : 1.2,
// }
// function randomGenerate1(min1, max1){

//     return Math.floor(Math.random()*(max1-min1+1)+min1)
    
//     }

// console.log(RandomGenerate1(3, 24));

// let Dubai = {
//     min2 : 11,
//     max2 : 38,
//     AvgCookie2: 3.7,
// }

// function randomGenerate2(min2, max2){

//     return Math.floor(Math.random()*(max2-min2+1)+min2)
    
//     }

// console.log(RandomGenerate2(11, 38));

// let Paris ={
//     min3:20,
//     max3:38,
//     AvgCookie3:2.3,
// }
// function randomGenerate3(min1, max1){

//     return Math.floor(Math.random()*(max3-min3+1)+min3)
    
//     }

// console.log(RandomGenerate(20, 38));

// let Lima={
//     min4:2,
//     max4:16,
//     AvgCookie:4.6,
// }
// function randomGenerate4(min1, max1){

//     return Math.floor(Math.random()*(max4-min4+1)+min4)
    
//     }

// console.log(RandomGenerate4(2, 16));

