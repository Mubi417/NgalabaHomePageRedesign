let runFunc = () => {
	let catAndMouse = (catX, catY, mouseZ) => {
		if (catX > 100 || catX < 0 || catY > 100 || catY < 0 || mouseZ > 100 || mouseZ < 0) {
			return 'Invalid Inputs';
		}
	    if (Math.abs(mouseZ-catX) < Math.abs(mouseZ-catY)) {
	        return 'Cat X catches the Mouse first';
	    }
	    else if (Math.abs(mouseZ-catX) > Math.abs(mouseZ-catY) ) {
	        return 'Cat Y catches the Mouse first';
	    }
	    else {
	    	return 'Mouse Z escapes';
	    }

	};

	let catX = Math.floor(Math.random()*100) + 1;
	let catY = Math.floor(Math.random()*100) + 1;
	let mouseZ = Math.floor(Math.random()*100) + 1;

	var txt1 = "<p>Cat X is on position "+catX+" on the same line</p>";
	var txt2 = "<p>Cat Y is on position "+catY+" on the same line</p>";
	var txt3 = "<p>mouse Z is on position "+mouseZ+" on the same line</p>";
	var txt4 = "<p>"+catAndMouse(catX, catY, mouseZ)+"<br><br>Refresh page to get back original site</p>";
	document.body.innerHTML = '';
	$('Body').append(txt1, txt2, txt3, txt4);

	$('Body').css("color","black");

}

$('#cat-and-mouse').click(runFunc);
