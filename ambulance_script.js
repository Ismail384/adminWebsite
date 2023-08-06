

src="https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js"
 src="https://www.gstatic.com/firebasejs/8.7.0/firebase-database.js"


    const firebaseConfig = {
        apiKey: "AIzaSyB9igaRoReRWQ3bKgVw0OQujrxp-Nw8OFk",
        authDomain: "myproject-cb9de.firebaseapp.com",
        databaseURL: "https://myproject-cb9de-default-rtdb.firebaseio.com",
        projectId: "myproject-cb9de",
        storageBucket: "myproject-cb9de.appspot.com",
        messagingSenderId: "962828779200",
        appId: "1:962828779200:web:f09385763b6c227b643725"
      };
    
      firebase.initializeApp(firebaseConfig);
    
      var database = firebase.database();
    
    
      



window.addEventListener('DOMContentLoaded', function() {
    showAmbulances();
  });
    function showAmbulances() {

        var database = firebase.database();

        var ambulanceRef = database.ref("ambulances"); 
        ambulanceRef.once("value", function(snapshot) {
          var ambulances = snapshot.val();


    

    
          let placeholder =document.querySelector("#ambulance-data-output")

          let out ="";

    

    for (var key in ambulances) {
      var ambulance = ambulances[key];

      console.log(ambulance.model)

    


      out +=`
      <tr>
      <td>${ambulance.model}</td>
      <td>${ambulance.numberplate}</td>
      <td><button onclick=" console.log('Hi')">Edit</button></td>
      


      </tr>


      
      `;
   
      
     
      
    };

    
    placeholder.innerHTML=out;
     
   
  }
        )
    }

    document.getElementById('ambulance-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
      
        var modelInput = document.getElementById('model-input');
        var numberPlateInput = document.getElementById('numberplate-input');
      
        // Get the values from the input fields
        var model = modelInput.value;
        var numberPlate = numberPlateInput.value;
      
        // Add the ambulance to the database
        var database = firebase.database();
        var ambulancesRef = database.ref('ambulances');
      
        var newAmbulanceRef = ambulancesRef.push();
        newAmbulanceRef.set({
          model: model,
          numberplate: numberPlate
        });
      
        // Clear the input fields
        modelInput.value = '';
        numberPlateInput.value = '';
      
        // Refresh the ambulance table
        showAmbulances();
      });





 


  