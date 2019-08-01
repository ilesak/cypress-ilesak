import Chance from 'chance'

it('should ', function () {
    let planets = [
        {name: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
        {name: "Venus", radius: 6052, density: 5.24, distance: 0.723},
        {name: "Earth", radius: 6378, density: 5.52, distance: 1},
        {name: "Mars", radius: 3396, density: 3.93, distance: 1.53},
        {name: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
        {name: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
        {name: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
        {name: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
    ]
    //cy.log(planets);

    /*planets.forEach((planet) => {
        cy.log(`planet: ${planet.name}, radius: ${planet.radius}, density: ${planet.density}, distance:  ${planet.distance}`);
    })*/

    planets.map((obj) => {
        obj['solarSystem'] = ''; // Возвращает элемент для new_array
        return obj;
    })

    /*planets.forEach(planet => {
        cy.log(JSON.stringify(planet));
    })*/
    planets.forEach(planet => {
        cy.log(Object.keys(planet).map(key => key + ':' + planet[key]).join(', '));
    })

    planets.push({name: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false});

    let initialValue = 0;
    let sum = planets.reduce((accumulator, currentValue) => accumulator + currentValue.radius, initialValue);
    cy.log(`Sum of planets radius: ${sum}`);

    const result = planets.filter(planet => planet.density > 5);
    console.log(result);

    planets.pop();
    //console.log(planets);

    let sortRadius = planets.sort(function (a, b) {
        return a.radius - b.radius
    })
    console.log(sortRadius);

    let sortName = planets.sort(function (a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });
    console.log(sortName);

    cy.log(`Array length: ${planets.length}`)

})


