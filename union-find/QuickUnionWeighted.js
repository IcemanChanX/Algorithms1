function QuickUnionWeighted(size) {
	this.size = size;
	this.dataStore = [];
	this.sizeStore = [];

	for(var i = 0; i < this.size; i++) {
		this.dataStore[i] = i;
		this.sizeStore[i] = 1;
	}

	//QuickUnionWeighted- Set root of smaller tree to root of larger tree
	this.union = function(node1, node2) {
		var node1Root = this.getRoot(node1);
		var node2Root = this.getRoot(node2);

		//Weighted Logic- Add smaller tree to larger
		if(this.sizeStore[node1Root] <= this.sizeStore[node2Root]) {
			this.dataStore[node1Root] = node2Root;
			this.sizeStore[node2Root] += this.sizeStore[node1Root];
		}else {
			this.dataStore[node2Root] = node1Root;
			this.sizeStore[node1Root] += this.sizeStore[node2Root];
		}
	}
	this.isConnected = function(node1,node2) {
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

module.exports = QuickUnionWeighted;
