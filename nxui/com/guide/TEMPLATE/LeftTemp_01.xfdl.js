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
                this.set_name("Temp_01");
                this.set_classname("Temp_01");
                this.set_titletext("Single Detail");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,1224,524);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">VMI</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Nexacro</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">Tobesoft</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">XPlatform</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_SearchSlide", "absolute", "279", "46.76%", "13", "33", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search", "absolute", "0", "0", "280", null, null, "0%", this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Bg");
            obj.set_scrollbars("autohorz");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10", "15", "100", "21", null, null, this.div_Search);
            obj.set_taborder("0");
            obj.set_text("Subsidiary");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "110", "15", "159", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("cmb_WF_Essential");
            obj.set_innerdataset("@ds_combo");
            obj.set_datacolumn("Column1");
            obj.set_codecolumn("Column0");
            obj.set_value("0");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Static("Static03", "absolute", "10", "46", "100", "21", null, null, this.div_Search);
            obj.set_taborder("2");
            obj.set_text("DIV_CD");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "110", "46", "159", "21", null, null, this.div_Search);
            obj.set_taborder("3");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "10", null, null, "0", this.div_Search);
            obj.set_taborder("6");
            obj.set_text("w\r\n10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "10", null, "0", "0", this.div_Search);
            obj.set_taborder("10");
            obj.set_text("w10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", null, null, "94", "21", "91", "11", this.div_Search);
            obj.set_taborder("11");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            obj.set_tooltiptext("Inquiry");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", null, "0", "66", "15", "29", null, this.div_Search);
            obj.set_taborder("13");
            obj.set_text("H15");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_Data", "absolute", "300", "0", null, null, "0", "0", this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            obj = new Static("Static63", "absolute", "0", "366", null, "29", "0", null, this.div_Data);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static64", "absolute", "0", "394", null, "29", "0", null, this.div_Data);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static43", "absolute", "0%", "338", null, "29", "0", null, this.div_Data);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static72", "absolute", "0", "310", null, "29", "0", null, this.div_Data);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "278", "216", null, "29", "0", null, this.div_Data);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "278", "244", null, "29", "0", null, this.div_Data);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "11", "200", "24", null, null, this.div_Data);
            obj.set_taborder("0");
            obj.set_text("Subsidiary Management");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "161", "200", "24", null, null, this.div_Data);
            obj.set_taborder("28");
            obj.set_text("Subsidiary Management");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "16.13%", "38", null, "29", "0", null, this.div_Data);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0%", "38", "16.23%", "29", null, null, this.div_Data);
            obj.set_taborder("1");
            obj.set_text("Subsidiary");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "16.13%", "66", null, "29", "0", null, this.div_Data);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0%", "66", "16.23%", "29", null, null, this.div_Data);
            obj.set_taborder("8");
            obj.set_text("Subsidiary Name");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "149", "94", null, "29", "0", null, this.div_Data);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0%", "94", "16.23%", "29", null, null, this.div_Data);
            obj.set_taborder("16");
            obj.set_text("Local Currency");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "149", "122", null, "29", "0", null, this.div_Data);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0%", "122", "16.23%", "29", null, null, this.div_Data);
            obj.set_taborder("23");
            obj.set_text("Book Currency");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "54.22%", "38", "16.34%", "29", null, null, this.div_Data);
            obj.set_taborder("6");
            obj.set_text("Decimal separator");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "54.22%", "66", "16.34%", "29", null, null, this.div_Data);
            obj.set_taborder("14");
            obj.set_text("Thousand Separator");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "54.22%", "94", "16.34%", "29", null, null, this.div_Data);
            obj.set_taborder("21");
            obj.set_text("Linited Decimal Point");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "70.89%", "42", "28.68%", "21", null, null, this.div_Data);
            obj.set_taborder("7");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "70.89%", "70", "28.68%", "21", null, null, this.div_Data);
            obj.set_taborder("15");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "70.89%", "98", "28.68%", "21", null, null, this.div_Data);
            obj.set_taborder("22");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "54.87%", "126", "44.7%", "21", null, null, this.div_Data);
            obj.set_taborder("27");
            this.div_Data.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "16.56%", "42", "12.99%", "21", null, null, this.div_Data);
            this.div_Data.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("readonly");
            obj.set_innerdataset("@ds_combo");
            obj.set_datacolumn("Column1");
            obj.set_codecolumn("Column0");
            obj.set_value("1");
            obj.set_index("1");
            obj = new Edit("Edit04", "absolute", "29.76%", "42", "24.03%", "21", null, null, this.div_Data);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_Data.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "16.56%", "70", "9.96%", "21", null, null, this.div_Data);
            this.div_Data.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_innerdataset("@ds_combo");
            obj.set_datacolumn("Column1");
            obj.set_codecolumn("Column0");
            obj.set_value("1");
            obj.set_index("1");
            obj = new MaskEdit("MaskEdit03", "absolute", "28.25%", "70", "8.33%", "21", null, null, this.div_Data);
            obj.set_taborder("10");
            obj.set_mask("###-##-#####");
            obj.set_maskchar("###-##-#####");
            this.div_Data.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit04", "absolute", "38.31%", "70", "8.33%", "21", null, null, this.div_Data);
            obj.set_taborder("11");
            obj.set_mask("###-##-#####");
            obj.set_maskchar("###-##-#####");
            this.div_Data.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit05", "absolute", "16.56%", "126", "9.96%", "21", null, null, this.div_Data);
            obj.set_taborder("24");
            obj.set_mask("###-##-#####");
            obj.set_maskchar("###-##-#####");
            this.div_Data.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "24.13%", "126", "2.27%", "21", null, null, this.div_Data);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_Search");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "27.06%", "126", "27.6%", "21", null, null, this.div_Data);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "278", "188", null, "29", "0", null, this.div_Data);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "0%", "188", "14.07%", "85", null, null, this.div_Data);
            obj.set_taborder("29");
            obj.set_text("Subsidiary");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "13.96%", "188", "16.23%", "29", null, null, this.div_Data);
            obj.set_taborder("30");
            obj.set_text("Subsidiary Name");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "13.96%", "216", "16.23%", "29", null, null, this.div_Data);
            obj.set_taborder("34");
            obj.set_text("Local Currency");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "13.96%", "244", "16.23%", "29", null, null, this.div_Data);
            obj.set_taborder("38");
            obj.set_text("Book Currency");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "26.52%", "70", "1.73%", "21", null, null, this.div_Data);
            obj.set_taborder("64");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Unit");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "36.58%", "70", "1.73%", "21", null, null, this.div_Data);
            obj.set_taborder("65");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Unit");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "0", "283", "200", "24", null, null, this.div_Data);
            obj.set_taborder("42");
            obj.set_text("Subsidiary Management");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "30.52%", "192", "23.05%", "21", null, null, this.div_Data);
            obj.set_taborder("31");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit07", "absolute", "53.79%", "192", "25.65%", "21", null, null, this.div_Data);
            obj.set_taborder("32");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit08", "absolute", "79.65%", "192", "19.91%", "21", null, null, this.div_Data);
            obj.set_taborder("33");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static51", "absolute", "0%", "394", "16.23%", "29", null, null, this.div_Data);
            obj.set_taborder("46");
            obj.set_text("DB Name");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static53", "absolute", "50.22%", "394", "16.23%", "29", null, null, this.div_Data);
            obj.set_taborder("60");
            obj.set_text("DB Name");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static54", "absolute", "0%", "366", "16.23%", "29", null, null, this.div_Data);
            obj.set_taborder("45");
            obj.set_text("IP address");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static56", "absolute", "50.22%", "366", "16.23%", "29", null, null, this.div_Data);
            obj.set_taborder("59");
            obj.set_text("IP address");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static57", "absolute", "0%", "338", "16.23%", "29", null, null, this.div_Data);
            obj.set_taborder("44");
            obj.set_text("Name");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static59", "absolute", "50.22%", "338", "16.23%", "29", null, null, this.div_Data);
            obj.set_taborder("58");
            obj.set_text("Name");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static60", "absolute", "0%", "310", null, "29", "49.68%", null, this.div_Data);
            obj.set_taborder("43");
            obj.set_text("sp1");
            obj.set_cssclass("sta_WFDA_LabelCenter");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static62", "absolute", "50.22%", "310", null, "29", "0", null, this.div_Data);
            obj.set_taborder("57");
            obj.set_text("sp3");
            obj.set_cssclass("sta_WFDA_LabelCenter");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit09", "absolute", "30.52%", "220", "23.05%", "21", null, null, this.div_Data);
            obj.set_taborder("35");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit10", "absolute", "53.79%", "220", "25.65%", "21", null, null, this.div_Data);
            obj.set_taborder("36");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit11", "absolute", "79.65%", "220", "19.91%", "21", null, null, this.div_Data);
            obj.set_taborder("37");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit12", "absolute", "30.52%", "248", "23.05%", "21", null, null, this.div_Data);
            obj.set_taborder("39");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit13", "absolute", "53.79%", "248", "25.65%", "21", null, null, this.div_Data);
            obj.set_taborder("40");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit14", "absolute", "79.65%", "248", "19.91%", "21", null, null, this.div_Data);
            obj.set_taborder("41");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit15", "absolute", "16.56%", "342", "33.33%", "21", null, null, this.div_Data);
            obj.set_taborder("47");
            obj.set_value("LDCCS1");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit16", "absolute", "16.56%", "370", "33.33%", "21", null, null, this.div_Data);
            obj.set_taborder("48");
            obj.set_value("10.47.101.101");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit17", "absolute", "16.56%", "398", "33.33%", "21", null, null, this.div_Data);
            obj.set_taborder("49");
            obj.set_value("NCR_DB_SP001");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit25", "absolute", "66.77%", "342", "32.68%", "21", null, null, this.div_Data);
            obj.set_taborder("61");
            obj.set_value("LDCCS3");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit26", "absolute", "66.77%", "370", "32.68%", "21", null, null, this.div_Data);
            obj.set_taborder("62");
            obj.set_value("10.47.101.101");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit27", "absolute", "66.77%", "398", "32.68%", "21", null, null, this.div_Data);
            obj.set_taborder("63");
            obj.set_value("NCR_DB_SP003");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0", "151", null, "10", "0", null, this.div_Data);
            obj.set_taborder("124");
            obj.set_text("h10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "0", "273", null, "10", "0", null, this.div_Data);
            obj.set_taborder("125");
            obj.set_text("h10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "193", "151", "30", "37", null, null, this.div_Data);
            obj.set_taborder("126");
            obj.set_text("h37");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static35", "absolute", "193", "273", "30", "37", null, null, this.div_Data);
            obj.set_taborder("127");
            obj.set_text("h37");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Combo("Combo02", "absolute", "16.56%", "98", "9.96%", "21", null, null, this.div_Data);
            this.div_Data.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("readonly");
            obj.set_index("-1");
            obj = new Edit("Edit18", "absolute", "27.16%", "98", "26.62%", "21", null, null, this.div_Data);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "193", "0", "30", "37", null, null, this.div_Data);
            obj.set_taborder("130");
            obj.set_text("h37");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "0%", "37", null, "2", "0", null, this.div_Data);
            obj.set_taborder("131");
            obj.style.set_background("#4f5670ff");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "187", null, "2", "0", null, this.div_Data);
            obj.set_taborder("132");
            obj.style.set_background("#4f5670ff");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "309", null, "2", "0", null, this.div_Data);
            obj.set_taborder("133");
            obj.style.set_background("#4f5670ff");
            this.div_Data.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 280, 0, this.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Bg");
            		p.set_scrollbars("autohorz");

            	}
            );
            this.div_Search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");

            	}
            );
            this.div_Data.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 524, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Temp_01");
            		p.set_titletext("Single Detail");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LeftTemp_01.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("LeftTemp_01.xfdl", function(exports) {
        /*==================================================================================
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : 
        * PROGRAMMER  : 
        * DATE        : 2016.07.26
        * DESCRIPTION : 
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *------------------------------------------------------------------

        *------------------------------------------------------------------
        ==================================================================================*/

        /*----------------------------------------------------------------------------------
         Library Include
        -----------------------------------------------------------------------------------*/
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        
        /*----------------------------------------------------------------------------------
         Form Variable
        -----------------------------------------------------------------------------------*/

        
        /*----------------------------------------------------------------------------------
         Form onLoad
          - this.com_fromInit(obj)를 필수 호출하되, 이외의 함수는 호출하지 않는다.
        -----------------------------------------------------------------------------------*/
        this.Temp_01_onload = function(obj,e)
        {
        	this.com_fromInit(obj);
        }

        
        /*----------------------------------------------------------------------------------
         fn_formInit
          - form load시 설정은 이곳에서 한다.
        -----------------------------------------------------------------------------------*/
        this.fn_formInit = function()
        {

        }

        
        this.btn_SearchSlide_onclick = function(obj,e)
        {
        	this.com_searchSlideLeft();		
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Temp_01_onload, this);
            this.btn_SearchSlide.addEventHandler("onclick", this.btn_SearchSlide_onclick, this);

        };

        this.loadIncludeScript("LeftTemp_01.xfdl", true);

       
    };
}
)();
