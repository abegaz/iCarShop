
<html>
    <head>
        <script src="https://www.gstatic.com/firebasejs/5.5.5/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/5.5.5/firebase-firestore.js"></script>
        <link rel="stylesheet" href="styles.css">
    </head>

  <link rel="stylesheet" href="addCarsStyle.css">
  <form id="add-car-form">

    <label for="vin">Vin Number</label>
    <input type="text" id="vin" name="vin" placeholder="Enter Vin...">

    <label for="make">Make</label>
    <input type="text" id="make" name="make" placeholder="Enter Make...">

    <label for="model">Model</label>
    <input type="text" id="model" name="model" placeholder="Enter Model...">

    <label for="year">Year</label>
    <input type="text" id="year" name="year" placeholder="Enter Year...">

    <label for="body_type">Body Type</label>
    <input type="text" id="body_type" name="body_type" placeholder="Enter Body Type...">

    <label for="condition">Condition</label>
    <select id="condition" name="condition">
      <option value="New">New</option>
      <option value="Used">Used</option>
    </select>

    <label for="price">Price</label>
    <input type="text" id="price" name="price" placeholder="Enter Price...">

    <label for="mileage">Mileage</label>
    <input type="text" id="mileage" name="mileage" placeholder="Enter Mileage...">

    <label for="interior_color">Interior Color</label>
    <input type="text" id="interior_color" name="interior_color" placeholder="Enter Interior Color...">

    <label for="exterior_color">Exterior Color</label>
    <input type="text" id="exterior_color" name="exterior_color" placeholder="Enter Exterior Color...">

    <button type="submit" value="Submit" name="submit">Submit</button>

</form>

        <script>
            // Initialize Firebase
            var config = {
            apiKey: "AIzaSyDJaYEj-kXr2n16ri6w1OahGdEig9CSF4U",
            authDomain: "carprojectv1.firebaseapp.com",
            databaseURL: "https://carprojectv1.firebaseio.com",
            projectId: "carprojectv1",
            storageBucket: "carprojectv1.appspot.com",
            messagingSenderId: "420071657778"
                        }
            firebase.initializeApp(config);
            const db = firebase.firestore();
            db.settings({ timestampsInSnapshots: true })
        </script>
        <script src="CarApp.js"></script>
</html>

<!-- <?php
/*  
if (isset($_POST['submit'])){
    $hostname ='localhost';
    $uname = 'root';
    $pass = '';
    $dbname = 'cardb';
    $connect = mysqli_connect($hostname,$uname,$pass,$dbname);
    $vin = $_POST['vin'];
    $make = $_POST['make'];
    $model = $_POST['model'];
    $year = $_POST['year'];
    $body_type = $_POST['body_type'];
    $condition = $_POST['condition'];
    $price = $_POST['price'];
    $mileage = $_POST['mileage'];
    $interior_color = $_POST['interior_color'];
    $exterior_color = $_POST['exterior_color'];
    $query1 = "INSERT `vehicles` SET `vin`='$vin', `make`='$make',`model`='$model',`year`='$year',`body`='$body_type',`price`='$price',`mileage`='$mileage',`interior_color`='$interior_color',`exterior_color`='$exterior_color',`used`='$condition'";
    $result=mysqli_query($connect,$query1);
    if ($result)
    {
      echo "Data Uploaded";
    }
    else
    {
      echo '<p style = "color: red; text-align: center"> Invalid submission</p>';
    }
    mysqli_close($connect);
 } 

 */
 
?> -->
