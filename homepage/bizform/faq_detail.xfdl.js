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
                this.set_name("faq_detail");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_01", "absolute", "0", "0", "1224", null, null, "0", this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new WebBrowser("wbs", "absolute", "0", "35", "1224", null, null, "3", this.div_01);
            obj.set_taborder("0");
            this.div_01.addChild(obj.name, obj);
            obj = new Button("btn_list", "absolute", "1148", "3", "72", "28", null, null, this.div_01);
            obj.set_taborder("1");
            obj.set_text("List");
            this.div_01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 0, this.div_01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_text("Div00");

            	}
            );
            this.div_01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("faq_detail");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("faq_detail.xfdl", function(exports) {

        this.faq_detail_onload = function(obj,e)
        {
        	this.fn_resize();
        	var sUrl = application.services["host"].url + "homepage/faqHtml/" + application.gv_faqHtml;
        	this.div_01.wbs.set_url(sUrl);	
        }

        this.faq_detail_onsize = function(obj,e)
        {
        	this.fn_resize();	
        }

        this.fn_resize = function ()
        {
        	this.div_01.set_left((application.mainframe.width - 1224) /2);
        }

        this.div_01_btn_list_onclick = function(obj,e)
        {
        	application.mainframe.vFramesetMain.headFrame.form.fn_menuOpen("bizform::faq.xfdl");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.faq_detail_onload, this);
            this.addEventHandler("onsize", this.faq_detail_onsize, this);
            this.div_01.btn_list.addEventHandler("onclick", this.div_01_btn_list_onclick, this);

        };

        this.loadIncludeScript("faq_detail.xfdl", true);

       
    };
}
)();
