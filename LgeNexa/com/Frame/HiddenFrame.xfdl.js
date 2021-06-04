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
                this.set_name("HiddenFrame");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,498);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 498, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HiddenFrame");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HiddenFrame.xfdl", "CommonLibrary::Comm.xjs");
        this.addIncludeScript("HiddenFrame.xfdl", "CommonLibrary::CommGridEnterOrg.xjs");
        this.addIncludeScript("HiddenFrame.xfdl", "CommonLibrary::GridCopyAndPaste.xjs");
        this.registerScript("HiddenFrame.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : HiddenFrame.xfdl
        * PROGRAMMER  : 
        * DATE        : 2016-09-28
        * DESCRIPTION : Hidden Frame 
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        
        /*--------------------------------------------------------------------------------------------
         * xjs include 
         --------------------------------------------------------------------------------------------*/
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::CommGridEnterOrg.xjs", null, exports); }	//include "CommonLibrary::CommGridEnterOrg.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::GridCopyAndPaste.xjs", null, exports); }	//include "CommonLibrary::GridCopyAndPaste.xjs";

        
        /*--------------------------------------------------------------------------------------------
         * form variables
         --------------------------------------------------------------------------------------------*/
        var fv_nWinSeq = 0;
        var fv_sFocusWinId;

        
        /*--------------------------------------------------------------------------------------------
         * ⓟ param {string} 	menu id
         * ⓟ param {object} 	화면으로 전달할 param
         --------------------------------------------------------------------------------------------*/	
        this.fn_menuOpen = function(sMenuId,oParam)
        {
        	// 1. MDI OPEN
        	var nRow = application.av_gdsMenu.findRow("MENU_ID",sMenuId);
        	if(nRow < 0) return;
        	
        	var sUrl = application.av_gdsMenu.getColumn(nRow,"MENU_URL");
        	var sMenuText = application.av_gdsMenu.getColumn(nRow,"MENU_CAPTION");

        	// 멀티오픈 막기	
        	var nFrow = application.av_gdsOpenMenu.findRow("MENU_ID", sMenuId);
        	
        	if(nFrow >= 0) {
        		sWinId = application.av_gdsOpenMenu.getColumn(nFrow,"WIN_ID");
        		fv_sFocusWinId = sWinId;
        		this.setTimer(1001,1000);
        		return;
        	}
        	
        	if(Base.isEmpty(sUrl)) return;

        	var sWinId = "MENU_" + sMenuId + "_" + fv_nWinSeq;
        	fv_nWinSeq++;

        	newChild = new nexacro.ChildFrame;
        	newChild.init(sWinId,"absolute",10, 10, 10, 10, null, null, "Frame::BizFrame.xfdl");
        	application.av_mdiFrameset.addChild(sWinId, newChild);

        	newChild.set_showtitlebar(false); 
        	newChild.set_autosize(true); 
        	newChild.set_resizable(true); 
        	newChild.set_titletext(""); 
        	newChild.set_showstatusbar(false); 
        	newChild.set_openalign("left top"); 
        	newChild.set_openstatus("maximize"); 
        	newChild.style.set_border("0px solid blue");

        	newChild.show();
        		
        	newChild.biz_url = sUrl;
        	newChild.biz_menuText = sMenuText;
        	newChild.biz_winid = sWinId;
        	newChild.biz_menuId = sMenuId;
        	newChild.param = oParam;

        	newChild.setFocus();
        	
        	// 2. TAB OPEN
        	var oCurTab = application.av_tabFrame.form.tab_mdi;
        	oCurTab.insertTabpage(sWinId,oCurTab.getTabpageCount(),"",sMenuText);
        	
        	// 3. gds_openMenu addrow
        	var nIrow = application.av_gdsOpenMenu.addRow();
        	application.av_gdsOpenMenu.setColumn(nIrow,"WIN_ID",sWinId);
        	application.av_gdsOpenMenu.setColumn(nIrow,"MENU_ID",sMenuId);
        	application.av_gdsOpenMenu.setColumn(nIrow,"TITLE",sMenuText);

        
        	// 4. intro 가리기
        	application.afn_viewIntro(false);
        }

        

        /*--------------------------------------------------------------------------------------------
         * tab index로 화면끄기
         * ⓟ param {int} 		close할 tab index
         --------------------------------------------------------------------------------------------*/	
        this.fn_tabPageClose = function (nIndex)
        {
        	var oPages = application.av_tabFrame.form.tab_mdi.tabpages;
        	var sWinId = oPages[nIndex].name;
        	
        	// 1. MDI Close	
        	application.av_mdiFrameset[sWinId].form.close();
        	
        	// 2. TAB Close
        	application.av_tabFrame.form.tab_mdi.removeTabpage(nIndex);
        	
        	// 3. Dataset Delete
        	var nRow = application.gds_openMenu.findRow("WIN_ID",sWinId);
        	application.gds_openMenu.deleteRow(nRow);

        	if(application.gds_openMenu.rowcount <= 0) 
        	{
        		application.afn_viewIntro(true);
        	}

        }

        /*--------------------------------------------------------------------------------------------
         * menu id로 화면끄기
         * ⓟ param {string} 	close할 menu id
         --------------------------------------------------------------------------------------------*/	
        this.fn_menuClose = function (sMenuId)
        {
        	var oPages = application.av_tabFrame.form.tab_mdi.tabpages;
        	var nIndex;
        	var sWinId;
        	
        	for(i=oPages.length-1; i>=0; i--) 
        	{
        		sWinId = oPages[i].name;
        		nIndex = sWinId.indexOf(sMenuId);
        		
        		if(nIndex >= 0)
        		{
        			// 1. TAB Close
        			application.av_tabFrame.form.tab_mdi.removeTabpage(i);			

        			// 2. MDI Close	
        			application.av_mdiFrameset[sWinId].form.close();
        			
        			// 3. Dataset Delete
        			var nRow = application.gds_openMenu.findRow("WIN_ID",sWinId);
        			application.gds_openMenu.deleteRow(nRow);			
        			
        			break;
        		}
        	}	
        }

        this.fn_changeLanguage = function(oForm)
        {
        	this.com_changeLanguage(oForm);
        }

        

        
        this.HiddenFrame_ontimer = function(obj,e)
        {
        	if(e.timerid == 1001)
        	{
        		application.av_mdiFrameset[fv_sFocusWinId].setFocus();
        		
        		var oActFrame = application.av_mdiFrameset.getActiveFrame();
        		application.afn_viewIntro(false);		
        		if(oActFrame.name == fv_sFocusWinId)
        		{
        			this.killTimer(1001);
        		}
        	}	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer", this.HiddenFrame_ontimer, this);

        };

        this.loadIncludeScript("HiddenFrame.xfdl", true);

       
    };
}
)();
