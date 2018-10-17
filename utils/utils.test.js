
const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');

});

it('should square a number', () => {
    var res = utils.square(3)

    expect(res).toBe(9).toBeA('number')
});



it('Should have first name and last name with proper values', () => {

    var user = {location: 'home', age: '54'};
    var res = utils.setName(user, 'finlay simpson');

    // console.log(user)
    // console.log(res)
    expect(user).toEqual(res);

    expect(res).toInclude({
        firstName:'finlay',
        lastName: 'simpson'
        })

});

// should verify first and last names are set

// create a user object '
//like with first and last names age locatoion

// pass into set name methods

// then a string with first  and last name

// asset include first & last with proper values




// it ('A whole bunch of things...Should..', () => {
//      expect(12).toNotBe(12);
//
//      expect({name: 'Finlay'}).toEqual({name: 'Finlay'});
//
//     expect([2, 3, 4]).toInclude(2);
//
//     expect({
//         name: 'Finlay',
//         age: '23',
//         home: 'Yes',
//     }).toInclude({
//         age: '23'
//     })
// });