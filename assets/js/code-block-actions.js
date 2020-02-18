var body = document.getElementsByTagName('body')[0];

function gen_toast(msg) {
	var toast = document.createElement('div');
	toast.id = 'toast';
	toast.classList.add('highlight');
	toast.innerText = msg;
	body.appendChild(toast);
	setTimeout(function () { body.removeChild(toast); }, 4000);
}

function gen_code_actions_div(elem) {
	var actions = document.createElement('div');
	actions.classList.add('code-actions');

	var copy_action = document.createElement('i');
	copy_action.classList.add('fa', 'fa-copy');
	copy_action.onclick = function () {
		navigator.clipboard.writeText(elem.innerText).then(function () {
			gen_toast("Copied to clipboard!");
		});
	};

	actions.appendChild(copy_action);
	return actions;
}


var code_blocks = document.getElementsByTagName('pre');

for (var i = 0; i < code_blocks.length; i++) {
	block = code_blocks[i];
	var actions = gen_code_actions_div(block);
	block.appendChild(actions);
}

