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
                this.set_classname("paging_sample");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,524);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"pageCount\" type=\"STRING\" size=\"256\"/><Column id=\"pageNextYn\" type=\"STRING\" size=\"256\"/><Column id=\"pageConditionKey\" type=\"STRING\" size=\"256\"/><Column id=\"pageTotalCount\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageConditionKey\"/><Col id=\"pageNextYn\"/><Col id=\"pageCount\"/><Col id=\"pageTotalCount\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"publish_yn\" type=\"string\" size=\"32\"/><Column id=\"on_off\" type=\"string\" size=\"32\"/><Column id=\"approval_yn\" type=\"string\" size=\"32\"/><Column id=\"availl_yn\" type=\"string\" size=\"32\"/><Column id=\"course_days\" type=\"float\" size=\"8\"/><Column id=\"reg_date\" type=\"string\" size=\"32\"/><Column id=\"course_ename\" type=\"string\" size=\"32\"/><Column id=\"site_code\" type=\"string\" size=\"32\"/><Column id=\"course_time\" type=\"float\" size=\"8\"/><Column id=\"review_days\" type=\"int\" size=\"4\"/><Column id=\"pass_point\" type=\"int\" size=\"4\"/><Column id=\"reg_user_seq\" type=\"string\" size=\"32\"/><Column id=\"credit\" type=\"bigdecimal\" size=\"16\"/><Column id=\"edu_institute\" type=\"string\" size=\"32\"/><Column id=\"cdp_yn\" type=\"string\" size=\"32\"/><Column id=\"contents\" type=\"string\" size=\"32\"/><Column id=\"keyword\" type=\"string\" size=\"32\"/><Column id=\"course_name\" type=\"string\" size=\"32\"/><Column id=\"upd_user_seq\" type=\"string\" size=\"32\"/><Column id=\"employeement_yn\" type=\"string\" size=\"32\"/><Column id=\"code\" type=\"string\" size=\"32\"/><Column id=\"use_yn\" type=\"string\" size=\"32\"/><Column id=\"cate_code\" type=\"string\" size=\"32\"/><Column id=\"can_fee_yn\" type=\"string\" size=\"32\"/><Column id=\"course_fee\" type=\"bigdecimal\" size=\"16\"/><Column id=\"upd_date\" type=\"string\" size=\"32\"/><Column id=\"edu_category\" type=\"string\" size=\"32\"/><Column id=\"goal\" type=\"string\" size=\"32\"/><Column id=\"course_code\" type=\"string\" size=\"32\"/><Column id=\"target\" type=\"string\" size=\"32\"/><Column id=\"lang_code\" type=\"string\" size=\"32\"/><Column id=\"curr_code\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_page", this);
            obj._setContents("");
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
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"106\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"course_code\"/><Cell col=\"1\" text=\"publish_yn\"/><Cell col=\"2\" text=\"on_off\"/><Cell col=\"3\" text=\"approval_yn\"/><Cell col=\"4\" text=\"availl_yn\"/><Cell col=\"5\" text=\"course_days\"/><Cell col=\"6\" text=\"reg_date\"/><Cell col=\"7\" text=\"course_ename\"/><Cell col=\"8\" text=\"site_code\"/><Cell col=\"9\" text=\"course_time\"/><Cell col=\"10\" text=\"review_days\"/></Band><Band id=\"body\"><Cell text=\"bind:course_code\"/><Cell col=\"1\" text=\"bind:publish_yn\"/><Cell col=\"2\" text=\"bind:on_off\"/><Cell col=\"3\" text=\"bind:approval_yn\"/><Cell col=\"4\" text=\"bind:availl_yn\"/><Cell col=\"5\" text=\"bind:course_days\"/><Cell col=\"6\" text=\"bind:reg_date\"/><Cell col=\"7\" text=\"bind:course_ename\"/><Cell col=\"8\" text=\"bind:site_code\"/><Cell col=\"9\" text=\"bind:course_time\"/><Cell col=\"10\" text=\"bind:review_days\"/></Band></Format></Formats>");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "555", "0", "30", "37", null, null, this.div_Data.Div00);
            obj.set_taborder("47");
            obj.set_text("h37");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", null, "10", "111", "24", "0", null, this.div_Data.Div00);
            obj.set_taborder("48");
            obj.set_text("Custom Button");
            obj.set_cssclass("btn_grd_black");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", null, "10", "111", "24", "114", null, this.div_Data.Div00);
            obj.set_taborder("49");
            obj.set_text("Custom Button");
            obj.set_cssclass("btn_grd_gray");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "779", "0", "70", "10", null, null, this.div_Data.Div00);
            obj.set_taborder("50");
            obj.set_text("h10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.Div00.addChild(obj.name, obj);

            obj = new Button("btn_SearchSlide", "absolute", null, "9", "21", "21", "103", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Down");
            this.addChild(obj.name, obj);

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
          NCD를 사용하려면 서비스파일이 제작되어야 합니다.
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

        
        	// paging init
        	var oPagingDs 		= this.ds_list;				// paging 대상 dataset
        	var oInPagingDs		= this.ds_search;			// paging시 input dataset (본샘플의 ds_search의 4개 컬럼을 필수로 선언되어야 한다.)
        	var oOutPagingDs	= this.ds_page;				// paging시 서버에서 받는 output dataset (paging을 위해 서버와 주고 받는 정보)
        	var sKey			= "course_code|on_off@D";	// Key가 되는 컬럼
            // ================================================================================================================================
            // sKey 컬럼 사용예
            // ================================================================================================================================
            // 	var sKey		= "course_code";			// 컬럼이 하나일 경우
            // 	var sKey		= "course_code|on_off";		// 컬럼이 두개일 경우
            // 	var sKey		= "course_code@D|on_off";	// 두개 컬럼중 하나만 내림차순으로 조회할 경우
            // 	var sKey		= "course_code@D|on_off@D";	// 두컬럼 모두 내림차순으로 조회할 경우
        	this.com_pagingInit(oPagingDs, oInPagingDs, oOutPagingDs, sKey);

        	var sSvcId	= "page_sample";
        	var sUrl	= "sample/employee/retrievePagingList.ajax";
        	var sInDs	= "dsSearch=ds_search";
        	var sOutDs	= "ds_list=oDataset ds_page=pageDataset"; // 첫번째 paging 대상 dataset , 두번째 paging 정보 dataset 
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
            this.addEventHandler("onload", this.paging_sample_onload, this);
            this.div_Data.Div00.Grid00.addEventHandler("onvscroll", this.div_Data_Div00_Grid00_onvscroll, this);
            this.btn_SearchSlide.addEventHandler("onclick", this.btn_SearchSlide_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);

        };

        this.loadIncludeScript("PagingAppendSample.xfdl", true);

       
    };
}
)();
