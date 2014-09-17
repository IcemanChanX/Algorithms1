var QuickUnionWeighted = require('./QuickUnionWeighted');
function Percolation(n) {

	//Initialize
	this.size = n;
	this.dataStore = [];
	this.quickUnionWeighted = new QuickUnionWeighted(n*n+2);
	this.topNode = n*n+1;
	this.bottomNode = this.topNode + 1;
	var counter = 0;

	for(var i = 0; i < this.size; i++) {
		this.dataStore[i] = [];
		for(j = 0; j < this.size; j++) {
			//Initialize sites
			var node = {id:counter,status:0};
			this.dataStore[i][j] = node;
			counter++;
		}
	}

	this.open = function(i, j) {
		if(!this.isOpen(i,j)) {
			this.dataStore[i][j].status = 1;

			//Union Up
			if(i==0){
				this.quickUnionWeighted.union(this.dataStore[i][j].id, this.topNode);
			}else{
				if(this.isOpen(i-1,j)){
					this.quickUnionWeighted.union(this.dataStore[i][j].id, this.dataStore[i-1][j].id);
				}
			} 
			//Union Down
			if(i==this.size-1) {
				this.quickUnionWeighted.union(this.dataStore[i][j].id, this.bottomNode);
			}else{
				if(this.isOpen(i+1,j)){
					this.quickUnionWeighted.union(this.dataStore[i][j].id, this.dataStore[i+1][j].id);
				}
			}

			//Union Left
			if(j!=0){
				if(this.isOpen(i,j-1)){
					this.quickUnionWeighted.union(this.dataStore[i][j].id, this.dataStore[i][j-1].id);
				}
			}

			//Union Right
			if(j!=this.size-1){
				if(this.isOpen(i,j+1)){
					this.quickUnionWeighted.union(this.dataStore[i][j].id, this.dataStore[i][j+1].id);
				}
			}
		}
	}

	//Open = 1, Closed = 0
	this.isOpen = function(i, j) {
		return (this.dataStore[i][j].status == 1);
	}
	//Site is full if it can be connected to an open site in the top row through adjacent neighbors
	this.isFull = function(i, j) {
		return (this.quickUnionWeighted.isConnected(this.topNode,this.dataStore[i][j].id));
	}

	//System percolates if there is a full site in the bottom row
	this.percolates = function() {
		return this.quickUnionWeighted.isConnected(this.topNode, this.bottomNode);
	}

	//Displays status of the grid.  0-Closed, 1- Open, 2- Full
	this.toString = function() {
		for(var i = 0; i < this.size; i++ ) {
			for(var j=0; j<this.size; j++) {
				if(this.isFull(i,j)){
					process.stdout.write("2 ");
				}else {
					process.stdout.write(this.dataStore[i][j].status+" ");
				}
			}
			console.log();
		}
	}
}

module.exports = Percolation;
