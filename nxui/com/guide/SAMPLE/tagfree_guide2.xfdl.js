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
                this.set_name("tagfree_guide");
                this.set_classname("tagfree_guide");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00", "absolute", "0%", "34", null, null, "1", "0", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("tagfree_guide");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("tagfree_guide2.xfdl", function(exports) {

        this.tagfree_guide_onload = function(obj,e)
        {
        	this.WebBrowser00.set_url(application.services["host"].url + "tagfree/view.html");	
        }

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	var sHtml = nexacro.base64Decode(application.gds_tempTagFree.getColumn(0,"content"));
        	this.WebBrowser00.callMethod("setHtml", sHtml);	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.tagfree_guide_onload, this);
            this.WebBrowser00.addEventHandler("onloadcompleted", this.WebBrowser00_onloadcompleted, this);

        };

        this.loadIncludeScript("tagfree_guide2.xfdl", true);

       
    };
}
)();
