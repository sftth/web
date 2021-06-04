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
                this.set_name("Form_Default_Temp1");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,492);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static08", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("Form & Script");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "0", "53", "111", "71", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Form size");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "110", "53", null, "71", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("1224 * 524 (팝업의 경우 Max 1200 * 800을 넘지 않도록 함)");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "123", "111", "71", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Form margin");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "110", "123", null, "71", "0", null, this);
            obj.set_taborder("4");
            obj.set_text("1224 * 524의 폼에 여백없이 컴포넌트를 배치한다.");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "193", "111", "71", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Include library");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "110", "193", null, "71", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("include \"CommonLibrary::Comm.xjs\";");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0", "263", "111", "147", null, null, this);
            obj.set_taborder("7");
            obj.set_text("exercise");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "110", "263", null, "147", "0", null, this);
            obj.set_taborder("8");
            obj.set_text("this.form_onload = function(obj:Form, e:nexacro.LoadEventInfo)\r\n{\r\n\tthis.com_fromInit(obj);\r\n}\r\n\r\n\r\nthis.fn_formInit = function()\r\n{\r\n \r\n}");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 492, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Form_Default_Temp1.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("Form_Default_Temp1.xfdl", function(exports) {

        // Library Include
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        // Form onload
        this.Form_Default_Temp1_onload = function(obj,e)
        {
        	this.com_fromInit(obj);
        }

        // Form init
        this.fn_formInit = function()
        {
         
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_Default_Temp1_onload, this);

        };

        this.loadIncludeScript("Form_Default_Temp1.xfdl", true);

       
    };
}
)();
