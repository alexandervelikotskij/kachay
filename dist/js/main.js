//datepicker localization rus

;(function ($) {
	$.fn.datepicker.dates.ua = {
		days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
		daysShort: ["Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб", "Вск"],
		daysMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
		months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
		monthsShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
		today: "Сьогодні",
		clear: "Очистити",
		format: "dd.mm.yyyy",
		weekStart: 0,
		monthsTitle: 'Місяці'
	};
}(jQuery));

$(document).ready(function () {
	//add images
	if (window.File && window.FileList && window.FileReader) {
		$('body').on('click', '.remove_input_control', function (event) {
			var target = $(event.target);
			$(target).parents('.image-upload-holder').find('input').val('').trigger('change');
			$(target).parents('.image-upload-holder').find('.image-upload').html('');
		});
		$(".inputfile").on("change", function (e) {
			var $this = $(this);
			var value = $this.val();
			if (value) {
				var filename = $this.val().replace(/C:\\fakepath\\/i, '');
				var FR = new FileReader();
				$("<div class=\"pip\">" +
					"<span class=\"remove remove_input_control\">Видалити</span>" +
					"<img class=\"imageThumb\" src=\"" + e.target.result + "\"/>" +
					"</div>").appendTo($this.parents('.image-upload-holder').find('.image-upload'));
				FR.onload = function (e) {
					$this.parents('.image-upload-holder').find('.image-upload').find('img').attr('src', e.target.result);
				};
				FR.readAsDataURL(e.target.files[0]);
				$this.siblings('.custom-file-control').addClass('added').text(filename);
				// $this.parents(".upload-box").next(".imageThumbTemplate").hide();
				$this.hide('fast');
			} else {
				$this.parent('.upload-box').siblings('.pip').remove();
				$this.siblings('.custom-file-control').removeClass('added').text('');
				// $this.parents(".upload-box").next(".imageThumbTemplate").show();
				$this.show('fast');
			}
		});
	}
	else {
		alert('File API не поддерживается данным браузером');
	}
	//add images

	//ie explorer flex box fixes
	// проверка на браузеры /
	getBrowser();
	var isMobile = false, browserYou;
	browserYou = getBrowser();
	if (browserYou.platform == 'mobile') {
		isMobile = true;
		$('html').addClass('mobile');
	} else {
		$('html').addClass('desktop');
	}
	if ((browserYou.browser == 'ie')) {
		$('html').addClass('ie');
	}
	if ((browserYou.browser == 'ie' &&  browserYou.versionShort < 9) || ((browserYou.browser == 'opera' || browserYou.browser == 'operaWebkit') && browserYou.versionShort < 18) || (browserYou.browser == 'firefox' &&  browserYou.versionShort < 30)) {
		$('#old-browser').modal('open');
	}
	//ie explorer flex box fixes


});

// Example starter JavaScript for disabling form submissions if there are invalid fields

document.addEventListener("DOMContentLoaded", function () {
	if (document.getElementById('ex6')) {
		// bootstrap range slider  Without JQuery
		var slider = new Slider("#ex6", {
			tooltip: 'always',
			formatter: function (value) {
				return 'Перший кредит <br> — до ' + value + ' грн.';
			}
		});
		slider.on("slide", function (sliderValue) {
			document.getElementById("ex6SliderVal").textContent = sliderValue;
		});
	}
	if (document.getElementById('ex7')) {
		// bootstrap range slider2  Without JQuery
		var slider2 = new Slider("#ex7");
		slider2.on("slide", function (sliderValue) {
			document.getElementById("ex7SliderVal").textContent = sliderValue;
		});
	}

	var form = document.getElementById("needs-validation");
	if (form) {
		form.addEventListener("submit", function (event) {
			if (form.checkValidity() == false) {
				event.preventDefault();
				event.stopPropagation();
			}
			form.classList.add("was-validated");
		});
	}
});
//popover
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();
	$('[data-toggle="popover-cvv"]').popover(
		{
			html: true,
			content: '<div><span class="popover-cvv-text">Остані 3 цифри на зворотній стороні картки.</span> <img src="images/cvv.png" alt="cvv"><div>',
			template: '<div class="popover-cvv" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
		}
	);
	$('[data-toggle="popover-reg"]').popover(
		{
			html: true,
			content: '<div><span class="popover-reg-edit">Редагувати</span><div>',
			template: '<div class="popover-edit" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
		}
	);

});

//language
$('#datepicker,#datepicker2,#datepicker3,#datepicker4,#datepicker5,#datepicker6,#datepicker7,#datepicker8,#datepicker9').datepicker({
		language: 'ua'
	}
);

//phone forms

$('input[data-validate="phone"]').mask("+380 (99) 999 99 99");
$('input[data-validate="phone2"]').mask("+380 (99) 999 99 99");
$('input[data-validate="phone3"]').mask("+380 (99) 999 99 99");
$('input[data-validate="card-number"]').mask("9999 9999 9999 9999");
$('input[data-validate="card-date"]').mask("99 / 99");


//table+accordion

$(function(){
	$(".custom-responsive-table .view").on("click", function(){
		$(this).toggleClass("open").next(".fold").toggleClass("open");
	});
});

//ie explorer flex box fixes

/* --------------- getBrowser --------------*/
function getBrowser() {
	var ua = navigator.userAgent;
	var bName = function () {
		if (ua.search(/Edge/) > -1) return "edge";
		if (ua.search(/MSIE/) > -1) return "ie";
		if (ua.search(/Trident/) > -1) return "ie11";
		if (ua.search(/Firefox/) > -1) return "firefox";
		if (ua.search(/Opera/) > -1) return "opera";
		if (ua.search(/OPR/) > -1) return "operaWebkit";
		if (ua.search(/YaBrowser/) > -1) return "yabrowser";
		if (ua.search(/Chrome/) > -1) return "chrome";
		if (ua.search(/Safari/) > -1) return "safari";
		if (ua.search(/maxHhon/) > -1) return "maxHhon";
	}();

	var version;
	switch (bName) {
		case "edge":
			version = (ua.split("Edge")[1]).split("/")[1];
			break;
		case "ie":
			version = (ua.split("MSIE ")[1]).split(";")[0];
			break;
		case "ie11":
			bName = "ie";
			version = (ua.split("; rv:")[1]).split(")")[0];
			break;
		case "firefox":
			version = ua.split("Firefox/")[1];
			break;
		case "opera":
			version = ua.split("Version/")[1];
			break;
		case "operaWebkit":
			bName = "opera";
			version = ua.split("OPR/")[1];
			break;
		case "yabrowser":
			version = (ua.split("YaBrowser/")[1]).split(" ")[0];
			break;
		case "chrome":
			version = (ua.split("Chrome/")[1]).split(" ")[0];
			break;
		case "safari":
			version = ua.split("Safari/")[1].split("")[0];
			break;
		case "maxHhon":
			version = ua.split("maxHhon/")[1];
			break;
	}
	var platform = 'desktop';
	if (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) platform = 'mobile';
	var browsrObj;
	try {
		browsrObj = {
			platform: platform,
			browser: bName,
			versionFull: version,
			versionShort: version.split(".")[0]
		};
	} catch (err) {
		browsrObj = {
			platform: platform,
			browser: 'unknown',
			versionFull: 'unknown',
			versionShort: 'unknown'
		};
	}
	return browsrObj;
}

