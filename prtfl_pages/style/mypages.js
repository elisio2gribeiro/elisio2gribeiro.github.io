

onscroll = function() {
  
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 100) {
	document.getElementById("toTop").style.visibility="visible";
  }else {
	document.getElementById("toTop").style.visibility="hidden";
  }
};

function sizeTbl(h, s, pd) {
	var tbl = document.getElementById(s);
	tbl.style.display = h;
	var op = document.getElementById(pd);
	if (h == 'inline'){
	op.style.display = 'none';
	}
	else{
	op.style.display = 'inline';
	}
}

function showmore(sId) {
	var elem1 = document.getElementById(sId);
	if (elem1.style.display == 'inline'){
		elem1.style.display = 'none';
	}
	else{
		elem1.style.display = 'inline';
	}
}

//traducao de pagina para ingles (google)
function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'pt', includedLanguages: 'en', layout: google.translate.TranslateElement.FloatPosition.TOP_RIGHT}, 'google_translate_element');
}