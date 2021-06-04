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
                this.set_name("Form_Xapi_Doc");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("wbs", "absolute", "0", "0", "1224", null, null, "0", this);
            obj.set_taborder("0");
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
        this.registerScript("Form_Xapi_Doc.xfdl", function(exports) {

        this.fn_resize = function ()
        {
        	this.wbs.set_left((application.mainframe.width - 1224) /2);
        }

        this.Form_Xapi_Doc_onload = function(obj,e)
        {
        	this.fn_resize();
        	var sUrl = application.services["host"].url + "LgeNexaHome/XAPI-DOC/index.html";
        	this.wbs.set_url(sUrl);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_Xapi_Doc_onload, this);
            this.addEventHandler("onsize", this.fn_resize, this);

        };

        this.loadIncludeScript("Form_Xapi_Doc.xfdl", true);

       
    };
}
)();
