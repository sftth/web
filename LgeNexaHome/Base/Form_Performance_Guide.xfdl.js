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
                this.set_name("Form_Performance_Guide");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("wbs", "absolute", "0", "0", "1224", null, null, "0", this);
            obj.set_taborder("0");
            obj.set_url("http://docs.tobesoft.com/nexacro_performance_guide_ko#");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Form_Performance_Guide.xfdl", function(exports) {

        this.fn_resize = function ()
        {
        	this.wbs.set_left((application.mainframe.width - 1224) /2);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize", this.fn_resize, this);
            this.addEventHandler("onload", this.fn_resize, this);

        };

        this.loadIncludeScript("Form_Performance_Guide.xfdl", true);

       
    };
}
)();
