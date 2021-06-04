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
                this.set_name("GoogleMap");
                this.set_classname("GoogleMap");
                this.set_titletext("GoogleMap");
                this._setFormPosition(0,0,907,670);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static05", "absolute", "1.97%", "15", null, "15", "42.5%", null, this);
            obj.set_taborder("1");
            obj.set_text("Google Map");
            obj.set_cssclass("sta_WF_subtitP");
            obj.getSetter("class").set("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser01", "absolute", "0.88%", "79", null, null, "2.09%", "19", this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "79.71%", "33", null, "31", "1.98%", null, this);
            obj.set_taborder("6");
            obj.set_text("멀티 주소셋팅");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "1.21%", "34", null, "30", "61.3%", null, this);
            obj.set_taborder("7");
            obj.set_value("대전 광영시 중구 한밭도서관길 222");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "40.02%", "34", null, "30", "22.49%", null, this);
            obj.set_taborder("8");
            obj.set_value("대전 광영시 중구 문화원");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 907, 670, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("GoogleMap");
            		p.set_titletext("GoogleMap");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("201704-A05-00020-Sample_GoogleMap.xfdl", function(exports) {
        this.form_onload = function (obj,e)
        {
           this.WebBrowser01.set_url("http://localhost:8080/google_map/googlemap1.jsp");
        }  

        this.WebBrowser01_onusernotify = function(obj,e)
        {
        	trace("e.userdata :  " + e.userdata);
        }

        this.Button02_onclick = function(obj,e)
        {
        	var strAddr1 = this.Edit00.value;
            var strAddr2 = this.Edit01.value;
         
         	this.WebBrowser01.callMethod("codeAddress",strAddr1);	
         	this.WebBrowser01.callMethod("codeAddress",strAddr2);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.WebBrowser01.addEventHandler("onloadcompleted", this.WebBrowser01_onloadcompleted, this);
            this.WebBrowser01.addEventHandler("onusernotify", this.WebBrowser01_onusernotify, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("201704-A05-00020-Sample_GoogleMap.xfdl", true);

       
    };
}
)();
