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
                this.set_name("paging_sample");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,524);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInput", this);
            obj._setContents("<ColumnInfo><Column id=\"pageCount\" type=\"STRING\" size=\"256\"/><Column id=\"pageNextYn\" type=\"STRING\" size=\"256\"/><Column id=\"pageConditionKey\" type=\"STRING\" size=\"256\"/><Column id=\"pageTotalCount\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"TELEPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"POSTAL\" type=\"STRING\" size=\"256\"/><Column id=\"JOBLEVEL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SKILL_CODE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOption", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"data\">map 방식</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"data\">vo 방식</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_Search", "absolute", "0", "0", null, "68", "0", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "252", null, null, "8", "588", "0", this.div_Search);
            obj.set_taborder("27");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "252", "0", null, "8", "588", null, this.div_Search);
            obj.set_taborder("28");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "252", "29", null, "8", "588", null, this.div_Search);
            obj.set_taborder("29");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "30", "8", "80", "21", null, null, this.div_Search);
            obj.set_taborder("30");
            obj.set_text("Subsidiary");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "110", "8", "150", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("cmb_WF_Essential");
            obj = new Static("Static03", "absolute", "290", "8", "74", "21", null, null, this.div_Search);
            obj.set_taborder("32");
            obj.set_text("Use Flag");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "364", "8", "150", "21", null, null, this.div_Search);
            obj.set_taborder("33");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "30", "37", "80", "21", null, null, this.div_Search);
            obj.set_taborder("34");
            obj.set_text("DC Code");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "110", "37", "150", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("cmb_WF_Essential");
            obj = new Static("Static06", "absolute", "290", "37", "74", "21", null, null, this.div_Search);
            obj.set_taborder("36");
            obj.set_text("W/H Code");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo02", "absolute", "364", "37", "150", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("cmb_WF_Essential");
            obj = new Static("Static08", "absolute", "544", "8", "94", "21", null, null, this.div_Search);
            obj.set_taborder("38");
            obj.set_text("Subinventory");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "638", "8", "150", "21", null, null, this.div_Search);
            obj.set_taborder("39");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", null, "0", "66", "8", "29", null, this.div_Search);
            obj.set_taborder("40");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "20", null, "0", "0", this.div_Search);
            obj.set_taborder("41");
            obj.set_text("w20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "260", "0", "30", "66", null, null, this.div_Search);
            obj.set_taborder("42");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("43");
            obj.set_text("w\r\n20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "514", "0", "30", "66", null, null, this.div_Search);
            obj.set_taborder("44");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "642", "39", "149", "19", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_innerdataset("@dsOption");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_value("01");
            obj = new Static("Static11", "absolute", "544", "37", "94", "21", null, null, this.div_Search);
            obj.set_taborder("46");
            obj.set_text("파라미터");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_Data", "absolute", "0", "68", null, null, "0", "0", this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0", "0", null, null, "0", "0", this.div_Data);
            obj.set_taborder("0");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "10", "200", "24", null, null, this.div_Data.Div00);
            obj.set_taborder("44");
            obj.set_text("DC Code Management");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "37", null, null, "0", "21", this.div_Data.Div00);
            obj.set_taborder("45");
            obj.set_binddataset("dsResult");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"SEQ\"/><Cell col=\"1\" disptype=\"normal\" text=\"NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"BIRTHDATE\"/><Cell col=\"3\" disptype=\"normal\" text=\"SEX\"/><Cell col=\"4\" disptype=\"normal\" text=\"TELEPHONE\"/><Cell col=\"5\" disptype=\"normal\" text=\"ADDRESS\"/><Cell col=\"6\" disptype=\"normal\" text=\"POSTAL\"/><Cell col=\"7\" disptype=\"normal\" text=\"JOBLEVEL_CODE\"/><Cell col=\"8\" disptype=\"normal\" text=\"DEPARTMENT_CODE\"/><Cell col=\"9\" disptype=\"normal\" text=\"SKILL_CODE\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:SEQ\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:BIRTHDATE\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:SEX\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:TELEPHONE\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:ADDRESS\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:POSTAL\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:JOBLEVEL_CODE\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:DEPARTMENT_CODE\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:SKILL_CODE\"/></Band></Format></Formats>");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "555", "0", "30", "37", null, null, this.div_Data.Div00);
            obj.set_taborder("47");
            obj.set_text("h37");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "779", "0", "70", "10", null, null, this.div_Data.Div00);
            obj.set_taborder("50");
            obj.set_text("h10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.Div00.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", null, "9", "80", "21", "21", null, this);
            obj.set_taborder("3");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            obj.set_tooltiptext("Inquiry");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 68, this.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Bg");

            	}
            );
            this.div_Search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");

            	}
            );
            this.div_Data.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.div_Data.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 524, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("paging_sample");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PagingAppendSample.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("PagingAppendSample.xfdl", function(exports) {
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
        * 해당 페이징 모듈은 DevOn 프레임으로 제작된 샘플입니다.
          com.lge.nip.sample.employee.controller.EmployeeController 참조하세요
          스크롤시 화면의 this.fn_search()를 호출합니다.
          input dataset은 본샘플의 dsInput과 동일한 레이아웃이 필요합니다.
        *------------------------------------------------------------------
        ==================================================================================*/

        /*----------------------------------------------------------------------------------
         Library Include
        -----------------------------------------------------------------------------------*/
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        this.PAGE_COUNT = 200; // 페이지 번호 표시 개수
        /*----------------------------------------------------------------------------------
         Form Variable
        -----------------------------------------------------------------------------------*/

        
        /*----------------------------------------------------------------------------------
         Form onLoad
          - this.com_fromInit(obj)를 필수 호출하되, 이외의 함수는 호출하지 않는다.
        -----------------------------------------------------------------------------------*/
        this.paging_sample_onload = function(obj,e)
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

        this.fn_search = function ()
        {
        	var sSvcId	= "page_sample";
        	
        	this.dsInput.setColumn(0,"pageCount",this.PAGE_COUNT);
        	
        	var sUrl	= "sample/employee/retrieveEmployeeScrollPageList.do"; //Map 방식
        	
        	if (this.div_Search.Radio00.value == '02')
        		sUrl = "sample/second/retrieveEmployeeScrollPageList.do"; //VO 방식
        	
        	var sInDs	= "dsInput=dsInput";
        	var sOutDs	= "dsResult=dsResult dsInput=pageDataset"; // 첫번째 paging 대상 dataset , 두번째 paging 정보 dataset 
        	var sArg	= "";
        	LGE.Core.tranDoPaging(this, sSvcId, sUrl, sInDs, sOutDs, sArg, "");
        }

        this.Button05_onclick = function(obj,e)
        {
        	this.fn_search();
        }

        this.div_Data_Div00_Grid00_onvscroll = function(obj,e)
        {
        	// grid에서 append paging을 사용하려면 onvscroll 이벤트 선언
        	this.com_gridPaging_onvscroll(obj, e);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsResult.addEventHandler("onrowposchanged", this.dsResult_onrowposchanged, this);
            this.addEventHandler("onload", this.paging_sample_onload, this);
            this.div_Data.Div00.Grid00.addEventHandler("onvscroll", this.div_Data_Div00_Grid00_onvscroll, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);

        };

        this.loadIncludeScript("PagingAppendSample.xfdl", true);

       
    };
}
)();
