

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
    showBooking();
  });
    function showBooking() {

        var database = firebase.database();

        var bookingRef = database.ref("bookings"); 
        bookingRef.once("value", function(snapshot) {
          var bookings = snapshot.val();


    

    
          let placeholderReport =document.querySelector("#booking-data")

          let out ="";

    

    for (var key in bookings) {
      var booking = bookings[key];

      //console.log(ambulance.model)

    


      out +=`
      <tr>
      <td>${booking.user_location}</td>
      <td>${booking.user_destination}</td>
      <td><button onclick=" console.log('Hi')">Edit</button></td>
      


      </tr>


      
      `;
   
      
     
      
    };

    
    placeholderReport.innerHTML=out;
     
   
  }
        )
    }

   





 


  