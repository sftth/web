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
                this.set_name("Form_Work");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_work", "absolute", "18", "20", null, null, "18", "20", this);
            obj.set_taborder("0");
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
        this.registerScript("Form_Work.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : Form_Work.xfdl
        * PROGRAMMER  : 
        * DATE        : 2018-04-19
        * DESCRIPTION : Work 화면
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        /*--------------------------------------------------------------------------------------------
         * Form Variables
         --------------------------------------------------------------------------------------------*/
        var fv_WinId ;

        // Form onload
        this.Form_Work_onload = function(obj,e)
        {
        	var sWorkUrl = this.getOwnerFrame().work_url;
        	var sTitle = this.getOwnerFrame().work_menuText;
        	fv_WinId = this.getOwnerFrame().work_winid;
        	this.div_work.set_url(sWorkUrl);
        }

        this.Form_Work_onactivate = function(obj,e)
        {
        	oPages = application.av_ChildFrame_Tab.form.tab_mdi.tabpages;
        	for (i=0; i<oPages.length; i++) 
        	{
        		if (oPages[i].name == fv_WinId) 
        		{
        			application.av_ChildFrame_Tab.form.tab_mdi.set_tabindex(i);
        			break;
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_Work_onload, this);
            this.addEventHandler("onactivate", this.Form_Work_onactivate, this);

        };

        this.loadIncludeScript("Form_Work.xfdl", true);

       
    };
}
)();
