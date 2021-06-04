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
                this.set_name("N256217");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">Y</Col><Col id=\"Column1\">a</Col></Row><Row><Col id=\"CHK\">N</Col><Col id=\"Column1\">b</Col></Row><Row><Col id=\"CHK\">Y</Col><Col id=\"Column1\">c</Col></Row><Row><Col id=\"CHK\">N</Col><Col id=\"Column1\">d</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "3.91%", "30", null, "186", "53.61%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"CHK\"/><Cell col=\"2\" text=\"Column1\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\" expr=\"expr:CHK == 'Y' ? '1':'0'\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00", "absolute", "53.81%", "40", null, "184", "5.27%", null, this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("tabpage1");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("tabpage2");
            this.Tab00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("N256217");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("checkYN.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("checkYN.xfdl", function(exports) {

        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        
        this.N256217_onload = function(obj,e)
        {
        	this.com_fromInit(obj);
        }

        

        this.Dataset00_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CHK"){
        		if(e.newvalue == '0'){
        			obj.setColumn(e.row,e.columnid,"N");
        		}
        		if(e.newvalue == '1'){
        			obj.setColumn(e.row,e.columnid,"Y");
        		}
        	}
        }

        
        this.fn_formInit = function()
        {

        }
        this.Grid00_onheadclick = function(obj,e)
        {
        	// 그리드 전체 체크
        	LGE.Grid.setGridCheckAllYN(obj, e);
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Dataset00.addEventHandler("cancolumnchange", this.Dataset00_cancolumnchange, this);
            this.Dataset00.addEventHandler("oncolumnchanged", this.Dataset00_oncolumnchanged, this);
            this.addEventHandler("onload", this.N256217_onload, this);
            this.Grid00.addEventHandler("onheadclick", this.Grid00_onheadclick, this);

        };

        this.loadIncludeScript("checkYN.xfdl", true);

       
    };
}
)();
