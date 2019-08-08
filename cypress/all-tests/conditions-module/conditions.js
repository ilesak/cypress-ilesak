import Chance from 'chance'

it('Conditions task ', function () {
    let randomAge = chance.age();
    console.log('The random age is: ', randomAge);

    console.log('----------------If...else method----------------');
    if (randomAge < 9) {
        console.log('This is child.');
    } else if (randomAge >= 9 && randomAge < 18) {
        console.log('This is teen.');
    } else if (randomAge >= 18 && randomAge < 50) {
        console.log('This is adult.');
    } else {
        console.log('This is senior.');
    }

    console.log('----------------Switch method----------------');
    switch (true) {
        case (randomAge < 9):
            console.log('This is child.');
            break;
        case (randomAge >= 9 && randomAge < 18):
            console.log('This is teen.');
            break;
        case(randomAge >= 18 && randomAge < 50):
            console.log('This is adult.');
            break;
        default:
            console.log('This is senior.');
    }

    console.log('----------------Ternary operator----------------');
    let message = (randomAge < 9) ? 'This is child.' :
        (randomAge >= 9 && randomAge < 18) ? 'This is teen.' :
            (randomAge >= 18 && randomAge < 50) ? 'This is adult.' :
                'This is senior.';
    console.log(message);
});