document.addEventListener("DOMContentLoaded", ()=> {
	const btnDarkMode = document.querySelector("#toggle");
	btnDarkMode.addEventListener("change", ()=> {
		if(btnDarkMode.checked) {
			document.body.classList.add("darkmode");
		} else {
			document.body.classList.remove("darkmode");
		}
	})
})