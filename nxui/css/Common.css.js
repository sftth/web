//CSS=Common.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("MainFrame", "accessibility", obj, ["normal"]);
    this._addCss("ChildFrame", "accessibility", obj, ["normal"]);
    this._addCss("Tabpage", "accessibility", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("MainFrame", "background", obj, ["normal"]);
    this._addCss("ChildFrame", "background", obj, ["normal"]);
    this._addCss("Calendar", "background", obj, ["normal"]);
    this._addCss("Combo", "background", obj, ["normal"]);
    this._addCss("Combo>#combolist", "background", obj, ["normal"]);
    this._addCss("Edit", "background", obj, ["normal"]);
    this._addCss("Form", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid", "background", obj, ["normal"]);
    this._addCss("Grid>#controledit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["normal"]);
    this._addCss("ListBox", "background", obj, ["normal"]);
    this._addCss("MaskEdit", "background", obj, ["normal"]);
    this._addCss("PopupMenu", "background", obj, ["normal"]);
    this._addCss("Spin", "background", obj, ["normal"]);
    this._addCss("Tab", "background", obj, ["normal", "focused"]);
    this._addCss("TextArea", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("MainFrame", "border", obj, ["normal", "deactivate"]);
    this._addCss("ChildFrame", "border", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["disabled"]);
    this._addCss("HScrollBarControl", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["disabled"]);
    this._addCss("*>#resizebutton", "border", obj, ["normal"]);
    this._addCss("Button", "border", obj, ["normal", "selected"]);
    this._addCss("Calendar>#calendaredit", "border", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Calendar>#dropbutton", "border", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "border", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Calendar>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar>#popupcalendar", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "border", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "border", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal", "selected"]);
    this._addCss("CheckBox", "border", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Combo>#comboedit", "border", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Combo>#dropbutton", "border", obj, ["normal", "selected", "disabled"]);
    this._addCss("Div", "border", obj, ["normal"]);
    this._addCss("FileDownload", "border", obj, ["normal"]);
    this._addCss("FileUpload", "border", obj, ["normal", "selected", "focused", "mouseover"]);
    this._addCss("Form", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#body", "border", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcheckbox", "border", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo>#comboedit", "border", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "border", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "border", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "border", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "border", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlexpand", "border", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Menu", "border", obj, ["normal"]);
    this._addCss("PopupDiv", "border", obj, ["normal"]);
    this._addCss("ProgressBar", "border", obj, ["normal", "disabled"]);
    this._addCss("ProgressBarControl", "border", obj, ["normal", "disabled"]);
    this._addCss("Radio", "border", obj, ["normal", "mouseover", "selected", "pushed", "focused"]);
    this._addCss("Spin>#spinedit", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin>#spinupbutton", "border", obj, ["normal", "selected"]);
    this._addCss("Spin>#spindownbutton", "border", obj, ["normal", "selected"]);
    this._addCss("Static", "border", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Tab>#spindownbutton", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Tab>#extrabutton", "border", obj, ["normal"]);
    this._addCss("Calendar.readonly>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Spin.readonly>#spinupbutton", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin.readonly>#spindownbutton", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Combo.error>#comboedit", "border", obj, ["disabled"]);
    this._addCss("Calendar.display", "border", obj, ["normal", "selected", "mouseover", "focused", "readonly"]);
    this._addCss("Combo.display", "border", obj, ["normal", "selected", "readonly", "mouseover", "pushed", "focused"]);
    this._addCss("Combo.display>#comboedit", "border", obj, ["disabled"]);
    this._addCss("Edit.display", "border", obj, ["normal", "readonly", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("MaskEdit.display", "border", obj, ["normal", "selected", "readonly", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.display", "border", obj, ["normal", "selected", "readonly", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("TextArea.display", "border", obj, ["normal", "readonly", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("MainFrame", "color", obj, ["normal"]);
    this._addCss("Calendar", "color", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("CheckBox", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("CheckBox.agree", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Combo", "color", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "color", obj, ["normal", "readonly"]);
    this._addCss("Combo>#combolist", "color", obj, ["normal"]);
    this._addCss("Edit", "color", obj, ["normal"]);
    this._addCss("FileDownload", "color", obj, ["normal"]);
    this._addCss("FileUpload", "color", obj, ["normal", "selected", "focused", "mouseover"]);
    this._addCss("Grid", "color", obj, ["normal"]);
    this._addCss("Grid>#body", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_BodyLink_B", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_BodyLink_title", "color", obj, ["normal"]);
    this._addCss("Grid>#controledit", "color", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ImageViewer", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("ListBox", "color", obj, ["normal"]);
    this._addCss("PopupMenu", "color", obj, ["normal"]);
    this._addCss("Radio", "color", obj, ["normal", "mouseover", "selected", "pushed", "focused"]);
    this._addCss("Spin", "color", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("Static", "color", obj, ["normal"]);
    this._addCss("TextArea", "color", obj, ["normal"]);
    this._addCss("Edit.readonly", "color", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("MaskEdit.readonly", "color", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("Radio.readonly", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar.display", "color", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Calendar.display>#calendaredit", "color", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Combo.display>#comboedit", "color", obj, ["normal", "readonly", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.display", "color", obj, ["normal", "readonly", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("MaskEdit.display", "color", obj, ["normal", "selected", "readonly", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.display>#spinedit", "color", obj, ["normal", "mouseover", "focused", "readonly", "disabled"]);
    this._addCss("TextArea.display", "color", obj, ["normal", "readonly", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("");
    this._addCss("MainFrame", "font", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("MainFrame", "gradation", obj, ["normal"]);
    this._addCss("ChildFrame", "gradation", obj, ["normal"]);
    this._addCss("Tabpage", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "menubarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "opacity", obj, ["normal"]);
    this._addCss("ChildFrame", "opacity", obj, ["normal"]);
    this._addCss("Tabpage", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "openstatuseffect", obj, ["normal"]);
    this._addCss("ChildFrame", "openstatuseffect", obj, ["normal"]);

    obj = new nexacro.Style_value("0");
    this._addCss("MainFrame", "statusbarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("35");
    this._addCss("MainFrame", "titlebarheight", obj, ["normal"]);
    this._addCss("ChildFrame", "titlebarheight", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("ChildFrame", "align", obj, ["normal"]);
    this._addCss("TitleBarControl", "align", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CheckBox", "align", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Combo", "align", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "align", obj, ["normal"]);
    this._addCss("Combo>#combolist", "align", obj, ["normal"]);
    this._addCss("Edit", "align", obj, ["normal"]);
    this._addCss("FileUpload", "align", obj, ["normal", "selected", "focused", "mouseover"]);
    this._addCss(".Cellgrd_WF_Text", "align", obj, ["normal"]);
    this._addCss("Grid>#controledit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "align", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "align", obj, ["normal"]);
    this._addCss("ListBox", "align", obj, ["normal"]);
    this._addCss("Radio", "align", obj, ["normal", "mouseover", "selected", "pushed", "focused"]);
    this._addCss("Static", "align", obj, ["normal"]);
    this._addCss("Static.sta_GID_txt", "align", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("ChildFrame", "color", obj, ["normal"]);
    this._addCss("TitleBarControl", "color", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("ListBox", "color", obj, ["selected"]);
    this._addCss("Menu", "color", obj, ["mouseover", "focused", "selected"]);
    this._addCss("PopupMenu", "color", obj, ["mouseover", "focused", "selected"]);
    this._addCss("ProgressBar", "color", obj, ["normal", "disabled"]);
    this._addCss("ProgressBarControl", "color", obj, ["normal", "disabled"]);
    this._addCss("Tab", "color", obj, ["selected"]);
    this._addCss("Static.Guide_Color", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 11 LG스마트체 Regular, LG스마트체, Arial");
    this._addCss("ChildFrame", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 20");
    this._addCss("ChildFrame", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("ChildFrame", "statusbarheight", obj, ["normal"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("TitleBarControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#666666ff","","","0","0","0","0","true");
    this._addCss("TitleBarControl", "background", obj, ["deactivate"]);

    obj = new nexacro.Style_background("#999999ff","","","0","0","0","0","true");
    this._addCss("TitleBarControl", "background", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("TitleBarControl>#minbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "background", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Calendar>#dropbutton", "background", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "background", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Calendar>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "background", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "background", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("CheckBox", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Combo>#comboedit", "background", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Div", "background", obj, ["normal"]);
    this._addCss("FileUpload", "background", obj, ["normal", "selected", "focused", "mouseover"]);
    this._addCss("Grid>#body", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo>#comboedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "background", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "background", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "background", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal", "selected"]);
    this._addCss("Menu", "background", obj, ["normal"]);
    this._addCss("PopupDiv", "background", obj, ["normal"]);
    this._addCss("Radio", "background", obj, ["normal", "mouseover", "selected", "pushed", "focused"]);
    this._addCss("Spin>#spinedit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin>#spinupbutton", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "background", obj, ["normal", "selected", "disabled"]);
    this._addCss("Static", "background", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "background", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Tab>#spindownbutton", "background", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Tab>#extrabutton", "background", obj, ["normal"]);
    this._addCss("Calendar.readonly>#dropbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Spin.readonly>#spinupbutton", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin.readonly>#spindownbutton", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Calendar.display", "background", obj, ["normal", "selected", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Combo.display", "background", obj, ["normal", "selected", "readonly", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Edit.display", "background", obj, ["normal", "readonly", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("MaskEdit.display", "background", obj, ["normal", "selected", "readonly", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.display", "background", obj, ["normal", "selected", "readonly", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("TextArea.display", "background", obj, ["normal", "readonly", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_GID_txt", "background", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("TitleBarControl>#minbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "bordertype", obj, ["normal", "selected"]);
    this._addCss("HScrollBarControl", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "bordertype", obj, ["normal", "selected"]);
    this._addCss("*>#resizebutton", "bordertype", obj, ["normal"]);
    this._addCss("Button", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Calendar", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#dropbutton", "bordertype", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "bordertype", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Calendar>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar>#popupcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal", "selected"]);
    this._addCss("CheckBox", "bordertype", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Combo", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Combo>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("Div", "bordertype", obj, ["normal"]);
    this._addCss("Edit", "bordertype", obj, ["normal"]);
    this._addCss("FileDownload", "bordertype", obj, ["normal"]);
    this._addCss("FileUpload", "bordertype", obj, ["normal", "selected", "focused", "mouseover"]);
    this._addCss("Grid", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#body", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#summ", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#summary", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controledit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcheckbox", "bordertype", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcombo>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "bordertype", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "bordertype", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "bordertype", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlexpand", "bordertype", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("GroupBox", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("ImageViewer", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("ListBox", "bordertype", obj, ["normal"]);
    this._addCss("MaskEdit", "bordertype", obj, ["normal"]);
    this._addCss("Menu", "bordertype", obj, ["normal"]);
    this._addCss("PopupDiv", "bordertype", obj, ["normal"]);
    this._addCss("PopupMenu", "bordertype", obj, ["normal"]);
    this._addCss("ProgressBar", "bordertype", obj, ["normal"]);
    this._addCss("ProgressBarControl", "bordertype", obj, ["normal"]);
    this._addCss("Spin", "bordertype", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin>#spinupbutton", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Spin>#spindownbutton", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Static", "bordertype", obj, ["normal"]);
    this._addCss("Tab", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Tab>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Tab>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Tab>#extrabutton", "bordertype", obj, ["normal"]);
    this._addCss("TextArea", "bordertype", obj, ["normal"]);
    this._addCss("Calendar.readonly>#dropbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Spin.readonly>#spinupbutton", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin.readonly>#spindownbutton", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_TB_min.png')");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("50");
    this._addCss("TitleBarControl>#minbutton", "opacity", obj, ["disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "opacity", obj, ["disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "opacity", obj, ["disabled"]);
    this._addCss("TitleBarControl>#closebutton", "opacity", obj, ["disabled"]);
    this._addCss("Div", "opacity", obj, ["disabled"]);
    this._addCss("PopupDiv", "opacity", obj, ["disabled"]);
    this._addCss("Tab>#spinupbutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab>#spindownbutton", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_TB_max.png')");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_TB_normal.png')");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_TB_close.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#f1f1f1ff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("17");
    this._addCss("VScrollBarControl", "barminsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "barminsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("17");
    this._addCss("VScrollBarControl", "decbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "decbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("17");
    this._addCss("VScrollBarControl", "incbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "incbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("VScrollBarControl", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("17");
    this._addCss("VScrollBarControl", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_VscrollDecN.png')");
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_background("#e0e0e0ff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#decbutton", "background", obj, ["mouseover", "focused"]);
    this._addCss("VScrollBarControl>#incbutton", "background", obj, ["mouseover", "focused"]);
    this._addCss("HScrollBarControl>#decbutton", "background", obj, ["mouseover"]);
    this._addCss("HScrollBarControl>#incbutton", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::img_WF_VscrollDecO.png')");
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#d1d1d1ff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#decbutton", "background", obj, ["pushed", "selected"]);
    this._addCss("VScrollBarControl>#incbutton", "background", obj, ["pushed", "selected"]);
    this._addCss("HScrollBarControl>#decbutton", "background", obj, ["pushed"]);
    this._addCss("HScrollBarControl>#incbutton", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_VscrollDecP.png')");
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_VscrollDecD.png')");
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_VscrollIncN.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_WF_VscrollIncO.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::img_WF_VscrollIncP.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_VscrollIncD.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("#c2c2c2ff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["normal", "selected"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["normal", "selected"]);

    obj = new nexacro.Style_border("2","solid","#f1f1f1ff","");
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#acacadff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_HscrollDecN.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_WF_HscrollDecO.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["mouseover"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["focused"]);

    obj = new nexacro.Style_value("URL('img::img_WF_HscrollDecP.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["pushed"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_HscrollDecD.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_HscrollIncN.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_WF_HscrollIncO.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::img_WF_HscrollIncP.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_HscrollIncD.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("#dcdcdcff","","","0","0","0","0","true");
    this._addCss("*>#resizebutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button", "align", obj, ["normal", "selected"]);
    this._addCss("FileDownload", "align", obj, ["normal"]);
    this._addCss("Grid", "align", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_txtNormal", "align", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_txtBold", "align", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "align", obj, ["normal", "selected"]);
    this._addCss("Static.Guide_Color", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::btn_WF_CommonN.png","stretch","3","3","0","0","true");
    this._addCss("Button", "background", obj, ["normal", "selected"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Button", "color", obj, ["normal", "selected"]);
    this._addCss("Div", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_HeadLink_B", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum01", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum04", "color", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["normal", "selected"]);
    this._addCss("GroupBox", "color", obj, ["normal", "mouseover"]);
    this._addCss("MaskEdit", "color", obj, ["normal"]);
    this._addCss("Menu", "color", obj, ["normal"]);
    this._addCss("PopupDiv", "color", obj, ["normal"]);
    this._addCss("Tab", "color", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button", "cursor", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar", "cursor", obj, ["normal"]);
    this._addCss("FileDownload", "cursor", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_BodyLink", "cursor", obj, ["normal", "mouseover"]);
    this._addCss(".Cellgrd_WF_BodyLink_B", "cursor", obj, ["normal", "mouseover"]);
    this._addCss(".Cellgrd_WF_BodyLink_title", "cursor", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controlbutton", "cursor", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss("Button", "font", obj, ["normal", "selected"]);
    this._addCss("Calendar", "font", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "font", obj, ["normal"]);
    this._addCss("CheckBox", "font", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Combo", "font", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "font", obj, ["normal"]);
    this._addCss("Combo>#combolist", "font", obj, ["normal"]);
    this._addCss("Div", "font", obj, ["normal"]);
    this._addCss("Edit", "font", obj, ["normal"]);
    this._addCss("FileDownload", "font", obj, ["normal"]);
    this._addCss("FileUpload", "font", obj, ["normal", "selected", "focused", "mouseover"]);
    this._addCss("Grid", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_BodyLink_title", "font", obj, ["normal"]);
    this._addCss(".grd_WF_unit", "font", obj, ["normal"]);
    this._addCss("Grid>#controledit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "font", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "font", obj, ["normal"]);
    this._addCss("ListBox", "font", obj, ["normal"]);
    this._addCss("MaskEdit", "font", obj, ["normal"]);
    this._addCss("PopupDiv", "font", obj, ["normal"]);
    this._addCss("Radio", "font", obj, ["normal", "mouseover", "selected", "pushed", "focused"]);
    this._addCss("Spin", "font", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Static", "font", obj, ["normal"]);
    this._addCss("TextArea", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("Button", "padding", obj, ["normal", "selected"]);
    this._addCss("Calendar>#dropbutton", "padding", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileDownload", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "padding", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "padding", obj, ["normal", "selected"]);
    this._addCss("Static", "padding", obj, ["normal"]);
    this._addCss("Calendar.readonly>#dropbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Button", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Combo>#comboedit", "color", obj, ["mouseover", "focused"]);
    this._addCss("Combo>#combolist", "color", obj, ["mouseover", "focused"]);
    this._addCss("Edit", "color", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controledit", "color", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "color", obj, ["mouseover", "focused"]);
    this._addCss("ListBox", "color", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit", "color", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("TextArea", "color", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("","img::btn_WF_CommonO.png","stretch","3","3","0","0","true");
    this._addCss("Button", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","img::btn_WF_CommonP.png","stretch","3","3","0","0","true");
    this._addCss("Button", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","img::btn_WF_CommonD.png","stretch","3","3","0","0","true");
    this._addCss("Button", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Button", "color", obj, ["disabled"]);
    this._addCss("Calendar", "color", obj, ["disabled"]);
    this._addCss("Calendar>#calendaredit", "color", obj, ["disabled"]);
    this._addCss("CheckBox", "color", obj, ["disabled"]);
    this._addCss("CheckBox.agree", "color", obj, ["disabled", "readonly"]);
    this._addCss("Combo", "color", obj, ["disabled"]);
    this._addCss("Combo>#combolist", "color", obj, ["disabled"]);
    this._addCss("Edit", "color", obj, ["disabled"]);
    this._addCss("FileDownload", "color", obj, ["disabled"]);
    this._addCss("Grid>#body", "color", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "color", obj, ["disabled"]);
    this._addCss("GroupBox", "color", obj, ["disabled"]);
    this._addCss("ImageViewer", "color", obj, ["disabled"]);
    this._addCss("ListBox", "color", obj, ["disabled"]);
    this._addCss("MaskEdit", "color", obj, ["disabled"]);
    this._addCss("Menu", "color", obj, ["disabled"]);
    this._addCss("Menu.menu_oper", "color", obj, ["disabled"]);
    this._addCss("PopupMenu", "color", obj, ["disabled"]);
    this._addCss("Radio", "color", obj, ["disabled"]);
    this._addCss("Spin", "color", obj, ["disabled"]);
    this._addCss("Spin>#spinedit", "color", obj, ["disabled"]);
    this._addCss("Static", "color", obj, ["disabled"]);
    this._addCss("Tab", "color", obj, ["disabled"]);
    this._addCss("TextArea", "color", obj, ["disabled"]);
    this._addCss("Calendar.error>#calendaredit", "color", obj, ["disabled"]);
    this._addCss("Combo.error>#comboedit", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#ccccccff","");
    this._addCss("Calendar", "border", obj, ["normal"]);
    this._addCss("Combo", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("23");
    this._addCss("Calendar", "buttonsize", obj, ["normal"]);
    this._addCss("Combo", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar", "dayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "dayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar", "daybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Calendar", "daycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체");
    this._addCss("Calendar", "dayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "dayfont", obj, ["normal"]);

    obj = new nexacro.Style_value("22 22");
    this._addCss("Calendar", "daysize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daysize", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","img::img_WF_PopCalBG.png","repeat-x","0","0","0","0","true");
    this._addCss("Calendar", "popupbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#4b4b4bff","");
    this._addCss("Calendar", "popupborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar", "popupbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbordertype", obj, ["normal"]);
    this._addCss("Menu", "popupbordertype", obj, ["normal"]);
    this._addCss("Menu.menu_oper", "popupbordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("166 186");
    this._addCss("Calendar", "popupsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupsize", obj, ["normal"]);

    obj = new nexacro.Style_background("#faf0d2ff","","","0","0","0","0","true");
    this._addCss("Calendar", "background", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Combo", "background", obj, ["mouseover", "focused"]);
    this._addCss("Edit", "background", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#summ", "background", obj, ["normal"]);
    this._addCss("Grid>#summary", "background", obj, ["normal"]);
    this._addCss("Grid>#controledit", "background", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["mouseover", "focused", "selected"]);
    this._addCss("MaskEdit", "background", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Spin", "background", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("TextArea", "background", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#a50034ff","");
    this._addCss("Calendar", "border", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Combo", "border", obj, ["mouseover", "focused"]);
    this._addCss("Edit", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controledit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["mouseover", "focused", "selected"]);
    this._addCss("MaskEdit", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Spin", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("TextArea", "border", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Calendar", "daycolor", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("#d80546ff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["selected"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar", "daycolor", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["selected"]);

    obj = new nexacro.Style_font("antialias bold 9 LG스마트체 Regular, LG스마트체");
    this._addCss("Calendar", "dayfont", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar", "dayfont", obj, ["selected"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("Calendar", "background", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal", "selected"]);
    this._addCss("Combo", "background", obj, ["disabled"]);
    this._addCss("Edit", "background", obj, ["disabled"]);
    this._addCss("Grid>#resizebutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controledit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("MaskEdit", "background", obj, ["disabled"]);
    this._addCss("Spin", "background", obj, ["disabled"]);
    this._addCss("TextArea", "background", obj, ["disabled"]);
    this._addCss("Calendar.essential", "background", obj, ["disabled"]);
    this._addCss("Combo.essential", "background", obj, ["disabled"]);
    this._addCss("Edit.essential", "background", obj, ["disabled"]);
    this._addCss("MaskEdit.essential", "background", obj, ["disabled"]);
    this._addCss("Spin.essential", "background", obj, ["disabled"]);
    this._addCss("TextArea.essential", "background", obj, ["disabled"]);
    this._addCss("Calendar.error", "background", obj, ["disabled"]);
    this._addCss("Combo.error", "background", obj, ["disabled"]);
    this._addCss("Edit.error", "background", obj, ["disabled"]);
    this._addCss("MaskEdit.error", "background", obj, ["disabled"]);
    this._addCss("Spin.error", "background", obj, ["disabled"]);
    this._addCss("TextArea.error", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","");
    this._addCss("Calendar", "border", obj, ["disabled"]);
    this._addCss("Combo", "border", obj, ["disabled"]);
    this._addCss("Combo>#combolist", "border", obj, ["disabled"]);
    this._addCss("Edit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["disabled"]);
    this._addCss("GroupBox", "border", obj, ["disabled"]);
    this._addCss("ImageViewer", "border", obj, ["disabled"]);
    this._addCss("ListBox", "border", obj, ["disabled"]);
    this._addCss("MaskEdit", "border", obj, ["disabled"]);
    this._addCss("Spin", "border", obj, ["disabled"]);
    this._addCss("TextArea", "border", obj, ["disabled"]);

    obj = new nexacro.Style_background("#e9ecf0ff","","","0","0","0","0","true");
    this._addCss("Calendar", "background", obj, ["readonly"]);
    this._addCss("Combo", "background", obj, ["readonly"]);
    this._addCss("Edit", "background", obj, ["readonly"]);
    this._addCss(".Cellgrd_WF_sum01", "background", obj, ["normal"]);
    this._addCss("Grid>#controledit", "background", obj, ["readonly"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["readonly"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["readonly"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["readonly"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["readonly"]);
    this._addCss("MaskEdit", "background", obj, ["readonly"]);
    this._addCss("Spin", "background", obj, ["readonly"]);
    this._addCss("TextArea", "background", obj, ["readonly"]);
    this._addCss("Calendar.readonly", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo.readonly", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "background", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("MaskEdit.readonly", "background", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("Spin.readonly", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TextArea.readonly", "background", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_border("1","solid","#d2d2d2ff","");
    this._addCss("Calendar", "border", obj, ["readonly"]);
    this._addCss("Combo", "border", obj, ["readonly"]);
    this._addCss("Edit", "border", obj, ["readonly"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["readonly"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["readonly"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["readonly"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["readonly"]);
    this._addCss("MaskEdit", "border", obj, ["readonly"]);
    this._addCss("Spin", "border", obj, ["readonly"]);
    this._addCss("TextArea", "border", obj, ["readonly"]);
    this._addCss("Calendar.readonly", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo.readonly", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "border", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("MaskEdit.readonly", "border", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("Spin.readonly", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TextArea.readonly", "border", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_padding("1 4 0 4");
    this._addCss("Calendar>#calendaredit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#d80546");
    this._addCss("Calendar>#calendaredit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controledit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "selectbackground", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "selectbackground", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#calendaredit", "selectcolor", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "selectcolor", obj, ["normal"]);
    this._addCss("Edit", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controledit", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectcolor", obj, ["normal"]);
    this._addCss("MaskEdit", "selectcolor", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "selectcolor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TextArea", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalendarN.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalendarO.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalendarD.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar.readonly>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_SpinupN.png')");
    this._addCss("Calendar>#spinupbutton", "image", obj, ["normal", "selected"]);
    this._addCss("Spin>#spinupbutton", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Calendar>#spinupbutton", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Calendar>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Combo>#dropbutton", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Spin>#spinupbutton", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Spin>#spindownbutton", "imagealign", obj, ["normal", "selected"]);
    this._addCss("Spin.readonly>#spinupbutton", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin.readonly>#spindownbutton", "imagealign", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_SpinupO.png')");
    this._addCss("Calendar>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Spin>#spinupbutton", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_SpinupD.png')");
    this._addCss("Calendar>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Spin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Spin.readonly>#spinupbutton", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_SpindownN.png')");
    this._addCss("Calendar>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_SpindownO.png')");
    this._addCss("Calendar>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Spin>#spindownbutton", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_SpindownD.png')");
    this._addCss("Calendar>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Spin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Spin.readonly>#spindownbutton", "image", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "bodybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "bodyborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodyborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "bodybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체");
    this._addCss("Calendar>#popupcalendar", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "font", obj, ["normal"]);
    this._addCss("PopupMenu", "font", obj, ["normal"]);
    this._addCss("Tab", "font", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("yyyy.MM");
    this._addCss("Calendar>#popupcalendar", "headerformat", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerformat", obj, ["normal"]);

    obj = new nexacro.Style_value("31");
    this._addCss("Calendar>#popupcalendar", "headerheight", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerheight", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Calendar>#popupcalendar", "headercolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headercolor", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "headerbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "headerborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "headerbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 12 LG스마트체 Regular, LG스마트체");
    this._addCss("Calendar>#popupcalendar", "headerfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerfont", obj, ["normal"]);

    obj = new nexacro.Style_padding("26 5 5 5");
    this._addCss("Calendar>#popupcalendar", "ncpadding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "ncpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "saturdayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체");
    this._addCss("Calendar>#popupcalendar", "saturdayfont", obj, ["normal", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayfont", obj, ["normal", "pushed"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Calendar>#popupcalendar", "saturdaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "sundayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "sundaybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("Calendar>#popupcalendar", "sundaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaycolor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체");
    this._addCss("Calendar>#popupcalendar", "sundayfont", obj, ["normal", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayfont", obj, ["normal", "pushed"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Calendar>#popupcalendar", "todaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#f6da40ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "todaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "todayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "todaybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체");
    this._addCss("Calendar>#popupcalendar", "todayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todayfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#bebebe");
    this._addCss("Calendar>#popupcalendar", "trailingdaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "trailingdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Calendar>#popupcalendar", "usetrailingday", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "usetrailingday", obj, ["normal"]);

    obj = new nexacro.Style_value("일 월 화 수 목 금 토");
    this._addCss("Calendar>#popupcalendar", "weekformat", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekformat", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Calendar>#popupcalendar", "weekcolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "weekbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekbackground", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체");
    this._addCss("Calendar>#popupcalendar", "weekfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Calendar>#popupcalendar", "saturdaycolor", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaycolor", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Calendar>#popupcalendar", "sundaycolor", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaycolor", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#d80546ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["pushed"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "saturdaycolor", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaycolor", obj, ["pushed"]);

    obj = new nexacro.Style_background("#d80546ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["pushed"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "sundaycolor", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaycolor", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalPrevN.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalPrevO.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalPrevP.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalNextN.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalNextO.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalNextP.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Calendar>#popupcalendar>#yearspin", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss(".Cellgrd_WF_Number", "align", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit", "align", obj, ["normal"]);
    this._addCss("Spin", "align", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "align", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("8");
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("antialias 12 LG스마트체 Regular, LG스마트체");
    this._addCss("Calendar>#popupcalendar>#yearspin", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 -4 1 2");
    this._addCss("Calendar>#popupcalendar>#yearspin", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_padding("1 0 0 2");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalSpinupN.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalSpinupO.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalSpindownN.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal", "selected"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalSpindownO.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("CheckBox", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Radio", "buttonalign", obj, ["normal", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_background("","img::img_WF_CheckBoxN.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("CheckBox", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("FileUpload", "buttonborder", obj, ["normal", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_value("URL('img::img_WF_CheckN.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("16");
    this._addCss("CheckBox", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_padding("-2 0 0 2");
    this._addCss("CheckBox", "textpadding", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","img::img_WF_CheckBoxD.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_CheckD.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_background("","img::img_WF_CheckBoxR.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["readonly"]);
    this._addCss("CheckBox.readonly", "buttonbackground", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::img_WF_CheckR.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["readonly"]);
    this._addCss("CheckBox.readonly", "buttonimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("right middle");
    this._addCss("CheckBox.agree", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","img::bg_check_agree_N.png","","0","0","0","0","true");
    this._addCss("CheckBox.agree", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("CheckBox.agree", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcheckbox", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('img::img_check_agree_N.png')");
    this._addCss("CheckBox.agree", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("17");
    this._addCss("CheckBox.agree", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_font("antialias 10 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss("CheckBox.agree", "font", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_padding("-2 5 0 0");
    this._addCss("CheckBox.agree", "textpadding", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","img::bg_check_agree_D.png","","0","0","0","0","true");
    this._addCss("CheckBox.agree", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_check_agree_D.png')");
    this._addCss("CheckBox.agree", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_background("","img::bg_check_agree_R.png","","0","0","0","0","true");
    this._addCss("CheckBox.agree", "buttonbackground", obj, ["readonly"]);

    obj = new nexacro.Style_value("URL('img::img_check_agree_R.png')");
    this._addCss("CheckBox.agree", "buttonimage", obj, ["readonly"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Combo", "displaynulltextcolor", obj, ["normal"]);
    this._addCss("Edit", "displaynulltextcolor", obj, ["normal"]);
    this._addCss("Grid>#controledit", "displaynulltextcolor", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "displaynulltextcolor", obj, ["normal"]);
    this._addCss("TextArea", "displaynulltextcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["normal", "disabled"]);
    this._addCss("Menu.menu_oper", "itembackground", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Combo", "itemborder", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemborder", obj, ["normal"]);
    this._addCss("ListBox", "itemborder", obj, ["normal"]);
    this._addCss("PopupMenu", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Combo", "itembordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itembordertype", obj, ["normal"]);
    this._addCss("Menu", "itembordertype", obj, ["normal"]);
    this._addCss("Menu.menu_oper", "itembordertype", obj, ["normal"]);
    this._addCss("PopupMenu", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Combo", "itemcolor", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss("Combo", "itemfont", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemfont", obj, ["normal"]);

    obj = new nexacro.Style_value("22");
    this._addCss("Combo", "itemheight", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemheight", obj, ["normal"]);
    this._addCss("ListBox", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 9 0 9");
    this._addCss("Combo", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["mouseover", "focused"]);
    this._addCss("Combo>#combolist", "itembackground", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["mouseover", "focused"]);
    this._addCss("ListBox", "itembackground", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["selected"]);
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["selected"]);
    this._addCss("ListBox", "itembackground", obj, ["selected"]);
    this._addCss("PopupMenu", "itembackground", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Combo", "itemcolor", obj, ["selected"]);
    this._addCss("Grid>#controlcombo", "itemcolor", obj, ["selected"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Combo", "itemcolor", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "itemcolor", obj, ["disabled"]);

    obj = new nexacro.Style_padding("0 -24 0 0");
    this._addCss("Combo", "padding", obj, ["readonly"]);
    this._addCss("Grid>#controlcombo", "padding", obj, ["readonly"]);

    obj = new nexacro.Style_padding("0 6 0 6");
    this._addCss("Combo>#comboedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#328efe");
    this._addCss("Combo>#comboedit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("Combo>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::cmb_WF_DropN.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("URL('img::cmb_WF_DropO.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::cmb_WF_DropD.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#000000ff","");
    this._addCss("Combo>#combolist", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "border", obj, ["normal"]);
    this._addCss("ListBox", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Combo>#combolist", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "background", obj, ["disabled"]);
    this._addCss("ListBox", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#c1c1c1ff","");
    this._addCss("Edit", "border", obj, ["normal"]);
    this._addCss("Grid>#controledit", "border", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["normal"]);
    this._addCss("MaskEdit", "border", obj, ["normal"]);
    this._addCss("Spin", "border", obj, ["normal"]);
    this._addCss("TextArea", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 5 0 5");
    this._addCss("Edit", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_Number", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_Text", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_txtNormal", "padding", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_txtBold", "padding", obj, ["normal"]);
    this._addCss("Grid>#controledit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "padding", obj, ["normal"]);
    this._addCss("MaskEdit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#d80546");
    this._addCss("Edit", "selectbackground", obj, ["normal"]);
    this._addCss("MaskEdit", "selectbackground", obj, ["normal"]);
    this._addCss("TextArea", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::btn_WF_DefaultN.png","stretch","3","3","0","0","true");
    this._addCss("FileDownload", "background", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["normal", "selected"]);

    obj = new nexacro.Style_background("","img::btn_WF_DefaultO.png","stretch","3","3","0","0","true");
    this._addCss("FileDownload", "background", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","img::btn_WF_DefaultP.png","stretch","3","3","0","0","true");
    this._addCss("FileDownload", "background", obj, ["pushed"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","img::btn_WF_DefaultD.png","stretch","3","3","0","0","true");
    this._addCss("FileDownload", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","img::btn_WF_fileupload_N.png","stretch","3","7","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["normal", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("FileUpload", "buttonbordertype", obj, ["normal", "selected", "focused", "mouseover"]);
    this._addCss("Tab", "buttonbordertype", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("FileUpload", "buttoncolor", obj, ["normal", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 4 0");
    this._addCss("FileUpload", "buttonpadding", obj, ["normal", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_value("73");
    this._addCss("FileUpload", "buttonsize", obj, ["normal", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_value("FileUpload");
    this._addCss("FileUpload", "buttontext", obj, ["normal", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_background("","img::bg_edt_fileupload_N.png","stretch","6","7","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["normal", "selected", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("FileUpload", "editborder", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("FileUpload", "editbordertype", obj, ["normal", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("FileUpload", "editcolor", obj, ["normal", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_padding("0 12 5 8");
    this._addCss("FileUpload", "editpadding", obj, ["normal", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_value("26");
    this._addCss("FileUpload", "itemheight", obj, ["normal", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_background("","img::btn_WF_fileupload_P.png","stretch","3","7","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["pushed"]);

    obj = new nexacro.Style_background("","img::btn_WF_fileupload_D.png","stretch","3","7","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("FileUpload", "buttoncolor", obj, ["disabled"]);

    obj = new nexacro.Style_background("","img::bg_edt_fileupload_D.png","stretch","6","7","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("FileUpload", "editcolor", obj, ["disabled"]);

    obj = new nexacro.Style_border("2","solid","#000000ff","","1","solid","#ccccccff","","1","solid","#ccccccff","","1","solid","#ccccccff","");
    this._addCss("Grid", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::icon_tree_open.png')");
    this._addCss("Grid", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::icon_tree_collapse.png')");
    this._addCss("Grid", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::icon_tree_expand.png')");
    this._addCss("Grid", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::icon_tree_item.png')");
    this._addCss("Grid", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::icon_tree_close.png')");
    this._addCss("Grid", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_line("1","dotted","#666666ff","");
    this._addCss("Grid", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5f5f7ff","","","0","0","0","0","true");
    this._addCss("Grid>#head", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#ccccccff","","0","none","","");
    this._addCss("Grid>#head", "border", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid>#body", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5f5f7ff","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5f5f7ff","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid>#summ", "cellcolor", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#head", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid>#summ", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체");
    this._addCss("Grid>#head", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","");
    this._addCss("Grid>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid>#body", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","");
    this._addCss("Grid>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid>#body", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_WF_Essential.png","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_Point", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_WF_Essential.png","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_Point", "background2", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::bg_WF_Essential.png') left top");
    this._addCss(".Cellgrd_WF_Point", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_grd_headline.png","stretch","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_headline", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::bg_grd_headline.png","stretch","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_headline", "background2", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::bg_grd_headline.png') stretch 0,0");
    this._addCss(".Cellgrd_WF_headline", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias underline 9 LG스마트체 Regular, LG스마트체");
    this._addCss(".Cellgrd_WF_HeadLink", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_HeadLink_B", "font", obj, ["normal", "mouseover"]);
    this._addCss("Tab", "font", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_color("#a50034");
    this._addCss(".Cellgrd_WF_HeadLink", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_HeadLink_B", "color", obj, ["mouseover"]);
    this._addCss(".Cellgrd_WF_BodyLink", "color", obj, ["normal", "mouseover"]);
    this._addCss(".Cellgrd_WF_BodyLink_B", "color", obj, ["mouseover"]);
    this._addCss(".Cellgrd_WF_BodyLink_title", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#a50034");
    this._addCss(".Cellgrd_WF_HeadLink", "color2", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_HeadLink_B", "color2", obj, ["mouseover"]);
    this._addCss(".Cellgrd_WF_BodyLink", "color2", obj, ["normal", "mouseover"]);
    this._addCss(".Cellgrd_WF_BodyLink_B", "color2", obj, ["mouseover"]);
    this._addCss(".Cellgrd_WF_BodyLink_title", "color2", obj, ["mouseover"]);

    obj = new nexacro.Style_font("antialias underline 9 LG스마트체 Regular, LG스마트체");
    this._addCss(".Cellgrd_WF_HeadLink", "selectfont", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_HeadLink_B", "selectfont", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#a50034");
    this._addCss(".Cellgrd_WF_HeadLink", "selectcolor", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_HeadLink_B", "selectcolor", obj, ["mouseover"]);
    this._addCss(".Cellgrd_WF_BodyLink", "selectcolor", obj, ["normal", "mouseover"]);
    this._addCss(".Cellgrd_WF_BodyLink_B", "selectcolor", obj, ["mouseover"]);
    this._addCss(".Cellgrd_WF_BodyLink_title", "selectcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss(".Cellgrd_WF_HeadLink_B", "color2", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss(".Cellgrd_WF_HeadLink_B", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Grid>#body", "color2", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_BodyLink_B", "color2", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_BodyLink_title", "color2", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss("Grid>#body", "cellfont", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_txtNormal", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_padding("2 3 2 3");
    this._addCss("Grid>#body", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("#dceaeb");
    this._addCss("Grid>#body", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#222222");
    this._addCss("Grid>#body", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum, Arial");
    this._addCss("Grid>#body", "selectfont", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_BodyLink_title", "selectfont", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_txtNormal", "selectfont", obj, ["normal"]);
    this._addCss(".grd_WF_unit", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Grid>#body", "color2", obj, ["disabled"]);

    obj = new nexacro.Style_font("underline 9 Dotum, Arial");
    this._addCss(".Cellgrd_WF_BodyLink", "font", obj, ["normal", "mouseover"]);
    this._addCss(".Cellgrd_WF_BodyLink_B", "font", obj, ["normal", "mouseover"]);
    this._addCss(".Cellgrd_WF_BodyLink_title", "font", obj, ["mouseover"]);

    obj = new nexacro.Style_font("underline 9 Dotum, Arial");
    this._addCss(".Cellgrd_WF_BodyLink", "selectfont", obj, ["normal", "mouseover"]);
    this._addCss(".Cellgrd_WF_BodyLink_B", "selectfont", obj, ["normal", "mouseover"]);
    this._addCss(".Cellgrd_WF_BodyLink_title", "selectfont", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss(".Cellgrd_WF_BodyLink_B", "selectcolor", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_BodyLink_title", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 11 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss(".Cellgrd_WF_txtBold", "cellfont", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_txtRed", "cellfont", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_txtBlue", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 11 LG스마트체 Regular, LG스마트체,Arial");
    this._addCss(".Cellgrd_WF_txtBold", "selectfont", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_txtRed", "selectfont", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_txtBlue", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#d80546ff");
    this._addCss(".Cellgrd_WF_txtRed", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#d80546ff");
    this._addCss(".Cellgrd_WF_txtRed", "color2", obj, ["normal"]);

    obj = new nexacro.Style_color("#d80546ff");
    this._addCss(".Cellgrd_WF_txtRed", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#019ac3");
    this._addCss(".Cellgrd_WF_txtBlue", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#019ac3");
    this._addCss(".Cellgrd_WF_txtBlue", "color2", obj, ["normal"]);

    obj = new nexacro.Style_color("#019ac3");
    this._addCss(".Cellgrd_WF_txtBlue", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Grid>#summ", "border", obj, ["normal"]);
    this._addCss("Grid>#summary", "border", obj, ["normal"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Grid>#summ", "cellalign", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#faf0d2ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#faf0d2ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Dotum, Arial");
    this._addCss("Grid>#summ", "cellfont", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_padding("3 7 2 7");
    this._addCss("Grid>#summ", "cellpadding", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#summ", "cellline", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#summ", "selectline", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Dotum, Arial");
    this._addCss(".Cellgrd_WF_sum01", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum04", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("#ddf3f6ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum02", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5fff3ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum03", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f6f1e3ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum04", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#faf0d2ff","","","0","0","0","0","true");
    this._addCss(".inputPoint", "controlbackground", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 5 0 10");
    this._addCss(".inputUnit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss(".grd_WF_unit", "color", obj, ["normal"]);
    this._addCss("Static.sta_GID_txt", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss(".grd_WF_unit", "color2", obj, ["normal"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss(".grd_WF_unit", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss(".grd_WF_unit", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss(".grd_WF_unit", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","","1","solid","#d80546ff","");
    this._addCss(".Cellgrd_WF_FreezeColumnLast", "line", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_FreezeRowLast", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","","1","solid","#d80546ff","");
    this._addCss(".Cellgrd_WF_FreezeColumnLast", "selectline", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_FreezeRowLast", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","","0","none","","","0","none","","","1","solid","#e0e0e0ff","");
    this._addCss("Grid>#resizebutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("Grid>#controltextarea", "align", obj, ["normal"]);
    this._addCss("TextArea", "align", obj, ["normal"]);

    obj = new nexacro.Style_value("3");
    this._addCss("Grid>#controltextarea", "linespace", obj, ["normal"]);
    this._addCss("TextArea", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 7");
    this._addCss("Grid>#controltextarea", "padding", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum,Arial");
    this._addCss("Grid>#controlbutton", "font", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("Grid>#controlcheckbox", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","img::img_grd_CheckBoxN.png","","0","0","0","0","true");
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('img::img_grd_CheckN.png')");
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("15");
    this._addCss("Grid>#controlcheckbox", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Radio", "buttonsize", obj, ["normal", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_padding("-2 0 0 4");
    this._addCss("Grid>#controlcheckbox", "textpadding", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","img::img_grd_CheckBoxD.png","","0","0","0","0","true");
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_grd_CheckD.png')");
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_padding("1 9 0 9");
    this._addCss("Grid>#controlcombo", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 6 0 6");
    this._addCss("Grid>#controlcombo>#comboedit", "padding", obj, ["normal", "readonly"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalSpinupD.png')");
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalSpindownD.png')");
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_font("antialias 8 LG스마트체 Regular, LG스마트체");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekfont", obj, ["normal"]);

    obj = new nexacro.Style_background("","img::img_WF_Expand.png","","0","0","50","50","true");
    this._addCss("Grid>#controlexpand", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#f2f4f6ff","","","0","0","0","0","true");
    this._addCss("GroupBox", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#d1d4d8ff","");
    this._addCss("GroupBox", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 10 LG스마트체 Regular, LG스마트체");
    this._addCss("GroupBox", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("");
    this._addCss("GroupBox", "titlepadding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("GroupBox", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#fafafaff","img::img_WF_PhotoImageN.png","","0","0","50","50","true");
    this._addCss("ImageViewer", "background", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_border("1","solid","#dbdbdbff","");
    this._addCss("ImageViewer", "border", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_background("#f7f7f7ff","img::img_WF_PhotoImageD.png","","0","0","50","50","true");
    this._addCss("ImageViewer", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("ListBox", "itembackground", obj, ["normal"]);
    this._addCss("Menu", "itembackground", obj, ["normal"]);
    this._addCss("PopupMenu", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 4 0 4");
    this._addCss("ListBox", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 13 LG스마트체 Regular, LG스마트체");
    this._addCss("Menu", "font", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ffffff00","","0","none","","","1","solid","#d80546ff","","0","none","","");
    this._addCss("Menu", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 30 0 30");
    this._addCss("Menu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_MenuArrow.png')");
    this._addCss("Menu", "expandimage", obj, ["normal"]);
    this._addCss("PopupMenu", "expandimage", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Menu", "popupbackground", obj, ["normal"]);
    this._addCss("Menu.menu_oper", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#333333ff","");
    this._addCss("Menu", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Menu", "popupcolor", obj, ["normal"]);
    this._addCss("Menu.menu_oper", "popupcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 LG스마트체 Regular, LG스마트체");
    this._addCss("Menu", "popupfont", obj, ["normal"]);
    this._addCss("Menu.menu_oper", "popupfont", obj, ["normal"]);

    obj = new nexacro.Style_value("25");
    this._addCss("Menu", "popupitemheight", obj, ["normal"]);
    this._addCss("Menu.menu_oper", "popupitemheight", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Menu", "popupitembackground", obj, ["normal"]);
    this._addCss("Menu.menu_oper", "popupitembackground", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Menu", "popuppadding", obj, ["normal"]);
    this._addCss("Menu.menu_oper", "popuppadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 20");
    this._addCss("Menu", "popupitempadding", obj, ["normal"]);
    this._addCss("Menu.menu_oper", "popupitempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#d80546ff","","","0","0","0","0","true");
    this._addCss("Menu", "itembackground", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#d80546ff","","0","none","","","1","solid","#d80546ff","","0","none","","");
    this._addCss("Menu", "itemborder", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Menu", "popupcolor", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Menu.menu_oper", "popupcolor", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("Menu", "popupitembackground", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Menu", "popupcolor", obj, ["disabled"]);
    this._addCss("Menu.menu_oper", "popupcolor", obj, ["disabled"]);

    obj = new nexacro.Style_font("antialias 11 LG스마트체 Regular, LG스마트체");
    this._addCss("Menu.menu_oper", "font", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#ffffff00","","0","none","","","2","solid","#ffffff00","","0","none","","");
    this._addCss("Menu.menu_oper", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 12 0 12");
    this._addCss("Menu.menu_oper", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d80546ff","");
    this._addCss("Menu.menu_oper", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("Menu.menu_oper", "color", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_border("2","solid","#ffffff00","","0","none","","","2","solid","#d80546ff","","0","none","","");
    this._addCss("Menu.menu_oper", "itemborder", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("#a40f3eff","","","0","0","0","0","true");
    this._addCss("Menu.menu_oper", "popupitembackground", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#333333ff","");
    this._addCss("PopupMenu", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("25");
    this._addCss("PopupMenu", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 10");
    this._addCss("PopupMenu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#d6d6d6ff","","","0","0","0","0","true");
    this._addCss("ProgressBar", "background", obj, ["normal", "disabled"]);
    this._addCss("ProgressBarControl", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#d80546");
    this._addCss("ProgressBar", "barcolor", obj, ["normal"]);
    this._addCss("ProgressBarControl", "barcolor", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("ProgressBar", "bargradation", obj, ["normal"]);
    this._addCss("ProgressBarControl", "bargradation", obj, ["normal"]);

    obj = new nexacro.Style_value("normal");
    this._addCss("ProgressBar", "bartype", obj, ["normal"]);
    this._addCss("ProgressBarControl", "bartype", obj, ["normal"]);

    obj = new nexacro.Style_value("forward");
    this._addCss("ProgressBar", "direction", obj, ["normal"]);
    this._addCss("ProgressBarControl", "direction", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("ProgressBar", "font", obj, ["normal"]);
    this._addCss("ProgressBarControl", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("ProgressBar", "smooth", obj, ["normal"]);
    this._addCss("ProgressBarControl", "smooth", obj, ["normal"]);

    obj = new nexacro.Style_color("#a8a8aa");
    this._addCss("ProgressBar", "barcolor", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "barcolor", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["normal", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_value("1 solid #c1c1c1");
    this._addCss("Radio", "buttonborder", obj, ["normal", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_bordertype("round","5","5","true","true","true","true");
    this._addCss("Radio", "buttonbordertype", obj, ["normal", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('img::img_WF_RadioN.png')");
    this._addCss("Radio", "buttonimage", obj, ["normal", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_padding("0 0 0 8");
    this._addCss("Radio", "textpadding", obj, ["normal", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["disabled"]);
    this._addCss("Radio.essential", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("1 solid #e0e0e0");
    this._addCss("Radio", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_RadioD.png')");
    this._addCss("Radio", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_background("#e9ecf0ff","","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["readonly"]);
    this._addCss("Radio.readonly", "buttonbackground", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("1 solid #d2d2d2");
    this._addCss("Radio", "buttonborder", obj, ["readonly"]);

    obj = new nexacro.Style_value("URL('img::img_WF_RadioR.png')");
    this._addCss("Radio", "buttonimage", obj, ["readonly"]);
    this._addCss("Radio.readonly", "buttonimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("right");
    this._addCss("Spin", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_value("21");
    this._addCss("Spin", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_padding("-1 0 0 0");
    this._addCss("Spin", "padding", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 1 0 1");
    this._addCss("Spin>#spinedit", "padding", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_border("2","solid","#a40f3eff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Tab", "border", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("1 solid #cccccc");
    this._addCss("Tab", "buttonborder", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("8 20 6 20");
    this._addCss("Tab", "buttonpadding", obj, ["normal", "focused"]);

    obj = new nexacro.Style_margin("0 -1 0 0");
    this._addCss("Tab", "buttonmargin", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Tab", "color", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("false");
    this._addCss("Tab", "showextrabutton", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#a40f3eff","","","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["selected"]);

    obj = new nexacro.Style_value("1 solid #a40f3e");
    this._addCss("Tab", "buttonborder", obj, ["selected"]);

    obj = new nexacro.Style_padding("8 18 6 18");
    this._addCss("Tab", "buttonpadding", obj, ["selected"]);

    obj = new nexacro.Style_font("antialias bold 9 LG스마트체 Regular, LG스마트체");
    this._addCss("Tab", "font", obj, ["selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_TabSpinupN.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_TabSpindownN.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_TabExtra.png')");
    this._addCss("Tab>#extrabutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Tabpage", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tabpage", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Tabpage", "padding", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("Tabpage", "stepalign", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tabpage", "stepshowtype", obj, ["normal"]);

    obj = new nexacro.Style_padding("4 0 0 7");
    this._addCss("TextArea", "padding", obj, ["normal"]);

    obj = new nexacro.Style_padding("-1 -24 0 0");
    this._addCss("Combo.readonly", "padding", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("1 solid #d2d2d2");
    this._addCss("Radio.readonly", "buttonborder", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_background("#fefae1ff","","","0","0","0","0","true");
    this._addCss("Calendar.essential", "background", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Combo.essential", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Edit.essential", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("MaskEdit.essential", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Spin.essential", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("TextArea.essential", "background", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_background("#fefae1ff","","","0","0","0","0","true");
    this._addCss(".bodyEssential", "controlbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#fefae1ff","","","0","0","0","0","true");
    this._addCss("Radio.essential", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#faebebff","","","0","0","0","0","true");
    this._addCss("Calendar.error", "background", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Combo.error", "background", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Edit.error", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("MaskEdit.error", "background", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Spin.error", "background", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.error", "background", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_color("#ff0000");
    this._addCss("Calendar.error", "color", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Calendar.error>#calendaredit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo.error", "color", obj, ["normal", "selected", "mouseover", "pushed", "focused"]);
    this._addCss("Combo.error>#comboedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.error", "color", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("MaskEdit.error", "color", obj, ["normal", "selected", "mouseover", "focused"]);
    this._addCss("Spin.error>#spinedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TextArea.error", "color", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_border("1","solid","#e1261cff","");
    this._addCss("Calendar.error", "border", obj, ["mouseover", "focused"]);
    this._addCss("Combo.error", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Edit.error", "border", obj, ["mouseover", "focused", "selected"]);
    this._addCss("MaskEdit.error", "border", obj, ["mouseover", "focused"]);
    this._addCss("Spin.error", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("TextArea.error", "border", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Calendar.display", "buttonsize", obj, ["normal", "selected"]);
    this._addCss("Combo.display", "buttonsize", obj, ["normal", "selected", "readonly"]);
    this._addCss("Spin.display", "buttonsize", obj, ["normal", "selected", "readonly"]);

    obj = new nexacro.Style_background("#ff481499","","","0","0","0","0","true");
    this._addCss("Static.Guide_Color", "background", obj, ["normal"]);

    obj = new nexacro.Style_font("8 Dotum");
    this._addCss("Static.Guide_Color", "font", obj, ["normal"]);

    obj = new nexacro.Style_font("8 Dotum, Arial");
    this._addCss("Static.sta_GID_txt", "font", obj, ["normal"]);

    obj = null;
    
//[add theme images]
  };
})();
