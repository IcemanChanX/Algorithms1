function Set(values) {

	this.dataStore = [];
	
	if(values != null) {
		this.dataStore = this.dataStore.concat(values);
	}
	this.insert = function(value) {
		if(this.dataStore.indexOf(value) < 0) {
			this.dataStore.push(value);
			return true;
		} else {
			return false;
		}
	}
	this.contains = function(value) {
		return (this.dataStore.indexOf(value) != -1 ? true : false);
	}
	this.remove = function(value) {
		var pos = this.dataStore.indexOf(value);
		if(pos != -1) {
			this.dataStore.splice(pos,1);
			return true;
		} else {
			return false;
		}
		
	}
	this.union = function(set) {
		var unionSet = new Set();
		for(var i = 0; i < this.dataStore.length; i++) {
			unionSet.insert(this.dataStore[i]);
		}
		for(var i = 0; i < set.dataStore.length; i++) {
			if(!unionSet.contains(set.dataStore[i])){
				unionSet.insert(set.dataStore[i]);
			}
		}
		return unionSet;
	}
	this.difference = function(set) {
		var differenceSet = new Set();
		for(var i = 0; i < this.dataStore.length; i++) {
			if(!set.contains(this.dataStore[i])){
				differenceSet.insert(this.dataStore[i]);
			}
		}
		return differenceSet;
	}
	this.intersection = function(set) {
		var intersectionSet = new Set();
		for(var i = 0; i < this.dataStore.length; i++) {
			if(set.contains(this.dataStore[i])) {
				intersectionSet.insert(this.dataStore[i]);
			}
		}
		return intersectionSet;
	}
	this.subset = function(set) {
		var isSubset = true;
		for(var i = 0; i < this.dataStore.length; i++) {
			if(!set.contains(this.dataStore[i])) {
				isSubset = false;
				break;
			}
		}
		return isSubset;

	}
	this.order = function() {
		return this.dataStore.length
	}
	this.equals = function(set) {
		var sorted1 = this.dataStore.sort();
		var sorted2 = set.dataStore.sort();

		var isEqual = true;
		if(sorted1.length != sorted2.length ) {
			isEqual = false;
		}else {
			for(var i = 0; i < sorted1.length; i++) {
				if(sorted1[i]!=sorted2[i]){
					isEqual = false;
					break;
				}
			}
		}
		return isEqual;
		
	}
	this.toString = function() {
		var arrayString ="{";
		return arrayString.concat(this.dataStore.toString(),"}");

	}
}


module.exports = Set;