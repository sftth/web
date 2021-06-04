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
                this.set_name("combo_guide");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_inner00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COL1\" type=\"STRING\" size=\"256\"/><Column id=\"COL2\" type=\"STRING\" size=\"256\"/><Column id=\"COL3\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">aaaa</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">bbbb</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">cccc</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">dddd</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">eeee</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_inner11", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COL1\" type=\"STRING\" size=\"256\"/><Column id=\"COL2\" type=\"STRING\" size=\"256\"/><Column id=\"COL3\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">aaaa</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">bbbb</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">cccc</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">dddd</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">eeee</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">aaaa</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">bbbb</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">cccc</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">dddd</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">eeee</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">aaaa</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">bbbb</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">cccc</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">dddd</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">eeee</Col><Col id=\"COL1\">A1</Col><Col id=\"COL2\">B1</Col><Col id=\"COL3\">C1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_Search", "absolute", "0", "272", null, "68", "0", null, this);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "20", "8", "68", "21", null, null, this.div_Search);
            obj.set_taborder("31");
            obj.set_text("월 선택");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "20", null, null, "0", this.div_Search);
            obj.set_taborder("32");
            obj.set_text("w\r20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "19", null, null, "8", "0", "0", this.div_Search);
            obj.set_taborder("34");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "19", "0", null, "8", "0", null, this.div_Search);
            obj.set_taborder("35");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "19", "29", null, "8", "0", null, this.div_Search);
            obj.set_taborder("36");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "313", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("40");
            obj.set_text("w30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "685", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("41");
            obj.set_text("w30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "28", null, "0", "0", this.div_Search);
            obj.set_taborder("42");
            obj.set_text("w28");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "92", "281", "222", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("CommonObject::MonthCalendarTerm.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("15");
            obj.set_text("사용자 달력 (기간월력)");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "0", "53", "143", "31", null, null, this);
            obj.set_taborder("16");
            obj.set_text("Description");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "142", "53", null, "31", "0", null, this);
            obj.set_taborder("17");
            obj.set_text("기간 월을 선택할수 있는 달력");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("bold antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "83", "143", "47", null, null, this);
            obj.set_taborder("18");
            obj.set_text("생성방법");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "142", "83", null, "47", "0", null, this);
            obj.set_taborder("19");
            obj.set_text("해당 컴포넌트는 Div 컴포넌트 입니다.\r\nDiv 배치후 Url : CommonObject::MonthCalendarTerm.xfdl 설정");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "129", "143", "109", null, null, this);
            obj.set_taborder("20");
            obj.set_text("exercise");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "142", "129", null, "47", "0", null, this);
            obj.set_taborder("21");
            obj.set_text("\tvar oParam = {from:\"201601\", to:\"201608\"};\r\n\tthis.Div00.set_value(oParam);");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "142", "175", null, "63", "0", null, this);
            obj.set_taborder("22");
            obj.set_text("\tvar oParam = this.Div00.getValue();\r\n\talert(oParam.from);\r\n\talert(oParam.to);");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "457", "140", "81", "26", null, null, this);
            obj.set_taborder("23");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "457", "191", "81", "26", null, null, this);
            obj.set_taborder("24");
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
            		p.set_classname("combo_guide");
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
            this._addPreloadList("fdl", "CommonObject::MonthCalendarTerm.xfdl");
        };
        
        // User Script
        this.addIncludeScript("monthPeriodCalendar_guide.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("monthPeriodCalendar_guide.xfdl", function(exports) {
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
        this.combo_guide_onload = function(obj,e)
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
        	var oParam = {from:"201601", to:"201608"};
        	this.Div00.set_value(oParam);
        }

        this.Button01_onclick = function(obj,e)
        {
        	var oParam = this.Div00.getValue();
        	alert(oParam.from);
        	alert(oParam.to);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.combo_guide_onload, this);
            this.Button02.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("monthPeriodCalendar_guide.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
