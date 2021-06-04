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
                this.set_name("Form_Search_Top_Temp1");
                this.set_titletext("Search Template");
                this._setFormPosition(0,0,1224,524);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">VMI</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Nexacro</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">Tobesoft</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">XPlatform</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_Search", "absolute", "0", "0", null, "39", "0", null, this);
            obj.set_taborder("0");
            obj.set_scrollbars("autohorz");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "30", "8", "80", "21", null, null, this.div_Search);
            obj.set_taborder("14");
            obj.set_text("Subsidiary");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "110", "8", "150", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("cmb_WF_Essential");
            obj = new Static("Static03", "absolute", "290", "8", "61", "21", null, null, this.div_Search);
            obj.set_taborder("16");
            obj.set_text("DIV_CD");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("edt_Div_CD", "absolute", "351", "8", "150", "21", null, null, this.div_Search);
            obj.set_taborder("17");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("18");
            obj.set_text("w\r\n20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "20", null, "0", "0", this.div_Search);
            obj.set_taborder("19");
            obj.set_text("w20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", null, "8", "94", "21", "20", null, this.div_Search);
            obj.set_taborder("20");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            obj.set_tooltiptext("Inquiry");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "260", "0", "30", "37", null, null, this.div_Search);
            obj.set_taborder("21");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", null, "0", "66", "8", "29", null, this.div_Search);
            obj.set_taborder("22");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_Data", "absolute", "0", "39", null, null, "0", "0", this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("Static63", "absolute", "0", "366", null, "29", "0", null, this.div_Data);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static64", "absolute", "0", "394", null, "29", "0", null, this.div_Data);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static43", "absolute", "0", "338", null, "29", "0", null, this.div_Data);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static72", "absolute", "0", "310", null, "29", "0", null, this.div_Data);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "278", "216", null, "29", "0", null, this.div_Data);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "278", "244", null, "29", "0", null, this.div_Data);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "11", "200", "24", null, null, this.div_Data);
            obj.set_taborder("140");
            obj.set_text("Subsidiary Management");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "161", "200", "24", null, null, this.div_Data);
            obj.set_taborder("141");
            obj.set_text("Subsidiary Management");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "149", "38", null, "29", "0", null, this.div_Data);
            obj.set_taborder("142");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "38", "150", "29", null, null, this.div_Data);
            obj.set_taborder("143");
            obj.set_text("Subsidiary");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "149", "66", null, "29", "0", null, this.div_Data);
            obj.set_taborder("144");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "66", "150", "29", null, null, this.div_Data);
            obj.set_taborder("145");
            obj.set_text("Subsidiary Name");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "149", "94", null, "29", "0", null, this.div_Data);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0", "94", "150", "29", null, null, this.div_Data);
            obj.set_taborder("147");
            obj.set_text("Local Currency");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "149", "122", null, "29", "0", null, this.div_Data);
            obj.set_taborder("148");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "122", "150", "29", null, null, this.div_Data);
            obj.set_taborder("149");
            obj.set_text("Book Currency");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "853", "38", "151", "29", null, null, this.div_Data);
            obj.set_taborder("150");
            obj.set_text("Decimal separator");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "853", "66", "151", "29", null, null, this.div_Data);
            obj.set_taborder("151");
            obj.set_text("Thousand Separator");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "853", "94", "151", "29", null, null, this.div_Data);
            obj.set_taborder("152");
            obj.set_text("Linited Decimal Point");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "1007", "42", null, "21", "4", null, this.div_Data);
            obj.set_taborder("153");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "1007", "70", null, "21", "4", null, this.div_Data);
            obj.set_taborder("154");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "1007", "98", null, "21", "4", null, this.div_Data);
            obj.set_taborder("155");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "484", "38", "150", "29", null, null, this.div_Data);
            obj.set_taborder("156");
            obj.set_text("User Conversion Type");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "484", "66", "150", "29", null, null, this.div_Data);
            obj.set_taborder("157");
            obj.set_text("Use Flag");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "484", "94", "150", "29", null, null, this.div_Data);
            obj.set_taborder("158");
            obj.set_text("Date Format");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "637", "42", "213", "21", null, null, this.div_Data);
            obj.set_taborder("159");
            obj.set_mask("###-##-#####");
            obj.set_maskchar("###-##-#####");
            this.div_Data.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit01", "absolute", "637", "70", "213", "21", null, null, this.div_Data);
            obj.set_taborder("160");
            this.div_Data.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit02", "absolute", "637", "98", "213", "21", null, null, this.div_Data);
            obj.set_taborder("161");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "483", "126", null, "21", "4", null, this.div_Data);
            obj.set_taborder("162");
            this.div_Data.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "153", "42", "120", "21", null, null, this.div_Data);
            this.div_Data.addChild(obj.name, obj);
            obj.set_taborder("163");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("readonly");
            obj = new Edit("Edit04", "absolute", "275", "42", "206", "21", null, null, this.div_Data);
            obj.set_taborder("164");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_Data.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "153", "70", "60", "21", null, null, this.div_Data);
            this.div_Data.addChild(obj.name, obj);
            obj.set_taborder("165");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj = new MaskEdit("MaskEdit03", "absolute", "229", "70", "45", "21", null, null, this.div_Data);
            obj.set_taborder("166");
            obj.set_mask("###-##-#####");
            obj.set_maskchar("###-##-#####");
            this.div_Data.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit04", "absolute", "290", "70", "45", "21", null, null, this.div_Data);
            obj.set_taborder("167");
            obj.set_mask("###-##-#####");
            obj.set_maskchar("###-##-#####");
            this.div_Data.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit05", "absolute", "153", "126", "71", "21", null, null, this.div_Data);
            obj.set_taborder("168");
            obj.set_mask("###-##-#####");
            obj.set_maskchar("###-##-#####");
            this.div_Data.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "203", "126", "21", "21", null, null, this.div_Data);
            obj.set_taborder("169");
            obj.set_cssclass("btn_WF_Search");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "226", "126", "255", "21", null, null, this.div_Data);
            obj.set_taborder("170");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "278", "188", null, "29", "0", null, this.div_Data);
            obj.set_taborder("171");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "0", "188", "130", "85", null, null, this.div_Data);
            obj.set_taborder("172");
            obj.set_text("Subsidiary");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "129", "188", "150", "29", null, null, this.div_Data);
            obj.set_taborder("173");
            obj.set_text("Subsidiary Name");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "129", "216", "150", "29", null, null, this.div_Data);
            obj.set_taborder("174");
            obj.set_text("Local Currency");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "129", "244", "150", "29", null, null, this.div_Data);
            obj.set_taborder("175");
            obj.set_text("Book Currency");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "213", "70", "16", "21", null, null, this.div_Data);
            obj.set_taborder("176");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Unit");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "274", "70", "16", "21", null, null, this.div_Data);
            obj.set_taborder("177");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Unit");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "0", "283", "200", "24", null, null, this.div_Data);
            obj.set_taborder("178");
            obj.set_text("Subsidiary Management");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "282", "192", "237", "21", null, null, this.div_Data);
            obj.set_taborder("179");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit07", "absolute", "521", "192", "237", "21", null, null, this.div_Data);
            obj.set_taborder("180");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit08", "absolute", "760", "192", null, "21", "4", null, this.div_Data);
            obj.set_taborder("181");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static51", "absolute", "0", "394", "150", "29", null, null, this.div_Data);
            obj.set_taborder("182");
            obj.set_text("DB Name");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static52", "absolute", "408", "394", "150", "29", null, null, this.div_Data);
            obj.set_taborder("183");
            obj.set_text("DB Name");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static53", "absolute", "816", "394", "150", "29", null, null, this.div_Data);
            obj.set_taborder("184");
            obj.set_text("DB Name");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static54", "absolute", "0", "366", "150", "29", null, null, this.div_Data);
            obj.set_taborder("185");
            obj.set_text("IP address");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static55", "absolute", "408", "366", "150", "29", null, null, this.div_Data);
            obj.set_taborder("186");
            obj.set_text("IP address");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static56", "absolute", "816", "366", "150", "29", null, null, this.div_Data);
            obj.set_taborder("187");
            obj.set_text("IP address");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static57", "absolute", "0", "338", "150", "29", null, null, this.div_Data);
            obj.set_taborder("188");
            obj.set_text("Name");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static58", "absolute", "408", "338", "150", "29", null, null, this.div_Data);
            obj.set_taborder("189");
            obj.set_text("Name");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static59", "absolute", "816", "338", "150", "29", null, null, this.div_Data);
            obj.set_taborder("190");
            obj.set_text("Name");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static60", "absolute", "0", "310", "409", "29", null, null, this.div_Data);
            obj.set_taborder("191");
            obj.set_text("sp1");
            obj.set_cssclass("sta_WFDA_LabelCenter");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static61", "absolute", "408", "310", "409", "29", null, null, this.div_Data);
            obj.set_taborder("192");
            obj.set_text("sp2");
            obj.set_cssclass("sta_WFDA_LabelCenter");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static62", "absolute", "816", "310", "408", "29", null, null, this.div_Data);
            obj.set_taborder("193");
            obj.set_text("sp3");
            obj.set_cssclass("sta_WFDA_LabelCenter");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit09", "absolute", "282", "220", "237", "21", null, null, this.div_Data);
            obj.set_taborder("194");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit10", "absolute", "521", "220", "237", "21", null, null, this.div_Data);
            obj.set_taborder("195");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit11", "absolute", "760", "220", null, "21", "4", null, this.div_Data);
            obj.set_taborder("196");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit12", "absolute", "282", "248", "237", "21", null, null, this.div_Data);
            obj.set_taborder("197");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit13", "absolute", "521", "248", "237", "21", null, null, this.div_Data);
            obj.set_taborder("198");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit14", "absolute", "760", "248", null, "21", "4", null, this.div_Data);
            obj.set_taborder("199");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit15", "absolute", "153", "342", "252", "21", null, null, this.div_Data);
            obj.set_taborder("200");
            obj.set_value("LDCCS1");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit16", "absolute", "153", "370", "252", "21", null, null, this.div_Data);
            obj.set_taborder("201");
            obj.set_value("10.47.101.101");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit17", "absolute", "153", "398", "252", "21", null, null, this.div_Data);
            obj.set_taborder("202");
            obj.set_value("NCR_DB_SP001");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit20", "absolute", "561", "342", "252", "21", null, null, this.div_Data);
            obj.set_taborder("203");
            obj.set_value("LDCCS2");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit21", "absolute", "561", "370", "252", "21", null, null, this.div_Data);
            obj.set_taborder("204");
            obj.set_value("10.47.101.101");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit22", "absolute", "561", "398", "252", "21", null, null, this.div_Data);
            obj.set_taborder("205");
            obj.set_value("NCR_DB_SP002");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit25", "absolute", "969", "342", "251", "21", null, null, this.div_Data);
            obj.set_taborder("206");
            obj.set_value("LDCCS3");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit26", "absolute", "969", "370", "251", "21", null, null, this.div_Data);
            obj.set_taborder("207");
            obj.set_value("10.47.101.101");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit27", "absolute", "969", "398", "251", "21", null, null, this.div_Data);
            obj.set_taborder("208");
            obj.set_value("NCR_DB_SP003");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0", "151", null, "10", "0", null, this.div_Data);
            obj.set_taborder("209");
            obj.set_text("h10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "0", "273", null, "10", "0", null, this.div_Data);
            obj.set_taborder("210");
            obj.set_text("h10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "193", "151", "30", "37", null, null, this.div_Data);
            obj.set_taborder("211");
            obj.set_text("h37");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static35", "absolute", "193", "273", "30", "37", null, null, this.div_Data);
            obj.set_taborder("212");
            obj.set_text("h37");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Combo("Combo02", "absolute", "153", "98", "120", "21", null, null, this.div_Data);
            this.div_Data.addChild(obj.name, obj);
            obj.set_taborder("213");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("readonly");
            obj = new Edit("Edit18", "absolute", "275", "98", "206", "21", null, null, this.div_Data);
            obj.set_taborder("214");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "193", "0", "30", "37", null, null, this.div_Data);
            obj.set_taborder("215");
            obj.set_text("h37");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "0", "37", null, "2", "0", null, this.div_Data);
            obj.set_taborder("216");
            obj.style.set_background("#4f5670ff");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "187", null, "2", "0", null, this.div_Data);
            obj.set_taborder("217");
            obj.style.set_background("#4f5670ff");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "309", null, "2", "0", null, this.div_Data);
            obj.set_taborder("218");
            obj.style.set_background("#4f5670ff");
            this.div_Data.addChild(obj.name, obj);

            obj = new Button("Button27", "absolute", null, "39", "33", "13", "48.61%", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Down");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 39, this.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_scrollbars("autohorz");
            		p.set_cssclass("div_WFSA_Bg");

            	}
            );
            this.div_Search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.div_Data.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 524, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Search Template");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Form_Search_Top_Temp1.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("Form_Search_Top_Temp1.xfdl", function(exports) {

        // Library Include
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        // Form onload
        this.Form_Search_Top_Temp1_onload = function(obj,e)
        {
        	this.com_fromInit(obj);	// form_init
        }

        // [form_init] Form load 설정
        this.fn_formInit = function()
        {
        	// param을 받아서 열리는 경우만....
        	if(!Base.isEmpty(this.getOwnerFrame().param))
        	{
        		this.fn_linkResponse();
        	} 
        }

        // param이 들어오는 경우의 로직은 여기에......
        this.fn_linkResponse = function()
        {
        	var sDivCd = this.getOwnerFrame().param.argDivCd;
        	this.div_Search.edt_Div_CD.set_value(sDivCd);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_Search_Top_Temp1_onload, this);

        };

        this.loadIncludeScript("Form_Search_Top_Temp1.xfdl", true);

       
    };
}
)();
