<#-- <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="d-flex flex-column moqui-navbar"> -->
    <header class="containerSlid_12 slide">
        <div class="ant-headerAlert ant-headerhide"><#include 'component://antwebsystems2/template/frontend/messages.ftl'/></div>
        <ul id="navToggle" class="burger slide">    <!--    Add "slideRight" class to items that move right when viewing Nav Drawer  -->
            <li></li><li></li><li></li>
        </ul>
        <h1><a href="${sri.buildUrl("../").url}"><img src="/aws/images/AntLogoNoBG.png"></a></h1>
        <div class="popupDialog" id="popup" style="display:none;">
            <div class="popupbody">
                <form method="post" name="signUpForContactListFormForEn" id="signUpForContactListFormForEn"  class="popupform">
                    <input type="hidden" name="contactListId" value="${webSiteId?if_exists}"/>
                    <input type="hidden" value="${ec.web.sessionToken}" name="moquiSessionToken" id="moquiSessionToken">
                    <div class="popupinput" id="popupinput">
                        <h10>Would you like to get our awesome blog updates, news, and famous development of Apache OFBiz open source ERP?<h10></br></br></br>
                        <div class="subSuccessfulAws" id="subSuccessfulAws"></div></br>
                        <label for="email"><h11>Your Email</h11></label></br>
                        <input id="email" type="text" name="email" class="text_field_popup" placeholder="Your Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email' "/></br>
                        <input type="button" value="Subscribe" id="popupSubscribe" class="popupSubscribe" onclick="javascript:fixedpopup(this);"/>
                        <input type="button" value="Cancel" id="hidepopup" class="hidepopup" onclick="javascript:closedpopup();"/>
                    </div>
                </form>
            </div>
        </div>
        <script>
            <#-- $(function(){
                $('ul.sf-menu').supersubs({
                    minWidth : 12,
                    maxWidth : 18,
                    extraWidth : 1
                }).superfish();
            });
            $(document).ready(function() {
                if ((screen.width>1024)) {
                    var cookie = localStorage.getItem('JSESSIONID.visited');
                    if(cookie == null) {
                        localStorage.setItem('JSESSIONID.visited', 1)
                    }
                    if(cookie == 1) {
                        localStorage.setItem('JSESSIONID.visited', 2)
                    }
                    if(cookie == 2) {
                        localStorage.setItem('JSESSIONID.visited', 3)
                        var showpopup = document.getElementById("popup");
                        showpopup.style.display = 'block';
                    }
                    if(cookie == 3) {
                        localStorage.setItem('JSESSIONID.visited', 4)
                    }
                    if(cookie == 4) {
                        localStorage.setItem('JSESSIONID.visited', 5)
                        var showpopup = document.getElementById("popup");
                        showpopup.style.display = 'block';
                    }
                }
            }); -->
            document.onkeydown = function(evt) {
                 var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
                 if (keyCode == 13) {
                      return false;
                 }
            }
            function fixedsub(button) {
                button.disabled = true;
                var email = $(document.signUpForContactListForm.email).val();
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9])+$/;
                if(!regex.test(email) || email == '' || email == null) {
                    <#-- headerAlertMsg("${uiLabelMap.GrowErpSubscribeNotValid}",1); -->
                    headerAlertMsg("Please input a valid email.",1);
                    button.disabled = false;
                    return false;
                }
                else {
                    jQuery.ajax({
                        url: '/aws/signUpForContactList',
                        type: 'POST',
                        data: jQuery('#signUpForContactListForm').serialize(),
                        success: function(data) {
                            if (data._ERROR_MESSAGE_ != null) {
                                button.disabled = false;
                                if (data._ERROR_MESSAGE_ == "Invalid email address entered.") {
                                    <#-- headerAlertMsg("${uiLabelMap.GrowErpSubscribeNotValid}",1);  -->
                                     headerAlertMsg("Please input a valid email.",1);
                                } else {
                                    <#-- headerAlertMsg("${uiLabelMap.GrowErpSubscribeAlreadyExists}",1); -->
                                    headerAlertMsg("Your email already exists.",1);
                                }
                            }
                            else {
                                <#-- headerAlertMsg("${uiLabelMap.GrowErpSubscribeSent}",2); -->
                                headerAlertMsg("A confirmation email has been sent to you, please confirm your subscription.",2);
                                button.disabled = false;
                            }
                        }
                    });
                    return true;
                }
            }
            function headerAlertMsg(headerMessage,mode){
                if(headerMessage != "") {
                    jQuery('.ant-headerAlert').html(headerMessage);
                }
                jQuery('.ant-headerAlert').removeClass("ant-success");
                jQuery('.ant-headerAlert').removeClass("ant-error");
                jQuery('.ant-headerAlert').removeClass("ant-headerhide");
                jQuery('.ant-headerAlert').click(function() {
                    jQuery('.ant-headerAlert').addClass("ant-headerhide");
                });
                if(mode == 1) {
                    jQuery('.ant-headerAlert').addClass("ant-error");
                } else if(mode == 2) {
                    jQuery('.ant-headerAlert').addClass("ant-success");
                }
            }
            function fixedpopup(button) {
                button.disabled = true;
                var email = $(document.signUpForContactListFormForEn.email).val();
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9])+$/;
                if(!regex.test(email) || email == '' || email == null) {
                    <#-- jQuery('#subSuccessfulAws').html("${uiLabelMap.GrowErpSubscribeNotValid}"); -->
                    jQuery('#subSuccessfulAws').html("Please input a valid email.");
                    jQuery('#subSuccessfulAws').css("color","red");
                    document.getElementById("popup").style.display = 'block';
                    button.disabled = false;
                    return false;
                }
                else {
                    jQuery.ajax({
                        url: '/aws/signUpForContactList',
                        type: 'POST',
                        data: jQuery('#signUpForContactListFormForEn').serialize(),
                        success: function(data) {
                            if (data._ERROR_MESSAGE_ != null) {
                                jQuery('#subSuccessfulAws').css("color","red");
                                button.disabled = false;
                                if (data._ERROR_MESSAGE_ == "Invalid email address entered.") {
                                    <#-- jQuery('#subSuccessfulAws').html("${uiLabelMap.GrowErpSubscribeNotValid}"); -->
                                    jQuery('#subSuccessfulAws').html("Please input a valid email.");
                                    document.getElementById("popup").style.display = 'block';
                                } else {
                                    <#-- jQuery('#subSuccessfulAws').html("${uiLabelMap.GrowErpSubscribeAlreadyExists}"); -->
                                    jQuery('#subSuccessfulAws').html("Your email already exists.");
                                }
                            }
                            else {
                                <#-- jQuery('#subSuccessfulAws').html("${uiLabelMap.GrowErpSubscribeSent}"); -->
                                jQuery('#subSuccessfulAws').html("A confirmation email has been sent to you, please confirm your subscription.");
                                jQuery('#subSuccessfulAws').css("color","green");
                                button.disabled = false;
                            }
                        }
                    });
                    return true;
                }
            }
            function closedpopup() {
                document.getElementById("popup").style.display = 'none';
            }
        </script>
        <style>
         .sf-menu li.sub-menu > a {
             padding-left: 8px;
             padding-right: 15px;
         }
         <#-- nav {
          float: right;
          padding-top: 90px;
          max-width: 800px;
        } -->
      </style>
    </header>
    <nav class="containerSlid_12 slide close">
        <ul class="sf-menu responsive-menu sf-js-enabled sf-arrows" style="touch-action: pan-y;">
            <#if sri.screenUrlInfo.extraPathNameList?has_content>
                <#assign currentUrl = '/aws/'+sri.screenUrlInfo.extraPathNameList?first>
            </#if>
            <#list wikiPageList.wikiPageList as menuitem>
                <#assign menupageName= menuitem.keySet()?first/>
                    <#assign menuName= menuitem.values()/>
                <li <#if menupageName.equals(currentUrl)> class="current"</#if>>
                        <#-- a href="${sri.buildUrl("../Product").url}">${menuName?first}</a -->
                    <a href="${menupageName}">${menuName?first}</a>
                </li>
            </#list>
        </ul>
    </nav>

