
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
    showCustomers();
  });
    function showCustomers() {

        var database = firebase.database();

        var ambulanceRef = database.ref("ambulanceAppUsers"); 
        ambulanceRef.once("value", function(snapshot) {
          var ambulanceAppUsers= snapshot.val();

    

    
          let placeholder =document.querySelector("#customer-data-output")

          let out ="";

    

    for (var key in ambulanceAppUsers) {
      var user = ambulanceAppUsers[key];

      

    


      out +=`
      <tr>
      <td>${user.phone_number}</td>
      <td>${user.user_email}</td>
      <td><button>Email</button></td>
     
      


      </tr>


      
      `;
   
      
     
      
    };

    
    placeholder.innerHTML=out;
     
   
  }
        )
    }