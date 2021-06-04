//CSS=WorkFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Popclose", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CalBtn", "background", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Button.btn_grd_fileAdd", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_grd_fileDel", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_grd_fileDelete", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_grd_fileDownload", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_grd_fileUpload", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_grd_manAdd", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_grd_sortDown", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_grd_sortUp", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CustomCombo", "background", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_menuSpin_Prev", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_WF_menuSpin_Next", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_WF_email", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Grid.grd_WF_attachfile>#body", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_map", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#body", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#body", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#body", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#body", "background", obj, ["normal"]);
    this._addCss("Button.btn_WF_CalPrev", "background", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_CalNext", "background", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_CalNum", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("TextArea.txt_WF_Message", "background", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("Static.sta_WFSA_Label", "background", obj, ["normal"]);
    this._addCss("Static.sta_WFSA_line", "background", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_detailTop", "background", obj, ["normal"]);
    this._addCss("Static.sta_WA_Title", "background", obj, ["normal"]);
    this._addCss("Edit.edt_WA_Title", "background", obj, ["normal", "mouseover", "pushed", "focused", "readonly", "disabled"]);
    this._addCss("Static.sta_WF_Location", "background", obj, ["normal"]);
    this._addCss("Edit.edt_WF_Location", "background", obj, ["normal", "mouseover", "pushed", "focused", "readonly", "disabled"]);
    this._addCss("Edit.edt_WA_Title_oper", "background", obj, ["normal", "mouseover", "pushed", "focused", "readonly", "disabled"]);
    this._addCss("Static.sta_WF_txt26_black", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt19_black", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt14_black", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt14_red", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt13_black", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt12_black", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt11_black", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt10_black", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt10_gray", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt9_black", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt9_Gray", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_desc", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_mapInfo_dotline", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY14", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY18", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY20", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY48", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Button.btn_WF_Popclose", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_pop_red", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_pop_gray", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CalBtn", "border", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Button.btn_WF_ShuttleU", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleL", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleR", "border", obj, ["pushed"]);
    this._addCss("Button.btn_grd_black", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_grd_fileAdd", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_grd_fileDel", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_grd_fileDelete", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_grd_fileDownload", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_grd_fileUpload", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_grd_manAdd", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_grd_sortDown", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_grd_sortUp", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CustomCombo", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_red", "border", obj, ["mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WFSA_Up", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WFSA_Down", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_menuSpin_Prev", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_menuSpin_Next", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_pdiv_close", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_email", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_stepL", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepL2", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM2", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepR", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step1", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step2", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step3", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step4", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step5", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_HRDF0003_1", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_2", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_3", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_4", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Div.div_WF_keywordBox", "border", obj, ["normal"]);
    this._addCss("PopupDiv.pdiv_WF_miniPop_BG", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_attachfile>#body", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_map", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_map>#head", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_map>#body", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#head", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#body", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#body", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#head", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#body", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#head", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#body", "border", obj, ["normal"]);
    this._addCss(".grdRdo", "border", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.sta_MF_ErrorImage", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertIcon", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_AlertTitle", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_PopupTitle", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_calTitle", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_gradation_red", "border", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_gradation_gray", "border", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_arrowR", "border", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_CalPrev", "border", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_CalNext", "border", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_CalNum", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CalNumS", "border", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("TextArea.txt_WF_Message", "border", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("Static.sta_WF_ConfirmIcon", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_errorTitle", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_ErrorIcon", "border", obj, ["normal"]);
    this._addCss("Static.sta_WA_Title", "border", obj, ["normal"]);
    this._addCss("Edit.edt_WA_Title", "border", obj, ["normal", "mouseover", "pushed", "focused", "readonly", "disabled"]);
    this._addCss("Static.sta_WF_Location", "border", obj, ["normal"]);
    this._addCss("Edit.edt_WF_Location", "border", obj, ["normal", "mouseover", "pushed", "focused", "readonly", "disabled"]);
    this._addCss("Edit.edt_WA_Title_oper", "border", obj, ["normal", "mouseover", "pushed", "focused", "readonly", "disabled"]);
    this._addCss("Static.sta_WF_Title_gray", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_Title", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitleGroup", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle2", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle3_multi", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle3", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_GridTotal", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_guideBG", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_guideBG2", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt26_black", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt19_black", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt14_black", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt14_red", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt13_black", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt12_black", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt11_black", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt10_black", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt10_gray", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt9_black", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt9_Gray", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_desc", "border", obj, ["normal"]);
    this._addCss("TextArea.txt_WF_desc", "border", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("Button.btn_WF_SplitterV", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_SplitterH", "border", obj, ["normal", "selected"]);
    this._addCss("Static.sta_WF_talkBox", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY14", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY18", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY20", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY48", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Button.btn_WF_Popclose", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CalBtn", "bordertype", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Button.btn_WF_miniPopClose", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CustomCombo", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_keyword", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_keyword_S", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_PageFirst", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PagePrev", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageNext", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageEnd", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageNum", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageNumS", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_pdiv_close", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_stepL", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepL2", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM2", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepR", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step1", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step2", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step3", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step4", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step5", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_top", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("PopupDiv.pdiv_WF_miniPop_BG", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_sub", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile>#body", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_detail", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_guide", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_guide2", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_map", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_map>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_map>#body", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#body", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#body", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#body", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#body", "bordertype", obj, ["normal"]);
    this._addCss(".grdRdo", "bordertype", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.sta_MF_ErrorImage", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertBg", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_AlertIcon", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_AlertTitle", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_PopupBg", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_PopupTitle", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_calTitle", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_gradation_grayBox", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_arrowR", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_map_grayTextbox", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_CalPrev", "bordertype", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_CalNext", "bordertype", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_CalNum", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CalNumS", "bordertype", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("TextArea.txt_WF_Message", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("Static.sta_WF_ConfirmBg", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_ConfirmIcon", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_ErrorBg", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_errorTitle", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_ErrorIcon", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WFSA_line", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WA_Title", "bordertype", obj, ["normal"]);
    this._addCss("Edit.edt_WA_Title", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Static.sta_WF_Location", "bordertype", obj, ["normal"]);
    this._addCss("Edit.edt_WF_Location", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Static.sta_WA_Title_oper", "bordertype", obj, ["normal"]);
    this._addCss("Edit.edt_WA_Title_oper", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Static.sta_WF_Title_gray", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_Title", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitleGroup", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle2", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle3_multi", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle3", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_descBox", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_desc", "bordertype", obj, ["normal"]);
    this._addCss("Tab.tab_master", "bordertype", obj, ["normal", "focused"]);
    this._addCss("TextArea.txt_WF_desc", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("TextArea.txt_WF_descBox", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("Div.div_WF_mapInfo", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_mapInfo_open", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_mapInfo_close", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_mapInfo_dotline", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_WF_SplitterV", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_SplitterH", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Static.sta_WF_talkBox", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY14", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY18", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY20", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY48", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_Pop_close.png')");
    this._addCss("Button.btn_WF_Popclose", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_WF_Popclose", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleU", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleD", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleL", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleR", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_Download", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_Upload", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileAdd", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileDel", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileDelete", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileDownload", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileUpload", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_manAdd", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_sortDown", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_sortUp", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_treeOpen", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_treeClose", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_delete", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_CustomCombo", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WFSA_Up", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WFSA_Down", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_menuSpin_Prev", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_menuSpin_Next", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageFirst", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PagePrev", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageNext", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageEnd", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_CalPrev", "imagealign", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CalNext", "imagealign", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_WF_SplitterV", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_SplitterH", "imagealign", obj, ["normal", "selected"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_pop_red", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_pop_gray", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleU", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleD", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleL", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleR", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_black", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_gray", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileAdd", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileDel", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileDelete", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileDownload", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileUpload", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_manAdd", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_sortDown", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_sortUp", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_treeOpen", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_treeClose", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_miniPopClose", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_upload", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_download", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ExcelText", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_keyword", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_keyword_S", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_grd_red", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_popup", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_menuSpin_Prev", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_menuSpin_Next", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageFirst", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PagePrev", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageNext", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageEnd", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageNum", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageNumS", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_pdiv_close", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_HRDF0003_1", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_2", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_3", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_4", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_top", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Static.sta_MF_ErrorTitle", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_calTitle", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_gradation_red", "align", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_gradation_gray", "align", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_gradation_grayBox", "align", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_gradation_lineBox", "align", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_arrowR", "align", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_redBoxtxt", "align", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_map_grayTextbox", "align", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_CalNum", "align", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CalNumS", "align", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Static.sta_WFDA_LabelCenter", "align", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelTitle", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_Unit", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_Title_gray", "align", obj, ["normal"]);
    this._addCss("Static.Guide_Color", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_commonBottom", "align", obj, ["normal"]);
    this._addCss("Button.btn_WF_SplitterV", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_SplitterH", "align", obj, ["normal", "selected"]);
    this._addCss("Static.sta_WF_talkBox", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY20", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("#a50034ff","","","0","0","0","0","true");
    this._addCss("Button.btn_pop_red", "background", obj, ["normal", "selected", "pushed"]);
    this._addCss("Button.btn_WFSA_Search", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleU", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleD", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleL", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleR", "background", obj, ["pushed"]);
    this._addCss("Button.btn_grd_red", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_PageNum", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_PageNumS", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CalNum", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_CalNumS", "background", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Static.sta_WF_errorTitle", "background", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("Button.btn_pop_red", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_pop_gray", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WFSA_Search", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_black", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_gray", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileAdd", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileDel", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileDelete", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileDownload", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileUpload", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_manAdd", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_sortDown", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_sortUp", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_upload", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_download", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ExcelText", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_red", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_popup", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WFSA_Up", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WFSA_Down", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_menuSpin_Prev", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_menuSpin_Next", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Static.sta_WF_gradation_red", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_gradation_gray", "bordertype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button.btn_pop_red", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_pop_gray", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleU", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleD", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleL", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleR", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_black", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_gray", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_treeOpen", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_treeClose", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_miniPopClose", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Static.sta_grd_treeOpenAll", "cursor", obj, ["normal"]);
    this._addCss("Static.sta_grd_treeCloseAll", "cursor", obj, ["normal"]);
    this._addCss("Button.btn_WF_upload", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_download", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ExcelText", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_red", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_popup", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_pdiv_close", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_top", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Static.sta_WF_Link", "cursor", obj, ["normal"]);
    this._addCss("Static.sta_WF_star_N", "cursor", obj, ["normal"]);
    this._addCss("Static.sta_WF_star_S", "cursor", obj, ["normal"]);
    this._addCss("Static.sta_WF_mapInfo_open", "cursor", obj, ["normal"]);
    this._addCss("Static.sta_WF_mapInfo_close", "cursor", obj, ["normal"]);
    this._addCss("Button.btn_WF_SplitterV", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_SplitterH", "cursor", obj, ["normal", "selected"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Button.btn_pop_red", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_pop_gray", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WFSA_Search", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_grd_black", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_grd_red", "color", obj, ["mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_PageNum", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_PageNumS", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_stepL", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepL2", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM2", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepR", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step1", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step2", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step3", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step4", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step5", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Static.sta_WF_AlertTitle", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_PopupTitle", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_gradation_red", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_gradation_gray", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_redBoxtxt", "color", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_CalNum", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_CalNumS", "color", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Static.sta_WF_errorTitle", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_Title_gray", "color", obj, ["normal"]);
    this._addCss("Static.Guide_Color", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_commonBottom", "color", obj, ["normal"]);
    this._addCss("Tab.tab_master", "color", obj, ["selected", "pushed"]);
    this._addCss("Static.sta_WF_talkBox", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 10 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Button.btn_pop_red", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_pop_gray", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_pdiv_close", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_email", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_HRDF0003_1", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_2", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_3", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_4", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Grid.grd_WF_Info", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_gradation_grayBox", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_gradation_lineBox", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_redBoxtxt", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WFDA_Title", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle2", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_GridTotal", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt10_black", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt10_gray", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt9_black", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt9_Gray", "font", obj, ["normal"]);
    this._addCss("Static.Guide_Title", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("#d80546ff","","","0","0","0","0","true");
    this._addCss("Button.btn_pop_red", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WFSA_Search", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_grd_red", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#999999ff","","","0","0","0","0","true");
    this._addCss("Button.btn_pop_red", "background", obj, ["disabled"]);
    this._addCss("Button.btn_pop_gray", "background", obj, ["disabled"]);
    this._addCss("Button.btn_grd_black", "background", obj, ["disabled"]);
    this._addCss("Button.btn_grd_red", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WFSA_Up", "background", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WFSA_Down", "background", obj, ["normal", "selected"]);

    obj = new nexacro.Style_background("#666666ff","","","0","0","0","0","true");
    this._addCss("Button.btn_pop_gray", "background", obj, ["normal", "selected", "pushed"]);
    this._addCss("Button.btn_WFSA_Up", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WFSA_Down", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#555555ff","","","0","0","0","0","true");
    this._addCss("Button.btn_pop_gray", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Search", "background", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleU", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_ShuttleD", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_ShuttleL", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_ShuttleR", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_grd_gray", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_treeOpen", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_treeClose", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_upload", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_download", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_ExcelText", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_keyword", "background", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_WF_keyword_S", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_grd_red", "background", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_popup", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_PageNum", "background", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Div.div_WF_desc", "background", obj, ["normal"]);
    this._addCss("PopupDiv.pdiv_WF_CalpopBg", "background", obj, ["normal"]);
    this._addCss("Grid.grd_sub", "background", obj, ["normal"]);
    this._addCss("Grid.grd_cmbListbox", "background", obj, ["normal"]);
    this._addCss("Grid.grd_treefolder", "background", obj, ["normal"]);
    this._addCss("Grid.grd_treeman", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2", "background", obj, ["normal"]);
    this._addCss("Grid.grd_detail", "background", obj, ["normal"]);
    this._addCss("Grid.grd_guide", "background", obj, ["normal"]);
    this._addCss("Grid.grd_guide2", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#head", "background", obj, ["normal"]);
    this._addCss(".Cell_courseTitle", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#head", "background", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Black", "background", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Red", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#head", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_AlertBg", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_PopupBg", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_gradation_grayBox", "background", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_map_grayTextbox", "background", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_ConfirmBg", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_ErrorBg", "background", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Data", "background", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Title", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_GridTotal", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_descBox", "background", obj, ["normal"]);
    this._addCss("Tab.tab_master", "background", obj, ["normal", "focused"]);
    this._addCss("TextArea.txt_WF_desc", "background", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("TextArea.txt_WF_descBox", "background", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("Div.div_WF_mapInfo", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#a50034ff","");
    this._addCss("Button.btn_WFSA_Search", "border", obj, ["normal", "selected", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleU", "border", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_ShuttleD", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleL", "border", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_ShuttleR", "border", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_keyword", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_keyword_S", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_grd_red", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageNum", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_PageNumS", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#a50034");
    this._addCss("Button.btn_WFSA_Search", "color", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_keyword", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_keyword_S", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_grd_red", "color", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageNum", "color", obj, ["mouseover", "focused"]);
    this._addCss("Static.sta_WF_Link", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Button.btn_WFSA_Search", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_grd_black", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_gray", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_treeOpen", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_treeClose", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_upload", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_download", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ExcelText", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_keyword", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_keyword_S", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_grd_red", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_grd_popup", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageNum", "font", obj, ["normal", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_PageNumS", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss(".grd_detail_Label", "font", obj, ["normal"]);
    this._addCss(".Cell_passGuideLabel", "font", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback", "font", obj, ["normal"]);
    this._addCss(".Cell_feedbackLabel", "font", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule", "font", obj, ["normal"]);
    this._addCss("Button.btn_WF_CalNum", "font", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CalNumS", "font", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("TextArea.txt_WF_Message", "font", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("Static.sta_WFSA_Label", "font", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Label", "font", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Label_E", "font", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelCenter", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_Location", "font", obj, ["normal"]);
    this._addCss("Edit.edt_WF_Location", "font", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Static.sta_WF_SubTitle3_multi", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle3", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_Sub", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_descBox", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_desc", "font", obj, ["normal"]);
    this._addCss("Tab.tab_master", "font", obj, ["normal", "focused"]);
    this._addCss("TextArea.txt_WF_desc", "font", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("TextArea.txt_WF_descBox", "font", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_SearchN.png')");
    this._addCss("Button.btn_WFSA_Search", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_align("lefttext middle");
    this._addCss("Button.btn_WFSA_Search", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_upload", "imagealign", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_WF_download", "imagealign", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ExcelText", "imagealign", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_pdiv_close", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_stepL", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepL2", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM2", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepR", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step1", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step2", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step3", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step4", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step5", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Button.btn_WFSA_Search", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_Search", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_email", "padding", obj, ["normal", "selected"]);
    this._addCss(".grdRdo", "padding", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.sta_MF_ErrorFollowings", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WFSA_Label", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelCenter", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelTitle", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_Title_gray", "padding", obj, ["normal"]);
    this._addCss("Static.guide_blue", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d80546ff","");
    this._addCss("Button.btn_WFSA_Search", "border", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_SearchO.png')");
    this._addCss("Button.btn_WFSA_Search", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#f9f9f9ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Search", "background", obj, ["disabled"]);
    this._addCss("Button.btn_grd_gray", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_treeOpen", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_treeClose", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_upload", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_download", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ExcelText", "background", obj, ["disabled"]);
    this._addCss("Button.btn_grd_popup", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","");
    this._addCss("Button.btn_WFSA_Search", "border", obj, ["disabled"]);
    this._addCss("Button.btn_grd_gray", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_treeOpen", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_treeClose", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_upload", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_download", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ExcelText", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_keyword", "border", obj, ["disabled"]);
    this._addCss("Button.btn_grd_popup", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PageFirst", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PagePrev", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PageNext", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PageEnd", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PageNum", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Button.btn_WFSA_Search", "color", obj, ["disabled"]);
    this._addCss("Button.btn_grd_gray", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_treeOpen", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_treeClose", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_upload", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_download", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ExcelText", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_keyword", "color", obj, ["disabled"]);
    this._addCss("Button.btn_grd_popup", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PageNum", "color", obj, ["disabled"]);
    this._addCss("Button.btn_pdiv_close", "color", obj, ["disabled"]);
    this._addCss("Static.sta_WF_map_grayTextbox", "color", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_CalNum", "color", obj, ["disabled"]);
    this._addCss("Edit.edt_WA_Title", "color", obj, ["disabled"]);
    this._addCss("Edit.edt_WF_Location", "color", obj, ["disabled"]);
    this._addCss("Edit.edt_WA_Title_oper", "color", obj, ["disabled"]);
    this._addCss("Tab.tab_master", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_SearchD.png')");
    this._addCss("Button.btn_WFSA_Search", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalendarN.png')");
    this._addCss("Button.btn_WF_CalBtn", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("Button.btn_WF_CalBtn", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_keyword", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_keyword_S", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_menuSpin_Prev", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_menuSpin_Next", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageFirst", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PagePrev", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageNext", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageEnd", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageNum", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageNumS", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_pdiv_close", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_top", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Static.sta_WF_calTitle", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_gradation_red", "padding", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_gradation_gray", "padding", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_gradation_grayBox", "padding", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_gradation_lineBox", "padding", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_arrowR", "padding", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_redBoxtxt", "padding", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_map_grayTextbox", "padding", obj, ["normal", "disabled"]);
    this._addCss("Edit.edt_WA_Title", "padding", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Static.sta_WF_Location", "padding", obj, ["normal"]);
    this._addCss("Edit.edt_WF_Location", "padding", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Edit.edt_WA_Title_oper", "padding", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalendarO.png')");
    this._addCss("Button.btn_WF_CalBtn", "image", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalendarD.png')");
    this._addCss("Button.btn_WF_CalBtn", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_SearchSmall_N.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_SearchSmall_O.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_SearchSmall_D.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_ShuttleU", "background", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleD", "background", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleL", "background", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleR", "background", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_gray", "background", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_upload", "background", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_download", "background", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ExcelText", "background", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_popup", "background", obj, ["normal", "selected"]);

    obj = new nexacro.Style_border("1","solid","#c1c1c1ff","");
    this._addCss("Button.btn_WF_ShuttleU", "border", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleD", "border", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "border", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "border", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_grd_gray", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_treeOpen", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_treeClose", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_upload", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_download", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ExcelText", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_popup", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageFirst", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_PagePrev", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_PageNext", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_PageEnd", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_PageNum", "border", obj, ["normal", "selected", "mouseover", "focused"]);

    obj = new nexacro.Style_bordertype("round","11","11","true","true","true","true");
    this._addCss("Button.btn_WF_ShuttleU", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleD", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleL", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleR", "bordertype", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleU_N.png')");
    this._addCss("Button.btn_WF_ShuttleU", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleU_O.png')");
    this._addCss("Button.btn_WF_ShuttleU", "image", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleU_P.png')");
    this._addCss("Button.btn_WF_ShuttleU", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("#f6f6f6ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_ShuttleU", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleD", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_treeOpen", "background", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_treeClose", "background", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageFirst", "background", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_WF_PagePrev", "background", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_WF_PageNext", "background", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_WF_PageEnd", "background", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Grid.grd_WF_map>#body", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_guideBG2", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleU_D.png')");
    this._addCss("Button.btn_WF_ShuttleU", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleD_N.png')");
    this._addCss("Button.btn_WF_ShuttleD", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleD_O.png')");
    this._addCss("Button.btn_WF_ShuttleD", "image", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleD_P.png')");
    this._addCss("Button.btn_WF_ShuttleD", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleD_D.png')");
    this._addCss("Button.btn_WF_ShuttleD", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleL_N.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleL_O.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleL_P.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleL_D.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleR_N.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleR_O.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleR_P.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ShuttleR_D.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_fileDownload_N.png')");
    this._addCss("Button.btn_WF_Download", "image", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileDownload", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_fileDownload_O.png')");
    this._addCss("Button.btn_WF_Download", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_fileDownload_D.png')");
    this._addCss("Button.btn_WF_Download", "image", obj, ["disabled"]);
    this._addCss("Button.btn_grd_fileDownload", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_fileUpload_N.png')");
    this._addCss("Button.btn_WF_Upload", "image", obj, ["normal", "selected"]);
    this._addCss("Button.btn_grd_fileUpload", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_fileUpload_O.png')");
    this._addCss("Button.btn_WF_Upload", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_fileUpload_D.png')");
    this._addCss("Button.btn_WF_Upload", "image", obj, ["disabled"]);
    this._addCss("Button.btn_grd_fileUpload", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("Button.btn_grd_black", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Static.sta_WF_PopupTitle", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_Title_gray", "background", obj, ["normal"]);
    this._addCss("Static.Guide_header", "background", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias underline 9 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Button.btn_grd_black", "font", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_PageNum", "font", obj, ["mouseover", "focused"]);
    this._addCss("Static.sta_WF_Link", "font", obj, ["normal"]);
    this._addCss("Tab.tab_master", "font", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Button.btn_grd_gray", "color", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_treeOpen", "color", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_treeClose", "color", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_upload", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_download", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_ExcelText", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_grd_popup", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_pdiv_close", "color", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_email", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_1", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_2", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_3", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_4", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_top", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Grid.grd_detail", "color", obj, ["normal"]);
    this._addCss(".grd_detail_Label_B", "color", obj, ["normal"]);
    this._addCss(".grd_detail_Label", "color", obj, ["normal"]);
    this._addCss(".grd_detail_Data", "color", obj, ["normal"]);
    this._addCss("Grid.grd_guide", "color", obj, ["normal"]);
    this._addCss("Grid.grd_guide2", "color", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info", "color", obj, ["normal"]);
    this._addCss(".Cell_courseTitle", "color", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide", "color", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback", "color", obj, ["normal"]);
    this._addCss(".Cell_feedbackLabel", "color", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Black", "color", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule", "color", obj, ["normal"]);
    this._addCss(".grd_title", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_ErrorGuide", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ErrorFollowings", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_calTitle", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_gradation_lineBox", "color", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_CalNum", "color", obj, ["normal", "selected"]);
    this._addCss("TextArea.txt_WF_Message", "color", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("Static.sta_WFSA_Label", "color", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Label", "color", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Label_E", "color", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelCenter", "color", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelTitle", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle2", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_GridTxt", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_GridTotal", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_guideBG", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_guideBG2", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt26_black", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt19_black", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt14_black", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt13_black", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt12_black", "color", obj, ["normal"]);
    this._addCss("Tab.tab_master", "color", obj, ["mouseover"]);
    this._addCss("Div.div_WF_mapInfo", "color", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#333333ff","");
    this._addCss("Button.btn_grd_gray", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_treeOpen", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_treeClose", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_upload", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_download", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_ExcelText", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_grd_popup", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("PopupDiv.pdiv_WF_CalpopBg", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Button.btn_grd_gray", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_treeOpen", "color", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_treeClose", "color", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_pdiv_close", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_CalNum", "color", obj, ["mouseover", "focused"]);
    this._addCss("Static.sta_WF_txtHY14", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY18", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY20", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY48", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#e0e0e0ff","","","0","0","0","0","true");
    this._addCss("Button.btn_grd_gray", "background", obj, ["pushed"]);
    this._addCss("Button.btn_grd_fileAdd", "background", obj, ["pushed"]);
    this._addCss("Button.btn_grd_fileDel", "background", obj, ["pushed"]);
    this._addCss("Button.btn_grd_fileDelete", "background", obj, ["pushed"]);
    this._addCss("Button.btn_grd_fileDownload", "background", obj, ["pushed"]);
    this._addCss("Button.btn_grd_fileUpload", "background", obj, ["pushed"]);
    this._addCss("Button.btn_grd_manAdd", "background", obj, ["pushed"]);
    this._addCss("Button.btn_grd_sortDown", "background", obj, ["pushed"]);
    this._addCss("Button.btn_grd_sortUp", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_upload", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_download", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ExcelText", "background", obj, ["pushed"]);
    this._addCss("Button.btn_grd_popup", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_PageFirst", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_PagePrev", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_PageNext", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_PageEnd", "background", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_add_N.png')");
    this._addCss("Button.btn_grd_fileAdd", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#e9ecf0ff","","","0","0","0","0","true");
    this._addCss("Button.btn_grd_fileAdd", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_grd_fileDel", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_grd_fileDelete", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_grd_fileDownload", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_grd_fileUpload", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_grd_manAdd", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_grd_sortDown", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_grd_sortUp", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_CalNum", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_add_D.png')");
    this._addCss("Button.btn_grd_fileAdd", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_del_N.png')");
    this._addCss("Button.btn_grd_fileDel", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_del_D.png')");
    this._addCss("Button.btn_grd_fileDel", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_delete_N.png')");
    this._addCss("Button.btn_grd_fileDelete", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_delete_D.png')");
    this._addCss("Button.btn_grd_fileDelete", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_manAdd_N.png')");
    this._addCss("Button.btn_grd_manAdd", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_manAdd_D.png')");
    this._addCss("Button.btn_grd_manAdd", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_sortDown_N.png')");
    this._addCss("Button.btn_grd_sortDown", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_sortDown_D.png')");
    this._addCss("Button.btn_grd_sortDown", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_sortUp_N.png')");
    this._addCss("Button.btn_grd_sortUp", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_sortUp_D.png')");
    this._addCss("Button.btn_grd_sortUp", "image", obj, ["disabled"]);

    obj = new nexacro.Style_bordertype("round","12","12","true","true","true","true");
    this._addCss("Button.btn_WF_treeOpen", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_treeClose", "bordertype", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_treeOpen2.png')");
    this._addCss("Button.btn_WF_treeOpen", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_treeOpen2O.png')");
    this._addCss("Button.btn_WF_treeOpen", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#e0e0e0ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_treeOpen", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_treeClose", "background", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_treeOpen2D.png')");
    this._addCss("Button.btn_WF_treeOpen", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_treeClose2.png')");
    this._addCss("Button.btn_WF_treeClose", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_treeClose20.png')");
    this._addCss("Button.btn_WF_treeClose", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_grdUP_treeClose2D.png')");
    this._addCss("Button.btn_WF_treeClose", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("#a40f3eff","img::bg_WF_miniPop.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_miniPopClose", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_border("0","none","#808080ff","");
    this._addCss("Button.btn_WF_miniPopClose", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_value("img::img_WF_miniPop_close.png");
    this._addCss("Button.btn_WF_miniPopClose", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_padding("1 0 12 12");
    this._addCss("Button.btn_WF_miniPopClose", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","img::img_WF_grdUP_treeOpen.png","","0","0","50","50","true");
    this._addCss("Static.sta_grd_treeOpenAll", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::img_WF_grdUP_treeClose.png","","0","0","50","50","true");
    this._addCss("Static.sta_grd_treeCloseAll", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_WF_deleteN.png')");
    this._addCss("Button.btn_WF_delete", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_deleteO.png')");
    this._addCss("Button.btn_WF_delete", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_deleteD.png')");
    this._addCss("Button.btn_WF_delete", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_upload_N.png')");
    this._addCss("Button.btn_WF_upload", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_upload_O.png')");
    this._addCss("Button.btn_WF_upload", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_upload_D.png')");
    this._addCss("Button.btn_WF_upload", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_download_N.png')");
    this._addCss("Button.btn_WF_download", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_download_O.png')");
    this._addCss("Button.btn_WF_download", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_download_D.png')");
    this._addCss("Button.btn_WF_download", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ExcelText_N.png')");
    this._addCss("Button.btn_WF_ExcelText", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_ExcelText_D.png')");
    this._addCss("Button.btn_WF_ExcelText", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::cmb_WF_DropN.png')");
    this._addCss("Button.btn_WF_CustomCombo", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::cmb_WF_DropO.png')");
    this._addCss("Button.btn_WF_CustomCombo", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::cmb_WF_DropD.png')");
    this._addCss("Button.btn_WF_CustomCombo", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#cfcfcfff","");
    this._addCss("Button.btn_WF_keyword", "border", obj, ["normal", "selected"]);
    this._addCss("Static.sta_WF_gradation_lineBox", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Button.btn_WF_keyword", "color", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PageNum", "color", obj, ["normal", "selected"]);
    this._addCss("Static.sta_WF_gradation_grayBox", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.Pseudo", "color", obj, ["normal"]);
    this._addCss("Tab.tab_master", "color", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_keyword", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_HRDF0003_1", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_2", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_3", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_4", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_keyword", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PageFirst", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PagePrev", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PageNext", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PageEnd", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PageNum", "background", obj, ["disabled"]);
    this._addCss("Static.sta_WF_calTitle", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_WF_popup_N.png')");
    this._addCss("Button.btn_grd_popup", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_align("righttext middle");
    this._addCss("Button.btn_grd_popup", "imagealign", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_popup_O.png')");
    this._addCss("Button.btn_grd_popup", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_popup_D.png')");
    this._addCss("Button.btn_grd_popup", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::icon_WFSA_Up.png')");
    this._addCss("Button.btn_WFSA_Up", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#000000ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Up", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WFSA_Down", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("#b3b3b3ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Up", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WFSA_Down", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::icon_WFSA_Down.png')");
    this._addCss("Button.btn_WFSA_Down", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_menuSpin_PrevN.png')");
    this._addCss("Button.btn_WF_menuSpin_Prev", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_menuSpin_PrevO.png')");
    this._addCss("Button.btn_WF_menuSpin_Prev", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#e6e6e6ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_menuSpin_Prev", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_menuSpin_Next", "background", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_menuSpin_PrevD.png')");
    this._addCss("Button.btn_WF_menuSpin_Prev", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_menuSpin_NextN.png')");
    this._addCss("Button.btn_WF_menuSpin_Next", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_menuSpin_NextO.png')");
    this._addCss("Button.btn_WF_menuSpin_Next", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_menuSpin_NextD.png')");
    this._addCss("Button.btn_WF_menuSpin_Next", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_PageFirstN.png')");
    this._addCss("Button.btn_WF_PageFirst", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_PageFirstO.png')");
    this._addCss("Button.btn_WF_PageFirst", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_PageFirstD.png')");
    this._addCss("Button.btn_WF_PageFirst", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_PagePrevN.png')");
    this._addCss("Button.btn_WF_PagePrev", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_PagePrevO.png')");
    this._addCss("Button.btn_WF_PagePrev", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_PagePrevD.png')");
    this._addCss("Button.btn_WF_PagePrev", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_PageNextN.png')");
    this._addCss("Button.btn_WF_PageNext", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_PageNextO.png')");
    this._addCss("Button.btn_WF_PageNext", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_PageNextD.png')");
    this._addCss("Button.btn_WF_PageNext", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_PageEndN.png')");
    this._addCss("Button.btn_WF_PageEnd", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_PageEndO.png')");
    this._addCss("Button.btn_WF_PageEnd", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_PageEndD.png')");
    this._addCss("Button.btn_WF_PageEnd", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("","img::btn_WF_CommonN.png","stretch","3","3","0","0","true");
    this._addCss("Button.btn_pdiv_close", "background", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_pdiv_closeN.png')");
    this._addCss("Button.btn_pdiv_close", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_background("","img::btn_WF_CommonO.png","stretch","3","3","0","0","true");
    this._addCss("Button.btn_pdiv_close", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::img_pdiv_closeO.png')");
    this._addCss("Button.btn_pdiv_close", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("","img::btn_WF_CommonP.png","stretch","3","3","0","0","true");
    this._addCss("Button.btn_pdiv_close", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","img::btn_WF_CommonD.png","stretch","3","3","0","0","true");
    this._addCss("Button.btn_pdiv_close", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_pdiv_closeD.png')");
    this._addCss("Button.btn_pdiv_close", "image", obj, ["disabled"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Button.btn_WF_email", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_stepL", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepL2", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM2", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepR", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step1", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step2", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step3", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step4", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step5", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss(".grd_detail_Label_B", "align", obj, ["normal"]);
    this._addCss(".grd_detail_Label", "align", obj, ["normal"]);
    this._addCss(".grd_detail_Data", "align", obj, ["normal"]);
    this._addCss(".Cell_courseTitle", "align", obj, ["normal"]);
    this._addCss(".Cell_passGuideLabel", "align", obj, ["normal"]);
    this._addCss(".Cell_feedbackLabel", "align", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Black", "align", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Red", "align", obj, ["normal"]);
    this._addCss(".grd_star", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss(".grd_title", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_ErrorGuide", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ErrorFollowings", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ErrorFollowingsItem", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_AlertTitle", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_PopupTitle", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_errorTitle", "align", obj, ["normal"]);
    this._addCss("Static.sta_WFSA_Label", "align", obj, ["normal"]);
    this._addCss("Static.sta_WFSA_line", "align", obj, ["normal"]);
    this._addCss("Edit.edt_WA_Title", "align", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Edit.edt_WA_Title_oper", "align", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Static.sta_WF_Title", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitleGroup", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle2", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle3", "align", obj, ["normal"]);
    this._addCss("TextArea.txt_WF_desc", "align", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("TextArea.txt_WF_descBox", "align", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("Static.sta_WF_txtHY14", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY18", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY48", "align", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Button.btn_WF_email", "color", obj, ["normal", "selected"]);
    this._addCss("Grid.grd_sub", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_Location", "color", obj, ["normal"]);
    this._addCss("Edit.edt_WF_Location", "color", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Static.sta_WF_SubTitle3_multi", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle3", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_Sub", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt11_black", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt10_black", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt9_black", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_descBox", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_desc", "color", obj, ["normal"]);
    this._addCss("TextArea.txt_WF_desc", "color", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("TextArea.txt_WF_descBox", "color", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("Button.btn_WF_email", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Static.sta_WF_txt14_red", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias underline 10 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Button.btn_WF_email", "font", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("50");
    this._addCss("Button.btn_WF_email", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("","img::bg_WF_stepLS.png","stretch","45","48","0","0","true");
    this._addCss("Button.btn_WF_stepL", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepL2", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step1", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("arrow");
    this._addCss("Button.btn_WF_stepL", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepL2", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM2", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepR", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step1", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step2", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step3", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step4", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step5", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_HRDF0003_1", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_2", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_3", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_4", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_font("antialias 11 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Button.btn_WF_stepL", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_stepL2", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_stepM", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_stepM2", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_stepR", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_step1", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_step2", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_step3", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_step4", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_step5", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_top", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss(".grd_detail_Label_B", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_AlertTitle", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_PopupTitle", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_errorTitle", "font", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelTitle", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_Title", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt11_black", "font", obj, ["normal"]);
    this._addCss("Static.Guide_header", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_WF_membership1S.png')");
    this._addCss("Button.btn_WF_stepL", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step4", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_padding("1 0 0 62");
    this._addCss("Button.btn_WF_stepL", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepL2", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM2", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepR", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("","img::bg_WF_stepLN.png","stretch","45","48","0","0","true");
    this._addCss("Button.btn_WF_stepL", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_stepL2", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_step1", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#7c7c7c");
    this._addCss("Button.btn_WF_stepL", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_stepL2", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_stepM", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_stepM2", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_stepR", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_step1", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_step2", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_step3", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_step4", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_step5", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_top", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_membership1.png')");
    this._addCss("Button.btn_WF_stepL", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_step4", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_membership2S.png')");
    this._addCss("Button.btn_WF_stepL2", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step2", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_membership2.png')");
    this._addCss("Button.btn_WF_stepL2", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_stepM", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_step2", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("","img::bg_WF_stepMS.png","stretch","45","48","0","0","true");
    this._addCss("Button.btn_WF_stepM", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_stepM2", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step2", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step3", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step4", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("","img::bg_WF_stepMN.png","stretch","45","48","0","0","true");
    this._addCss("Button.btn_WF_stepM", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_stepM2", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_step2", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_step3", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_step4", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_membership3S.png')");
    this._addCss("Button.btn_WF_stepM2", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step3", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_membership3.png')");
    this._addCss("Button.btn_WF_stepM2", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_step3", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("","img::bg_WF_stepRS.png","stretch","45","48","0","0","true");
    this._addCss("Button.btn_WF_stepR", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step5", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_membership4S.png')");
    this._addCss("Button.btn_WF_stepR", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step5", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("","img::bg_WF_stepRN.png","stretch","45","48","0","0","true");
    this._addCss("Button.btn_WF_stepR", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_step5", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_membership4.png')");
    this._addCss("Button.btn_WF_stepR", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_step5", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_membership0S.png')");
    this._addCss("Button.btn_WF_step1", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_padding("1 -30 0 32");
    this._addCss("Button.btn_WF_step1", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_membership0.png')");
    this._addCss("Button.btn_WF_step1", "image", obj, ["disabled"]);

    obj = new nexacro.Style_padding("1 -60 0 62");
    this._addCss("Button.btn_WF_step2", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step3", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step4", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_step5", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_bordertype("round","70","70","true","true","true","true");
    this._addCss("Button.btn_WF_HRDF0003_1", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_2", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_3", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_4", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_HRDF0003_1.png')");
    this._addCss("Button.btn_WF_HRDF0003_1", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_align("center toptext");
    this._addCss("Button.btn_WF_HRDF0003_1", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_2", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_3", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_HRDF0003_4", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_top", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_HRDF0003_2.png')");
    this._addCss("Button.btn_WF_HRDF0003_2", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_HRDF0003_3.png')");
    this._addCss("Button.btn_WF_HRDF0003_3", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_HRDF0003_4.png')");
    this._addCss("Button.btn_WF_HRDF0003_4", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#ffffffe5","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_top", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#a8a8a8ff","");
    this._addCss("Button.btn_WF_top", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_topN.png')");
    this._addCss("Button.btn_WF_top", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","img::bg_WF_topN.png","stretch","45","48","0","0","true");
    this._addCss("Button.btn_WF_top", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("70");
    this._addCss("Button.btn_WF_top", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f2f4f6ff","","","0","0","0","0","true");
    this._addCss("Div.div_WFSA_Bg", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#dbdbdbff","");
    this._addCss("Div.div_WFSA_Bg", "border", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Label", "border", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Label_E", "border", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Data", "border", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Title", "border", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelCenter", "border", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelTitle", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Div.div_WFSA_Bg>#vscrollbar", "decbtnsize", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Div.div_WFSA_Bg>#hscrollbar", "decbtnsize", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Div.div_WFSA_Bg>#vscrollbar", "incbtnsize", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Div.div_WFSA_Bg>#hscrollbar", "incbtnsize", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_value("8");
    this._addCss("Div.div_WFSA_Bg>#vscrollbar", "scrollbarsize", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Div.div_WFSA_Bg>#hscrollbar", "scrollbarsize", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#dbdbdbff","");
    this._addCss("Div.div_WF_desc", "border", obj, ["normal"]);
    this._addCss("Grid.grd_guide", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_descBox", "border", obj, ["normal"]);
    this._addCss("TextArea.txt_WF_descBox", "border", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);

    obj = new nexacro.Style_background("#f5f5f7ff","","","0","0","0","0","true");
    this._addCss("Div.div_WF_keywordBox", "background", obj, ["normal"]);
    this._addCss("Grid.grd_sub>#head", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#a40f3eff","","","0","0","0","0","true");
    this._addCss("PopupDiv.pdiv_WF_miniPop_BG", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#ccccccff","");
    this._addCss("Grid.grd_sub", "border", obj, ["normal"]);
    this._addCss("Grid.grd_treefolder", "border", obj, ["normal"]);
    this._addCss("Grid.grd_treeman", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#ccccccff","","0","none","","");
    this._addCss("Grid.grd_sub>#head", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","");
    this._addCss("Grid.grd_sub>#head", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Grid.grd_sub>#body", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#body", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Grid.grd_sub>#body", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#body", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_value("#faf6eb");
    this._addCss("Grid.grd_sub>#body", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid.grd_sub>#body", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_treefolder>#body", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_treeman>#body", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile>#body", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_sub>#body", "cellbackground", obj, ["mouseover"]);
    this._addCss("Grid.grd_treefolder>#body", "cellbackground", obj, ["mouseover"]);
    this._addCss("Grid.grd_treeman>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_sub>#body", "cellbackground2", obj, ["mouseover"]);
    this._addCss("Grid.grd_treefolder>#body", "cellbackground2", obj, ["mouseover"]);
    this._addCss("Grid.grd_treeman>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Grid.grd_sub>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_cmbListbox>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_treefolder>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_treeman>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_attachfile>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_detail>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_guide>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_guide2>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_map>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_Info>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_passGuide>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_feedback>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_iconModule>#body", "cellcolor", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Grid.grd_sub>#body", "cellcolor2", obj, ["disabled"]);
    this._addCss("Grid.grd_cmbListbox>#body", "cellcolor2", obj, ["disabled"]);
    this._addCss("Grid.grd_treefolder>#body", "cellcolor2", obj, ["disabled"]);
    this._addCss("Grid.grd_treeman>#body", "cellcolor2", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_attachfile>#body", "cellcolor2", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "cellcolor2", obj, ["disabled"]);
    this._addCss("Grid.grd_detail>#body", "cellcolor2", obj, ["disabled"]);
    this._addCss("Grid.grd_guide>#body", "cellcolor2", obj, ["disabled"]);
    this._addCss("Grid.grd_guide2>#body", "cellcolor2", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_map>#body", "cellcolor2", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_Info>#body", "cellcolor2", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_passGuide>#body", "cellcolor2", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_feedback>#body", "cellcolor2", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_iconModule>#body", "cellcolor2", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#000000ff","");
    this._addCss("Grid.grd_cmbListbox", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Grid.grd_cmbListbox>#body", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_treefolder>#body", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_treeman>#body", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile>#body", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Grid.grd_cmbListbox>#body", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_treefolder>#body", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_treeman>#body", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile>#body", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss("Grid.grd_cmbListbox>#body", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_treefolder>#body", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_treeman>#body", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile>#body", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_guide2>#body", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#body", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#head", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_cmbListbox>#body", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_treefolder>#body", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_treeman>#body", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile>#body", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_map>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_map>#body", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#body", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#body", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#body", "cellline", obj, ["normal"]);
    this._addCss(".Cell_feedbackLabel", "cellline", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Black", "cellline", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Red", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#body", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 4 0 4");
    this._addCss("Grid.grd_cmbListbox>#body", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("#333333");
    this._addCss("Grid.grd_cmbListbox>#body", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid.grd_cmbListbox>#body", "selectcolor", obj, ["normal"]);
    this._addCss("TextArea.txt_WF_Message", "selectcolor", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("Edit.edt_WA_Title", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Edit.edt_WF_Location", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Edit.edt_WA_Title_oper", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Static.sta_WF_descBox", "selectcolor", obj, ["normal"]);
    this._addCss("Static.sta_WF_desc", "selectcolor", obj, ["normal"]);
    this._addCss("TextArea.txt_WF_desc", "selectcolor", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("TextArea.txt_WF_descBox", "selectcolor", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss("Grid.grd_cmbListbox>#body", "selectfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile>#body", "selectfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "selectfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#body", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_cmbListbox>#body", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_treefolder>#body", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_treeman>#body", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile>#body", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_map>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_map>#body", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#body", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#body", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#body", "selectline", obj, ["normal"]);
    this._addCss(".Cell_feedbackLabel", "selectline", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Black", "selectline", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Red", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#body", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_cmbListbox>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_cmbListbox>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid.grd_cmbListbox>#body", "cellcolor", obj, ["mouseover"]);
    this._addCss("Grid.grd_WF_attachfile>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid.grd_cmbListbox>#body", "cellcolor2", obj, ["mouseover"]);
    this._addCss("Grid.grd_WF_attachfile>#body", "cellcolor2", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('img::icon_tree_open.png')");
    this._addCss("Grid.grd_treefolder", "treeclosebuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_treeman", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::icon_tree_collapse.png')");
    this._addCss("Grid.grd_treefolder", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::icon_tree_expand.png')");
    this._addCss("Grid.grd_treefolder", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::icon_tree_item.png')");
    this._addCss("Grid.grd_treefolder", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::icon_tree_close.png')");
    this._addCss("Grid.grd_treefolder", "treeopenbuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_treeman", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_line("1","dotted","#a5a4a4ff","");
    this._addCss("Grid.grd_treefolder", "treelinetype", obj, ["normal"]);
    this._addCss("Grid.grd_treeman", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_padding("2 3 2 3");
    this._addCss("Grid.grd_treefolder>#body", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.grd_treeman>#body", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#body", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("#ffffff");
    this._addCss("Grid.grd_treefolder>#body", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_treeman>#body", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_detail>#body", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_guide>#body", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_guide2>#body", "selectbackground", obj, ["normal"]);
    this._addCss(".Cell_courseTitle", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#body", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#body", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#body", "selectbackground", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Black", "selectbackground", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Red", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#body", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Dotum, Arial");
    this._addCss("Grid.grd_treefolder>#body", "selectfont", obj, ["normal"]);
    this._addCss("Grid.grd_treeman>#body", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::icon_tree_group.png')");
    this._addCss("Grid.grd_treeman", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::icon_tree_group.png')");
    this._addCss("Grid.grd_treeman", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::icon_tree_man.png')");
    this._addCss("Grid.grd_treeman", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ddddddff","");
    this._addCss("Grid.grd_WF_attachfile", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Grid.grd_WF_attachfile", "color", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_attachfile>#head", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#head", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#ddddddff","","0","none","","");
    this._addCss("Grid.grd_WF_attachfile>#head", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#head", "border", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid.grd_WF_attachfile>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile>#body", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_WF_map>#body", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#body", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_attachfile>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#head", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_attachfile>#head", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#head", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid.grd_WF_attachfile>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#head", "cellcolor", obj, ["normal"]);
    this._addCss(".grd_detail_Label_B", "cellcolor", obj, ["normal"]);
    this._addCss(".grd_detail_Label", "cellcolor", obj, ["normal"]);
    this._addCss(".grd_detail_Data", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#body", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#body", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#body", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#head", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid.grd_WF_attachfile>#head", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#head", "cellcolor2", obj, ["normal"]);
    this._addCss(".grd_detail_Label_B", "cellcolor2", obj, ["normal"]);
    this._addCss(".grd_detail_Label", "cellcolor2", obj, ["normal"]);
    this._addCss(".grd_detail_Data", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#head", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#body", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#head", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#body", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#head", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#body", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#head", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ddddddff","");
    this._addCss("Grid.grd_WF_attachfile>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_guide2>#head", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_attachfile>#body", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_detail>#body", "cellbackground", obj, ["mouseover"]);
    this._addCss("Grid.grd_guide>#body", "cellbackground", obj, ["mouseover"]);
    this._addCss("Grid.grd_guide2>#body", "cellbackground", obj, ["mouseover"]);
    this._addCss("Grid.grd_WF_Info>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#body", "cellbackground", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_WF_passGuide>#body", "cellbackground", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_WF_feedback>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#body", "cellbackground", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_WF_iconModule>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#body", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_attachfile>#body", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_detail>#body", "cellbackground2", obj, ["mouseover"]);
    this._addCss("Grid.grd_guide>#body", "cellbackground2", obj, ["mouseover"]);
    this._addCss("Grid.grd_guide2>#body", "cellbackground2", obj, ["mouseover"]);
    this._addCss("Grid.grd_WF_Info>#head", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#body", "cellbackground2", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_WF_passGuide>#body", "cellbackground2", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_WF_feedback>#head", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#body", "cellbackground2", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_WF_iconModule>#head", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#body", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_padding("2 10 2 10");
    this._addCss("Grid.grd_WF_attachfile>#body", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("#f0f0f0");
    this._addCss("Grid.grd_WF_attachfile>#body", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_font("underline 9 Dotum, Arial");
    this._addCss("Grid.grd_WF_attachfile>#body", "cellfont", obj, ["mouseover"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "cellfont", obj, ["mouseover"]);

    obj = new nexacro.Style_font("underline 9 Dotum, Arial");
    this._addCss("Grid.grd_WF_attachfile>#body", "selectfont", obj, ["mouseover"]);
    this._addCss("Grid.grd_WF_attachfile2>#body", "selectfont", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#ddddddff","");
    this._addCss("Grid.grd_WF_attachfile2>#body", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#000000ff","","1","solid","#dbdbdbff","","1","solid","#dbdbdbff","","1","solid","#dbdbdbff","");
    this._addCss("Grid.grd_detail", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#f8f8f8ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_detail>#head", "background", obj, ["normal"]);
    this._addCss(".grd_detail_Label_B", "background", obj, ["normal"]);
    this._addCss(".grd_detail_Label", "background", obj, ["normal"]);
    this._addCss("Grid.grd_guide>#head", "background", obj, ["normal"]);
    this._addCss("Grid.grd_guide2>#head", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#head", "background", obj, ["normal"]);
    this._addCss(".Cell_feedbackLabel", "background", obj, ["normal"]);
    this._addCss("Static.sta_WA_Title_oper", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#dbdbdbff","","0","none","","");
    this._addCss("Grid.grd_detail>#head", "border", obj, ["normal"]);
    this._addCss("Grid.grd_guide>#head", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#head", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#f8f8f8ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_detail>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_guide>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_guide2>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#head", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#f8f8f8ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_detail>#head", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_guide>#head", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_guide2>#head", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#head", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Grid.grd_detail>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_guide>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_guide2>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_map>#body", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#body", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#dbdbdbff","");
    this._addCss("Grid.grd_detail>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_detail>#body", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_guide>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_guide>#body", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Grid.grd_detail>#body", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_guide>#body", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_guide2>#body", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#dbdbdbff","");
    this._addCss("Grid.grd_detail>#body", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_guide>#body", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_background("#f8f8f8ff","","","0","0","0","0","true");
    this._addCss(".grd_detail_Label_B", "background2", obj, ["normal"]);
    this._addCss(".grd_detail_Label", "background2", obj, ["normal"]);
    this._addCss(".Cell_feedbackLabel", "background2", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss(".grd_detail_Label_B", "color2", obj, ["normal"]);
    this._addCss(".grd_detail_Label", "color2", obj, ["normal"]);
    this._addCss(".grd_detail_Data", "color2", obj, ["normal"]);
    this._addCss(".Cell_courseTitle", "color2", obj, ["normal"]);
    this._addCss(".Cell_feedbackLabel", "color2", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Black", "color2", obj, ["normal"]);
    this._addCss(".grd_title", "color2", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("#f8f8f8ff");
    this._addCss(".grd_detail_Label_B", "selectbackground", obj, ["normal"]);
    this._addCss(".grd_detail_Label", "selectbackground", obj, ["normal"]);
    this._addCss(".Cell_feedbackLabel", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss(".grd_detail_Label_B", "selectcolor", obj, ["normal"]);
    this._addCss(".grd_detail_Label", "selectcolor", obj, ["normal"]);
    this._addCss(".grd_detail_Data", "selectcolor", obj, ["normal"]);
    this._addCss(".Cell_courseTitle", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#body", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#body", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#body", "selectcolor", obj, ["normal"]);
    this._addCss(".Cell_feedbackLabel", "selectcolor", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Black", "selectcolor", obj, ["normal"]);
    this._addCss(".grd_title", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("antialias 11 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss(".grd_detail_Label_B", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 16");
    this._addCss(".grd_detail_Label_B", "padding", obj, ["normal"]);
    this._addCss(".grd_detail_Label", "padding", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss(".grd_detail_Label", "selectfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_map>#body", "selectfont", obj, ["normal"]);
    this._addCss(".Cell_passGuideLabel", "selectfont", obj, ["normal"]);
    this._addCss(".Cell_feedbackLabel", "selectfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#body", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 10");
    this._addCss(".grd_detail_Data", "padding", obj, ["normal"]);
    this._addCss(".grd_star", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss(".grd_title", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.Guide_Title", "padding", obj, ["normal"]);
    this._addCss("TextArea.txt_WF_desc", "padding", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);

    obj = new nexacro.Style_border("1","solid","#000000ff","","1","solid","#dbdbdbff","","1","solid","#dbdbdbff","","1","solid","#dbdbdbff","");
    this._addCss("Grid.grd_guide2", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#dbdbdbff","","0","none","","");
    this._addCss("Grid.grd_guide2>#head", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#dbdbdbff","");
    this._addCss("Grid.grd_guide2>#body", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#dbdbdbff","");
    this._addCss("Grid.grd_guide2>#body", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss("Grid.grd_WF_map", "color", obj, ["normal"]);
    this._addCss(".Cell_infoLabel", "color", obj, ["normal"]);
    this._addCss(".Cell_passGuideLabel", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_Unit", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt10_gray", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt9_Gray", "color", obj, ["normal"]);
    this._addCss("Static.Guide_Class", "color", obj, ["normal"]);
    this._addCss("Static.guide_gray", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#575757ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_map>#head", "background", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Grid.grd_WF_map>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_WF_passGuide>#body", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_WF_feedback>#body", "cellalign", obj, ["normal"]);
    this._addCss(".Cell_feedbackLabel", "cellalign", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Black", "cellalign", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Red", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#head", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#575757ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_map>#head", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#575757ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_map>#head", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid.grd_WF_map>#head", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid.grd_WF_map>#head", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 12 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Grid.grd_WF_map>#head", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 60");
    this._addCss("Grid.grd_WF_map>#head", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f6f6f6ff","img::bg_WF_map_bullet1.png","","0","0","0","50","true");
    this._addCss("Grid.grd_WF_map>#body", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#f6f6f6ff","img::bg_WF_map_bullet1.png","","0","0","0","50","true");
    this._addCss("Grid.grd_WF_map>#body", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss("Grid.grd_WF_map>#body", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss("Grid.grd_WF_map>#body", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 6");
    this._addCss("Grid.grd_WF_map>#body", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("#f6f6f6 URL('img::bg_WF_map_bullet1.png') left middle");
    this._addCss("Grid.grd_WF_map>#body", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss("Grid.grd_WF_map>#body", "selectcolor", obj, ["normal"]);
    this._addCss(".Cell_infoLabel", "selectcolor", obj, ["normal"]);
    this._addCss(".Cell_passGuideLabel", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#f6f6f6ff","img::bg_WF_map_bullet1_S.png","","0","0","0","50","true");
    this._addCss("Grid.grd_WF_map>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f6f6f6ff","img::bg_WF_map_bullet1_S.png","","0","0","0","50","true");
    this._addCss("Grid.grd_WF_map>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("Grid.grd_WF_map>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("Grid.grd_WF_map>#body", "cellcolor2", obj, ["mouseover"]);

    obj = new nexacro.Style_font("antialias underline 9 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Grid.grd_WF_map>#body", "cellfont", obj, ["mouseover"]);

    obj = new nexacro.Style_value("#f6f6f6 URL('img::bg_WF_map_bullet1_S.png') left middle");
    this._addCss("Grid.grd_WF_map>#body", "selectbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("Grid.grd_WF_map>#body", "selectcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_font("antialias underline 9 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Grid.grd_WF_map>#body", "selectfont", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Grid.grd_WF_map>#body", "selectcolor", obj, ["disabled"]);

    obj = new nexacro.Style_font("antialias 13 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Grid.grd_WF_Info>#head", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss(".Cell_courseTitle", "background2", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Black", "background2", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Red", "background2", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 13 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss(".Cell_courseTitle", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_guideBG", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_guideBG2", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt13_black", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("18 0 14 0");
    this._addCss(".Cell_courseTitle", "padding", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 13 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss(".Cell_courseTitle", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::icon_info_SubTitle2.png","","0","0","0","0","true");
    this._addCss(".Cell_infoLabel", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::icon_info_SubTitle2.png","","0","0","0","0","true");
    this._addCss(".Cell_infoLabel", "background2", obj, ["normal"]);

    obj = new nexacro.Style_align("left top");
    this._addCss(".Cell_infoLabel", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Info>#body", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 10 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss(".Cell_infoLabel", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss(".Cell_infoLabel", "color2", obj, ["normal"]);
    this._addCss(".Cell_passGuideLabel", "color2", obj, ["normal"]);

    obj = new nexacro.Style_padding("2 0 2 10");
    this._addCss(".Cell_infoLabel", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::icon_info_SubTitle2.png') left top");
    this._addCss(".Cell_infoLabel", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 10 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss(".Cell_infoLabel", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체,A rial");
    this._addCss("Grid.grd_WF_passGuide", "font", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#dbdbdbff","","0","none","","");
    this._addCss("Grid.grd_WF_passGuide>#head", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#dbdbdbff","","0","none","","");
    this._addCss("Grid.grd_WF_passGuide>#head", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::icon_WF_SubTitle3.png","","0","0","0","50","true");
    this._addCss(".Cell_passGuideLabel", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle3", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::icon_WF_SubTitle3.png","","0","0","0","50","true");
    this._addCss(".Cell_passGuideLabel", "background2", obj, ["normal"]);

    obj = new nexacro.Style_padding("4 0 2 7");
    this._addCss(".Cell_passGuideLabel", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::icon_WF_SubTitle3.png') left middle");
    this._addCss(".Cell_passGuideLabel", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_padding("4 3 2 3");
    this._addCss("Grid.grd_WF_passGuide>#body", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 10 0 16");
    this._addCss("Grid.grd_WF_feedback>#head", "padding", obj, ["normal"]);
    this._addCss("Grid.grd_WF_iconModule>#head", "padding", obj, ["normal"]);

    obj = new nexacro.Style_padding("4 10 2 10");
    this._addCss("Grid.grd_WF_feedback>#body", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("4 0 2 17");
    this._addCss(".Cell_feedbackLabel", "padding", obj, ["normal"]);

    obj = new nexacro.Style_padding("8 10 0 17");
    this._addCss(".Cell_feedbackdata_Black", "padding", obj, ["normal"]);
    this._addCss(".Cell_feedbackdata_Red", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#a40f3eff");
    this._addCss(".Cell_feedbackdata_Red", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#a40f3eff");
    this._addCss(".Cell_feedbackdata_Red", "color2", obj, ["normal"]);

    obj = new nexacro.Style_color("#a40f3eff");
    this._addCss(".Cell_feedbackdata_Red", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Grid.grd_WF_iconModule>#body", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Grid.grd_WF_iconModule>#body", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","img::bg_grd_MF_iconModule.png","stretch","21","21","0","0","true");
    this._addCss("Grid.grd_WF_iconModule>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#ffffffff","img::bg_grd_MF_iconModule.png","stretch","21","21","0","0","true");
    this._addCss("Grid.grd_WF_iconModule>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_value("#ffffff URL('img::bg_grd_MF_iconModule.png') stretch 21,21");
    this._addCss("Grid.grd_WF_iconModule>#body", "selectbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss(".grdRdo", "align", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.sta_WF_Location", "align", obj, ["normal"]);
    this._addCss("Edit.edt_WF_Location", "align", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Static.sta_WF_GridTxt", "align", obj, ["normal"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss(".grdRdo", "controlalign", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss(".grdRdo", "controlbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_bordertype("round","10","10","true","true","true","true");
    this._addCss(".grdRdo", "controlbordertype", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("1","solid","#c1c1c1ff","");
    this._addCss(".grdRdo", "controlborder", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('img::img_WF_RadioN.png')");
    this._addCss(".grdRdo", "controlimage", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("15");
    this._addCss(".grdRdo", "controlbuttonsize", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss(".grdRdo", "controlcolor", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss(".grdRdo", "controlfont", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#e9ecf0ff","","","0","0","0","0","true");
    this._addCss(".grdRdo", "controlbackground", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#d2d2d2ff","");
    this._addCss(".grdRdo", "controlborder", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_RadioR.png')");
    this._addCss(".grdRdo", "controlimage", obj, ["disabled"]);

    obj = new nexacro.Style_color("#a50034ff");
    this._addCss(".grd_star", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_color("#a50034ff");
    this._addCss(".grd_star", "color2", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("antialias 11 LG스마트체 Regular, LG스마트체,Dotum, Arial");
    this._addCss(".grd_star", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_color("#a50034ff");
    this._addCss(".grd_star", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("antialias 11 LG스마트체 Regular, LG스마트체,Dotum, Arial");
    this._addCss(".grd_star", "selectfont", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("antialias 10 LG스마트체 Regular, LG스마트체,Dotum, Arial");
    this._addCss(".grd_title", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("antialias 10 LG스마트체 Regular, LG스마트체,Dotum, Arial");
    this._addCss(".grd_title", "selectfont", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss(".grdBtn_red", "controlalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss(".grdBtn_black", "controlalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss(".grdBtn_gray", "controlalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("#a50034ff","","","0","0","0","0","true");
    this._addCss(".grdBtn_red", "controlbackground", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss(".grdBtn_red", "controlbordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss(".grdBtn_black", "controlbordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss(".grdBtn_gray", "controlbordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss(".grdBtn_red", "controlborder", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss(".grdBtn_black", "controlborder", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss(".grdBtn_gray", "controlborder", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss(".grdBtn_red", "controlcolor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss(".grdBtn_black", "controlcolor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss(".grdBtn_gray", "controlcolor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체,Dotum, Arial");
    this._addCss(".grdBtn_red", "controlfont", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss(".grdBtn_black", "controlfont", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss(".grdBtn_gray", "controlfont", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss(".grdBtn_black", "controlbackground", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("#666666ff","","","0","0","0","0","true");
    this._addCss(".grdBtn_gray", "controlbackground", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("antialias 9 Arial");
    this._addCss("Radio.rdo_WF_star", "font", obj, ["normal", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_background("","img::sta_MF_ErrorImage.png","","0","0","50","50","true");
    this._addCss("Static.sta_MF_ErrorImage", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#c5003d");
    this._addCss("Static.sta_MF_ErrorTitle", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("35 Arial");
    this._addCss("Static.sta_MF_ErrorTitle", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("11 Arial");
    this._addCss("Static.sta_MF_ErrorGuide", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("10 Arial");
    this._addCss("Static.sta_MF_ErrorFollowings", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","img::sta_MF_Bullet.png","","0","0","5","50","true");
    this._addCss("Static.sta_MF_ErrorFollowingsItem", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#7d7d7d");
    this._addCss("Static.sta_MF_ErrorFollowingsItem", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Arial");
    this._addCss("Static.sta_MF_ErrorFollowingsItem", "font", obj, ["normal"]);
    this._addCss("Static.Guide_Number", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 2 40");
    this._addCss("Static.sta_MF_ErrorFollowingsItem", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#707271ff","");
    this._addCss("Static.sta_WF_AlertBg", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_ConfirmBg", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::alert_alert.png","","0","0","0","0","true");
    this._addCss("Static.sta_WF_AlertIcon", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#707271ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_AlertTitle", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 20");
    this._addCss("Static.sta_WF_AlertTitle", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_PopupTitle", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_errorTitle", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#333333ff","");
    this._addCss("Static.sta_WF_PopupBg", "border", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 12 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Static.sta_WF_calTitle", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_gradation_red", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_gradation_gray", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_Title_gray", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt12_black", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_talkBox", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_gradation_red", "background", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_gradation_gray", "background", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_gradation_lineBox", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #d80546 0,100 #97002b");
    this._addCss("Static.sta_WF_gradation_red", "gradation", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #aaaaaa 0,100 #838383");
    this._addCss("Static.sta_WF_gradation_gray", "gradation", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("2","solid","#cacacaff","");
    this._addCss("Static.sta_WF_gradation_grayBox", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("round","5","5","true","true","true","true");
    this._addCss("Static.sta_WF_gradation_lineBox", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_redBoxtxt", "bordertype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #e3e3e3");
    this._addCss("Static.sta_WF_gradation_lineBox", "gradation", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_shadow("outer 0,1 1 #00000021");
    this._addCss("Static.sta_WF_gradation_lineBox", "shadow", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","img::bg_WF_arrowR.png","stretch","30","0","0","0","true");
    this._addCss("Static.sta_WF_arrowR", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#c21546ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_redBoxtxt", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#a5153eff","");
    this._addCss("Static.sta_WF_redBoxtxt", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","");
    this._addCss("Static.sta_WF_map_grayTextbox", "border", obj, ["normal", "disabled"]);
    this._addCss("Div.div_WF_mapInfo", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss("Static.sta_WF_map_grayTextbox", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_WF_GridTxt", "font", obj, ["normal"]);
    this._addCss("Static.Pseudo", "font", obj, ["normal"]);
    this._addCss("Static.Guide_Class", "font", obj, ["normal"]);
    this._addCss("Static.guide_blue", "font", obj, ["normal"]);
    this._addCss("Static.guide_deepBue", "font", obj, ["normal"]);
    this._addCss("Static.guide_deepRed", "font", obj, ["normal"]);
    this._addCss("Static.guide_gray", "font", obj, ["normal"]);
    this._addCss("Static.guide_orange", "font", obj, ["normal"]);
    this._addCss("Div.div_WF_mapInfo", "font", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalPrevN.png')");
    this._addCss("Button.btn_WF_CalPrev", "image", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalPrevO.png')");
    this._addCss("Button.btn_WF_CalPrev", "image", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalPrevP.png')");
    this._addCss("Button.btn_WF_CalPrev", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalNextN.png')");
    this._addCss("Button.btn_WF_CalNext", "image", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalNextO.png')");
    this._addCss("Button.btn_WF_CalNext", "image", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalNextP.png')");
    this._addCss("Button.btn_WF_CalNext", "image", obj, ["pushed"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("TextArea.txt_WF_Message", "align", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("Static.sta_WF_SubTitle3_multi", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_descBox", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_desc", "align", obj, ["normal"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("TextArea.txt_WF_Message", "displaynulltextcolor", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("Edit.edt_WA_Title", "displaynulltextcolor", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Edit.edt_WF_Location", "displaynulltextcolor", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Edit.edt_WA_Title_oper", "displaynulltextcolor", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Static.sta_WF_descBox", "displaynulltextcolor", obj, ["normal"]);
    this._addCss("Static.sta_WF_desc", "displaynulltextcolor", obj, ["normal"]);
    this._addCss("TextArea.txt_WF_desc", "displaynulltextcolor", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("TextArea.txt_WF_descBox", "displaynulltextcolor", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);

    obj = new nexacro.Style_value("3");
    this._addCss("TextArea.txt_WF_Message", "linespace", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("Static.sta_WF_SubTitle3_multi", "linespace", obj, ["normal"]);
    this._addCss("Static.sta_WF_Sub", "linespace", obj, ["normal"]);
    this._addCss("Static.sta_WF_descBox", "linespace", obj, ["normal"]);
    this._addCss("Static.sta_WF_desc", "linespace", obj, ["normal"]);
    this._addCss("TextArea.txt_WF_desc", "linespace", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("TextArea.txt_WF_descBox", "linespace", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);

    obj = new nexacro.Style_padding("4 0 0 7");
    this._addCss("TextArea.txt_WF_Message", "padding", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);

    obj = new nexacro.Style_value("#d80546");
    this._addCss("TextArea.txt_WF_Message", "selectbackground", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("Edit.edt_WA_Title", "selectbackground", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Edit.edt_WF_Location", "selectbackground", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Edit.edt_WA_Title_oper", "selectbackground", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Static.sta_WF_descBox", "selectbackground", obj, ["normal"]);
    this._addCss("Static.sta_WF_desc", "selectbackground", obj, ["normal"]);
    this._addCss("TextArea.txt_WF_desc", "selectbackground", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);
    this._addCss("TextArea.txt_WF_descBox", "selectbackground", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);

    obj = new nexacro.Style_background("","img::confirm_ok.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_ConfirmIcon", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#a50034ff","");
    this._addCss("Static.sta_WF_ErrorBg", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::alert_error.png","","0","0","0","0","true");
    this._addCss("Static.sta_WF_ErrorIcon", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_error_errorIcon.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_ErrorIcon2", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_error_Lnet.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_errorLnet", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Static.sta_WFSA_line", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#000000ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Static.sta_WFDA_detailTop", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#f8f8f8ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WFDA_Label", "background", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelCenter", "background", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelTitle", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 8 0 16");
    this._addCss("Static.sta_WFDA_Label", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Label_E", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f8f8f8ff","img::icon_WF_Label_E.png","","0","0","0","50","true");
    this._addCss("Static.sta_WFDA_Label_E", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 8 0 10");
    this._addCss("Static.sta_WFDA_Data", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Title", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#222222");
    this._addCss("Static.sta_WA_Title", "color", obj, ["normal"]);
    this._addCss("Edit.edt_WA_Title", "color", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Static.sta_WA_Title_oper", "color", obj, ["normal"]);
    this._addCss("Edit.edt_WA_Title_oper", "color", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Static.sta_WF_Title", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 15 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Static.sta_WA_Title", "font", obj, ["normal"]);
    this._addCss("Edit.edt_WA_Title", "font", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);
    this._addCss("Static.sta_WA_Title_oper", "font", obj, ["normal"]);
    this._addCss("Edit.edt_WA_Title_oper", "font", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);

    obj = new nexacro.Style_padding("7 0 0 17");
    this._addCss("Static.sta_WA_Title", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WA_Title_oper", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","","0","none","#808080ff","","1","solid","#dbdbdbff","","0","none","#808080ff","");
    this._addCss("Static.sta_WA_Title_oper", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("5");
    this._addCss("Static.sta_WF_Title_gray", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::icon_WF_Title.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_Title", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 16");
    this._addCss("Static.sta_WF_Title", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::icon_WF_SubTitleGroup.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_SubTitleGroup", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#a40f3e");
    this._addCss("Static.sta_WF_SubTitleGroup", "color", obj, ["normal"]);
    this._addCss("Static.guide_deepRed", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 10 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Static.sta_WF_SubTitleGroup", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 12");
    this._addCss("Static.sta_WF_SubTitleGroup", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::icon_WF_SubTitle.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_SubTitle", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 11");
    this._addCss("Static.sta_WF_SubTitle", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle2", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::icon_WF_SubTitle2.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_SubTitle2", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::icon_WF_SubTitle3_multi.png","","0","0","0","0","true");
    this._addCss("Static.sta_WF_SubTitle3_multi", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 8");
    this._addCss("Static.sta_WF_SubTitle3_multi", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle3", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_Sub", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f1f2f6ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_guideBG", "background", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 26 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Static.sta_WF_txt26_black", "font", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 19 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Static.sta_WF_txt19_black", "font", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 14 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Static.sta_WF_txt14_black", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_txt14_red", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("#ccccccff","","","0","0","0","0","true");
    this._addCss("Static.Guide_Line", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#ff9197a2","","","0","0","0","0","true");
    this._addCss("Static.Guide_Color", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("Static.Guide_header", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 15");
    this._addCss("Static.Guide_header", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#d2020b");
    this._addCss("Static.Guide_Number", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#4374d9");
    this._addCss("Static.guide_blue", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#0b1f8f");
    this._addCss("Static.guide_deepBue", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#ea8d07");
    this._addCss("Static.guide_orange", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("20 20 0 20");
    this._addCss("Static.sta_WF_descBox", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_desc", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_LGE_CI.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_lgeCI", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#059999a2","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_commonBottom", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_WF_star_N.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_star_N", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_WF_star_S.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_star_S", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_WF_memberEnd.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_memberEnd", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_WF_memberEnd2.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_memberEnd2", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_WF_stepArrow.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_stepArrow", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#333333ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Tab.tab_master", "border", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Tab.tab_master", "buttonbackground", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("1 solid #cccccc");
    this._addCss("Tab.tab_master", "buttonborder", obj, ["normal", "focused"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Tab.tab_master", "buttonbordertype", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("8 20 6 20");
    this._addCss("Tab.tab_master", "buttonpadding", obj, ["normal", "focused"]);

    obj = new nexacro.Style_margin("0 -1 0 0");
    this._addCss("Tab.tab_master", "buttonmargin", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("false");
    this._addCss("Tab.tab_master", "showextrabutton", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("Tab.tab_master", "buttonbackground", obj, ["selected", "pushed"]);

    obj = new nexacro.Style_value("1 solid #333333");
    this._addCss("Tab.tab_master", "buttonborder", obj, ["selected", "pushed"]);

    obj = new nexacro.Style_padding("8 16 6 16");
    this._addCss("Tab.tab_master", "buttonpadding", obj, ["selected", "pushed"]);

    obj = new nexacro.Style_font("antialias bold 9 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Tab.tab_master", "font", obj, ["selected", "pushed"]);

    obj = new nexacro.Style_padding("20 20 20 20");
    this._addCss("TextArea.txt_WF_descBox", "padding", obj, ["normal", "mouseover", "focused", "pushed", "disabled", "readonly"]);

    obj = new nexacro.Style_background("#ffffffff","img::bg_WF_mapinfo_open.png","","0","0","100","50","true");
    this._addCss("Static.sta_WF_mapInfo_open", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","5","solid","#e6e6e6ff","");
    this._addCss("Static.sta_WF_mapInfo_open", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","img::bg_WF_mapinfo_close.png","","0","0","100","50","true");
    this._addCss("Static.sta_WF_mapInfo_close", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","5","solid","#ed0089ff","");
    this._addCss("Static.sta_WF_mapInfo_close", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","dotted","#d5d5d5ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Static.sta_WF_mapInfo_dotline", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_splitterV_N.png","repeat-x","0","0","0","50","true");
    this._addCss("Button.btn_WF_SplitterV", "background", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_splitterV_N.png')");
    this._addCss("Button.btn_WF_SplitterV", "image", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_background("#f1f1f1ff","img::bg_splitterV_O.png","repeat-x","0","0","0","50","true");
    this._addCss("Button.btn_WF_SplitterV", "background", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_splitterV_O.png')");
    this._addCss("Button.btn_WF_SplitterV", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("","img::bg_splitterH_N.png","repeat-y","0","0","50","0","true");
    this._addCss("Button.btn_WF_SplitterH", "background", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_splitterH_N.png')");
    this._addCss("Button.btn_WF_SplitterH", "image", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_background("#f1f1f1ff","img::bg_splitterH_O.png","repeat-y","0","0","50","0","true");
    this._addCss("Button.btn_WF_SplitterH", "background", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_WF_splitterH_O.png')");
    this._addCss("Button.btn_WF_SplitterH", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("","img::sub4_bar.gif","","0","0","50","50","true");
    this._addCss("Static.sta_WF_talkBox", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 5 0");
    this._addCss("Static.sta_WF_talkBox", "padding", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 14 HY견명조");
    this._addCss("Static.sta_WF_txtHY14", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Static.sta_WF_txtHY14", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY18", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY20", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_txtHY48", "padding", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 18 HY견명조");
    this._addCss("Static.sta_WF_txtHY18", "font", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 20 HY견명조");
    this._addCss("Static.sta_WF_txtHY20", "font", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 48 HY견명조");
    this._addCss("Static.sta_WF_txtHY48", "font", obj, ["normal"]);

    obj = null;
    
//[add theme images]
  };
})();
