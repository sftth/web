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
                this.set_name("Form_User_Comp4");
                this.set_titletext("User Component");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_Search", "absolute", "0", "248", null, "68", "0", null, this);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "20", "8", "108", "21", null, null, this.div_Search);
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
            obj = new Static("Static22", "absolute", "19", "0", null, "8", "0", null, this.div_Search);
            obj.set_taborder("45");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "19", "29", null, "8", "0", null, this.div_Search);
            obj.set_taborder("46");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "313", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("47");
            obj.set_text("w30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "685", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("48");
            obj.set_text("w30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "28", null, "0", "0", this.div_Search);
            obj.set_taborder("49");
            obj.set_text("w28");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_monthCal", "absolute", "212", "256", "100", "21", null, null, this);
            obj.set_taborder("1");
            obj.style.set_border("0 none #8babe3ff");
            obj.set_url("CommonObject::MonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("사용자 달력 (월력)");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "0", "53", "143", "31", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Description");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "142", "53", null, "31", "0", null, this);
            obj.set_taborder("4");
            obj.set_text("월을 선택할수 있는 달력");
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
            obj.set_text("해당 컴포넌트는 Div 컴포넌트 입니다.\r\nDiv 배치후 Url : CommonObject::MonthCalendar.xfdl 설정");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "129", "143", "77", null, null, this);
            obj.set_taborder("7");
            obj.set_text("exercise");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "142", "129", null, "39", "0", null, this);
            obj.set_taborder("8");
            obj.set_text("this.div_monthCal.set_value(\"201801\");");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "142", "167", null, "39", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("this.div_monthCal.getValue()");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set", "absolute", "457", "136", "81", "26", null, null, this);
            obj.set_taborder("10");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("btn_get", "absolute", "457", "174", "81", "26", null, null, this);
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
            this._addPreloadList("fdl", "CommonObject::MonthCalendar.xfdl");
        };
        
        // User Script
        this.registerScript("Form_User_Comp4.xfdl", function(exports) {

        this.btn_set_onclick = function(obj,e)
        {
        	this.div_monthCal.set_value("201801");
        }

        this.btn_get_onclick = function(obj,e)
        {
        	this.alert(this.div_monthCal.getValue());
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_set.addEventHandler("onclick", this.btn_set_onclick, this);
            this.btn_get.addEventHandler("onclick", this.btn_get_onclick, this);

        };

        this.loadIncludeScript("Form_User_Comp4.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
