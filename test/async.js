/* console.log('starting');

setTimeout(()=>{
    console.log('inside of callback')
},2000) ;

setTimeout(()=>{
    console.log('inside of callback 1')
},3000) ;

console.log('ending');  */

//callback example
/* var getuser =(id,callback)=>{
var user={
    id:id,
    name:'deepak'
};
callback(user);
};

getuser(21,(userObject)=>{
console.log(userObject);
}); */

//callback example using delay

/* var getUser=(id,callback)=>{
    var user={
        id:id,
        name:'Deepak'
    }; 
    setTimeout(()=>{
        callback(user);
    },3000); 
};

getUser(21,(userObject)=>{
    console.log(userObject);
}); */

//promises

/* var somePromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('it worked');
        //reject('Unable to fulfill Promise');
    },2500);
    
});

somePromise.then(((message)=>{
    console.log('Success:',message);
},(errorMessage)=>{
    console.log('Error: ',errorMessage);
})); */

/* var asyncAdd=(a,b) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a=== 'number' && typeof b=== 'number'){
                resolve(a+b);
            }else{
                reject('Argumnets must be number'); 
            }
        },1500);
    });
};

asyncAdd(90,'7')
    .then(
        (res)=>{
            console.log('Result: ',res);
            return asyncAdd(res,30); 
        },)
        .then((res)=>{
            console.log(res);
        }).catch((errorMessage)=>{
            console.log(errorMessage);
        }); */


//advanced promise

// const request = require('request');

// var geocodeAddress= (address) =>{
//     return new Promise((resolve,reject)=>{

//         var encodedAddress=encodeURIComponent(address);
    
//         request({
//             url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
//             json:true
//         },(error,response,body)=>{
//             if(error){
//                 reject('unable to connect to Google Servers');
//                 //console.log('unable to connect to Google Servers');
//             }else if(body.status==='ZERO_RESULTS'){
//                 reject('unable to find the address');
//                 //console.log('unable to find the address');
//             }else if(body.status==='OK')
//             {
//                 resolve({
//                     address:body.results[0].formatted_address,
//                     Lattitude:body.results[0].geometry.location.lat,
//                     Longitude:body.results[0].geometry.location.lng
//                 });
//             //console.log(JSON.stringify(body,undefined,2));
//             //console.log(JSON.stringify(response,undefined,2))
//            /*  console.log(`Address: ${body.results[0].formatted_address}`);
//             console.log(`Latitude: ${body.results[0].geometry.location.lat}`); 
//             console.log(`Longitude: ${body.results[0].geometry.location.lng}`);   */
//             }
//         }); 

//     });
// };

// geocodeAddress('827009').then((location)=>{
//     console.log(JSON.stringify(location,undefined,2));
// },(errorMessage)=>{
//     console.log(errorMessage);
// });
