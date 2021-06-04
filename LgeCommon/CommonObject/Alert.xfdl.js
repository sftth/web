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
                this.set_name("Alert");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,350,200);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_ConfirmBg");
            obj.style.set_background("URL('theme://images/sta_WF_PopBg.png') stretch 20,40");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "17", "0", "190", "35", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Alert");
            obj.set_cssclass("sta_WF_AlertTitle");
            obj.style.set_font("11 Arial bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "12", "11", "11", "11", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Popclose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", "148", null, "52", "25", null, "16", this);
            obj.set_taborder("3");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_PopupBtn");
            this.addChild(obj.name, obj);

            obj = new TextArea("textarea_msg", "absolute", "22", "57", null, null, "22", "54", this);
            obj.set_taborder("4");
            obj.set_wordwrap("english");
            obj.set_readonly("true");
            obj.set_cssclass("txt_WF_Message");
            obj.style.set_font("bold 9 Arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 350, 200, this,
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
        this.addIncludeScript("Alert.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("Alert.xfdl", function(exports) {

        // Library Include
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        // Form onload
        this.Alert_onload = function(obj,e)
        {
        	var msg = this.parent.msg;
        	fv_workFrom = this.parent.parent.form;
        	this.textarea_msg.set_value(msg);
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	this.close('OK');
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Alert_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);

        };

        this.loadIncludeScript("Alert.xfdl", true);

       
    };
}
)();
