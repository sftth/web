//CSS=LeftFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("Static.sta_LF_bg", "background", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_LF_bg2", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#e0e0e0ff","","0","none","","","0","none","","");
    this._addCss("Static.sta_LF_bg", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Static.sta_LF_bg", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_LF_bg2", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_LF_menuN", "bordertype", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_LF_menuBN", "bordertype", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_LF_subMenuN", "bordertype", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_LF_Login", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_Login_user", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_Login_pLNet", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Combo.cmb_LF_class", "bordertype", obj, ["normal"]);
    this._addCss("Combo.cmb_LF_class>#comboedit", "bordertype", obj, ["normal"]);
    this._addCss("ImageViewer.img_LF_banner", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Static.sta_LF_menuTitle", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#dbdbdbff","","1","solid","#dbdbdbff","","1","solid","#dbdbdbff","");
    this._addCss("Static.sta_LF_bg2", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_LF_close", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_open", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_logout", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_reload", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_setting", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon1", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon2", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon3", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon4", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_Login_pLNet", "align", obj, ["normal", "selected", "disabled"]);
    this._addCss("Static.sta_LF_counter", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_close", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_LF_open", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_LF_logout", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_LF_reload", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_LF_setting", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_LF_icon1", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_LF_icon2", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_LF_icon3", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_LF_icon4", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Combo.cmb_LF_class", "background", obj, ["normal", "disabled", "readonly"]);
    this._addCss("Combo.cmb_LF_class>#comboedit", "background", obj, ["normal"]);
    this._addCss("Static.sta_LF_menuTitle", "background", obj, ["normal"]);
    this._addCss("Static.sta_LF_userName", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Button.btn_LF_close", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_open", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_logout", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_reload", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_setting", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon1", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon2", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon3", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon4", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_shortcut", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_LF_subMenuN", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_subMenuO", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Login", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Login_user", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Combo.cmb_LF_class", "border", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Combo.cmb_LF_class>#comboedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_LF_operator", "border", obj, ["normal"]);
    this._addCss("Static.sta_LF_user", "border", obj, ["normal"]);
    this._addCss("Static.sta_LF_userName", "border", obj, ["normal"]);
    this._addCss("Static.sta_LF_counter", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","20","20","true","false","true","false");
    this._addCss("Button.btn_LF_close", "bordertype", obj, ["normal", "selected"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("Button.btn_LF_close", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_open", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_logout", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_reload", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_setting", "padding", obj, ["normal", "selected"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_LF_close", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_open", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_logout", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_reload", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_setting", "imagealign", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_LF_closeN.png')");
    this._addCss("Button.btn_LF_close", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_background("#e0e0e0ff","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_close", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_LF_open", "background", obj, ["mouseover", "focused"]);
    this._addCss("Combo.cmb_LF_class", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::img_LF_closeO.png')");
    this._addCss("Button.btn_LF_close", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#d1d1d1ff","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_close", "background", obj, ["pushed"]);
    this._addCss("Button.btn_LF_open", "background", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('img::img_LF_closeD.png')");
    this._addCss("Button.btn_LF_close", "image", obj, ["disabled"]);

    obj = new nexacro.Style_bordertype("round","20","20","false","true","false","true");
    this._addCss("Button.btn_LF_open", "bordertype", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_LF_openN.png')");
    this._addCss("Button.btn_LF_open", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_LF_openO.png')");
    this._addCss("Button.btn_LF_open", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_LF_openD.png')");
    this._addCss("Button.btn_LF_open", "image", obj, ["disabled"]);

    obj = new nexacro.Style_bordertype("round","12","12","true","true","true","true");
    this._addCss("Button.btn_LF_logout", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_reload", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_setting", "bordertype", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_LF_logoutN.png')");
    this._addCss("Button.btn_LF_logout", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_LF_logoutO.png')");
    this._addCss("Button.btn_LF_logout", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#e6e6e6ff","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_logout", "background", obj, ["pushed"]);
    this._addCss("Button.btn_LF_reload", "background", obj, ["pushed"]);
    this._addCss("Button.btn_LF_setting", "background", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('img::img_LF_logoutD.png')");
    this._addCss("Button.btn_LF_logout", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_LF_reloadN.png')");
    this._addCss("Button.btn_LF_reload", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_LF_reloadO.png')");
    this._addCss("Button.btn_LF_reload", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_LF_reloadD.png')");
    this._addCss("Button.btn_LF_reload", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_LF_settingN.png')");
    this._addCss("Button.btn_LF_setting", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_LF_settingO.png')");
    this._addCss("Button.btn_LF_setting", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_LF_settingD.png')");
    this._addCss("Button.btn_LF_setting", "image", obj, ["disabled"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("Button.btn_LF_icon1", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon2", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon3", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon4", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_shortcut", "bordertype", obj, ["normal", "selected"]);

    obj = new nexacro.Style_color("#888888");
    this._addCss("Button.btn_LF_icon1", "color", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon2", "color", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon3", "color", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon4", "color", obj, ["normal", "selected"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Button.btn_LF_icon1", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon2", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon3", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon4", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_subMenuN", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_subMenuO", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Combo.cmb_LF_class", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("2 0 0 0");
    this._addCss("Button.btn_LF_icon1", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon2", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon3", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon4", "padding", obj, ["normal", "selected"]);

    obj = new nexacro.Style_align("center toptext");
    this._addCss("Button.btn_LF_icon1", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon2", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon3", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_icon4", "imagealign", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_LF_icon1N.png')");
    this._addCss("Button.btn_LF_icon1", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_icon1", "background", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_LF_icon2", "background", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_LF_icon3", "background", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_LF_icon4", "background", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_LF_menuN", "background", obj, ["pushed"]);
    this._addCss("Button.btn_LF_menuO", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Div.div_LF_subMenuBG", "background", obj, ["normal"]);
    this._addCss(".grd_LF_red", "background", obj, ["normal"]);
    this._addCss(".grd_LF_Black", "background", obj, ["normal"]);
    this._addCss(".grd_LF_Gray", "background", obj, ["normal"]);
    this._addCss("ImageViewer.img_LF_banner", "background", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_border("1","solid","#ccccccff","");
    this._addCss("Button.btn_LF_icon1", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_LF_icon2", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_LF_icon3", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_LF_icon4", "border", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Button.btn_LF_icon1", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_LF_icon2", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_LF_icon3", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_LF_icon4", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("ImageViewer.img_LF_banner", "color", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_font("antialias underline 9 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Button.btn_LF_icon1", "font", obj, ["mouseover"]);
    this._addCss("Button.btn_LF_icon2", "font", obj, ["mouseover"]);
    this._addCss("Button.btn_LF_icon3", "font", obj, ["mouseover"]);
    this._addCss("Button.btn_LF_icon4", "font", obj, ["mouseover"]);
    this._addCss("Button.btn_LF_subMenuN", "font", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::img_LF_icon1O.png')");
    this._addCss("Button.btn_LF_icon1", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Button.btn_LF_icon1", "color", obj, ["disabled"]);
    this._addCss("Button.btn_LF_icon2", "color", obj, ["disabled"]);
    this._addCss("Button.btn_LF_icon3", "color", obj, ["disabled"]);
    this._addCss("Button.btn_LF_icon4", "color", obj, ["disabled"]);
    this._addCss("Button.btn_LF_shortcut", "color", obj, ["disabled"]);
    this._addCss("Button.btn_LF_menuN", "color", obj, ["disabled"]);
    this._addCss("Button.btn_LF_menuBN", "color", obj, ["disabled"]);
    this._addCss("Button.btn_LF_subMenuN", "color", obj, ["disabled"]);
    this._addCss("Button.btn_LF_Login", "color", obj, ["disabled"]);
    this._addCss("Button.btn_LF_Login_user", "color", obj, ["disabled"]);
    this._addCss("Combo.cmb_LF_class", "color", obj, ["disabled"]);
    this._addCss("Combo.cmb_LF_class>#comboedit", "color", obj, ["disabled"]);
    this._addCss("ImageViewer.img_LF_banner", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_LF_icon1D.png')");
    this._addCss("Button.btn_LF_icon1", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_LF_icon2N.png')");
    this._addCss("Button.btn_LF_icon2", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_LF_icon2O.png')");
    this._addCss("Button.btn_LF_icon2", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_LF_icon2D.png')");
    this._addCss("Button.btn_LF_icon2", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_LF_icon3N.png')");
    this._addCss("Button.btn_LF_icon3", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_LF_icon3O.png')");
    this._addCss("Button.btn_LF_icon3", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_LF_icon3D.png')");
    this._addCss("Button.btn_LF_icon3", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_LF_icon4N.png')");
    this._addCss("Button.btn_LF_icon4", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_LF_icon4O.png')");
    this._addCss("Button.btn_LF_icon4", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_LF_icon4D.png')");
    this._addCss("Button.btn_LF_icon4", "image", obj, ["disabled"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Button.btn_LF_shortcut", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_menuN", "align", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_LF_menuO", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_menuBN", "align", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_LF_menuBO", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_subMenuN", "align", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_LF_subMenuO", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Login", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_Login_user", "align", obj, ["normal", "selected"]);
    this._addCss("Combo.cmb_LF_class", "align", obj, ["normal"]);
    this._addCss("Combo.cmb_LF_class>#comboedit", "align", obj, ["normal"]);
    this._addCss(".grd_LF_Gray", "align", obj, ["normal"]);
    this._addCss("Static.sta_LF_menuTitle", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","img::bg_LF_sortcut_BulN.png","","0","0","100","50","true");
    this._addCss("Button.btn_LF_shortcut", "background", obj, ["normal", "selected"]);

    obj = new nexacro.Style_border("1","solid","#c9c9c9ff","");
    this._addCss("Button.btn_LF_shortcut", "border", obj, ["normal", "selected"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Button.btn_LF_shortcut", "color", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_menuN", "color", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_LF_menuBN", "color", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_LF_subMenuN", "color", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss(".grd_LF_Black", "color", obj, ["normal"]);
    this._addCss("Static.sta_LF_userName", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button.btn_LF_shortcut", "cursor", obj, ["normal", "selected"]);

    obj = new nexacro.Style_font("antialias 10 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Button.btn_LF_shortcut", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_menuN", "font", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_LF_menuO", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_menuBN", "font", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_LF_menuBO", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Login_pLNet", "font", obj, ["normal", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f0f0f0");
    this._addCss("Button.btn_LF_shortcut", "gradation", obj, ["normal", "selected"]);

    obj = new nexacro.Style_padding("0 0 0 12");
    this._addCss("Button.btn_LF_shortcut", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_menuN", "padding", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_LF_menuO", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_menuBN", "padding", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_LF_menuBO", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_shadow("outer 0,1 0 #ffffff");
    this._addCss("Button.btn_LF_shortcut", "shadow", obj, ["normal", "selected"]);

    obj = new nexacro.Style_background("@gradation","img::bg_LF_sortcut_BulO.png","","0","0","100","50","true");
    this._addCss("Button.btn_LF_shortcut", "background", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Button.btn_LF_shortcut", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_LF_Login_pLNet", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Static.sta_LF_counter", "color", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #a40f3e 0,100 #8a0c34");
    this._addCss("Button.btn_LF_shortcut", "gradation", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_padding("0 1 0 13");
    this._addCss("Button.btn_LF_shortcut", "padding", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #8a0c34 0,100 #a40f3e");
    this._addCss("Button.btn_LF_shortcut", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_background("@gradation","img::bg_LF_sortcut_BulD.png","","0","0","100","50","true");
    this._addCss("Button.btn_LF_shortcut", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","");
    this._addCss("Button.btn_LF_shortcut", "border", obj, ["disabled"]);
    this._addCss("ImageViewer.img_LF_banner", "border", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fafafa 0,100 #f5f5f5");
    this._addCss("Button.btn_LF_shortcut", "gradation", obj, ["disabled"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_menuN", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#cececeff","");
    this._addCss("Button.btn_LF_menuN", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_menuO", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_menuBN", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_menuBO", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Div.div_LF_subMenuBG", "border", obj, ["normal"]);
    this._addCss("ImageViewer.img_LF_banner", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#d1105f");
    this._addCss("Button.btn_LF_menuN", "color", obj, ["pushed"]);
    this._addCss("Button.btn_LF_menuO", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_menuBN", "color", obj, ["pushed"]);
    this._addCss("Button.btn_LF_menuBO", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#fafafaff","img::bg_LF_menuN.png","","0","0","100","50","true");
    this._addCss("Button.btn_LF_menuBN", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","img::bg_LF_menuO.png","","0","0","100","50","true");
    this._addCss("Button.btn_LF_menuBN", "background", obj, ["pushed"]);
    this._addCss("Button.btn_LF_menuBO", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","img::bg_LF_subMenu_N.png","","0","0","0","50","true");
    this._addCss("Button.btn_LF_subMenuN", "background", obj, ["normal", "selected", "mouseover", "focused"]);

    obj = new nexacro.Style_padding("0 0 0 7");
    this._addCss("Button.btn_LF_subMenuN", "padding", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Button.btn_LF_subMenuO", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","img::bg_LF_subMenu_O.png","","0","0","0","50","true");
    this._addCss("Button.btn_LF_subMenuN", "background", obj, ["pushed"]);
    this._addCss("Button.btn_LF_subMenuO", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("Button.btn_LF_subMenuN", "color", obj, ["pushed"]);
    this._addCss("Button.btn_LF_subMenuO", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss(".grd_LF_red", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_LF_subMenu_D.png","","0","0","0","50","true");
    this._addCss("Button.btn_LF_subMenuN", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","img::ico_LF_operator.png","","0","0","0","50","true");
    this._addCss("Button.btn_LF_Login", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("Button.btn_LF_Login", "color", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_Login_user", "color", obj, ["normal", "selected"]);

    obj = new nexacro.Style_font("antialias 11 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Button.btn_LF_Login", "font", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_LF_Login_user", "font", obj, ["normal", "selected", "disabled"]);
    this._addCss("Static.sta_LF_menuTitle", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 43");
    this._addCss("Button.btn_LF_Login", "padding", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LF_Login_user", "padding", obj, ["normal", "selected"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Button.btn_LF_Login", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_LF_Login_user", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Combo.cmb_LF_class>#comboedit", "color", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_font("antialias underline 11 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Button.btn_LF_Login", "font", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_LF_Login_user", "font", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("","img::ico_LF_user.png","","0","0","0","50","true");
    this._addCss("Button.btn_LF_Login_user", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_Login_pLNet", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#474747ff","");
    this._addCss("Button.btn_LF_Login_pLNet", "border", obj, ["normal", "selected", "mouseover", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #555555 0,100 #383838");
    this._addCss("Button.btn_LF_Login_pLNet", "gradation", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Button.btn_LF_Login_pLNet", "padding", obj, ["normal", "selected"]);
    this._addCss("Combo.cmb_LF_class", "padding", obj, ["normal"]);

    obj = new nexacro.Style_align("lefttext middle");
    this._addCss("Button.btn_LF_Login_pLNet", "imagealign", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_LF_login_pLnet.png')");
    this._addCss("Button.btn_LF_Login_pLNet", "image", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_font("antialias underline 10 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Button.btn_LF_Login_pLNet", "font", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_Login_pLNet", "background", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#333333ff","");
    this._addCss("Button.btn_LF_Login_pLNet", "border", obj, ["pushed"]);

    obj = new nexacro.Style_value("50%");
    this._addCss("Button.btn_LF_Login_pLNet", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_value("23");
    this._addCss("Combo.cmb_LF_class", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Combo.cmb_LF_class", "color", obj, ["normal"]);
    this._addCss("Combo.cmb_LF_class>#comboedit", "color", obj, ["normal"]);
    this._addCss(".grd_LF_Gray", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Combo.cmb_LF_class", "padding", obj, ["readonly"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss("Combo.cmb_LF_class>#comboedit", "font", obj, ["normal"]);
    this._addCss(".grd_LF_Gray", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 4");
    this._addCss("Combo.cmb_LF_class>#comboedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::cmb_LF_DropN.png')");
    this._addCss("Combo.cmb_LF_class>#dropbutton", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::cmb_LF_DropO.png')");
    this._addCss("Combo.cmb_LF_class>#dropbutton", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::cmb_LF_DropD.png')");
    this._addCss("Combo.cmb_LF_class>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Div.div_LF_subMenuBG>#vscrollbar", "decbtnsize", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Div.div_LF_subMenuBG>#hscrollbar", "decbtnsize", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Div.div_LF_subMenuBG>#vscrollbar", "incbtnsize", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Div.div_LF_subMenuBG>#hscrollbar", "incbtnsize", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_value("8");
    this._addCss("Div.div_LF_subMenuBG>#vscrollbar", "scrollbarsize", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Div.div_LF_subMenuBG>#hscrollbar", "scrollbarsize", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss(".grd_LF_red", "color2", obj, ["normal"]);

    obj = new nexacro.Style_font("10 Dotum, Arial");
    this._addCss(".grd_LF_red", "font", obj, ["normal"]);
    this._addCss(".grd_LF_Black", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("#ffffff");
    this._addCss(".grd_LF_red", "selectbackground", obj, ["normal"]);
    this._addCss(".grd_LF_Black", "selectbackground", obj, ["normal"]);
    this._addCss(".grd_LF_Gray", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss(".grd_LF_red", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("10 Dotum, Arial");
    this._addCss(".grd_LF_red", "selectfont", obj, ["normal"]);
    this._addCss(".grd_LF_Black", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss(".grd_LF_Black", "color2", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss(".grd_LF_Black", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss(".grd_LF_Gray", "color2", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 10");
    this._addCss(".grd_LF_Gray", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss(".grd_LF_Gray", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss(".grd_LF_Gray", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d80546ff","");
    this._addCss("ImageViewer.img_LF_banner", "border", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#f7f7f7ff","img::img_WF_PhotoImageD.png","","0","0","50","50","true");
    this._addCss("ImageViewer.img_LF_banner", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("2","solid","#d80546ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Static.sta_LF_menuTitle", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#222222");
    this._addCss("Static.sta_LF_menuTitle", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 13");
    this._addCss("Static.sta_LF_menuTitle", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#797979ff","img::img_LF_operator.png","","0","0","50","50","true");
    this._addCss("Static.sta_LF_operator", "background", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","16","16","true","true","true","true");
    this._addCss("Static.sta_LF_operator", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_LF_user", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_background("#789b38ff","img::img_LF_user.png","","0","0","50","50","true");
    this._addCss("Static.sta_LF_user", "background", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("Static.sta_LF_userName", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 11 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Static.sta_LF_userName", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("#d80546ff","","","0","0","0","0","true");
    this._addCss("Static.sta_LF_counter", "background", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","7","7","true","true","true","true");
    this._addCss("Static.sta_LF_counter", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("8 Arial");
    this._addCss("Static.sta_LF_counter", "font", obj, ["normal"]);

    obj = new nexacro.Style_shadow("outer 0,1 1 #00000066");
    this._addCss("Static.sta_LF_counter", "shadow", obj, ["normal"]);

    obj = null;
    
//[add theme images]
  };
})();
