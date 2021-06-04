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

            obj = new Dataset("dsInput2", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsResult2", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_Search", "absolute", "0", "0", null, "68", "0", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Bg");
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
            obj = new Static("Static04", "absolute", "247", "0", "60", null, null, "0", this.div_Search);
            obj.set_taborder("29");
            obj.set_text("w60");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "523", "0", "60", null, null, "0", this.div_Search);
            obj.set_taborder("36");
            obj.set_text("w60");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("15");
            obj.set_text("w\r30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_Data", "absolute", "0", "68", null, null, "0", "0", this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0", "0", null, null, "0", "0", this.div_Data);
            obj.set_taborder("57");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "23", "200", "24", null, null, this.div_Data.Div00);
            obj.set_taborder("0");
            obj.set_text("DC Code Management");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "50", null, null, "328", "20", this.div_Data.Div00);
            obj.set_taborder("6");
            obj.set_binddataset("dsResult");
            obj.set_autoenter("select");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SEQ\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"BIRTHDATE\"/><Cell col=\"3\" text=\"SEX\"/><Cell col=\"4\" text=\"TELEPHONE\"/><Cell col=\"5\" text=\"ADDRESS\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:SEQ\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:NAME\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:BIRTHDATE\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:SEX\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:TELEPHONE\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:ADDRESS\"/></Band></Format></Formats>");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", null, "23", "24", "24", "374", null, this.div_Data.Div00);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_GridDelete");
            obj.style.set_background("@gradation URL('theme://WorkFrame/icon_WF_GridDeleteN.png')");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button03", "absolute", null, "23", "24", "24", "397", null, this.div_Data.Div00);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_GridAdd");
            obj.style.set_background("URL('theme://WorkFrame/icon_WF_GridAddN.png')");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button12", "absolute", null, "23", "53", "24", "0", null, this.div_Data.Div00);
            obj.set_taborder("5");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_GridSave");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button32", "absolute", null, "23", "24", "24", "351", null, this.div_Data.Div00);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ExcelDown");
            obj.style.set_background("@gradation URL('theme://WorkFrame/icon_WF_ExcelUpN.png')");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button34", "absolute", null, "23", "24", "24", "328", null, this.div_Data.Div00);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ExcelUp");
            obj.style.set_background("URL('theme://WorkFrame/icon_WF_ExcelDownN.png')");
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
            obj = new Static("Static52", "absolute", "0", null, null, "21", "0", "0", this.div_Data.Div00);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GridTotal");
            obj.set_text("Total : 100");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", null, "50", "320", null, "0", "20", this.div_Data.Div00);
            obj.set_taborder("40");
            obj.set_binddataset("dsResult2");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SEQ\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"BIRTHDATE\"/><Cell col=\"3\" text=\"SEX\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:SEQ\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:NAME\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:BIRTHDATE\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:SEX\"/></Band></Format></Formats>");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", null, "23", "24", "24", "124", null, this.div_Data.Div00);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_GridAdd");
            obj.style.set_background("URL('theme://WorkFrame/icon_WF_GridAddN.png')");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", null, "23", "24", "24", "101", null, this.div_Data.Div00);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_GridDelete");
            obj.style.set_background("@gradation URL('theme://WorkFrame/icon_WF_GridDeleteN.png')");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button04", "absolute", null, "23", "24", "24", "78", null, this.div_Data.Div00);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_ExcelDown");
            obj.style.set_background("@gradation URL('theme://WorkFrame/icon_WF_ExcelUpN.png')");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", null, "23", "24", "24", "55", null, this.div_Data.Div00);
            obj.set_taborder("44");
            obj.set_cssclass("btn_WF_ExcelUp");
            obj.style.set_background("URL('theme://WorkFrame/icon_WF_ExcelDownN.png')");
            this.div_Data.Div00.addChild(obj.name, obj);

            obj = new Button("btn_SearchSlide", "absolute", null, "68", "33", "13", "45", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Up");
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
            obj = new BindItem("item2","div_Data.Div00.Grid01","binddataset","dsResult","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MessageMngSample.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("MessageMngSample.xfdl", function(exports) {
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

        
        this.form_onload = function(obj,e)
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

        // search slide
        this.Button27_onclick = function(obj,e)
        {
        	this.com_searchSlide();	
        }

        
        // Search click
        this.div_Search_Button05_onclick = function(obj,e)
        {

        	// Devon용
        	var sSvcId			= "SearchSample";
        	var sUrl			= "sample/second/retrieveEmployee.do";
        	var sInDs			= "dsInput=dsInput";							//서버명칭=nexa명칭
        	var sOutDs			= "dsResult=dsResult";							//nexa명칭=서버명칭
        	var sArg			= "";
        	var sCallback 		= "fn_callBack";	
        	LGE.Core.tranDo(this, sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback);
        	
        	
        // 	// NCD용
        // 	var sSvcId 			= "BRC_COM_RetrieveNexaMsgList";
        // 	var sActId 			= "BRC_COM_RetrieveNexaMsgList";
        // 	var sInDs			= "dsInput=dsInput";							//서버명칭=nexa명칭
        // 	var sOutDs			= "dsResult=dsResult";							//nexa명칭=서버명칭
        // 	var sArg   			= "";
        // 	var sCallback 		= "fn_callBack";
        // 	LGE.Core.tran(this, sSvcId, sActId, sInDs, sOutDs, sArg, sCallback);	
        	
        	
        }

        
        this.fn_callBack = function(svcid,errcode,errmsg) {

        	if ( errcode < 0 ) {
        		//alert(errcode); // 메세지 데이터가 있을경우 아래와 같이 처리
        		//LGE.Core.showError(this, "LOGIN.FAIL", "", "fn_msgCallBack");

        		return;
        	} else { // 성공시
        		
        	}
        }

        // 엑셀 import
        this.div_Data_Div00_Button32_onclick = function(obj,e)
        {
        	LGE.Core.importExcel(this, "ImportSample", "dsResult");
        }

        
        // 엑셀 export
        this.div_Data_Div00_Button34_onclick = function(obj,e)
        {
        	LGE.Core.exportExcel(this, this.div_Data.Div00.Grid00, "ExportSample");
        }

        // row 추가
        this.div_Data_Div00_Button03_onclick = function(obj,e)
        {
        	this.dsResult.addRow();
        }

        // row 삭제
        this.div_Data_Div00_Button02_onclick = function(obj,e)
        {
        	this.dsResult.deleteRow(this.dsResult.rowposition);
        }

        // 저장
        this.div_Data_Div00_Button12_onclick = function(obj,e)
        {
        	// Devon용
        	var sSvcId			= "SaveSample";
        	var sUrl			= "sample/second/saveEmployee.do";
        	var sInDs			= "dsResult=dsResult:U dsResult2=dsResult2:U";							//서버명칭=nexa명칭
        	var sOutDs			= "";							//nexa명칭=서버명칭
        	var sArg			= "";
        	var sCallback 		= "fn_callBack";	
        	LGE.Core.tranDo(this, sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback);
        }

        

        this.dsResult_onrowposchanged = function(obj,e)
        {

        	var sSeq = obj.getColumn(e.newrow,"SEQ");
        	this.dsInput2.setColumn(0,"SEQ", sSeq);
         	this.fn_SubSearchSample();
        }

        
        this.fn_SubSearchSample = function()
        {
        	// Devon용
        	var sSvcId			= "SubSearchSample";
        	var sUrl			= "sample/second/retrieveEmployeeFamily.do";
        	var sInDs			= "dsInput2=dsInput2";							//서버명칭=nexa명칭
        	var sOutDs			= "dsResult2=dsResult2";							//nexa명칭=서버명칭
        	var sArg			= "";
        	var sCallback 		= "fn_callBack";	
        	
        	//alert(this.dsInput2.saveXML());
        	
        	LGE.Core.tranDo(this, sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback);	
        }

        
        this.div_Data_Div00_Button00_onclick = function(obj,e)
        {
        	this.dsResult2.addRow();
        }

        this.div_Data_Div00_Button01_onclick = function(obj,e)
        {
        	this.dsResult2.deleteRow(this.dsResult2.rowposition);
        }

        this.div_Data_Div00_Button04_onclick = function(obj,e)
        {
        	LGE.Core.importExcel(this, "ImportSample", "dsResult2");
        }

        this.div_Data_Div00_Button05_onclick = function(obj,e)
        {
        	LGE.Core.exportExcel(this, this.div_Data.Div00.Grid01, "ExportSample");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsResult.addEventHandler("onrowposchanged", this.dsResult_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_Search.Button05.addEventHandler("onclick", this.div_Search_Button05_onclick, this);
            this.div_Search.Static00.addEventHandler("onclick", this.div_Search_Static00_onclick, this);
            this.div_Search.Edit00.addEventHandler("oneditclick", this.div_Search_Edit00_oneditclick, this);
            this.div_Data.Div00.Button02.addEventHandler("onclick", this.div_Data_Div00_Button02_onclick, this);
            this.div_Data.Div00.Button03.addEventHandler("onclick", this.div_Data_Div00_Button03_onclick, this);
            this.div_Data.Div00.Button12.addEventHandler("onclick", this.div_Data_Div00_Button12_onclick, this);
            this.div_Data.Div00.Button32.addEventHandler("onclick", this.div_Data_Div00_Button32_onclick, this);
            this.div_Data.Div00.Button34.addEventHandler("onclick", this.div_Data_Div00_Button34_onclick, this);
            this.div_Data.Div00.Button00.addEventHandler("onclick", this.div_Data_Div00_Button00_onclick, this);
            this.div_Data.Div00.Button01.addEventHandler("onclick", this.div_Data_Div00_Button01_onclick, this);
            this.div_Data.Div00.Button04.addEventHandler("onclick", this.div_Data_Div00_Button04_onclick, this);
            this.div_Data.Div00.Button05.addEventHandler("onclick", this.div_Data_Div00_Button05_onclick, this);
            this.btn_SearchSlide.addEventHandler("onclick", this.Button27_onclick, this);

        };

        this.loadIncludeScript("MessageMngSample.xfdl", true);

       
    };
}
)();
