//CSS=Paging.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button.WF_btn_page", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Button.WF_btn_page", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("Button.WF_btn_page", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 SemiBold,Malgun Gothic");
    this._addCss("Button.WF_btn_page", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_color("#ab0033ff");
    this._addCss("Button.WF_btn_page", "color", obj, ["disabled"]);

    obj = new nexacro.Style_font("antialias underline 9 LG스마트체 SemiBold,Malgun Gothic");
    this._addCss("Button.WF_btn_page", "font", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Button.WF_btn_page_first", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.WF_btn_page_prev", "background", obj, ["normal"]);
    this._addCss("Button.WF_btn_page_next", "background", obj, ["normal"]);
    this._addCss("Button.WF_btn_page_last", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#a9a9a9ff","");
    this._addCss("Button.WF_btn_page_first", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.WF_btn_page_prev", "border", obj, ["normal"]);
    this._addCss("Button.WF_btn_page_next", "border", obj, ["normal"]);
    this._addCss("Button.WF_btn_page_last", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Paging/icon_Paging_First.png')");
    this._addCss("Button.WF_btn_page_first", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://Paging/icon_Paging_Prev.png')");
    this._addCss("Button.WF_btn_page_prev", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Paging/icon_Paging_Next.png')");
    this._addCss("Button.WF_btn_page_next", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Paging/icon_Paging_Last.png')");
    this._addCss("Button.WF_btn_page_last", "image", obj, ["normal"]);

    obj = null;
    
//[add theme images]
  };
})();
