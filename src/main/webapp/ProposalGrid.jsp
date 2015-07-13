<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<!-- <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"> -->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Content-Style-Type" content="text/css">
<meta content="Manage Users" name="DESCRIPTION">
<meta content="Manage Users" name="KEYWORDS">
<meta content="@GPMS" name="COPYRIGHT">
<meta content="GENERATOR" name="GENERATOR">
<meta content="Author" name="AUTHOR">
<meta content="DOCUMENT" name="RESOURCE-TYPE">
<meta content="GLOBAL" name="DISTRIBUTION">
<meta content="INDEX, FOLLOW" name="ROBOTS">
<meta content="1 DAYS" name="REVISIT-AFTER">
<meta content="GENERAL" name="RATING">
<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE">
<!-- Mimic Internet Explorer 7 -->
<meta content="IE=EmulateIE7" http-equiv="X-UA-Compatible">
<meta content="RevealTrans(Duration=0,Transition=1)"
	http-equiv="PAGE-ENTER">
<link type="icon shortcut" media="icon" href="favicon.ico">
<!--[if IE 9]>
        <link rel="stylesheet" href="css/ie9.css" type="text/css" media="screen"/><![endif]-->
<!--[if lt IE 9]>
        <link rel="stylesheet" href="css/IE.css" type="text/css" media="screen"/><![endif]-->
<!--[if lt IE 7]>
        <script type="text/javascript" src="js/core/IE8.js"></script>
    <![endif]-->
<title>Proposal Management Example</title>

<script src="js/jQuery/jquery-1.9.1.js" type="text/javascript"></script>

<script type="text/javascript">
	var _aspx_token = "NWExODgyNDctMzA2OS00MWNhLWJjOWEtNGEyODI5N2FiZWJjOlNhZ2VGcmFtZS5BVVRIanhyMzB3eWNqenZwcWQwanYzdmt5Yng0WkFESlg5U0xPQzE6MjAxNTA2MzAxNTA2NTg5NDM5";
	$.ajaxSetup({
		'beforeSend' : function(xhr) {
			xhr.setRequestHeader("ASPX-TOKEN", _aspx_token);
		}
	});
</script>

<script type="text/javascript">
	//<![CDATA[
	var gpmsAppPath = "";
	var gpmsUserName = "superuser";
	var gpmsCurrentCulture = "en-US";
	var gpmsHostURL = "http://localhost:8181/GPMS/";
	var gpmsSecureToken = "GPMS.AUTHjxr30wycjzvpqd0jv3vkybx4ZADJX9SLOC1";

	var gpmsServicePath = "REST/";
	var gpmsRootPath = "/";
	var userProfileId = "1";
	var sessionCode = "jxr30wycjzvpqd0jv3vkybx4";
	var clientIPAddress = "::1";
	var gpmsCountryName = "RESERVED";
	var gpmsRedirectPath = "/";

	var logInURL = "login";
	var pageExtension = ".jsp";
	//]]>
</script>

<script type="text/javascript"
	src="js/jquery-ui-1.8.14.custom/js/jquery-ui-1.10.3.custom.min.js"></script>

<script type="text/javascript" src="js/core/gpmscore.js"></script>

<!-- For Side Bar Navigation -->
<script type="text/javascript" src="js/dashboard.js"></script>
<script type="text/javascript" src="js/sidebar_accordian.js"></script>
<script type="text/javascript" src="js/superfish.js"></script>

<script type="text/javascript"
	src="js/FormValidation/jquery.form-validation-and-hints.js"></script>

<!-- <script type="text/javascript" src="js/SystemLocale/systemlocale.js"></script> -->
<script type="text/javascript"
	src="js/modules/Language/CoreJsLanguage.js"></script>

<script type="text/javascript" src="js/core/json2.js"></script>

<script type="text/javascript" src="js/jquery-browser.js"></script>
<script type="text/javascript" src="js/jquery.uniform.js"></script>

<script type="text/javascript" src="js/jquery.qtip-1.0.0-rc3.js"></script>

