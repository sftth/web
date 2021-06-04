//CSS=Common.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("MainFrame", "background", obj, ["normal"]);
    this._addCss("ChildFrame", "background", obj, ["normal"]);
    this._addCss("Form", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "background", obj, ["normal"]);
    this._addCss("Combo", "background", obj, ["normal", "selected"]);
    this._addCss("Div>#vscrollbar", "background", obj, ["normal", "mouseover", "pushed", "focused", "selectedDiv>#hscrollbar"]);
    this._addCss("Div>#hscrollbar", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Edit", "background", obj, ["normal"]);
    this._addCss("Grid>#controledit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "background", obj, ["normal"]);
    this._addCss("MaskEdit", "background", obj, ["normal"]);
    this._addCss("ProgressBar", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TextArea", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#3d3d3dff","");
    this._addCss("MainFrame", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("MainFrame", "color", obj, ["normal"]);
    this._addCss("TitleBarControl", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Menu", "color", obj, ["normal"]);
    this._addCss("ProgressBar", "color", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("40");
    this._addCss("MainFrame", "titlebarheight", obj, ["normal"]);
    this._addCss("ChildFrame", "titlebarheight", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#5e656fff","");
    this._addCss("MainFrame", "border", obj, ["deactivate"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("ChildFrame", "align", obj, ["normal"]);
    this._addCss("TitleBarControl", "align", obj, ["normal"]);
    this._addCss("Calendar", "align", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "align", obj, ["normal", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("CheckBox", "align", obj, ["normal"]);
    this._addCss("Combo", "align", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "align", obj, ["normal"]);
    this._addCss("Combo>#combolist", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "align", obj, ["normal"]);
    this._addCss("FileUpload", "align", obj, ["normal"]);
    this._addCss("Grid>#controledit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "align", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss(".Cellgrd_WF_Text", "align", obj, ["normal"]);
    this._addCss("ListBox", "align", obj, ["normal"]);
    this._addCss("Radio", "align", obj, ["normal"]);
    this._addCss("Static", "align", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("ChildFrame", "border", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "border", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "border", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "border", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "border", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Form", "border", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "border", obj, ["normal", "disabled"]);
    this._addCss("Calendar>#dropbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Calendar>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "border", obj, ["normal"]);
    this._addCss("Div", "border", obj, ["normal"]);
    this._addCss("Div>#vscrollbar", "border", obj, ["normal", "mouseover", "pushed", "focused", "selectedDiv>#hscrollbar"]);
    this._addCss("Div>#hscrollbar", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Div>#vscrollbar>#incbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Div>#vscrollbar>#decbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Div>#vscrollbar>#trackbar", "border", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Div>#hscrollbar>#incbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Div>#hscrollbar>#decbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Div>#hscrollbar>#trackbar", "border", obj, ["mouseover", "pushed"]);
    this._addCss("FileUpload", "border", obj, ["normal"]);
    this._addCss("Grid>#head", "border", obj, ["normal"]);
    this._addCss("Grid>#body", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "border", obj, ["normal"]);
    this._addCss("Grid>#summary", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum04", "border", obj, ["normal"]);
    this._addCss("Menu", "border", obj, ["normal"]);
    this._addCss("PopupDiv", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "border", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "border", obj, ["normal", "mouseover", "disabled", "focused"]);
    this._addCss("Spin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("StepControl", "border", obj, ["normal"]);
    this._addCss("Static", "border", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "border", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "border", obj, ["normal"]);
    this._addCss("Spin.readonly>#spinedit", "border", obj, ["normal"]);

    obj = new nexacro.Style_font("#ffffff");
    this._addCss("ChildFrame", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("TitleBarControl", "background", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "background", obj, ["normal"]);
    this._addCss("Menu", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","2","solid","#d0d0d0ff","","0","none","","");
    this._addCss("TitleBarControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("TitleBarControl", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("*>#resizebutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Calendar>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Calendar>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Calendar>#popupcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("CheckBox", "bordertype", obj, ["normal"]);
    this._addCss("Combo", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#combolist", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div", "bordertype", obj, ["normal"]);
    this._addCss("Div>#vscrollbar>#incbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Div>#vscrollbar>#decbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Div>#vscrollbar>#trackbar", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Div>#hscrollbar>#incbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Div>#hscrollbar>#decbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Div>#hscrollbar>#trackbar", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Edit", "bordertype", obj, ["normal"]);
    this._addCss("FileUpload", "bordertype", obj, ["normal"]);
    this._addCss("Grid", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#body", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#summary", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controledit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("GroupBox", "bordertype", obj, ["normal"]);
    this._addCss("ImageViewer", "bordertype", obj, ["normal"]);
    this._addCss("ListBox", "bordertype", obj, ["normal"]);
    this._addCss("MaskEdit", "bordertype", obj, ["normal"]);
    this._addCss("Menu", "bordertype", obj, ["normal"]);
    this._addCss("PopupDiv", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "bordertype", obj, ["normal"]);
    this._addCss("ProgressBar", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Radio", "bordertype", obj, ["normal"]);
    this._addCss("Spin", "bordertype", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Static", "bordertype", obj, ["normal"]);
    this._addCss("Tab", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Tab>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial");
    this._addCss("TitleBarControl", "font", obj, ["normal"]);
    this._addCss("Button", "font", obj, ["normal"]);
    this._addCss("Calendar", "font", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "font", obj, ["normal", "disabled"]);
    this._addCss("Calendar>#popupcalendar", "font", obj, ["normal"]);
    this._addCss("CheckBox", "font", obj, ["normal"]);
    this._addCss("Combo", "font", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "font", obj, ["normal"]);
    this._addCss("Combo>#combolist", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div", "font", obj, ["normal"]);
    this._addCss("Edit", "font", obj, ["normal"]);
    this._addCss("FileUpload", "font", obj, ["normal"]);
    this._addCss("FileDownload", "font", obj, ["normal"]);
    this._addCss("Grid", "font", obj, ["normal"]);
    this._addCss("Grid>#controledit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "font", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "font", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum01", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum04", "font", obj, ["normal"]);
    this._addCss("GroupBox", "font", obj, ["normal"]);
    this._addCss("ListBox", "font", obj, ["normal"]);
    this._addCss("MaskEdit", "font", obj, ["normal"]);
    this._addCss("PopupDiv", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "font", obj, ["normal"]);
    this._addCss("Radio", "font", obj, ["normal"]);
    this._addCss("Spin", "font", obj, ["normal"]);
    this._addCss("StepControl", "font", obj, ["normal"]);
    this._addCss("Static", "font", obj, ["normal", "disabled"]);
    this._addCss("TextArea", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("TitleBarControl", "icon", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("TitleBarControl", "padding", obj, ["normal"]);
    this._addCss("Button", "padding", obj, ["normal"]);
    this._addCss("FileDownload", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "padding", obj, ["normal"]);
    this._addCss("Menu", "padding", obj, ["normal"]);
    this._addCss("Spin", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/icon_TB_MinN.png')");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("#525972ff","","","0","0","0","0","true");
    this._addCss("TitleBarControl>#minbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("TitleBarControl>#maxbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("TitleBarControl>#normalbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("TitleBarControl>#closebutton", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("50");
    this._addCss("TitleBarControl>#minbutton", "opacity", obj, ["disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "opacity", obj, ["disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "opacity", obj, ["disabled"]);
    this._addCss("TitleBarControl>#closebutton", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("TitleBarControl>#maxbutton", "background", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "background", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "background", obj, ["normal", "disabled"]);
    this._addCss("Calendar>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Calendar>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("CheckBox", "background", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "background", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Div", "background", obj, ["normal"]);
    this._addCss("Div>#vscrollbar>#incbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Div>#vscrollbar>#decbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Div>#hscrollbar>#incbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Div>#hscrollbar>#decbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("FileUpload", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("PopupDiv", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "background", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("StepControl", "background", obj, ["normal"]);
    this._addCss("Static", "background", obj, ["normal"]);
    this._addCss("Tab", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Tab>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/icon_TB_MaxN.png')");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/icon_TB_NormalN.png')");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/icon_TB_CloseN.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar", "background", obj, ["disabled"]);
    this._addCss("Combo", "background", obj, ["disabled"]);
    this._addCss("Edit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["disabled"]);
    this._addCss("MaskEdit", "background", obj, ["disabled"]);
    this._addCss("Spin", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("9");
    this._addCss("VScrollBarControl", "barminsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "barminsize", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Div>#vscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Div>#hscrollbar", "barminsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBarControl", "baroutsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "baroutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#c9c9c9ff","");
    this._addCss("VScrollBarControl", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_color("");
    this._addCss("VScrollBarControl", "color", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "color", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "color", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "color", obj, ["normal"]);
    this._addCss("HScrollBarControl", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#incbutton", "color", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "color", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "color", obj, ["normal"]);
    this._addCss("*>#resizebutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "color", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBarControl", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("*>#resizebutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "cursor", obj, ["normal", "disabled"]);
    this._addCss("Calendar>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("CheckBox", "cursor", obj, ["normal"]);
    this._addCss("Combo", "cursor", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "cursor", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Combo>#combolist", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div", "cursor", obj, ["normal"]);
    this._addCss("Edit", "cursor", obj, ["normal"]);
    this._addCss("Grid", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controledit", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "cursor", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("GroupBox", "cursor", obj, ["normal"]);
    this._addCss("ImageViewer", "cursor", obj, ["normal"]);
    this._addCss("ListBox", "cursor", obj, ["normal"]);
    this._addCss("MaskEdit", "cursor", obj, ["normal"]);
    this._addCss("PopupDiv", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "cursor", obj, ["normal"]);
    this._addCss("ProgressBar", "cursor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Radio", "cursor", obj, ["normal"]);
    this._addCss("Spin", "cursor", obj, ["normal"]);
    this._addCss("StepControl", "cursor", obj, ["normal"]);
    this._addCss("Static", "cursor", obj, ["normal"]);
    this._addCss("Tab", "cursor", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Tab>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_value("11");
    this._addCss("VScrollBarControl", "decbtnsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "decbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Div>#vscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Div>#hscrollbar", "decbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("VScrollBarControl", "font", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "font", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "font", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "font", obj, ["normal"]);
    this._addCss("HScrollBarControl", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#incbutton", "font", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "font", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "font", obj, ["normal"]);
    this._addCss("*>#resizebutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("ImageViewer", "font", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "font", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("VScrollBarControl", "gradation", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "gradation", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "gradation", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "gradation", obj, ["normal"]);
    this._addCss("HScrollBarControl", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#incbutton", "gradation", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "gradation", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "gradation", obj, ["normal"]);
    this._addCss("*>#resizebutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Calendar>#dropbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("CheckBox", "gradation", obj, ["normal"]);
    this._addCss("Combo", "gradation", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "gradation", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "gradation", obj, ["normal"]);
    this._addCss("Combo>#combolist", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div", "gradation", obj, ["normal"]);
    this._addCss("Edit", "gradation", obj, ["normal"]);
    this._addCss("Grid", "gradation", obj, ["normal"]);
    this._addCss("Grid>#head", "gradation", obj, ["normal"]);
    this._addCss("Grid>#body", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "gradation", obj, ["normal"]);
    this._addCss("Grid>#summary", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controledit", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("GroupBox", "gradation", obj, ["normal"]);
    this._addCss("ImageViewer", "gradation", obj, ["normal"]);
    this._addCss("ListBox", "gradation", obj, ["normal"]);
    this._addCss("MaskEdit", "gradation", obj, ["normal"]);
    this._addCss("Menu", "gradation", obj, ["normal"]);
    this._addCss("PopupDiv", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "gradation", obj, ["normal"]);
    this._addCss("ProgressBar", "gradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Radio", "gradation", obj, ["normal"]);
    this._addCss("StepControl", "gradation", obj, ["normal"]);
    this._addCss("Static", "gradation", obj, ["normal"]);
    this._addCss("Tab", "gradation", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Tab>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBarControl", "imgoutsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "imgoutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("11");
    this._addCss("VScrollBarControl", "incbtnsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "incbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Div>#vscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Div>#hscrollbar", "incbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBarControl", "opacity", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "opacity", obj, ["normal"]);
    this._addCss("HScrollBarControl", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#incbutton", "opacity", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "opacity", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "opacity", obj, ["normal"]);
    this._addCss("*>#resizebutton", "opacity", obj, ["normal"]);
    this._addCss("Button", "opacity", obj, ["normal"]);
    this._addCss("Calendar", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "opacity", obj, ["normal", "disabled"]);
    this._addCss("Calendar>#dropbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("CheckBox", "opacity", obj, ["normal"]);
    this._addCss("Combo", "opacity", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "opacity", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "opacity", obj, ["normal"]);
    this._addCss("Combo>#combolist", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div", "opacity", obj, ["normal"]);
    this._addCss("Edit", "opacity", obj, ["normal"]);
    this._addCss("FileDownload", "opacity", obj, ["normal"]);
    this._addCss("Grid", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controledit", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "opacity", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("GroupBox", "opacity", obj, ["normal"]);
    this._addCss("ImageViewer", "opacity", obj, ["normal"]);
    this._addCss("ListBox", "opacity", obj, ["normal"]);
    this._addCss("MaskEdit", "opacity", obj, ["normal"]);
    this._addCss("Menu", "opacity", obj, ["normal"]);
    this._addCss("PopupDiv", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "opacity", obj, ["normal"]);
    this._addCss("ProgressBar", "opacity", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Radio", "opacity", obj, ["normal"]);
    this._addCss("StepControl", "opacity", obj, ["normal"]);
    this._addCss("Static", "opacity", obj, ["normal"]);
    this._addCss("Tab", "opacity", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TextArea", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("VScrollBarControl", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#incbutton", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "padding", obj, ["normal"]);
    this._addCss("*>#resizebutton", "padding", obj, ["normal"]);
    this._addCss("Calendar", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("CheckBox", "padding", obj, ["normal"]);
    this._addCss("Combo", "padding", obj, ["normal"]);
    this._addCss("Combo>#combolist", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div", "padding", obj, ["normal"]);
    this._addCss("FileUpload", "padding", obj, ["normal"]);
    this._addCss("Grid", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("ImageViewer", "padding", obj, ["normal"]);
    this._addCss("ListBox", "padding", obj, ["normal"]);
    this._addCss("PopupDiv", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "padding", obj, ["normal"]);
    this._addCss("ProgressBar", "padding", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Radio", "padding", obj, ["normal"]);
    this._addCss("StepControl", "padding", obj, ["normal"]);
    this._addCss("Static", "padding", obj, ["normal"]);
    this._addCss("Tab", "padding", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("15");
    this._addCss("VScrollBarControl", "scrollbarsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Div>#vscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Div>#hscrollbar", "scrollbarsize", obj, ["normal"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("VScrollBarControl", "shadow", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "shadow", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "shadow", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("HScrollBarControl", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#incbutton", "shadow", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "shadow", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("*>#resizebutton", "shadow", obj, ["normal"]);
    this._addCss("Button", "shadow", obj, ["normal"]);
    this._addCss("Calendar", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "shadow", obj, ["normal", "disabled"]);
    this._addCss("Calendar>#dropbutton", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "shadow", obj, ["normal"]);
    this._addCss("CheckBox", "shadow", obj, ["normal"]);
    this._addCss("Combo", "shadow", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "shadow", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "shadow", obj, ["normal"]);
    this._addCss("Combo>#combolist", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div", "shadow", obj, ["normal"]);
    this._addCss("Edit", "shadow", obj, ["normal"]);
    this._addCss("FileDownload", "shadow", obj, ["normal"]);
    this._addCss("Grid", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controledit", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "shadow", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "shadow", obj, ["normal"]);
    this._addCss("GroupBox", "shadow", obj, ["normal"]);
    this._addCss("ImageViewer", "shadow", obj, ["normal"]);
    this._addCss("ListBox", "shadow", obj, ["normal"]);
    this._addCss("MaskEdit", "shadow", obj, ["normal"]);
    this._addCss("Menu", "shadow", obj, ["normal"]);
    this._addCss("PopupDiv", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "shadow", obj, ["normal"]);
    this._addCss("ProgressBar", "shadow", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Radio", "shadow", obj, ["normal"]);
    this._addCss("StepControl", "shadow", obj, ["normal"]);
    this._addCss("Static", "shadow", obj, ["normal"]);
    this._addCss("Tab", "shadow", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBarControl", "trackbarsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "trackbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#d5d5d5ff","");
    this._addCss("VScrollBarControl", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_IncButton.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("VScrollBarControl>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("*>#resizebutton", "imagealign", obj, ["normal"]);
    this._addCss("Button", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("FileDownload", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_IncButton_O.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_IncButton_D.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_DecButton.png')");
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_DecButton_O.png')");
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_DecButton_D.png')");
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("#d4d4d4ff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["normal"]);
    this._addCss("Div>#vscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Div>#hscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#ecececff","");
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["normal"]);
    this._addCss("Div>#hscrollbar>#trackbar", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBarControl>#trackbar", "image", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "image", obj, ["normal"]);
    this._addCss("*>#resizebutton", "image", obj, ["normal"]);
    this._addCss("Button", "image", obj, ["normal"]);
    this._addCss("FileDownload", "image", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "image", obj, ["normal"]);
    this._addCss("Menu>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Menu>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("#a4a4a4ff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Div>#vscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Div>#hscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("#dededeff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#c9c9c9ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("HScrollBarControl", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_IncButton2.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_IncButton2_O.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_IncButton2_D.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_DecButton2.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_DecButton2_O.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_DecButton2_D.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ecececff","","","0","0","0","0","true");
    this._addCss("*>#resizebutton", "background", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c9c9c9ff","","0","none","","","0","none","","","1","solid","#c9c9c9ff","");
    this._addCss("*>#resizebutton", "border", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button", "align", obj, ["normal"]);
    this._addCss("FileDownload", "align", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "align", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_Title", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Button", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileDownload", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#c2c2c2ff","");
    this._addCss("Button", "border", obj, ["normal", "disabled"]);
    this._addCss("FileDownload", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("Button", "bordertype", obj, ["normal"]);
    this._addCss("FileDownload", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Button", "color", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "color", obj, ["normal", "disabled"]);
    this._addCss("Calendar>#popupcalendar", "color", obj, ["normal"]);
    this._addCss("CheckBox", "color", obj, ["normal"]);
    this._addCss("Combo", "color", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "color", obj, ["normal"]);
    this._addCss("Combo>#combolist", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileDownload", "color", obj, ["normal"]);
    this._addCss("Grid", "color", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "color", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum01", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum04", "color", obj, ["normal"]);
    this._addCss("ImageViewer", "color", obj, ["normal"]);
    this._addCss("ListBox", "color", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("MaskEdit", "color", obj, ["normal"]);
    this._addCss("PopupDiv", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "color", obj, ["normal"]);
    this._addCss("Spin", "color", obj, ["normal"]);
    this._addCss("StepControl", "color", obj, ["normal"]);
    this._addCss("Static", "color", obj, ["normal"]);
    this._addCss("TextArea", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "cursor", obj, ["normal"]);
    this._addCss("FileDownload", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "cursor", obj, ["normal"]);
    this._addCss("Menu", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f7f7f7");
    this._addCss("Button", "gradation", obj, ["normal", "disabled"]);
    this._addCss("FileDownload", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlbutton", "gradation", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Button", "letterspace", obj, ["normal"]);
    this._addCss("FileDownload", "letterspace", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "letterspace", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c00c3fff","");
    this._addCss("Button", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("FileDownload", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Calendar.essential", "border", obj, ["normal"]);
    this._addCss("Combo.essential", "border", obj, ["normal"]);
    this._addCss("Edit.essential", "border", obj, ["normal"]);
    this._addCss("MaskEdit.essential", "border", obj, ["normal"]);
    this._addCss("Spin.essential", "border", obj, ["normal"]);
    this._addCss("TextArea.essential", "border", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #e0e0e0");
    this._addCss("Button", "gradation", obj, ["mouseover"]);
    this._addCss("FileDownload", "gradation", obj, ["mouseover"]);
    this._addCss("Grid>#controlbutton", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #e0e0e0 0,100 #fefefe");
    this._addCss("Button", "gradation", obj, ["pushed", "focused"]);
    this._addCss("FileDownload", "gradation", obj, ["pushed", "focused"]);
    this._addCss("Grid>#controlbutton", "gradation", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_color("#a9a9a9");
    this._addCss("Button", "color", obj, ["disabled"]);
    this._addCss("FileDownload", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar", "background", obj, ["normal"]);
    this._addCss("Combo>#combolist", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["normal"]);
    this._addCss("GroupBox", "background", obj, ["normal"]);
    this._addCss("ImageViewer", "background", obj, ["normal"]);
    this._addCss("ListBox", "background", obj, ["normal"]);
    this._addCss("Spin", "background", obj, ["normal"]);
    this._addCss("Tabpage", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#aaadbbff","");
    this._addCss("Calendar", "border", obj, ["normal"]);
    this._addCss("Combo", "border", obj, ["normal"]);
    this._addCss("Edit", "border", obj, ["normal"]);
    this._addCss("Grid>#controledit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["normal"]);
    this._addCss("ListBox", "border", obj, ["normal"]);
    this._addCss("MaskEdit", "border", obj, ["normal"]);
    this._addCss("Spin", "border", obj, ["normal"]);
    this._addCss("TextArea", "border", obj, ["normal"]);
    this._addCss("Calendar.readonly", "border", obj, ["normal"]);
    this._addCss("Combo.readonly", "border", obj, ["normal"]);
    this._addCss("Edit.readonly", "border", obj, ["normal"]);
    this._addCss("MaskEdit.readonly", "border", obj, ["normal"]);
    this._addCss("Spin.readonly", "border", obj, ["normal"]);
    this._addCss("TextArea.readonly", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("19");
    this._addCss("Calendar", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("Calendar", "color", obj, ["normal"]);
    this._addCss("Div", "color", obj, ["normal"]);
    this._addCss("Edit", "color", obj, ["normal"]);
    this._addCss("FileUpload", "color", obj, ["normal"]);
    this._addCss("Grid>#controledit", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["normal"]);
    this._addCss("GroupBox", "color", obj, ["normal"]);
    this._addCss("PopupMenu", "color", obj, ["normal"]);
    this._addCss("Tab", "color", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar.readonly", "color", obj, ["normal"]);
    this._addCss("Combo.readonly", "color", obj, ["normal"]);
    this._addCss("Edit.readonly", "color", obj, ["normal"]);
    this._addCss("MaskEdit.readonly", "color", obj, ["normal"]);
    this._addCss("Spin.readonly", "color", obj, ["normal"]);
    this._addCss("TextArea.readonly", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar", "dayborder", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "dayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "dayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar", "daybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("Calendar", "daycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial");
    this._addCss("Calendar", "dayfont", obj, ["normal", "mouseover"]);
    this._addCss("Calendar>#popupcalendar", "dayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "dayfont", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Calendar", "daygradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daygradation", obj, ["normal"]);

    obj = new nexacro.Style_value("22 22");
    this._addCss("Calendar", "daysize", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "daysize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daysize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daysize", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("Calendar", "popupalign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar", "popupbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#333333ff","");
    this._addCss("Calendar", "popupborder", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "popupborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar", "popupbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbordertype", obj, ["normal"]);
    this._addCss("Menu", "popupbordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Calendar", "popupgradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupgradation", obj, ["normal"]);
    this._addCss("Menu", "popupgradation", obj, ["normal"]);

    obj = new nexacro.Style_value("168 182");
    this._addCss("Calendar", "popupsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar", "popuptype", obj, ["normal"]);
    this._addCss("Combo", "popuptype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "popuptype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popuptype", obj, ["normal"]);
    this._addCss("Menu", "popuptype", obj, ["normal"]);
    this._addCss("PopupMenu", "popuptype", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("Calendar", "trailingdaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "trailingdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar", "usetrailingday", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "usetrailingday", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar", "viewmonthspin", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "viewmonthspin", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar", "viewyearspin", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "viewyearspin", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#333333ff","");
    this._addCss("Calendar", "border", obj, ["mouseover"]);
    this._addCss("Combo", "border", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Edit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controledit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["mouseover"]);
    this._addCss("ListBox", "border", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Spin", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("TextArea", "border", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#d2d5e1ff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Calendar", "daycolor", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Calendar>#popupcalendar", "daycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#c2c5d5ff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#d1d1d1ff","");
    this._addCss("Calendar", "border", obj, ["disabled"]);
    this._addCss("Combo", "border", obj, ["disabled"]);
    this._addCss("Edit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["disabled"]);
    this._addCss("ListBox", "border", obj, ["disabled"]);
    this._addCss("MaskEdit", "border", obj, ["disabled"]);
    this._addCss("Spin", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("Calendar", "color", obj, ["disabled"]);
    this._addCss("CheckBox", "color", obj, ["disabled"]);
    this._addCss("Edit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["disabled"]);
    this._addCss("ListBox", "color", obj, ["disabled"]);
    this._addCss("MaskEdit", "color", obj, ["disabled"]);
    this._addCss("Radio", "color", obj, ["disabled"]);
    this._addCss("Spin", "color", obj, ["disabled"]);
    this._addCss("Static", "color", obj, ["disabled"]);
    this._addCss("TextArea", "color", obj, ["disabled"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Calendar>#calendaredit", "padding", obj, ["normal", "disabled"]);
    this._addCss("Combo>#comboedit", "padding", obj, ["normal"]);
    this._addCss("Edit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controledit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "padding", obj, ["normal", "disabled"]);
    this._addCss(".Cellgrd_WF_BodyLink", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_Number", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_Text", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum01", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum04", "padding", obj, ["normal"]);
    this._addCss("MaskEdit", "padding", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#333333");
    this._addCss("Calendar>#calendaredit", "selectbackground", obj, ["normal", "disabled", "mouseover", "focused"]);
    this._addCss("Combo>#comboedit", "selectbackground", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo>#combolist", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controledit", "selectbackground", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "selectbackground", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controltextarea", "selectbackground", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectbackground", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectbackground", obj, ["normal", "disabled", "mouseover", "focused"]);
    this._addCss("Spin>#spinedit", "selectbackground", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#calendaredit", "selectcolor", obj, ["normal", "disabled", "mouseover", "focused"]);
    this._addCss("Combo>#comboedit", "selectcolor", obj, ["normal"]);
    this._addCss("Combo>#combolist", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "selectcolor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controledit", "selectcolor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "selectcolor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controltextarea", "selectcolor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectcolor", obj, ["normal", "disabled", "mouseover", "focused"]);
    this._addCss("MaskEdit", "selectcolor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin>#spinedit", "selectcolor", obj, ["normal", "mouseover"]);
    this._addCss("TextArea", "selectcolor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar.essential>#spinedit", "selectcolor", obj, ["normal"]);
    this._addCss("Combo.essential>#comboedit", "selectcolor", obj, ["normal"]);
    this._addCss("Edit.essential", "selectcolor", obj, ["normal"]);
    this._addCss("MaskEdit.essential", "selectcolor", obj, ["normal"]);
    this._addCss("Spin.essential>#calendaredit", "selectcolor", obj, ["normal"]);
    this._addCss("TextArea.essential", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Calendar.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_padding("1 2 0 0");
    this._addCss("Calendar>#dropbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Calendar_D.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Spinup.png')");
    this._addCss("Calendar>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Spinup_O.png')");
    this._addCss("Calendar>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Spin>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Spinup_D.png')");
    this._addCss("Calendar>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Spin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "image", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Spin.readonly>#spinupbutton", "image", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Spindown.png')");
    this._addCss("Calendar>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Spindown_O.png')");
    this._addCss("Calendar>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Spin>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Spindown_D.png')");
    this._addCss("Calendar>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Spin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Spin.readonly>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_align("");
    this._addCss("Calendar>#popupcalendar", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "align", obj, ["normal"]);

    obj = new nexacro.Style_padding("22 0 0 0");
    this._addCss("Calendar>#popupcalendar", "ncpadding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "ncpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("yyyy.MM");
    this._addCss("Calendar>#popupcalendar", "headerformat", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerformat", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "daybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybackground", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "daybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("25");
    this._addCss("Calendar>#popupcalendar", "headerheight", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerheight", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "headercolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headercolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "headerbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "headerborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "headerbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 10 LG스마트체,Arial");
    this._addCss("Calendar>#popupcalendar", "headerfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "bodybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "bodyborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodyborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "bodybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("S M T W T F S");
    this._addCss("Calendar>#popupcalendar", "weekformat", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekformat", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "weekcolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "weekbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekbackground", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial");
    this._addCss("Calendar>#popupcalendar", "weekfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "todaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#c00c3fff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "todaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "todayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "todaybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 9 LG스마트체,Arial");
    this._addCss("Calendar>#popupcalendar", "todayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todayfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "saturdayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial");
    this._addCss("Calendar>#popupcalendar", "saturdayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#5f9dde");
    this._addCss("Calendar>#popupcalendar", "saturdaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "sundayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "sundaybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#ee6b67");
    this._addCss("Calendar>#popupcalendar", "sundaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaycolor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial");
    this._addCss("Calendar>#popupcalendar", "sundayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#bebebe");
    this._addCss("Calendar>#popupcalendar", "trailingdaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "trailingdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Calendar>#popupcalendar", "usetrailingday", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "usetrailingday", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalPrev.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalPrev_O.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalPrev_D.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalNext.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalNext_O.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalNext_D.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("#7c7c7cff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("8");
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("antialias bold 10 LG스마트체,Arial");
    this._addCss("Calendar>#popupcalendar>#yearspin", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 2");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#head", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#head", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_align("center bottom");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalSpinup_O.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalSpinup_D.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalSpindown.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("center top");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalSpindown_O.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalSpindown_D.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_align("left tmiddle");
    this._addCss("Calendar>#popupcalendar>#monthspin", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_CalSpinup.png')");
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("CheckBox", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "accessibility", obj, ["normal"]);
    this._addCss("Radio", "accessibility", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#80808000","");
    this._addCss("CheckBox", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("CheckBox", "buttonalign", obj, ["normal"]);
    this._addCss("Radio", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_CheckBox.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("CheckBox", "buttonbackgroundimagemode", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackgroundimagemode", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("CheckBox", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("CheckBox", "buttonbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonbordertype", obj, ["normal"]);
    this._addCss("Tab", "buttonbordertype", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("CheckBox", "buttongradation", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttongradation", obj, ["normal"]);
    this._addCss("StepControl", "buttongradation", obj, ["normal"]);
    this._addCss("Tab", "buttongradation", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_Check.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcheckbox:mouseover", "buttonimage", obj, ["pushed"]);

    obj = new nexacro.Style_value("14");
    this._addCss("CheckBox", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonsize", obj, ["normal"]);
    this._addCss("Radio", "buttonsize", obj, ["normal"]);
    this._addCss("StepControl", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 1 3");
    this._addCss("CheckBox", "textpadding", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "textpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_CheckBox_O.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcheckbox:mouseover", "buttonbackground", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_CheckBox_D.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["disabled"]);
    this._addCss("CheckBox.readonly", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_Check_D.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_value("18");
    this._addCss("Combo", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "buttonsize", obj, ["normal"]);
    this._addCss("Spin", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("Combo", "itemaccessibility", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemaccessibility", obj, ["normal"]);
    this._addCss("ListBox", "itemaccessibility", obj, ["normal"]);
    this._addCss("Menu", "itemaccessibility", obj, ["normal"]);
    this._addCss("PopupMenu", "itemaccessibility", obj, ["normal"]);
    this._addCss("Radio", "itemaccessibility", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["normal"]);
    this._addCss("Combo.essential", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Combo", "itemborder", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemborder", obj, ["normal"]);
    this._addCss("ListBox", "itemborder", obj, ["normal"]);
    this._addCss("Menu", "itemborder", obj, ["normal"]);
    this._addCss("PopupMenu", "itemborder", obj, ["normal"]);
    this._addCss("Radio", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Combo", "itembordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itembordertype", obj, ["normal"]);
    this._addCss("Menu", "itembordertype", obj, ["normal"]);
    this._addCss("PopupMenu", "itembordertype", obj, ["normal"]);
    this._addCss("Radio", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Combo", "itemcolor", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo", "itemcolor", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial");
    this._addCss("Combo", "itemfont", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Combo", "itemgradation", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemgradation", obj, ["normal"]);
    this._addCss("ListBox", "itemgradation", obj, ["normal"]);
    this._addCss("Menu", "itemgradation", obj, ["normal"]);
    this._addCss("PopupMenu", "itemgradation", obj, ["normal"]);
    this._addCss("Radio", "itemgradation", obj, ["normal"]);

    obj = new nexacro.Style_value("19");
    this._addCss("Combo", "itemheight", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemheight", obj, ["normal"]);
    this._addCss("ListBox", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Combo", "itempadding", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#d2d5e1ff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["mouseover", "focused", "selected"]);
    this._addCss("ListBox", "itembackground", obj, ["selected"]);

    obj = new nexacro.Style_background("#f4f4f5ff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["disabled"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("Combo", "itemcolor", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "itemcolor", obj, ["disabled"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("Combo>#comboedit", "selectcolor", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectcolor", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/cmb_WF_Drop.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("Combo>#dropbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/cmb_WF_Drop_O.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/cmb_WF_Drop_D.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Combo.readonly>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("1","solid","#707070ff","");
    this._addCss("Combo>#combolist", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("GroupBox", "border", obj, ["mouseover"]);
    this._addCss("ListBox", "border", obj, ["selected"]);

    obj = new nexacro.Style_align("");
    this._addCss("Div", "stepalign", obj, ["normal"]);
    this._addCss("PopupDiv", "stepalign", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Tab", "stepalign", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Div>#vscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Div>#hscrollbar", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_DivIncButton.png')");
    this._addCss("Div>#vscrollbar>#incbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_DivDecButton.png')");
    this._addCss("Div>#vscrollbar>#decbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_DivIncButton2.png')");
    this._addCss("Div>#hscrollbar>#incbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_DivDecButton2.png')");
    this._addCss("Div>#hscrollbar>#decbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("#333333");
    this._addCss("Edit", "selectbackground", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEdit", "selectbackground", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TextArea", "selectbackground", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("1 solid #c2c2c2");
    this._addCss("FileUpload", "buttonborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("FileUpload", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("FileUpload", "buttoncolor", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial");
    this._addCss("FileUpload", "buttonfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f7f7f7");
    this._addCss("FileUpload", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("FileUpload", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_margin("0 0 0 -1");
    this._addCss("FileUpload", "buttonmargin", obj, ["normal"]);

    obj = new nexacro.Style_value("72");
    this._addCss("FileUpload", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_value("Upload");
    this._addCss("FileUpload", "buttontext", obj, ["normal"]);

    obj = new nexacro.Style_value("auto");
    this._addCss("FileUpload", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#aaadbbff","");
    this._addCss("FileUpload", "editborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("FileUpload", "editbordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("FileUpload", "editcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial");
    this._addCss("FileUpload", "editfont", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("FileUpload", "editpadding", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("FileUpload", "editselectbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("FileUpload", "editselectcolor", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("21");
    this._addCss("FileUpload", "itemheight", obj, ["normal"]);
    this._addCss("PopupMenu", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #c00c3f");
    this._addCss("FileUpload", "buttonborder", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Tab", "buttonborder", obj, ["focused", "selected"]);

    obj = new nexacro.Style_bordertype("normal","0","0","false","true","false","true");
    this._addCss("FileUpload", "buttonbordertype", obj, ["mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #e0e0e0");
    this._addCss("FileUpload", "buttongradation", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("1","solid","#333333ff","");
    this._addCss("FileUpload", "editborder", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_color("#a9a9a9");
    this._addCss("FileUpload", "buttoncolor", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#d1d1d1ff","");
    this._addCss("FileUpload", "editborder", obj, ["disabled"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("FileUpload", "editcolor", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f4f4f5ff","","","0","0","0","0","true");
    this._addCss("Grid", "background", obj, ["normal"]);
    this._addCss("Grid>#body", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("2","solid","#4f5670ff","","1","solid","#ccccccff","","1","solid","#ccccccff","","1","solid","#ccccccff","");
    this._addCss("Grid", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid", "selectline", obj, ["normal"]);
    this._addCss("Grid>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid>#body", "selectline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "selectpointimagez", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_TreeClose.png')");
    this._addCss("Grid", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_TreeItem.png')");
    this._addCss("Grid", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "treeitemmargin", obj, ["normal"]);

    obj = new nexacro.Style_line("1","dotted","#929aa5ff","");
    this._addCss("Grid", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_TreeOpen.png')");
    this._addCss("Grid", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_background("#d9dbe4ff","","","0","0","0","0","true");
    this._addCss("Grid>#head", "background", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid>#summ", "cellalign", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#d9dbe4ff","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#d9dbe4ff","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid>#body", "cellcolor", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellcolor", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#head", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid>#body", "cellcolor2", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 9 LG스마트체,Arial");
    this._addCss("Grid>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid>#summ", "cellfont", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#head", "cellgradation", obj, ["normal"]);
    this._addCss("Grid>#body", "cellgradation", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellgradation", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellgradation", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#head", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid>#body", "cellgradation2", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellgradation2", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#9498aaff","","0","none","","","0","none","","");
    this._addCss("Grid>#head", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#head", "celllinespace", obj, ["normal"]);
    this._addCss("Grid>#body", "celllinespace", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "celllinespace", obj, ["normal"]);
    this._addCss("Grid>#summary", "celllinespace", obj, ["normal"]);

    obj = new nexacro.Style_padding("3 0 0 0");
    this._addCss("Grid>#head", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Grid>#head", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#head", "selectgradation", obj, ["normal"]);
    this._addCss("Grid>#body", "selectgradation", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("3");
    this._addCss("Grid>#head", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Grid>#body", "cellalign", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#f9f9f9ff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial");
    this._addCss("Grid>#body", "cellfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#cdced5ff","","0","none","","","0","none","","");
    this._addCss("Grid>#body", "cellline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("1 1 1 1");
    this._addCss("Grid>#body", "cellpadding", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellpadding", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("#eeeff3");
    this._addCss("Grid>#body", "selectbackground", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#body", "selectcolor", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체,Arial");
    this._addCss("Grid>#body", "selectfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#e5e7eeff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#e5e7eeff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#fffce8ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "background", obj, ["normal"]);
    this._addCss("Grid>#summary", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#fffce8ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#fffce8ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#cdced5ff","");
    this._addCss("Grid>#summ", "cellline", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_value("#fffce8");
    this._addCss("Grid>#summ", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 9 LG스마트체,Arial");
    this._addCss("Grid>#summ", "selectfont", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectfont", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_Title", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Grid>#controlmaskedit", "align", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_Number", "align", obj, ["normal"]);
    this._addCss("MaskEdit", "align", obj, ["normal"]);
    this._addCss("Spin", "align", obj, ["normal"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("Grid>#controltextarea", "align", obj, ["normal"]);
    this._addCss("TextArea", "align", obj, ["normal"]);

    obj = new nexacro.Style_value("4");
    this._addCss("Grid>#controltextarea", "linespace", obj, ["normal"]);
    this._addCss("TextArea", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_padding("5 5 0 5");
    this._addCss("Grid>#controltextarea", "padding", obj, ["normal"]);
    this._addCss("TextArea", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#fcfcfcff","","","0","0","0","0","true");
    this._addCss("Grid>#controltextarea", "background", obj, ["disabled"]);
    this._addCss("TextArea", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#cdcdcdff","");
    this._addCss("Grid>#controltextarea", "border", obj, ["disabled"]);
    this._addCss("TextArea", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("Grid>#controlcheckbox", "buttonalign", obj, ["normal"]);
    this._addCss("StepControl", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Grid>#controlcheckbox", "buttonborder", obj, ["normal"]);
    this._addCss("Radio.essential", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_background("#d9dbe4ff","theme://images/img_WF_Essential.png","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_HeadEssential", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f3f4f8ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_Title", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f3f4f8ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_Title", "background2", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 9 LG스마트체,Arial");
    this._addCss(".Cellgrd_WF_Title", "font", obj, ["normal"]);
    this._addCss("ProgressBar", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Tab", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#cdced5ff","","1","solid","#cdced5ff","","0","none","","");
    this._addCss(".Cellgrd_WF_Title", "line", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias underline 9 LG스마트체,Arial");
    this._addCss(".Cellgrd_WF_BodyLink", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#c00c3f");
    this._addCss(".Cellgrd_WF_BodyLink", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_HeadLink", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_Point", "color", obj, ["normal"]);
    this._addCss("Tab", "color", obj, ["focused", "selected"]);

    obj = new nexacro.Style_color("#c00c3f");
    this._addCss(".Cellgrd_WF_BodyLink", "color2", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_HeadLink", "color2", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_Point", "color2", obj, ["normal"]);

    obj = new nexacro.Style_color("#c00c3f");
    this._addCss(".Cellgrd_WF_BodyLink", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias underline 9 LG스마트체,Arial");
    this._addCss(".Cellgrd_WF_BodyLink", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias underline bold 9 LG스마트체,Arial");
    this._addCss(".Cellgrd_WF_HeadLink", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("#e2e4ebff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum01", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#cdced5ff","","1","solid","#cdced5ff","","0","none","","","0","none","","");
    this._addCss(".Cellgrd_WF_sum01", "line", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "line", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "line", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum04", "line", obj, ["normal"]);

    obj = new nexacro.Style_background("#ddf3f6ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum02", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5fff3ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum03", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss(".Cellgrd_WF_sum03", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#f6f1e3ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum04", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#9498aaff","");
    this._addCss(".Cellgrd_WF_Multihead", "line", obj, ["normal"]);

    obj = new nexacro.Style_background("#d9ecebff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_FreezeColumn", "background", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_FreezeColumnLast", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f0f8f7ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_FreezeRow", "background", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_FreezeRowLast", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f6fefdff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_FreezeRow", "background2", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_FreezeRowLast", "background2", obj, ["normal"]);

    obj = new nexacro.Style_value("#d9eceb");
    this._addCss(".Cellgrd_WF_FreezeRow", "selectbackground", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_FreezeRowLast", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","","1","solid","#48e3d6ff","","2","solid","#bfbfbfff","","1","solid","#d5d5d5ff","");
    this._addCss(".Cellgrd_WF_FreezeColumnLast", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","","1","solid","#48e3d6ff","","2","solid","#bfbfbfff","","1","solid","#d5d5d5ff","");
    this._addCss(".Cellgrd_WF_FreezeColumnLast", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#48e3d6ff","","0","none","","","0","none","","");
    this._addCss(".Cellgrd_WF_FreezeRowLast", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#48e3d6ff","","0","none","","","0","none","","");
    this._addCss(".Cellgrd_WF_FreezeRowLast", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#afafafff","");
    this._addCss("GroupBox", "border", obj, ["normal"]);
    this._addCss("ImageViewer", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("GroupBox", "titlebackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("GroupBox", "titlegradation", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("GroupBox", "titleimage", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("GroupBox", "titleimagealign", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("GroupBox", "titlepadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f3f3f3ff","","","0","0","0","0","true");
    this._addCss("GroupBox", "background", obj, ["disabled"]);
    this._addCss("ImageViewer", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#cbcbcbff","");
    this._addCss("GroupBox", "border", obj, ["disabled"]);
    this._addCss("ImageViewer", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999ff");
    this._addCss("GroupBox", "color", obj, ["disabled"]);
    this._addCss("ImageViewer", "color", obj, ["disabled"]);
    this._addCss("Menu", "color", obj, ["disabled"]);
    this._addCss("StepControl", "color", obj, ["disabled"]);
    this._addCss("Tab", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#070707ff","");
    this._addCss("ImageViewer", "border", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("ListBox", "itembackground", obj, ["normal", "disabled"]);
    this._addCss("Menu", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("ListBox", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 8");
    this._addCss("ListBox", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_font("underline 9 LG스마트체,Arial");
    this._addCss("ListBox", "font", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("");
    this._addCss("Menu", "checkboximage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/icon_PopupMenu_Expand.png')");
    this._addCss("Menu", "expandimage", obj, ["normal"]);
    this._addCss("PopupMenu", "expandimage", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 13 LG스마트체,Arial");
    this._addCss("Menu", "font", obj, ["normal"]);

    obj = new nexacro.Style_align("left");
    this._addCss("Menu", "itemalign", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 10 0 10");
    this._addCss("Menu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f8f8f8ff","","","0","0","0","0","true");
    this._addCss("Menu", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("3","solid","#94243aff","","1","solid","#5a6373ff","","1","solid","#5a6373ff","","1","solid","#5a6373ff","");
    this._addCss("Menu", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_color("#363e43ff");
    this._addCss("Menu", "popupcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 10 Arial Narrow");
    this._addCss("Menu", "popupfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#f8f8f8ff","","","0","0","0","0","true");
    this._addCss("Menu", "popupitembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Menu", "popupitemborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Menu", "popupitembordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Menu", "popupitemgradation", obj, ["normal"]);

    obj = new nexacro.Style_value("30");
    this._addCss("Menu", "popupitemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 14");
    this._addCss("Menu", "popupitempadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Menu", "popuppadding", obj, ["normal"]);

    obj = new nexacro.Style_color("#94243aff");
    this._addCss("Menu", "color", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("PopupMenu", "color", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_color("#94243aff");
    this._addCss("Menu", "popupcolor", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_font("antialias 13 LG스마트체,Arial");
    this._addCss("Menu", "popupfont", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#3e3e3eff","","","0","0","0","0","true");
    this._addCss("Menu>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Menu>#spindownbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_TabSpinup.png");
    this._addCss("Menu>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_background("#1d1d1dff","","","0","0","0","0","true");
    this._addCss("Menu>#spinupbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Menu>#spindownbutton", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_TabSpinup_O.png");
    this._addCss("Menu>#spinupbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_TabSpinup_P.png");
    this._addCss("Menu>#spinupbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Menu>#spinupbutton", "background", obj, ["disabled"]);
    this._addCss("Menu>#spindownbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("50%");
    this._addCss("Menu>#spinupbutton", "opacity", obj, ["disabled"]);
    this._addCss("Menu>#spindownbutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab>#spinupbutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab>#spindownbutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab>#extrabutton", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_TabSpindown.png");
    this._addCss("Menu>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_TabSpindown_O.png");
    this._addCss("Menu>#spindownbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_TabSpindown_P.png");
    this._addCss("Menu>#spindownbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("#d6d6d6ff","","","0","0","0","0","true");
    this._addCss("PopupMenu", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#4a4947ff","");
    this._addCss("PopupMenu", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_Check.png')");
    this._addCss("PopupMenu", "checkboximage", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("PopupMenu", "itembackground", obj, ["normal"]);
    this._addCss("Radio", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 2 0 9");
    this._addCss("PopupMenu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f3f3f3ff","","","0","0","0","0","true");
    this._addCss("PopupMenu", "itembackground", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_color("#848484ff");
    this._addCss("PopupMenu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_color("#c00c3f");
    this._addCss("ProgressBar", "barcolor", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #cc1859 0,100 #c10d40");
    this._addCss("ProgressBar", "bargradation", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("ProgressBar", "bartype", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_border("1","solid","#8e8e8eff","","1","solid","#e1e1e1ff","","1","solid","#e1e1e1ff","","1","solid","#8e8e8eff","");
    this._addCss("ProgressBar", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("forward");
    this._addCss("ProgressBar", "direction", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("ProgressBar", "endimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("ProgressBar", "progressimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("true");
    this._addCss("ProgressBar", "smooth", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("ProgressBar", "startimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_color("#cfcfcf");
    this._addCss("ProgressBar", "barcolor", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_RadioBg.png","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Radio", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_gradation("normal 0 0");
    this._addCss("Radio", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_Radio.png')");
    this._addCss("Radio", "buttonimage", obj, ["normal"]);
    this._addCss("StepControl", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Radio", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 3");
    this._addCss("Radio", "textpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_RadioBg_O.png","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_RadioBg_D.png","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["disabled"]);
    this._addCss("Radio.readonly", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_Radio_D.png')");
    this._addCss("Radio", "buttonimage", obj, ["disabled"]);
    this._addCss("Radio.essential", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_value("right");
    this._addCss("Spin", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("StepControl", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("StepControl", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #afafafff");
    this._addCss("StepControl", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","9","9","true","true","true","true");
    this._addCss("StepControl", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #707070ff");
    this._addCss("StepControl", "buttonborder", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#f3f3f3ff","","","0","0","0","0","true");
    this._addCss("StepControl", "buttonbackground", obj, ["disabled"]);
    this._addCss("Tab", "buttonbackground", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("1 solid #cbcbcbff");
    this._addCss("StepControl", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Static", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#4a4947ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Tab", "border", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("1 solid #cbcbcbff");
    this._addCss("Tab", "buttonborder", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_padding("6 10 5 10");
    this._addCss("Tab", "buttonpadding", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_margin("");
    this._addCss("Tab", "buttonmargin", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_line("0","","","");
    this._addCss("Tab", "focusborder", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("false");
    this._addCss("Tab", "showextrabutton", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab", "stepshowtype", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/tab_btn_BgS.png","stretch","3","3","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TabSpinup.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TabSpinup_O.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TabSpinup_P.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TabSpindown.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TabSpindown_O.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TabSpindown_P.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TabExtra.png')");
    this._addCss("Tab>#extrabutton", "image", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#f3f3f3ff","","","0","0","0","0","true");
    this._addCss("Calendar.readonly", "background", obj, ["normal"]);
    this._addCss("Combo.readonly", "background", obj, ["normal"]);
    this._addCss("Combo.readonly>#dropbutton", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Edit.readonly", "background", obj, ["normal"]);
    this._addCss("MaskEdit.readonly", "background", obj, ["normal"]);
    this._addCss("Spin.readonly", "background", obj, ["normal"]);
    this._addCss("TextArea.readonly", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f3f3f3ff","","","0","0","0","0","true");
    this._addCss("Combo.readonly", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#fffef8ff","theme://images/img_WF_Essential.png","","0","0","0","0","true");
    this._addCss("Calendar.essential", "background", obj, ["normal"]);
    this._addCss("Combo.essential", "background", obj, ["normal"]);
    this._addCss("Edit.essential", "background", obj, ["normal"]);
    this._addCss("MaskEdit.essential", "background", obj, ["normal"]);
    this._addCss("Spin.essential", "background", obj, ["normal"]);
    this._addCss("TextArea.essential", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("#c00c3f");
    this._addCss("Calendar.essential>#spinedit", "selectbackground", obj, ["normal"]);
    this._addCss("Combo.essential>#comboedit", "selectbackground", obj, ["normal"]);
    this._addCss("Edit.essential", "selectbackground", obj, ["normal"]);
    this._addCss("MaskEdit.essential", "selectbackground", obj, ["normal"]);
    this._addCss("Spin.essential>#calendaredit", "selectbackground", obj, ["normal"]);
    this._addCss("TextArea.essential", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Spinup_E.png')");
    this._addCss("Calendar.essential>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Spin.essential>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Spindown_E.png')");
    this._addCss("Calendar.essential>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Spin.essential>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_EssentialCheckBox.png","","0","0","0","0","true");
    this._addCss("CheckBox.essential", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_EssentialCheck.png')");
    this._addCss("CheckBox.essential", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_background("#fffef8ff","","","0","0","0","0","true");
    this._addCss("Combo.essential>#dropbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/cmb_WF_EssentialDrop.png')");
    this._addCss("Combo.essential>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_EssentialRadioBg.png","","0","0","0","0","true");
    this._addCss("Radio.essential", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_EssentialRadio.png')");
    this._addCss("Radio.essential", "buttonimage", obj, ["normal"]);

    obj = null;
    
//[add theme images]
  };
})();
