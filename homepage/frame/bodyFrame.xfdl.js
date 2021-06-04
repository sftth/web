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
                this.set_name("bodyFrame");
                this.set_titletext("LG전자 넥사크로 패키지");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_biz", "absolute", "0%", "0", null, null, "0%", "0", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("bodyFrame");
            		p.set_titletext("LG전자 넥사크로 패키지");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("bodyFrame.xfdl", function(exports) {

        this.bodyFrame_onload = function(obj,e)
        {
        	application.set_locale("ko_KR");

        	this.div_biz.set_url("bizform::introduce.xfdl");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.bodyFrame_onload, this);

        };

        this.loadIncludeScript("bodyFrame.xfdl", true);

       
    };
}
)();
