function startTimer(duration, display) {
	var timer = duration, minutes, seconds;
	myInterval=setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.textContent = minutes + ":" + seconds;

		if (--timer < 0) {
			clearInterval(myInterval,200);
			$("#btnSendMail").show();	
			$("#time").hide();

		}
	}, 1000);
}

$('#sendMail').submit(function (e) {

	e.preventDefault();
	if (!$("#sendMail").valid())
	{
		$("#sendMail").find('.error-message').slideDown();

	}
	Email.send({
		SecureToken: '894c95a4-c65f-4934-9181-662ec29d7854',
		To: 'doanhien98it@gmail.com',
		From: document.getElementById('txtFrom').value,
		Subject:document.getElementById('txtSubject').value,
		Body:"Sent from: Hien Nguyen Blog. Sender's Name: "+document.getElementById("txtName").value+". Content: "+document.getElementById('txtBody').value,
	}).then((message) => {
		this_form = $('#sendMail');
		this_form.find('.sent-message').slideDown();
		this_form.find('.error-message').slideUp();
		this_form.find('.loading').slideUp();
		$("#btnSendMail").hide();
		$("#time").show();
		timed = 30;
		display = document.querySelector('#time');
		startTimer(timed, display);
	});
});

