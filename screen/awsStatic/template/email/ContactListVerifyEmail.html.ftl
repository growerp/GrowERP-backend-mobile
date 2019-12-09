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
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>${title!}</title>
    <#-- this needs to be fully qualified to appear in email; the server must also be available -->
    <link rel="stylesheet" href="<@ofbizContentUrl>/images/maincss.css</@ofbizContentUrl>" type="text/css"/>
</head>
<body>

<#-- custom logo or text can be inserted here -->
<h1>${title!}</h1>
<#if note??><p>${note}</p></#if>

<p>We have received a request to subscribe to the ${webSite.siteName?if_exists} mailinglist.</p>
<p>To complete your subscription click on the following link:</p>
    <#assign fromDate = (contactListParty.fromDate)?datetime>
    <#assign verifyUrl = "updateContactListPartyNoUserLogin?contactListId=" + contactListParty.contactListId + "&partyId=" + contactListParty.partyId + "&fromDate=" + fromDate + "&statusId=CLPT_ACCEPTED&optInVerifyCode=" + contactListPartyStatus.optInVerifyCode>
    <#if (contactListParty.preferredContactMechId)??>
        <#assign verifyUrl = verifyUrl+"&preferredContactMechId=" + contactListParty.preferredContactMechId>
    </#if>
    <#assign systemsURL = "${systemsURL?if_exists}"/>
    <a href="${systemsURL!}/control/${verifyUrl!}" target="_blank">Please click here to verify your subscription.</a>
</body>
</html>

