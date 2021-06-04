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
                this.set_name("Form_Sample_Excel_Import");
                this.set_titletext("Sample");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"AAA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"BBB\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "0", "219", null, null, "0", "0", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj.set_autoenter("select");
            obj.set_selecttype("area");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/><Cell col=\"9\" text=\"Column9\"/><Cell col=\"10\" text=\"Column10\"/><Cell col=\"11\" text=\"Column11\"/><Cell col=\"12\" text=\"Column12\"/><Cell col=\"13\" text=\"Column13\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" edittype=\"masknumber\" text=\"bind:AAA\" mask=\"##,##9.##\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:Column1\" mask=\"##,##9.##\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:AAA\"/><Cell col=\"3\" text=\"bind:AAA\"/><Cell col=\"4\" text=\"bind:AAA\"/><Cell col=\"5\" text=\"bind:AAA\"/><Cell col=\"6\" text=\"bind:AAA\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/><Cell col=\"11\" text=\"bind:Column11\"/><Cell col=\"12\" text=\"bind:Column12\"/><Cell col=\"13\" text=\"bind:Column13\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Import", "absolute", null, "184", "120", "26", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("Import");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("Excel Import");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "0", "53", "111", "47", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Description");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "110", "53", null, "47", "0", null, this);
            obj.set_taborder("4");
            obj.set_text("Excel Import 함수");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "99", "111", "79", null, null, this);
            obj.set_taborder("5");
            obj.set_text("exercise");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "110", "99", null, "79", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("\t// 시작위치를 지정하게 위해서는 sheet명이 필수\r\n\tvar nStartrow = 1; // 1부터 시작\r\n\tvar sSheetName = \"Sheet1\";\r\n\tLGE.Core.importExcel(this, sSheetName, this.ds_grid, nStartrow);");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Sheet", "absolute", "8.91%", "188", null, "20", "70.34%", null, this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1.55%", "189", null, "18", "88.64%", null, this);
            obj.set_taborder("9");
            obj.set_text("Sheet Name");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
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
        this.addIncludeScript("Form_Sample_Excel_Import.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("Form_Sample_Excel_Import.xfdl", function(exports) {

        // Library Include
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        this.btn_Import_onclick = function(obj,e)
        {
        	// 시작위치를 지정하게 위해서는 sheet명이 필수
        	var nStartrow = 1; // 1부터 시작
        	var sSheetName = "Sheet1";
        	if (!Base.isEmpty(this.edt_Sheet.text))
        	{
        		sSheetName = this.edt_Sheet.text;
        	}

        	LGE.Core.importExcel(this, sSheetName, this.ds_grid, nStartrow);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("onrbuttonup", this.div_Data_Div00_Grid00_onrbuttonup, this);
            this.Grid00.addEventHandler("oncellclick", this.div_Data_Div00_Grid00_oncellclick, this);
            this.Grid00.addEventHandler("onheadclick", this.div_Data_Div00_Grid00_onheadclick, this);
            this.btn_Import.addEventHandler("onclick", this.btn_Import_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);

        };

        this.loadIncludeScript("Form_Sample_Excel_Import.xfdl", true);

       
    };
}
)();
