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
                this.set_name("Form_User_Comp5");
                this.set_titletext("User Component");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_Search", "absolute", "0", "272", null, "68", "0", null, this);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "20", "8", "68", "21", null, null, this.div_Search);
            obj.set_taborder("43");
            obj.set_text("월 선택");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "20", null, null, "0", this.div_Search);
            obj.set_taborder("44");
            obj.set_text("w\r20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "19", null, null, "8", "0", "0", this.div_Search);
            obj.set_taborder("45");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "19", "0", null, "8", "0", null, this.div_Search);
            obj.set_taborder("46");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "19", "29", null, "8", "0", null, this.div_Search);
            obj.set_taborder("47");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "313", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("48");
            obj.set_text("w30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "685", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("49");
            obj.set_text("w30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "28", null, "0", "0", this.div_Search);
            obj.set_taborder("50");
            obj.set_text("w28");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_monthCal", "absolute", "92", "281", "222", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("CommonObject::MonthCalendarTerm.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("사용자 달력 (기간월력)");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "0", "53", "143", "31", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Description");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "142", "53", null, "31", "0", null, this);
            obj.set_taborder("4");
            obj.set_text("기간 월을 선택할수 있는 달력");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("bold antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "83", "143", "47", null, null, this);
            obj.set_taborder("5");
            obj.set_text("생성방법");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "142", "83", null, "47", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("해당 컴포넌트는 Div 컴포넌트 입니다.\r\nDiv 배치후 Url : CommonObject::MonthCalendarTerm.xfdl 설정");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "129", "143", "109", null, null, this);
            obj.set_taborder("7");
            obj.set_text("exercise");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "142", "129", null, "47", "0", null, this);
            obj.set_taborder("8");
            obj.set_text("\tvar oParam = {from:\"201801\", to:\"201808\"};\r\n\tthis.div_monthCal.set_value(oParam);");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "142", "175", null, "63", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("\tvar oParam = this.Div00.getValue();\r\n\talert(oParam.from);\r\n\talert(oParam.to);");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set", "absolute", "457", "140", "81", "26", null, null, this);
            obj.set_taborder("10");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("btn_get", "absolute", "457", "191", "81", "26", null, null, this);
            obj.set_taborder("11");
            obj.set_text("실행");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 68, this.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFSA_Bg");

            	}
            );
            this.div_Search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("User Component");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CommonObject::MonthCalendarTerm.xfdl");
        };
        
        // User Script
        this.registerScript("Form_User_Comp5.xfdl", function(exports) {

        this.btn_set_onclick = function(obj,e)
        {
        	var oParam = {from:"201801", to:"201808"};
        	this.div_monthCal.set_value(oParam);
        }

        this.btn_get_onclick = function(obj,e)
        {
        	var oParam = this.div_monthCal.getValue();
        	this.alert(oParam.from);
        	this.alert(oParam.to);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_set.addEventHandler("onclick", this.btn_set_onclick, this);
            this.btn_get.addEventHandler("onclick", this.btn_get_onclick, this);

        };

        this.loadIncludeScript("Form_User_Comp5.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
