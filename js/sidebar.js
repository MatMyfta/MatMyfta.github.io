function sleep(ms) {
	return new Promise (resolve => setTimeout(resolve, ms));
}

function expandeSide() {
	var sidebar = document.getElementById("sidebar");


	var btn = document.getElementById("side-btn");

	if(sidebar.classList.contains("expanded")) {
		btn.innerHTML = "<i class=\"fas fa-bars\"></i>";

		var side_in = document.getElementById("side-content");
		side_in.classList.toggle("show");
		sleep(300).then(() => {
			sidebar.classList.toggle("expanded");
		});
	}
	else {
		btn.innerHTML = "<i class=\"fas fa-times\"></i>";

		sleep(500).then(() => {
			var side_in = document.getElementById("side-content");
			side_in.classList.toggle("show");
		});
		sidebar.classList.toggle("expanded");
	}


}