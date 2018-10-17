
<html>

  <link rel="stylesheet" href="style.css">
  <form method="POST">

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
      <option value="new">New</option>
      <option value="used">Used</option>
    </select>

    <label for="price">Price</label>
    <input type="text" id="price" name="price" placeholder="Enter Price...">

    <label for="year">Mileage</label>
    <input type="text" id="mileage" name="mileage" placeholder="Enter Mileage...">

    <label for="interior_color">Interior Color</label>
    <input type="text" id="interior_color" name="interior_color" placeholder="Enter Interior Color...">

    <label for="exterior_color">Exterior Color</label>
    <input type="text" id="exterior_color" name="exterior_color" placeholder="Enter Exterior Color...">

    <input type="submit" value="Submit" name="submit">

</form>
</html>

<?php
  
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
      echo "Data Not Uploaded";
    }
    mysqli_close($connect);
 }
?>