<script type="text/javascript" src="js/GridView/jquery.tablesorter.js"></script>
<script type="text/javascript" src="js/GridView/jquery.grid.js"></script>
<script type="text/javascript" src="js/GridView/SagePaging.js"></script>
<script type="text/javascript" src="js/GridView/jquery.global.js"></script>
<script type="text/javascript" src="js/GridView/jquery-dateFormat.js"></script>

<script type="text/javascript" src="js/MessageBox/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="js/MessageBox/alertbox.js"></script>

<script type="text/javascript" src="js/AjaxFileUploader/ajaxupload.js"></script>

<script type="text/javascript"
	src="js/ckeditor_4.5.1_full/ckeditor/ckeditor.js"></script>
<script type="text/javascript"
	src="js/ckeditor_4.5.1_full/ckeditor/adapters/jquery.js"></script>


<!-- <script type="text/javascript" src="js/core/Session.js"></script> -->
<script type="text/javascript" src="js/core/encoder.js"></script>

<script type="text/javascript" src="js/modules/UsersManage.js"></script>
<script type="text/javascript"
	src="js/modules/Language/GPMSUsersManagement.js"></script>
<!-- <script type="text/javascript" src="js/modules/Language/AspxRssFeedLocale.js"></script> -->

<link type="text/css" rel="stylesheet"
	href="js/jquery-ui-1.8.14.custom/css/redmond/jquery-ui-1.8.16.custom.css" />
<link type="text/css" rel="stylesheet" href="css/GridView/tablesort.css" />
<link type="text/css" rel="stylesheet" href="css/MessageBox/style.css" />

<link type="text/css" rel="stylesheet" href="css/Templates/grid.css" />
<link type="text/css" rel="stylesheet"
	href="css/Templates/topstickybar.css" />
