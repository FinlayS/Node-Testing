
const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');

});

it('should asyncAdd two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    })
});

it('should square a number', () => {
    var res = utils.square(3)

    expect(res).toBe(9).toBeA('number')
});

it('should asyncAdd square a number', (done) => {
    utils.asyncSquare(3, (sum) => {
        expect(sum).toBe(9).toBeA('number');
        done();
    })
});

it('Should have first name and last name with proper values', () => {

    var user = {location: 'home', age: '54'};
    var res = utils.setName(user, 'finlay simpson');

    expect(user).toEqual(res);

    expect(res).toInclude({
        firstName:'finlay',
        lastName: 'simpson'
        })
});

it ('A whole bunch of things...Should..', () => {
     expect(12).toNotBe(13);

     expect({name: 'Finlay'}).toEqual({name: 'Finlay'});

    expect([2, 3, 4]).toInclude(2);

    expect({
        name: 'Finlay',
        age: '23',
        home: 'Yes',
    }).toInclude({
        age: '23'
    })
});