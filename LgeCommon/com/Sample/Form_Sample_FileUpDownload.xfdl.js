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
                this.set_name("Form_Sample_FileUpDownload");
                this.set_titletext("Sample");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"TELEPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"POSTAL\" type=\"STRING\" size=\"256\"/><Column id=\"JOBLEVEL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SKILL_CODE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">남자</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_comboDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">남자</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_comboSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">남자</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_Data", "absolute", "0", "68", null, null, "0", "0", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Div("div_Work", "absolute", "0", "0", null, null, "0", "0", this.div_Data);
            obj.set_taborder("0");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", null, "136", "576", "29", "0", null, this.div_Data.div_Work);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", null, "108", "576", "29", "0", null, this.div_Data.div_Work);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", null, "80", "576", "29", "0", null, this.div_Data.div_Work);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", null, "52", "576", "29", "0", null, this.div_Data.div_Work);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "23", "200", "24", null, null, this.div_Data.div_Work);
            obj.set_taborder("80");
            obj.set_text("직원조회");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Grid("grd_Result", "absolute", "0", "50", null, null, "587", "21", this.div_Data.div_Work);
            obj.set_taborder("81");
            obj.set_binddataset("ds_result");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"88\"/><Column size=\"80\"/><Column size=\"45\"/><Column size=\"138\"/><Column size=\"218\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SEQ\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"BIRTHDATE\"/><Cell col=\"3\" text=\"SEX\"/><Cell col=\"4\" text=\"TELEPHONE\"/><Cell col=\"5\" text=\"ADDRESS\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"align:center;\" text=\"bind:SEQ\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:NAME\"/><Cell col=\"2\" edittype=\"none\" style=\"align:center;\" text=\"bind:BIRTHDATE\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:SEX\" combodataset=\"ds_combo\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"4\" edittype=\"none\" style=\"align:center;\" text=\"bind:TELEPHONE\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:ADDRESS\"/></Band></Format></Formats>");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Button("btn_Save", "absolute", null, "23", "53", "24", "0", null, this.div_Data.div_Work);
            obj.set_taborder("82");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_GridSave");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "0", null, "23", "0", null, this.div_Data.div_Work);
            obj.set_taborder("83");
            obj.set_text("h23");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "195", "0", "30", "50", null, null, this.div_Data.div_Work);
            obj.set_taborder("84");
            obj.set_text("h50");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("sta_totalCount", "absolute", "0", null, null, "21", "587", "0", this.div_Data.div_Work);
            obj.set_taborder("85");
            obj.set_text("Total : {0}");
            obj.set_cssclass("sta_WF_GridTotal");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", null, "50", "577", "2", "0", null, this.div_Data.div_Work);
            obj.set_taborder("86");
            obj.style.set_background("#4f5670ff");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static61", "absolute", null, "136", "149", "29", "427", null, this.div_Data.div_Work);
            obj.set_taborder("87");
            obj.set_text("SEX");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", null, "108", "149", "29", "427", null, this.div_Data.div_Work);
            obj.set_taborder("88");
            obj.set_text("BIRTHDATE");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", null, "80", "149", "29", "427", null, this.div_Data.div_Work);
            obj.set_taborder("89");
            obj.set_text("NAME");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static57", "absolute", null, "52", "149", "29", "427", null, this.div_Data.div_Work);
            obj.set_taborder("90");
            obj.set_text("SEQ");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", null, "192", "576", "29", "0", null, this.div_Data.div_Work);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", null, "164", "576", "29", "0", null, this.div_Data.div_Work);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", null, "192", "149", "29", "427", null, this.div_Data.div_Work);
            obj.set_taborder("93");
            obj.set_text("ADDRESS");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", null, "164", "149", "29", "427", null, this.div_Data.div_Work);
            obj.set_taborder("94");
            obj.set_text("TELEPHONE");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Div("div_fileAttach", "absolute", null, "260", "576", "165", "0", null, this.div_Data.div_Work);
            obj.set_taborder("95");
            obj.set_url("CommonObject::AttachFiles.xfdl");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", null, "233", "200", "24", "376", null, this.div_Data.div_Work);
            obj.set_taborder("96");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", null, "140", "421", "21", "4", null, this.div_Data.div_Work);
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj.set_taborder("97");
            obj.set_innerdataset("@ds_comboDetail");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj = new Edit("Edit01", "absolute", null, "56", "421", "21", "4", null, this.div_Data.div_Work);
            obj.set_taborder("98");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", null, "84", "421", "21", "4", null, this.div_Data.div_Work);
            obj.set_taborder("99");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", null, "168", "421", "21", "4", null, this.div_Data.div_Work);
            obj.set_taborder("100");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", null, "196", "421", "21", "4", null, this.div_Data.div_Work);
            obj.set_taborder("101");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Button("btn_Add", "absolute", null, "23", "24", "24", "124", null, this.div_Data.div_Work);
            obj.set_taborder("102");
            obj.set_cssclass("btn_WF_GridAdd");
            obj.style.set_background("URL('theme://WorkFrame/icon_WF_GridAddN.png')");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Button("btn_Delete", "absolute", null, "23", "24", "24", "101", null, this.div_Data.div_Work);
            obj.set_taborder("103");
            obj.set_cssclass("btn_WF_GridDelete");
            obj.style.set_background("@gradation URL('theme://WorkFrame/icon_WF_GridDeleteN.png')");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Button("btn_Import", "absolute", null, "23", "24", "24", "78", null, this.div_Data.div_Work);
            obj.set_taborder("104");
            obj.set_cssclass("btn_WF_ExcelDown");
            obj.style.set_background("@gradation URL('theme://WorkFrame/icon_WF_ExcelUpN.png')");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Button("btn_Export", "absolute", null, "23", "24", "24", "55", null, this.div_Data.div_Work);
            obj.set_taborder("105");
            obj.set_cssclass("btn_WF_ExcelUp");
            obj.style.set_background("URL('theme://WorkFrame/icon_WF_ExcelDownN.png')");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Calendar("Calendar03", "absolute", null, "112", "421", "21", "4", null, this.div_Data.div_Work);
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj.set_taborder("106");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_locale("en_US");

            obj = new Div("div_Search", "absolute", "0", "0", null, "68", "0", null, this);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "-1", null, null, "8", "0", "0", this.div_Search);
            obj.set_taborder("31");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "-1", "0", null, "8", "0", null, this.div_Search);
            obj.set_taborder("32");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "-1", "29", null, "8", "0", null, this.div_Search);
            obj.set_taborder("33");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "28", null, "0", "0", this.div_Search);
            obj.set_taborder("34");
            obj.set_text("w28");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Button("btn_Search", "absolute", null, null, "68", "21", "28", "8", this.div_Search);
            obj.set_taborder("35");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "32", "8", "65", "21", null, null, this.div_Search);
            obj.set_taborder("36");
            obj.set_text("SEQ");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "97", "8", "150", "21", null, null, this.div_Search);
            obj.set_taborder("37");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("38");
            obj.set_text("w\r30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "277", "8", "89", "21", null, null, this.div_Search);
            obj.set_taborder("39");
            obj.set_text("BIRTHDATE");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "247", "0", "30", "37", null, null, this.div_Search);
            obj.set_taborder("40");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Div("div_calendar", "absolute", "366", "8", "226", "21", null, null, this.div_Search);
            obj.set_taborder("41");
            obj.set_text("Div00");
            obj.set_url("CommonObject::CalendarTerm.xfdl");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "623", "8", "89", "21", null, null, this.div_Search);
            obj.set_taborder("42");
            obj.set_text("SEX");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "593", "0", "30", "37", null, null, this.div_Search);
            obj.set_taborder("43");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new ExtCombo("cdSex", "absolute", "712", "8", "185", "21", null, null, this.div_Search);
            obj.set_gridFormats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Column size=\"110\"/>\n      <Column size=\"110\"/>\n    </Columns>\n    <Rows>\n      <Row size=\"24\"/>\n    </Rows>\n    <Band id=\"body\">\n      <Cell text=\"bind:CODE\"/>\n      <Cell col=\"1\" text=\"bind:VALUE\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.set_codeColumn("code");
            obj.set_innerDataset("ds_comboSearch");
            obj.set_textColumn("data");
            obj.set_taborder("44");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_SearchSlide", "absolute", null, "67", "33", "13", "45", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Up");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data.div_Work,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");

            	}
            );
            this.div_Data.div_Work.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");

            	}
            );
            this.div_Data.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 68, this.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFSA_Bg");

            	}
            );
            this.div_Search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Sample");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","div_Data.div_Work.grd_Result","binddataset","ds_result","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_Data.div_Work.Edit01","value","ds_result","SEQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_Data.div_Work.Edit02","value","ds_result","NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_Data.div_Work.Combo01","value","ds_result","SEX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_Data.div_Work.Edit03","value","ds_result","TELEPHONE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_Data.div_Work.Edit04","value","ds_result","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_Data.div_Work.Calendar03","value","ds_result","BIRTHDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_Search.Edit00","value","ds_input","SEQ");
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
        this.addIncludeScript("Form_Sample_FileUpDownload.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("Form_Sample_FileUpDownload.xfdl", function(exports) {

        // Library Include
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        // Form Variables
        this.fsFileGroupID = "";
        this.fbDeleteMode = false;

        // Form onload
        this.Form_Sample_FileUpDownload_onload = function(obj,e)
        {
        	this.com_fromInit(obj);
        }

        this.div_Search_btn_Search_onclick = function(obj,e)
        {
        	this.fn_search();	// search_data
        }

        // [search_data]
        this.fn_search = function()
        {
        	// Devon용
        	var sSvcId			= "SearchSample";
        	var sUrl			= "sample/second/retrieveEmployee.do";
        	var sInDs			= "dsInput=ds_input";
        	var sOutDs			= "ds_result=dsResult";
        	var sArg			= "";
        	var sCallback 		= "fn_callBack";	
        	LGE.Core.tranDo(this, sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback);
        }

        // Callback
        this.fn_callBack = function(svcid,errcode,errmsg) 
        {
        	if ( errcode < 0 ) 
        	{
        		return;
        		
        	} 
        	else 
        	{
        		switch (svcid)
        		{
        			case "SaveSample" : 
        				var sFileGroupID = this.ds_result.getColumn(this.ds_result.rowposition, "SEQ");
        				this.fsFileGroupID = sFileGroupID;
        				this.fileSave();	// save_file
        			break;
        		}

        		var nCount = this.ds_result.rowcount;
        		this.div_Data.div_Work.sta_totalCount.set_text("Total : {" + nCount + "}");				
        	}
        }

        // [save_file]
        this.fileSave = function()
        {
        	this.div_Data.div_Work.div_fileAttach.fn_uploadAttachFile(this.fsFileGroupID);
        }

        this.div_Data_div_Work_btn_Save_onclick = function(obj,e)
        {
        	this.fn_save();	// save_data
        }

        // [save_data]
        this.fn_save = function(svcid)
        {
        	var sSvcId			= "SaveSample";
        	var sUrl			= "sample/second/saveEmployee.do";
        	var sInDs			= "dsResult=ds_result:U";
        	var sOutDs			= "";
        	var sArg			= "";
        	var sCallback 		= "fn_callBack";	

        	if (!Base.isEmpty(svcid))
        	{
        		var sSvcId			= svcid;
        	}
        	
        	LGE.Core.tranDo(this, sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback);
        }

        this.btn_SearchSlide_onclick = function(obj,e)
        {
        	this.com_searchSlide();	
        }

        this.div_Data_div_Work_btn_Add_onclick = function(obj,e)
        {
        	this.ds_result.addRow();
        }

        this.div_Data_div_Work_btn_Delete_onclick = function(obj,e)
        {
        	if(this.confirm("정말로 삭제하시겠습니까?"))
        	{
        		this.fbDeleteMode = true;
        		var nDelRow = this.ds_result.rowposition;
        		this.fsFileGroupID = this.ds_result.getColumn(nDelRow, "SEQ");
        		this.div_Data.div_Work.div_fileAttach.ds_attachFile.deleteAll();
        		this.fileSave();	// save_file
        	}
        }

        this.div_Data_div_Work_btn_Export_onclick = function(obj,e)
        {
        	var aGrid = [];
        	aGrid[0] = this.div_Data.div_Work.grd_Result;
        	
        	var aSheetName = [];
        	aSheetName[0] = "직원리스트";
        	
        	LGE.Core.exportExcel(this, aGrid, "ExportSample", aSheetName);	
        }

        this.ds_result_canrowposchange = function(obj,e)
        {
        	if (obj.getRowType(e.oldrow) != 1 && obj.getRowType(e.oldrow) != 0)
        	{
        		alert("변경중인 데이터가 존재합니다. \n이동할 수 없습니다.")
        		return false;
        	}
        }

        this.ds_result_onrowposchanged = function(obj,e)
        {
        	this.div_Data.div_Work.div_fileAttach.fn_retrieveAttachFiles(obj.getColumn(e.newrow, "SEQ")); // 파일조회
        }

        this.ds_result_onload = function(obj,e)
        {
        	if (obj.rowcount <= 0)
        	{
        		this.div_Data.div_Work.div_fileAttach.set_enable(false);
        	} 
        	else 
        	{
        		this.div_Data.div_Work.div_fileAttach.set_enable(true);
        	}
        }

        this.fn_ExtFileUp_onsuccess = function(fileId)
        {
        	if(this.fbDeleteMode) 
        	{
        		this.fbDeleteMode = false;
        		this.ds_result.deleteRow(this.ds_result.rowposition);
        		this.fn_save("DeleteSample");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_result.addEventHandler("canrowposchange", this.ds_result_canrowposchange, this);
            this.ds_result.addEventHandler("onload", this.ds_result_onload, this);
            this.ds_result.addEventHandler("onrowposchanged", this.ds_result_onrowposchanged, this);
            this.addEventHandler("onload", this.Form_Sample_FileUpDownload_onload, this);
            this.div_Data.div_Work.btn_Save.addEventHandler("onclick", this.div_Data_div_Work_btn_Save_onclick, this);
            this.div_Data.div_Work.btn_Add.addEventHandler("onclick", this.div_Data_div_Work_btn_Add_onclick, this);
            this.div_Data.div_Work.btn_Delete.addEventHandler("onclick", this.div_Data_div_Work_btn_Delete_onclick, this);
            this.div_Data.div_Work.btn_Export.addEventHandler("onclick", this.div_Data_div_Work_btn_Export_onclick, this);
            this.div_Search.btn_Search.addEventHandler("onclick", this.div_Search_btn_Search_onclick, this);
            this.div_Search.Static00.addEventHandler("onclick", this.div_Search_Static00_onclick, this);
            this.div_Search.Edit00.addEventHandler("oneditclick", this.div_Search_Edit00_oneditclick, this);
            this.div_Search.Static03.addEventHandler("onclick", this.div_Search_Static00_onclick, this);
            this.div_Search.Static05.addEventHandler("onclick", this.div_Search_Static00_onclick, this);
            this.btn_SearchSlide.addEventHandler("onclick", this.btn_SearchSlide_onclick, this);

        };

        this.loadIncludeScript("Form_Sample_FileUpDownload.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
