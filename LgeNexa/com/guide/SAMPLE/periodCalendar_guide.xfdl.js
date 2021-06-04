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
                this.set_name("PeriodCalendar_guide");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_Search", "absolute", "0", "232", null, "68", "0", null, this);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "20", null, null, "0", this.div_Search);
            obj.set_taborder("46");
            obj.set_text("w\r20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "19", "0", null, "8", "0", null, this.div_Search);
            obj.set_taborder("48");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "19", "29", null, "8", "0", null, this.div_Search);
            obj.set_taborder("49");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "685", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("51");
            obj.set_text("w30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "28", null, "0", "0", this.div_Search);
            obj.set_taborder("52");
            obj.set_text("w28");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "21", "240", "128", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("기간달력");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Div("div_calendar", "absolute", "148", "240", "226", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_url("CommonObject::CalendarTerm.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("13");
            obj.set_text("사용자 달력 (기간일력)");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "0", "53", "143", "31", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WFDA_Label");
            obj.set_text("Description");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "142", "53", null, "31", "0", null, this);
            obj.set_taborder("15");
            obj.set_text("시작 & 종료일 선택할수 있는 달력");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("bold antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "83", "143", "47", null, null, this);
            obj.set_taborder("16");
            obj.set_text("생성방법");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "142", "83", null, "47", "0", null, this);
            obj.set_taborder("17");
            obj.set_text("해당 컴포넌트는 Div 컴포넌트 입니다.\r\nDiv 배치후 Url : CommonObject::CalendarTerm.xfdl 설정");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "129", "143", "93", null, null, this);
            obj.set_taborder("18");
            obj.set_text("exercise");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "142", "129", null, "39", "0", null, this);
            obj.set_taborder("19");
            obj.set_text("var oParam = {fromdate:\"20160101\", todate:\"20160103\"};\r\nthis.div_calendar.set_value(oParam);\t");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "142", "167", null, "55", "0", null, this);
            obj.set_taborder("20");
            obj.set_text("var oParam = this.div_calendar.getValue();\r\nalert(oParam.fromdate);\r\nalert(oParam.todate);\t");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "497", "136", "81", "26", null, null, this);
            obj.set_taborder("21");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "497", "181", "81", "26", null, null, this);
            obj.set_taborder("22");
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
            		p.set_classname("PeriodCalendar_guide");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CommonObject::CalendarTerm.xfdl");
        };
        
        // User Script
        this.addIncludeScript("periodCalendar_guide.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("periodCalendar_guide.xfdl", function(exports) {
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
        *
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
        this.PeriodCalendar_guide_onload = function(obj,e)
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

        this.Button00_onclick = function(obj,e)
        {
        	var oParam = {fromdate:"20160101", todate:"20160103"};
        	this.div_calendar.set_value(oParam);	
        }

        this.Button01_onclick = function(obj,e)
        {
        	var oParam = this.div_calendar.getValue();
        	alert(oParam.fromdate);
        	alert(oParam.todate);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.PeriodCalendar_guide_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("periodCalendar_guide.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
