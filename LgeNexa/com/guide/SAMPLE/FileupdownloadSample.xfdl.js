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
                this.set_name("form");
                this.set_titletext("Multi Detail");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInput", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"TELEPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"POSTAL\" type=\"STRING\" size=\"256\"/><Column id=\"JOBLEVEL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SKILL_CODE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">남자</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComboDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">남자</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComboSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">남자</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_Data", "absolute", "0", "68", null, null, "0", "0", this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0", "0", null, null, "0", "0", this.div_Data);
            obj.set_taborder("57");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", null, "136", "576", "29", "0", null, this.div_Data.Div00);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", null, "108", "576", "29", "0", null, this.div_Data.Div00);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", null, "80", "576", "29", "0", null, this.div_Data.Div00);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", null, "52", "576", "29", "0", null, this.div_Data.Div00);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "23", "200", "24", null, null, this.div_Data.Div00);
            obj.set_taborder("0");
            obj.set_text("직원조회");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "50", null, null, "587", "21", this.div_Data.Div00);
            obj.set_taborder("6");
            obj.set_binddataset("dsResult");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj.set_autosizebandtype("allband");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"88\"/><Column size=\"80\"/><Column size=\"45\"/><Column size=\"138\"/><Column size=\"218\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SEQ\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"BIRTHDATE\"/><Cell col=\"3\" text=\"SEX\"/><Cell col=\"4\" text=\"TELEPHONE\"/><Cell col=\"5\" text=\"ADDRESS\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"align:center;\" text=\"bind:SEQ\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:NAME\"/><Cell col=\"2\" edittype=\"none\" style=\"align:center;\" text=\"bind:BIRTHDATE\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:SEX\" combodataset=\"dsCombo\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"4\" edittype=\"none\" style=\"align:center;\" text=\"bind:TELEPHONE\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:ADDRESS\"/></Band></Format></Formats>");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button12", "absolute", null, "23", "53", "24", "0", null, this.div_Data.Div00);
            obj.set_taborder("5");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_GridSave");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "0", null, "23", "0", null, this.div_Data.Div00);
            obj.set_taborder("39");
            obj.set_text("h23");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "195", "0", "30", "50", null, null, this.div_Data.Div00);
            obj.set_taborder("38");
            obj.set_text("h50");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("sta_totalCount", "absolute", "0", null, null, "21", "587", "0", this.div_Data.Div00);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GridTotal");
            obj.set_text("Total : {0}");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", null, "50", "577", "2", "0", null, this.div_Data.Div00);
            obj.set_taborder("40");
            obj.style.set_background("#4f5670ff");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static61", "absolute", null, "136", "149", "29", "427", null, this.div_Data.Div00);
            obj.set_taborder("46");
            obj.set_text("SEX");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", null, "108", "149", "29", "427", null, this.div_Data.Div00);
            obj.set_taborder("47");
            obj.set_text("BIRTHDATE");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", null, "80", "149", "29", "427", null, this.div_Data.Div00);
            obj.set_taborder("48");
            obj.set_text("NAME");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static57", "absolute", null, "52", "149", "29", "427", null, this.div_Data.Div00);
            obj.set_taborder("49");
            obj.set_text("SEQ");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", null, "192", "576", "29", "0", null, this.div_Data.Div00);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", null, "164", "576", "29", "0", null, this.div_Data.Div00);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", null, "192", "149", "29", "427", null, this.div_Data.Div00);
            obj.set_taborder("58");
            obj.set_text("ADDRESS");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", null, "164", "149", "29", "427", null, this.div_Data.Div00);
            obj.set_taborder("59");
            obj.set_text("TELEPHONE");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Div("div_fileAttach", "absolute", null, "260", "576", "165", "0", null, this.div_Data.Div00);
            obj.set_taborder("62");
            obj.set_enable("true");
            obj.set_url("CommonObject::AttachFiles.xfdl");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", null, "233", "200", "24", "376", null, this.div_Data.Div00);
            obj.set_taborder("63");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", null, "140", "421", "21", "4", null, this.div_Data.Div00);
            this.div_Data.Div00.addChild(obj.name, obj);
            obj.set_taborder("65");
            obj.set_innerdataset("@dsComboDetail");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj = new Edit("Edit01", "absolute", null, "56", "421", "21", "4", null, this.div_Data.Div00);
            obj.set_taborder("66");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", null, "84", "421", "21", "4", null, this.div_Data.Div00);
            obj.set_taborder("67");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", null, "168", "421", "21", "4", null, this.div_Data.Div00);
            obj.set_taborder("69");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", null, "196", "421", "21", "4", null, this.div_Data.Div00);
            obj.set_taborder("70");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", null, "23", "24", "24", "124", null, this.div_Data.Div00);
            obj.set_taborder("71");
            obj.set_cssclass("btn_WF_GridAdd");
            obj.style.set_background("URL('theme://WorkFrame/icon_WF_GridAddN.png')");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", null, "23", "24", "24", "101", null, this.div_Data.Div00);
            obj.set_taborder("72");
            obj.set_cssclass("btn_WF_GridDelete");
            obj.style.set_background("@gradation URL('theme://WorkFrame/icon_WF_GridDeleteN.png')");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button04", "absolute", null, "23", "24", "24", "78", null, this.div_Data.Div00);
            obj.set_taborder("73");
            obj.set_cssclass("btn_WF_ExcelDown");
            obj.style.set_background("@gradation URL('theme://WorkFrame/icon_WF_ExcelUpN.png')");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", null, "23", "24", "24", "55", null, this.div_Data.Div00);
            obj.set_taborder("74");
            obj.set_cssclass("btn_WF_ExcelUp");
            obj.style.set_background("URL('theme://WorkFrame/icon_WF_ExcelDownN.png')");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Calendar("Calendar03", "absolute", null, "112", "421", "21", "4", null, this.div_Data.Div00);
            this.div_Data.Div00.addChild(obj.name, obj);
            obj.set_taborder("75");
            obj.set_locale("en_US");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Div("div_Search", "absolute", "0", "0", null, "68", "0", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Bg");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "-1", null, null, "8", "0", "0", this.div_Search);
            obj.set_taborder("18");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "-1", "0", null, "8", "0", null, this.div_Search);
            obj.set_taborder("19");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "-1", "29", null, "8", "0", null, this.div_Search);
            obj.set_taborder("20");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "28", null, "0", "0", this.div_Search);
            obj.set_taborder("23");
            obj.set_text("w28");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", null, null, "68", "21", "28", "8", this.div_Search);
            obj.set_taborder("10");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "32", "8", "65", "21", null, null, this.div_Search);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_text("SEQ");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "97", "8", "150", "21", null, null, this.div_Search);
            obj.set_taborder("3");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("15");
            obj.set_text("w\r30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "277", "8", "89", "21", null, null, this.div_Search);
            obj.set_taborder("25");
            obj.set_text("BIRTHDATE");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "247", "0", "30", "37", null, null, this.div_Search);
            obj.set_taborder("26");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Div("div_calendar", "absolute", "366", "8", "226", "21", null, null, this.div_Search);
            obj.set_taborder("27");
            obj.set_text("Div00");
            obj.set_url("CommonObject::CalendarTerm.xfdl");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "623", "8", "89", "21", null, null, this.div_Search);
            obj.set_taborder("28");
            obj.set_text("SEX");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "593", "0", "30", "37", null, null, this.div_Search);
            obj.set_taborder("29");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new ExtCombo("cdSex", "absolute", "712", "8", "185", "21", null, null, this.div_Search);
            obj.set_gridFormats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Column size=\"110\"/>\n      <Column size=\"110\"/>\n    </Columns>\n    <Rows>\n      <Row size=\"24\"/>\n    </Rows>\n    <Band id=\"body\">\n      <Cell text=\"bind:CODE\"/>\n      <Cell col=\"1\" text=\"bind:VALUE\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.set_codeColumn("code");
            obj.set_innerDataset("dsComboSearch");
            obj.set_textColumn("data");
            obj.set_taborder("30");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_SearchSlide", "absolute", null, "67", "33", "13", "45", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Up");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("57");

            	}
            );
            this.div_Data.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");

            	}
            );
            this.div_Data.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 68, this.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Bg");
            		p.set_scrollbars("none");

            	}
            );
            this.div_Search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Temp_01");
            		p.set_titletext("Multi Detail");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","div_Data.Div00.Grid00","binddataset","dsResult","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_Search.Edit00","value","dsInput","SEQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_Data.Div00.Edit01","value","dsResult","SEQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_Data.Div00.Edit02","value","dsResult","NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_Data.Div00.Combo01","value","dsResult","SEX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_Data.Div00.Edit03","value","dsResult","TELEPHONE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_Data.Div00.Edit04","value","dsResult","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_Data.Div00.Calendar03","value","dsResult","BIRTHDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CommonObject::AttachFiles.xfdl");
            this._addPreloadList("fdl", "CommonObject::CalendarTerm.xfdl");
        };
        
        // User Script
        this.addIncludeScript("FileupdownloadSample.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("FileupdownloadSample.xfdl", function(exports) {
        /*==================================================================================
        * SYSTEM      : LG전자 UI 표준
        * BUSINESS    : 종합활용 페이지
        * FILE NAME   : 
        * PROGRAMMER  : 
        * DATE        : 2017.12.13
        * DESCRIPTION : 
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *------------------------------------------------------------------
          파일업/다운로드 샘플
          CRUD 샘풀
        *------------------------------------------------------------------
        ==================================================================================*/

        /*----------------------------------------------------------------------------------
         Library Include
        -----------------------------------------------------------------------------------*/
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        

        /*----------------------------------------------------------------------------------
         Form Variable
        -----------------------------------------------------------------------------------*/
        this.sFileGroupID = "";
        this.bDeleteMode = false;

        
        /*----------------------------------------------------------------------------------
        	Form onLoad
        	- this.com_fromInit(obj)를 필수 호출하되, 이외의 함수는 호출하지 않는다.
        -----------------------------------------------------------------------------------*/
        this.form_onload = function(obj,e)
        {
        	this.com_fromInit(obj);
        }

        /*----------------------------------------------------------------------------------
        	fn_formInit
        	- 화면 초기설정은 이곳에서 한다.
        -----------------------------------------------------------------------------------*/
        this.fn_formInit = function()
        {

        }

        
        this.div_Search_Button05_onclick = function(obj,e)
        {
        	this.fn_search();
        }

        
        this.div_Data_Div00_Button12_onclick = function(obj,e)
        {
        	this.fn_save();
        }

        
        this.dsResult_onrowposchanged = function(obj,e)
        {
        	this.div_Data.Div00.div_fileAttach.fn_retrieveAttachFiles(this.dsResult.getColumn(e.newrow, "SEQ")); // 파일조회
        }

        
        /*----------------------------------------------------------------------------------
        	조회
        -----------------------------------------------------------------------------------*/
        this.fn_search = function()
        {
        	// Devon용
        	var sSvcId			= "SearchSample";
        	var sUrl			= "sample/second/retrieveEmployee.do";
        	var sInDs			= "dsInput=dsInput";
        	var sOutDs			= "dsResult=dsResult";
        	var sArg			= "";
        	var sCallback 		= "fn_callBack";	
        	LGE.Core.tranDo(this, sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback);
        }

        
        /*----------------------------------------------------------------------------------
        	저장
        -----------------------------------------------------------------------------------*/
        this.fn_save = function()
        {
        	// Devon용
        	var sSvcId			= "SaveSample";
        	var sUrl			= "sample/second/saveEmployee.do";
        	var sInDs			= "dsResult=dsResult:U";
        	var sOutDs			= "";
        	var sArg			= "";
        	var sCallback 		= "fn_callBack";	
        	LGE.Core.tranDo(this, sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback);
        }

        
        /*----------------------------------------------------------------------------------
         fn_callBack
          - 특별한 사유가 없으면 callback 함수 하나만 생성한다.
        -----------------------------------------------------------------------------------*/
        this.fn_callBack = function(svcid,errcode,errmsg) {

        	if ( errcode < 0 ) {
        		return;
        		
        	} else {
        		switch (svcid)
        		{
        			case "SearchSample" : 
        				var nCount = this.dsResult.rowcount;
        				var sText = this.div_Data.Div00.sta_totalCount.text;
        				this.div_Data.Div00.sta_totalCount.set_text(sText.replace("{0}",nCount));				
        			break;

        			case "SaveSample" : 
        				var sFileGroupID = this.dsResult.getColumn(this.dsResult.rowposition, "SEQ");
        				this.sFileGroupID = sFileGroupID;
        				this.fileSave();
        			break;
        		}
        	}
        }

        /*----------------------------------------------------------------------------------
        	파일저장
        -----------------------------------------------------------------------------------*/
        this.fileSave = function()
        {
        	this.div_Data.Div00.div_fileAttach.fn_uploadAttachFile(this.sFileGroupID);
        }

        
        /*----------------------------------------------------------------------------------
        	그리드 우클릭 메뉴 활성화
        -----------------------------------------------------------------------------------*/
        this.div_Data_Div00_Grid00_onrbuttonup = function(obj,e)
        {
        	LGE.Grid.openGridMenu(obj, e);
        }

        
        /*----------------------------------------------------------------------------------
        	조회영역 접고/펼치기
        -----------------------------------------------------------------------------------*/
        this.Button27_onclick = function(obj,e)
        {
        	this.com_searchSlide();	
        }

        
        this.div_Data_Div00_Button00_onclick = function(obj,e)
        {
        	this.dsResult.addRow();
        }

        this.div_Data_Div00_Button01_onclick = function(obj,e)
        {
        	if(this.confirm("정말로 삭제하시겠습니까?"))
        	{
        		this.bDeleteMode = true;
        		var nDelRow = this.dsResult.rowposition;
        		this.sFileGroupID = this.dsResult.getColumn(nDelRow, "SEQ");
        		this.div_Data.Div00.div_fileAttach.ds_attachFile.deleteAll();
        		this.fileSave();
        	}
        }

        this.fn_ExtFileUp_onsuccess = function (fileId)
        {
        	if(this.bDeleteMode) {
        		this.bDeleteMode = false;
        		this.dsResult.deleteRow(this.dsResult.rowposition);
        		this.fn_save();
        	}

        }

        this.div_Data_Div00_Button05_onclick = function(obj,e)
        {
        	var aGrid = [];
        	aGrid[0] = this.div_Data.Div00.Grid00;
        	
        	var aSheetName = [];
        	aSheetName[0] = "직원리스트";
        	
        	LGE.Core.exportExcel(this, aGrid, "ExportSample", aSheetName);	
        }

        
        this.dsResult_canrowposchange = function(obj,e)
        {

        	trace(obj.getRowType(e.oldrow));

        	if(obj.getRowType(e.oldrow) != 1 && obj.getRowType(e.oldrow) != 0)
        	{
        		alert("변경중인 데이터가 존재합니다. \n이동할 수 없습니다.")
        		return false;
        	}
        }

        this.dsResult_onload = function(obj,e)
        {
        	if(this.dsResult.rowcount <= 0)
        	{
        		this.div_Data.Div00.div_fileAttach.set_enable(false);
        	} else {
        		this.div_Data.Div00.div_fileAttach.set_enable(true);
        	}
        }

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsResult.addEventHandler("onrowposchanged", this.dsResult_onrowposchanged, this);
            this.dsResult.addEventHandler("canrowposchange", this.dsResult_canrowposchange, this);
            this.dsResult.addEventHandler("onload", this.dsResult_onload, this);
            this.dsResult.addEventHandler("onrowsetchanged", this.dsResult_onrowsetchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_Data.Div00.Grid00.addEventHandler("onrbuttonup", this.div_Data_Div00_Grid00_onrbuttonup, this);
            this.div_Data.Div00.Grid00.addEventHandler("onsize", this.div_Data_Div00_Grid00_onsize, this);
            this.div_Data.Div00.Button12.addEventHandler("onclick", this.div_Data_Div00_Button12_onclick, this);
            this.div_Data.Div00.Button00.addEventHandler("onclick", this.div_Data_Div00_Button00_onclick, this);
            this.div_Data.Div00.Button01.addEventHandler("onclick", this.div_Data_Div00_Button01_onclick, this);
            this.div_Data.Div00.Button04.addEventHandler("onclick", this.div_Data_Div00_Button04_onclick, this);
            this.div_Data.Div00.Button05.addEventHandler("onclick", this.div_Data_Div00_Button05_onclick, this);
            this.div_Search.Button05.addEventHandler("onclick", this.div_Search_Button05_onclick, this);
            this.div_Search.Static00.addEventHandler("onclick", this.div_Search_Static00_onclick, this);
            this.div_Search.Edit00.addEventHandler("oneditclick", this.div_Search_Edit00_oneditclick, this);
            this.div_Search.Static03.addEventHandler("onclick", this.div_Search_Static00_onclick, this);
            this.div_Search.Static05.addEventHandler("onclick", this.div_Search_Static00_onclick, this);
            this.btn_SearchSlide.addEventHandler("onclick", this.Button27_onclick, this);

        };

        this.loadIncludeScript("FileupdownloadSample.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
