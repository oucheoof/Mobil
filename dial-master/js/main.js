const init = function () {

	const div = document.createElement('div');

	const input = document.createElement('input');

	const btn = document.createElement('button');

	btn.innerText = "CLEAR";

	btn.addEventListener("click", e => {
		input.value = "";
	});

	input.type = "text";

	div.append(input);

	div.append(btn);

	document.body.appendChild(div);

	const func = function (value) {
		input.value += value;
	}

	const rd = new RotaryDial({ callback: func });

}
const checkAndOpenFile = function (number) {
    let filePath;
    switch (number) {
        case '1':
            filePath = '../embla/embla.html';
            break;
        case '2':
            filePath = '../hilda/hilda.html';
            break;
        case '3':
            filePath = '../stephen/stephen.html';
            break;
        case '4':
            filePath = '../pontus/pontus.html';
            break;
        // Add more cases as needed
    }
    if (filePath) {
        const link = document.createElement('a');
        link.href = filePath;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}


init();
