function QuickUnion(size) {
	this.size = size;
	this.dataStore = [];

	//Initialize Connection List- Each Value is node's parent
	for(var i=0; i<this.size; i++) {
		this.dataStore[i]=i;
	}

	//QuickUnion- Set root of first node to root of second node
	this.union = function(node1, node2) {
		console.log("Binding " + node1 +" to " + node2);
		var node1Root = this.getRoot(node1);
		var node2Root = this.getRoot(node2);
		this.dataStore[node1Root] = node2Root;
	}
	this.isConnected = function(node1, node2) {
		return (this.getRoot(node1) == this.getRoot(node2));
	}
	this.getRoot = function(node1) {
		var parentId = this.dataStore[node1];
		
		//Traverse through parents to root
		while(parentId != this.dataStore[parentId]) {
			parentId = this.dataStore[parentId];
		}
		return parentId;
	}
	this.toString = function() {
		console.log("ConnList: " + this.dataStore);
		console.log();
	}

}

module.exports = QuickUnion;