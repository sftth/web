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
                this.set_name("test_ontextchanged");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1049,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds", this);
            obj._setContents("<ColumnInfo><Column id=\"COL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL\">20170505</Col></Row><Row><Col id=\"COL\">20180606</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdList", "absolute", "5.37%", "45", null, "455", "34.86%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds");
            obj.set_locale("ko_KR");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"199\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COL\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" style=\"align:right;\" text=\"bind:COL\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1049, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test_ontextchanged");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("test_ontextchanged.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("test_ontextchanged.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        this.test_ontextchanged_onload = function(obj,e)
        {
        	this.fn_formInit(obj);
        }

        this.grdList_ontextchanged = function(obj,e)
        {
        	//alert("========ontextchanged==========");
        }

        this.fn_formInit = function(oForm)
        {	
        	LGE.Grid.setGridCopyPaste(this, this.grdList);
        }

        this.grdList_oncellclick = function(obj,e)
        {
        	this.gfn_setGridSelecttype(obj, e); // cell 복사 
        }

        
        this.gfn_setGridSelecttype = function(obj,e)
        {
        	//alert("====setGridSelecttype====");
        	var type = "cell";
        	
        	if( e.eventid == "onrbuttondown") {
        		type = "row";
        		//type = "cell";
        	}
        	obj.set_selecttype(type);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.test_ontextchanged_onload, this);
            this.grdList.addEventHandler("ontextchanged", this.grdList_ontextchanged, this);
            this.grdList.addEventHandler("oncellclick", this.grdList_oncellclick, this);

        };

        this.loadIncludeScript("test_ontextchanged.xfdl", true);

       
    };
}
)();
