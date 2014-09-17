function QuickFind(size) {
	this.size=size;
	this.dataStore = [];

	//Initialize Connection List
	for(var i =0; i < this.size; i++) {
		this.dataStore[i]=i;
	}
	this.union = function(node1, node2) {
		var currentId = this.dataStore[node1];

		//Quickfind- Change all IDs of current ID to new ID
		for(var i = 0; i < this.size; i++ ) {
			if(this.dataStore[i] == currentId) {
				this.dataStore[i] = this.dataStore[node2];
			}
		}
	}
	this.isConnected = function(node1, node2) {
		return (this.dataStore[node1] == this.dataStore[node2]);
	}
	this.toString = function() {
		console.log("ConnList: " + this.dataStore);
		console.log();
	}
}

module.exports = QuickFind;
