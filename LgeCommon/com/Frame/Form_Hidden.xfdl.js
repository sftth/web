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
                this.set_name("Form_Hidden");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            
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
        this.addIncludeScript("Form_Hidden.xfdl", "CommonLibrary::Comm.xjs");
        this.addIncludeScript("Form_Hidden.xfdl", "CommonLibrary::CommGridEnterOrg.xjs");
        this.addIncludeScript("Form_Hidden.xfdl", "CommonLibrary::GridCopyAndPaste.xjs");
        this.registerScript("Form_Hidden.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : Form_Hidden.xfdl
        * PROGRAMMER  : 
        * DATE        : 2018-04-19
        * DESCRIPTION : Hidden 화면
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        /*--------------------------------------------------------------------------------------------
         * Library Include
         --------------------------------------------------------------------------------------------*/
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::CommGridEnterOrg.xjs", null, exports); }	//include "CommonLibrary::CommGridEnterOrg.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::GridCopyAndPaste.xjs", null, exports); }	//include "CommonLibrary::GridCopyAndPaste.xjs";

        /*--------------------------------------------------------------------------------------------
         * Form Variables
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
        	var nRow = application.av_gds_menu.findRow("MENU_ID",sMenuId);
        	if (nRow < 0)
        	{
        		return;
        	}
        	
        	var sUrl = application.av_gds_menu.getColumn(nRow,"MENU_URL");
        	var sMenuText = application.av_gds_menu.getColumn(nRow,"MENU_CAPTION");

        	// 멀티오픈 막기	
        	var nFrow = application.av_gds_openMenu.findRow("MENU_ID", sMenuId);
        	
        	if (nFrow >= 0) 
        	{
        		sWinId = application.av_gds_openMenu.getColumn(nFrow,"WIN_ID");
        		fv_sFocusWinId = sWinId;
        		this.setTimer(1001,1000);
        		return;
        	}
        	
        	if (Base.isEmpty(sUrl)) 
        	{
        		return;
        	}

        	var sWinId = "MENU_" + sMenuId + "_" + fv_nWinSeq;
        	fv_nWinSeq++;
        	newChild = new nexacro.ChildFrame;
        	newChild.init(sWinId,"absolute",10, 10, 10, 10, null, null, "Frame::Form_Work.xfdl");
        	application.av_FrameSet_Mdi.addChild(sWinId, newChild);

        	newChild.set_showtitlebar(false); 
        	newChild.set_autosize(true); 
        	newChild.set_resizable(true); 
        	newChild.set_titletext(""); 
        	newChild.set_showstatusbar(false); 
        	newChild.set_openalign("left top"); 
        	newChild.set_openstatus("maximize"); 
        	newChild.style.set_border("0px solid blue");

        	newChild.show();
        		
        	newChild.work_url = sUrl;
        	newChild.work_menuText = sMenuText;
        	newChild.work_winid = sWinId;
        	newChild.work_menuId = sMenuId;
        	newChild.param = oParam;
        	newChild.setFocus();
        	
        	// 2. TAB OPEN
        	var oCurTab = application.av_ChildFrame_Tab.form.tab_mdi;
        	oCurTab.insertTabpage(sWinId,oCurTab.getTabpageCount(),"",sMenuText);
        	
        	// 3. gds_openMenu addrow
        	var nIrow = application.av_gds_openMenu.addRow();
        	application.av_gds_openMenu.setColumn(nIrow,"WIN_ID",sWinId);
        	application.av_gds_openMenu.setColumn(nIrow,"MENU_ID",sMenuId);
        	application.av_gds_openMenu.setColumn(nIrow,"TITLE",sMenuText);

        	// 4. intro 가리기
        	application.afn_viewIntro(false);
        }

        /*--------------------------------------------------------------------------------------------
         * tab index로 화면끄기
         * ⓟ param {int} 		close할 tab index
         --------------------------------------------------------------------------------------------*/	
        this.fn_tabPageClose = function (nIndex)
        {
        	var oPages = application.av_ChildFrame_Tab.form.tab_mdi.tabpages;
        	var sWinId = oPages[nIndex].name;
        	
        	// 1. MDI Close	
        	application.av_FrameSet_Mdi[sWinId].form.close();
        	
        	// 2. TAB Close
        	application.av_ChildFrame_Tab.form.tab_mdi.removeTabpage(nIndex);
        	
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
        	var oPages = application.av_ChildFrame_Tab.form.tab_mdi.tabpages;
        	var nIndex;
        	var sWinId;
        	
        	for (var i=oPages.length-1; i>=0; i--) 
        	{
        		sWinId = oPages[i].name;
        		nIndex = sWinId.indexOf(sMenuId);
        		
        		if (nIndex >= 0)
        		{
        			// 1. TAB Close
        			application.av_ChildFrame_Tab.form.tab_mdi.removeTabpage(i);			

        			// 2. MDI Close	
        			application.av_FrameSet_Mdi[sWinId].form.close();
        			
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

        this.Form_Hidden_ontimer = function(obj,e)
        {
        	if (e.timerid == 1001)
        	{
        		application.av_FrameSet_Mdi[fv_sFocusWinId].setFocus();
        		
        		var oActFrame = application.av_FrameSet_Mdi.getActiveFrame();
        		application.afn_viewIntro(false);		
        		if (oActFrame.name == fv_sFocusWinId)
        		{
        			this.killTimer(1001);
        		}
        	}	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer", this.Form_Hidden_ontimer, this);

        };

        this.loadIncludeScript("Form_Hidden.xfdl", true);

       
    };
}
)();
