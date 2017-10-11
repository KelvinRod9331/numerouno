var fs = require('fs');
var readline = require('readline')
var options = "List, Show [ID#], Reserve [ID#], Occupancy n max, Search Amenity, Add, Save, Delete,"
// var settings = 'change MaxOccupancy, change Amenities, change Price, change Location'

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f');
}


var rooms;

fs.readFile('AirBnBRooms.json', (err, data) => {
    if (err) throw err;
    rooms = JSON.parse(data);

});



// make the string exactly as long as len
function padTo(str, len) {
    if (str.length > len) {
        return str.slice(0, len - 3) + '...'
    } else {
        while (str.length < len) {
            str += ' '
        }
        return str;
    }
}

// make the string exactly as long as len
function padLeft(str, len) {
    var money = str
    if (money.length > len) {
        return money.slice(0, len - 3) + '...'
    } else {
        while (money.length < len) {
            money = ' ' + money
        }
        return money;
    }
}

function toMoney(num) {
    return '$' + num.toString()
}

function list(callback) {
    console.log(
        padLeft('ID', 2),
        '...',
        padTo('Address', 30), 
        ' ', 
        padLeft('Price', 8)
    );
    for (var i = 0; i < rooms.length; i++) {
        if (callback(rooms[i])) {
            var counter = i + 1;
            console.log(
                padLeft(counter.toString(), 2),
                '...',
                padTo(rooms[i].location, 30), 
                ' ', 
                padLeft(toMoney(rooms[i].price), 8)
            );
        }
    }
}


function bulletPoints(list) {
    return '\n - ' + list.join('\n - ')
}

function showDetails(n) {
    var room = rooms[n]
    console.log('Details of property #' + (n + 1))
    console.log('----------------------\n')
    if (room.reserved) {
        console.log("[RESERVED]")
    }
    console.log('Location:', room.location)
    console.log('Price:', toMoney(room.price))
    console.log('Max. Occupancy:', room.maxOccupants)
    console.log('Amenities:', bulletPoints(room.amenities))
}

function reserve(which) {
    if (rooms[which].reserved) {
        console.log("This Room is Already Reserved")
        return
    }
    rooms[which].reserved = true
    console.log('Thank you for reserving')
}

function occupancy(n, max) {
    rooms[n].maxOccupants = max
    console.log('Occupants set.')
}


function add(price, location, maxOccupants, amenities) {

    var newRoom = {
        "price": price,
        "location": location,
        "maxOccupants": maxOccupants,
        "amenities": amenities

    }
    return rooms.push(newRoom)
}
function deleted(id) {
    return rooms.splice(id - 1, 1)

}
function save() {

    fs.writeFile('AirBnBRooms.json', JSON.stringify(rooms, null, 2), (err) => {
        if (err) throw err;
    });

    console.log('Data Is Saved!');
}

rl.on('line', function (input) {
    clear()
    var inputArr = input.split(' ')
    if (inputArr[0] === "list") {
        list(function (rooms) {
            return !rooms.reserved
        })
    } else if (inputArr[0] === 'show') {
        showDetails(inputArr[1] - 1)
    } else if (inputArr[0] === 'reserve') {
        reserve(inputArr[1] - 1)
    } else if (inputArr[0] === 'occupancy') {
        occupancy(inputArr[1] - 1, inputArr[2])

    } else if (inputArr[0] === 'search') {
        var search = inputArr.slice(2).join(' ')
        list(function (rooms) {
            if(inputArr[1] === 'amenity'){
               return !rooms.reserved && rooms.amenities.includes(search) 
            }else if(inputArr[1] === 'address'){
                return !rooms.reserved && rooms.location.includes(search)
            }
            
        });                
    } else if (inputArr[0] === 'add') {
        var amenity = inputArr.slice(4).join(' ').split(' ')
        add(Number(inputArr[1]), inputArr[2], Number(inputArr[3]), amenity)
    } else if (inputArr[0] === 'delete') {
        deleted(inputArr[1])
    } else if (inputArr[0] === 'save') {
        save()
    } else if (inputArr[0] === 'quit') {
        process.exit()
    } else {
        console.log("Unknown Command: " + input)
    }
    console.log(' \n\n Select one of ' + "[ " + options + " ]")


})
clear()
console.log("Please choose one of " + "[ " + options + " ]")


