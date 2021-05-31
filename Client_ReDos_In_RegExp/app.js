function validate(){
	var text = document.getElementById("text").value;
	var regExp = new RegExp("^(([a-z])+.)+[A-Z]([a-z])+$");
	var replaced = regExp.exec(text);
	alert(replaced);
}