//CSS=MainFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_MF_bannerTxt", "align", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MF_More", "align", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MF_bottomMore", "align", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Static.sta_MF_module_check", "align", obj, ["normal"]);
    this._addCss("Static.sta_MF_module_checkS", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("#00b1acff","","","0","0","0","0","true");
    this._addCss("Button.btn_MF_bannerTxt", "background", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Button.btn_MF_bannerTxt", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MF_More", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Div.div_MF_module", "border", obj, ["normal", "disabled"]);
    this._addCss("Tab.tab_MF_module", "border", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_MF_notice", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#head", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "border", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_moduleBar_pink", "border", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduleBar_green", "border", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduleBar_gray", "border", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_category", "border", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_courseName", "border", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_subTxt", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Button.btn_MF_bannerTxt", "bordertype", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MF_More", "bordertype", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MF_bottomMore", "bordertype", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Div.div_MF_module", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("ImageViewer.img_MF_loading", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Tab.tab_MF_module", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_MF_notice", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_banner3_1", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_MF_banner3_2", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_MF_banner3_3", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduleBar_pink", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduleBar_green", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduleBar_gray", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_MF_module_check", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_MF_module_checkS", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_category", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_courseName", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_subTxt", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Button.btn_MF_bannerTxt", "color", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MF_bottomMore", "color", obj, ["mouseover", "pushed"]);
    this._addCss("ImageViewer.img_MF_loading", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_MF_moduleBar_pink", "color", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduleBar_green", "color", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduleBar_gray", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 10 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Button.btn_MF_bannerTxt", "font", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_More", "font", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MF_moduleBar_pink", "font", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduleBar_green", "font", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduleBar_gray", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_MF_bannerDetail.png')");
    this._addCss("Button.btn_MF_bannerTxt", "image", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_align("righttext middle");
    this._addCss("Button.btn_MF_bannerTxt", "imagealign", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_More", "imagealign", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_bottomMore", "imagealign", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Button.btn_MF_bannerTxt", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MF_More", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MF_bottomMore", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Static.sta_MF_module_check", "padding", obj, ["normal"]);
    this._addCss("Static.sta_MF_module_checkS", "padding", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_category", "padding", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_courseName", "padding", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_subTxt", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#009994ff","","","0","0","0","0","true");
    this._addCss("Button.btn_MF_bannerTxt", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_font("antialias underline 10 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Button.btn_MF_bannerTxt", "font", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_MF_More", "font", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button.btn_MF_More", "background", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_notice", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#head", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "background", obj, ["normal", "disabled"]);
    this._addCss(".grdBtn_lineRed", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss(".grd_MF_date", "background", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_category", "background", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_courseName", "background", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_subTxt", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Button.btn_MF_More", "color", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Tab.tab_MF_module", "color", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Static.sta_MF_banner3_1", "color", obj, ["normal"]);
    this._addCss("Static.sta_MF_banner3_2", "color", obj, ["normal"]);
    this._addCss("Static.sta_MF_banner3_3", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_MF_more.png')");
    this._addCss("Button.btn_MF_More", "image", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Button.btn_MF_bottomMore", "background", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MF_module_checkS", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e1e1e1ff","");
    this._addCss("Button.btn_MF_bottomMore", "border", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Button.btn_MF_bottomMore", "color", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_font("antialias 11 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Button.btn_MF_bottomMore", "font", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Static.sta_MF_banner3_1", "font", obj, ["normal"]);
    this._addCss("Static.sta_MF_banner3_2", "font", obj, ["normal"]);
    this._addCss("Static.sta_MF_banner3_3", "font", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_courseName", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_MF_bottomMore_N.png')");
    this._addCss("Button.btn_MF_bottomMore", "image", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#adadadff","","","0","0","0","0","true");
    this._addCss("Button.btn_MF_bottomMore", "background", obj, ["mouseover", "pushed"]);
    this._addCss("ImageViewer.img_MF_loading", "background", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#adadadff","");
    this._addCss("Button.btn_MF_bottomMore", "border", obj, ["mouseover", "pushed"]);
    this._addCss("ImageViewer.img_MF_loading", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_MF_bottomMore_O.png')");
    this._addCss("Button.btn_MF_bottomMore", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("#ffffffff","img::bg_MF_module.png","stretch","5","5","0","0","true");
    this._addCss("Div.div_MF_module", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","img::bg_MF_tabModuleBG.png","stretch","10","42","0","0","true");
    this._addCss("Tab.tab_MF_module", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("","img::bg_MF_tabModule.png","stretch","10","10","0","0","true");
    this._addCss("Tab.tab_MF_module", "buttonbackground", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Tab.tab_MF_module", "buttonborder", obj, ["normal", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Tab.tab_MF_module", "buttonbordertype", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("8 20 6 20");
    this._addCss("Tab.tab_MF_module", "buttonpadding", obj, ["normal", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_margin("0 -1 0 0");
    this._addCss("Tab.tab_MF_module", "buttonmargin", obj, ["normal", "focused"]);

    obj = new nexacro.Style_font("antialias 11 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Tab.tab_MF_module", "font", obj, ["normal", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_value("false");
    this._addCss("Tab.tab_MF_module", "showextrabutton", obj, ["normal", "focused"]);

    obj = new nexacro.Style_font("antialias underline 11 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("Tab.tab_MF_module", "font", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","img::bg_MF_tabModule_S.png","stretch","10","10","0","0","true");
    this._addCss("Tab.tab_MF_module", "buttonbackground", obj, ["selected", "pushed"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Tab.tab_MF_module", "color", obj, ["selected", "pushed"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Tab.tab_MF_module", "color", obj, ["disabled"]);

    obj = new nexacro.Style_color("#222222");
    this._addCss("Grid.grd_MF_notice", "color", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_courseName", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_MF_notice", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial");
    this._addCss("Grid.grd_MF_notice", "font", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid.grd_MF_notice", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#head", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "gradation", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid.grd_MF_notice", "line", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_MF_notice", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Grid.grd_MF_notice", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid.grd_MF_notice", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#head", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid.grd_MF_notice>#head", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_MF_notice>#head", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_MF_notice>#head", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#222222");
    this._addCss("Grid.grd_MF_notice>#head", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#222222");
    this._addCss("Grid.grd_MF_notice>#head", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 14 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Grid.grd_MF_notice>#head", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid.grd_MF_notice>#head", "cellgradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "cellgradation", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid.grd_MF_notice>#head", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "cellgradation2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_MF_notice>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "cellline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_MF_notice>#head", "celllinespace", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "celllinespace", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Grid.grd_MF_notice>#head", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_MF_notice>#head", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("Grid.grd_MF_notice>#head", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Grid.grd_MF_notice>#head", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid.grd_MF_notice>#head", "selectgradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "selectgradation", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("3");
    this._addCss("Grid.grd_MF_notice>#head", "linespace", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_subTxt", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Grid.grd_MF_notice>#body", "cellalign", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","img::bg_MF_noticeBul.png","","0","0","0","50","true");
    this._addCss("Grid.grd_MF_notice>#body", "cellbackground", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_background("","img::bg_MF_noticeBul.png","","0","0","0","50","true");
    this._addCss("Grid.grd_MF_notice>#body", "cellbackground2", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid.grd_MF_notice>#body", "cellcolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid.grd_MF_notice>#body", "cellcolor2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Grid.grd_MF_notice>#body", "cellfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 10");
    this._addCss("Grid.grd_MF_notice>#body", "cellpadding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("transparent URL('img::bg_MF_noticeBul.png') left middle");
    this._addCss("Grid.grd_MF_notice>#body", "selectbackground", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid.grd_MF_notice>#body", "selectcolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Grid.grd_MF_notice>#body", "selectfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_MF_notice>#body", "selectline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid.grd_MF_notice>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid.grd_MF_notice>#body", "cellcolor2", obj, ["mouseover"]);

    obj = new nexacro.Style_font("antialias underline 9 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Grid.grd_MF_notice>#body", "cellfont", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid.grd_MF_notice>#body", "selectcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_font("antialias underline 9 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Grid.grd_MF_notice>#body", "selectfont", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss(".grdBtn_lineRed", "background2", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss(".grd_MF_date", "background2", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss(".grdBtn_lineRed", "controlalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","img::bg_MF_studyRoom.png","","0","0","100","50","true");
    this._addCss(".grdBtn_lineRed", "controlbackground", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss(".grdBtn_lineRed", "controlbordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#d6576eff","");
    this._addCss(".grdBtn_lineRed", "controlborder", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_color("#d6576e");
    this._addCss(".grdBtn_lineRed", "controlcolor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체,Dotum, Arial");
    this._addCss(".grdBtn_lineRed", "controlfont", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_padding("3 10 3 5");
    this._addCss(".grdBtn_lineRed", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("transparent");
    this._addCss(".grdBtn_lineRed", "selectbackground", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss(".grd_MF_date", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss(".grd_MF_date", "color", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_category", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss(".grd_MF_date", "color2", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss(".grd_MF_date", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss(".grd_MF_date", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss(".grd_MF_date", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Static.sta_MF_banner3_1", "align", obj, ["normal"]);
    this._addCss("Static.sta_MF_banner3_2", "align", obj, ["normal"]);
    this._addCss("Static.sta_MF_banner3_3", "align", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduleBar_pink", "align", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduleBar_green", "align", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduleBar_gray", "align", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_category", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","img::banner_main_3_1.png","","0","0","0","50","true");
    this._addCss("Static.sta_MF_banner3_1", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d6d6d4ff","");
    this._addCss("Static.sta_MF_banner3_1", "border", obj, ["normal"]);
    this._addCss("Static.sta_MF_banner3_2", "border", obj, ["normal"]);
    this._addCss("Static.sta_MF_banner3_3", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Static.sta_MF_banner3_1", "cursor", obj, ["normal"]);
    this._addCss("Static.sta_MF_banner3_2", "cursor", obj, ["normal"]);
    this._addCss("Static.sta_MF_banner3_3", "cursor", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_courseName", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 74");
    this._addCss("Static.sta_MF_banner3_1", "padding", obj, ["normal"]);
    this._addCss("Static.sta_MF_banner3_2", "padding", obj, ["normal"]);
    this._addCss("Static.sta_MF_banner3_3", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","img::banner_main_3_2.png","","0","0","0","50","true");
    this._addCss("Static.sta_MF_banner3_2", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","img::banner_main_3_3.png","","0","0","0","50","true");
    this._addCss("Static.sta_MF_banner3_3", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#d7156cf2","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_moduleBar_pink", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 10");
    this._addCss("Static.sta_MF_moduleBar_pink", "padding", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduleBar_green", "padding", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduleBar_gray", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#00af9df2","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_moduleBar_green", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#6c6f70f2","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_moduleBar_gray", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_module_check", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ccccccff","");
    this._addCss("Static.sta_MF_module_check", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Static.sta_MF_module_check", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Static.sta_MF_module_check", "font", obj, ["normal"]);
    this._addCss("Static.sta_MF_module_checkS", "font", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_category", "font", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_subTxt", "font", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d80546ff","");
    this._addCss("Static.sta_MF_module_checkS", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("Static.sta_MF_module_checkS", "color", obj, ["normal"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("Static.sta_MF_moduler_courseName", "align", obj, ["normal"]);
    this._addCss("Static.sta_MF_moduler_subTxt", "align", obj, ["normal"]);

    obj = new nexacro.Style_value("2");
    this._addCss("Static.sta_MF_moduler_courseName", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias underline 11 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("Static.sta_MF_moduler_courseName", "font", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#888888");
    this._addCss("Static.sta_MF_moduler_subTxt", "color", obj, ["normal"]);

    obj = null;
    
//[add theme images]
  };
})();
