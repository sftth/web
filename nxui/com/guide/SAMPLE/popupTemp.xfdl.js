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
                this.set_name("popupTemp");
                this.set_classname("popupTemp");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,500,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", null, null, "64", "24", "20", "20", this);
            obj.set_taborder("0");
            obj.set_text("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", null, "14", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("h14");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "0", "20", null, null, "0", this);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "0", "20", null, "0", "0", this);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", null, null, "20", "0", "0", this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search", "absolute", "20", "14", null, "39", "20", null, this);
            obj.set_taborder("5");
            obj.set_scrollbars("autohorz");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0", "8", "88", "21", null, null, this.div_Search);
            obj.set_taborder("28");
            obj.set_text("DIV_CD");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", null, null, "68", "21", "28", "8", this.div_Search);
            obj.set_taborder("30");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", null, "0", "28", null, "0", "0", this.div_Search);
            obj.set_taborder("31");
            obj.set_text("w28");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "86", "8", "118", "21", null, null, this.div_Search);
            obj.set_taborder("32");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0", null, null, "14", "0", "44", this);
            obj.set_taborder("7");
            obj.set_text("h14");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "76", "150", "24", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Model Detail");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", null, "76", "130", "24", "20", null, this);
            obj.set_taborder("9");
            obj.set_text("Unit : $");
            obj.set_cssclass("sta_WF_GridTxt");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "20", "103", null, null, "20", "58", this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_grd");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"58\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"grd_WF_Essential\" text=\"LG Model&#13;(Model.Suffix)\"/><Cell col=\"1\" text=\"Customer Model\"/><Cell col=\"2\" text=\"Order&#13;Qty\"/><Cell col=\"3\" text=\"Customer&#13;Price\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:Column3\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "53", null, "23", "0", null, this);
            obj.set_taborder("12");
            obj.set_text("h23");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "195", "53", "30", "50", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h50");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 39, this.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_scrollbars("autohorz");
            		p.set_cssclass("div_WFSA_Bg");

            	}
            );
            this.div_Search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popupTemp");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("popupTemp.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("popupTemp.xfdl", function(exports) {
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
        this.popupTemp_onload = function(obj,e)
        {
        	this.com_fromInit(obj);
        }

        
        /*----------------------------------------------------------------------------------
         fn_formInit
          - form load시 설정은 이곳에서 한다.
        -----------------------------------------------------------------------------------*/
        this.fn_formInit = function()
        {
        	var sDivCd = this.getOwnerFrame().argDivCd;
        	this.div_Search.Edit00.set_value(sDivCd);	
        }

        
        this.Button00_onclick = function(obj,e)
        {
        	this.close("OK");
        }

        

        this.div_Search_Button05_onclick = function(obj,e)
        {
        		var sDivCd 		= "";//this.Dataset00.getColumn(e.row,"DIV_CD");
        		var sOption 	= "modaless=true, autosize=true,resizable=true";
        		LGE.Core.popup(this,"popup02","guide_SAMPLE::popupTemp.xfdl",{argDivCd:sDivCd}, sOption,"fn_popupCallBack");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.popupTemp_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.div_Search.Button05.addEventHandler("onclick", this.div_Search_Button05_onclick, this);

        };

        this.loadIncludeScript("popupTemp.xfdl", true);

       
    };
}
)();
