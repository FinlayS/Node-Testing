const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');



describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('Should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalledWith('Andrew', 25)
    })

    it('Should call saveUser with user object', () => {
        var email = 'bob@bob.com';
        var password = 'passw0rd';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password})
    })

})