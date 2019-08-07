it('Map tasks ', function () {
    const planetsMap = new Map();

    planetsMap.set("Mercury", {radius: 2440, density: 5.43, distance: 0.395});
    planetsMap.set("Venus", {radius: 6052, density: 5.24, distance: 0.723});
    planetsMap.set("Earth", {radius: 6378, density: 5.52, distance: 1});
    planetsMap.set("Mars", {radius: 3396, density: 3.93, distance: 1.53});
    planetsMap.set("Jupiter", {radius: 71492, density: 1.33, distance: 5.21});
    planetsMap.set("Saturn", {radius: 60268, density: 0.69, distance: 9.551});
    planetsMap.set("Uranus", {radius: 25559, density: 1.27, distance: 19.213});
    planetsMap.set("Neptune", {radius: 24764, density: 1.64, distance: 30.07});

    const extraMap = new Map();
    extraMap.set("Moon", {radius: 1737, density: 3.34, distance: 384});
    extraMap.set("Io", {radius: 421, density: 3.53, distance: 421});

    planetsMap.forEach((value, key) => {
        cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ':' + value[objKey]).join(', '))
    });

    console.log("Planet with key = Saturn", planetsMap.get('Saturn'));

    console.log("Map size = ", planetsMap.size);

    const planetSet = new Set(["Mercury", "Not Mercury"]);
    planetSet.forEach((planet) => {
        cy.log(`Does "` + (planet) + `" exist in the Map?: ` + planetsMap.has(planet))
    });

    console.log("Is the item deleted? ", planetsMap.delete("Uranus"));
    console.log("The deleted item exist? ", planetsMap.has("Uranus"));

    const merged = new Map([...planetsMap, ...extraMap]);
    merged.forEach((value, key) => {
        cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ':' + value[objKey]).join(', '))
    });

    let planet = new Map([
        ["planet", "Mercury"],
        ["radius", 2440],
        ["density", 5.43],
        ["distance", 0.395]])

    planet.forEach((value, key) => {
        cy.log(key + ': ' + value);
    });
});
