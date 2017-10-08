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
	if (window.File && window.FileList && window.FileReader) {
		document.body.addEventListener('click', function (event) {
			var target = $(event.target);
			if (event.target.matches('.remove_input_control')) {
				$(target).parents('.image-upload-holder').find('input').val('').trigger('change');
				$(target).parents('.image-upload-holder').find('.image-upload').html('');
			}
		});
		$(".inputfile").on("change", function (e) {
			var $this = $(this);
			console.log($this);
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
});

$('#datepicker,#datepicker2,#datepicker3,#datepicker4,#datepicker5,#datepicker6,#datepicker7,#datepicker8,#datepicker9').datepicker({
		language: 'ua'
	}
);


$('input[data-validate="phone"]').mask("+380 (99) 999 99 99");
$('input[data-validate="phone2"]').mask("+380 (99) 999 99 99");
$('input[data-validate="phone3"]').mask("+380 (99) 999 99 99");
$('input[data-validate="card-number"]').mask("9999 9999 9999 9999");
$('input[data-validate="card-date"]').mask("99 / 99");


