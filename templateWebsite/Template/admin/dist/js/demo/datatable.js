/*
** Dashboard JS
*** @version v1.4.0
**** @copyright 2018 Pepdev.
*/
$(function() {

    // ============================================================== 
    // Datatable Plugin
    // ==============================================================
    
    //Data variable
    var dataSet = [
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
    ];
    var dataSet1 = [
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
    ];

    // ============================================================== 
    // Basic Datatable
    // ==============================================================
    $('.basic-datatable').DataTable({
        pagingType: 'full_numbers',
        language: {
            "paginate": {
                "first":       '<i class="ti-angle-double-left"></i>',
                "previous":    '<i class="ti-angle-left"></i>',
                "next":        '<i class="ti-angle-right"></i>',
                "last":        '<i class="ti-angle-double-right"></i>'
            }
        }
    });

    // ============================================================== 
    // Vertical Scroll Datatable
    // ==============================================================
    $('.vertical-scroll-datatable').DataTable({
        scrollY: "250px",
        scrollCollapse: true,
        pagingType: 'full_numbers',
        language: {
            "paginate": {
                "first":       '<i class="ti-angle-double-left"></i>',
                "previous":    '<i class="ti-angle-left"></i>',
                "next":        '<i class="ti-angle-right"></i>',
                "last":        '<i class="ti-angle-double-right"></i>'
            }
        }
    });

    // ============================================================== 
    // Horizontal Scroll Datatable
    // ==============================================================
    $('.horizontal-scroll-datatable').DataTable({
        scrollX: true,
        scrollCollapse: true,
        language: {
            "paginate": {
                "first":       '<i class="ti-angle-double-left"></i>',
                "previous":    '<i class="ti-angle-left"></i>',
                "next":        '<i class="ti-angle-right"></i>',
                "last":        '<i class="ti-angle-double-right"></i>'
            }
        }
    });

    // ============================================================== 
    // Verticla and Horizontal Datatable
    // ==============================================================
    $('.vertical-horizontal-scroll-datatable').DataTable({
        scrollY: "250px",
        scrollCollapse: true,
        scrollX: true,
        pagingType: 'full_numbers',
        language: {
            "paginate": {
                "first":       '<i class="ti-angle-double-left"></i>',
                "previous":    '<i class="ti-angle-left"></i>',
                "next":        '<i class="ti-angle-right"></i>',
                "last":        '<i class="ti-angle-double-right"></i>'
            }
        }
    });

    // ============================================================== 
    // Responsive Datatable
    // ==============================================================
    $('.responsive-datatable').DataTable({
        responsive: true,
        pagingType: 'full_numbers',
        "language": {
            "paginate": {
                "first":       '<i class="ti-angle-double-left"></i>',
                "previous":    '<i class="ti-angle-left"></i>',
                "next":        '<i class="ti-angle-right"></i>',
                "last":        '<i class="ti-angle-double-right"></i>'
            }
        }
    });

    // ============================================================== 
    // Multiple language or translation Datatable
    // ==============================================================
    $('.multiple-language-datatable').DataTable({
        pagingType: 'full_numbers',
        "language": {
            "lengthMenu": "tonen _MENU_ Records per pagina",
            "zeroRecords": "Niets gevonden - sorry",
            "info": "Pagina weergeven _PAGE_ of _PAGES_",
            "infoEmpty": "Geen gegevens beschikbaar",
            "infoFiltered": "(filtered from _MAX_ total records)",
            "paginate": {
                "first":       '<i class="ti-angle-double-left"></i>',
                "previous":    '<i class="ti-angle-left"></i>',
                "next":        '<i class="ti-angle-right"></i>',
                "last":        '<i class="ti-angle-double-right"></i>'
            }
        }
    });

    // ============================================================== 
    // Complex Header Datatable
    // ==============================================================
    $('.complex-headers-datatable').DataTable({
        "columnDefs": [ {
            "visible": false,
            "targets": -1
        } ]
    });

    // ============================================================== 
    // Complex Rendering Datatable
    // ==============================================================
    $('.column-rendering-datatable').DataTable({
        "columnDefs": [ {
            "render": function ( data, type, row ) {
                return data +' ('+ row[3]+')';
            },
            "targets": 0
        },
        { "visible": false,  "targets": [ 3 ] }
        ]
    });

    // ============================================================== 
    // Read HTML to Data Object Datatable
    // ==============================================================
    $('.read-HTML-to-data-objects-datatable').DataTable({
        "columns": [
        { "data": "name" },
        { "data": "position" },
        { "data": "office" },
        { "data": "age" },
        { "data": "start_date" },
        { "data": "salary" }
        ]
    });

    // ============================================================== 
    // Row Grouping Datatable
    // ==============================================================
    $('.row-grouping-datatable').DataTable({
        "columnDefs": [
        { "visible": false, "targets": 2 }
        ],
        "order": [[ 2, 'asc' ]],
        "displayLength": 25,
        "drawCallback": function ( settings ) {
            var api = this.api();
            var rows = api.rows( {page:'current'} ).nodes();
            var last=null;

            api.column(2, {page:'current'} ).data().each( function ( group, i ) {
                if ( last !== group ) {
                    $(rows).eq( i ).before(
                        '<tr class="group"><td colspan="5">'+group+'</td></tr>'
                        );
                    last = group;
                }
            } );
        }
    });


    // ============================================================== 
    // Ajax Source Datatable
    // ==============================================================
    $('.ajax-source-datatable').DataTable( {
        "ajax": 'source/datatable-data.txt'
    });


    // ============================================================== 
    // Javascript Source Datatable
    // ==============================================================
    $('.javascript-source-datatable').DataTable( {
        data: dataSet,
        columns: [
        { title: "Name" },
        { title: "Position" },
        { title: "Office" },
        { title: "Extn." },
        { title: "Start date" },
        { title: "Salary" }
        ]
    });


    // ============================================================== 
    // Add Row in Table Datatable
    // ==============================================================
    var addRowTable = $('.add-row-datatable').DataTable(),
    counter = 1;
    //add row function
    $('#addRow').on( 'click', function () {
        addRowTable.row.add( [
            counter +'.1',
            counter +'.2',
            counter +'.3',
            counter +'.4',
            counter +'.5'
            ] ).draw( false );

        counter++;
    });


    // ============================================================== 
    // Column Searching as Input type Datatable
    // ==============================================================
    $('.individual-column-searching-text-datatable tfoot th').each( function () {
        var title = $(this).text();
        $(this).html('<input type="text" class="form-control" placeholder="Search '+title+'">');
    } );
    // DataTable
    var individualColumnTextSearching = $('.individual-column-searching-text-datatable').DataTable({
        scrollX: true,
        scrollCollapse: true,
    });

    // Apply the search
    individualColumnTextSearching.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                .search( this.value )
                .draw();
            }
        } );
    });


    // ============================================================== 
    // Column Searching as Select Option Datatable
    // ==============================================================
    $('.individual-column-searching-option-datatable').DataTable( {
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select class="form-control"><option value=""></option>'+'</select>')
                .appendTo( $(column.footer()).empty() )
                .on( 'change', function () {
                    var val = $.fn.dataTable.util.escapeRegex(
                        $(this).val()
                        );

                    column
                    .search( val ? '^'+val+'$' : '', true, false )
                    .draw();
                } );

                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        }
    });

    function format ( d ) {
        // `d` is the original data object for the row
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
        '<td>Full name:</td>'+
        '<td>'+d.name+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>Extension number:</td>'+
        '<td>'+d.extn+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>Extra info:</td>'+
        '<td>And any further details here (images etc)...</td>'+
        '</tr>'+
        '</table>';
    }



    // ============================================================== 
    // Column Searching as Input type Datatable
    // ==============================================================
    var childRowTable = $('.child-rows-datatable').DataTable( {
        "ajax": 'source/datatable-child-data.txt',
        "columns": [
        {
            "class":          'details-control',
            "orderable":      false,
            "data":           null,
            "defaultContent": ''
        },
        { "data": "name" },
        { "data": "position" },
        { "data": "office" },
        { "data": "salary" }
        ],
        "order": [[1, 'asc']]
    });

    // Add event listener for opening and closing details
    $('.child-rows-datatable tbody').on('click', 'td.details-control', function () {
        var tr = $(this).parents('tr');
        var row = childRowTable.row( tr );

        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    });


    // ============================================================== 
    // Row Selection Datatable
    // ==============================================================
    var rowSelectionTable = $('.row-selection-datatable').DataTable();

    $('.row-selection-datatable').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
    });

    $('#countRow').click( function () {
        alert( rowSelectionTable.rows('.selected').data().length +' row(s) selected' );
    });



    // ============================================================== 
    // Row Delete Datatable
    // ==============================================================
    var deleteRowTable = $('.delete-row-datatable').DataTable();

    $('.delete-row-datatable tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            deleteRowTable.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    $('#deleteRow').click( function () {
        deleteRowTable.row('.selected').remove().draw( false );
    });



    // ============================================================== 
    // Form Input Datatable
    // ==============================================================
    var formInputsDatatable = $('.form-inputs-datatable').DataTable();
    $('button').click( function() {
        var data = formInputsDatatable.$('input, select').serialize();
        alert(
            "The following data would have been submitted to the server: \n\n"+
            data.substr( 0, 120 )+'...'
        );
        return false;
    });



});