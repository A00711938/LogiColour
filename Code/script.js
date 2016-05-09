/* Javascript Doc*/
<style>
#num1 {
	padding: 20px;
	border: 1px solid red;
	background-color: blue;
	color: red;
}
#num2 {
	padding: 20px;
	border: 1px solid red;
	background-color: yellow;
	color: blue;
}
#sum {
	padding: 20px;
	border: 1px solid red;
	background-color: green;
	color: purple;
}
</style>
<script>
	var a = Math.floor(Math.random() * 10 + 1);
	var b = Math.floor(Math.random() * 10 + 1);

	window.addEventListener("load", displayMessage, false);
	function displayMessage() {
		document.getElementById('question').style.padding = "10px";
		document.getElementById('question').innerHTML = "<span id = \"num1\">" + a + "</span>" + " + " + "<span id = \"num2\">" + b + "</span>" + " = " + "<span id = \"sum\">" + (a + b) + "</span>";
	}
	
	document.getElementById('tr').addEventListener("click", trueFun);
	document.getElementById('fal').addEventListener("click", falseFun);
	
	function trueFun() {
		document.getElementById('message').style.color = "green";
		document.getElementById('message').innerHTML = "Correct!";
	}
	function falseFun() {
		document.getElementById('message').style.color = "red";
		document.getElementById('message').innerHTML = "Wrong!";
	}
	
	document.getElementById('date').addEventListener("click", date);
	
	function date(){
		document.getElementById('message').style.color = "magenta";	
		document.getElementById('message').innerHTML = Date();
	}

</script>