<?php include 'header.php'; ?>

<h1>Page 2 - Conditions</h1>

<?php
$age = random_int(20, 50); //vieux si plus de 34
$salary = random_int(10000, 50000); //riche si plus de 40k

print $age;

if ($age > 34) 
{
    print ("<p>Tu es adulte</p>");
} 
else 
{
    print ("<p>Tu es jeune</p>");
}

//Exo

print ($salary);

if ($age > 34) 
{
    if ($salary > 40000) 
    {
        print("<p>Tu es vieux et riche (BOooohooo)</p>");
    }
} 
else 
{
    if ($salary > 40000) 
    {
        print("<p>Tu es jeune et riche (Yeeessss)</p>");
    } 
    else 
    {
        print("<p>Tu es jeune et Pauvre (Nooooo)</p>");
    }
}

$image_1 = "ressources/trounoir3.jpg";
$image_2 = "ressources/trounoir2.jpg";
//Si on a plus de 25 ans = afficher la 1 sinon la 2

// <img src="" alt="">
if ($age > 25)
{
    print("<p><img src='$image_1' alt='' width='100px' height='100px'></p>");
}
else
{
    print("<p><img src='$image_2' alt='' width='100px' height='100px'></p>");
}

?>


<?php
include 'footer.php';
