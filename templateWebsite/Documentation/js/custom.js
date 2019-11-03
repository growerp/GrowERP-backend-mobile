$(document).ready(function () {
    //Fixed Header
          $('.menu-wrapper').scrollToFixed({
            dontSetWidth : true
          });
          $(".menu-wrapper a").click(function(evn){
            evn.preventDefault();
            $('html,body').scrollTo(this.hash, this.hash); 
          });
          var aChildren = $(".menu-wrapper li").children();
          var aArray = [];
          for (var i=0; i < aChildren.length; i++) {    
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
          } 

          $(window).scroll(function(){
            var windowPos = $(window).scrollTop();
            var windowHeight = $(window).height();
            var docHeight = $(document).height();

            for (var i=0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top - 200;
                var divHeight = $(theID).height();
                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                    $("a[href='" + theID + "']").addClass("active");
                } else {
                    $("a[href='" + theID + "']").removeClass("active");
                }
            }

            if(windowPos + windowHeight == docHeight) {
                if (!$(".menu-wrapper li:last-child a").hasClass("active")) {
                    var navActiveCurrent = $("#hdr-wrapper").attr("href");
                    $("a[href='" + navActiveCurrent + "']").removeClass("active");
                    $(".menu-wrapper li:last-child a").addClass("active");
                }
            }
          });
	//*************************************************
    //Left Side menu  *********************************
    //*************************************************
    $('body').on('click', '.menu-close', function () {
    	var ele = $(this);
    	$('#main-wrapper').addClass('page-menu-small');
    	ele.find('i').removeClass('fa-hand-point-left');
    	ele.find('i').addClass('fa-hand-point-right');
    	ele.removeClass('menu-close');
    	ele.addClass('menu-open');
    });

    $('body').on('click', '.menu-open', function () {
    	var ele = $(this);
    	$('#main-wrapper').removeClass('page-menu-small');
    	ele.find('i').removeClass('fa-hand-point-right');
    	ele.find('i').addClass('fa-hand-point-left');
    	ele.removeClass('menu-open');
    	ele.addClass('menu-close');
    });
	//Left side Sub Menu 
	$('.left-menu-dropdown').click(function () {
		var ele = $(this);
		if (ele.siblings('.sub-menu').css('display') === 'none') {
			$('.sub-menu').slideUp();
			$('#menu-menu ul a').removeClass('menu-arrow-rotate');
			ele.addClass('menu-arrow-rotate');
			ele.siblings('.sub-menu').slideDown(200);
		} else {
			ele.removeClass('menu-arrow-rotate');
			$('.sub-menu').slideUp(200);
		}
	});

    //Open Left Side Menu in mobile
    $('body').on('click', '.open-left-menu', function () {
        var ele = $('.menu-wrapper');
        $('body').append('<div class="menu-overlay"></div>');
        ele.addClass('menu-mobile-open');
    });
    //Close Left Side Menu in mobile
    $('body').on('click', '.menu-overlay', function () {
        $('.menu-wrapper').removeClass('menu-mobile-open');
        $('.menu-overlay').remove();
    });

});