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
                this.set_name("Portlet");
                this.set_classname("Portlet");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,479,350);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_portlet", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("1");
            obj.set_text("div_portlet");
            obj.set_async("false");
            obj.set_url("guide_SAMPLE::test1.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", null, "0", "23", "26", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("X");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", null, "27", "23", "26", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("ㅁ");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", null, "54", "23", "26", "0", null, this);
            obj.set_taborder("3");
            obj.set_text("_");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 479, 350, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Portlet");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "guide_SAMPLE::test1.xfdl");
        };
        
        // User Script
        this.registerScript("Portlet.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : Portlet.xfdl
        * PROGRAMMER  : 
        * DATE        : 2016-09-28
        * DESCRIPTION : Portlet
                        Frameset으로 Portlet구성시 사용
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        
        /*--------------------------------------------------------------------------------------------
         * form variables
         --------------------------------------------------------------------------------------------*/
        var fv_dragFrame = "";
        var fv_dropFrame = "";

        

        this.Portlet_ondrag = function(obj,e)
        {
        	application.gv_dragFrame = this.parent;
        	application.gv_dragFrameUrl = this.parent.form.div_portlet.url;
        	return true;
        }

        
        this.Portlet_ondrop = function(obj,e)
        {
        	application.gv_dropFrame = this.parent;
        	application.gv_dropFrameUrl = this.parent.form.div_portlet.url;
        	
        	
        	application.gv_dragFrame.form.div_portlet.set_url(application.gv_dropFrameUrl);
        	application.gv_dropFrame.form.div_portlet.set_url(application.gv_dragFrameUrl);
        	
        	

        	
        }

        
        this.Button00_onclick = function(obj,e)
        {
        	this.close();
        }

        this.Button01_onclick = function(obj,e)
        {

        

        	
        	// case 1
        	if(this.parent.openstatus == "maximize") {
        		this.parent.set_openstatus("normal");
        	} else {
        		this.parent.set_openstatus("maximize");
        	}	

        }

        this.Button02_onclick = function(obj,e)
        {
        	if(this.parent.openstatus == "minimize") {
        		this.parent.set_openstatus("normal");
        	} else {
        		this.parent.set_openstatus("minimize");
        	}	

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondrag", this.Portlet_ondrag, this);
            this.addEventHandler("ondrop", this.Portlet_ondrop, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("Portlet.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
