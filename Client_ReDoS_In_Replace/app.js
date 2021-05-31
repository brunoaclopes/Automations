function validate(){
	var text = document.getElementById("text").value;
	var rpl = document.getElementById("replace").value;
	var replaced = text.replace("^(([a-z])+.)+[A-Z]([a-z])+$", rpl);
	alert(replaced);
}