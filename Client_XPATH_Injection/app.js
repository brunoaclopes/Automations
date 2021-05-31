function validate(){
	var path = document.getElementById("path").value;
	var xpath = document.evaluate(path, document, null, XPathResult.ANY_TYPE, null);
	alert(xpath);
}