<?php
    if(isset($_POST['submit'])) {
        $mailto = "ananye.techexactly@gmail.com";  //My email address
        //getting customer data
        $name = $_POST['name']; //getting customer name
        $fromEmail = $_POST['email']; //getting customer email
        $address = $_POST['address']; 
        $phone = $_POST['phone']; //getting customer Phome number 
        $feedback = $_POST['feedback']; 
        $subject = 'user data'; 
        
        
        //Email body I will receive
        $message = '
          <html>
            <body>
                <h2>User Feedback</h2>
                <ul>
                  <li>Name : '.$name.'</li>
                  <li>Phone Number : '.$phone.'</li>
                  <li>From Email : '.$fromEmail.'</li>
                  <li>Address : '.$address.'</li>
                  <li>Feedback : '.$feedback.'</li>
                </ul>
            </body>
          </html>';


        //Email headers
        // Client email, I will receive
        $headers = 'MIME-Version: 1.0' . "\n";
        $headers = 'Content-type: text/html; charset=iso-8859-1' . "\n";
        $headers = "From: " . $fromEmail;

        // This will receive client
        // $headers2 = "From: " . $mailto; 

        // This email sent to My address
        $result1 = mail($mailto, $subject, $message, $headers);

        //This confirmation email to client
       //  $result2 = mail($fromEmail, $subject2, $message2, $headers2);
       


        //Checking if Mails sent successfully
        if (isset($result1)) {
           echo "<script>
                   alert('Your Message was sent Successfully!');
                   header('Location : http://www.kiddiezevents.co.uk/');
                 </script>";
        } else {
           echo "<script>
                     alert('Sorry! Message was not sent, Try again Later.');
                 </script>";
        }
       //  if ($result1 && $result2) {
       //    $success = "Your Message was sent Successfully!";
       //  } else {
       //    $failed = "Sorry! Message was not sent, Try again Later.";
       //  }
       
      }
?>
        
       
