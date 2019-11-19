/*
** Calendar JS
*** @version v1.4.0
**** @copyright 2018 Pepdev.
*/
$(function() {
    // ============================================================== 
    // Calendar 1
    // ==============================================================
    var todayDate = moment().startOf('day'),
    YM = todayDate.format('YYYY-MM'),
    YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD'),
    TODAY = todayDate.format('YYYY-MM-DD'),
    TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');
    
    //Set Event data in data variable
    var events = [
    {
        title: 'All Day Event',
        start: YM + '-01',
        className: "fc-event-white fc-event-solid-warning"  
    },
    {
        title: 'Long Event',
        start: YM + '-07',
        end: YM + '-10',
        className: "fc-event-warning fc-event-solid-white" ,
        description: 'Lorem ipsum dolor eiu idunt ut labore'

    },
    {
        title: 'Annual Allergies Conference',
        start: YM + '-08',
        className: "fc-event-solid-success" 
    },
    {
        title: 'Three Day Event',
        start: YM + '-18',
        end: YM + '-21',
        className: "fc-event-white fc-event-solid-primary fc-event-gradient" 
    },
    {
        title: 'Two Day Event',
        start: YM + '-19',
        end: YM + '-21',
        className: "fc-event-success fc-event-solid-white" 
    },
    {
        id: 999,
        title: 'Repeating Event',
        start: YM + '-11',
        className: "fc-event-white fc-event-solid-info" 
    },
    {
        id: 999,
        title: 'Medical Event',
        start: YM + '-12',
        className: "fc-event-dark fc-event-solid-warning fc-event-gradient" 
    },
    {
        id: 999,
        title: 'Report and statement writing skills - achieving clinical excellence',
        start: YM + '-12',
        end: YM + '-15',
        className: "fc-event-white fc-event-solid-success" 
    },
    {
        id: 999,
        title: 'Clinic Anniversary',
        start: YM + '-09T16:00:00',
        className: "fc-event-white fc-event-solid-primary" 
    },
    {
        id: 999,
        title: 'Allergies Conference',
        start: YM + '-16T16:00:00',
        className: "fc-event-white fc-event-solid-success fc-event-gradient" 
    },
    {
        title: 'Conference',
        start: YESTERDAY,
        end: TOMORROW,
        className: "fc-event-white fc-event-solid-black" 
    },
    {
        title: 'Meeting',
        start: TOMORROW + 'T10:30:00',
        end: TOMORROW + 'T12:30:00',
        className: "fc-event-white fc-event-solid-dark fc-event-gradient" 
    },
    {
        title: 'Lunch',
        start: TODAY + 'T12:00:00',
        className: "fc-event-black fc-event-solid-white" 
    },
    {
        title: 'Meeting',
        start: YM + '-13',
        className: "fc-event-black fc-event-solid-white" 
    },
    {
        title: 'Happy Hour',
        start: YM + '-16',
        className: "fc-event-danger fc-event-solid-white" 
    },
    {
        title: '5th Advances in Stem Cell Biology Course',
        start: YM + '-23',
        className: "fc-event-success fc-event-solid-white" 
    },
    {
        title: 'Birthday Party',
        start: YM + 'T07:00:00',
        className: "fc-event-warning fc-event-solid-white" 
    },
    {
        title: 'The Mental Capacity Masterclass',
        start: YM + '-3',
        className: "fc-event-danger fc-event-solid-white" 
    },
    {
        title: 'Eliminating Heel Pressure Ulcers',
        start: YM + '-6',
        className: "fc-event-info fc-event-solid-white" 
    },
    {
        title: 'Mechanisms in Plant Development',
        start: YM + '-5',
        className: "fc-event-secondary fc-event-solid-white" 
    },
    {
        title: 'International Conference on Biological Inorganic Chemistry',
        start: YM + '-26',
        className: "fc-event-danger fc-event-solid-white" 
    },
    {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: YM + '-28',
        className: "fc-event-solid-info" 
    }
    ]; 
    

    //Basic Calendar
    $('#basic-calendar').fullCalendar({
        header: { //Set Header bar values
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
        },
        editable: true,
        eventLimit: true, // Event Limit
        navLinks: true,
        events: events, 
        eventClick: function(event, jsEvent, view) { //Event Click Function
            if (event.url) {
                window.open(event.url);
                return false;
            }
        }
    });
    //List Calendar
    $('#list-calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
        },
        defaultView: 'listWeek',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        navLinks: true,
        height: 900,
        events: events
    });
    //External Event Calendar
    $('#external-calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
        },
        editable: true,
        eventLimit: true,
        navLinks: true,
        events: events,
        editable: true,
        droppable: true,

        drop: function(date, jsEvent, ui, resourceId) {
            var start_date = $.fullCalendar.moment(date.format()).stripTime(),
            end_date = $.fullCalendar.moment(date.format()).stripTime();

            $(this).data('event').start = start_date.time('08:00:00');
            $(this).data('event').end = end_date.time('12:00:00');
        },

        eventClick: function(event, jsEvent, view) {
            if (event.url) {
                window.open(event.url);
                return false;
            }

        }
    });

    //Drag Event for external event Calendar
    $('.calendar-external-events .fc-event').each(function() {
        //On Drag create event
        $(this).data('event', {
            title: $.trim($(this).text()),
            stick: true,
            className: $(this).data('color')
        });

        //Revert If dragged somewhere else.
        $(this).draggable({
            zIndex: 999,
            revert: true,
            revertDuration: 0
        });
    });
});