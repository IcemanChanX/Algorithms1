var Percolation = require("./Percolation");

function mainApp() {
	var percolation = new Percolation(5);

	percolation.open(0,0);
	percolation.toString();
	console.log("Percolates: " + percolation.percolates());
	percolation.open(1,0);
	percolation.toString();
	console.log("Percolates: " + percolation.percolates());
	percolation.open(2,0);
	percolation.toString();
	console.log("Percolates: " + percolation.percolates());
	percolation.open(3,1);
	percolation.toString();
	console.log("Percolates: " + percolation.percolates());
	percolation.open(3,2);
	percolation.toString();
	console.log("Percolates: " + percolation.percolates());
	percolation.open(3,3);
	percolation.toString();
	console.log("Percolates: " + percolation.percolates());
	percolation.open(3,0);
	percolation.toString();
	console.log("Percolates: " + percolation.percolates());
	percolation.open(1,1);
	percolation.toString();
	console.log("Percolates: " + percolation.percolates());
	percolation.open(2,2);
	percolation.toString();
	console.log("Percolates: " + percolation.percolates());
	percolation.open(1,3);
	percolation.toString();
	console.log("Percolates: " + percolation.percolates());
	percolation.open(4,0);
	percolation.toString();
	console.log("Percolates: " + percolation.percolates());
	percolation.open(4,3);
	percolation.toString();
	console.log("Percolates: " + percolation.percolates());
}

mainApp();