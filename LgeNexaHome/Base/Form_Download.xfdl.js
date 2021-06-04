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
                this.set_name("Form_Download");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_01", "absolute", "0", "0", "1224", null, null, "0", this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            obj = new WebBrowser("wbs", "absolute", "0", "46", "1224", null, null, "0", this.div_01);
            obj.set_taborder("0");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "0.98%", "10", "1200", "28", null, null, this.div_01);
            obj.set_taborder("1");
            obj.set_text("넥사크로 스튜디오 설치파일 다운로드 (14.0.1.1201 : 2017년 7월 1일 기준)");
            obj.style.set_background("whitesmoke");
            obj.style.set_padding("0 0 0 15");
            obj.style.set_font("bold 12 arial");
            this.div_01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 0, this.div_01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");

            	}
            );
            this.div_01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
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
        this.registerScript("Form_Download.xfdl", function(exports) {

        this.fn_resize = function ()
        {
        	this.div_01.set_left((application.mainframe.width - 1224) /2);
        }

        this.Form_Download_onload = function(obj,e)
        {
        	this.fn_resize();
        	var sUrl = application.services["host"].url + "Download/download.html";
        	this.div_01.wbs.set_url(sUrl);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_Download_onload, this);
            this.addEventHandler("onsize", this.fn_resize, this);

        };

        this.loadIncludeScript("Form_Download.xfdl", true);

       
    };
}
)();
