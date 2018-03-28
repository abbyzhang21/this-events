//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/
var liElem = document.getElementsByClassName('navi');
for(var i = 0; i <liElem.length; i++){
	liElem[i].addEventListener('click',showText);
}
function showText(){
	var aElem = this.querySelectorAll('.inner')[0];
	if(aElem.style.display === 'none'){
		aElem.style.display = 'block';
	}else{
		aElem.style.display = 'none';
	}
}



/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/
var nameELem = document.getElementsByClassName('name');
for (var i = 0 ; i < nameELem.length; i++){
	nameELem[i].addEventListener('click',toggleText);
}
function toggleText(){
	var menuElem = this.querySelectorAll('.menu')[0];
	if(menuElem.style.display === 'none'){
		menuElem.style.display = 'block';
	}else{
		menuElem.style.display = 'none';
	}
}


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/
//create click & count
var iElem = document.getElementsByClassName('thumb');
//var para = document.createElement('p');
for (var i = 0; i < iElem.length; i++){
	//iElem[i].appendChild(counter);
	//setAttribute("class", ".num");
	iElem[i].addEventListener('click', showCount);
	
}

//var para = document.createElement('p');
//var thumbElem = document.getElementsByClassName('i .far');
//for (var i = 0; i < thumbElem.length; i++){
//	thumbElem[i].appendChild(para).setAttribute("class", ".num");
//}

//show number of counts
function showCount(){
	var showPara = document.querySelectorAll('.test')[0];
	showPara.innerHTML = counter();
	showPara.style.backgroundColor = "red";

}
var count = 0;
function counter(){
	 count++;
	 return count;
}
