var friends = new Object();
friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: 3115678909,
    address: ['Av Calle 100', '30-29', 'Suba'],
    };
friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: 3209878909,
    address: ['Av Juan de Aliaga', '572', 'apto 502', 'Magdalena del mar'],
    };
friends.David = {
    firstName: "David",
    lastName: "Cespedes",
    number: 3003124034,
    address: ['Calle 23Abis', '84A-95', 'Modelia'],
    };

var list = function (friends) {
    for (var friends in friends) {
        console.log(friends);
        };
    };
    
var search = function (name) {
    for (var key in friends) {
    if (friends[key].firstName === name) {
    console.log(friends[key]);
    return friends[key];
    };
    };
    };
    search("Steve");