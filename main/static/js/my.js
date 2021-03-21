jQuery(function ($) {
	$(".jumbotron").css({ height: ($(window).height() * 0.75) + "px" });

	$(window).on("resize", function () {
		$(".jumbotron").css({ height: ($(window).height() * 0.75) + "px" });
	});
});

$(window).on("load", function () {

	function positiveArray(numbers) {
		let positiveNumbers = [];

		for (i in numbers) {
			if (i > 0) positiveNumbers.push(i);
		}
		return positiveNumbers;
	}

	console.log(positiveArray([-2, -10,]));

	function setBarValues(values) {
		let i; let j;
		for (i = 6, j = 0; i < 24; i++, j++) {
			$.keyframe.define([{
				name: 'animation' + j.toString(),
				'100%': {
					'height': values[j].toString() + '%',
				}
			},
			]);

			$('#' + i.toString() + 'am').playKeyframe({
				name: 'animation' + j.toString(),
				duration: '1.75s',
				fillMode: 'forwards',
			});
		}
	}

	function generateArray() {
		let arr = [];
		for (let i = 0; i < 18; i++) {
			arr.push(Math.floor((Math.random() * 100) + 1));
		}
		return arr;
	}

	$('.form-control').change(function () {
		var date = new Date($('.form-control').val());
		var day = date.getDate();
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		setBarValues(generateArray());
	});
});
