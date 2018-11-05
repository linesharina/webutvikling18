(function(){
	// Meny knapp
	var btn = document.querySelector("#nav-btn")
	var nav = document.querySelector('.container > nav')

	function toggleNav() {
		nav.classList.toggle("show");
	}

	btn.addEventListener("click", toggleNav); 

	
	// Dropdown meny
	var dropdownTrigger = nav.querySelector('.dropdown > button')
	
	function toggleDropdown(e) {
		e.stopPropagation();
		dropdownTrigger.classList.toggle("show");

		window.addEventListener("click", function() {
			dropdownTrigger.classList.remove("show");
			this.removeEventListener('click', arguments.callee);
		});
	}

	dropdownTrigger.addEventListener("click", toggleDropdown);

})();
