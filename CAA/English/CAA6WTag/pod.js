/* Function to display part of a file or its whole contents */ 
function switchVisibility(id1, id2) {
	var e1 = document.getElementById(id1);
	var e2 = document.getElementById(id2);
	if(e1.style.display == 'block') {
		e1.style.display = 'none';
		e2.style.display = 'block';
	} else {
		e1.style.display = 'block';
		e2.style.display = 'none';
	}
}

function show(index) {
	var show = document.getElementById("show"+index);
	var hide = document.getElementById("hide"+index);
	var solution = document.getElementById("solution"+index);	
	show.style.display = 'none';
	hide.style.display = 'block';
	solution.style.display = 'block';
}

function hide(index) {
	var show = document.getElementById("show"+index);
	var hide = document.getElementById("hide"+index);
	var solution = document.getElementById("solution"+index);	
	show.style.display = 'block';
	hide.style.display = 'none';
	solution.style.display = 'none';
}
