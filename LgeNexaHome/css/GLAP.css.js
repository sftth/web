//CSS=GLAP.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("#585858ff","","","0","0","0","0","true");
    this._addCss("Button.btn_MF_Login", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#444444ff","");
    this._addCss("Button.btn_MF_Login", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Button.btn_MF_Login", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_MF_UserPass", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_MF_BottomGo", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Button.BottomGo", "bordertype", obj, ["disabled"]);
    this._addCss("Edit.edt_MF_User", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_MF_Password", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_MF_SecuriCode", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_MF_LoginBg", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_LoginBg01", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_LoginVisual", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_LoginLogo", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_LoginTitle", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_LoginCopy", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_BottomBg", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_BottoBgm", "bordertype", obj, ["disabled"]);
    this._addCss("Static.sta_MF_UserImage", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ErrorImage", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_TBF_TabMenuPrev", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_TBF_TabMenuNext", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Static.sta_TBF_TabMenuBg", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#extrabutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_TF_Setting", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_TF_MenuPrev", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_TF_MenuNext", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Static.sta_TF_MenuBg", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_System", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_User", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Div.div_TF_UserMenu", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Popclose", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ComboBtn", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ComboBtnR", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ComboBtnE", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_GrdPagePreviousP", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdPagePrevious", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdPageNextP", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdPageNext", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Div.div_WFSA_Bg_S", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Emphasis", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_EmphasisEss", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "bordertype", obj, ["disabled"]);
    this._addCss("PopupDiv.pdiv_WF_Combolist", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupDiv.div_PF_Quick", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupDiv.div_PF_Dropdown", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle1", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WFSA_LabelEss", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelC", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelS", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelEss", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBg", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBgS", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertBg", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertIcon", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertTitle", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ConfirmBg", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ConfirmIcon", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ErrorBg", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ErrorIcon", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_2DepthTitle", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_TitleRed", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.Guide_title", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_TF_DropdownItem", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_TF_DropdownItem>#head", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WFSA_Expand", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Collapse", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_left", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CustomCombo", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_WF_CustomComboList", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button.btn_MF_Login", "cursor", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_MF_UserPass", "cursor", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_TBF_TabMenuPrev", "cursor", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_TBF_TabMenuNext", "cursor", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_TF_Setting", "cursor", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_TF_MenuPrev", "cursor", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_TF_MenuNext", "cursor", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_WF_PopupBtn", "cursor", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WFSA_Search", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Action", "cursor", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_PF_Search", "cursor", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Expand", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Collapse", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_font("9 Arial bold");
    this._addCss("Button.btn_MF_Login", "font", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle1", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertTitle", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_2DepthTitle", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_TitleRed", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.Guide_title", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Button.btn_MF_Login", "color", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Search", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_PF_Search", "color", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_POP_PopTitle", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_Calyy", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertTitle", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WFSA_Expand", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Collapse", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_MF_Login", "align", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Static.sta_MF_ErrorTitle", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_UM_UserName", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WF_PopupBtn", "align", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WFSA_Search", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Action", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_PF_Search", "align", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelC", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_Calyy", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_GrdPage", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_GrdPageS", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.Guide_color", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WFSA_Collapse", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#c5003dff","","","0","0","0","0","true");
    this._addCss("Button.btn_MF_Login", "background", obj, ["mouseover", "focused", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#a0123eff","");
    this._addCss("Button.btn_MF_Login", "border", obj, ["mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_PF_Search", "border", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button.btn_MF_UserPass", "background", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu", "background", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spinupbutton", "background", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#extrabutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CalPrev", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CalNext", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_WFSA_LabelEss", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_POP_PopTitle", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertTitle", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_TitleRed", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea.txt_WF_Message", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_TF_DropdownItem>#head", "background", obj, ["mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_WF_left", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CustomCombo", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Button.btn_MF_UserPass", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_MF_BottomGo", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Button.BottomGo", "border", obj, ["disabled"]);
    this._addCss("Static.sta_MF_LoginVisual", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_LoginLogo", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_LoginTitle", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_LoginCopy", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_UserImage", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ErrorImage", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#extrabutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_03", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_TF_Setting", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_TF_MenuPrev", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_TF_MenuNext", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Static.sta_TF_System", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_User", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Div.div_TF_UserMenu", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CalPrev", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CalNext", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Popclose", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CalBtn", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdPagePreviousP", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdPagePrevious", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdPageNextP", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdPageNext", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("PopupDiv.div_PF_Quick", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle1", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WFSA_LabelEss", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertBg", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertIcon", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertTitle", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ConfirmBg", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ConfirmIcon", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ErrorBg", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ErrorIcon", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_2DepthTitle", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_TitleRed", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.Guide_title", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "border", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_TF_DropdownItem>#head", "border", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WFSA_Expand", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Collapse", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_font("underline 8 Arial");
    this._addCss("Button.btn_MF_UserPass", "font", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss("Button.btn_MF_UserPass", "color", obj, ["normal"]);
    this._addCss("Button.btn_MF_BottomGo", "color", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Button.BottomGo", "color", obj, ["disabled"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Button.btn_MF_UserPass", "align", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Edit.edt_MF_User", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_MF_Password", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_MF_SecuriCode", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_MF_ErrorGuide", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ErrorFollowings", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ErrorFollowingsItem", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MDI_01", "align", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_02", "align", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Static.sta_TF_User", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Edit.edt_WF_Emphasis", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_EmphasisEss", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss(".Cellgrd_WF_Text", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle1", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBg", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBgS", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_2DepthTitle", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_TitleRed", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_Desc", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_PF_GuideItem", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.Guide_title", "align", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#c92054");
    this._addCss("Button.btn_MF_UserPass", "color", obj, ["mouseover", "focused", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_MF_Go.png","","0","0","100","50","true");
    this._addCss("Button.btn_MF_BottomGo", "background", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Button.BottomGo", "background", obj, ["disabled"]);

    obj = new nexacro.Style_font("9 Arial");
    this._addCss("Button.btn_MF_BottomGo", "font", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Button.BottomGo", "font", obj, ["disabled"]);
    this._addCss("Edit.edt_MF_User", "font", obj, ["normal"]);
    this._addCss("Edit.edt_MF_Password", "font", obj, ["normal"]);
    this._addCss("Edit.edt_MF_SecuriCode", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_MF_ErrorFollowingsItem", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_01", "font", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_02", "font", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_PopupBtn", "font", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Action", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Div.div_WFSA_Bg_S", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Emphasis", "font", obj, ["normal"]);
    this._addCss("Edit.edt_WF_EmphasisEss", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum01", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum04", "font", obj, ["normal"]);
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "font", obj, ["disabled"]);
    this._addCss("PopupDiv.pdiv_WF_Combolist", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_WFSA_LabelEss", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelC", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelS", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelEss", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBg", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBgS", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_GrdPage", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_PF_GuideItem", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea.txt_WF_Message", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_GID_txt", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_GID_txt02", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "font", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_TF_DropdownItem", "font", obj, ["normal"]);
    this._addCss("Button.btn_WFSA_Expand", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Collapse", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_left", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tab.tab_WF_right", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid.grd_WF_CustomComboList", "font", obj, ["normal"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Button.btn_MF_BottomGo", "align", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Button.BottomGo", "align", obj, ["disabled"]);
    this._addCss("Static.sta_TF_UM_UserNameLabel", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss(".Cellgrd_WF_Number", "align", obj, ["normal"]);
    this._addCss("Static.sta_WFSA_LabelEss", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelS", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelEss", "align", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 20 1 0");
    this._addCss("Button.btn_MF_BottomGo", "padding", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Button.BottomGo", "padding", obj, ["disabled"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("Button.btn_MF_BottomGo", "shadow", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Button.BottomGo", "shadow", obj, ["disabled"]);
    this._addCss("Edit.edt_MF_User", "shadow", obj, ["normal"]);
    this._addCss("Edit.edt_MF_Password", "shadow", obj, ["normal"]);
    this._addCss("Edit.edt_MF_SecuriCode", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_TBF_TabMenuPrev", "shadow", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_TBF_TabMenuNext", "shadow", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_TF_Setting", "shadow", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_TF_MenuPrev", "shadow", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_TF_MenuNext", "shadow", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Popclose", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "shadow", obj, ["disabled"]);
    this._addCss("PopupDiv.pdiv_WF_Combolist", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_WFSA_LabelEss", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelC", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelS", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelEss", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBg", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBgS", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "shadow", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_TF_DropdownItem", "shadow", obj, ["normal"]);
    this._addCss("Button.btn_WFSA_Expand", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Collapse", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_left", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CustomCombo", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_WF_CustomComboList", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Div.div_logIn", "background", obj, ["normal"]);
    this._addCss("Static.sta_MF_LoginBg", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_LoginBg01", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MDI_02", "background", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Static.sta_TF_MenuBg", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WF_PopupBtn", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Action", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ComboBtn", "background", obj, ["normal"]);
    this._addCss("Button.btn_WF_ComboBtnE", "background", obj, ["normal"]);
    this._addCss("Div.div_WF_WorkBg", "background", obj, ["normal"]);
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "background", obj, ["disabled"]);
    this._addCss("PopupDiv.div_WF_CalpopBg", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupDiv.pdiv_WF_Combolist", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupDiv.div_PF_Dropdown", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBg", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBgS", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_TF_DropdownItem", "background", obj, ["normal"]);
    this._addCss("Grid.grd_TF_DropdownItem>#head", "background", obj, ["normal"]);
    this._addCss("Div.div_TF_DropdownItemBg", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_WF_CustomComboList", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f7f7f7ff","theme://images/img_MF_EditUser.png","","0","0","0","50","true");
    this._addCss("Edit.edt_MF_User", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#bdbdbdff","");
    this._addCss("Edit.edt_MF_User", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.edt_MF_Password", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spinupbutton", "border", obj, ["focused"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spindownbutton", "border", obj, ["focused"]);
    this._addCss("Button.btn_WF_ComboBtn", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Button.btn_WF_ComboBtnR", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Edit.edt_WF_Emphasis", "border", obj, ["normal"]);
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "border", obj, ["disabled"]);
    this._addCss("PopupDiv.pdiv_WF_Combolist", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Edit.edt_MF_User", "color", obj, ["normal"]);
    this._addCss("Edit.edt_MF_Password", "color", obj, ["normal"]);
    this._addCss("Edit.edt_MF_SecuriCode", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_MF_ErrorGuide", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ErrorFollowings", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.sta_TF_User", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_UM_UserNameLabel", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WF_PopupBtn", "color", obj, ["normal", "focused", "mouseover", "selected", "pushed"]);
    this._addCss("Button.btn_WF_Action", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Div.div_WFSA_Bg_S", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Emphasis", "color", obj, ["normal"]);
    this._addCss("Edit.edt_WF_EmphasisEss", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum01", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum04", "color", obj, ["normal"]);
    this._addCss("PopupDiv.pdiv_WF_Combolist", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle1", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WFSA_LabelEss", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelC", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelS", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelEss", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBg", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBgS", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_2DepthTitle", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_GrdPage", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea.txt_WF_Message", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.Guide_title", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "color", obj, ["normal"]);
    this._addCss("Grid.grd_TF_DropdownItem", "color", obj, ["normal"]);
    this._addCss("Tab.tab_WF_left", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Tab.tab_WF_right", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid.grd_WF_CustomComboList", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Edit.edt_MF_User", "cursor", obj, ["normal"]);
    this._addCss("Edit.edt_MF_Password", "cursor", obj, ["normal"]);
    this._addCss("Edit.edt_MF_SecuriCode", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spinupbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#extrabutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "cursor", obj, ["disabled"]);
    this._addCss("PopupDiv.pdiv_WF_Combolist", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_WFSA_LabelEss", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelC", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelS", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelEss", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBg", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBgS", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "cursor", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_TF_DropdownItem", "cursor", obj, ["normal"]);
    this._addCss("Tab.tab_WF_left", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CustomCombo", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_WF_CustomComboList", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Edit.edt_MF_User", "gradation", obj, ["normal"]);
    this._addCss("Edit.edt_MF_Password", "gradation", obj, ["normal"]);
    this._addCss("Edit.edt_MF_SecuriCode", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spinupbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#extrabutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_PopupBtn", "gradation", obj, ["normal", "focused", "mouseover", "selected", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "gradation", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Button.btn_WF_ShuttleR", "gradation", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Button.btn_WF_ShuttleT", "gradation", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Button.btn_WF_ShuttleB", "gradation", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Button.btn_WF_Action", "gradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "gradation", obj, ["disabled"]);
    this._addCss("PopupDiv.pdiv_WF_Combolist", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_WFSA_LabelEss", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelC", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelS", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelEss", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBg", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBgS", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "gradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_TF_DropdownItem", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_TF_DropdownItem>#head", "gradation", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_WF_left", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CustomCombo", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_WF_CustomComboList", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Edit.edt_MF_User", "opacity", obj, ["normal"]);
    this._addCss("Edit.edt_MF_Password", "opacity", obj, ["normal"]);
    this._addCss("Edit.edt_MF_SecuriCode", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_PopupBtn", "opacity", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WFSA_Search", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "opacity", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "opacity", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "opacity", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "opacity", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Action", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ComboBtn", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ComboBtnR", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_PF_Search", "opacity", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "opacity", obj, ["disabled"]);
    this._addCss("PopupDiv.pdiv_WF_Combolist", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_WFSA_LabelEss", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelC", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelS", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelEss", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBg", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBgS", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "opacity", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_TF_DropdownItem", "opacity", obj, ["normal"]);
    this._addCss("Button.btn_WFSA_Expand", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Collapse", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_left", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CustomCombo", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_WF_CustomComboList", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 8 0 30");
    this._addCss("Edit.edt_MF_User", "padding", obj, ["normal"]);
    this._addCss("Edit.edt_MF_Password", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#3e4753");
    this._addCss("Edit.edt_MF_User", "selectbackground", obj, ["normal"]);
    this._addCss("Edit.edt_MF_Password", "selectbackground", obj, ["normal"]);
    this._addCss("Edit.edt_WF_Emphasis", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Edit.edt_MF_User", "selectcolor", obj, ["normal"]);
    this._addCss("Edit.edt_MF_Password", "selectcolor", obj, ["normal"]);
    this._addCss("Edit.edt_MF_SecuriCode", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Emphasis", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#faf1f4ff","theme://images/img_MF_EditUser.png","","0","0","0","50","true");
    this._addCss("Edit.edt_MF_User", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#ecececff","","","0","0","0","0","true");
    this._addCss("Edit.edt_MF_User", "background", obj, ["disabled"]);
    this._addCss("Edit.edt_MF_Password", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ComboBtn", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ComboBtnR", "background", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ComboBtnE", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","");
    this._addCss("Edit.edt_MF_User", "border", obj, ["disabled"]);
    this._addCss("Edit.edt_MF_Password", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ComboBtn", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ComboBtnE", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#888888");
    this._addCss("Edit.edt_MF_User", "color", obj, ["disabled"]);
    this._addCss("Edit.edt_MF_Password", "color", obj, ["disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu", "color", obj, ["disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBgS", "color", obj, ["disabled"]);
    this._addCss("Tab.tab_WF_left", "color", obj, ["disabled"]);
    this._addCss("Tab.tab_WF_right", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f7f7f7ff","theme://images/img_MF_EditPass.png","","0","0","0","50","true");
    this._addCss("Edit.edt_MF_Password", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#faf1f4ff","theme://images/img_MF_EditPass.png","","0","0","0","50","true");
    this._addCss("Edit.edt_MF_Password", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#ffe2ebff","","","0","0","0","0","true");
    this._addCss("Edit.edt_MF_SecuriCode", "background", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#db9bafff","");
    this._addCss("Edit.edt_MF_SecuriCode", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 8 0 8");
    this._addCss("Edit.edt_MF_SecuriCode", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("#c92054");
    this._addCss("Edit.edt_MF_SecuriCode", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("4","solid","#c5003dff","","1","solid","#c6c6c6ff","","1","solid","#c6c6c6ff","","1","solid","#c6c6c6ff","");
    this._addCss("Static.sta_MF_LoginBg", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_shadow("outer 0,1 5 #cecece");
    this._addCss("Static.sta_MF_LoginBg", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_LoginBg01", "shadow", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("2","solid","#c5003dff","","1","solid","#c6c6c6ff","","1","solid","#c6c6c6ff","","1","solid","#c6c6c6ff","");
    this._addCss("Static.sta_MF_LoginBg01", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","Images::sta_MF_LoginVisual.png","","0","0","0","0","true");
    this._addCss("Static.sta_MF_LoginVisual", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_MF_LoginLogo.png","","0","0","0","0","true");
    this._addCss("Static.sta_MF_LoginLogo", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/sta_MF_LoginTitle01.png","","0","0","0","0","true");
    this._addCss("Static.sta_MF_LoginTitle", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_MF_LoginCopy.png","","0","0","0","0","true");
    this._addCss("Static.sta_MF_LoginCopy", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#f9f9f9ff","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_BottomBg", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_BottoBgm", "background", obj, ["disabled"]);
    this._addCss("Static.sta_WF_DetailLabel", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelC", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelS", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelEss", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#ddddddff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Static.sta_MF_BottomBg", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_BottoBgm", "border", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_MF_UserImage.png","","0","0","0","0","true");
    this._addCss("Static.sta_MF_UserImage", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("10 Arial");
    this._addCss("Static.sta_MF_UserName", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ErrorFollowings", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu", "font", obj, ["disabled"]);

    obj = new nexacro.Style_color("#969696");
    this._addCss("Static.sta_MF_UserLocation", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_MF_ErrorImage.png","","0","0","50","50","true");
    this._addCss("Static.sta_MF_ErrorImage", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#c5003d");
    this._addCss("Static.sta_MF_ErrorTitle", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MDI_02", "color", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Static.sta_WF_GrdPageS", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_Desc", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("35 Arial");
    this._addCss("Static.sta_MF_ErrorTitle", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("11 Arial");
    this._addCss("Static.sta_MF_ErrorGuide", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Static.sta_MF_ErrorFollowings", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WF_CalPrev", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CalNext", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Add", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CustomCombo", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_MF_Bullet.png","","0","0","5","50","true");
    this._addCss("Static.sta_MF_ErrorFollowingsItem", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#7d7d7d");
    this._addCss("Static.sta_MF_ErrorFollowingsItem", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_PF_GuideItem", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 0 2 40");
    this._addCss("Static.sta_MF_ErrorFollowingsItem", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_TBF_TabMenuPrevN.png","","0","0","50","50","true");
    this._addCss("Button.btn_TBF_TabMenuPrev", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#dadadaff","");
    this._addCss("Button.btn_TBF_TabMenuPrev", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_TBF_TabMenuPrevO.png","","0","0","50","50","true");
    this._addCss("Button.btn_TBF_TabMenuPrev", "background", obj, ["mouseover", "focused", "pushed", "selected"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#dadadaff","");
    this._addCss("Button.btn_TBF_TabMenuPrev", "border", obj, ["mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_TBF_TabMenuNext", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_TBF_TabMenuPrevD.png","","0","0","50","50","true");
    this._addCss("Button.btn_TBF_TabMenuPrev", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_TBF_TabMenuNextN.png","","0","0","50","50","true");
    this._addCss("Button.btn_TBF_TabMenuNext", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_TBF_TabMenuNextO.png","","0","0","50","50","true");
    this._addCss("Button.btn_TBF_TabMenuNext", "background", obj, ["mouseover", "focused", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_TBF_TabMenuNextD.png","","0","0","50","50","true");
    this._addCss("Button.btn_TBF_TabMenuNext", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f0f0f0ff","","","0","0","0","0","true");
    this._addCss("Static.sta_TBF_TabMenuBg", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MDI_01", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#fefefeff","","0","none","","","1","solid","#d0d0d0ff","","0","none","","");
    this._addCss("Static.sta_TBF_TabMenuBg", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Tab.tab_TBF_TabMenu", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f8f9faff","","","0","0","0","0","true");
    this._addCss("Tab.tab_TBF_TabMenu", "buttonbackground", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("1 solid #dadada");
    this._addCss("Tab.tab_TBF_TabMenu", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Tab.tab_TBF_TabMenu", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_left", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Tab.tab_TBF_TabMenu", "buttongradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_left", "buttongradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "buttongradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("10 10 10 10");
    this._addCss("Tab.tab_TBF_TabMenu", "buttonpadding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_margin("0 0 0 -1");
    this._addCss("Tab.tab_TBF_TabMenu", "buttonmargin", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_line("0","","","");
    this._addCss("Tab.tab_TBF_TabMenu", "focusborder", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_left", "focusborder", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "focusborder", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Tab.tab_TBF_TabMenu", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "padding", obj, ["disabled"]);
    this._addCss("PopupDiv.pdiv_WF_Combolist", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "padding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_TF_DropdownItem", "padding", obj, ["normal"]);
    this._addCss("Tab.tab_WF_left", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_WF_CustomComboList", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Tab.tab_TBF_TabMenu", "showextrabutton", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_left", "showextrabutton", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "showextrabutton", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("Tab.tab_TBF_TabMenu", "stepalign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("PopupDiv.pdiv_WF_Combolist", "stepalign", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Tab.tab_WF_left", "stepalign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "stepalign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab.tab_TBF_TabMenu", "stepshowtype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_left", "stepshowtype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "stepshowtype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","0","none","","");
    this._addCss("Tab.tab_TBF_TabMenu", "border", obj, ["focused"]);
    this._addCss("Button.btn_WF_CustomCombo", "border", obj, ["normal", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#f1f1f1ff","","","0","0","0","0","true");
    this._addCss("Tab.tab_TBF_TabMenu", "buttonbackground", obj, ["focused"]);
    this._addCss("Tab.tab_WF_left", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Tab.tab_WF_right", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Tab.tab_TBF_TabMenu", "buttonbackground", obj, ["selected"]);

    obj = new nexacro.Style_color("#f62968");
    this._addCss("Tab.tab_TBF_TabMenu", "color", obj, ["selected"]);
    this._addCss("Tab.tab_WF_left", "color", obj, ["selected"]);
    this._addCss("Tab.tab_WF_right", "color", obj, ["selected"]);

    obj = new nexacro.Style_background("#eaeaeaff","","","0","0","0","0","true");
    this._addCss("Tab.tab_TBF_TabMenu", "buttonbackground", obj, ["disabled"]);
    this._addCss("Tab.tab_WF_left", "buttonbackground", obj, ["disabled"]);
    this._addCss("Tab.tab_WF_right", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Tab.tab_TBF_TabMenu>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Button.btn_WF_CustomCombo", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("");
    this._addCss("Tab.tab_TBF_TabMenu>#spinupbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#extrabutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CustomCombo", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_font("");
    this._addCss("Tab.tab_TBF_TabMenu>#spinupbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#extrabutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CustomCombo", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TabSpinup.png')");
    this._addCss("Tab.tab_TBF_TabMenu>#spinupbutton", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TabSpinup_O.png')");
    this._addCss("Tab.tab_TBF_TabMenu>#spinupbutton", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TabSpinup_P.png')");
    this._addCss("Tab.tab_TBF_TabMenu>#spinupbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_align("");
    this._addCss("Tab.tab_TBF_TabMenu>#spinupbutton", "imagealign", obj, ["disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spindownbutton", "imagealign", obj, ["disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#extrabutton", "imagealign", obj, ["disabled"]);
    this._addCss("Static.sta_TF_User", "imagealign", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WF_PopupBtn", "imagealign", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Action", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ComboBtn", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ComboBtnR", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CustomCombo", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("50%");
    this._addCss("Tab.tab_TBF_TabMenu>#spinupbutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#spindownbutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab.tab_TBF_TabMenu>#extrabutton", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TabSpindown.png')");
    this._addCss("Tab.tab_TBF_TabMenu>#spindownbutton", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TabSpindown_O.png')");
    this._addCss("Tab.tab_TBF_TabMenu>#spindownbutton", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TabSpindown_P.png')");
    this._addCss("Tab.tab_TBF_TabMenu>#spindownbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TabExtra.png')");
    this._addCss("Tab.tab_TBF_TabMenu>#extrabutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#dadadaff","","0","none","","","1","solid","#dadadaff","");
    this._addCss("Button.btn_MDI_01", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_02", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Button.btn_MDI_01", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_02", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_03", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Button.btn_MDI_01", "color", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_padding("0 0 0 13");
    this._addCss("Button.btn_MDI_01", "padding", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_02", "padding", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#f8f9faff","","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_01", "background", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_TBF_MdiClose.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_03", "background", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_shadow("none");
    this._addCss("Button.btn_MDI_03", "shadow", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/btn_TF_SettingN.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_Setting", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/btn_TF_SettingO.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_Setting", "background", obj, ["mouseover", "focused", "pushed", "selected"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/btn_TF_SettingD.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_Setting", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/btn_TF_MenuPrevN.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_MenuPrev", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/btn_TF_MenuPrevO.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_MenuPrev", "background", obj, ["mouseover", "focused", "pushed", "selected"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/btn_TF_MenuPrevD.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_MenuPrev", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/btn_TF_MenuNextN.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_MenuNext", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/btn_TF_MenuNextO.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_MenuNext", "background", obj, ["mouseover", "focused", "pushed", "selected"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/btn_TF_MenuNextD.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_MenuNext", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","3","solid","#c5003dff","","0","none","","");
    this._addCss("Static.sta_TF_MenuBg", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/sta_TF_System.png","","0","0","0","0","true");
    this._addCss("Static.sta_TF_System", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_TF_User.png","","0","0","0","50","true");
    this._addCss("Static.sta_TF_User", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("8 Arial");
    this._addCss("Static.sta_TF_User", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_Desc", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.Guide_number", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.Guide_class", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Static.sta_TF_User", "image", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WF_PopupBtn", "image", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Action", "image", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WFSA_Expand", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Collapse", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 24");
    this._addCss("Static.sta_TF_User", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("12 bold Arial");
    this._addCss("Static.sta_TF_UM_UserName", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 10 0 0");
    this._addCss("Static.sta_TF_UM_UserNameLabel", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelC", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelS", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelEss", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/div_TF_UserMenu.png","stretch","60","110","0","0","true");
    this._addCss("Div.div_TF_UserMenu", "background", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_PopupBtn", "background", obj, ["normal", "focused", "mouseover", "selected"]);
    this._addCss("Button.btn_WF_Action", "background", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_border("1","solid","#aeaeaeff","");
    this._addCss("Button.btn_WF_PopupBtn", "border", obj, ["normal", "focused"]);
    this._addCss("Button.btn_WF_Action", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","2","2","true","true","true","true");
    this._addCss("Button.btn_WF_PopupBtn", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Button.btn_WFSA_Search", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Action", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_PF_Search", "bordertype", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("PopupDiv.div_WF_CalpopBg", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("Button.btn_WF_PopupBtn", "padding", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Action", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ComboBtn", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ComboBtnR", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ComboBtnE", "padding", obj, ["normal"]);

    obj = new nexacro.Style_shadow("outer 0,1 0 #dcdcdcff");
    this._addCss("Button.btn_WF_PopupBtn", "shadow", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "shadow", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "shadow", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "shadow", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "shadow", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Action", "shadow", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#585858ff","");
    this._addCss("Button.btn_WF_PopupBtn", "border", obj, ["mouseover", "selected"]);
    this._addCss("Button.btn_WF_Action", "border", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("Button.btn_WF_PopupBtn", "bordertype", obj, ["mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Action", "bordertype", obj, ["mouseover", "selected", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_PopupBtn", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleL", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleR", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleT", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleB", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_Action", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ComboBtn", "background", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("Button.btn_WF_ComboBtnE", "background", obj, ["mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#585858ff","");
    this._addCss("Button.btn_WF_PopupBtn", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleL", "border", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleR", "border", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleT", "border", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleB", "border", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_WF_Action", "border", obj, ["pushed"]);
    this._addCss("Edit.edt_WF_Emphasis", "border", obj, ["mouseover", "focused"]);
    this._addCss("PopupDiv.div_WF_CalpopBg", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ecececff 0,100 #ffffffff");
    this._addCss("Button.btn_WF_PopupBtn", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleL", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleR", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleT", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleB", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_Action", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#bfbfbfff","");
    this._addCss("Button.btn_WF_PopupBtn", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "border", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "border", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "border", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "border", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_Action", "border", obj, ["disabled"]);
    this._addCss("Edit.edt_WF_Emphasis", "border", obj, ["disabled"]);
    this._addCss("Edit.edt_WF_EmphasisEss", "border", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_CustomComboList", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#afafaf");
    this._addCss("Button.btn_WF_PopupBtn", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Action", "color", obj, ["disabled"]);
    this._addCss("Edit.edt_WF_Emphasis", "color", obj, ["disabled"]);
    this._addCss("Edit.edt_WF_EmphasisEss", "color", obj, ["disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("#6d6d6dff","","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Search", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#3a3a3aff","");
    this._addCss("Button.btn_WFSA_Search", "border", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Arial");
    this._addCss("Button.btn_WFSA_Search", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_PF_Search", "font", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_left", "font", obj, ["selected"]);
    this._addCss("Tab.tab_WF_right", "font", obj, ["selected"]);

    obj = new nexacro.Style_padding("1 7 0 7");
    this._addCss("Button.btn_WFSA_Search", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_PF_Search", "padding", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WFSA_Expand", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Collapse", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#636363ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Search", "background", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#212121ff","");
    this._addCss("Button.btn_WFSA_Search", "border", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#ebebebff","","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Search", "background", obj, ["disabled"]);
    this._addCss("Edit.edt_WF_Emphasis", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#b3b3b3ff","");
    this._addCss("Button.btn_WFSA_Search", "border", obj, ["disabled"]);
    this._addCss("Button.btn_PF_Search", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#a4a4a4");
    this._addCss("Button.btn_WFSA_Search", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_SearchSmall.png')");
    this._addCss("Button.btn_WF_SearchSmall", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_SearchSmall_D.png')");
    this._addCss("Button.btn_WF_SearchSmall", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL_P.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL_D.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR_P.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR_D.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleT.png')");
    this._addCss("Button.btn_WF_ShuttleT", "image", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleT_P.png')");
    this._addCss("Button.btn_WF_ShuttleT", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleT_D.png')");
    this._addCss("Button.btn_WF_ShuttleT", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleB.png')");
    this._addCss("Button.btn_WF_ShuttleB", "image", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleB_P.png')");
    this._addCss("Button.btn_WF_ShuttleB", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleB_D.png')");
    this._addCss("Button.btn_WF_ShuttleB", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalPrev.png')");
    this._addCss("Button.btn_WF_CalPrev", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_WF_CalPrev", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CalNext", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Expand", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Collapse", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalPrev_O.png')");
    this._addCss("Button.btn_WF_CalPrev", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalNext.png')");
    this._addCss("Button.btn_WF_CalNext", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalNext_O.png')");
    this._addCss("Button.btn_WF_CalNext", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_AlertClose.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Popclose", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/btn_WF_Calendar.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_CalBtn", "background", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","0","0","true","true","true","true");
    this._addCss("Button.btn_WF_CalBtn", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("#fffff4ff","theme://images/btn_WF_Calendar.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_CalBtn", "background", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("#ecececff","theme://images/btn_WF_Calendar_D.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_CalBtn", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/cmb_WF_Drop.png')");
    this._addCss("Button.btn_WF_ComboBtn", "image", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Button.btn_WF_ComboBtnR", "image", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ComboBtnE", "image", obj, ["normal"]);
    this._addCss("Button.btn_WF_CustomCombo", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #dfdfdf");
    this._addCss("Button.btn_WF_ComboBtn", "gradation", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Button.btn_WF_ComboBtnE", "gradation", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_gradation("linear 0,0 #dfdfdf 0,100 #ffffff");
    this._addCss("Button.btn_WF_ComboBtn", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ComboBtnE", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/cmb_WF_Drop_D.png')");
    this._addCss("Button.btn_WF_ComboBtn", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ComboBtnE", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_CustomCombo", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#de7998ff","");
    this._addCss("Button.btn_WF_ComboBtnE", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/cmb_WF_EssentialDrop.png')");
    this._addCss("Button.btn_WF_ComboBtnE", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/cmb_WF_EssentialDrop_P.png')");
    this._addCss("Button.btn_WF_ComboBtnE", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("#c92054ff","","","0","0","0","0","true");
    this._addCss("Button.btn_PF_Search", "background", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Search.png')");
    this._addCss("Button.btn_PF_Search", "image", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_align("lefttext middle");
    this._addCss("Button.btn_PF_Search", "imagealign", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#cacacaff","","","0","0","0","0","true");
    this._addCss("Button.btn_PF_Search", "background", obj, ["disabled"]);

    obj = new nexacro.Style_padding("0 7 0 7");
    this._addCss("Button.btn_PF_Search", "padding", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePreviousP_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePreviousP", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePreviousP_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePreviousP", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePreviousP_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePreviousP", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePreviousP_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePreviousP", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePrevious_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePrevious", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePrevious_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePrevious", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePrevious_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePrevious", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePrevious_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePrevious", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNextP_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNextP", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNextP_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNextP", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNextP_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNextP", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNextP_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNextP", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNext_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNext", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNext_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNext", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNext_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNext", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNext_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNext", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("Div.div_WFSA_Bg_S", "background", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","","1","solid","#e0e0e0ff","","1","solid","#e0e0e0ff","","1","solid","#e0e0e0ff","");
    this._addCss("Div.div_WFSA_Bg_S", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_shadow("outer 0,0 0 transparent");
    this._addCss("Div.div_WFSA_Bg_S", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Edit.edt_WF_Emphasis", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 8");
    this._addCss("Edit.edt_WF_Emphasis", "padding", obj, ["normal", "disabled"]);
    this._addCss("Edit.edt_WF_EmphasisEss", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#fffff4ff","","","0","0","0","0","true");
    this._addCss("Edit.edt_WF_Emphasis", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#fffbe3ff","theme://images/img_WF_Essential.png","","0","0","0","0","true");
    this._addCss("Edit.edt_WF_EmphasisEss", "background", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_border("1","solid","#f62968ff","");
    this._addCss("Edit.edt_WF_EmphasisEss", "border", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("#faf1f4");
    this._addCss("Edit.edt_WF_EmphasisEss", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Edit.edt_WF_EmphasisEss", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_TF_DropdownItem>#head", "selectcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#ecececff","theme://images/img_WF_Essential.png","","0","0","0","0","true");
    this._addCss("Edit.edt_WF_EmphasisEss", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_PopBg.png","stretch","20","50","0","0","true");
    this._addCss("Form.frm_POP_Bg", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/img_WF_Essential.png","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_HeadEssential", "background", obj, ["normal"]);

    obj = new nexacro.Style_font("underline 9 Arial");
    this._addCss(".Cellgrd_WF_BodyLink", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_HeadLink", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#4285be");
    this._addCss(".Cellgrd_WF_BodyLink", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_HeadLink", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#4285be");
    this._addCss(".Cellgrd_WF_BodyLink", "color2", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_HeadLink", "color2", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss(".Cellgrd_WF_BodyLink", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_Number", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_Text", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum01", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum04", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#4285be");
    this._addCss(".Cellgrd_WF_BodyLink", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("underline 9 Arial");
    this._addCss(".Cellgrd_WF_BodyLink", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#fffbf3ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum01", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","","0","none","","","0","none","","");
    this._addCss(".Cellgrd_WF_sum01", "line", obj, ["normal"]);

    obj = new nexacro.Style_background("#f4f3ffff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum02", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","","0","none","","","0","none","","","0","none","","");
    this._addCss(".Cellgrd_WF_sum02", "line", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "line", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum04", "line", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5fff3ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum03", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss(".Cellgrd_WF_sum03", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#f3f9ffff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum04", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","","0","none","","","0","none","","","0","none","","");
    this._addCss(".Cellgrd_WF_sum04", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","","1","solid","#d5d5d5ff","","1","solid","#bfbfbfff","","1","solid","#d5d5d5ff","");
    this._addCss(".Cellgrd_WF_Multihead", "line", obj, ["normal"]);

    obj = new nexacro.Style_background("#d9ecebff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_FreezeColumn", "background", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_FreezeColumnLast", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f0f8f7ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_FreezeRow", "background", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_FreezeRowLast", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f6fefdff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_FreezeRow", "background2", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_FreezeRowLast", "background2", obj, ["normal"]);

    obj = new nexacro.Style_value("#d9eceb");
    this._addCss(".Cellgrd_WF_FreezeRow", "selectbackground", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_FreezeRowLast", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","","1","solid","#48e3d6ff","","2","solid","#bfbfbfff","","1","solid","#d5d5d5ff","");
    this._addCss(".Cellgrd_WF_FreezeColumnLast", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","","1","solid","#48e3d6ff","","2","solid","#bfbfbfff","","1","solid","#d5d5d5ff","");
    this._addCss(".Cellgrd_WF_FreezeColumnLast", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#48e3d6ff","","0","none","","","0","none","","");
    this._addCss(".Cellgrd_WF_FreezeRowLast", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#48e3d6ff","","0","none","","","0","none","","");
    this._addCss(".Cellgrd_WF_FreezeRowLast", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "checkboximage", obj, ["disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "checkboximage", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_color("#8f8f8f");
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "expandimage", obj, ["disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "expandimage", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "itemaccessibility", obj, ["disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "itemaccessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#ebebebff","","","0","0","0","0","true");
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "itembackground", obj, ["disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "itemborder", obj, ["disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "itemborder", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "itembordertype", obj, ["disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "itembordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "itemgradation", obj, ["disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "itemgradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("19");
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "itemheight", obj, ["disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "itemheight", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("0 2 0 30");
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "itempadding", obj, ["disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "itempadding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("PopupMenu.pmnu_WF_GridFilter", "popuptype", obj, ["disabled"]);
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "popuptype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/img_PF_QuickBg.png","stretch","20","20","0","0","true");
    this._addCss("PopupDiv.div_PF_Quick", "background", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#9c9c9cff","");
    this._addCss("PopupDiv.div_PF_Dropdown", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_TF_DropdownItemBg", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_2DepthTitl.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_SubTitle1", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_2DepthTitle", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.Guide_title", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 12");
    this._addCss("Static.sta_WF_SubTitle1", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_2DepthTitle", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_Desc", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.Guide_title", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Static.sta_WFSA_LabelEss", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelC", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelS", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelEss", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBg", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelBgS", "linespace", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 9 0 0");
    this._addCss("Static.sta_WFSA_LabelEss", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","","0","none","","","1","solid","#d5d5d5ff","","1","solid","#d5d5d5ff","");
    this._addCss("Static.sta_WF_DetailLabel", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelC", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelS", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabelEss", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","","1","solid","#d5d5d5ff","","1","solid","#d5d5d5ff","","1","solid","#d5d5d5ff","");
    this._addCss("Static.sta_WF_DetailLabelBg", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 10 0 30");
    this._addCss("Static.sta_WF_DetailLabelBg", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#eeeeeeff","");
    this._addCss("Static.sta_WF_DetailLabelBgS", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 10 0 20");
    this._addCss("Static.sta_WF_DetailLabelBgS", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("bold 10 Arial");
    this._addCss("Static.sta_POP_PopTitle", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_Calyy", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 15");
    this._addCss("Static.sta_POP_PopTitle", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Calbg.png","","0","0","0","0","true");
    this._addCss("Static.sta_WF_Calbg", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_PopBg.png","stretch","20","50","0","0","true");
    this._addCss("Static.sta_WF_AlertBg", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ConfirmBg", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ErrorBg", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_AlertIcon.png","","0","0","0","0","true");
    this._addCss("Static.sta_WF_AlertIcon", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_ConfirmIcon.png","stretch","20","50","0","0","true");
    this._addCss("Static.sta_WF_ConfirmIcon", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_ErrorIcon.png","","0","0","0","0","true");
    this._addCss("Static.sta_WF_ErrorIcon", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#d24470");
    this._addCss("Static.sta_WF_TitleRed", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("bold underline 9 Arial");
    this._addCss("Static.sta_WF_GrdPageS", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Desc.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_Desc", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_MF_Bullet.png","","0","0","3","50","true");
    this._addCss("Static.sta_PF_GuideItem", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 0 2 25");
    this._addCss("Static.sta_PF_GuideItem", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#b5b5b5ff","");
    this._addCss("TextArea.txt_WF_Message", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("2");
    this._addCss("TextArea.txt_WF_Message", "linespace", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("TextArea.txt_WF_Message", "align", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 5");
    this._addCss("TextArea.txt_WF_Message", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ff9197ff","","","0","0","0","0","true");
    this._addCss("Static.Guide_color", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("70");
    this._addCss("Static.Guide_color", "opacity", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#ff0000");
    this._addCss("Static.sta_GID_txt", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#db4949");
    this._addCss("Static.sta_GID_txt02", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#577aaf");
    this._addCss("Static.Guide_number", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.Guide_class", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#ff709e");
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "color", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("PopupMenu.pmnu_PF_DropownMenu", "itembackground", obj, ["mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","2","solid","#ebebebff","");
    this._addCss("Grid.grd_TF_DropdownItem", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid.grd_TF_DropdownItem", "line", obj, ["normal"]);
    this._addCss("Grid.grd_WF_CustomComboList", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid.grd_TF_DropdownItem", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_TF_DropdownItem>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_CustomComboList", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_TF_DropdownItem", "selectpointimagez", obj, ["normal"]);
    this._addCss("Grid.grd_WF_CustomComboList", "selectpointimagez", obj, ["normal"]);

    obj = new nexacro.Style_value("none");
    this._addCss("Grid.grd_TF_DropdownItem", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_TF_DropdownItem", "treecollapseimage", obj, ["normal"]);
    this._addCss("Grid.grd_WF_CustomComboList", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_TF_DropdownItem", "treeexpandimage", obj, ["normal"]);
    this._addCss("Grid.grd_WF_CustomComboList", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("none");
    this._addCss("Grid.grd_TF_DropdownItem", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_TF_DropdownItem", "treeitemmargin", obj, ["normal"]);
    this._addCss("Grid.grd_WF_CustomComboList", "treeitemmargin", obj, ["normal"]);

    obj = new nexacro.Style_line("0","none","","");
    this._addCss("Grid.grd_TF_DropdownItem", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_TF_DropdownItem", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "cellalign", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellalign", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "cellbackground", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellbackground", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellbackground2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "cellcolor", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "cellcolor2", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_font("11 Arial");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "cellfont", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "cellgradation", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellgradation", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "cellgradation2", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellgradation2", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "cellline", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellline", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "celllinespace", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "celllinespace", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 10");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "cellpadding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("#ffffff");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "selectbackground", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "selectbackground", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#ff75a1f");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "selectgradation", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "selectgradation", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("3");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "cellbackground2", obj, ["mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_font("9 Arial");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "selectfont", obj, ["mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "selectfont", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_TF_DropdownItem>#head", "selectline", obj, ["mouseover"]);
    this._addCss("Grid.grd_TF_DropdownItem>#body", "selectline", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("9 Arial");
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellfont", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 30");
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellpadding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#ff709e");
    this._addCss("Grid.grd_TF_DropdownItem>#body", "selectcolor", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#ff709e");
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#ff709e");
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellcolor2", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#afafaf");
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellcolor", obj, ["disabled"]);

    obj = new nexacro.Style_color("#afafaf");
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellcolor2", obj, ["disabled"]);

    obj = new nexacro.Style_padding("2 2 2 2");
    this._addCss("Grid.grd_TF_DropdownItem>#body", "cellpadding", obj, ["disabled"]);

    obj = new nexacro.Style_color("#afafaf");
    this._addCss("Grid.grd_TF_DropdownItem>#body", "selectcolor", obj, ["disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("Button.btn_WFSA_Expand", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/btn_WFSA_Expand.png","","0","0","50","50","true");
    this._addCss("Button.btn_WFSA_Expand", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/btn_WFSA_Collapse.png","","0","0","50","50","true");
    this._addCss("Button.btn_WFSA_Collapse", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ExcelDownload.png')");
    this._addCss("Button.btn_WF_ExcelDownload", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_padding("0 0 0 2");
    this._addCss("Button.btn_WF_ExcelDownload", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ExcelUpload", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_FileAdd", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_FileExecute", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_FileDelete", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_FileDownload", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_FileUpload", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_FolderAdd", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_FolderDelete", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Delivery", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Save", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ExcelDownload_D.png')");
    this._addCss("Button.btn_WF_ExcelDownload", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ExcelUpload.png')");
    this._addCss("Button.btn_WF_ExcelUpload", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ExcelUpload_D.png')");
    this._addCss("Button.btn_WF_ExcelUpload", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_FileAdd.png')");
    this._addCss("Button.btn_WF_FileAdd", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_FileAdd_D.png')");
    this._addCss("Button.btn_WF_FileAdd", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_FileExecute.png')");
    this._addCss("Button.btn_WF_FileExecute", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_FileExecute_D.png')");
    this._addCss("Button.btn_WF_FileExecute", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_FileDelete.png')");
    this._addCss("Button.btn_WF_FileDelete", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_FileDelete_D.png')");
    this._addCss("Button.btn_WF_FileDelete", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_FileDownload.png')");
    this._addCss("Button.btn_WF_FileDownload", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_FileDownload_D.png')");
    this._addCss("Button.btn_WF_FileDownload", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_FileUpload.png')");
    this._addCss("Button.btn_WF_FileUpload", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_FileUpload_D.png')");
    this._addCss("Button.btn_WF_FileUpload", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_FolderAdd.png')");
    this._addCss("Button.btn_WF_FolderAdd", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_FolderAdd_D.png')");
    this._addCss("Button.btn_WF_FolderAdd", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_FolderDelete.png')");
    this._addCss("Button.btn_WF_FolderDelete", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_FolderDelete_D.png')");
    this._addCss("Button.btn_WF_FolderDelete", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Delivery.png')");
    this._addCss("Button.btn_WF_Delivery", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Delivery_D.png')");
    this._addCss("Button.btn_WF_Delivery", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Save.png')");
    this._addCss("Button.btn_WF_Save", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Save_D.png')");
    this._addCss("Button.btn_WF_Save", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Add.png')");
    this._addCss("Button.btn_WF_Add", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Add_D.png')");
    this._addCss("Button.btn_WF_Add", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Delete.png')");
    this._addCss("Button.btn_WF_Delete", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Delete_D.png')");
    this._addCss("Button.btn_WF_Delete", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#a3a3a3ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Tab.tab_WF_left", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("1 solid #d0d0d0");
    this._addCss("Tab.tab_WF_left", "buttonborder", obj, ["normal", "pushed", "focused"]);
    this._addCss("Tab.tab_WF_right", "buttonborder", obj, ["normal", "pushed", "focused"]);

    obj = new nexacro.Style_padding("5 10 5 10");
    this._addCss("Tab.tab_WF_left", "buttonpadding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "buttonpadding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_margin("0 0 0 0");
    this._addCss("Tab.tab_WF_left", "buttonmargin", obj, ["normal"]);
    this._addCss("Tab.tab_WF_right", "buttonmargin", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab.tab_WF_left", "buttonborder", obj, ["mouseover"]);
    this._addCss("Tab.tab_WF_right", "buttonborder", obj, ["mouseover"]);

    obj = new nexacro.Style_margin("");
    this._addCss("Tab.tab_WF_left", "buttonmargin", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_WF_right", "buttonmargin", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Tab.tab_WF_left", "buttonbackground", obj, ["selected"]);
    this._addCss("Tab.tab_WF_right", "buttonbackground", obj, ["selected"]);

    obj = new nexacro.Style_value("1 solid #f62968, 1 solid #f62968 ,1 solid #f62968, 2 solid #f62968");
    this._addCss("Tab.tab_WF_left", "buttonborder", obj, ["selected"]);

    obj = new nexacro.Style_value("1 solid #c1c1c1");
    this._addCss("Tab.tab_WF_left", "buttonborder", obj, ["disabled"]);
    this._addCss("Tab.tab_WF_right", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_value("1 solid #f62968, 2 solid #f62968 ,1 solid #f62968, 1 solid #f62968");
    this._addCss("Tab.tab_WF_right", "buttonborder", obj, ["selected"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","0","none","","");
    this._addCss("Button.btn_WF_CustomCombo", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_TreeClose.png')");
    this._addCss("Grid.grd_WF_CustomComboList", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_TreeItem.png')");
    this._addCss("Grid.grd_WF_CustomComboList", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_line("0","","","");
    this._addCss("Grid.grd_WF_CustomComboList", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_TreeOpen.png')");
    this._addCss("Grid.grd_WF_CustomComboList", "treeopenbuttonimage", obj, ["normal"]);

    obj = null;
    
//[add theme images]
  };
})();
