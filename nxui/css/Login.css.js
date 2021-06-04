//CSS=Login.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("","img::bg_TF_ci.png","","0","0","50","50","true");
    this._addCss("Static.sta_Login_CI", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Static.sta_Login_CI", "padding", obj, ["normal"]);
    this._addCss("Static.sta_Login_title", "padding", obj, ["normal"]);
    this._addCss("Static.sta_Login_lgeCI", "padding", obj, ["normal"]);
    this._addCss("Static.sta_Login_Copyright", "padding", obj, ["normal"]);
    this._addCss("Combo.cmb_Login", "padding", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Static.sta_Login_title", "align", obj, ["normal"]);
    this._addCss("Static.sta_Login_lgeCI", "align", obj, ["normal"]);
    this._addCss("Static.sta_Login_Copyright", "align", obj, ["normal"]);
    this._addCss("Button.btn_Login_delete", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_Login_login", "align", obj, ["normal", "selected"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Static.sta_Login_title", "background", obj, ["normal"]);
    this._addCss("Static.sta_Login_Copyright", "background", obj, ["normal"]);
    this._addCss("CheckBox.chk_Login", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("Combo.cmb_Login>#comboedit", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Static.sta_Login_title", "border", obj, ["normal"]);
    this._addCss("Static.sta_Login_Copyright", "border", obj, ["normal"]);
    this._addCss("Edit.edt_Login", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("CheckBox.chk_Login", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("Combo.cmb_Login", "border", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Combo.cmb_Login>#comboedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_Login_delete", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_Login_login", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_Login_sub", "border", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Static.sta_Login_title", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_Login_Label", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_Login_Copyright", "bordertype", obj, ["normal"]);
    this._addCss("Edit.edt_Login", "bordertype", obj, ["normal"]);
    this._addCss("CheckBox.chk_Login", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("Combo.cmb_Login", "bordertype", obj, ["normal"]);
    this._addCss("Combo.cmb_Login>#comboedit", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_Login_sub", "bordertype", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_color("#a50034ff");
    this._addCss("Static.sta_Login_title", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 26 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Static.sta_Login_title", "font", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Static.sta_Login_Label", "align", obj, ["normal"]);
    this._addCss("Edit.edt_Login", "align", obj, ["normal"]);
    this._addCss("CheckBox.chk_Login", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("Combo.cmb_Login", "align", obj, ["normal"]);
    this._addCss("Combo.cmb_Login>#comboedit", "align", obj, ["normal"]);
    this._addCss("Button.btn_Login_sub", "align", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_background("#ffffffff","img::bg_Login_labelBul.png","","0","0","0","50","true");
    this._addCss("Static.sta_Login_Label", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","","0","none","#808080ff","","1","solid","#dbdbdbff","","0","none","#808080ff","");
    this._addCss("Static.sta_Login_Label", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Static.sta_Login_Label", "color", obj, ["normal"]);
    this._addCss("Edit.edt_Login", "color", obj, ["normal"]);
    this._addCss("CheckBox.chk_Login", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("Combo.cmb_Login", "color", obj, ["normal"]);
    this._addCss("Combo.cmb_Login>#comboedit", "color", obj, ["normal"]);
    this._addCss("Button.btn_Login_sub", "color", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_font("antialias 10 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Static.sta_Login_Label", "font", obj, ["normal"]);
    this._addCss("Edit.edt_Login", "font", obj, ["normal"]);
    this._addCss("Combo.cmb_Login", "font", obj, ["normal"]);
    this._addCss("Combo.cmb_Login>#comboedit", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 29");
    this._addCss("Static.sta_Login_Label", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_Login_LGE.png","","0","0","50","50","true");
    this._addCss("Static.sta_Login_lgeCI", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#808080");
    this._addCss("Static.sta_Login_Copyright", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Static.sta_Login_Copyright", "font", obj, ["normal"]);
    this._addCss("CheckBox.chk_Login", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("Button.btn_Login_sub", "font", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_background("#e0e0e0ff","","","0","0","0","0","true");
    this._addCss("Edit.edt_Login", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("Combo.cmb_Login", "background", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss("Edit.edt_Login", "displaynulltextcolor", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 30 0 10");
    this._addCss("Edit.edt_Login", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#d80546");
    this._addCss("Edit.edt_Login", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Edit.edt_Login", "selectcolor", obj, ["normal"]);
    this._addCss("Combo.cmb_Login>#comboedit", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Edit.edt_Login", "color", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Combo.cmb_Login>#comboedit", "color", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_Login_sub", "color", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Edit.edt_Login", "color", obj, ["disabled"]);
    this._addCss("Combo.cmb_Login", "color", obj, ["disabled"]);
    this._addCss("Button.btn_Login_sub", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("CheckBox.chk_Login", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_background("","img::img_WF_CheckBoxN.png","","0","0","0","0","true");
    this._addCss("CheckBox.chk_Login", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("CheckBox.chk_Login", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_value("URL('img::img_WF_CheckN.png')");
    this._addCss("CheckBox.chk_Login", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_value("16");
    this._addCss("CheckBox.chk_Login", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_padding("0 0 0 2");
    this._addCss("CheckBox.chk_Login", "textpadding", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_value("30");
    this._addCss("Combo.cmb_Login", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Combo.cmb_Login", "itembackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Combo.cmb_Login", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Combo.cmb_Login", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Combo.cmb_Login", "itemcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 10 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Combo.cmb_Login", "itemfont", obj, ["normal"]);

    obj = new nexacro.Style_value("24");
    this._addCss("Combo.cmb_Login", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 10 0 10");
    this._addCss("Combo.cmb_Login", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("Combo.cmb_Login", "itembackground", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("Combo.cmb_Login", "itembackground", obj, ["selected"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Combo.cmb_Login", "itemcolor", obj, ["selected"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Combo.cmb_Login", "itemcolor", obj, ["disabled"]);

    obj = new nexacro.Style_padding("0 -30 0 0");
    this._addCss("Combo.cmb_Login", "padding", obj, ["readonly"]);

    obj = new nexacro.Style_padding("1 10 0 10");
    this._addCss("Combo.cmb_Login>#comboedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#328efe");
    this._addCss("Combo.cmb_Login>#comboedit", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("Combo.cmb_Login>#comboedit", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("#999999ff","","","0","0","0","0","true");
    this._addCss("Button.btn_Login_delete", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_Login_login", "background", obj, ["disabled"]);

    obj = new nexacro.Style_bordertype("round","12","12","true","true","true","true");
    this._addCss("Button.btn_Login_delete", "bordertype", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_Login_delete.png')");
    this._addCss("Button.btn_Login_delete", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_Login_delete", "imagealign", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("50");
    this._addCss("Button.btn_Login_delete", "opacity", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("100");
    this._addCss("Button.btn_Login_delete", "opacity", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Button.btn_Login_delete", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("#a50034ff","","","0","0","0","0","true");
    this._addCss("Button.btn_Login_login", "background", obj, ["normal", "selected", "pushed"]);

    obj = new nexacro.Style_bordertype("round","5","5","true","true","true","true");
    this._addCss("Button.btn_Login_login", "bordertype", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button.btn_Login_login", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_Login_sub", "cursor", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Button.btn_Login_login", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_font("antialias 15 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Button.btn_Login_login", "font", obj, ["normal", "selected"]);

    obj = new nexacro.Style_background("#d80546ff","","","0","0","0","0","true");
    this._addCss("Button.btn_Login_login", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","img::bg_Login_subBtn.png","","0","0","0","50","true");
    this._addCss("Button.btn_Login_sub", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 10");
    this._addCss("Button.btn_Login_sub", "padding", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_font("antialias underline 9 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Button.btn_Login_sub", "font", obj, ["mouseover", "pushed"]);

    obj = null;
    
//[add theme images]
  };
})();
