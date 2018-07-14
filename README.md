# The-Weather-App
Asynchronous nonblocking program Using Google API and Weather API


# The-Weather-App

A sample app to get the weaher report using Google API to manipulate the ZIP code and use it for getting weather report using weather API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
step 1: npm install 
step 2: npm start

### Prerequisites

Can go for paid Google API key

```
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

//Geocode

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
if(errorMessage){
    console.log(errorMessage);
}else{
    console.log(results.address);
    weather.getWeather(results.Lattitude,results.Longitude,(errorMessage,weatherResults)=>{
        if(errorMessage){
            console.log(errorMessage);
        }else{
            console.log(`It's cuurently ${weatherResults.temperature} F but feels like ${weatherResults.apparentTemperature} F`);
        }
        });
}
});

//Promise chaining using Axios

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

```

## Built With

* https://www.npmjs.com/package/yargs
* https://www.npmjs.com/package/request
* https://www.npmjs.com/package/axios


## Authors

* **Deepak Kumar** - *Initial work* - [deepakkumar98355](https://github.com/deepakkumar98355)


## Further Enhancement

* Future work will be to add a UI to render API requests.


