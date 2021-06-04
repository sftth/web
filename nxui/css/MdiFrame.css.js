//CSS=MdiFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_MDI_home", "align", obj, ["normal", "selected"]);
    this._addCss("Button.btn_MDI_homeS", "align", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","img::bg_MDI_tabBtn_N.png","","0","0","100","50","true");
    this._addCss("Button.btn_MDI_home", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Button.btn_MDI_home", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_MDI_pagelist", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_allClose", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_prev", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_next", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Tab.tab_MDI", "border", obj, ["normal", "focused"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "border", obj, ["normal"]);
    this._addCss("Tab.tab_MDI>#spinupbutton", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI>#spindownbutton", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI_D", "border", obj, ["normal", "focused"]);
    this._addCss("Tab.tab_MDI_D>#spinupbutton", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI_D>#spindownbutton", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Button.btn_MDI_home", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_MDI_homeS", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Grid.grd_MDI_pageList", "bordertype", obj, ["normal"]);
    this._addCss("Tab.tab_MDI", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "bordertype", obj, ["normal"]);
    this._addCss("Tab.tab_MDI>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI_D", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Tab.tab_MDI_D>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI_D>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Static.sta_MDI_bg", "bordertype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Button.btn_MDI_home", "color", obj, ["normal", "selected"]);
    this._addCss("Tab.tab_MDI", "color", obj, ["normal", "focused"]);
    this._addCss("Tab.tab_MDI_D", "color", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss("Button.btn_MDI_home", "font", obj, ["normal", "selected"]);
    this._addCss("Button.btn_MDI_homeS", "font", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Tab.tab_MDI", "font", obj, ["normal", "focused", "selected"]);
    this._addCss("Tab.tab_MDI_D", "font", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Button.btn_MDI_home", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Tab.tab_MDI", "color", obj, ["mouseover", "pushed"]);
    this._addCss("Tab.tab_MDI_D", "color", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_font("underline 9 Dotum, Arial");
    this._addCss("Button.btn_MDI_home", "font", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Tab.tab_MDI", "font", obj, ["mouseover", "pushed"]);
    this._addCss("Tab.tab_MDI_D", "font", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Button.btn_MDI_home", "color", obj, ["disabled"]);
    this._addCss("Tab.tab_MDI", "color", obj, ["disabled"]);
    this._addCss("Tab.tab_MDI_D", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_homeS", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Grid.grd_MDI_pageList", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#dbdbdbff","","1","solid","#dbdbdbff","","0","none","","");
    this._addCss("Button.btn_MDI_homeS", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Button.btn_MDI_homeS", "color", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Tab.tab_MDI", "color", obj, ["selected"]);

    obj = new nexacro.Style_padding("1 0 0 1");
    this._addCss("Button.btn_MDI_homeS", "padding", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_pagelist", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_allClose", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_prev", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_next", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);
    this._addCss("Tab.tab_MDI", "background", obj, ["normal", "focused"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "background", obj, ["normal"]);
    this._addCss("Tab.tab_MDI>#spinupbutton", "background", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI>#spindownbutton", "background", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tabpage.tab_MDI", "background", obj, ["normal"]);
    this._addCss("Tab.tab_MDI_D", "background", obj, ["normal", "focused"]);
    this._addCss("Tab.tab_MDI_D>#spinupbutton", "background", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI_D>#spindownbutton", "background", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("Button.btn_MDI_pagelist", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_MDI_allClose", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_MDI_prev", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_MDI_next", "bordertype", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_MDI_pagelist_N.png')");
    this._addCss("Button.btn_MDI_pagelist", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_MDI_pagelist", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_MDI_allClose", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_MDI_prev", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Button.btn_MDI_next", "imagealign", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_MDI_pagelist_O.png')");
    this._addCss("Button.btn_MDI_pagelist", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#e6e6e6ff","","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_pagelist", "background", obj, ["pushed"]);
    this._addCss("Button.btn_MDI_allClose", "background", obj, ["pushed"]);
    this._addCss("Button.btn_MDI_prev", "background", obj, ["pushed"]);
    this._addCss("Button.btn_MDI_next", "background", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('img::img_MDI_pagelist_D.png')");
    this._addCss("Button.btn_MDI_pagelist", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_MDI_allClose_N.png')");
    this._addCss("Button.btn_MDI_allClose", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_MDI_allClose_O.png')");
    this._addCss("Button.btn_MDI_allClose", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_MDI_allClose_D.png')");
    this._addCss("Button.btn_MDI_allClose", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_MDI_prev_N.png')");
    this._addCss("Button.btn_MDI_prev", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_MDI_prev_O.png')");
    this._addCss("Button.btn_MDI_prev", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_MDI_prev_D.png')");
    this._addCss("Button.btn_MDI_prev", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_MDI_next_N.png')");
    this._addCss("Button.btn_MDI_next", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_MDI_next_O.png')");
    this._addCss("Button.btn_MDI_next", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::img_MDI_next_D.png')");
    this._addCss("Button.btn_MDI_next", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#ccccccff","","0","none","","","1","solid","#ccccccff","","0","none","","");
    this._addCss("Grid.grd_MDI_pageList", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Grid.grd_MDI_pageList", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5f5f7ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_MDI_pageList>#head", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#ccccccff","","0","none","","");
    this._addCss("Grid.grd_MDI_pageList>#head", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","");
    this._addCss("Grid.grd_MDI_pageList>#head", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Grid.grd_MDI_pageList>#body", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Grid.grd_MDI_pageList>#body", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_MDI_pageList>#body", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss("Grid.grd_MDI_pageList>#body", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_value("transparent");
    this._addCss("Grid.grd_MDI_pageList>#body", "selectbackground", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Grid.grd_MDI_pageList>#body", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss("Grid.grd_MDI_pageList>#body", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_MDI_pageList>#body", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_MDI_pageList>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_MDI_pageList>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("Grid.grd_MDI_pageList>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("Grid.grd_MDI_pageList>#body", "cellcolor2", obj, ["mouseover"]);

    obj = new nexacro.Style_font("underline 9 Dotum, Arial");
    this._addCss("Grid.grd_MDI_pageList>#body", "cellfont", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("Grid.grd_MDI_pageList>#body", "selectcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_font("underline 9 Dotum, Arial");
    this._addCss("Grid.grd_MDI_pageList>#body", "selectfont", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Grid.grd_MDI_pageList>#body", "cellcolor", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Grid.grd_MDI_pageList>#body", "cellcolor2", obj, ["disabled"]);

    obj = new nexacro.Style_background("","img::bg_MDI_tabBtn_N.png","","0","0","100","50","true");
    this._addCss("Tab.tab_MDI", "buttonbackground", obj, ["normal", "focused"]);
    this._addCss("Tab.tab_MDI_D", "buttonbackground", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Tab.tab_MDI", "buttonborder", obj, ["normal", "focused", "selected"]);
    this._addCss("Tab.tab_MDI_D", "buttonborder", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Tab.tab_MDI", "buttonbordertype", obj, ["normal", "focused"]);
    this._addCss("Tab.tab_MDI_D", "buttonbordertype", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("8 15 8 15");
    this._addCss("Tab.tab_MDI", "buttonpadding", obj, ["normal", "focused", "selected"]);
    this._addCss("Tab.tab_MDI_D", "buttonpadding", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_margin("0 0 0 0");
    this._addCss("Tab.tab_MDI", "buttonmargin", obj, ["normal", "focused"]);
    this._addCss("Tab.tab_MDI_D", "buttonmargin", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("","img::bg_MDI_tabBtn_S.png","stretch","3","0","0","0","true");
    this._addCss("Tab.tab_MDI", "buttonbackground", obj, ["selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_TabExtra.png')");
    this._addCss("Tab.tab_MDI>#extrabutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab.tab_MDI>#spinupbutton", "image", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI>#spindownbutton", "image", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI_D>#spinupbutton", "image", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI_D>#spindownbutton", "image", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_margin("0 0 0 14");
    this._addCss("Tab.tab_MDI>#spinupbutton", "margin", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI_D>#spinupbutton", "margin", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_margin("0 -14 0 14");
    this._addCss("Tab.tab_MDI>#spindownbutton", "margin", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI_D>#spindownbutton", "margin", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("Static.sta_MDI_bg", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#d1d4d8ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Static.sta_MDI_bg", "border", obj, ["normal", "disabled"]);

    obj = null;
    
//[add theme images]
  };
})();
