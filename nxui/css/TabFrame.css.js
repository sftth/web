//CSS=TabFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_AllClose", "background", obj, ["normal", "disabled", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Tab.tab_MDI", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Button.btn_MDI_AllClose", "border", obj, ["normal", "disabled", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Form.frm_MDI", "border", obj, ["normal"]);
    this._addCss("Tab.tab_MDI", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Button.btn_MDI_AllClose", "bordertype", obj, ["normal", "disabled", "selected", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://TabFrame/icon_MDI_AllClose.png')");
    this._addCss("Button.btn_MDI_AllClose", "image", obj, ["normal", "disabled", "selected"]);

    obj = new nexacro.Style_value("URL('theme://TabFrame/icon_MDI_AllClose_O.png')");
    this._addCss("Button.btn_MDI_AllClose", "image", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://TabFrame/tab_MDI_bg.png","repeat-x","0","0","0","0","true");
    this._addCss("Form.frm_MDI", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://TabFrame/tab_MDI_bg_S.png","stretch","5","5","0","0","true");
    this._addCss("Tab.tab_MDI", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Tab.tab_MDI", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("6 3 0 12");
    this._addCss("Tab.tab_MDI", "buttonpadding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_margin("0 0 0 0");
    this._addCss("Tab.tab_MDI", "buttonmargin", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Tab.tab_MDI", "color", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_font("antialias bold 10 LG스마트체,Arial");
    this._addCss("Tab.tab_MDI", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Tab.tab_MDI", "showextrabutton", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://TabFrame/tab_MDI_bg_N.png","stretch","5","5","0","0","true");
    this._addCss("Tab.tab_MDI", "buttonbackground", obj, ["selected"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Tab.tab_MDI", "color", obj, ["selected"]);

    obj = new nexacro.Style_background("#ecececff","","","0","0","0","0","true");
    this._addCss("Tab.tab_MDI", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Tab.tab_MDI", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999ff");
    this._addCss("Tab.tab_MDI", "color", obj, ["disabled"]);

    obj = new nexacro.Style_font("antialias bold 9 LG스마트체,Arial");
    this._addCss("Tab.tab_MDI", "font", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://TabFrame/tab_MDI_SpinupN.png')");
    this._addCss("Tab.tab_MDI>#spinupbutton", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://TabFrame/tab_MDI_SpinupM.png')");
    this._addCss("Tab.tab_MDI>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("50%");
    this._addCss("Tab.tab_MDI>#spinupbutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab>#spindownbutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://TabFrame/tab_MDI_SpindownN.png')");
    this._addCss("Tab.tab_MDI>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://TabFrame/tab_MDI_SpindownM.png')");
    this._addCss("Tab.tab_MDI>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://TabFrame/tab_MDI_Extra.png')");
    this._addCss("Tab.tab_MDI>#extrabutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = null;
    
//[add theme images]
  };
})();
