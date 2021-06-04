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
                this.set_classname("combo_guide");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCategory", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">M</Col><Col id=\"VALUE\">남자</Col></Row><Row><Col id=\"CODE\">F</Col><Col id=\"VALUE\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_Search", "absolute", "0", "272", null, "68", "0", null, this);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "20", "8", "108", "21", null, null, this.div_Search);
            obj.set_taborder("31");
            obj.set_text("콤보조건");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "20", null, null, "0", this.div_Search);
            obj.set_taborder("32");
            obj.set_text("w\r20");
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
            obj = new ExtCombo("cbCategory", "absolute", "128", "8", "185", "21", null, null, this.div_Search);
            obj.set_gridFormats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Column size=\"110\"/>\n      <Column size=\"110\"/>\n    </Columns>\n    <Rows>\n      <Row size=\"24\"/>\n    </Rows>\n    <Band id=\"body\">\n      <Cell text=\"bind:CODE\"/>\n      <Cell col=\"1\" text=\"bind:VALUE\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.set_codeColumn("CODE");
            obj.set_innerDataset("dsCategory");
            obj.set_textColumn("VALUE");
            obj.set_taborder("44");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "0", "53", "143", "31", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WFDA_Label");
            obj.set_text("Description");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("10");
            obj.set_text("사용자 콤보");
            obj.set_cssclass("Guide_header");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "142", "53", null, "31", "0", null, this);
            obj.set_taborder("11");
            obj.set_text("코드와 코드명을 동시에 보여 주는 콤보");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "83", "143", "31", null, null, this);
            obj.set_taborder("12");
            obj.set_text("innerDataset");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "142", "83", null, "31", "0", null, this);
            obj.set_taborder("13");
            obj.set_text("Inner Dataset 설정");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0", "113", "143", "31", null, null, this);
            obj.set_taborder("14");
            obj.set_text("codeColumn");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "142", "113", null, "31", "0", null, this);
            obj.set_taborder("15");
            obj.set_text("Inner Dataset의  Code Column 설정");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "143", "143", "31", null, null, this);
            obj.set_taborder("16");
            obj.set_text("textColumn");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "142", "143", null, "31", "0", null, this);
            obj.set_taborder("17");
            obj.set_text("Inner Dataset의  Text Column 설정");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "173", "143", "61", null, null, this);
            obj.set_taborder("18");
            obj.set_text("exercise");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "142", "173", null, "31", "0", null, this);
            obj.set_taborder("19");
            obj.set_text("this.div_Search.cbCategory.set_value(\"M\");");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "142", "203", null, "31", "0", null, this);
            obj.set_taborder("20");
            obj.set_text("this.div_Search.cbCategory.getValue()");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 185, 21, this.div_Search.cbCategory,
            	//-- Layout function
            	function(p) {
            		p.set_gridFormats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Column size=\"110\"/>\n      <Column size=\"110\"/>\n    </Columns>\n    <Rows>\n      <Row size=\"24\"/>\n    </Rows>\n    <Band id=\"body\">\n      <Cell text=\"bind:CODE\"/>\n      <Cell col=\"1\" text=\"bind:VALUE\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            		p.set_codeColumn("CODE");
            		p.set_innerDataset("dsCategory");
            		p.set_textColumn("VALUE");
            		p.set_taborder("44");

            	}
            );
            this.div_Search.cbCategory.addLayout(obj.name, obj);

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
        

        
        // User Script
        this.addIncludeScript("combo_guide.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("combo_guide.xfdl", function(exports) {
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
        	LGE.Biz.setFirstRowCombo(this.Combo00,"A", "VALUE");
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.div_Search.cbCategory.set_value("M");
        }

        this.Button01_onclick = function(obj,e)
        {
        	alert(this.div_Search.cbCategory.getValue());
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.combo_guide_onload, this);

        };

        this.loadIncludeScript("combo_guide.xfdl", true);

       
    };
}
)();
