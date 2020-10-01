$('#login-button').click(function(event) {
	var userName = document.getElementById("userName").value;
	var pwd = document.getElementById("pwd").value;
	if (userName == "郑玉静" && pwd == "0111") {
		$('#h').text("生日快乐！");
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function() {
			location.href = "BirthdayCake.html";
		}, 4000);
	} else {
		alert("用户名或密码不正确！");
	}
});
