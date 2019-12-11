<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>GrowERP frontend component</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1" crossorigin="anonymous">

    <#-- Style Sheets -->
    <#list sri.getThemeValues("STRT_STYLESHEET") as styleSheetLocation>
        <link rel="stylesheet" href="${sri.buildUrl(styleSheetLocation).url}" type="text/css">
    </#list>
    <#list html_stylesheets?if_exists as styleSheetLocation>
        <link rel="stylesheet" href="${sri.buildUrl(styleSheetLocation).url}" type="text/css">
    </#list>
    <#-- JavaScript -->
    <#list html_scripts?if_exists as scriptLocation>
        <script src="${sri.buildUrl(scriptLocation).url}" type="text/javascript"></script>
    </#list>
    <#list sri.getThemeValues("STRT_SCRIPT") as scriptLocation>
        <script src="${sri.buildUrl(scriptLocation).url}" type="text/javascript"></script>
    </#list>
    <#-- Icon -->
    <#list sri.getThemeValues("STRT_SHORTCUT_ICON") as iconLocation>
        <link rel="shortcut icon" href="${sri.buildUrl(iconLocation).url}">
    </#list>
    <script type="text/javascript">
        $(window).load (
        function(){$('.carousel1').carouFredSel({auto: true,prev: '.prev',next: '.next', width: '100%', items: {
        visible : {min: 1,max: 5},height: 'auto',width: 1140,}, responsive: true,scroll: 1,swipe:
        {onMouse: true, onTouch: true }});});
        $(window).load (
        function(){$('.carousel2').carouFredSel({auto: false,prev: '.prev1',next: '.next1', width: '100%', items: {
        visible : {min: 1,max: 1},height: 'auto',width: 220,}, responsive: true,scroll: 1,swipe:
        {onMouse: true, onTouch: true }});});
    </script>
</head>

<body>
    <div class="bg1">
        <div class="bg">
            ${sri.renderSubscreen()}
        </div>
    </div>

    <#-- for scripts/etc from d.xml or others, ie client rendered part of site that needs more JS -->
    <#if footerScriptText?has_content>${footerScriptText}</#if>
</body>
</html>
