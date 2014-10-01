var should = require('should');
var BinarySearchTree = require('../BinarySearchTree');

describe('BST', function() {
	describe('Initialized BST', function() {
		var bst = new BinarySearchTree();
		it('getSize() should equal 0', function() {
			bst.getSize().should.equal(0);
		})
		it('getRoot() should be null', function() {
			(bst.getRoot() === null).should.be.true;
		})
	})

	describe('Insert 5 and Insert 10', function() {
		var bst = new BinarySearchTree();
		bst.insert(10);
		bst.insert(5);
		it('contains() should be true for 10 and 5', function() {
			bst.contains(10).should.equal(true);
			bst.contains(5).should.equal(true);
		})
		it('getSize()- should be 2', function() {
			bst.getSize().should.equal(2);
		})
		it('getRoot()- should be 10', function() {
			bst.getRoot().should.equal(10);
		})
	})
	describe('insert()- Duplicate', function() {
		var bst = new BinarySearchTree();
		bst.insert(10);

		it('insert() duplicate should return Duplicate Insert Error', function() {
			(function(){
  				bst.insert(10);
  			}).should.throw('Duplicate Insert');
			
		})
	})
	describe('remove()- Non Existent', function() {
		var bst = new BinarySearchTree();
		bst.insert(10);

		it('remove() should throw  Value Not Found Error', function() {
			(function() {
				bst.remove(88);
			}).should.throw('Value Not Found');
		})
	})
	describe('remove()- Root with two Children', function() {
		var bst = new BinarySearchTree();
		bst.insert(10);
		bst.insert(5);
		bst.insert(8);
		bst.insert(3);
		bst.insert(15);
		bst.remove(10);
		it('contains()', function() {
			bst.contains(10).should.equal(false);
		})
		it('getSize()', function() {
			bst.getSize().should.equal(4);
		})
		it('getRoot()- should be largest value in left subtree', function() {
			bst.getRoot().should.equal(8);
		})
	})
	describe('remove()- Root with only Right Child', function() {
		var bst = new BinarySearchTree();
		bst.insert(10);
		bst.insert(15);
		bst.insert(11);
		bst.insert(16);
		bst.remove(10);
		it('contains()', function() {
			bst.contains(10).should.equal(false);
		})
		it('getSize()', function() {
			bst.getSize().should.equal(3);
		})
		it('getRoot()- if not left child, should be smallest value in right tree', function() {
			bst.getRoot().should.equal(11);
		})
	})
	describe('remove()- Root with no Children', function() {
		var bst = new BinarySearchTree();
		bst.insert(10);
		bst.remove(10);
		it('contains()', function() {
			bst.contains(10).should.equal(false);
		})
		it('getSize()', function() {
			bst.getSize().should.equal(0);
		})
		it('getRoot()- should be largest value in left subtree', function() {
			(bst.getRoot() === null).should.be.true;
		})
	})
})