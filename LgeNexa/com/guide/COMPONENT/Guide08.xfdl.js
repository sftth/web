(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("Guide08");
                this.set_titletext("Search Area");
                this._setFormPosition(0,0,1228,483);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_Search01", "absolute", "0", "394", null, "126", "0", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "328", "8", "189", "21", null, null, this.div_Search01);
            this.div_Search01.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj = new Static("Static01", "absolute", "20", "8", "64", "21", null, null, this.div_Search01);
            obj.set_taborder("0");
            obj.set_text("Lebel01");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "264", "8", "64", "21", null, null, this.div_Search01);
            obj.set_taborder("2");
            obj.set_text("Lebel02");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "84", "8", "150", "21", null, null, this.div_Search01);
            this.div_Search01.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj = new Combo("Combo02", "absolute", "84", "37", "150", "21", null, null, this.div_Search01);
            this.div_Search01.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj = new Static("Static00", "absolute", "20", "37", "64", "21", null, null, this.div_Search01);
            obj.set_taborder("8");
            obj.set_text("Lebel05");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "264", "37", "64", "21", null, null, this.div_Search01);
            obj.set_taborder("10");
            obj.set_text("Lebel06");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search01.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox00", "absolute", "328", "37", "56", "21", null, null, this.div_Search01);
            obj.set_taborder("11");
            obj.set_text("VMI");
            obj.set_value("true");
            this.div_Search01.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox01", "absolute", "384", "37", "68", "21", null, null, this.div_Search01);
            obj.set_taborder("12");
            obj.set_text("GLAP");
            this.div_Search01.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox02", "absolute", "452", "37", "65", "21", null, null, this.div_Search01);
            obj.set_taborder("13");
            obj.set_text("Nexa");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "20", "66", "64", "21", null, null, this.div_Search01);
            obj.set_taborder("18");
            obj.set_text("Lebel09");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Combo("Combo03", "absolute", "84", "66", "150", "21", null, null, this.div_Search01);
            this.div_Search01.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj = new Button("Button05", "absolute", null, "8", "94", "21", "20", null, this.div_Search01);
            obj.set_taborder("146");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            obj.set_tooltiptext("Inquiry");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "103", "0", "92", "8", null, null, this.div_Search01);
            obj.set_taborder("147");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "103", "29", "92", "8", null, null, this.div_Search01);
            obj.set_taborder("148");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "103", "58", "92", "8", null, null, this.div_Search01);
            obj.set_taborder("149");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "103", "87", "92", "8", null, null, this.div_Search01);
            obj.set_taborder("150");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "20", "95", "64", "21", null, null, this.div_Search01);
            obj.set_taborder("26");
            obj.set_text("Lebel13");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Combo("Combo04", "absolute", "84", "95", "150", "21", null, null, this.div_Search01);
            this.div_Search01.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj = new Static("Static12", "absolute", "103", "116", "92", "8", null, null, this.div_Search01);
            obj.set_taborder("153");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "547", "8", "64", "21", null, null, this.div_Search01);
            obj.set_taborder("4");
            obj.set_text("Lebel03");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Combo("Combo05", "absolute", "610", "8", "150", "21", null, null, this.div_Search01);
            this.div_Search01.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj = new Static("Static05", "absolute", "547", "37", "64", "21", null, null, this.div_Search01);
            obj.set_taborder("14");
            obj.set_text("Lebel07");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Combo("Combo06", "absolute", "610", "37", "150", "21", null, null, this.div_Search01);
            this.div_Search01.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj = new Static("Static13", "absolute", "790", "8", "64", "21", null, null, this.div_Search01);
            obj.set_taborder("6");
            obj.set_text("Lebel04");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Combo("Combo07", "absolute", "854", "8", "150", "21", null, null, this.div_Search01);
            this.div_Search01.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj = new Static("Static14", "absolute", "264", "66", "64", "21", null, null, this.div_Search01);
            obj.set_taborder("20");
            obj.set_text("Lebel10");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Combo("Combo08", "absolute", "328", "66", "189", "21", null, null, this.div_Search01);
            this.div_Search01.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj = new Static("Static15", "absolute", "790", "37", "64", "21", null, null, this.div_Search01);
            obj.set_taborder("16");
            obj.set_text("Lebel08");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Combo("Combo09", "absolute", "854", "37", "150", "21", null, null, this.div_Search01);
            this.div_Search01.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj = new Static("Static16", "absolute", "547", "66", "64", "21", null, null, this.div_Search01);
            obj.set_taborder("22");
            obj.set_text("Lebel11");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Combo("Combo10", "absolute", "610", "66", "150", "21", null, null, this.div_Search01);
            this.div_Search01.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj = new Static("Static17", "absolute", "790", "66", "64", "21", null, null, this.div_Search01);
            obj.set_taborder("24");
            obj.set_text("Lebel12");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Combo("Combo11", "absolute", "854", "66", "150", "21", null, null, this.div_Search01);
            this.div_Search01.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj = new Static("Static18", "absolute", "0", "0", "20", "124", null, null, this.div_Search01);
            obj.set_taborder("154");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "234", "0", "30", "124", null, null, this.div_Search01);
            obj.set_taborder("155");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "517", "0", "30", "124", null, null, this.div_Search01);
            obj.set_taborder("156");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "760", "0", "30", "124", null, null, this.div_Search01);
            obj.set_taborder("157");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "1206", "0", "20", "124", null, null, this.div_Search01);
            obj.set_taborder("158");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search01.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", null, "0", "66", "8", "29", null, this.div_Search01);
            obj.set_taborder("159");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Div("div_Search00", "absolute", "0", "261", null, "97", "0", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "328", "8", "189", "21", null, null, this.div_Search00);
            this.div_Search00.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj = new Static("Static01", "absolute", "20", "8", "64", "21", null, null, this.div_Search00);
            obj.set_taborder("0");
            obj.set_text("Lebel01");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "264", "8", "64", "21", null, null, this.div_Search00);
            obj.set_taborder("2");
            obj.set_text("Lebel02");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "84", "8", "150", "21", null, null, this.div_Search00);
            this.div_Search00.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj = new Combo("Combo02", "absolute", "84", "37", "150", "21", null, null, this.div_Search00);
            this.div_Search00.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_cssclass("essential");
            obj = new Static("Static00", "absolute", "20", "37", "64", "21", null, null, this.div_Search00);
            obj.set_taborder("8");
            obj.set_text("Lebel05");
            obj.set_cssclass("sta_WFSA_Label_E");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "264", "37", "64", "21", null, null, this.div_Search00);
            obj.set_taborder("10");
            obj.set_text("Lebel06");
            obj.set_cssclass("sta_WFSA_Label_E");
            this.div_Search00.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox00", "absolute", "328", "37", "56", "21", null, null, this.div_Search00);
            obj.set_taborder("11");
            obj.set_text("VMI");
            obj.set_value("true");
            obj.set_cssclass("essential");
            this.div_Search00.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox01", "absolute", "384", "37", "68", "21", null, null, this.div_Search00);
            obj.set_taborder("12");
            obj.set_text("GLAP");
            obj.set_cssclass("essential");
            this.div_Search00.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox02", "absolute", "452", "37", "65", "21", null, null, this.div_Search00);
            obj.set_taborder("13");
            obj.set_text("Nexa");
            obj.set_cssclass("essential");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "20", "66", "64", "21", null, null, this.div_Search00);
            obj.set_taborder("18");
            obj.set_text("Lebel09");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Combo("Combo03", "absolute", "84", "66", "150", "21", null, null, this.div_Search00);
            this.div_Search00.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj = new Button("Button05", "absolute", null, "8", "94", "21", "20", null, this.div_Search00);
            obj.set_taborder("104");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            obj.set_tooltiptext("Inquiry");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "103", "0", "92", "8", null, null, this.div_Search00);
            obj.set_taborder("105");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "103", "29", "92", "8", null, null, this.div_Search00);
            obj.set_taborder("106");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "103", "58", "92", "8", null, null, this.div_Search00);
            obj.set_taborder("107");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "103", "87", "92", "8", null, null, this.div_Search00);
            obj.set_taborder("108");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "547", "8", "64", "21", null, null, this.div_Search00);
            obj.set_taborder("4");
            obj.set_text("Lebel03");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Combo("Combo04", "absolute", "610", "8", "150", "21", null, null, this.div_Search00);
            this.div_Search00.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj = new Static("Static05", "absolute", "547", "37", "64", "21", null, null, this.div_Search00);
            obj.set_taborder("14");
            obj.set_text("Lebel07");
            obj.set_cssclass("sta_WFSA_Label_E");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Combo("Combo05", "absolute", "610", "37", "150", "21", null, null, this.div_Search00);
            this.div_Search00.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_cssclass("essential");
            obj = new Static("Static08", "absolute", "790", "8", "64", "21", null, null, this.div_Search00);
            obj.set_taborder("6");
            obj.set_text("Lebel04");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Combo("Combo06", "absolute", "854", "8", "150", "21", null, null, this.div_Search00);
            this.div_Search00.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj = new Static("Static12", "absolute", "790", "37", "64", "21", null, null, this.div_Search00);
            obj.set_taborder("16");
            obj.set_text("Lebel08");
            obj.set_cssclass("sta_WFSA_Label_E");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Combo("Combo07", "absolute", "854", "37", "150", "21", null, null, this.div_Search00);
            this.div_Search00.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_cssclass("essential");
            obj = new Static("Static14", "absolute", "0", "0", "20", "95", null, null, this.div_Search00);
            obj.set_taborder("109");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "234", "0", "30", "95", null, null, this.div_Search00);
            obj.set_taborder("110");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "517", "0", "30", "95", null, null, this.div_Search00);
            obj.set_taborder("111");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "760", "0", "30", "95", null, null, this.div_Search00);
            obj.set_taborder("112");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "1206", "0", "20", "95", null, null, this.div_Search00);
            obj.set_taborder("113");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search00.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", null, "0", "66", "8", "29", null, this.div_Search00);
            obj.set_taborder("114");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Div("div_Search02", "absolute", "0", "157", null, "68", "0", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "328", "8", "189", "21", null, null, this.div_Search02);
            this.div_Search02.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj = new Static("Static01", "absolute", "20", "8", "64", "21", null, null, this.div_Search02);
            obj.set_taborder("0");
            obj.set_text("Lebel01");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "264", "8", "64", "21", null, null, this.div_Search02);
            obj.set_taborder("2");
            obj.set_text("Lebel02");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "84", "8", "150", "21", null, null, this.div_Search02);
            this.div_Search02.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj = new Combo("Combo02", "absolute", "84", "37", "150", "21", null, null, this.div_Search02);
            this.div_Search02.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_cssclass("essential");
            obj = new Static("Static00", "absolute", "20", "37", "64", "21", null, null, this.div_Search02);
            obj.set_taborder("8");
            obj.set_text("Lebel05");
            obj.set_cssclass("sta_WFSA_Label_E");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "264", "37", "64", "21", null, null, this.div_Search02);
            obj.set_taborder("10");
            obj.set_text("Lebel06");
            obj.set_cssclass("sta_WFSA_Label_E");
            this.div_Search02.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox00", "absolute", "328", "37", "56", "21", null, null, this.div_Search02);
            obj.set_taborder("11");
            obj.set_text("VMI");
            obj.set_value("true");
            obj.set_cssclass("essential");
            this.div_Search02.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox01", "absolute", "384", "37", "68", "21", null, null, this.div_Search02);
            obj.set_taborder("12");
            obj.set_text("GLAP");
            obj.set_cssclass("essential");
            this.div_Search02.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox02", "absolute", "452", "37", "65", "21", null, null, this.div_Search02);
            obj.set_taborder("13");
            obj.set_text("Nexa");
            obj.set_cssclass("essential");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", null, "8", "94", "21", "20", null, this.div_Search02);
            obj.set_taborder("16");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            obj.set_tooltiptext("Inquiry");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "103", "0", "92", "8", null, null, this.div_Search02);
            obj.set_taborder("98");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "103", "29", "92", "8", null, null, this.div_Search02);
            obj.set_taborder("99");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "103", "58", "92", "8", null, null, this.div_Search02);
            obj.set_taborder("100");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "547", "8", "64", "21", null, null, this.div_Search02);
            obj.set_taborder("4");
            obj.set_text("Lebel03");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Combo("Combo03", "absolute", "610", "8", "150", "21", null, null, this.div_Search02);
            this.div_Search02.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj = new Static("Static05", "absolute", "547", "37", "64", "21", null, null, this.div_Search02);
            obj.set_taborder("14");
            obj.set_text("Lebel07");
            obj.set_cssclass("sta_WFSA_Label_E");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Combo("Combo04", "absolute", "610", "37", "150", "21", null, null, this.div_Search02);
            this.div_Search02.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_cssclass("essential");
            obj = new Static("Static06", "absolute", "790", "8", "64", "21", null, null, this.div_Search02);
            obj.set_taborder("6");
            obj.set_text("Lebel04");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Combo("Combo05", "absolute", "854", "8", "150", "21", null, null, this.div_Search02);
            this.div_Search02.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj = new Static("Static08", "absolute", "1206", "0", "20", "68", null, null, this.div_Search02);
            obj.set_taborder("101");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", null, "0", "66", "8", "29", null, this.div_Search02);
            obj.set_taborder("102");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "760", "0", "30", "68", null, null, this.div_Search02);
            obj.set_taborder("103");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "517", "0", "30", "68", null, null, this.div_Search02);
            obj.set_taborder("104");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "234", "0", "30", "68", null, null, this.div_Search02);
            obj.set_taborder("105");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search02.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "0", "0", "20", "68", null, null, this.div_Search02);
            obj.set_taborder("106");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Div("div_Search", "absolute", "0", "82", null, "39", "0", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "328", "8", "189", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj = new Static("Static01", "absolute", "20", "8", "64", "21", null, null, this.div_Search);
            obj.set_taborder("0");
            obj.set_text("Lebel01");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "264", "8", "64", "21", null, null, this.div_Search);
            obj.set_taborder("2");
            obj.set_text("Lebel02");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "84", "8", "150", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj = new Static("Static09", "absolute", "103", "0", "92", "8", null, null, this.div_Search);
            obj.set_taborder("62");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "103", "29", "92", "8", null, null, this.div_Search);
            obj.set_taborder("63");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "547", "8", "64", "21", null, null, this.div_Search);
            obj.set_taborder("4");
            obj.set_text("Lebel03");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo02", "absolute", "610", "8", "150", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj = new Static("Static03", "absolute", "790", "8", "64", "21", null, null, this.div_Search);
            obj.set_taborder("6");
            obj.set_text("Lebel04");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo03", "absolute", "854", "8", "150", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj = new Button("Button05", "absolute", null, "8", "94", "21", "20", null, this.div_Search);
            obj.set_taborder("64");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            obj.set_tooltiptext("Inquiry");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "0", "20", "37", null, null, this.div_Search);
            obj.set_taborder("65");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "234", "0", "30", "37", null, null, this.div_Search);
            obj.set_taborder("66");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "517", "0", "30", "37", null, null, this.div_Search);
            obj.set_taborder("67");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "760", "0", "30", "37", null, null, this.div_Search);
            obj.set_taborder("68");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "1206", "0", "20", "37", null, null, this.div_Search);
            obj.set_taborder("69");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("Search Area ");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "58", "458", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("조회 1 단일 경우 : Height 39 (한줄이 늘어날때마다 29px씩 늘어남)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "133", "264", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("조회 2 단일 경우 : Height 68");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "237", "264", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("조회 3 단일 경우 : Height 97");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "370", "296", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("조회 4 단일 경우 : Height 126");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1042", "157", "60", "68", null, null, this);
            obj.set_taborder("53");
            obj.set_text("H68");
            obj.set_cssclass("Guide_header");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1042", "261", "60", "96", null, null, this);
            obj.set_taborder("54");
            obj.set_text("H97");
            obj.set_cssclass("Guide_header");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "1042", "394", "60", "126", null, null, this);
            obj.set_taborder("55");
            obj.set_text("H126");
            obj.set_cssclass("Guide_header");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", null, "83", "66", "8", "29", null, this);
            obj.set_taborder("72");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "368", "187", "16", "37", null, null, this);
            obj.set_taborder("79");
            obj.set_text("W\r\n16");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "1042", "82", "60", "39", null, null, this);
            obj.set_taborder("80");
            obj.set_text("H39");
            obj.set_cssclass("Guide_header");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 126, this.div_Search01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Bg");

            	}
            );
            this.div_Search01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 97, this.div_Search00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_cssclass("div_WFSA_Bg");

            	}
            );
            this.div_Search00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 68, this.div_Search02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_cssclass("div_WFSA_Bg");

            	}
            );
            this.div_Search02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 39, this.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_WFSA_Bg");

            	}
            );
            this.div_Search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1228, 483, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide01");
            		p.set_titletext("Search Area");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Guide08.xfdl", true);

       
    };
}
)();
