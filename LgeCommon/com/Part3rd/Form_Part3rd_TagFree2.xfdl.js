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
                this.set_name("Form_Part3rd_TagFree2");
                this.set_titletext("3rd Part");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("wb_TagFree", "absolute", "0%", "34", null, null, "1", "0", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("3rd Part");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Form_Part3rd_TagFree2.xfdl", function(exports) {

        this.Form_Part3rd_TagFree2_onload = function(obj,e)
        {
        	this.wb_TagFree.set_url(application.services["host"].url + "tagfree/view.html");	
        }

        this.wb_TagFree_onloadcompleted = function(obj,e)
        {
        	var sHtml = nexacro.base64Decode(application.gds_tempTagFree.getColumn(0,"content"));
        	this.wb_TagFree.callMethod("setHtml", sHtml);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_Part3rd_TagFree2_onload, this);
            this.wb_TagFree.addEventHandler("onloadcompleted", this.wb_TagFree_onloadcompleted, this);

        };

        this.loadIncludeScript("Form_Part3rd_TagFree2.xfdl", true);

       
    };
}
)();
