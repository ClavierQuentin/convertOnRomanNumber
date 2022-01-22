function uniteEnRomain(n){
  if(n >= 1 && n <= 3){
    unitesEnRomain = "";
    for(i = 0; i < n; i += 1){
      unitesEnRomain = unitesEnRomain + "I";
    }
    n = unitesEnRomain;
  }
  if(n === 4){
    n = "IV";
  }
  if(n === 5){
    n = "V";
  }
  if(n > 5 && n < 9){
    unitesEnRomain = "";
    for(i = 5; i < n; i += 1){
      unitesEnRomain = unitesEnRomain + "I";
      cinqEnRomain = "V" + unitesEnRomain;
    }
    n = cinqEnRomain;
  }
  if(n === 9){
    n = "IX";
  }
  if(n === 0){
    n = "";
  }
  return n;
}
function dizaineEnRomain(n){
  if(n === 0){
    n = "";
  }
  if(n >= 1 && n <= 3){
    dizainesEnRomain = "";
    for(i = 0; i < n; i += 1){
      dizainesEnRomain = dizainesEnRomain + "X";
    }
    n = dizainesEnRomain;
  }
  if(n === 4){
    n = "XL";
  }
  if(n === 5){
    n = "L";
  }
  if(n > 5 && n < 9){
    dixEnRomain = "";
    for(i = 5; i < n; i += 1){
      dixEnRomain = dixEnRomain + "X";
      cinquantaineEnRomain = "L" + dixEnRomain;
    }
    n = cinquantaineEnRomain;
  }
  if(n === 9){
    n = "XC";
  }
  return n;
}

function centaineEnRomain(n){
  if(n === 0){
    n = "";
  }
  if(n >= 1 && n <= 3){
    centainesEnRomain = "";
    for(i = 0; i < n; i += 1){
      centainesEnRomain = centainesEnRomain + "C";
    }
    n = centainesEnRomain;
  }
  if(n === 4){
    n = "CD";
  }
  if(n === 5){
    n = "D";
  }
  if(n > 5 && n < 9){
    centainesEnRomain = "";
    for(i = 5; i < n; i += 1){
      centainesEnRomain = centainesEnRomain + "C";
      cinqCentEnRomain = "D" + centainesEnRomain;
    }
    n = cinqCentEnRomain;
  }
  if(n === 9){
    n = "CM";
  }
  return n;
}

function millierEnRomain(n){
  if(n === 0){
    n = "";
  }
  if(n >= 1 && n <= 9){
    milliersEnRomain = "";
    for(i = 0; i < n; i += 1){
      milliersEnRomain = milliersEnRomain + "M";
    }
    n = milliersEnRomain;
  }
  return n;
}

function calculerNombreEnRomain(nombre){
// let nombre = 0;
// for(y = nombre; y < 9999; y = y + 1){
//   nombre += 1

  let unite = nombre % 10 ;

  let dizaines = ((nombre - unite) / 10) % 10
 
  let centaine = ((nombre - unite -(dizaines * 10)) / 100) % 10;
  let millier = (nombre -(centaine * 100)- (dizaines * 10) - unite) / 1000 ;


  // alert(nombre + " équivaut à " + millierEnRomain(millier) + centaineEnRomain(centaine) + dizaineEnRomain(dizaines) + uniteEnRomain(unite))
  document.getElementById('p1').innerHTML = nombre //+ " ==> " + millierEnRomain(millier) + centaineEnRomain(centaine) + dizaineEnRomain(dizaines) + uniteEnRomain(unite);
  document.getElementById('p2').innerHTML = " ==>" + " " + millierEnRomain(millier) + centaineEnRomain(centaine) + dizaineEnRomain(dizaines) + uniteEnRomain(unite)
  
// }
}
const button = document.getElementById('button-addon2')
button.addEventListener('click', () => {
  let nombre = document.getElementById('nombre')
  nombre = nombre.value
  calculerNombreEnRomain(nombre)

})
//let nombreInvite = prompt("Ecrivez un nombre compris entre 1 et 3999");
//calculerNombreEnRomain(4);
//document.getElementById('p1').innerHTML = calculerNombreEnRomain();




