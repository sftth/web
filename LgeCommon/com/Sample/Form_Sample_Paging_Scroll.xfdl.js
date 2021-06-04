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
                this.set_name("Form_Sample_Paging_Scroll");
                this.set_titletext("Sample");
                this._setFormPosition(0,0,1224,524);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_option", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"data\">map 방식</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"data\">vo 방식</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"pageCount\" type=\"STRING\" size=\"256\"/><Column id=\"pageNextYn\" type=\"STRING\" size=\"256\"/><Column id=\"pageConditionKey\" type=\"STRING\" size=\"256\"/><Column id=\"pageTotalCount\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"TELEPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"POSTAL\" type=\"STRING\" size=\"256\"/><Column id=\"JOBLEVEL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SKILL_CODE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_Search", "absolute", "0", "0", null, "68", "0", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "252", null, null, "8", "588", "0", this.div_Search);
            obj.set_taborder("47");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "252", "0", null, "8", "588", null, this.div_Search);
            obj.set_taborder("48");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "252", "29", null, "8", "588", null, this.div_Search);
            obj.set_taborder("49");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "30", "8", "80", "21", null, null, this.div_Search);
            obj.set_taborder("50");
            obj.set_text("Subsidiary");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "110", "8", "150", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("cmb_WF_Essential");
            obj = new Static("Static03", "absolute", "290", "8", "74", "21", null, null, this.div_Search);
            obj.set_taborder("52");
            obj.set_text("Use Flag");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "364", "8", "150", "21", null, null, this.div_Search);
            obj.set_taborder("53");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "30", "37", "80", "21", null, null, this.div_Search);
            obj.set_taborder("54");
            obj.set_text("DC Code");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "110", "37", "150", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("55");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("cmb_WF_Essential");
            obj = new Static("Static06", "absolute", "290", "37", "74", "21", null, null, this.div_Search);
            obj.set_taborder("56");
            obj.set_text("W/H Code");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo02", "absolute", "364", "37", "150", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("57");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("cmb_WF_Essential");
            obj = new Static("Static08", "absolute", "544", "8", "94", "21", null, null, this.div_Search);
            obj.set_taborder("58");
            obj.set_text("Subinventory");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "638", "8", "150", "21", null, null, this.div_Search);
            obj.set_taborder("59");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", null, "0", "66", "8", "29", null, this.div_Search);
            obj.set_taborder("60");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "20", null, "0", "0", this.div_Search);
            obj.set_taborder("61");
            obj.set_text("w20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "260", "0", "30", "66", null, null, this.div_Search);
            obj.set_taborder("62");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("63");
            obj.set_text("w\r\n20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "514", "0", "30", "66", null, null, this.div_Search);
            obj.set_taborder("64");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Radio("rd_Option", "absolute", "642", "39", "149", "19", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("65");
            obj.set_innerdataset("@ds_option");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_value("01");
            obj.set_direction("vertical");
            obj = new Static("Static11", "absolute", "544", "37", "94", "21", null, null, this.div_Search);
            obj.set_taborder("66");
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
            obj.set_taborder("51");
            obj.set_text("DC Code Management");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Grid("grd_Result", "absolute", "0", "37", null, null, "0", "21", this.div_Data.Div00);
            obj.set_taborder("52");
            obj.set_binddataset("ds_result");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"SEQ\"/><Cell col=\"1\" disptype=\"normal\" text=\"NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"BIRTHDATE\"/><Cell col=\"3\" disptype=\"normal\" text=\"SEX\"/><Cell col=\"4\" disptype=\"normal\" text=\"TELEPHONE\"/><Cell col=\"5\" disptype=\"normal\" text=\"ADDRESS\"/><Cell col=\"6\" disptype=\"normal\" text=\"POSTAL\"/><Cell col=\"7\" disptype=\"normal\" text=\"JOBLEVEL_CODE\"/><Cell col=\"8\" disptype=\"normal\" text=\"DEPARTMENT_CODE\"/><Cell col=\"9\" disptype=\"normal\" text=\"SKILL_CODE\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:SEQ\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:BIRTHDATE\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:SEX\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:TELEPHONE\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:ADDRESS\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:POSTAL\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:JOBLEVEL_CODE\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:DEPARTMENT_CODE\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:SKILL_CODE\"/></Band></Format></Formats>");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "555", "0", "30", "37", null, null, this.div_Data.Div00);
            obj.set_taborder("53");
            obj.set_text("h37");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "779", "0", "70", "10", null, null, this.div_Data.Div00);
            obj.set_taborder("54");
            obj.set_text("h10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.Div00.addChild(obj.name, obj);

            obj = new Button("btn_Search", "absolute", null, "9", "80", "21", "21", null, this);
            obj.set_taborder("2");
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
            		p.set_titletext("Sample");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Form_Sample_Paging_Scroll.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("Form_Sample_Paging_Scroll.xfdl", function(exports) {

        // Library Include
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        // Form Variables
        this.PAGE_COUNT = 20; // 페이지 표시 개수

        this.btn_Search_onclick = function(obj,e)
        {
        	this.fn_search();	// search_data
        }

        // [search_data]
        this.fn_search = function ()
        {
        	var sSvcId	= "page_sample";
        	
        	this.ds_input.setColumn(0,"pageCount",this.PAGE_COUNT);
        	
        	if (this.div_Search.rd_Option.value == '02')
        	{
        		var sUrl = "sample/second/retrieveEmployeeScrollPageList.do"; //VO 방식
        	}
        	else
        	{
        		var sUrl	= "sample/employee/retrieveEmployeeScrollPageList.do"; //Map 방식
        	}
        	
        	var sInDs	= "dsInput=ds_input";
        	var sOutDs	= "ds_result=dsResult ds_input=pageDataset"; // 첫번째 paging 대상 dataset , 두번째 paging 정보 dataset 
        	var sArg	= "";
        	LGE.Core.tranDoPaging(this, sSvcId, sUrl, sInDs, sOutDs, sArg, "");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_result.addEventHandler("onrowposchanged", this.dsResult_onrowposchanged, this);
            this.addEventHandler("onload", this.Form_Sample_Paging_Scroll_onload, this);
            this.div_Data.Div00.grd_Result.addEventHandler("onvscroll", this.div_Data_Div00_Grid00_onvscroll, this);
            this.btn_Search.addEventHandler("onclick", this.btn_Search_onclick, this);

        };

        this.loadIncludeScript("Form_Sample_Paging_Scroll.xfdl", true);

       
    };
}
)();
