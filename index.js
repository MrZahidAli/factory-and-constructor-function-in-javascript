//factory function 

function factory(hi){       //use camel case
    return{                 //need to return object
        hi,                 //equal to hi:hi
        name:'zahid',
        sum(){              //defining fuction
            console.log('this is methoid in factory function');
        }
    };
}
let newFactory = factory(1);        //no need new keyword to make new object
newFactory.sum();

//constructor function
function Circle(name){
    this.name = name,   //use this keyword instead of returning object
    this.sum = function(){
        console.log('this is method in constructor function');
    }
}
let newCircle = new Circle('zahid');    //use new keyword to make new object
newCircle.sum();
