
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

      var database = firebase.database();

        var ambulanceRef = database.ref("ambulances"); 
        ambulanceRef.once("value", function(snapshot) {
          var ambulances = snapshot.val();

          //set the total number of ambulances on Dashboard

          var numberOfAmbulances = Object.keys(ambulances).length;

          //console.log(numberOfAmbulances)
        
          
          let ambulanceTotalNumber = '';

          ambulanceTotalNumber += `
          <span>${numberOfAmbulances}</span>
          
          `

          let placeholderAmbulanceNumber=document.querySelector('#total-ambulance');

          placeholderAmbulanceNumber.innerHTML=ambulanceTotalNumber;
        })

        //get total bookings
        var bookingRef = database.ref("bookings"); 
        bookingRef.once("value", function(snapshot) {
          var bookings = snapshot.val();

          var totalBookings = Object.keys(bookings).length;

          //console.log(numberOfAmbulances)
        
          
          let bookingTotalNumber = '';

          bookingTotalNumber += `
          ${totalBookings}
          
          `

          let placeholderBookingsNumber=document.querySelector('#total-bookings');

          placeholderBookingsNumber.innerHTML=bookingTotalNumber;

        })