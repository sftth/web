//CSS=MainFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_align("left middle");
    this._addCss("Button.btn_Intro", "align", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Static.sta_Intro_Tit", "align", obj, ["normal"]);
    this._addCss("Button.btn_Login_ForgotPW", "align", obj, ["normal"]);
    this._addCss("Button.btn_Login_ChangePW", "align", obj, ["normal"]);
    this._addCss("Static.sta_MF_Tit", "align", obj, ["normal"]);
    this._addCss("Static.sta_MF_Title", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button.btn_Intro", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Static.sta_Intro_Tit", "background", obj, ["normal"]);
    this._addCss("Button.btn_Login_Transparent", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MF_Title", "background", obj, ["normal"]);
    this._addCss("Tab.tab_MF", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid.grd_MF", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#head", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#body", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Button.btn_Intro", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Static.sta_Intro_Tit", "border", obj, ["normal"]);
    this._addCss("Button.btn_Login_ForgotPW", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_Login_ChangePW", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_Login_Transparent", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_More", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Static.sta_MF_Tit", "border", obj, ["normal"]);
    this._addCss("Static.sta_MF_Title", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#head", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#body", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#a51c38");
    this._addCss("Button.btn_Intro", "color", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_font("antialias 19 LG스마트체,Arial");
    this._addCss("Button.btn_Intro", "font", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Button.btn_Intro", "padding", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Static.sta_Intro", "padding", obj, ["normal", "focused", "selected", "pushed", "mouseover", "disabled"]);
    this._addCss("Static.sta_Intro2", "padding", obj, ["normal", "focused", "selected", "pushed", "mouseover", "disabled"]);
    this._addCss("Static.sta_Intro_Tit", "padding", obj, ["normal"]);
    this._addCss("Button.btn_MF_More", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Static.sta_MF_Tit", "padding", obj, ["normal"]);
    this._addCss("Static.sta_MF_Title", "padding", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Static.sta_Intro", "align", obj, ["normal", "focused", "selected", "pushed", "mouseover", "disabled"]);
    this._addCss("Static.sta_Intro2", "align", obj, ["normal", "focused", "selected", "pushed", "mouseover", "disabled"]);
    this._addCss("Static.sta_Login_Copyright", "align", obj, ["normal"]);
    this._addCss("Button.btn_MF_More", "align", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("#000000cc","","","0","0","0","0","true");
    this._addCss("Static.sta_Intro", "background", obj, ["normal", "focused", "selected", "pushed"]);
    this._addCss("Static.sta_Intro2", "background", obj, ["normal", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_border("3","solid","#c00c3fff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Static.sta_Intro", "border", obj, ["normal", "focused", "selected", "pushed", "mouseover", "disabled"]);
    this._addCss("Static.sta_Intro2", "border", obj, ["normal", "focused", "selected", "pushed", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Static.sta_Intro", "color", obj, ["normal", "focused", "selected", "pushed", "mouseover", "disabled"]);
    this._addCss("Static.sta_Intro2", "color", obj, ["normal", "focused", "selected", "pushed", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Tit", "color", obj, ["normal"]);
    this._addCss("Static.sta_MF_Title", "color", obj, ["normal"]);
    this._addCss("Grid.grd_MF", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Static.sta_Intro", "cursor", obj, ["normal", "focused", "selected", "pushed", "mouseover", "disabled"]);
    this._addCss("Static.sta_Intro2", "cursor", obj, ["normal", "focused", "selected", "pushed", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("antialias 23 LG스마트체,Arial");
    this._addCss("Static.sta_Intro", "font", obj, ["normal", "focused", "selected", "pushed", "mouseover", "disabled"]);
    this._addCss("Static.sta_Intro2", "font", obj, ["normal", "focused", "selected", "pushed", "mouseover", "disabled"]);

    obj = new nexacro.Style_shadow("outer 0,5 5 #00000066");
    this._addCss("Static.sta_Intro", "shadow", obj, ["normal", "focused", "selected", "pushed", "mouseover", "disabled"]);
    this._addCss("Static.sta_Intro2", "shadow", obj, ["normal", "focused", "selected", "pushed", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#c00c3fcc","","","0","0","0","0","true");
    this._addCss("Static.sta_Intro", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#00000099","","","0","0","0","0","true");
    this._addCss("Static.sta_Intro", "background", obj, ["disabled"]);
    this._addCss("Static.sta_Intro2", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#464646cc","","","0","0","0","0","true");
    this._addCss("Static.sta_Intro2", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#c00c3f");
    this._addCss("Static.sta_Intro_Tit", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 68 LG스마트체,Arial");
    this._addCss("Static.sta_Intro_Tit", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://MainFrame/bullet_Login_Btn.png","","0","0","0","50","true");
    this._addCss("Button.btn_Login_ForgotPW", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_Login_ChangePW", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_color("#c3c1c1ff");
    this._addCss("Button.btn_Login_ForgotPW", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("CheckBox.chk_Login", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("10 LG스마트체,Arial Narrow");
    this._addCss("Button.btn_Login_ForgotPW", "font", obj, ["normal"]);
    this._addCss("Button.btn_Login_ChangePW", "font", obj, ["normal"]);
    this._addCss("Button.btn_Login_Transparent", "font", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 13");
    this._addCss("Button.btn_Login_ForgotPW", "padding", obj, ["normal"]);
    this._addCss("Button.btn_Login_ChangePW", "padding", obj, ["normal"]);

    obj = new nexacro.Style_font("underline 10 LG스마트체,Arial Narrow");
    this._addCss("Button.btn_Login_ForgotPW", "font", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_Login_ChangePW", "font", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_Login_Transparent", "font", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_color("#999999ff");
    this._addCss("Button.btn_Login_ForgotPW", "color", obj, ["disabled"]);
    this._addCss("Button.btn_Login_ChangePW", "color", obj, ["disabled"]);

    obj = new nexacro.Style_color("#fcafafff");
    this._addCss("Button.btn_Login_ChangePW", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://MainFrame/btn_Login_Bg.png","","0","0","0","0","true");
    this._addCss("Button.btn_Login", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#0d0d0dff","");
    this._addCss("Button.btn_Login", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("Button.btn_Login", "color", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Button.btn_Login_Transparent", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_font("antialias bold 9 LG스마트체,Arial");
    this._addCss("Button.btn_Login", "font", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_font("underline antialias bold 9 LG스마트체,Arial");
    this._addCss("Button.btn_Login", "font", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_color("#ffffff50");
    this._addCss("Button.btn_Login", "color", obj, ["disabled"]);
    this._addCss("Button.btn_Login_Transparent", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("1 solid #c7c7c7ff");
    this._addCss("CheckBox.chk_Login", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("14");
    this._addCss("CheckBox.chk_Login", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_font("9 LG스마트체,Arial");
    this._addCss("CheckBox.chk_Login", "font", obj, ["normal"]);
    this._addCss("Edit.edt_Login_ID", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit.edt_Login_PW", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 6");
    this._addCss("CheckBox.chk_Login", "textpadding", obj, ["normal"]);

    obj = new nexacro.Style_font("underline 9 LG스마트체,Arial");
    this._addCss("CheckBox.chk_Login", "font", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("50%");
    this._addCss("CheckBox.chk_Login", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("#faf1f4ff","theme://MainFrame/icon_Login_ID.png","","0","0","0","50","true");
    this._addCss("Edit.edt_Login_ID", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#bdbdbdff","");
    this._addCss("Edit.edt_Login_ID", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit.edt_Login_PW", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Edit.edt_Login_ID", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit.edt_Login_PW", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("0 10 0 34");
    this._addCss("Edit.edt_Login_ID", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit.edt_Login_PW", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#f7f7f7ff","theme://MainFrame/icon_Login_PW.png","","0","0","0","50","true");
    this._addCss("Edit.edt_Login_PW", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://Mainframe/img_Login_Logo.png","","0","0","0","0","true");
    this._addCss("Static.sta_Login_Logo", "background", obj, ["normal"]);

    obj = new nexacro.Style_font("9 LG스마트체,Arial Narrow");
    this._addCss("Static.sta_Login_Copyright", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#5b6872ff");
    this._addCss("Static.sta_Login_Copyright", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#1e1e1eff","","","0","0","0","0","true");
    this._addCss("Static.sta_Login_ChkArea", "background", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("Static.sta_Login_ChkArea", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("69%");
    this._addCss("Static.sta_Login_ChkArea", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://MainFrame/img_Login_Bg.png","","0","0","0","0","true");
    this._addCss("Static.sta_Login_Bg", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#586c97ff","");
    this._addCss("Static.sta_Login_Bg", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://MainFrame/img_Login_InputAreaBg.png","","0","0","0","0","true");
    this._addCss("Static.sta_Login_InputAreaBg", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://MainFrame/img_Login_Title.png","","0","0","0","0","true");
    this._addCss("Static.sta_Login_Title", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://MainFrame/icon_CF_Title.png","","0","0","0","50","true");
    this._addCss("Static.sta_CF_Title", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("antialias bold 12 LG스마트체,Arial");
    this._addCss("Static.sta_CF_Title", "font", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 25");
    this._addCss("Static.sta_CF_Title", "padding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://MainFrame/icon_MF_More.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_More", "background", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Button.btn_MF_More", "bordertype", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_MF", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#body", "bordertype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#26333dff");
    this._addCss("Button.btn_MF_More", "color", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Tab.tab_MF", "color", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial Narrow");
    this._addCss("Button.btn_MF_More", "font", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://MainFrame/icon_MF_More_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_More", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://MainFrame/img_MF_Title.png","","0","0","0","0","true");
    this._addCss("Static.sta_MF_Tit", "background", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 45 LG스마트체,Arial");
    this._addCss("Static.sta_MF_Tit", "font", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 14 LG스마트체,Arial");
    this._addCss("Static.sta_MF_Title", "font", obj, ["normal"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Static.sta_MF_GridTxt", "align", obj, ["normal"]);

    obj = new nexacro.Style_color("#57595cff");
    this._addCss("Static.sta_MF_GridTxt", "color", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c4c8cbff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Tab.tab_MF", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#f0f1f3ff","","","0","0","0","0","true");
    this._addCss("Tab.tab_MF", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_padding("9 51 9 51");
    this._addCss("Tab.tab_MF", "buttonpadding", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_font("antialias 11 LG스마트체,Arial");
    this._addCss("Tab.tab_MF", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://MainFrame/tab_MF_BgS.png","stretch","5","5","0","0","true");
    this._addCss("Tab.tab_MF", "buttonbackground", obj, ["selected"]);

    obj = new nexacro.Style_value("1 solid #ffffff00");
    this._addCss("Tab.tab_MF", "buttonborder", obj, ["selected"]);

    obj = new nexacro.Style_color("#94243aff");
    this._addCss("Tab.tab_MF", "color", obj, ["selected"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_MF", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial");
    this._addCss("Grid.grd_MF", "font", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid.grd_MF", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#head", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#body", "gradation", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid.grd_MF", "line", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_MF", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Grid.grd_MF", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid.grd_MF", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#body", "selectline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_MF", "selectpointimagez", obj, ["normal"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("Grid.grd_MF", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_TreeClose.png')");
    this._addCss("Grid.grd_MF", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_MF", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_MF", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_TreeItem.png')");
    this._addCss("Grid.grd_MF", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_MF", "treeitemmargin", obj, ["normal"]);

    obj = new nexacro.Style_line("1","dotted","#929aa5ff","");
    this._addCss("Grid.grd_MF", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_TreeOpen.png')");
    this._addCss("Grid.grd_MF", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid.grd_MF>#head", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_MF>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#body", "cellbackground", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_MF>#head", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#body", "cellbackground2", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid.grd_MF>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#body", "cellcolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid.grd_MF>#head", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#body", "cellcolor2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("antialias bold 9 LG스마트체,Arial");
    this._addCss("Grid.grd_MF>#head", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid.grd_MF>#head", "cellgradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#body", "cellgradation", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid.grd_MF>#head", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#body", "cellgradation2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_MF>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#body", "cellline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_MF>#head", "celllinespace", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#body", "celllinespace", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Grid.grd_MF>#head", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#body", "cellpadding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_MF>#head", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("Grid.grd_MF>#head", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Grid.grd_MF>#head", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid.grd_MF>#head", "selectgradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF>#body", "selectgradation", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("3");
    this._addCss("Grid.grd_MF>#head", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Grid.grd_MF>#body", "cellalign", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial");
    this._addCss("Grid.grd_MF>#body", "cellfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("transparent");
    this._addCss("Grid.grd_MF>#body", "selectbackground", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid.grd_MF>#body", "selectcolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("antialias underline bold 9 LG스마트체,Arial");
    this._addCss("Grid.grd_MF>#body", "selectfont", obj, ["normal", "disabled"]);

    obj = null;
    
//[add theme images]
  };
})();
