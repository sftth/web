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
                this.set_name("PopupModalless");
                this.set_classname("PopupModalless");
                this.set_titletext("팝업(Modalless)");
                this.set_cssclass("frm_POP_Bg");
                this._setFormPosition(0,0,420,320);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "18", "0", "190", "35", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Popup Title");
            obj.set_cssclass("sta_WF_AlertTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, null, "52", "25", "17", "17", this);
            obj.set_taborder("0");
            obj.set_text("Cancel");
            obj.set_cssclass("btn_WF_PopupBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "303", null, "15", "17", null, this);
            obj.set_taborder("1");
            obj.set_text("H15");
            obj.set_visible("false");
            obj.style.set_background("#ff000066");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "17", "35", null, "15", "17", null, this);
            obj.set_taborder("2");
            obj.set_text("H15");
            obj.set_visible("false");
            obj.style.set_background("#ff000066");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "403", "35", "15", null, null, "2", this);
            obj.set_taborder("3");
            obj.set_text("W15");
            obj.set_visible("false");
            obj.style.set_background("#ff000066");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "2", "35", "15", null, null, "2", this);
            obj.set_taborder("4");
            obj.set_text("W15");
            obj.set_visible("false");
            obj.style.set_background("#ff000066");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", null, null, "52", "25", "73", "17", this);
            obj.set_taborder("5");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_PopupBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "12", "11", "11", "12", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Popclose");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 420, 320, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("PopupModalless");
            		p.set_titletext("팝업(Modalless)");
            		p.set_cssclass("frm_POP_Bg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("PopupModalless.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : PopupModalless.xfdl
        * PROGRAMMER  : 
        * DATE        : 2016-09-28
        * DESCRIPTION : PopupModalless
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        
        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        this.PopupModalless_onload = function(obj,e)
        {
        	Iject.formOnload(obj);

        	// 넘어온 아규먼트 받는 방법 1 
        	trace(" poup argument1 : "  + Iject.getPopArgu(this, "arg1"));  
        	trace(" poup argument2 : "  + Iject.getPopArgu(this, "arg2"));   

        	// 넘어온 아규먼트 받는 방법2 
        	var oArgs = JSON.stringify(Iject.getPopArgu(this, ['arg1','arg2']));
        	var arg1  = JSON.parse(oArgs).arg1;
        	var arg2  = JSON.parse(oArgs).arg2;
        	trace(" arg1 : "  + arg1 + " <> arg2 : " + arg2);
            
        }

        // 팝업창 닫기 + 부모창으로 값 반환
        this.btn_close_onclick = function(obj,e)
        {
        	this.close("");
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	this.close("");
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close("");
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.PopupModalless_onload, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("PopupModalless.xfdl", true);

       
    };
}
)();
