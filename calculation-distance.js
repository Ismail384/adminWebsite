
const coordinates=[
    {name:'Nairobi City Centre',
     Latitude: -1.286389,
     Longitude: 36.817223
    }, 
    {
        
    name:'Westlands',
    Latitude: -1.263375,
    Longitude: 36.802489
    },
    {
    name:'Karen',
    Latitude: -1.324455,
    Longitude: 36.707853

    },
    {
    name: 'Eastleigh ',
    Latitude: -1.277549,
    Longitude: 36.842217
    },
    {
    
    name: 'Kileleshwa',
    Latitude: -1.283947,
    Longitude: 36.768563
    }
]

let values=Object.entries(coordinates);

//use this function to assign a random location from these five to each driver who goes online
function getOneObjectFromArray(coordinatesArray){
    itemIndex= Math.floor(Math.random() * 4);

    return coordinatesArray[itemIndex];

}

let returnedObject= getOneObjectFromArray(coordinates);

console.log(returnedObject.name)


//calculate the distance in KM between all these points  and another point of reference

const newArray=[];

coordinates.forEach((objectItem)=>{
    //user location
    let userLatitude= -1.283947;
    let userLongitude= 36.768563;
    let currentLongitude= objectItem.Longitude;
    let currentLatitude= objectItem.Latitude;

    let distance= calulateDistance(userLatitude, userLongitude, currentLatitude, currentLongitude)

      
      newArray.push(distance)
     
    }
)

console.log(newArray);

function calulateDistance(userLatitude, userLongitude, currentLatitude, currentLongitude){
    const earthRadiusKm = 6371; // Radius of the Earth in kilometers
    const dLat = degToRad(userLatitude - currentLatitude);
    const dLon = degToRad(userLongitude - currentLongitude);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(userLatitude)) * Math.cos(degToRad(currentLatitude)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = earthRadiusKm * c;
  
    return distance.toFixed(3);
  }

  function degToRad(degrees) {
    return degrees * (Math.PI / 180);
  }