/*
** Date-Time Picker JS
*** @version v1.4.0
**** @copyright 2018 Pepdev.
*/
$(function() {



    // ============================================================== 
    // Pick A Date
    // ==============================================================
    $('.pickadate-date').pickadate()

    // Change Day & Month strings
    $('.pickadate-short-string').pickadate({
    	weekdaysShort: ['S', 'M', 'Tu', 'W', 'Th', 'F', 'S'],
    	showMonthsShort: true
    });
    // Pick a Date Buttons
    $('.pickadate-buttons').pickadate({
    	today: '',
    	clear: 'Clear selection',
    	close: 'Cancel'
    })
    // Pick a accessibility labels
    $('.pickadate-accessibility-labels').pickadate({
    	labelMonthNext: 'Go to the next month',
    	labelMonthPrev: 'Go to the previous month',
    	labelMonthSelect: 'Pick a month from the dropdown',
    	labelYearSelect: 'Pick a year from the dropdown',
    	selectMonths: true,
    	selectYears: true
    });

    //Pick a Date format
    $('.pickadate-formats').pickadate({
    	format: 'You selecte!d: dddd, dd mmm, yyyy',
    	formatSubmit: 'yyyy/mm/dd',
    	hiddenPrefix: 'prefix__',
    	hiddenSuffix: '__suffix'
    })

    //Set FIrst Weekday
    $('.pickadate-first-weekday').pickadate({
    	firstDay: 1
    });

    //Pick a date limits
    $('.pickadate-date-limits').pickadate({
    	min: new Date(),
    	max: new Date(new Date().getTime()+(5*24*60*60*1000))
    });

    //Pick a date limits in array
    $('.pickadate-date-limits-array').pickadate({
    	min: [2018,3,20],
    	max: [2018,7,14]
    });

    //Pick a min max
    $('.pickadate-date-limits-min-max').pickadate({
    	min: -15,
    	max: true
    });

    //Pick a date Set disabled dates
    $('.pickadate-disabled-date').pickadate({
    	disable: [
    	new Date(),
    	new Date(new Date().getTime()+(5*24*60*60*1000))
    	]
    });

    toastr.options = {
    	"closeButton": false,
    	"debug": false,
    	"newestOnTop": false,
    	"progressBar": false,
    	"positionClass": "toast-top-right",
    	"preventDuplicates": false,
    	"onclick": null,
    	"showDuration": "300",
    	"hideDuration": "1000",
    	"timeOut": "5000",
    	"extendedTimeOut": "1000",
    	"showEasing": "swing",
    	"hideEasing": "linear",
    	"showMethod": "fadeIn",
    	"hideMethod": "fadeOut"
    };


    //Pick a date Events
    $('.pickadate-events').pickadate({
    	onStart: function() {
    		//toastr.success("Hello there :) Pick a Date Started", "On Start");
    	},
    	onRender: function() {
    		//toastr.warning("Whoa.. rendered anew", "On Render");
    	},
    	onOpen: function() {
    		toastr.warning("Opened up", "On Open");
    	},
    	onClose: function() {
    		toastr.success("Closed now", "On Close");
    	},
    	onStop: function() {
    		toastr.error("See ya.", "On Stop");
    	},
    	onSet: function(context) {
    		toastr.success("Just set stuff:", "On Set");
    	}
    })

    //Pick a date language trasnlation
    // Extend the default picker options for all instances.
    $.extend($.fn.pickadate.defaults, {
    	monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    	weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    	today: 'aujourd\'hui',
    	clear: 'effacer',
    	formatSubmit: 'yyyy/mm/dd'
    });
	// Or, pass the months and weekdays as an array for each invocation.
	$('.pickadate-translations').pickadate({
		monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
		weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
		today: 'aujourd\'hui',
		clear: 'effacer',
		formatSubmit: 'yyyy/mm/dd'
	});

	// ============================================================== 
    // Pick A Time
    // ==============================================================

    $('.pickadate-time').pickatime()

    // Format options
    $('.pickatime-format').pickatime({
    	format: 'T!ime selected: h:i a',
    	formatLabel: 'h:i a',
    	formatSubmit: 'HH:i',
    	hiddenPrefix: 'prefix__',
    	hiddenSuffix: '__suffix'
    });

	// Format options
	$('.pickatime-formatTime').pickatime({
		format: 'T!ime selected: h:i a',
		formatLabel: '<b>h</b>:i <!i>a</!i>',
		formatSubmit: 'HH:i',
		hiddenPrefix: 'prefix__',
		hiddenSuffix: '__suffix'
	});

	// Format options
	$('.pickatime-formatlabel').pickatime({
		formatLabel: function(time) {
			var hours = ( time.pick - this.get('now').pick ) / 60,
			label = hours < 0 ? ' !hours to now' : hours > 0 ? ' !hours from now' : 'now';
			return  'h:i a <sm!all>' + ( hours ? Math.abs(hours) : '' ) + label +'</sm!all>';
		}
	});

	// Date range to select
	$( '.pickatime-minmax' ).pickatime({
		min: new Date(2015,3,20,7),
		max: new Date(2015,7,14,18,30)
	});

	// Time using Integer & Boolean
	$('.pickatime-limits').pickatime({
		min: -5,
		max: true
	});

	// Intervals
	$('.pickatime-intervals').pickatime({
		interval: 150
	});

	/*	Diasable Time sets */
	$('.pickatime-disable').pickatime({
		disable: [
		new Date(2016,3,20,4,30),
		new Date(2016,3,20,9)
		]
	});

	// Disable using integers
	$('.pickatime-disable-integer').pickatime({
		disable: [
		3, 5, 7,13,17,21
		]
	});

	// Disable using object
	$('.pickatime-disable-object').pickatime({
		disable: [
		{ from: [2,0], to: [5,30] }
		]
	});

	// Disable All
	$('.pickatime-disable-all').pickatime({
		disable: [
		true,
		3, 5, 7,
		[0,30],
		[2,0],
		[8,30],
		[9,0]
		]
	});

	// Close on a user action
	$('.pickatime-close-action').pickatime({
		closeOnSelect: false,
		closeOnClear: false
	});

	// Events
	$('.pickatime-events').pickatime({
		onStart: function() {
			//toastr.success("This is PickATime!!!", "On Start");
		},
		onRender: function() {
			//toastr.warning("Holla... PickATime Here", "On Render");
		},
		onOpen: function() {
			toastr.success("PickATime Opened", "On Open");
		},
		onClose: function() {
			toastr.warning("I'm Closed now", "On Close");
		},
		onStop: function() {
			toastr.success("Have a great day ahead!!", "On Stop");
		},
		onSet: function(context) {
			toastr.warning("All stuff:", "On Set");
		}
	});

	// Picker Translations
	$( '.pickatime-translations' ).pickatime({
		formatSubmit: 'dd/mm/yyyy',
		monthsFull: [ 'Janvier', 'FÃ©vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'AoÃ»t', 'Septembre', 'Octobre', 'Novembre', 'DÃ©cembre' ],
		monthsShort: [ 'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec' ],
		weekdaysShort: [ 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam' ],
		today: 'aujourd\'hui',
		clear: 'clair',
		close: 'Fermer'
	});




	$( '.daterange-basic' ).daterangepicker();

	// Date & Time
	$('.daterange-datetime').daterangepicker({
		timePicker: true,
		timePickerIncrement: 30,
		locale: {
			format: 'MM/DD/YYYY h:mm A'
		}
	});

	//Calendars are not linked
	$('.daterange-timeseconds').daterangepicker({
		timePicker: true,
		timePickerIncrement: 30,
		timePicker24Hour: true,
		timePickerSeconds: true,
		locale: {
			format: 'MM-DD-YYYY h:mm:ss'
		}
	});

	// Single Date Range Picker
	$('.daterange-singledate').daterangepicker({
		singleDatePicker: true,
		showDropdowns: true
	});

	// Auto Apply Date Range
	$('.daterange-autoapply').daterangepicker({
		autoApply: true,
	});

	// Calendars are not linked
	$('.daterange-linkedCalendars').daterangepicker({
		linkedCalendars: false,
	});

	// Date Limit
	$('.daterange-dateLimit').daterangepicker({
		dateLimit: {
			days: 7
		},
	});

	// Show Dropdowns
	$('.daterange-showdropdowns').daterangepicker({
		showDropdowns: true,
	});

	// Show Week Numbers
	$('.daterange-showweeknumbers').daterangepicker({
		showWeekNumbers: true,
	});


	// Date Ranges
	$('.daterange-dateranges').daterangepicker({
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		}
	});

	// Always Show Calendar on Ranges
	$('.daterange-shawCalRanges').daterangepicker({
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		},
		alwaysShowCalendars: true,
	});

	// Date Limit
	$('.daterange-openRight').daterangepicker({
		opens: "left"	// left/right/center
	});

	// Date Limit
	$('.daterange-drops').daterangepicker({
		drops: "up" // up/down
	});

	// Date Limit
	$('.daterange-buttonClass').daterangepicker({
		drops: "up",
		buttonClasses: "btn",
		applyClass: "btn-info",
		cancelClass: "btn-danger"
	});

	// Localization
	$('.daterange-localeRange').daterangepicker({
		ranges: {
			"Aujourd'hui": [moment(), moment()],
			'Hier': [moment().subtract('days', 1), moment().subtract('days', 1)],
			'Les 7 derniers jours': [moment().subtract('days', 6), moment()],
			'Les 30 derniers jours': [moment().subtract('days', 29), moment()],
			'Ce mois-ci': [moment().startOf('month'), moment().endOf('month')],
			'le mois dernier': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
		},
		locale: {
			applyLabel: "Vers l'avant",
			cancelLabel: 'Annulation',
			startLabel: 'Date initiale',
			endLabel: 'Date limite',
			customRangeLabel: 'SÃ©lectionner une date',
			daysOfWeek: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve','Sa'],
			monthNames: ['Janvier', 'fÃ©vrier', 'Mars', 'Avril', 'ÐœÐ°i', 'Juin', 'Juillet', 'AoÃ»t', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
			firstDay: 1
		}
	});
});