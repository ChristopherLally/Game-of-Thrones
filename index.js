alert("White Walkers are attacking the wall, Jon Snow and the Knight's Watch must defend humanity");
var weapon = prompt("You search for a weapon, you can choose a sword, a dagger, or a flaming arrow");
var randomnumber = Math.round(Math.random());
alert("You attack the White Walker with your" + " " + weapon);

if( randomnumber === 0 ){
  alert("Your shot misses and you are killed");
  
}
  else if (randomnumber === 1 );
{
  alert("You kill the White Walker with your" + " " + weapon, "continuing the fight");
  
}

  