<link type="text/css" rel="stylesheet" href="css/Templates/admin.css" />
</head>
<body>
	<form enctype="multipart/form-data" action="Manage-Users.jsp"
		method="post" name="form1">
		<div style="display: none;" id="UpdateProgress1" role="status"
			aria-hidden="true">

			<div class="sfLoadingbg">&nbsp;</div>
			<div class="sfLoadingdiv">
				<img style="border-width: 0px;" alt="Loading..."
					src="images/ajax-loader.gif" title="Loading..." id="imgPrgress">
				<br> <span id="lblPrgress">Please wait...</span>
			</div>

		</div>
		<noscript>
			<span>This page requires java-script to be enabled. Please
				adjust your browser-settings.</span>
		</noscript>
		<div id="sfOuterwrapper">
			<div class="sfSagewrapper">

				<!--Body Content-->
				<div class="sfContentwrapper clearfix">
					<div id="divCenterContent">
						<!-- Side Bar Starts-->
						<div class="sideBarLeft" id="divSideBar">
							<script type="text/javascript">
								//<![CDATA[    
								$(function() {
									SidebarMgr.init();
								});
								var SidebarMgr = {
									config : {
										isPostBack : false,
										async : true,
										cache : true,
										type : 'POST',
										contentType : "application/json; charset=utf-8",
										data : '{}',
										dataType : 'json',
										method : "",
										url : "",
										categoryList : "",
										ajaxCallMode : 0,
										arr : [],
										arrModules : [],
										baseURL : '/aspx'
												+ '/Modules/Dashboard/Services/DashboardWebService.asmx/',
										PortalID : 1,
										Path : '/aspx' + '/Modules/Dashboard/',
										SaveMode : "Add",
										SidebarItemID : 0,
										SidebarMode : '1',
										ShowSideBar : '1',
										UserName : 'superuser',
										PortalID : '1',
										ForceTrigger : ''
									},
									init : function() {
										if (SidebarMgr.config.SidebarMode == 0) {
											InitSuperfish();
											$('#divFooterWrapper').addClass(
													'sfFooterCollapse');
										} else {
											$('#divFooterWrapper').removeClass(
													'sfFooterCollapse');
											$('ul.menu').initMenu();
											SidebarMgr.HighlightSelected();
											if ($('.menu .Grandparent')
													.hasClass('active')) {
												if ($(
														'.menu .Grandparent .parent')
														.hasClass('active')) {
													$('.Grandparent.active')
															.find('a').eq(0)
															.trigger('click');
													$('.parent.active').find(
															'a').eq(0).trigger(
															'click');
												} else {
													$('.Grandparent.active')
															.find('a').eq(0)
															.trigger('click');
												}
											} else {
												$('.Grandparent').find('a').eq(
														0).trigger('click');
											}
										}
										if (SidebarMgr.config.ShowSideBar == "1")
											$('div.sfHidepanel')
													.on(
															"click",
															function() {
																if (!$(
																		'div.sfSidebar')
																		.hasClass(
																				"sfSidebarhide")) {
																	//$('div.sfSidebar').find("ul li ul").hide(function() { $(this).animate({ display: "none" }, 100) });
																	//$('div.sfSidebar').find("ul li a span").hide(function() { $(this).animate({ display: "none" }, 100) });
																	//$('div.sfHidepanel').find("a span").hide(function() { $(this).animate({ display: "none" }, 100) });
																	$(
																			'div.sfSidebar')
																			.animate(
																					{
																						width : "45px"
																					},
																					400,
																					function() {
																						//                            $('div.sfHidepanel').find("img").animate({ opacity: 0 }, 100, function() {
																						//                                $('div.sfHidepanel img').attr("src", SageFrame.utils.GetAdminImage("show-arrow.png"))
																						//                                $('div.sfHidepanel img').animate({ opacity: 1 }, 100);
																						//                            });
																					});
																	InitSuperfish();
																	$(
																			'div.sfSidebar')
																			.addClass(
																					"sfSidebarhide");
																	InitModuleFloat(65);
																	$(
																			'.Grandparent')
																			.find(
																					'a:eq(0)')
																			.find(
																					'span:eq(0)')
																			.hide();
																	SidebarMgr
																			.UpdateSidebarMode();

																} else {
																	$(
																			'div.sfSidebar')
																			.find(
																					"ul li ul")
																			.show(
																					function() {
																						$(
																								this)
																								.animate(
																										{
																											display : "block"
																										},
																										100)
																					});
																	$(
																			'div.sfSidebar')
																			.find(
																					"ul li a span")
																			.show(
																					function() {
																						$(
																								this)
																								.animate(
																										{
																											display : "block"
																										},
																										100)
																					});
																	$(
																			'div.sfSidebar')
																			.animate(
																					{
																						width : "210px"
																					},
																					400,
																					function() {
																						//                            $('div.sfHidepanel').find("a span").show(function() { $(this).animate({ display: "block" }, 100) });
																						//                            $('div.sfHidepanel').find("img").attr("src", gpmsAppPath + "/Administrator/Templates/Default/images/hide-arrow.png");
																					});
																	InitAccordianMode();
																	$(
																			'#sidebar ul')
																			.attr(
																					"class",
																					"menu")
																			.css(
																					"visibility",
																					"visible");
																	$(
																			'#sidebar ul li.Grandparent ul')
																			.attr(
																					"class",
																					"acitem fullwidth");
																	$(
																			'#sidebar ul li a')
																			.removeAttr(
																					"class");
																	$(
																			'div.sfSidebar')
																			.removeClass(
																					"sfSidebarhide");
																	InitModuleFloat(200);
																	$(
																			'.Grandparent')
																			.find(
																					'a')
																			.eq(
																					0)
																			.find(
																					'span')
																			.eq(
																					0)
																			.show();
																	SidebarMgr
																			.UpdateSidebarMode();

																}

																if ($(
																		'.sfHidepanel')
																		.find(
																				'i')
																		.hasClass(
																				'sidebarExpand')) {
																	$(
																			'.sfHidepanel')
																			.find(
																					'i')
																			.removeClass(
																					'sidebarExpand')
																			.addClass(
																					'sidebarCollapse');
																	$(
																			'#divFooterWrapper')
																			.addClass(
																					'sfFooterCollapse');
																} else {
																	$(
																			'.sfHidepanel')
																			.find(
																					'i')
																			.removeClass(
																					'sidebarCollapse')
																			.addClass(
																					'sidebarExpand');
																	$(
																			'#divFooterWrapper')
																			.removeClass(
																					'sfFooterCollapse');
																}
															});
									},
									HighlightSelected : function() {
										var sidebar = $('#sidebar ul li');
										$
												.each(
														sidebar,
														function(index, item) {
															if ($(this)
																	.hasClass(
																			"parent")) {
																var submenu = $(
																		this)
																		.find(
																				"ul li");
																$
																		.each(
																				submenu,
																				function() {
																					if ($(
																							this)
																							.hasClass(
																									"parentchild")) {
																						var subsubmenu = $(
																								this)
																								.find(
																										"ul li");
																						$
																								.each(
																										subsubmenu,
																										function() {
																											var hreflink = $(
																													this)
																													.find(
																															"a")
																													.attr(
																															"href");
																											if (location.href
																													.toLowerCase()
																													.indexOf(
																															hreflink
																																	.toLowerCase()) > -1) {
																												$(
																														this)
																														.parent(
																																"ul.acitem")
																														.css(
																																"display",
																																"block")
																														.addClass(
																																"active");
																												$(
																														this)
																														.parent(
																																"ul.acitem")
																														.prev(
																																"a")
																														.addClass(
																																"active");
																												$(
																														this)
																														.parent(
																																"ul.acitem")
																														.parents(
																																'li.parent')
																														.css(
																																"display",
																																"block")
																														.addClass(
																																"active");
																												$(
																														this)
																														.parent(
																																"ul.acitem")
																														.parent(
																																'ul.acitem')
																														.css(
																																"display",
																																"block")
																														.addClass(
																																"active");
																												$(
																														this)
																														.parent(
																																"ul.acitem")
																														.parents(
																																'li.Grandparent')
																														.css(
																																"display",
																																"block")
																														.addClass(
																																"active");
																											}
																										});
																					} else {
																						var hreflink = $(
																								this)
																								.find(
																										"a")
																								.attr(
																										"href");
																						if (location.href
																								.toLowerCase()
																								.indexOf(
																										hreflink
																												.toLowerCase()) > -1) {
																							$(
																									this)
																									.parent(
																											"ul.acitem")
																									.css(
																											"display",
																											"block")
																									.addClass(
																											"active");
																							$(
																									this)
																									.parent(
																											"ul.acitem")
																									.prev(
																											"a")
																									.addClass(
																											"active");
																							$(
																									this)
																									.parent(
																											"ul.acitem")
																									.parents(
																											'li.Grandparent')
																									.css(
																											"display",
																											"block")
																									.addClass(
																											"active");
																							//$(this).parent("ul.acitem").parents('li.Grandparent').find("a").eq(0).addClass("active");
																						}
																					}
																				});
															} else if (!$(this)
																	.hasClass(
																			"parent")) {
																var hreflink = $(
																		this)
																		.find(
																				"a")
																		.attr(
																				"href");
																if (location.href
																		.toLowerCase()
																		.indexOf(
																				hreflink
																						.toLowerCase()) > -1) {
																	$(this)
																			.find(
																					"a")
																			.addClass(
																					'active');
																	$(this)
																			.parent(
																					"ul.acitem")
																			.parents(
																					'li.Grandparent')
																			.css(
																					"display",
																					"block")
																			.addClass(
																					"active");
																}
															}
														});
									},
									BuildURL : function(item) {
										var portalchange = SidebarMgr.config.PortalID > 1 ? "/portal/"
												+ 'default'
												: "";
										var url = '/aspx'
												+ portalchange
												+ item.URL
												+ SageFrameSettingKeys.PageExtension
										return url;
									},
									UpdateSidebarMode : function() {
										var _status = $('div.sfSidebar')
												.hasClass("sfSidebarhide") ? "closed"
												: "open";
										var param = JSON2.stringify({
											status : _status,
											PortalID : SageFramePortalID,
											UserName : SageFrameUserName,
											secureToken : SageFrameSecureToken
										});
										$
												.ajax({
													type : SidebarMgr.config.type,
													contentType : SidebarMgr.config.contentType,
													cache : SidebarMgr.config.cache,
													url : SidebarMgr.config.baseURL
															+ "UpdateSidebar",
													data : param,
													dataType : SidebarMgr.config.dataType,
													success : function(msg) {
													}
												});
									}
								};

								function InitCollapsedMode() {
									$('div.sfSidebar').find("ul li ul").hide(
											function() {
												$(this).animate({
													display : "none"
												}, 100)
											});
									$('div.sfHidepanel').find("a span").hide(
											function() {
												$(this).animate({
													display : "none"
												}, 100)
											});
									//$('div.sfSidebar').animate({ width: "45px" }, 400, function() {
									//            $('div.sfHidepanel').find("img").animate({ opacity: 0 }, 100, function() {
									//                $('div.sfHidepanel img').attr("src", GetAdminImage("show-arrow.png"))
									//                $('div.sfHidepanel img').animate({ opacity: 1 }, 100);
									//            });
									//});
									$('div.sfSidebar')
											.addClass("sfSidebarhide");
									InitSuperfish();
								}

								function GetAdminImage(imagename) {
									return (gpmsAppPath
											+ "/Administrator/Templates/Default/images/" + imagename);
								}

								function InitSuperfish() {
									$('ul.menu').addClass("sf-vertical");
									var ul = $('ul.menu ul.acitem');
									$.each(ul, function(index, item) {
										$(this).addClass("sfCollapsed")
												.removeClass("fullwidth");
									});
									$('ul.menu').superfish({
										animation : {
											height : 'show'
										}, // slide-down effect without fade-in 
										delay : 100
									// 1.2 second delay on mouseout 
									});
								}

								function InitAccordianMode() {
									var ul = $('ul.menu ul.acitem');
									$.each(ul, function(index, item) {
										$(this).removeClass("sfCollapsed")
												.addClass("fullwidth");
									});
									$('ul.menu').removeClass("sf-vertical");
									$('ul.menu').initMenu();
								}
								//]]>
							</script>

							<div style="float: left; height: 877px;" id="sidebar"
								class="sfSidebar">
								<ul class="menu">
									<li class="Grandparent sfLevel0 active" style="display: block;"><a
										href="#"><i class="icon-portal-management"></i><span>GPMS
												Management</span></a>
										<ul style="display: none" class="acitem">
											<li class="parent sfLevel1"><a href="#"><i
													class="icon-user-accounts"></i><span>User Accounts</span></a>
												<ul style="display: none" class="acitem">
													<li class="child sfLevel2"><a
														href="/aspx/Admin/Users.jsp" class="active"><i
															class="icon-arrow-slim-e"></i><span>Users</span></a></li>
													<li class="child sfLevel2"><a
														href="/aspx/Admin/Roles.jsp"><i
															class="icon-arrow-slim-e"></i><span>Roles</span></a></li>
												</ul></li>
											<li class="parent sfLevel1 active"><a href="#"><i
													class="icon-manage-site"></i><span>Manage Proposals</span></a>
												<ul style="display: none" class="acitem">
													<li class="child sfLevel2"><a
														href="/aspx/Admin/Pages.jsp" class="active"><i
															class="icon-arrow-slim-e"></i><span>Proposals</span></a></li>
												</ul></li>
											<li class="parent sfLevel1"><a href="#"><i
													class="icon-settings"></i><span>Settings</span></a>
												<ul style="display: none" class="acitem">
													<li class="child sfLevel2"><a
														href="/aspx/Admin/Settings.jsp"><i
															class="icon-arrow-slim-e"></i><span>Portal
																Settings</span></a></li>
												</ul></li>
										</ul></li>
								</ul>
								<div class="sfHidepanel clearfix">
									<a href="#"><i class="sidebarExpand"></i><span></span></a>
								</div>
							</div>

							<div class="sfFooterwrapper clearfix" id="divFooterWrapper">
								<div id="ctl_CPanleFooter1_divFooterContent">Copyright
									2015 GPMS. All Rights Reserved&reg;</div>

							</div>
						</div>
						<!-- Side Bar Ends -->
</body>
</html>