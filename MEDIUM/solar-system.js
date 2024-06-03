const system = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn' ,'uranus', 'neptune', 'pluto']

function printSystem(){
    system.forEach(element => console.log(element === "pluto" ? "I still believe in you pluto" : element))
}

printSystem()