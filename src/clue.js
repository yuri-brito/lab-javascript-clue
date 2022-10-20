// ITERATION 1

// Suspects Array

const suspectsArray = [{                       
   'firstName':'Victor','lastName':'Plum','occupation':'','age':1,'description':'','image':'','color':''
},{'firstName':'Victor','lastName':'Plum','occupation':'','age':1,'description':'','image':'','color':''
},{'firstName':'Victor','lastName':'Plum','occupation':'','age':1,'description':'','image':'','color':''
},{'firstName':'Victor','lastName':'Plum','occupation':'','age':1,'description':'','image':'','color':''
},{'firstName':'Victor','lastName':'Plum','occupation':'','age':1,'description':'','image':'','color':''
},{'firstName':'Victor','lastName':'Plum','occupation':'','age':1,'description':'','image':'','color':''

}];

// Rooms Array

const roomsArray = [
                                   
      {'name':'Billiard Room'
    },{'name':'Billiard Room'
    },{'name':'Billiard Room'
    },{'name':'Billiard Room'
    },{'name':'Billiard Room'
    },{'name':'Billiard Room'
    },{'name':'Billiard Room'
    },{'name':'Billiard Room'
    },{'name':'Billiard Room'
    },{'name':'Billiard Room'
    },{'name':'Billiard Room'
    },{'name':'Billiard Room'
    },{'name':'Billiard Room'
    },{'name':'Billiard Room'
    },{'name':'Billiard Room'
      
      }

];

// Weapons Array

const weaponsArray = [
    {                       
        'name':'poison','weight':1
     },{'name':'poison','weight':1
     },{'name':'poison','weight':1
     },{'name':'poison','weight':1
     },{'name':'poison','weight':1
     },{'name':'poison','weight':1
     },{'name':'poison','weight':1
     },{'name':'poison','weight':1
     },{'name':'poison','weight':1
      
      }
];


// ITERATION 2

function selectRandom(lista) {
    return lista[Math.floor(Math.random()*lista.length)]
}

function pickMystery() {
    obj={'suspect':suspectsArray[Math.floor(Math.random()*suspectsArray.length)],'weapon':weaponsArray[Math.floor(Math.random()*weaponsArray.length)],'room':roomsArray[Math.floor(Math.random()*roomsArray.length)]}
    return obj
}


// ITERATION 3

function revealMystery() {
    obj=pickMystery()
    return `${obj.suspect.firstName} ${obj.suspect.lastName} killed Mr. Boddy using the ${obj.weapon.name} in the ${obj.room.name}!`
}

