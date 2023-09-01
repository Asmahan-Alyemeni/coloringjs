
    	var defaultColor = 'white'; 

    	function selectColor(color) {
        	defaultColor = color;
    	}

    	function changeColor(index) {
        	var divs = document.getElementsByClassName('box');
        	divs[index].style.backgroundColor = defaultColor;
    	}

    	function resetColors() {
        	defaultColor='white';
        	var divs = document.getElementsByClassName('box');
        	for (var i = 0; i < divs.length; i++) {
            	divs[i].style.backgroundColor = defaultColor;
        	}
    	}