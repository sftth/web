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
            obj = new WebBrowser("WebBrowser00", "absolute", "0%", "34", null, null, "0", "0", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", null, "0", "64", "26", "1", null, this);
            obj.set_taborder("1");
            obj.set_text("저장");
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
        this.registerScript("tagfree_guide.xfdl", function(exports) {

        
        this.tagfree_guide_onload = function(obj,e)
        {
        	this.WebBrowser00.set_url(application.services["host"].url + "tagfree/edit.html");
        }

        this.Button00_onclick = function(obj,e)
        {
        	// html 페이지 값 받아오기
        	this.WebBrowser00.callMethod("getHtml");
        	var doc = this.WebBrowser00.getProperty("document"); 
        	var dom = doc.callMethod("getElementById", "txa_html");
        	var rtn = dom.getProperty("value"); 
        	rtn = nexacro.base64Encode(rtn);
        	application.gds_tempTagFree.setColumn(0,"content",rtn);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.tagfree_guide_onload, this);
            this.addEventHandler("onkeydown", this.tagfree_guide_onkeydown, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("tagfree_guide.xfdl", true);

       
    };
}
)();
