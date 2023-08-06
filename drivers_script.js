


src="https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js"
 src="https://www.gstatic.com/firebasejs/8.7.0/firebase-database.js"
 src="https://www.gstatic.com/firebasejs/8.7.0/firebase-auth.js"


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
      var auth = firebase.auth();
    
    
      



window.addEventListener('DOMContentLoaded', function() {
    showDrivers();
  });
    function showDrivers() {

        var database = firebase.database();

        var driversRef = database.ref("drivers"); 
        driversRef.once("value", function(snapshot) {
    var drivers = snapshot.val();

    console.log(drivers)


    
    let placeholder=document.querySelector("#data-output")

    let out ="";
    

    for (var key in drivers) {
      var driver = drivers[key];

      console.log(driver.driver_name)

//<td><button onclick=" console.log('Hi')">Edit</button></td>
      out +=`
      <tr>
      <td>${driver.driver_name}</td>
      <td>${driver.driver_email}</td>
      <td>${driver.driver_phone}</td>
    
      
      <td><button onclick=" console.log('Hi')">Activate</button></td>
      <td><button onclick=" console.log('Hi')">Deactivate</button></td>
      


      </tr>


      
      `

     
     
      
    }

    
    placeholder.innerHTML=out;
   
  }
        )
    }


      //assigning ambulances to drivers
    var database = firebase.database();

    var ambulanceRef = database.ref("ambulances");
    ambulanceRef.once("value", function(snapshot) {
      var ambulances = snapshot.val();
      var selectElement = document.getElementById("ambulance-select");
  
      for (var key in ambulances) {
        var ambulance = ambulances[key];
        var option = document.createElement("option");
        option.value = key; // Assign the ambulance ID as the option value
        option.textContent = ambulance.numberplate; // Display the number plate as the option text
        selectElement.appendChild(option);
      }
    });

    document.getElementById('driver-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
    
      var nameInput = document.getElementById('name-input');
      var emailInput = document.getElementById('email-input');
      var phoneInput = document.getElementById('phone-input');
      var idInput = document.getElementById('id-input');
      var intialPassword=document.getElementById('intial-password-input');

      var ambulanceSelect = document.getElementById('ambulance-select');
    
      // Get the values from the input fields
      var name = nameInput.value;
      var email = emailInput.value;
      var phone = phoneInput.value;
      var id = idInput.value;
      var password=intialPassword.value;
      var selectedAmbulanceId = ambulanceSelect.value;
    
      // Add the driver to the database
      var database = firebase.database();
      var driversRef = database.ref('drivers');
    
      var newDriverRef = driversRef.push();
      newDriverRef.set({
        driver_name: name,
        driver_email: email,
        driver_phone: phone,
        driver_id: id,
        driver_password:password,
        ambulanceId: selectedAmbulanceId
      })
      .then(() => {
        // Create the driver in Firebase Authentication
        
          auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
            // Continue with any additional logic after authentication is successful
          })
          .catch(error => {
            alert(error.message);})
      });
    
      // Clear the input fields
      nameInput.value = '';
      emailInput.value = '';
      phoneInput.value = '';
      idInput.value = '';
      intialPassword.value='';
    
      // Refresh the drivers table
      showDrivers();
    });