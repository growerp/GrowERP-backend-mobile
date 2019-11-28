<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Site Title -->
	<title>${head_title!"GrowERP ERP System"}</title>
    <!-- Meta Description Tag -->
    <meta name="description" content="${head_description!""}">
    <meta name="keywords" content="${head_keywords!""}">
    <!-- Favicon Icon -->
    <link rel="icon" type="image/x-icon" href="images/favicon.png" />
    <!-- Material Design Lite Stylesheet CSS -->
    <link rel="stylesheet" href="assets/plugin/material/material.min.css" />
    <!-- Material Design Select Field Stylesheet CSS -->
    <link rel="stylesheet" href="assets/plugin/material/mdl-selectfield.min.css">
    <!-- Animteheading Stylesheet CSS -->
    <link rel="stylesheet" href="assets/plugin/animateheading/animateheading.min.css" />
    <!-- Owl Carousel Stylesheet CSS -->
    <link rel="stylesheet" href="assets/plugin/owl_carousel/owl.carousel.min.css" />
    <!-- Animate Stylesheet CSS -->
    <link rel="stylesheet" href="assets/plugin/animate/animate.min.css" />
    <!-- Magnific Popup Stylesheet CSS -->
    <link rel="stylesheet" href="assets/plugin/magnific_popup/magnific-popup.min.css" />
    <!-- Flex Slider Stylesheet CSS -->
    <link rel="stylesheet" href="assets/plugin/flexslider/flexslider.min.css" />
    <!-- Custom Main Stylesheet CSS -->
    <link rel="stylesheet" href="dist/css/style.css">
    <script language="JavaScript" type="text/javascript">
    var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-37702784-2']);
        _gaq.push(['_trackPageview']);

        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    </script>

</head>
<body>
    <div class="wrapper">
        <!-- Start Header Section -->
        <header id="header" class="header-light">
            <div class="layer-stretch hdr">
                <div class="tbl animated fadeInDown">
                    <div class="tbl-row">
                        <!-- Start Header Logo Section -->
                        <div class="tbl-cell hdr-logo">
                            <a href="index.html"><img src="images/growerp.png" alt=""></a>
                        </div><!-- End Header Logo Section -->
                        <div class="tbl-cell hdr-menu">
                            <!-- Start Menu Section -->
                            <#if menu_active! != 'lp'><#-- only show menu when not a landing page -->
                            <ul class="menu">
                                <li><a href="index.html" class="nav-link <#if menu_active! == 'home'>active</#if>">Home <i class="fa"></i></a></li>
                                <li><a href="whyGrowERP.html" class="nav-link <#if menu_active! == 'whyGrowERP'>active</#if>">Why GrowERP?<i class="fa"></i></a></li>
                                <li><a href="howToStart.html" class="nav-link <#if menu_active! == 'howToStart'>active</#if>">How to start? <i class="fa"></i></a></li>
                                <li><a href="about.html" class="nav-link <#if menu_active! == 'about'>active</#if>">About Moqui &amp; Ofbiz<i class="fa"></i></a></li>
                                <li><a href="mobile.html" class="nav-link <#if menu_active! == 'mobile'>active</#if>">Mobile <i class="fa"></i></a></li>
                                <li class="mobile-menu-close"><i class="fa fa-times"></i></li>
                            </ul><!-- End Menu Section -->
                            <div id="menu-bar"><a><i class="fa fa-bars"></i></a></div>
                            </#if>
                        </div>
                    </div>
                </div>
                <div class="search-bar animated zoomIn">
                    <div class="search-content">
                        <div class="search-input">
                            <input type="text" placeholder="Enter your text ....">
                            <button class="search-btn"><i class="icon-magnifier"></i></button>
                        </div>
                    </div>
                    <div class="search-close"><i class="icon-close"></i></div>
                </div>
            </div>
        </header><!-- End Header Section -->
