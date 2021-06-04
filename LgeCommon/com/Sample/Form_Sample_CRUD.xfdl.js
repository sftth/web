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
                this.set_name("Form_Sample_CRUD");
                this.set_titletext("Sample");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"TELEPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"POSTAL\" type=\"STRING\" size=\"256\"/><Column id=\"JOBLEVEL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SKILL_CODE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_input2", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_result2", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_Search", "absolute", "0", "0", null, "68", "0", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "-1", null, null, "8", "0", "0", this.div_Search);
            obj.set_taborder("37");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "-1", "0", null, "8", "0", null, this.div_Search);
            obj.set_taborder("38");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "-1", "29", null, "8", "0", null, this.div_Search);
            obj.set_taborder("39");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "28", null, "0", "0", this.div_Search);
            obj.set_taborder("40");
            obj.set_text("w28");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Button("btn_Search", "absolute", null, null, "68", "21", "28", "8", this.div_Search);
            obj.set_taborder("41");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "32", "8", "65", "21", null, null, this.div_Search);
            obj.set_taborder("42");
            obj.set_text("SEQ");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("edt_Seq", "absolute", "97", "8", "150", "21", null, null, this.div_Search);
            obj.set_taborder("43");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "247", "0", "60", null, null, "0", this.div_Search);
            obj.set_taborder("44");
            obj.set_text("w60");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "523", "0", "60", null, null, "0", this.div_Search);
            obj.set_taborder("45");
            obj.set_text("w60");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("46");
            obj.set_text("w\r30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_Data", "absolute", "0", "68", null, null, "0", "0", this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Div("div_Work", "absolute", "0", "0", null, null, "0", "0", this.div_Data);
            obj.set_taborder("0");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "23", "200", "24", null, null, this.div_Data.div_Work);
            obj.set_taborder("45");
            obj.set_text("DC Code Management");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Grid("grd_Data", "absolute", "0", "50", null, null, "328", "20", this.div_Data.div_Work);
            obj.set_taborder("46");
            obj.set_binddataset("ds_result");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SEQ\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"BIRTHDATE\"/><Cell col=\"3\" text=\"SEX\"/><Cell col=\"4\" text=\"TELEPHONE\"/><Cell col=\"5\" text=\"ADDRESS\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:SEQ\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:NAME\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:BIRTHDATE\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:SEX\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:TELEPHONE\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:ADDRESS\"/></Band></Format></Formats>");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Button("btn_Delete", "absolute", null, "23", "24", "24", "374", null, this.div_Data.div_Work);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_GridDelete");
            obj.style.set_background("@gradation URL('theme://WorkFrame/icon_WF_GridDeleteN.png')");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Button("btn_Add", "absolute", null, "23", "24", "24", "397", null, this.div_Data.div_Work);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_GridAdd");
            obj.style.set_background("URL('theme://WorkFrame/icon_WF_GridAddN.png')");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Button("btn_Save", "absolute", null, "23", "53", "24", "0", null, this.div_Data.div_Work);
            obj.set_taborder("49");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_GridSave");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Button("btn_Import", "absolute", null, "23", "24", "24", "351", null, this.div_Data.div_Work);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_ExcelDown");
            obj.style.set_background("@gradation URL('theme://WorkFrame/icon_WF_ExcelUpN.png')");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Button("btn_Export", "absolute", null, "23", "24", "24", "328", null, this.div_Data.div_Work);
            obj.set_taborder("51");
            obj.set_cssclass("btn_WF_ExcelUp");
            obj.style.set_background("URL('theme://WorkFrame/icon_WF_ExcelDownN.png')");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "0", null, "23", "0", null, this.div_Data.div_Work);
            obj.set_taborder("52");
            obj.set_text("h23");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "195", "0", "30", "50", null, null, this.div_Data.div_Work);
            obj.set_taborder("53");
            obj.set_text("h50");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Static("Static52", "absolute", "0", null, null, "21", "0", "0", this.div_Data.div_Work);
            obj.set_taborder("54");
            obj.set_text("Total : 100");
            obj.set_cssclass("sta_WF_GridTotal");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Grid("grd_Data1", "absolute", null, "50", "320", null, "0", "20", this.div_Data.div_Work);
            obj.set_taborder("55");
            obj.set_binddataset("ds_result2");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SEQ\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"BIRTHDATE\"/><Cell col=\"3\" text=\"SEX\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:SEQ\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:NAME\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:BIRTHDATE\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:SEX\"/></Band></Format></Formats>");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Button("btn_Add1", "absolute", null, "23", "24", "24", "124", null, this.div_Data.div_Work);
            obj.set_taborder("56");
            obj.set_cssclass("btn_WF_GridAdd");
            obj.style.set_background("URL('theme://WorkFrame/icon_WF_GridAddN.png')");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Button("btn_Delete1", "absolute", null, "23", "24", "24", "101", null, this.div_Data.div_Work);
            obj.set_taborder("57");
            obj.set_cssclass("btn_WF_GridDelete");
            obj.style.set_background("@gradation URL('theme://WorkFrame/icon_WF_GridDeleteN.png')");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Button("btn_Import1", "absolute", null, "23", "24", "24", "78", null, this.div_Data.div_Work);
            obj.set_taborder("58");
            obj.set_cssclass("btn_WF_ExcelDown");
            obj.style.set_background("@gradation URL('theme://WorkFrame/icon_WF_ExcelUpN.png')");
            this.div_Data.div_Work.addChild(obj.name, obj);
            obj = new Button("btn_Export1", "absolute", null, "23", "24", "24", "55", null, this.div_Data.div_Work);
            obj.set_taborder("59");
            obj.set_cssclass("btn_WF_ExcelUp");
            obj.style.set_background("URL('theme://WorkFrame/icon_WF_ExcelDownN.png')");
            this.div_Data.div_Work.addChild(obj.name, obj);

            obj = new Button("btn_SearchSlide", "absolute", null, "68", "33", "13", "45", null, this);
            obj.set_taborder("2");
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
            		p.set_taborder("1");

            	}
            );
            this.div_Data.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Sample");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_Search.edt_Seq","value","ds_input","SEQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_Data.Div00.Grid00","binddataset","dsResult","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_Data.Div00.Grid01","binddataset","dsResult","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Form_Sample_CRUD.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("Form_Sample_CRUD.xfdl", function(exports) {

        // Library Include
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        // Form onload
        this.Form_Sample_CRUD_onload = function(obj,e)
        {
        	this.com_fromInit(obj);
        }

        this.btn_SearchSlide_onclick = function(obj,e)
        {
        	this.com_searchSlide();
        }

        this.div_Search_btn_Search_onclick = function(obj,e)
        {
        	// Devon용
        	var sSvcId			= "SearchSample";
        	var sUrl			= "sample/second/retrieveEmployee.do";
        	var sInDs			= "dsInput=ds_input";							//서버명칭=nexa명칭
        	var sOutDs			= "ds_result=dsResult";							//nexa명칭=서버명칭
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

        // Callback
        this.fn_callBack = function(svcid,errcode,errmsg) {

        	if ( errcode < 0 ) 
        	{
        		alert("[" + errcode + "] " + errmsg);
        		return;
        	}
        	else
        	{
        		trace("[" + svcid + "] Success!!!");
        		return;
        	}
        }

        this.div_Data_div_Work_btn_Import_onclick = function(obj,e)
        {
        	LGE.Core.importExcel(this, "Sheet1", this.ds_result);
        }

        this.div_Data_div_Work_btn_Export_onclick = function(obj,e)
        {
        	LGE.Core.exportExcel(this, this.div_Data.div_Work.grd_Data, "ExportSample");
        }

        this.div_Data_div_Work_btn_Add_onclick = function(obj,e)
        {
        	this.ds_result.addRow();
        }

        this.div_Data_div_Work_btn_Delete_onclick = function(obj,e)
        {
        	this.ds_result.deleteRow(this.ds_result.rowposition);
        }

        this.div_Data_div_Work_btn_Save_onclick = function(obj,e)
        {
        	// Devon용
        	var sSvcId			= "SaveSample";
        	var sUrl			= "sample/second/saveEmployee.do";
        	var sInDs			= "dsResult=ds_result:U dsResult2=ds_result2:U";							//서버명칭=nexa명칭
        	var sOutDs			= "";							//nexa명칭=서버명칭
        	var sArg			= "";
        	var sCallback 		= "fn_callBack";	
        	LGE.Core.tranDo(this, sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback);
        }

        this.div_Data_div_Work_btn_Add1_onclick = function(obj,e)
        {
        	this.ds_result2.addRow();
        }

        this.div_Data_div_Work_btn_Delete1_onclick = function(obj,e)
        {
        	this.ds_result2.deleteRow(this.ds_result2.rowposition);
        }

        this.div_Data_div_Work_btn_Import1_onclick = function(obj,e)
        {
        	LGE.Core.importExcel(this, "Sheet0", this.ds_result2);
        }

        this.div_Data_div_Work_btn_Export1_onclick = function(obj,e)
        {
        	LGE.Core.exportExcel(this, this.div_Data.div_Work.grd_Data1, "ExportSample");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_result.addEventHandler("onrowposchanged", this.dsResult_onrowposchanged, this);
            this.addEventHandler("onload", this.Form_Sample_CRUD_onload, this);
            this.div_Search.btn_Search.addEventHandler("onclick", this.div_Search_btn_Search_onclick, this);
            this.div_Search.Static00.addEventHandler("onclick", this.div_Search_Static00_onclick, this);
            this.div_Search.edt_Seq.addEventHandler("oneditclick", this.div_Search_Edit00_oneditclick, this);
            this.div_Data.div_Work.btn_Delete.addEventHandler("onclick", this.div_Data_div_Work_btn_Delete_onclick, this);
            this.div_Data.div_Work.btn_Add.addEventHandler("onclick", this.div_Data_div_Work_btn_Add_onclick, this);
            this.div_Data.div_Work.btn_Save.addEventHandler("onclick", this.div_Data_div_Work_btn_Save_onclick, this);
            this.div_Data.div_Work.btn_Import.addEventHandler("onclick", this.div_Data_div_Work_btn_Import_onclick, this);
            this.div_Data.div_Work.btn_Export.addEventHandler("onclick", this.div_Data_div_Work_btn_Export_onclick, this);
            this.div_Data.div_Work.btn_Add1.addEventHandler("onclick", this.div_Data_div_Work_btn_Add1_onclick, this);
            this.div_Data.div_Work.btn_Delete1.addEventHandler("onclick", this.div_Data_div_Work_btn_Delete1_onclick, this);
            this.div_Data.div_Work.btn_Import1.addEventHandler("onclick", this.div_Data_div_Work_btn_Import1_onclick, this);
            this.div_Data.div_Work.btn_Export1.addEventHandler("onclick", this.div_Data_div_Work_btn_Export1_onclick, this);
            this.btn_SearchSlide.addEventHandler("onclick", this.btn_SearchSlide_onclick, this);

        };

        this.loadIncludeScript("Form_Sample_CRUD.xfdl", true);

       
    };
}
)();
