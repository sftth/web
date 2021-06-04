//CSS=TopFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_TF_menu", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_menuS", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_menuO", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_menu_oper", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_menuS_oper", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_search", "align", obj, ["normal", "selected"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button.btn_TF_menu", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_TF_menuO", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_menu_oper", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_menuS_oper", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_siteMenu", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_TF_Spin_prev", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_TF_Spin_next", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_TF_search", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Grid.grd_TF_subMenu", "background", obj, ["normal"]);
    this._addCss("Grid.grd_TF_subMenu>#body", "background", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap", "background", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ffffff00","","0","none","","","1","solid","#d80546ff","","0","none","","");
    this._addCss("Button.btn_TF_menu", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_menuO", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Button.btn_TF_menu", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_menuS", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_menuO", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_menu_oper", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_menuS_oper", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_popClose", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_search", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Edit.edt_TF_search", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_TF_subMenu", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_TF_subMenu>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_TF_subMenu>#body", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "bordertype", obj, ["normal"]);
    this._addCss("ListBox.lst_TF_searchResult", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Button.btn_TF_menu", "color", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_menuO", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_menu_oper", "color", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_search", "color", obj, ["normal", "selected"]);
    this._addCss("Grid.grd_TF_subMenu", "color", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button.btn_TF_menu", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_menuS", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_menuO", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_menu_oper", "cursor", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_menuS_oper", "cursor", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_search", "cursor", obj, ["normal", "selected"]);
    this._addCss("Grid.grd_TF_subMenu>#body", "cursor", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 13 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Button.btn_TF_menu", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_menuS", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_menuO", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#d80546ff","","","0","0","0","0","true");
    this._addCss("Button.btn_TF_menu", "background", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_TF_menuS", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#d80546ff","","0","none","","","1","solid","#d80546ff","","0","none","","");
    this._addCss("Button.btn_TF_menu", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_TF_menuS", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Button.btn_TF_menu", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_TF_menuS", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Button.btn_TF_menu", "color", obj, ["disabled"]);
    this._addCss("Button.btn_TF_menu_oper", "color", obj, ["disabled"]);
    this._addCss("Button.btn_TF_search", "color", obj, ["disabled"]);
    this._addCss("Edit.edt_TF_search", "color", obj, ["disabled"]);
    this._addCss("ListBox.lst_TF_searchResult", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("2","solid","#ffffff00","","0","none","","","2","solid","#ffffff00","","0","none","","");
    this._addCss("Button.btn_TF_menu_oper", "border", obj, ["normal", "selected"]);

    obj = new nexacro.Style_font("antialias 12 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Button.btn_TF_menu_oper", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_menuS_oper", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_border("2","solid","#ffffff00","","0","none","","","2","solid","#d80546ff","","0","none","","");
    this._addCss("Button.btn_TF_menu_oper", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_TF_menuS_oper", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("Button.btn_TF_menu_oper", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_TF_menuS_oper", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Button.btn_TF_siteMenu", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_popClose", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Spin_prev", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Spin_next", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_search", "border", obj, ["normal", "selected"]);
    this._addCss("Grid.grd_TF_subMenu", "border", obj, ["normal"]);
    this._addCss("Grid.grd_TF_subMenu>#head", "border", obj, ["normal"]);
    this._addCss("Grid.grd_TF_subMenu>#body", "border", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap", "border", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#head", "border", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "border", obj, ["normal"]);
    this._addCss("Static.sta_TF_ci", "border", obj, ["normal"]);
    this._addCss("Static.sta_TF_ci_partner", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("Button.btn_TF_siteMenu", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_Spin_prev", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_Spin_next", "bordertype", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_TF_menuN.png')");
    this._addCss("Button.btn_TF_siteMenu", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_TF_siteMenu", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_popClose", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_Spin_prev", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_Spin_next", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_TF_search", "imagealign", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_TF_menuO.png')");
    this._addCss("Button.btn_TF_siteMenu", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#e6e6e6ff","","","0","0","0","0","true");
    this._addCss("Button.btn_TF_siteMenu", "background", obj, ["pushed"]);
    this._addCss("Button.btn_TF_Spin_prev", "background", obj, ["pushed"]);
    this._addCss("Button.btn_TF_Spin_next", "background", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('img::img_TF_menuD.png')");
    this._addCss("Button.btn_TF_siteMenu", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("Button.btn_TF_popClose", "background", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_TF_popClose.png')");
    this._addCss("Button.btn_TF_popClose", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#000000ff","","","0","0","0","0","true");
    this._addCss("Button.btn_TF_popClose", "background", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("50");
    this._addCss("Button.btn_TF_popClose", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_TF_Spin_prev_N.png')");
    this._addCss("Button.btn_TF_Spin_prev", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_TF_Spin_prev_O.png')");
    this._addCss("Button.btn_TF_Spin_prev", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_TF_Spin_prev_D.png')");
    this._addCss("Button.btn_TF_Spin_prev", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_TF_Spin_next_N.png')");
    this._addCss("Button.btn_TF_Spin_next", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_TF_Spin_next_O.png')");
    this._addCss("Button.btn_TF_Spin_next", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_TF_Spin_next_D.png')");
    this._addCss("Button.btn_TF_Spin_next", "image", obj, ["disabled"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss("Button.btn_TF_search", "font", obj, ["normal", "selected"]);
    this._addCss("Edit.edt_TF_search", "font", obj, ["normal"]);
    this._addCss("ListBox.lst_TF_searchResult", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("Button.btn_TF_search", "padding", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_TF_searchN.png')");
    this._addCss("Button.btn_TF_search", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Button.btn_TF_search", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Edit.edt_TF_search", "color", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("ListBox.lst_TF_searchResult", "color", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_TF_searchO.png')");
    this._addCss("Button.btn_TF_search", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_TF_searchD.png')");
    this._addCss("Button.btn_TF_search", "image", obj, ["disabled"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Edit.edt_TF_search", "align", obj, ["normal"]);
    this._addCss("ListBox.lst_TF_searchResult", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Edit.edt_TF_search", "background", obj, ["normal"]);
    this._addCss("ListBox.lst_TF_searchResult", "background", obj, ["normal"]);
    this._addCss("Static.sta_TF_bg", "background", obj, ["normal"]);
    this._addCss("Static.sta_TF_bg_oper", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#8e908fff","");
    this._addCss("Edit.edt_TF_search", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Edit.edt_TF_search", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#9a9b9d");
    this._addCss("Edit.edt_TF_search", "displaynulltextcolor", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 38 0 14");
    this._addCss("Edit.edt_TF_search", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#d80546");
    this._addCss("Edit.edt_TF_search", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Edit.edt_TF_search", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#faf0d2ff","","","0","0","0","0","true");
    this._addCss("Edit.edt_TF_search", "background", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("1","solid","#000000ff","");
    this._addCss("Edit.edt_TF_search", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("ListBox.lst_TF_searchResult", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("Edit.edt_TF_search", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","");
    this._addCss("Edit.edt_TF_search", "border", obj, ["disabled"]);
    this._addCss("ListBox.lst_TF_searchResult", "border", obj, ["disabled"]);

    obj = new nexacro.Style_background("#e9ecf0ff","","","0","0","0","0","true");
    this._addCss("Edit.edt_TF_search", "background", obj, ["readonly"]);

    obj = new nexacro.Style_border("1","solid","#d2d2d2ff","");
    this._addCss("Edit.edt_TF_search", "border", obj, ["readonly"]);

    obj = new nexacro.Style_background("","img::bg_TF_subMenu_bullet.png","","0","0","0","50","true");
    this._addCss("Grid.grd_TF_subMenu>#head", "background", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#head", "background", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Grid.grd_TF_subMenu>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#head", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_TF_subMenu>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_TF_subMenu>#body", "cellbackground", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_TF_siteMap>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "cellbackground", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_TF_subMenu>#head", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_TF_subMenu>#body", "cellbackground2", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_TF_siteMap>#head", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "cellbackground2", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid.grd_TF_subMenu>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_TF_subMenu>#body", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid.grd_TF_subMenu>#head", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_TF_subMenu>#body", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#head", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 13 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Grid.grd_TF_subMenu>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#head", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 10");
    this._addCss("Grid.grd_TF_subMenu>#head", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#head", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_TF_subMenu>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_TF_subMenu>#body", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_TF_subMenu>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_TF_subMenu>#body", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid.grd_TF_subMenu>#body", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 10 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Grid.grd_TF_subMenu>#body", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 10");
    this._addCss("Grid.grd_TF_subMenu>#body", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("transparent");
    this._addCss("Grid.grd_TF_subMenu>#body", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid.grd_TF_subMenu>#body", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 10 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Grid.grd_TF_subMenu>#body", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("Grid.grd_TF_subMenu>#body", "cellcolor", obj, ["mouseover"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("Grid.grd_TF_subMenu>#body", "cellcolor2", obj, ["mouseover"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "cellcolor2", obj, ["mouseover"]);

    obj = new nexacro.Style_font("antialias underline 10 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Grid.grd_TF_subMenu>#body", "cellfont", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("Grid.grd_TF_subMenu>#body", "selectcolor", obj, ["mouseover"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "selectcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_font("antialias underline 10 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Grid.grd_TF_subMenu>#body", "selectfont", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Grid.grd_TF_subMenu>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "cellcolor", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Grid.grd_TF_subMenu>#body", "cellcolor2", obj, ["disabled"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "cellcolor2", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Grid.grd_TF_subMenu>#body", "selectcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_TF_siteMap>#body", "selectcolor", obj, ["disabled"]);

    obj = new nexacro.Style_font("antialias 11 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Grid.grd_TF_siteMap>#body", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 11 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Grid.grd_TF_siteMap>#body", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias underline 11 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Grid.grd_TF_siteMap>#body", "cellfont", obj, ["mouseover"]);

    obj = new nexacro.Style_font("antialias underline 11 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Grid.grd_TF_siteMap>#body", "selectfont", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("ListBox.lst_TF_searchResult", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("ListBox.lst_TF_searchResult", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("ListBox.lst_TF_searchResult", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_value("24");
    this._addCss("ListBox.lst_TF_searchResult", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 10 0 11");
    this._addCss("ListBox.lst_TF_searchResult", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("ListBox.lst_TF_searchResult", "itembackground", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("ListBox.lst_TF_searchResult", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#d80546ff","","0","none","","");
    this._addCss("Static.sta_TF_bg", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","","0","none","#808080ff","","1","solid","#cececeff","","0","none","#808080ff","");
    this._addCss("Static.sta_TF_bg_oper", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_TF_ci.png","","0","0","0","50","true");
    this._addCss("Static.sta_TF_ci", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_TF_ci_partner.png","","0","0","0","50","true");
    this._addCss("Static.sta_TF_ci_partner", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_TF_menuPop.png","stretch","9","9","0","0","true");
    this._addCss("Static.sta_TF_menuPop", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_TF_menuPop2.png","stretch","6","9","0","0","true");
    this._addCss("Static.sta_TF_menuPop2", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_TF_submenu.png","","0","0","0","0","true");
    this._addCss("Static.sta_TF_submenuBG", "background", obj, ["normal"]);

    obj = null;
    
//[add theme images]
  };
})();
