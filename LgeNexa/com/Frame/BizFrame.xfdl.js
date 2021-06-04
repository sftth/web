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
                this.set_name("bizFrame");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1260,564);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_biz", "absolute", "18", "20", null, null, "18", "20", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_biz,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");

            	}
            );
            this.div_biz.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1260, 564, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("bizFrame");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BizFrame.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : BizFrame.xfdl
        * PROGRAMMER  : 
        * DATE        : 2016-09-28
        * DESCRIPTION : 업무화면
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        /*--------------------------------------------------------------------------------------------
         * form variables
         --------------------------------------------------------------------------------------------*/
        var fv_WinId ;

        

        
        this.bizFrame_onload = function(obj,e)
        {
        	var sBizUrl = this.getOwnerFrame().biz_url;
        	var sTitle = this.getOwnerFrame().biz_menuText;
        	fv_WinId = this.getOwnerFrame().biz_winid;
        	this.div_biz.set_url(sBizUrl);
        }

        this.bizFrame_onactivate = function(obj,e)
        {
        	oPages = application.av_tabFrame.form.tab_mdi.tabpages;
        	for(i=0; i<oPages.length; i++) 
        	{
        		if(oPages[i].name == fv_WinId) 
        		{
        			application.av_tabFrame.form.tab_mdi.set_tabindex(i);
        			break;
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.bizFrame_onload, this);
            this.addEventHandler("onactivate", this.bizFrame_onactivate, this);

        };

        this.loadIncludeScript("BizFrame.xfdl", true);

       
    };
}
)();
