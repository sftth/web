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
                this.set_name("Form_Basic_Comp5");
                this.set_titletext("Basic Component");
                this._setFormPosition(0,0,1224,483);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static17", "absolute", "110", "295", null, "188", "0", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("Button");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "110", "53", "374", "243", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "0", "53", "111", "430", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Button");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "351", "97", "138", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "141", "97", "138", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "121", "62", "170", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Common Button");
            obj.set_cssclass("Guide_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "141", "156", "10", "20", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("Guide_Hsize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "241", "62", "217", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text(": 좌우 여백 10px 정도로 가로사이즈를 정함");
            obj.set_cssclass("Guide_number");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "182", "124", "43", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("h21");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "121", "306", "130", "20", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Grid Custom버튼");
            obj.set_cssclass("Guide_Title");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "141", "364", "67", "24", null, null, this);
            obj.set_taborder("11");
            obj.set_text("Custom");
            obj.set_cssclass("btn_WF_Grid");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "271", "337", "60", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "141", "337", "60", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("Normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "271", "364", "67", "24", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Custom");
            obj.set_cssclass("btn_WF_Grid");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "141", "150", "42", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("Abc");
            obj.set_tooltiptext("ABC");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "141", "176", "49", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("Abcd");
            obj.set_tooltiptext("ABCD");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "141", "202", "57", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Abcde");
            obj.set_tooltiptext("ABCDE");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "141", "228", "61", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Abcdef");
            obj.set_tooltiptext("ABCDEF");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "141", "254", "67", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("Abcdefg");
            obj.set_tooltiptext("ABCDEFG");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "351", "254", "67", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("Abcdefg");
            obj.set_enable("false");
            obj.set_tooltiptext("ABCDEFG");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "351", "228", "61", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("Abcdef");
            obj.set_enable("false");
            obj.set_tooltiptext("ABCDEF");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("Button11", "absolute", "351", "202", "57", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("Abcde");
            obj.set_enable("false");
            obj.set_tooltiptext("ABCDE");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("Button17", "absolute", "351", "176", "49", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("Abcd");
            obj.set_enable("false");
            obj.set_tooltiptext("ABCD");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("Button18", "absolute", "351", "150", "42", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("Abc");
            obj.set_enable("false");
            obj.set_tooltiptext("ABC");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("Button19", "absolute", "141", "124", "35", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("Ab");
            obj.set_tooltiptext("AB");
            this.addChild(obj.name, obj);

            obj = new Button("Button20", "absolute", "351", "124", "35", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("Ab");
            obj.set_enable("false");
            obj.set_tooltiptext("AB");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "483", "53", null, "243", "0", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "687", "97", "60", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("Disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "517", "97", "60", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("Normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "915", "62", "220", "20", null, null, this);
            obj.set_taborder("30");
            obj.set_text("조회조건 접기/펼치기 버튼");
            obj.set_cssclass("Guide_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "935", "97", "60", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("Normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "1068", "97", "60", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("Disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Button("Button24", "absolute", "1068", "124", "33", "13", null, null, this);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WFSA_Up");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button25", "absolute", "935", "124", "33", "13", null, null, this);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WFSA_Up");
            this.addChild(obj.name, obj);

            obj = new Button("Button26", "absolute", "1068", "156", "33", "13", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WFSA_Down");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button27", "absolute", "935", "156", "33", "13", null, null, this);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WFSA_Down");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "497", "62", "170", "20", null, null, this);
            obj.set_taborder("37");
            obj.set_text("btn_WFSA_Search");
            obj.set_cssclass("Guide_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "610", "124", "43", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h21");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "515", "146", "94", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w94");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "217", "364", "43", "24", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h24");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "142", "355", "10", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("W\r\n10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "246", "305", "217", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text(": 좌우 여백 10px 정도로 가로사이즈를 정함");
            obj.set_cssclass("Guide_number");
            this.addChild(obj.name, obj);

            obj = new Button("Button16", "absolute", "515", "124", "94", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            obj.set_tooltiptext("Inquiry");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "687", "124", "94", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            obj.set_enable("false");
            obj.set_tooltiptext("Inquiry");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "526", "343", "23", "23", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.addChild(obj.name, obj);

            obj = new Button("Button12", "absolute", "526", "370", "23", "23", null, null, this);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.addChild(obj.name, obj);

            obj = new Button("Button13", "absolute", "141", "439", "49", "24", null, null, this);
            obj.set_taborder("47");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_PopupBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button14", "absolute", "193", "439", "57", "24", null, null, this);
            obj.set_taborder("48");
            obj.set_text("Close");
            obj.set_cssclass("btn_WF_PopupBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRegister", "absolute", "760", "363", "21", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WFSA_Dell");
            obj.set_tooltiptext("ABCD");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "190", "425", "3", "41", null, null, this);
            obj.set_taborder("50");
            obj.set_text("W\r\n3");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "121", "409", "130", "20", null, null, this);
            obj.set_taborder("51");
            obj.set_text("POPUP 버튼");
            obj.set_cssclass("Guide_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "522", "366", "30", "4", null, null, this);
            obj.set_taborder("52");
            obj.set_text("h4");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "497", "305", "130", "20", null, null, this);
            obj.set_taborder("53");
            obj.set_text("Shuttle 버튼");
            obj.set_cssclass("Guide_Title");
            this.addChild(obj.name, obj);

            obj = new Button("Button15", "absolute", "634", "343", "23", "23", null, null, this);
            obj.set_taborder("54");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button21", "absolute", "634", "370", "23", "23", null, null, this);
            obj.set_taborder("55");
            obj.set_cssclass("btn_WF_ShuttleL");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "142", "116", "10", "361", null, null, this);
            obj.set_taborder("56");
            obj.set_text("W\r\n10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel02", "absolute", "483", "439", "153", "24", null, null, this);
            obj.set_taborder("57");
            obj.set_text("Template Download");
            obj.set_cssclass("btn_WF_GridDown");
            this.addChild(obj.name, obj);

            obj = new Button("btnApprUp", "absolute", "962", "397", "38", "24", null, null, this);
            obj.set_taborder("58");
            obj.set_text("Up");
            this.addChild(obj.name, obj);

            obj = new Button("btnApprDown", "absolute", "1003", "397", "53", "24", null, null, this);
            obj.set_taborder("59");
            obj.set_text("Down");
            this.addChild(obj.name, obj);

            obj = new Button("btnApprAdd", "absolute", "915", "397", "44", "24", null, null, this);
            obj.set_taborder("60");
            obj.set_text("Add");
            this.addChild(obj.name, obj);

            obj = new Button("btnMarkDel", "absolute", "998", "346", "58", "24", null, null, this);
            obj.set_taborder("61");
            obj.set_text("Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btnApprAdd00", "absolute", "951", "346", "44", "24", null, null, this);
            obj.set_taborder("62");
            obj.set_text("Add");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 483, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Basic Component");

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
            this.Button13.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button14.addEventHandler("onclick", this.Button00_onclick, this);
            this.btnDelRegister.addEventHandler("onclick", this.btnDelRegister_onclick, this);
            this.Static24.addEventHandler("onclick", this.Static12_onclick, this);
            this.btnExcel02.addEventHandler("onclick", this.div_Data_Div00_btnExcelDown_onclick, this);
            this.btnApprUp.addEventHandler("onclick", this.div_Data_btnApprUp_onclick, this);
            this.btnApprDown.addEventHandler("onclick", this.div_Data_btnApprDown_onclick, this);
            this.btnApprAdd.addEventHandler("onclick", this.div_Data_btnApprAdd_onclick, this);
            this.btnMarkDel.addEventHandler("onclick", this.div_Data_btnMarkDel_onclick, this);
            this.btnApprAdd00.addEventHandler("onclick", this.div_Data_btnApprAdd_onclick, this);

        };

        this.loadIncludeScript("Form_Basic_Comp5.xfdl", true);

       
    };
}
)();
