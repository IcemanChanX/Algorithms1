var TreeNode = require("./TreeNode");

function BinarySearchTree() {
	
	//Public instance field
	var root = null;

	//Private Instance Methods
	var contains = function(node, value) {
		if(node == null) {
			return false;
		} else {
			if(value == node.value){
				return true;
			} else {
				if(value < node.value){
					return contains(node.left, value);
				}else {
					return contains(node.right, value);
				}
			}
		}
	}

	var insert = function(currentNode, newNode) {
		if(currentNode==root && root==null) {
			root = newNode;
			return;
		}else {
			if(newNode.value < currentNode.value) {
				if(currentNode.left == null) {
					currentNode.left = newNode;
					return;
				} else {
					insert(currentNode.left, newNode);
				}
			} else {
				if(currentNode.right == null) {
					currentNode.right = newNode;
					return;
				} else {
					insert(currentNode.right,newNode);
				}

			}
		}
	}
	var inorder = function(node, action) {
		//Base Case
		if(node == null) {
			return;
		}else {
			inorder(node.left, action);
			action(node);
			inorder(node.right, action);
		}
	}
	var max = function(node) {
		//Base Case
		if(node == null) {
			return null;
		} else {
			//BST- Traverse and return right most node
			if(node.right == null) {
				return node.value;
			}else {
				return max(node.right);
			}
		}
	}
	var min = function(node) {
		//Base Case
		if(node == null) {
			return null;
		} else {
			//BST- Traverse and return right most node
			if(node.left == null) {
				return node.value;
			}else {
				return min(node.left);
			}
		}
	}
	var postorder = function(node, action) {
		//Base Case
		if(node == null) {
			return;
		}else {
			postorder(node.left, action);
			postorder(node.right, action);
			action(node);
		}
	}
	var preorder = function(node, action) {
		//Base Case
		if(node == null) {
			return;
		}else {
			action(node);
			preorder(node.left, action);
			preorder(node.right, action);
		}
	}
	var printNode = function(node) {
		console.log(node.value);
	}

	var remove = function(node, value, parent) {
		if(node == null) {
			return;
		} else {
			if(node.value == value) {
				if(node.left != null && node.right != null) {	//Two children
					//Replace with largest value in left subtree
					var maxLeft = max(node.left);
					node.value = maxLeft;
					remove(node.left, maxLeft, node);
				} else if(node.left != null) {					//Only left child
					node = node.left;
					node.left = null;
				}else if (node.right != null){					//Only right child
					node = node.right;
					node.right = null;
				} else {										//No Children
					if(root == node) {
						root = null;
					}
					if(parent != null) {
						if(parent.value > node.value) {
							parent.left = null;
						} else {
							parent.right = null;
						}
					}
				}
			} else if(value < node.value) {
				remove(node.left, value, node);
			} else {
				remove(node.right, value, node);
			}
		}
	}
	var size = function(node) {
		//Base Case
		if(node == null) {
			return 0;
		} else {
			return 1 + size(node.left) + size(node.right);
		}
	}

	//Public Instance Methods
	this.contains = function(value) {
		return contains(root, value);
	}
	this.getMax = function() {
		return max(root);
	}
	this.getSize = function() {
		return size(root); 
	}
	this.insert = function(value) {
		var n = new TreeNode();
		n.value=value;
		insert(root,n);
	}
	this.printInorder = function() {
		inorder(root, printNode);
	}
	this.printPreorder = function() {
		preorder(root, printNode);
	}
	this.printPostorder = function() {
		postorder(root, printNode);
	}

	this.remove = function(value) {
		remove(root, value, null);
	}
}

module.exports = BinarySearchTree