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
                this.set_name("Form_Part3rd_TagFree");
                this.set_titletext("3rd Part");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("wb_TagFree", "absolute", "0%", "34", null, null, "0", "0", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save", "absolute", null, "0", "64", "26", "1", null, this);
            obj.set_taborder("1");
            obj.set_text("저장");
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
        this.registerScript("Form_Part3rd_TagFree.xfdl", function(exports) {

        this.Form_Part3rd_TagFree_onload = function(obj,e)
        {
        	this.wb_TagFree.set_url(application.services["host"].url + "tagfree/edit.html");
        }

        this.btn_Save_onclick = function(obj,e)
        {
        	// html 페이지 값 받아오기
        	this.wb_TagFree.callMethod("getHtml");
        	var doc = this.wb_TagFree.getProperty("document"); 
        	var dom = doc.callMethod("getElementById", "txa_html");
        	var rtn = dom.getProperty("value"); 
        	rtn = nexacro.base64Encode(rtn);
        	application.gds_tempTagFree.setColumn(0,"content",rtn);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_Part3rd_TagFree_onload, this);
            this.btn_Save.addEventHandler("onclick", this.btn_Save_onclick, this);

        };

        this.loadIncludeScript("Form_Part3rd_TagFree.xfdl", true);

       
    };
}
)();
