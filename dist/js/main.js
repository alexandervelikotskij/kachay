// bootstrap range slider  Without JQuery
var slider = new Slider("#ex6", {
	tooltip: 'always'
});
slider.on("slide", function(sliderValue) {
	document.getElementById("ex6SliderVal").textContent = sliderValue;
});


// bootstrap range slider2  Without JQuery
var slider2 = new Slider("#ex7");
slider2.on("slide", function(sliderValue) {
	document.getElementById("ex7SliderVal").textContent = sliderValue;
});
