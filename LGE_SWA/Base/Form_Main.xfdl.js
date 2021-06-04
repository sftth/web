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
                this.set_name("Form_Main");
                this._setFormPosition(0,0,1020,700);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div_Top", "absolute", "0", "0", null, "40", "0", null, this);
            obj.set_taborder("0");
            obj.set_url("Base::Form_Top.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div_Bottom", "absolute", "0", null, null, "30", "0", "0", this);
            obj.set_taborder("1");
            obj.set_url("Base::Form_Bottom.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div_Work", "absolute", "0", "40", null, null, "0", "30", this);
            obj.set_taborder("2");
            obj.set_url("Base::Form_Work.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1020, 700, this,
            	//-- Layout function
            	function(p) {
            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "Base::Form_Top.xfdl");
            this._addPreloadList("fdl", "Base::Form_Bottom.xfdl");
            this._addPreloadList("fdl", "Base::Form_Work.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Form_Main.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
