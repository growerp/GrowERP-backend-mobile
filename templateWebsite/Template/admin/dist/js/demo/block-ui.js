/*
** Block UI JS
*** @version v1.4.0
**** @copyright 2018 Pepdev.
*/
$(function() {

    // ============================================================== 
    // Block UI
    // ==============================================================
    // Block Panel
    $('.blockui-panel').on('click', function() {
    	var ele = $(this).parents('.panel');
    	$(ele).block({
    		message: '<div class="icon-refresh spinner font-20"></div>',
    		timeout: 2000,
    		overlayCSS: {
    			backgroundColor: '#fff',
    			opacity: 0.8,
    			cursor: 'wait'
    		},
    		css: {
    			border: 0,
    			padding: 0,
    			backgroundColor: 'transparent'
    		}
    	});
    });


    // Block page
    $('.blockui-page').on('click', function() {
    	$.blockUI({
    		message: '<div class="icon-refresh spinner font-20"></div>',
    		timeout: 2000,
    		overlayCSS: {
    			backgroundColor: '#FFF',
    			opacity: 0.8,
    			cursor: 'wait'
    		},
    		css: {
    			border: 0,
    			padding: 0,
    			backgroundColor: 'transparent'
    		}
    	});
    });


    // Block Left Side Menu
    $('.blockui-left-menu').on('click', function() {
    	var ele = $('.menu-wrapper');
    	$(ele).block({
    		message: '<div class="icon-refresh spinner font-20"></div>',
    		timeout: 2000,
    		overlayCSS: {
    			backgroundColor: '#f1f1f1',
    			opacity: 0.8,
    			cursor: 'wait'
    		},
    		css: {
    			border: 0,
    			padding: 0,
    			backgroundColor: 'transparent'
    		}
    	});
    });


    // ============================================================== 
    // Message Option
    // ==============================================================

    // Defult Message
    $('.blockui-default-message').on('click', function() {
    	var ele = $(this).parents('.panel');
    	$(ele).block({
    		message: '<span class="font-500"> Loading...</span>',
    		timeout: 2000,
    		overlayCSS: {
    			backgroundColor: '#fff',
    			opacity: 0.8,
    			cursor: 'wait'
    		},
    		css: {
    			border: 0,
    			padding: 0,
    			backgroundColor: 'transparent'
    		}
    	});
    });

    // Custom Message
    $('.blockui-custom-message').on('click', function() {
    	var ele = $(this).parents('.panel');
    	$(ele).block({
    		message: '<span class="font-18"> Custom Message...</span>',
    		timeout: 2000,
    		overlayCSS: {
    			backgroundColor: '#fff',
    			opacity: 0.8,
    			cursor: 'wait'
    		},
    		css: {
    			border: 0,
    			padding: 0,
    			backgroundColor: 'transparent'
    		}
    	});
    });


    // Message Animation
    $('.blockui-msg-animation').on('click', function() {
    	var ele = $(this).parents('.panel');
    	$(ele).block({
    		message: '<div class="font-16"><div class="icon-refresh spinner mr-2 d-inline-block"></div>Loading ...</div>',
    		fadeIn: 1000,
    		fadeOut: 1000,
    		timeout: 2000,
    		overlayCSS: {
    			backgroundColor: '#fff',
    			opacity: 0.8,
    			cursor: 'wait'
    		},
    		css: {
    			border: 0,
    			padding: '10px 15px',
    			color: '#fff',
    			width: 'auto',
    			backgroundColor: '#333'
    		}
    	});
    });


    // Multiple messages
    $('.blockui-multiple-msgs').on('click', function() {
    	var message = $('.multiple-msgs-container'), 
    	ele = $(this).parents('.panel');
    	$(ele).block({
    		message: message,
    		overlayCSS: {
    			backgroundColor: '#fff',
    			opacity: 0.8,
    			cursor: 'wait'
    		},
    		css: {
				// width: 200,
				border: 0,
				padding: 0,
				backgroundColor: 'transparent'
			},
			onBlock: function(){
				clearTimeout();
			}
		});

    	window.setTimeout(function () {
    		message.html('<div class="font-16"><div class="icon-refresh spinner mr-2 d-inline-block"></div>Loading ...</div>');
    	}, 0);

    	window.setTimeout(function () {
    		message.html('<div class="semibold">Getting Data</div>');
    	}, 2000);

    	window.setTimeout(function () {
    		message.html('<div class="font-16"><span class="icon-thumbs-o-up mr-2"></span>Job Well Done</div>');
    	}, 4000);

    	window.setTimeout(function () {
    		$(ele).unblock();
    	}, 6000);
    });

    // Non centered message
    $('.blockui-non-centered-msgs').on('click', function() {
    	ele = $(this).parents('.panel');
    	$(ele).block({
    		message: '<div class="font-16"><div class="icon-refresh spinner mr-2 d-inline-block"></div>Loading</div>',
    		timeout: 2000,
    		centerX: 0,
    		centerY: 0,
    		overlayCSS: {
    			backgroundColor: '#fff',
    			opacity: 0.8,
    			cursor: 'wait'
    		},
    		css: {
    			top: '10px',
    			left: '',
    			right: '10px',
    			border: 0,
    			padding: '10px 15px',
    			backgroundColor: 'transparent'
    		}
    	});
    });

    // Custom overlay
    $('.blockui-blue-overlay').on('click', function() {
    	ele = $(this).parents('.panel');
    	$(ele).block({
    		message: '<div class="icon-refresh spinner font-20"></div>',
    		timeout: 2000,
    		overlayCSS: {
    			backgroundColor: '#3483FF',
    			opacity: 1,
    			cursor: 'wait'
    		},
    		css: {
    			border: 0,
    			padding: 0,
    			color: '#fff',
    			backgroundColor: 'transparent'
    		}
    	});
    });


    // Overlay with custom color
    $('.blockui-custom-overlay').on('click', function() {
    	ele = $(this).parents('.panel');
    	$(ele).block({
    		message: '<div class="icon-refresh spinner font-20"></div>',
            timeout: 2000,
            overlayCSS: {
            	backgroundColor: '#282a3c',
            	opacity: 0.7,
            	cursor: 'wait'
            },
            css: {
            	border: 1,
            	padding: 0,
            	color: '#fff',
            	backgroundColor: 'transparent'
            }
        });
    });

    // onBlock callback
    $('.blockui-callback-onblock').on('click', function() {
    	$.blockUI({
    		message: '<div class="ft-refresh-cw icon-spin font-medium-2"></div>',
    		fadeIn: 400,
            timeout: 2000,
            overlayCSS: {
            	backgroundColor: '#FFF',
            	opacity: 0.8,
            	cursor: 'wait'
            },
            css: {
            	border: 0,
            	padding: 0,
            	color: '#333',
            	backgroundColor: 'transparent'
            },
            onBlock: function() {
            	toastr.warning("Page is now blocked, FadeIn complete.");
            }
        });
    });


    // onUnblock callback
    $('.blockui-callback-onUnblock').on('click', function() {
    	$.blockUI({
    		message: '<div class="ft-refresh-cw icon-spin font-medium-2"></div>',
            timeout: 2000,
            overlayCSS: {
            	backgroundColor: '#FFF',
            	opacity: 0.8,
            	cursor: 'wait'
            },
            css: {
            	border: 0,
            	padding: 0,
            	color: '#333',
            	backgroundColor: 'transparent'
            },
            onUnblock: function() {
            	toastr.warning("Page is now unblocked. FadeOut complete.");
            }
        });
    });


    // Overlay callback
    $('.blockui-callback-onoverlay-click').on('click', function() {
    	$.blockUI({
    		message: '<div class="ft-refresh-cw icon-spin font-medium-2"></div>',
    		overlayCSS: {
    			backgroundColor: '#FFF',
    			opacity: 0.8,
    			cursor: 'wait'
    		},
    		css: {
    			color: '#333',
    			border: 0,
    			padding: 0,
    			backgroundColor: 'transparent'
    		},
    		onOverlayClick: $.unblockUI
    	});
    });


    // Growl notification
    $('.growl-notification').on('click', function() {
    	$.blockUI({
    		message: 'Growl Notification, Have a nice day!' ,
    		fadeIn: 700,
    		fadeOut: 700,
    		timeout: 50000,
    		showOverlay: false,
    		centerY: false,
    		css: {
    			width: '250px',
    			top: '20px',
    			left: '',
    			right: '20px',
    			border: 'none',
    			padding: '16px 8px',
    			backgroundColor: '#282a3c',
    			'-webkit-border-radius': '10px',
    			'-moz-border-radius': '10px',
    			opacity: 0.9,
    			color: '#fff'
    		}
    	});
    });
});