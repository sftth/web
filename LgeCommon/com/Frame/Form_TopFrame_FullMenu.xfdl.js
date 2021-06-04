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
                this.set_name("Form_TopFrame_FullMenu");
                this.set_scrollbars("none");
                this.set_cssclass("frm_TF");
                this._setFormPosition(0,0,1224,56);
            }
            this.style.set_background("#333333ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ODRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRNT_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_topMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_subMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dump", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_MENU_ID\" type=\"STRING\" size=\"256\" prop=\"COUNT\"/><Column id=\"SYS_CD\" type=\"STRING\" size=\"256\" prop=\"NONE\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ODRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRNT_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "52", "100%", "4", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#c00c3fff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout", "absolute", null, "0", "40", "52", "0", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_Logout");
            this.addChild(obj.name, obj);

            obj = new Div("div_topMenu", "absolute", "215", "5", null, "51", "115", null, this);
            obj.set_taborder("3");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_moveLeft", "absolute", null, "5", "23", "42", "82", null, this);
            obj.set_taborder("4");
            obj.set_text("<");
            this.addChild(obj.name, obj);

            obj = new Button("btn_moveRight", "absolute", null, "5", "23", "42", "58", null, this);
            obj.set_taborder("5");
            obj.set_text(">");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "0", "215", null, null, "5", this);
            obj.set_taborder("6");
            obj.set_text("Static01");
            obj.style.set_background("#333333ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ci", "absolute", "20", "13", "175", "31", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_TF_Logo");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_format", "absolute", "1.47%", "124", null, "180", "84.07%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("gds_menu");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"175\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell style=\"align:left middle;padding:0 0 0 10;\" text=\"bind:CONST_MENU_CAPTION\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"none\" style=\"font: ;\" text=\"bind:MENU_CAPTION\" treestartlevel=\"2\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_submenu", "absolute", "17.4%", "64", null, "245", "45.1%", null, this);
            obj.set_text("pdiv_submenu");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 56, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("frm_TF");
            		p.style.set_background("#333333ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Form_TopFrame_FullMenu.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : Form_TopFrame_FullMenu.xfdl
        * PROGRAMMER  : 
        * DATE        : 2018-04-19
        * DESCRIPTION : Top 화면
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        // Form 전역 변수 선언
        this.oCurBtn;
        this.fv_maxSubMenuCount = 0;
        this.fv_popupDivWidth;
        this.fv_maxRowCount = 0;
        this.fv_rowHeight = 0;
        this.fv_subMenuGridWidth = 300;
        this.fv_subMenuGridGap = 10;
        this.fv_menuMoveSize = 40;
        this.fv_topMenuMaxSize;
        this.fv_topMenuStartPos = 215;
        this.fv_headRowHeight;

        // Form onload
        this.Form_TopFrame_FullMenu_onload = function(obj,e)
        {
        	this.ds_menu.copyData(application.gds_menu,true);

        	this.ds_menu.filter("MENU_LEVEL == '0'");
        	this.ds_topMenu.copyData(this.ds_menu, true);
        	
        	this.ds_menu.filter("MENU_LEVEL == '1'");
        	this.ds_dump.copyData(this.ds_menu, true);
        	
        	this.ds_menu.filter("MENU_LEVEL != '0'");
        	this.ds_subMenu.copyData(this.ds_menu, true);	
        	
        	this.ds_menu.filter("");
        	
        	this.fn_getMaxSubMenuCount();	// submenu_cnt
        	this.fn_createTopmenu();		// topmenu

        	this.fn_setRootMenu();			// rootmenu
        	
        	this.fv_headRowHeight = this.grd_format.getFormatRowProperty(0,"size");
        	this.fv_rowHeight = this.grd_format.getFormatRowProperty(1,"size");
        }

        // [submenu_cnt] 
        this.fn_getMaxSubMenuCount = function()
        {
        	var nCnt = this.ds_dump.getRowCount();
        	for (var i=0; i<nCnt; i++)
        	{
        		n = this.ds_dump.getCaseCount("PRNT_MENU_ID == '" + this.ds_dump.getColumn(i,"PRNT_MENU_ID") + "'");
        		if(this.fv_maxSubMenuCount < n)
        		{
        			this.fv_maxSubMenuCount = n;
        		}
        	}
        	this.fn_createSubmenu();	// submenu
        }

        // [submenu]
        this.fn_createSubmenu = function()
        {
        	var nCnt 	= this.fv_maxSubMenuCount;
        	var nLeft 	= 0;
        	var nTop 	= 0;
        	var comps 	= [];
        	var comp;

        	for (var i=0; i<nCnt; i++) 
        	{
        		comp = new Grid();
        		comp.init("grdSubmenu_"+i, "absolute", nLeft, nTop, this.fv_subMenuGridWidth, null, null ,0);
        		this.pdiv_submenu.addChild(comp.name, comp);
        		comp.bringToFront();
        		comp.set_formats(this.grd_format.formats);
        		comp.set_autofittype("col");
        		comp.set_treeusecheckbox(false);
        		comp.set_treeuseimage(false);
        		comp.set_treeuseline(false);
        		comp.set_binddataset("gds_menu");
        		comp.set_treeinitstatus('expand,null');
        		comp.addEventHandler("oncellclick", this._fn_subMenuOncellclick, this);	// submenu_event		
        		comp.show();
        		comps.push(comp);
        		nLeft = this.fv_subMenuGridGap + nLeft + this.fv_subMenuGridWidth;
        	}	
        }

        // [submenu_event]
        this._fn_subMenuOncellclick = function(obj,e)
        {
        	oDs = obj.getBindDataset();
        	sMenuId = oDs.getColumn(e.row,"MENU_ID");
        	application.afn_menuOpen(sMenuId);
        	this.pdiv_submenu.closePopup(false);
        }

        // [topmenu]
        this.fn_createTopmenu = function()
        {
        	var nCnt 	= this.ds_topMenu.getRowCount();
        	var nLeft 	= 0;
        	var nWidth 	= 0;
        	var comps 	= [];
        	var comp;

        	for (var i=0; i<nCnt; i++) 
        	{
        		var sText = this.ds_topMenu.getColumn(i, "MENU_CAPTION");
        		var sCode = this.ds_topMenu.getColumn(i, "MENU_ID");	
        		var strLng = LGE.Base._getByteLength(sText);
        		nWidth = (strLng*8) + 20;

        		comp = new Button();
        		comp.init("btn_topMenu"+i, "absolute", nLeft, 0, nWidth, 40);
        		comp.set_cssclass("btn_TF_Menu");
        		comp.set_text(sText);
        		comp.userCode = sCode;
        		comp.userName = sText;
        		comp.addEventHandler("onclick", this._fnTopMenuOnclick, this);		// menu_click
        		comp.addEventHandler("onmouseenter", this._fnTopMenuOnclick, this);	// menu_click

        		this.div_topMenu.addChild(comp.name,comp);
        		comp.bringToFront();
        		comp.show();
        		comps.push(comp);
        		nLeft = nLeft + nWidth;
        	}	

        	this.fv_topMenuMaxSize = nLeft
        }

        // [menu_click] Menu Click 
        this._fnTopMenuOnclick = function(obj,e)
        {
        	this.fn_bindDatasetSubmenu(obj.userCode);	// bindds_submenu
         	this.oCurBtn = obj;
         	var nBorder = 3;
         	var nHeight = (this.fv_maxRowCount * this.fv_rowHeight) + nBorder + this.fv_headRowHeight;
        	var nScrollHeight = 30;

        	var n = this.width - obj.left;

        	if (this.fv_popupDivWidth > n)
        	{
        		this.fv_popupDivWidth = n;
        	} 

         	this.pdiv_submenu.trackPopupByComponent(obj, 0, 50, this.fv_popupDivWidth, nHeight + nScrollHeight , "", false);
        }

        // [bindds_submenu]
        this.fn_bindDatasetSubmenu = function (sRootMenuId)
        {
        	this.ds_dump.filter("ROOT_MENU_ID == '" + sRootMenuId + "'");
        	var nCnt = this.ds_dump.rowcount;
        	var oGrid;
        	var oDs;

        	this.fv_maxRowCount = 0;
        	
        	for (var j=0; j<this.fv_maxSubMenuCount; j++) 
        	{
        		eval('this.pdiv_submenu.grdSubmenu_' + j + '.set_visible(false)');
        	}

        	for (var i=0; i<nCnt; i++) 
        	{
        		sRootId = this.ds_dump.getColumn(i, "PRNT_MENU_ID");
        		sSubRootId = this.ds_dump.getColumn(i, "MENU_ID");	
        		
        		oGrid = eval("this.pdiv_submenu.grdSubmenu_" + i);
        		oDs = eval("this.ds_"  + sRootId + "_" + sSubRootId);
        		oGrid.set_binddataset("ds_" + sRootId + "_" + sSubRootId);
        		oGrid.set_visible(true);
        		
        		if (oDs.rowcount > this.fv_maxRowCount)
        		{
        			this.fv_maxRowCount = oDs.rowcount
        		}
        	}
        	
        	this.fv_popupDivWidth = (nCnt * this.fv_subMenuGridWidth) + ((nCnt-1) * this.fv_subMenuGridGap);
        }

        // [rootmenu]
        this.fn_setRootMenu = function ()
        {
        	var nCnt 		= this.ds_subMenu.getRowCount();
        	var sRootId 	= "";
        	var sSubRootId 	= ""; 
        	
        	this.ds_subMenu.addColumn("ROOT_MENU_ID", "string");
        	this.ds_subMenu.addColumn("SUBROOT_MENU_ID", "string");

        	this.ds_dump.addColumn("ROOT_MENU_ID", "string");
        	this.ds_dump.addColumn("SUBROOT_MENU_ID", "string");

        	for (var i=0; i<nCnt; i++)
        	{
        		if (this.ds_subMenu.getColumn(i, "MENU_LEVEL") == "1")
        		{
        			sRootId = this.ds_subMenu.getColumn(i, "PRNT_MENU_ID");
        			sSubRootId = this.ds_subMenu.getColumn(i, "MENU_ID");
        			this.ds_subMenu.setColumn(i,"ROOT_MENU_ID", sRootId);
        			this.ds_subMenu.setColumn(i,"SUBROOT_MENU_ID", sSubRootId);
        		} 
        		else 
        		{
        			this.ds_subMenu.setColumn(i,"ROOT_MENU_ID", sRootId);
        			this.ds_subMenu.setColumn(i,"SUBROOT_MENU_ID", sSubRootId);			
        		}
        	}
        		
        	nCnt = this.ds_dump.getRowCount();
        	
        	for (var i=0; i<nCnt; i++)
        	{
        		sRootId = this.ds_dump.getColumn(i, "PRNT_MENU_ID");
        		sSubRootId = this.ds_dump.getColumn(i, "MENU_ID");	
        		this.ds_dump.setColumn(i, "ROOT_MENU_ID", sRootId);
        		this.ds_dump.setColumn(i, "SUBROOT_MENU_ID", sSubRootId);
        		this.fn_createSubMenuDataset("ds_" + sRootId + "_" + sSubRootId, sSubRootId);	// submenu_dataset
        	}
        }

        // [submenu_dataset]
        this.fn_createSubMenuDataset = function(sDs,sSubMenuId)
        {
        	this.ds_subMenu.filter("SUBROOT_MENU_ID == '" + sSubMenuId + "'");
        	var dsTempSubMenu = new Dataset;
        	this.addChild(sDs, dsTempSubMenu); 
        	dsTempSubMenu.copyData(this.ds_subMenu,true);
        	
        	dsTempSubMenu.setConstColumn("CONST_MENU_CAPTION",dsTempSubMenu.getColumn(0,"MENU_CAPTION"));
        	
        	// 1레벨에 메뉴에 주소가 연결되었있으면 주석
        	dsTempSubMenu.deleteRow(0);
        	
        	this.ds_subMenu.filter("");
        }

        this.sta_ci_onclick = function(obj,e)
        {
        	application.afn_viewIntro(true);
        }

        this.btn_logout_onclick = function(obj,e)
        {
        	if (confirm("로그아웃 하시겠습니까?"))
        	{
        		var sSvcId = "login/doLogout.ajax";

        		var sInDs  = "";
        		var sOutDs = "";
        		var sArg   = "";
        		var sCallback = "fn_callBack";
        		var bShowProgress = true;
        		var bAsync = true;

        		this.transaction( "tr_logout"
        						, application.services["host"].url + sSvcId
        						, sInDs
        						, sOutDs		
        						, sArg
        						, sCallback
        						, false
        						, 0
        						, false);		
        	}	
        }

        this.fn_callBack = function(SvcId,ErrorCode,ErrorMsg) 
        {
        	if (ErrorCode < 0) 
        	{
        		this.alert("[" + SvcId + ":" + ErrorCode + "] " + ErrorMsg);
        		return;
        	} 
        	else 
        	{
        		application.afn_logOut();
        	}
        }

        this.Form_TopFrame_FullMenu_onsize = function(obj,e)
        {
        	this.div_topMenu.set_left(this.fv_topMenuStartPos);
        }

        this.btn_moveLeft_onclick = function(obj,e)
        {
        	if (this.div_topMenu.getOffsetWidth() < this.fv_topMenuMaxSize)
        	{
        		this.div_topMenu.set_left(this.div_topMenu.left - this.fv_menuMoveSize);
        	}
        }

        this.btn_moveRight_onclick = function(obj,e)
        {
        	if(this.div_topMenu.left < this.fv_topMenuStartPos)
        	{
        		this.div_topMenu.set_left(this.div_topMenu.left + this.fv_menuMoveSize);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_TopFrame_FullMenu_onload, this);
            this.addEventHandler("onsize", this.Form_TopFrame_FullMenu_onsize, this);
            this.btn_logout.addEventHandler("onclick", this.btn_logout_onclick, this);
            this.btn_moveLeft.addEventHandler("onclick", this.btn_moveLeft_onclick, this);
            this.btn_moveRight.addEventHandler("onclick", this.btn_moveRight_onclick, this);
            this.sta_ci.addEventHandler("onclick", this.sta_ci_onclick, this);

        };

        this.loadIncludeScript("Form_TopFrame_FullMenu.xfdl", true);

       
    };
}
)();
