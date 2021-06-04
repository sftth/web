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
                this.set_name("Form_Top");
                this._setFormPosition(0,0,1020,40);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static_Line", "absolute", "0", null, null, "2", "0", "0", this);
            obj.set_taborder("0");
            obj.style.set_background("#c00c3fff");
            this.addChild(obj.name, obj);

            obj = new Static("Static_User", "absolute", "24", "6", "200", "24", null, null, this);
            obj.set_taborder("1");
            obj.set_text("[LG] User");
            obj.style.set_color("midnightblue");
            obj.style.set_align("left middle");
            obj.style.set_font("10 bold Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Logout", "absolute", null, "7", "51", "24", "8", null, this);
            obj.set_taborder("2");
            obj.set_text("Logout");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1020, 40, this,
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
        this.registerScript("Form_Top.xfdl", function(exports) {

        this.Button_Logout_onclick = function(obj,e)
        {
        	var objWork = this.parent.Div_Work;
        	
        	objWork.fn_ManageCode("LOGIN", "Form_Login.xfdl");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button_Logout.addEventHandler("onclick", this.Button_Logout_onclick, this);

        };

        this.loadIncludeScript("Form_Top.xfdl", true);

       
    };
}
)();
