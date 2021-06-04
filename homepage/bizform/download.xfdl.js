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
                this.set_name("download");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static23", "absolute", "0.98%", "26", null, "28", "0.98%", null, this);
            obj.set_taborder("0");
            obj.set_text("넥사크로 스튜디오 설치파일 다운로드 (14.0.1.1201 : 2017년 7월 1일 기준)");
            obj.style.set_background("whitesmoke");
            obj.style.set_padding("0 0 0 15");
            obj.style.set_font("bold 12 arial");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "1.27%", "62", null, "434", "1.27%", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
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
        this.registerScript("download.xfdl", function(exports) {

        this.studio_down_onload = function(obj,e)
        {
        	var sUrl = application.services["host"].url + "Download/download.html";
        	this.WebBrowser00.set_url(sUrl);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.studio_down_onload, this);

        };

        this.loadIncludeScript("download.xfdl", true);

       
    };
}
)();
