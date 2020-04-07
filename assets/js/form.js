function sendMail(){
	Email.send({
		SecureToken : "894c95a4-c65f-4934-9181-662ec29d7854",
		To : 'doanhien98it@gmail.com',
		From : document.getElementById("txtFrom").value,
		Subject : document.getElementById("txtSubject").value+" ("+document.getElementById("txtName").value+")",
		Body : document.getElementById("txtBody").value
	}).then(
		message => alert(message)
	);	

}
