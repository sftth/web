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
                this.set_name("popup_addr");
                this.set_classname("popup_addr");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,338,240);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("wbDaumAddr", "absolute", "0", "0", null, null, "0", "24", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "67.46%", "216", null, "23", "0.3%", null, this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "24.56%", "219", null, "18", "39.94%", null, this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 338, 240, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup_addr");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("popup_addr.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : popup_addr.xfdl
        * PROGRAMMER  : 
        * DATE        : 2016-09-28
        * DESCRIPTION : Daum 주소 api
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        
        this.popup_addr_onload = function(obj,e)
        {
        	this.setTimer(1007, 500);
        	this.wbDaumAddr.set_url(application.services["host"].url + "daum_addr/daum_addr.html");	
        	
        }

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	this.wbDaumAddr.callMethod("fn_execDaumPostcode");		
        }

        this.popup_addr_ontimer = function(obj,e)
        {
        	if(e.timerid == 1007)
        	{
        		var doc = this.wbDaumAddr.getProperty("document"); 
        		
        		var domResult = doc.callMethod("getElementById", "result_yn");
        		var rtn = domResult.getProperty("value"); 
        		
        		var domAddr = doc.callMethod("getElementById", "address");
        		var sAddr = domAddr.getProperty("value"); 

        		var domPostcode = doc.callMethod("getElementById", "postcode");
        		var sPostcode = domPostcode.getProperty("value");

        		if(rtn == "Y"){
        			this.close("OK" + "|" + sPostcode + "|" + sAddr);
        		}
        	}

        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.popup_addr_onload, this);
            this.addEventHandler("ontimer", this.popup_addr_ontimer, this);
            this.wbDaumAddr.addEventHandler("onloadcompleted", this.WebBrowser00_onloadcompleted, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("popup_addr.xfdl", true);

       
    };
}
)();
