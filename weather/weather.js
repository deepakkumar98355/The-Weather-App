const request = require('request');

var getWeather = (lat,lang,callback)=>{

    request({
        url:`https://api.darksky.net/forecast/679cbf20ea94c5fea94356bf482321c7/${lat},${lang}`,
        json:true
    }, (error,response,body)=>{
        if(!error && response.statusCode===200){
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }
    
    });

};

module.exports.getWeather = getWeather;



