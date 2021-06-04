//CSS=WorkFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("","theme://images/btn_WF_AlertClose.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Popclose", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Button.btn_WF_Popclose", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Search", "border", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Search", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WFSA_Dell", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Up", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Down", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MF_ErrorImage", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertBg", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertIcon", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertTitle", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ConfirmBg", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ConfirmIcon", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ErrorBg", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ErrorIcon", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Button.btn_WF_Popclose", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Dell", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Up", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFSA_Down", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MF_ErrorImage", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertBg", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertIcon", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_AlertTitle", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ConfirmBg", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ConfirmIcon", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ErrorBg", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ErrorIcon", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("Button.btn_WF_Popclose", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Search", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Grid", "shadow", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_GridDown", "shadow", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleL", "shadow", obj, ["normal"]);
    this._addCss("Button.btn_WF_ShuttleR", "shadow", obj, ["normal"]);
    this._addCss("Button.btn_WF_PopupBtn", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_background("#c00c3fff","","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Search", "background", obj, ["normal", "selected"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("Button.btn_WFSA_Search", "bordertype", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Search", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Grid", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_GridDown", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleL", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_WF_ShuttleR", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_WF_PopupBtn", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Button.btn_WFSA_Search", "color", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Grid", "color", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_WF_GridDown", "color", obj, ["normal", "selected"]);
    this._addCss("Static.sta_WF_AlertTitle", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("antialias bold 9 LG스마트체,Arial");
    this._addCss("Button.btn_WFSA_Search", "font", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Search", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_PopupBtn", "font", obj, ["normal"]);
    this._addCss("Static.sta_WFSA_Label", "font", obj, ["normal"]);
    this._addCss("Static.sta_WFSA_Label_E", "font", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Label", "font", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Label_E", "font", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelCenter", "font", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelTitle", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_GridTotal", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Search.png')");
    this._addCss("Button.btn_WFSA_Search", "image", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_align("lefttext middle");
    this._addCss("Button.btn_WFSA_Search", "imagealign", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GridDown", "imagealign", obj, ["normal", "selected"]);

    obj = new nexacro.Style_padding("0 0 0 4");
    this._addCss("Button.btn_WFSA_Search", "padding", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_shadow("outer 0,1 1 #c3c4c8");
    this._addCss("Button.btn_WFSA_Search", "shadow", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("#95012bff","","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Search", "background", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("1","solid","#6c051aff","");
    this._addCss("Button.btn_WFSA_Search", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Button.btn_WF_Grid", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Button.btn_WF_GridDown", "border", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#8e8789ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Search", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Search", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_WF_AlertTitle", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("transparent");
    this._addCss("Button.btn_WF_Search", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_SearchSmall.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_SearchSmall_M.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_SearchSmall_D.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_WF_Grid", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_GridDown", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleL", "align", obj, ["normal"]);
    this._addCss("Button.btn_WF_ShuttleR", "align", obj, ["normal"]);
    this._addCss("Button.btn_WF_PopupBtn", "align", obj, ["normal"]);
    this._addCss("Static.sta_MF_ErrorTitle", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WFDA_LabelCenter", "align", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelTitle", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_Unit", "align", obj, ["normal"]);
    this._addCss("Static.Guide_Color", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Grid", "background", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GridDown", "background", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Button.btn_WF_ShuttleL", "background", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "background", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_PopupBtn", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GridSave", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#4f5670ff","");
    this._addCss("Button.btn_WF_Grid", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_GridDown", "border", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button.btn_WF_Grid", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_GridDown", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleL", "cursor", obj, ["normal"]);
    this._addCss("Button.btn_WF_ShuttleR", "cursor", obj, ["normal"]);
    this._addCss("Button.btn_WF_PopupBtn", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial");
    this._addCss("Button.btn_WF_Grid", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_GridDown", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleL", "font", obj, ["normal"]);
    this._addCss("Button.btn_WF_ShuttleR", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_Sub", "font", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #71778c 0,100 #4f5670");
    this._addCss("Button.btn_WF_Grid", "gradation", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_GridDown", "gradation", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("");
    this._addCss("Button.btn_WF_Grid", "image", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_PopupBtn", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("Button.btn_WF_Grid", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleL", "imagealign", obj, ["normal"]);
    this._addCss("Button.btn_WF_ShuttleR", "imagealign", obj, ["normal"]);
    this._addCss("Button.btn_WF_PopupBtn", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Button.btn_WF_Grid", "letterspace", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_GridDown", "letterspace", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleL", "letterspace", obj, ["normal"]);
    this._addCss("Button.btn_WF_ShuttleR", "letterspace", obj, ["normal"]);
    this._addCss("Button.btn_WF_PopupBtn", "letterspace", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Button.btn_WF_Grid", "opacity", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_GridDown", "opacity", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleL", "opacity", obj, ["normal"]);
    this._addCss("Button.btn_WF_ShuttleR", "opacity", obj, ["normal"]);
    this._addCss("Button.btn_WF_PopupBtn", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Button.btn_WF_Grid", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_GridDown", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_ShuttleL", "padding", obj, ["normal"]);
    this._addCss("Button.btn_WF_ShuttleR", "padding", obj, ["normal"]);
    this._addCss("Button.btn_WF_PopupBtn", "padding", obj, ["normal"]);
    this._addCss("Static.sta_MF_ErrorFollowings", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_Sub", "padding", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #a93355 0,100 #89143a");
    this._addCss("Button.btn_WF_Grid", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_GridDown", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #89143a 0,100 #a93355");
    this._addCss("Button.btn_WF_Grid", "gradation", obj, ["pushed", "focused"]);
    this._addCss("Button.btn_WF_GridDown", "gradation", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_border("1","solid","#8e8789ff","");
    this._addCss("Button.btn_WF_Grid", "border", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #b8b8b8 0,100 #97989d");
    this._addCss("Button.btn_WF_Grid", "gradation", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Down.png')");
    this._addCss("Button.btn_WF_GridDown", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_border("1","solid","#c2c2c2ff","");
    this._addCss("Button.btn_WF_ShuttleL", "border", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "border", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_PopupBtn", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Button.btn_WF_ShuttleL", "color", obj, ["normal"]);
    this._addCss("Button.btn_WF_ShuttleR", "color", obj, ["normal"]);
    this._addCss("Button.btn_WF_PopupBtn", "color", obj, ["normal"]);
    this._addCss("Static.sta_MF_ErrorGuide", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ErrorFollowings", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WFSA_Label", "color", obj, ["normal"]);
    this._addCss("Static.sta_WFSA_Label_E", "color", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Label", "color", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Label_E", "color", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f7f7f7");
    this._addCss("Button.btn_WF_ShuttleL", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_PopupBtn", "gradation", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c00c3fff","");
    this._addCss("Button.btn_WF_ShuttleL", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleR", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_WF_PopupBtn", "border", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #e0e0e0");
    this._addCss("Button.btn_WF_ShuttleL", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_ShuttleR", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_PopupBtn", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #e0e0e0 0,100 #fefefe");
    this._addCss("Button.btn_WF_ShuttleL", "gradation", obj, ["focused", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleR", "gradation", obj, ["focused", "pushed"]);
    this._addCss("Button.btn_WF_PopupBtn", "gradation", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_color("#a9a9a9");
    this._addCss("Button.btn_WF_ShuttleL", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_PopupBtn", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL_D.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR_D.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#a1a9a6ff","");
    this._addCss("Button.btn_WF_GridSave", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#4a4947ff");
    this._addCss("Button.btn_WF_GridSave", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Arial");
    this._addCss("Button.btn_WF_GridSave", "font", obj, ["normal", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffffff 0,100 #e1e3e2ff");
    this._addCss("Button.btn_WF_GridSave", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_background("#94243aff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GridSave", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#780a20ff","");
    this._addCss("Button.btn_WF_GridSave", "border", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("Button.btn_WF_GridSave", "color", obj, ["mouseover", "pushed"]);
    this._addCss("Static.Guide_header", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#d9dadaff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GridSave", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#b5bcb9ff","");
    this._addCss("Button.btn_WF_GridSave", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#838383ff");
    this._addCss("Button.btn_WF_GridSave", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://WorkFrame/icon_WF_Dell_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Dell", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://WorkFrame/icon_WF_Dell_M.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Dell", "background", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("50");
    this._addCss("Button.btn_WFSA_Dell", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://WorkFrame/icon_WFSA_UpN.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Up", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://WorkFrame/icon_WFSA_UpM.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Up", "background", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://WorkFrame/icon_WFSA_UpD.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Up", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://WorkFrame/icon_WFSA_DownN.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Down", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://WorkFrame/icon_WFSA_DownM.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Down", "background", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://WorkFrame/icon_WFSA_DownD.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_Down", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ebecf0ff","","","0","0","0","0","true");
    this._addCss("Div.div_WFSA_Bg", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#b4b8c8ff","");
    this._addCss("Div.div_WFSA_Bg", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/sta_MF_ErrorImage.png","","0","0","50","50","true");
    this._addCss("Static.sta_MF_ErrorImage", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#c5003d");
    this._addCss("Static.sta_MF_ErrorTitle", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("35 Arial");
    this._addCss("Static.sta_MF_ErrorTitle", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Static.sta_MF_ErrorGuide", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ErrorFollowings", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ErrorFollowingsItem", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WFSA_Label", "align", obj, ["normal"]);
    this._addCss("Static.sta_WFSA_Label_E", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_SubTitle", "align", obj, ["normal"]);

    obj = new nexacro.Style_font("11 Arial");
    this._addCss("Static.sta_MF_ErrorGuide", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("10 Arial");
    this._addCss("Static.sta_MF_ErrorFollowings", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_MF_Bullet.png","","0","0","5","50","true");
    this._addCss("Static.sta_MF_ErrorFollowingsItem", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#7d7d7d");
    this._addCss("Static.sta_MF_ErrorFollowingsItem", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("9 Arial");
    this._addCss("Static.sta_MF_ErrorFollowingsItem", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 0 2 40");
    this._addCss("Static.sta_MF_ErrorFollowingsItem", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_PopBg.png","stretch","20","50","0","0","true");
    this._addCss("Static.sta_WF_AlertBg", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ConfirmBg", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_ErrorBg", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_AlertIcon.png","","0","0","0","0","true");
    this._addCss("Static.sta_WF_AlertIcon", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("9 Arial bold");
    this._addCss("Static.sta_WF_AlertTitle", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_ConfirmIcon.png","stretch","20","50","0","0","true");
    this._addCss("Static.sta_WF_ConfirmIcon", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_ErrorIcon.png","","0","0","0","0","true");
    this._addCss("Static.sta_WF_ErrorIcon", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://WorkFrame/icon_WF_Search_N.png","","0","0","0","50","true");
    this._addCss("Static.sta_WFSA_Label", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 10");
    this._addCss("Static.sta_WFSA_Label", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WFSA_Label_E", "padding", obj, ["normal"]);
    this._addCss("Static.Guide_Title", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://WorkFrame/icon_WF_Search_E.png","","0","0","0","50","true");
    this._addCss("Static.sta_WFSA_Label_E", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f3f4f8ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WFDA_Label", "background", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelCenter", "background", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelTitle", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#b2b5bfff","");
    this._addCss("Static.sta_WFDA_Label", "border", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Label_E", "border", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Data", "border", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelCenter", "border", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelTitle", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 8 0 14");
    this._addCss("Static.sta_WFDA_Label", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_Label_E", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelCenter", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_LabelTitle", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f3f4f8ff","theme://WorkFrame/icon_WF_Label_E.png","","0","0","0","50","true");
    this._addCss("Static.sta_WFDA_Label_E", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Static.sta_WFDA_Data", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 8 0 10");
    this._addCss("Static.sta_WFDA_Data", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://WorkFrame/icon_WF_Title.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_Title", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#c00c3f");
    this._addCss("Static.sta_WF_Title", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_Link", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 10 LG스마트체,Arial");
    this._addCss("Static.sta_WF_Title", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 15");
    this._addCss("Static.sta_WF_Title", "padding", obj, ["normal"]);
    this._addCss("Static.Guide_header", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://WorkFrame/icon_WF_SubTitle.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_SubTitle", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#525972");
    this._addCss("Static.sta_WF_SubTitle", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 12");
    this._addCss("Static.sta_WF_SubTitle", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_Sub", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#8b0027");
    this._addCss("Static.sta_WF_Sub", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("3");
    this._addCss("Static.sta_WF_Sub", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias underline 9 LG스마트체,Ariale");
    this._addCss("Static.sta_WF_Link", "font", obj, ["normal"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Static.sta_WF_GridTxt", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_GridTotal", "align", obj, ["normal"]);

    obj = new nexacro.Style_color("#383f43ff");
    this._addCss("Static.sta_WF_GridTxt", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#ebecf1ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_GridTotal", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#dcdde2ff","","1","solid","#ccccccff","","1","solid","#a2a8baff","","1","solid","#ccccccff","");
    this._addCss("Static.sta_WF_GridTotal", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Static.sta_WF_GridTotal", "padding", obj, ["normal"]);

    obj = new nexacro.Style_font("8 Arial");
    this._addCss("Static.Pseudo", "font", obj, ["normal"]);
    this._addCss("Static.Guide_Number", "font", obj, ["normal"]);
    this._addCss("Static.Guide_Class", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#615b5b");
    this._addCss("Static.Pseudo", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#ccccccff","","","0","0","0","0","true");
    this._addCss("Static.Guide_Line", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#ff9197ff","","","0","0","0","0","true");
    this._addCss("Static.Guide_Color", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("70");
    this._addCss("Static.Guide_Color", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_background("#000000ff","","","0","0","0","0","true");
    this._addCss("Static.Guide_header", "background", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 10 Arial");
    this._addCss("Static.Guide_header", "font", obj, ["normal"]);
    this._addCss("Static.Guide_Title", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#d2020b");
    this._addCss("Static.Guide_Number", "color", obj, ["normal"]);
    this._addCss("Static.Guide_Class", "color", obj, ["normal"]);

    obj = null;
    
//[add theme images]
  };
})();
