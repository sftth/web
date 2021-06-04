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
                this.set_name("Form_User_Comp2");
                this.set_titletext("User Component");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">강원도</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">경기도</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">충청북도</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COL1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">강릉시</Col><Col id=\"COL1\">1</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">속도시</Col><Col id=\"COL1\">1</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">동해시</Col><Col id=\"COL1\">1</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">수원시</Col><Col id=\"COL1\">2</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">부천시</Col><Col id=\"COL1\">2</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">화성시</Col><Col id=\"COL1\">2</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">청주시</Col><Col id=\"COL1\">3</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">충주시</Col><Col id=\"COL1\">3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">제천시</Col><Col id=\"COL1\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_Search", "absolute", "0", "418", null, "68", "0", null, this);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "20", "8", "108", "21", null, null, this.div_Search);
            obj.set_taborder("44");
            obj.set_text("콤보조건");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "20", null, null, "0", this.div_Search);
            obj.set_taborder("45");
            obj.set_text("w\r20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "19", null, null, "8", "0", "0", this.div_Search);
            obj.set_taborder("46");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "19", "0", null, "8", "0", null, this.div_Search);
            obj.set_taborder("47");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "19", "29", null, "8", "0", null, this.div_Search);
            obj.set_taborder("48");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "313", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("49");
            obj.set_text("w30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "685", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("50");
            obj.set_text("w30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "28", null, "0", "0", this.div_Search);
            obj.set_taborder("51");
            obj.set_text("w28");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "348", "8", "108", "21", null, null, this.div_Search);
            obj.set_taborder("52");
            obj.set_text("콤보조건2");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_multiCombo00", "absolute", "159", "426", "154", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_url("CommonObject::MultiCombo.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "0", "53", "143", "31", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("3");
            obj.set_text("사용자 콤보");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "142", "53", null, "31", "0", null, this);
            obj.set_taborder("4");
            obj.set_text("this.div_multiCombo00.fn_initComp(oForm,  sId,  oCallback, oParam);");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("bold antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0", "83", "143", "31", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Description");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "142", "83", null, "31", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("하나 이상의 item을 선택할 수 있는 콤보");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "142", "113", null, "47", "0", null, this);
            obj.set_taborder("7");
            obj.set_text("해당 컴포넌트는 Div 컴포넌트 입니다.\r\nDiv 배치후 Url : CommonObject::MultiCombo.xfdl 설정");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "113", "143", "47", null, null, this);
            obj.set_taborder("8");
            obj.set_text("생성방법");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "159", "143", "31", null, null, this);
            obj.set_taborder("9");
            obj.set_text("oForm");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "142", "159", null, "31", "0", null, this);
            obj.set_taborder("10");
            obj.set_text("호출 Form");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "189", "143", "31", null, null, this);
            obj.set_taborder("11");
            obj.set_text("sId");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "142", "189", null, "31", "0", null, this);
            obj.set_taborder("12");
            obj.set_text("고유 식별 ID");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "0", "219", "143", "31", null, null, this);
            obj.set_taborder("13");
            obj.set_text("oCallback");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "142", "219", null, "31", "0", null, this);
            obj.set_taborder("14");
            obj.set_text("call back function");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "0", "249", "143", "31", null, null, this);
            obj.set_taborder("15");
            obj.set_text("oParam");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "142", "249", null, "31", "0", null, this);
            obj.set_taborder("16");
            obj.set_text("전달 파리미터");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "0", "279", "143", "127", null, null, this);
            obj.set_taborder("17");
            obj.set_text("exercise");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "142", "279", null, "127", "0", null, this);
            obj.set_taborder("18");
            obj.set_text("this.fn_initMultiCombo = function() {\r\n\t// innerdataset\t- 콤보의 innerdataset으로 사용할 데이타셋(필수)\r\n\t// codecolumn\t- 콤보의 코드값으로 사용할 컬럼명(필수)\r\n\t// datacolumn\t- 콤보의 데이타컬럼값으로 사용할 컬럼명(필수)\r\n\t// selecttype\t- A : ALL, S : SELECT, N : \"\"\r\n\tvar oParam = {innerdataset:this.ds_inner00, codecolumn:\"CODE\", datacolumn:\"NAME\", selecttype:\"A\"};\r\n\tthis.div_multiCombo00.fn_initComp(this, \"div_multiCombo00\", this.fn_callbackMultiCombo, oParam);\r\n}");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Div("div_multiCombo01", "absolute", "532", "426", "154", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_url("CommonObject::MultiCombo.xfdl");
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
            this._addPreloadList("fdl", "CommonObject::MultiCombo.xfdl");
            this._addPreloadList("fdl", "CommonObject::MultiCombo.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Form_User_Comp2.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("Form_User_Comp2.xfdl", function(exports) {
        // Library Include
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        // From onload
        this.Form_User_Comp2_onload = function(obj,e)
        {
        	this.com_fromInit(obj);	// form_init
        }

        // [form_init] fn_formInit
        this.fn_formInit = function()
        {
        	this.fn_initMultiCombo();	// multicombo_init
        }

        // [multicombo_init] 멀티콤보 초기설정
        this.fn_initMultiCombo = function()
        {
        	/**
        	 * @class 멀티콤보 초기설정
        	 * @method fn_initComp
        	 * @param oForm{Object} Form Object
        	 * @param sPopId{String} Callback ID
        	 * @param oCallback{Object} Callback Function
        	 * @param oParam{Object} 멀티콤보 설정값
        				innerdataset	- 콤보의 innerdataset으로 사용할 데이타셋(필수)
        				codecolumn		- 콤보의 코드값으로 사용할 컬럼명(필수)
        				datacolumn		- 콤보의 데이타컬럼값으로 사용할 컬럼명(필수)
        				selecttype		- A : ALL, S : SELECT, N : ""

        	 * @return none
        	 */  	
        	var oParam = {innerdataset:this.ds_inner00, codecolumn:"CODE", datacolumn:"NAME"};
        	this.div_multiCombo00.fn_initComp(this, "div_multiCombo00", this.fn_callbackMultiCombo, oParam);	// multicombo_callback
        	
         	oParam = {innerdataset:this.ds_inner11, codecolumn:"CODE", datacolumn:"NAME"};
         	this.div_multiCombo01.fn_initComp(this, "div_multiCombo01", this.fn_callbackMultiCombo , oParam);	// multicombo_callback	
        }

        // [multicombo_callback]
        this.fn_callbackMultiCombo = function(obj,sValue)
        {
        	trace(obj + " : " + sValue);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_User_Comp2_onload, this);

        };

        this.loadIncludeScript("Form_User_Comp2.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
