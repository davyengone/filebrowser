var Folder = require('../model/Folder');

var should = require('chai').should();
var expect = require('expect');

describe('Folder', function() {

	describe('defaults', function() {

		var folder = {}

		beforeEach(function () {
			folder = new Folder()
		});
		
		it('a folder should have a name', function (done) {
			expect(folder.name).to.not.be(undefined);
		});
	});

});