function compile() {
	var html = document.getElementById('html');
	var css = document.getElementById('css');
	var javascript = document.getElementById('javascript');
	var codebox = document.getElementById('code').contentWindow.document;

	document.body.onkeyup = function() {
		codebox.open();
		codebox.writeln(html.value + "<style>" + css.value + "</style>" + "<script>" + javascript.value + "</script>");
		codebox.close();
	};
};

compile();
