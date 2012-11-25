var should = require('should'),
    doxbars = require('../lib/doxbars');

describe('DoxBars', function () {
    describe('makeContext', function () {
        it('should add both api and extras', function () {
            var api = {name: 'my api name'},
                extras = {title: 'my title'},
                context = doxbars.prototype.makeContext(api, extras);
            context.api.name.should.equal('my api name');
            context.title.should.equal('my title');
        });
    });

    describe('template', function () {
        it('should load template file for given path', function () {
            var template = doxbars.prototype.template('test/api.html');
            template.should.have.property('prototype');
        });
    });
});
