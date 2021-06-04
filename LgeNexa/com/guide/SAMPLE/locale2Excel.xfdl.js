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
                this.set_name("locale2Excel");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGmrp", this);
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_LT_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTAL_ONHAND\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CURRENT_LT_AMT\">13799382.61</Col><Col id=\"TOTAL_ONHAND\">2164.56</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid02", "absolute", "0.65%", "5", null, "247", "59.64%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("dsGmrp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"303\"/><Column size=\"337\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CURRENT_LT_AMT\"/><Cell col=\"1\" text=\"TOTAL_ONHAND\"/></Band><Band id=\"body\"><Cell edittype=\"masknumber\" style=\"align:right;\" text=\"bind:CURRENT_LT_AMT\" mask=\"##,###.##\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:right;\" text=\"bind:TOTAL_ONHAND\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "40.85%", "5", null, "50", "49.35%", null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("locale2Excel");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("locale2Excel.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	trace(this.dsGmrp.saveXML());
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("locale2Excel.xfdl", true);

       
    };
}
)();
