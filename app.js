const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
  ]

 let  ovejasRojas = []

for (var i = 0; i < ovejas.length; i++)     {
    if (ovejas[i].color === "rojo") {
        ovejasRojas.push(ovejas[i].color)
    }
}

console.log(ovejasRojas)