<#--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->
<body>
    <div id="header">
        <div class="page">
            <a href="<@ofbizUrl>main</@ofbizUrl>" class="logo">
                <img src="<@ofbizContentUrl>/backend/images/growerp-ofbiz.png</@ofbizContentUrl>" alt="Logo"/>
            </a>
            <ul>
            <#if userLogin?has_content && userLogin.userLoginId != "anonymous">
                <li><a href="<@ofbizUrl>logout</@ofbizUrl>">Logout</a></li>
                <li id="header-bar-main"><a href="<@ofbizUrl>viewProfile</@ofbizUrl>">Profile</a></li>
            </#if>
            <#list menuItemList as menuItem>
                <li>
                <#if menuItem.link?has_content>
                    <a href="<@ofbizUrl>${menuItem.link}</@ofbizUrl>">${menuItem.contentName!}</a>
                <#else>
                    <a href="<@ofbizUrl><#if menuItem.altUrl?has_content>${menuItem.altUrl}<#else>main?contentId=${menuItem.contentId}</#if></@ofbizUrl>">${menuItem.contentName!}</a>
                </#if>
                </li>
            </#list>
        </ul>
        <div class="clear"></div>
        </div>
    </div>
<#if requestAttributes.errorMessageList?has_content><#assign errorMessageList=requestAttributes.errorMessageList></#if>
<#if requestAttributes.eventMessageList?has_content><#assign eventMessageList=requestAttributes.eventMessageList></#if>
<#if requestAttributes.warningMessageList?has_content><#assign warningMessageList=requestAttributes.warningMessageList></#if>
<#if requestAttributes.serviceValidationException?exists><#assign serviceValidationException = requestAttributes.serviceValidationException></#if>
<#if requestAttributes.uiLabelMap?has_content><#assign uiLabelMap = requestAttributes.uiLabelMap></#if>

<#if !errorMessage?has_content>
  <#assign errorMessage = requestAttributes._ERROR_MESSAGE_?if_exists>
</#if>
<#if !errorMessageList?has_content>
  <#assign errorMessageList = requestAttributes._ERROR_MESSAGE_LIST_?if_exists>
</#if>
<#if !eventMessage?has_content>
  <#assign eventMessage = requestAttributes._EVENT_MESSAGE_?if_exists>
</#if>
<#if !eventMessageList?has_content>
  <#assign eventMessageList = requestAttributes._EVENT_MESSAGE_LIST_?if_exists>
</#if>
<#if !warningMessage?has_content>
  <#assign warningMessage = requestAttributes._WARNING_MESSAGE_?if_exists>
</#if>
<#if !warningMessageList?has_content>
  <#assign warningMessageList = requestAttributes._WARNING_MESSAGE_LIST_?if_exists>
</#if>

<#-- display the error messages -->
<#if (errorMessage?has_content || errorMessageList?has_content)>
        <div id="page">
            <div class="top"></div>
            <div class="content">
                <div class="header page">
                    <h1>${uiLabelMap.CommonFollowingErrorsOccurred}:</h1>
                </div>
                <div id="content-messages" class="padding"><h2><b>
                    <#if errorMessage?has_content>
                        <p>${StringUtil.wrapString(errorMessage)}</p>
                    </#if>
                    <#if errorMessageList?has_content>
                        <#list errorMessageList as errorMsg>
                            <p>${StringUtil.wrapString(errorMsg)}</p>
                        </#list>
                    </#if>
                    </b></h2>
                </div>
            </div>
        </div>
</#if>

<#-- display the event messages -->
<#if (eventMessage?has_content || eventMessageList?has_content)>
    <div id="page">
        <div class="top"></div>
        <div class="content">
            <div class="header page">
                <h1>${uiLabelMap.CommonFollowingOccurred}:</h1>
            </div>
            <div id="content-messages" class="padding"><h2><b>
                <#if eventMessage?has_content>
                    <p>${eventMessage}</p>
                </#if>
                <#if eventMessageList?has_content>
                    <#list eventMessageList as eventMsg>
                        <p>${eventMsg}</p>
                    </#list>
                </#if>
            </div>
        </div>
    </div>
</#if>

<#-- display the warning messages -->
<#if (warningMessage?has_content || warningMessageList?has_content)>
    <div id="page">
        <div class="top"></div>
        <div class="content">
            <div class="header page">
                <h1>${uiLabelMap.CommonFollowingWarningOccurred}:</h1>
            </div
            <div id="content-messages" class="content-messages warningMessage"><h2><b>
                <#if warningMessage?has_content>
                    <p>${warningMessage}</p>
                </#if>
                <#if warningMessageList?has_content>
                    <#list warningMessageList as warningMsg>
                        <p>${warningMsg}</p>
                    </#list>
                </#if>
            </div>
        </div>
    </div>
</#if>

