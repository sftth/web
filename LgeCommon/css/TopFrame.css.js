//CSS=TopFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("","theme://TopFrame/icon_TF_UserN.png","","0","0","0","50","true");
    this._addCss("Button.btn_TF_User", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Button.btn_TF_User", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Logout", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("PopupDiv.pop_TF", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_TF_Title", "border", obj, ["normal"]);
    this._addCss("Static.sta_TF_Name", "border", obj, ["normal"]);
    this._addCss("Static.sta_TF_Department", "border", obj, ["normal"]);
    this._addCss("TextArea.txt_TF", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#000000ff","theme://TopFrame/icon_TF_LogoutN.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_Logout", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#000000ff","theme://TopFrame/icon_TF_LogoutM.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_Logout", "background", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("50%");
    this._addCss("Button.btn_TF_Logout", "opacity", obj, ["disabled"]);
    this._addCss("Menu.mnu_TF", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Form.frm_TF", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://TopFrame/pop_TF_Bg.png","stretch","20","20","0","0","true");
    this._addCss("PopupDiv.pop_TF", "background", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("PopupDiv.pop_TF", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_TF_Title", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_TF_Name", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_TF_Department", "bordertype", obj, ["normal"]);
    this._addCss("TextArea.txt_TF", "bordertype", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("PopupDiv.pop_TF", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_TF_Title", "color", obj, ["normal"]);
    this._addCss("Static.sta_TF_Name", "color", obj, ["normal"]);
    this._addCss("TextArea.txt_TF", "color", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("PopupDiv.pop_TF", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.txt_TF", "cursor", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial");
    this._addCss("PopupDiv.pop_TF", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_TF_Name", "font", obj, ["normal"]);
    this._addCss("Static.sta_TF_Department", "font", obj, ["normal"]);
    this._addCss("TextArea.txt_TF", "font", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("PopupDiv.pop_TF", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.txt_TF", "gradation", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("PopupDiv.pop_TF", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.txt_TF", "opacity", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_padding("10 10 10 10");
    this._addCss("PopupDiv.pop_TF", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("PopupDiv.pop_TF", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("PopupDiv.pop_TF", "stepalign", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("Menu.mnu_TF", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Menu.mnu_TF", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://TopFrame/icon_TF_MenuExpand.png')");
    this._addCss("Menu.mnu_TF", "expandimage", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_font("antialias bold 14 LG스마트체,Arial");
    this._addCss("Menu.mnu_TF", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_padding("0 20 0 20");
    this._addCss("Menu.mnu_TF", "itempadding", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Menu.mnu_TF", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c00c3fff","");
    this._addCss("Menu.mnu_TF", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 10 LG스마트체,Arial");
    this._addCss("Menu.mnu_TF", "popupfont", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Menu.mnu_TF", "popupitembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Menu.mnu_TF", "popupitemborder", obj, ["normal"]);

    obj = new nexacro.Style_value("30");
    this._addCss("Menu.mnu_TF", "popupitemheight", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_padding("0 10 0 13");
    this._addCss("Menu.mnu_TF", "popupitempadding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Menu.mnu_TF", "popuppadding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Menu.mnu_TF", "background", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_TF_Title", "background", obj, ["normal"]);
    this._addCss("Static.sta_TF_Name", "background", obj, ["normal"]);
    this._addCss("Static.sta_TF_Department", "background", obj, ["normal"]);
    this._addCss("TextArea.txt_TF", "background", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#c00c3fff","","","0","0","0","0","true");
    this._addCss("Menu.mnu_TF", "itembackground", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("Menu.mnu_TF", "color", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("Menu.mnu_TF", "popupitembackground", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Menu.mnu_TF", "popupcolor", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_font("bold 10 LG스마트체,Arial Narrow");
    this._addCss("Menu.mnu_TF", "popupfont", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_font("antialias bold 13 LG스마트체,Arial");
    this._addCss("Menu.mnu_TF", "font", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999ff");
    this._addCss("Menu.mnu_TF", "popupcolor", obj, ["disabled"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Static.sta_TF_Title", "align", obj, ["normal"]);
    this._addCss("Static.sta_TF_Name", "align", obj, ["normal"]);
    this._addCss("Static.sta_TF_Department", "align", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 18 LG스마트체,Arial");
    this._addCss("Static.sta_TF_Title", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://TopFrame/lglogo.png","","0","0","0","50","true");
    this._addCss("Static.sta_TF_Logo", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#909090");
    this._addCss("Static.sta_TF_Department", "color", obj, ["normal"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("TextArea.txt_TF", "align", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("4");
    this._addCss("TextArea.txt_TF", "linespace", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("TextArea.txt_TF", "padding", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("#333333");
    this._addCss("TextArea.txt_TF", "selectbackground", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("TextArea.txt_TF", "selectcolor", obj, ["normal", "mouseover", "focused"]);

    obj = null;
    
//[add theme images]
  };
})();
