let hours = [
    '6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00pm'
]
function randomGenerate(min,max)
{min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1) + min);}

let salesAverge = [];
// constructor
// this will be the creator of my objects


function location(city, min, max, avgKookie) {

    this.city = city;
    this.min= min;
    this.max = max;
    this.avgKookie=avgKookie;
    this.totalCookies=0;

    salesAverge.push(this);


    this.CustomersNumbers=[];
    // method
    this.randomCustomer = function() {
    for (let i = 0; i < hours.length; i++) {
        this.CustomersNumbers.push(randomGenerate(this.min,this.max));
        
    }}

    
}





// for (let index = 0; index < array.length; index++) {
    // const element = array[index];
    
// }


    
}
let location1=new location("Seattle",23,65,6.3);
let location2=new location("Tokyo",3,24,1.2);
let location3=new location("Dubai",11,38,3.7);
let location4=new location("Paris",20,38,2.3);
let location5=new location("Lima",2,16,4.6);

