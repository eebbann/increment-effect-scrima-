//document.getElementById("count").innerText = 5;

let count =	0;

function increment() {
	count++;
	document.getElementById("count-el").innerText = count;
 if (count === 5) {
		document.getElementById("count-el").style.color = "yellow";
		document.getElementById("change").innerText = "Yay! keep going!";
		document.querySelector("body").style.backgroundColor = "gray";
	}
	if (count === 10) {
		document.getElementById("count-el").style.color = "darkgreen";
		document.getElementById("change").innerText = "You did it!";
		document.querySelector("body").style.backgroundColor = "lightgreen";

	}
	if (count === 15) {
		document.getElementById("count-el").style.color = "red";
		document.getElementById("change").innerText = "Yes! superman";
		document.querySelector("body").style.backgroundColor = "pink";

	}
}