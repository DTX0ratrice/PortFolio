<?php include 'header.php'; ?>

<h1>Page 3 - Boucles</h1>

<?php
for ($i = 0; $i<4; $i++)
{
    print $i;
}

//la même avec un while 

print ('<p> </p>');

$i = 0;
while ($i < 4)
{
    print($i);
    $i++;
}

print ('<p> </p>');

//la même avec un do while
$k = 0;
do 
{
    print $k;
    $k++;
}
while ($k < 4);
//afficher les nombres impairs entre 33 et 11
// dans une table
//colonne 1 = nombre
//colonne 2 = mult 2
//colonne 3 = mult 3
//table, thead, tbody, tr, td, th

//correction
print ("<p> </p>");
?>

<table border="1"
       <thead>
        <tr>
            <td>Nombre</td>
            <td>Double</td>
            <td>Triple</td>
        </tr>
       </thead>
       <tbody>
           <?php
           for ($i = 33; $i >=11; $i-=2)
           {
                $double = $i*2;
                $triple = $i*3;
                print("<tr>"
                        . "<td>$i</td>"
                        . "<td>$double</td>"
                        . "<td>$triple</td>"
                        . "</tr>");
            }
print '</table>';
           ?>
       </tbody>

<?php
//array, list, tableau
$numbers = [12, 34, 89, 3];

print ("<p> </p>");

print($numbers[1]);

print ("<p> </p>");

//vérifier l'existence d'une valeur
if (in_array(9, $numbers))
{
    echo ("Oui");
}

print ("<p> </p>");

print_r($numbers); //debug 
print ("<p> </p>");
//Exo : afficher tous les nombres du tableau

for ($i=0; $i<count($numbers); $i++)
{
    print $numbers[$i];
    print (" ");
}

print ("<p> </p>");

foreach ($numbers as $number)
{
    print($number . " ");
}

print ("<p> </p>");

$images = [
    "ressources/trounoir.jpg",
    "ressources/trounoir2.jpg",
    "ressources/trounoir3.jpg",
    "ressources/limuletempest3.jpg"
];

//exo afficher toutes les images


for ($i = 0; $i<count($images); $i++)
{
    print("<img src='$images[$i]' alt='' width='100px' height='100px'>");
    print ("<p> </p>");
}

foreach ($images as $img)
{
    print ("<img src='$img' alt='' width='100px' height='100px'>");
    print ("<p> </p>");
}

?>

<?php include 'footer.php';
