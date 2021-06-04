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
                this.set_name("Form_Bottom");
                this._setFormPosition(0,0,1020,30);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static_Time", "absolute", null, "4", "200", "24", "12", null, this);
            obj.set_taborder("0");
            obj.style.set_color("#c00c3fff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 bold Dotum");
            obj.set_text("2018/01/01  23:23:23");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1020, 30, this,
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
        this.registerScript("Form_Bottom.xfdl", function(exports) {

        this.Form_Bottom_onload = function(obj,e)
        {
        	this.fn_setTime();
        	this.setTimer(1, 1000);
        }

        this.Form_Bottom_ontimer = function(obj,e)
        {
        	this.fn_setTime();
        }

        this.fn_setTime = function()
        {
        	var sDate;
        	var sTime;
        	var sDateTime;
        	
        	sDate = application.gfn_GetToday();
        	sTime = application.gfn_GetTime();
        	
        	sDateTime = sDate.substr(0,4) + "/" + sDate.substr(4,2) + "/" + sDate.substr(6,2) + "  ";
        	sDateTime += sTime.substr(0,2) + ":" + sTime.substr(2,2) + ":" + sTime.substr(4,2);
        	
        	this.Static_Time.set_text(sDateTime);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_Bottom_onload, this);
            this.addEventHandler("ontimer", this.Form_Bottom_ontimer, this);

        };

        this.loadIncludeScript("Form_Bottom.xfdl", true);

       
    };
}
)();
