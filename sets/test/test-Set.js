var should = require('should');
var Set = require("../Set");


describe('Set', function() {
	describe('insert()', function() {
		describe("Insert first instance of value", function() {
			var set = new Set();
			set.insert(8);
			it('contains()', function() {
				set.contains(8).should.be.true;
			})
		})
		describe("Insert duplicate value", function() {
			var set = new Set();
			set.insert(8);
			it('insert()', function() {
				set.insert(8).should.be.false;
			})
		})
	})
	describe('remove()', function() {
		describe("Remove first instance of value", function() {
			var set = new Set();
			set.insert(8);
			it('remove()', function() {
				set.remove(8).should.be.true;
			})
			it('contains()', function() {
				set.contains(8).should.be.false;
			})
		})
		describe("Remove non-existent value", function() {
			var set = new Set();
			set.insert(8);
			it('insert()', function() {
				set.remove(10).should.be.false;
			})
		})
	})
	describe('union()', function(){ 
		//Test Union of two sets
		it('union() of {1,2,3} and {4,5,6} should be {1,2,3,4,5,6}', function() {
			var set1 = new Set([1,2,3]);
			var set2 = new Set([4,5,6]);

			var set3 = set1.union(set2);
			set3.toString().should.equal("{1,2,3,4,5,6}");
		})
		//Test Union of Set with Empty
		it('union() of {1,2,3} and {} should be {1,2,3}', function(){
			var set1 = new Set([1,2,3]);
			var set2 = new Set();

			var set3 = set1.union(set2);
			set3.toString().should.equal("{1,2,3}");
		})
		//Test Union of Empty Set with Set
		it('union() of {} and {1,2,3} should be {1,2,3}', function(){
			var set1 = new Set([1,2,3]);
			var set2 = new Set();

			var set3 = set2.union(set1);
			set3.toString().should.equal("{1,2,3}");
		})
		//Test Union of Empty with Empty
		it('union() of {} and {} should be {}', function(){
			var set1 = new Set();
			var set2 = new Set();

			var set3 = set1.union(set2);
			set3.toString().should.equal("{}");
		})
		//Test Union of Duplicate Sets
		it('union() of {1,2,3} and {1,2,3} should be {1,2,3}', function(){
			var set1 = new Set([1,2,3]);
			var set2 = new Set([1,2,3]);

			var set3 = set1.union(set2);
			set3.toString().should.equal("{1,2,3}");
		})
	})
	describe('intersection()', function(){ 
		//Intersection with No Overlap
		it('intersection() of {1,2,3} and {4,5,6} should be {}', function() {
			var set1 = new Set([1,2,3]);
			var set2 = new Set([4,5,6]);

			var set3 = set1.intersection(set2);
			set3.toString().should.equal("{}");
		})
		//Intersection with Some Overlap
		it('intersection() of {1,2,3,4} and {3,4,5,6} should be {3,4}', function() {
			var set1 = new Set([1,2,3,4]);
			var set2 = new Set([3,4,5,6]);

			var set3 = set1.intersection(set2);
			set3.toString().should.equal("{3,4}");
		})	
		//Intersection with All Overlap
		it('intersection() of {1,2,3} and {1,2,3} should be {1,2,3}', function() {
			var set1 = new Set([1,2,3]);
			var set2 = new Set([1,2,3]);

			var set3 = set1.intersection(set2);
			set3.toString().should.equal("{1,2,3}");
		})
		//Intersection of Set with Empty
		it('intersection() of {1,2,3} and {} should be {}', function() {
			var set1 = new Set([1,2,3]);
			var set2 = new Set();

			var set3 = set1.intersection(set2);
			set3.toString().should.equal("{}");
		})
		//Intersection of null with set
		it('intersection() of {} and {1,2,3} should be {}', function() {
			var set1 = new Set([1,2,3]);
			var set2 = new Set();

			var set3 = set2.intersection(set1);
			set3.toString().should.equal("{}");
		})
		//Intersection of null with null
		it('intersection() of {} and {} should be {}', function() {
			var set1 = new Set();
			var set2 = new Set();

			var set3 = set1.intersection(set2);
			set3.toString().should.equal("{}");
		})
	})
	describe('difference()', function(){ 
		//Difference with Overlap
		it('difference() of {1,2,3,4} and {3,4,5,6} should be {1,2}', function() {
			var set1 = new Set([1,2,3,4]);
			var set2 = new Set([3,4,5,6]);

			var set3 = set1.difference(set2);
			set3.toString().should.equal("{1,2}");
		})
		//Difference with no overlap
		it('difference() of {1,2,3} and {4,5,6} should be {1,2,3}', function() {
			var set1 = new Set([1,2,3]);
			var set2 = new Set([4,5,6]);

			var set3 = set1.difference(set2);
			set3.toString().should.equal("{1,2,3}");
		})
		//Difference with Set and Empty
		it('difference() of {1,2,3} and {} should be {1,2,3}', function() {
			var set1 = new Set([1,2,3]);
			var set2 = new Set();

			var set3 = set1.difference(set2);
			set3.toString().should.equal("{1,2,3}");
		})
		//Difference with Empty Set and Set
		it('difference() of {} and {1,2,3} should be {}', function() {
			var set1 = new Set([1,2,3]);
			var set2 = new Set();

			var set3 = set2.difference(set1);
			set3.toString().should.equal("{}");
		})
		//Difference with null and null
		it('difference() of {} and {} should be {}', function() {
			var set1 = new Set();
			var set2 = new Set();

			var set3 = set1.difference(set2);
			set3.toString().should.equal("{}");
		})
	})
	describe('subset()', function(){ 
		//Subset is True
		it('subset() of  {1,2,3,4,5} is not a subset of {2,3}', function() {
			var set1 = new Set([1,2,3,4,5]);
			var set2 = new Set([2,3]);

			set1.subset(set2).should.be.false;
		})
		//Subset is False with some overlap
		it('subset() {1,2} is a subset of {1,2,3,100}', function() {
			var set1 = new Set([1,2,]);
			var set2 = new Set([1,2,3,100]);

			set1.subset(set2).should.be.true;
		})
		//Subset with No overlap
		it('subset() {1,2,3,4,5} is not a subset of {6,7,8,9}', function() {
			var set1 = new Set([1,2,3,4,5]);
			var set2 = new Set([6,7,8,9]);

			set1.subset(set2).should.be.false;
		})
	})
	//Test Equals
	describe('equals()', function(){ 
		it('equals() {1,2,3,4,5} and {1,2,3,4,5} should be true', function() {
			var set1 = new Set([1,2,3,4,5]);
			var set2 = new Set([1,2,3,4,5]);

			set1.equals(set2).should.be.true;
		})
		it('equals() {1,2,3,4,5} and {1,2,4,5} should be false', function() {
			var set1 = new Set([1,2,3,4,5]);
			var set2 = new Set([1,2,4,5]);

			set1.equals(set2).should.be.false;
		})
	})
	//Test Order
	describe('order()', function() {
		it('order() of {1,2,3,4,5} should be 5 ', function() {
			var set1 = new Set([1,2,3,4,5]);
			set1.order().should.equal(5);
		})
		it('order() of {} should be 0', function() {
			var set1 = new Set();
			set1.order().should.equal(0);
		})
	})
})