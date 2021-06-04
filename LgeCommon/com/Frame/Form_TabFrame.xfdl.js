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
                this.set_name("Form_TabFrame");
                this.set_cssclass("frm_MDI");
                this._setFormPosition(0,0,1264,30);
            }
            this.style.set_background("URL('theme://TabFrame/tab_MDI_bg.png') repeat-x");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("tab_mdi", "absolute", "15", "0", null, null, "30", "0", this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_MDI");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.tab_mdi);
            obj.set_text("tabpage2");
            this.tab_mdi.addChild(obj.name, obj);

            obj = new Button("btn_allClose", "absolute", null, null, "31", "30", "0", "0", this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MDI_AllClose");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1264, 30, this,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("frm_MDI");
            		p.style.set_background("URL('theme://TabFrame/tab_MDI_bg.png') repeat-x");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Form_TabFrame.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : Form_TabFrame.xfdl
        * PROGRAMMER  : 
        * DATE        : 2018-04-19
        * DESCRIPTION : Tab 화면
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        // Form onload
        this.Form_TabFrame_onload = function(obj,e)
        {
        	var nCnt = this.tab_mdi.getTabpageCount();

        	if (nCnt <= 0)
        	{
        		return;
        	}
        	
        	nCnt--;
        	
        	for (var i=nCnt; i >= 0; i--)
        	{
        		this.tab_mdi.removeTabpage(i);
        	}
        }

        this.tab_mdi_onchanged = function(obj,e)
        {
        	var oPages = obj.tabpages;
        	application.av_FrameSet_Mdi[oPages[e.postindex].name].setFocus();
        }

        this.tab_mdi_onextrabuttonclick = function(obj,e)
        {
        	application.afn_tabPageClose(e.index);
        }

        this.tab_mdi_onlbuttonup = function(obj,e)
        {
        	if (obj.getTabpageCount() > 0)
        	{
        		application.afn_viewIntro(false);
        	}
        }

        this.btn_allClose_onclick = function(obj,e)
        {
        	var oPages = this.tab_mdi.tabpages;	
        	
        	while(oPages.length != 0)
        	{
        		application.afn_tabPageClose(0);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_TabFrame_onload, this);
            this.tab_mdi.addEventHandler("onchanged", this.tab_mdi_onchanged, this);
            this.tab_mdi.addEventHandler("onextrabuttonclick", this.tab_mdi_onextrabuttonclick, this);
            this.tab_mdi.addEventHandler("onlbuttonup", this.tab_mdi_onlbuttonup, this);
            this.btn_allClose.addEventHandler("onclick", this.btn_allClose_onclick, this);

        };

        this.loadIncludeScript("Form_TabFrame.xfdl", true);

       
    };
}
)();
