<!DOCTYPE html>
<html lang="en">
<head>
	<title>View Inventory | iCarShop</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/perfect-scrollbar/perfect-scrollbar.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}
</style>
</head>
<body>

<div class="topnav">
  <a class="HeroPage.html" href="HeroPage.html">Home</a>
  <a href="CarDataEntryView.html">ADMIN</a>
  
</div>
	
	<div class="limiter">
		<div class="container-table100">
			<div class="wrap-table100">
				<div class="table100">
					<table>
						<thead>
							<tr class="table100-head">
								<th>VIN</th>
								<th>Make</th>
								<th>Model</th>
								<th>Year</th>
								<th>Body</th>
								<th>Price</th>
								<th>Mileage</th>
								<th>Interior Color</th>
								<th>Exterior Color</th>
								<th>Condition</th>
							</tr>
						</thead>
						<?php
						$conn = mysqli_connect("localhost", "root","","cardb");
						if ($conn -> connect_error)
						{
							die("Connection failed:". $conn-> connect_error);
						}

						$sql = "SELECT * FROM vehicles";
						$result = $conn-> query($sql);

						if ($result -> num_rows > 0)
						{
							while ($row = $result-> fetch_assoc())
							{
								echo "<tr><td>". $row["vin"]."</td><td>". $row["make"]."</td><td>". $row["model"]."</td><td>". $row["year"]."</td><td>". $row["body"]."</td><td>". $row["price"]."</td><td>". $row["mileage"]."</td><td>". $row["interior_color"]."</td><td>". $row["exterior_color"]."</td><td>". $row["used"]."</td></tr>";
							}
							echo "</table>";
						}
						else
						{
							echo "0 results";
						}
						?>
						<tbody>
								
								
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	
	
  
</div>


	

<!--===============================================================================================-->	
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>

</body>
</html>
