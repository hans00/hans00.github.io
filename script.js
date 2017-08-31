$.getJSON("everything.json", function (data) {
	var app = new Vue({
		el: '#app',
		data: {
			data: data
		},
		mounted: function() {
			$('.loading').fadeOut('fast');
			$('#app').animate({opacity: 1}, 'fast');
			if (window.location.hash != "" && $('html, body').scrollTop() != $(window.location.hash).offset().top) {
				$('html, body').animate({
					scrollTop: $(window.location.hash).offset().top
				}, 300);
			}
			$(window).on('hashchange', function() {
				$('html, body').animate({
					scrollTop: $(window.location.hash).offset().top
				}, 300);
			});
			$("a[href^=#]").on('click', function (e) {
				e.preventDefault();
				var hashTag = $(this).attr('href');
				$('html, body').animate({
					scrollTop: $(hashTag).offset().top
				}, 300, function () {
					window.location.href = hashTag;
				});
			});
		}
	});
});