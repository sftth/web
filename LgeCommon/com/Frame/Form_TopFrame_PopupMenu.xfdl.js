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
                this.set_name("Form_TopFrame_PopupMenu");
                this.set_cssclass("frm_TF");
                this._setFormPosition(0,0,1224,56);
            }
            this.style.set_background("#333333ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dump", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_MENU_ID\" type=\"STRING\" size=\"256\" prop=\"COUNT\"/><Column id=\"SYS_CD\" type=\"STRING\" size=\"256\" prop=\"NONE\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ODRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRNT_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ODRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRNT_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_ci", "absolute", "20", "13", "175", "31", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_Logo");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "52", "100%", "4", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#c00c3fff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout", "absolute", null, "0", "40", "52", "0", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_Logout");
            this.addChild(obj.name, obj);

            obj = new Button("btn_menu", "absolute", "211", "13", "120", "31", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Menu");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_format", "absolute", "1.46%", "124", null, "180", "84.08%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("gds_menu");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"175\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell style=\"align:left middle;padding:0 0 0 10;\" text=\"bind:CONST_MENU_CAPTION\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"none\" style=\"font: ;\" text=\"bind:MENU_CAPTION\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_menu", "absolute", "17.38%", "64", null, "245", "45.12%", null, this);
            obj.set_text("pdiv_menu");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 56, this,
            	//-- Layout function
            	function(p) {
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
        this.registerScript("Form_TopFrame_PopupMenu.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : Form_TopFrame_PopupMenu.xfdl
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
        this.fv_maxMenuCount = 0;
        this.fv_popupDivWidth;
        this.fv_maxRowCount = 0;
        this.fv_rowHeight = 0;
        this.fv_menuGridWidth = 300;
        this.fv_menuGridGap = 10;
        this.fv_menuMoveSize = 40;
        this.fv_topMenuMaxSize;
        this.fv_topMenuStartPos = 215;
        this.fv_headRowHeight;

        // Form onload
        this.Form_TopFrame_PopupMenu_onload = function(obj,e)
        {
        	this.ds_menu.copyData(application.gds_menu,true);
        	
        	this.ds_menu.filter("MENU_LEVEL == '0'");
        	this.ds_dump.copyData(this.ds_menu,true);	
        	
        	this.ds_menu.filter("");	

        	this.fn_setRootMenu();		// roomenu
        	
        	this.fn_getMaxMenuCount();	// maxmenu_cnt
        	
        	this.fv_headRowHeight = this.grd_format.getFormatRowProperty(0,"size");
        	this.fv_rowHeight = this.grd_format.getFormatRowProperty(1,"size");	
        }

        // [roomenu]
        this.fn_setRootMenu = function ()
        {
        	var nCnt 		= this.ds_menu.getRowCount();
        	var sRootId 	= "";
        	
        	this.ds_menu.addColumn("ROOT_MENU_ID", "string");
        	this.ds_dump.addColumn("ROOT_MENU_ID", "string");

        	for (var i=0; i<nCnt; i++)
        	{
        		if (this.ds_menu.getColumn(i, "MENU_LEVEL") == "0" )
        		{
        			sRootId = this.ds_menu.getColumn(i, "MENU_ID");
        			this.ds_menu.setColumn(i,"ROOT_MENU_ID", sRootId);
        		} 
        		else if (this.ds_menu.getColumn(i, "MENU_LEVEL") == "1") 
        		{
        			sRootId = this.ds_menu.getColumn(i, "PRNT_MENU_ID");
        			this.ds_menu.setColumn(i,"ROOT_MENU_ID", sRootId);		
        		} 
        		else 
        		{
        			this.ds_menu.setColumn(i,"ROOT_MENU_ID", sRootId);
        		}
        	}
        	
        	nCnt = this.ds_dump.getRowCount();
        	
        	for (var i=0; i<nCnt; i++)
        	{
        		sRootId = this.ds_dump.getColumn(i, "MENU_ID");
        		this.ds_dump.setColumn(i, "ROOT_MENU_ID", sRootId);
        		this.fn_createMenuDataset("ds_" + sRootId, sRootId);	// menuds
        	}
        }

        // [menuds]
        this.fn_createMenuDataset = function(sDs,sRootId)
        {
        	this.ds_menu.filter("ROOT_MENU_ID == '" + sRootId + "'");
        	var dsTempMenu = new Dataset;
        	this.addChild(sDs, dsTempMenu); 
        	dsTempMenu.copyData(this.ds_menu,true);
        	
        	dsTempMenu.setConstColumn("CONST_MENU_CAPTION",dsTempMenu.getColumn(0,"MENU_CAPTION"));
        	
        	// 1레벨에 메뉴에 주소가 연결되었있으면 주석
        	dsTempMenu.deleteRow(0);
        	this.ds_menu.filter("");
        }

        // [maxmenu_cnt]
        this.fn_getMaxMenuCount = function()
        {
        	var nCnt = this.ds_dump.getRowCount();
        	
        	for (var i=0; i<nCnt; i++)
        	{
        		// 그리드의 Row 수
        		n = this.ds_menu.getCaseCount("ROOT_MENU_ID == '" + this.ds_dump.getColumn(i,"ROOT_MENU_ID") + "'")
        		
        		if (this.fv_maxRowCount < n)
        		{
        			this.fv_maxRowCount = n;
        		}		
        		
        	}
        	
        	this.fv_maxMenuCount = this.ds_dump.getRowCount();
        	this.fv_popupDivWidth	= (this.fv_maxMenuCount * this.fv_menuGridWidth) + ((this.fv_maxMenuCount-1) * this.fv_menuGridGap);
        	this.fn_createMenu();	// createmenu
        }

        // [createmenu]
        this.fn_createMenu = function()
        {
        	var nCnt 	= this.ds_dump.getRowCount();
        	var nLeft 	= 0;
        	var nTop 	= 0;
        	var comps 	= [];
        	var comp;
        	var sName	= "";

        	for (var i=0; i<nCnt; i++) {
        		comp = new Grid();
        		sRootId = this.ds_dump.getColumn(i,"ROOT_MENU_ID");
        		comp.init("grdMenu_" + sRootId, "absolute", nLeft, nTop, this.fv_menuGridWidth, null, null ,0);
        		this.pdiv_menu.addChild(comp.name,comp);
        		comp.bringToFront();
        		comp.set_formats(this.grd_format.formats);
        		comp.set_autofittype("col");
        		comp.set_treeusecheckbox(false);
        		comp.set_treeuseimage(false);
        		comp.set_treeuseline(false);
        		comp.set_binddataset("ds_" + sRootId);
        		comp.set_treeinitstatus('expand,null');
        		comp.addEventHandler("oncellclick", this._fn_menuOncellclick, this);	// menuclick	
        		comp.show();
        		comps.push(comp);
        		nLeft = this.fv_menuGridGap + nLeft + this.fv_menuGridWidth;
        	}
        }

        // [menuclick]
        this._fn_menuOncellclick = function(obj,e)
        {
        	oDs = obj.getBindDataset();
        	sMenuId = oDs.getColumn(e.row,"MENU_ID");
        	application.afn_menuOpen(sMenuId);
        	this.pdiv_menu.closePopup(false);
        }

        this.btn_menu_onclick = function(obj,e)
        {
        	this.fn_menuDivOpen(obj);	// divopen
        }

        // [divopen]
        this.fn_menuDivOpen = function(obj)
        {
         	this.oCurBtn = obj;
         	var nBorder = 3;
         	var nHeight = (this.fv_maxRowCount * this.fv_rowHeight) + nBorder + this.fv_headRowHeight;
        	var nScrollHeight = 30;

        	var n = this.width - obj.left;

        	if (this.fv_popupDivWidth > n)
        	{
        		this.fv_popupDivWidth = n;
        	} 

         	this.pdiv_menu.trackPopupByComponent(obj, 0, 31, this.fv_popupDivWidth, 500 , "", false);	
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
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_TopFrame_PopupMenu_onload, this);
            this.sta_ci.addEventHandler("onclick", this.sta_ci_onclick, this);
            this.btn_logout.addEventHandler("onclick", this.btn_logout_onclick, this);
            this.btn_menu.addEventHandler("onclick", this.btn_menu_onclick, this);
            this.btn_menu.addEventHandler("onmouseenter", this.btn_menu_onclick, this);

        };

        this.loadIncludeScript("Form_TopFrame_PopupMenu.xfdl", true);

       
    };
}
)();
