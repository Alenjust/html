function handleEnter(field, event) {
	var keyCode = event.keyCode ? event.keyCode : event.which ?
		event.which : event.charCode;
	if (keyCode == 13) {
		var i;
		for (i = 0; i < field.form.elements.length; i++)
			if (field == field.form.elements[i])
				break;
		i = (i + 1) % field.form.elements.length;
		field.form.elements[i].focus();
		return false;
	} else
		return true;
}


// 获取所有input框
var inputs = document.getElementsByTagName('input');
// 为每个input框添加失去焦点事件
for (var i = 0; i < inputs.length - 1; ++i) {
	inputs[i].onblur = inputBlur;
}

function inputBlur() {
	var name = this.name; // 获取输入框的name值
	var val = this.value; // 获取输入框的value值
	var tips = this.placeholder; // 获取输入框中的提示信息
	var tips_obj = this.nextSibling; // 获取提示信息显示的div元素对象
	// 1. 去掉两端的空白字符
	val = val.trim();
	// 2. 文本框内容为空，给出提示信息
	if (!val) {
		error(tips_obj, '输入框不能为空');
		return false;
	}
	// 3. 获取正则匹配规则和提示信息
	var reg_msg = getRegMsg(name, tips);
	// 4. 检测是否否和正则匹配
	if (reg_msg['reg'].test(val)) {
		// 匹配成功，显示成功的提示信息
		success(tips_obj, reg_msg['msg']['success']);
	} else {
		// 匹配失败，显示失败的提示信息
		error(tips_obj, reg_msg['msg']['error']);
	}
}
// 根据input的name值，设置正则规则及提示信息
function getRegMsg(name, tips) {
	var reg = msg = '';
	switch (name) {
		case 'username':
			reg = /^[a-zA-Z]{4,12}$/;
			msg = {
				'success': '用户名输入正确',
				'error': tips
			};
			break;
		case 'pwd':
			reg = /^\w{6,20}$/;
			msg = {
				'success': '密码输入正确',
				'error': tips
			};
			break;
		case 'repwd':
			var con = document.getElementsByTagName('input')[1].value;
			reg = RegExp("^" + con + "$");
			msg = {
				'success': '两次密码输入正确',
				'error': '两次输入的密码不一致'
			};
			break;
		case 'tel':
			reg = /^1[34578]\d{9}$/;
			msg = {
				'success': '手机号码输入正确',
				'error': tips
			};
			break;
		case 'email':
			reg = /^(\w+(\_|\-|\.)*)+@(\w+(\-)?)+(\.\w{2,})+$/;
			msg = {
				'success': '邮箱输入正确',
				'error': tips
			};
			break;
	}
	return {
		'reg': reg,
		'msg': msg
	};
}
// 成功
function success(obj, msg) {
	// alert(msg)
	// alert(obj)
	obj.className = 'success';
	obj.innerHTML = msg;
}
// 失败
function error(obj, msg) {
	// alert(msg + '，请重新输入')
	obj.className = 'error';
	obj.innerHTML = msg + '，请重新输入';
}
