const request=require('request');

var geocodeAddress= (address,callback) =>{

    var encodedAddress=encodeURIComponent(address);
    
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json:true
    },(error,response,body)=>{
        if(error){
            callback('unable to connect to Google Servers');
            //console.log('unable to connect to Google Servers');
        }else if(body.status==='ZERO_RESULTS'){
            callback('unable to find the address');
            //console.log('unable to find the address');
        }else if(body.status==='OK')
        {
            callback(undefined,{
                address:body.results[0].formatted_address,
                Lattitude:body.results[0].geometry.location.lat,
                Longitude:body.results[0].geometry.location.lng
            });
        //console.log(JSON.stringify(body,undefined,2));
        //console.log(JSON.stringify(response,undefined,2))
       /*  console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`); 
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);   */
        }
    }); 
};

module.exports.geocodeAddress=geocodeAddress;