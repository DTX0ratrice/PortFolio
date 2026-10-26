<?php include 'header.php'; ?>

<h1>Hello World !!</h1>

<?php 
print"<p>hello world by print and paragraphe<p>"; 
print("hello world by print"); 
echo "Hello World by Echo";

$name = "Richnou";
$age = 24; 

echo $name;
echo " ";
echo $age;

echo "$name $age";
echo "<p>$name $age<p>";
echo '<p>$name $age<p>';
echo "<p>" . $name . " " . $age . "<p>";

?>

<?php include 'footer.php'; 
