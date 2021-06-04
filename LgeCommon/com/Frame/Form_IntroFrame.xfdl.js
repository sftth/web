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
                this.set_name("Form_IntroFrame");
                this._setFormPosition(0,0,1260,564);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static10", "absolute", "0", "0", null, "23", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("h23");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "0", "20", null, null, "0", this);
            obj.set_taborder("1");
            obj.set_text("w20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "8", "8", "20", null, null, "-8", this);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "13.17%", "30.67%", null, null, "13.17%", "30.5%", this);
            obj.set_taborder("3");
            obj.set_image("URL('images::LGE_NEXA_CI.png')");
            obj.style.set_border("0 solid #afafafff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1260, 564, this,
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Form_IntroFrame.xfdl", true);

       
    };
}
)();
