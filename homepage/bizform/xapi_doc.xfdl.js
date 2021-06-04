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
                this.set_name("performance_guide");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_option", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">성능향상 가이드</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">XAPI-설명서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new WebBrowser("wbs", "absolute", "0", "0", "1224", null, null, "0", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("performance_guide");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("xapi_doc.xfdl", function(exports) {

        this.performance_guide_onload = function(obj,e)
        {
        	this.fn_resize();
        	var sUrl = application.services["host"].url + "homepage/XAPI-DOC/index.html";
        	this.wbs.set_url(sUrl);
        }

        this.performance_guide_onsize = function(obj,e)
        {
        	this.fn_resize();
        }

        
        this.fn_resize = function ()
        {
        	this.wbs.set_left((application.mainframe.width - 1224) /2);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.performance_guide_onload, this);
            this.addEventHandler("onsize", this.performance_guide_onsize, this);

        };

        this.loadIncludeScript("xapi_doc.xfdl", true);

       
    };
}
)();
