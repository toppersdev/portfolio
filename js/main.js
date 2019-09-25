jQuery(document).ready(function( $ ) {

		// Menu settings
		$('#menuToggle, .menu-close').on('click', function(){
			$('#menuToggle').toggleClass('active');
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
		});

		// Smooth scroll for the menu and links with .scrollto classes
	  $('.smoothscroll').on('click', function(e) {
	    e.preventDefault();
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      if (target.length) {

	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1500, 'easeInOutExpo');
	      }
	    }
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
	  });
});


// #dgが画面内に入ったときに実行される処理をここに書く。
$('#dg').waypoint({
  handler(direction) {
		if (direction === 'down') {
			// Swift Chart
			if($('#swift').length) {
				var doughnutData = [{
	      	  value: 70,
	        	color: "#f85c37"
	      	},
	      	{
	        	value: 30,
	        	color: "#ecf0f1"
	      	}
	    	];
	    	var myDoughnut = new Chart(document.getElementById("swift").getContext("2d")).Doughnut(doughnutData);
			};

			// HTML/CSS Chart
			if($('#html_css').length) {
				var doughnutData = [{
						value: 60,
						color: "#f85c37"
					},
					{
						value: 40,
						color: "#ecf0f1"
					}
				];
				var myDoughnut = new Chart(document.getElementById("html_css").getContext("2d")).Doughnut(doughnutData);
			}

			// Javascript Chart
			if($('#javascript').length) {
				var doughnutData = [{
						value: 50,
						color: "#f85c37"
					},
					{
						value: 50,
						color: "#ecf0f1"
					}
				];
				var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);
			}

			// Illustrator Chart
			if($('#javascript').length) {
				var doughnutData = [{
						value: 50,
						color: "#f85c37"
					},
					{
						value: 50,
						color: "#ecf0f1"
					}
				];
				var myDoughnut = new Chart(document.getElementById("illustrator").getContext("2d")).Doughnut(doughnutData);
			}
	      this.destroy();
		}
	},
  // 要素の上端が画面のどの位置に来たときにhandlerを実行するかを指定。
  // 0%なら画面の一番上、100%なら画面の一番下に来たときに実行される。
  offset: '70%',
});
