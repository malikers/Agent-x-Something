(function () {


console.log('....CODE');




var theImages = document.querySelectorAll('.image-holder'),
	theHeading = document.querySelector('.heading'),
	theSubhead = document.querySelector('.main-copy h2'),
	theSeasonText = document.querySelector('.main-copy p'),
	appliedClass;

function changeElements(){
	theSubhead.classList.remove(appliedClass);
	theHeading.classList.remove(appliedClass);
	//debugger;
	theSubhead.classList.add(this.id);
	theHeading.classList.add(this.id);

	appliedClass = this.id;

	theSubhead.firstChild.nodeValue = dynamicContent[this.id].headline;
	theSeasonText.firstChild.nodeValue = dynamicContent[this.id].text;

}

[].forEach.call(theImages, function(image){
	image.addEventListener('click', changeElements, false);
});


})();