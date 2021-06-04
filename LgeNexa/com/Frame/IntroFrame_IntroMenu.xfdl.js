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
                this.set_name("introFrame");
                this.set_titletext("Intro Page");
                this._setFormPosition(0,0,1260,564);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ODRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRNT_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dump", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_MENU_ID\" type=\"STRING\" size=\"256\" prop=\"COUNT\"/><Column id=\"SYS_CD\" type=\"STRING\" size=\"256\" prop=\"NONE\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ODRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRNT_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static10", "absolute", "0", "0", null, "23", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("h23");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "0", "20", null, null, "0", this);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "0", "20", null, "0", "0", this);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_format", "absolute", "3.17%", "678", null, "180", "82.38%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("gds_menu");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"175\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell style=\"align:left middle;padding:0 0 0 10;\" text=\"bind:CONST_MENU_CAPTION\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"none\" style=\"font: ;\" text=\"bind:MENU_CAPTION\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1260, 564, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("introFrame");
            		p.set_titletext("Intro Page");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("IntroFrame_IntroMenu.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : IntroFrame.xfdl
        * PROGRAMMER  : 
        * DATE        : 2016-09-28
        * DESCRIPTION : Intro 화면
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

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

        this.introFrame_onload = function(obj,e)
        {
        	this.ds_menu.copyData(application.gds_menu,true);
        	
        	this.ds_menu.filter("MENU_LEVEL == '0'");
        	this.ds_dump.copyData(this.ds_menu,true);	
        	
        	this.ds_menu.filter("");	

        	this.fn_setRootMenu();
        	
        	this.fn_getMaxMenuCount();		
        	
        	
        	this.fv_headRowHeight = this.grd_format.getFormatRowProperty(0,"size");
        	this.fv_rowHeight = this.grd_format.getFormatRowProperty(1,"size");		
        }

        

        this.fn_setRootMenu = function ()
        {
        	var nCnt 		= this.ds_menu.getRowCount();
        	var sRootId 	= "";
        	
        	this.ds_menu.addColumn("ROOT_MENU_ID", "string");
        	this.ds_dump.addColumn("ROOT_MENU_ID", "string");

        	for(var i=0; i<nCnt; i++)
        	{
        		if(this.ds_menu.getColumn(i, "MENU_LEVEL") == "0" ){
        			sRootId = this.ds_menu.getColumn(i, "MENU_ID");
        			this.ds_menu.setColumn(i,"ROOT_MENU_ID", sRootId);
        		} else if (this.ds_menu.getColumn(i, "MENU_LEVEL") == "1") {
        			sRootId = this.ds_menu.getColumn(i, "PRNT_MENU_ID");
        			this.ds_menu.setColumn(i,"ROOT_MENU_ID", sRootId);		
        		} else {
        			this.ds_menu.setColumn(i,"ROOT_MENU_ID", sRootId);
        		}
        	}
        	
        	nCnt = this.ds_dump.getRowCount();
        	
        	for(var i=0; i<nCnt; i++)
        	{
        		sRootId = this.ds_dump.getColumn(i, "MENU_ID");
        		this.ds_dump.setColumn(i, "ROOT_MENU_ID", sRootId);
        		this.fn_createMenuDataset("ds_" + sRootId, sRootId);
        	}
        }

        

        
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

        

        this.fn_getMaxMenuCount = function()
        {
        	var nCnt = this.ds_dump.getRowCount();
        	
        	for(var i=0; i<nCnt; i++)
        	{
        		// 그리드의 Row 수
        		n = this.ds_menu.getCaseCount("ROOT_MENU_ID == '" + this.ds_dump.getColumn(i,"ROOT_MENU_ID") + "'")
        		
        		if(this.fv_maxRowCount < n)
        		{
        			this.fv_maxRowCount = n;
        		}		
        		
        	}
        	
        	this.fv_maxMenuCount = this.ds_dump.getRowCount();
        	this.fv_popupDivWidth	= (this.fv_maxMenuCount * this.fv_menuGridWidth)  +  ((this.fv_maxMenuCount-1) * this.fv_menuGridGap);
        	this.fn_createMenu();
        }

        
        this.fn_createMenu = function()
        {
        	var nCnt 	= this.ds_dump.getRowCount();
        	var nLeft 	= 20;
        	var nTop 	= 20;
        	var comps 	= [];
        	var comp;
        	var sName	= "";

        	for(var i=0; i<nCnt; i++) {
        		comp = new Grid();
        		sRootId = this.ds_dump.getColumn(i,"ROOT_MENU_ID");
        		comp.init("grdMenu_" + sRootId, "absolute", nLeft, nTop, this.fv_menuGridWidth, null, null ,20);
        		this.addChild(comp.name,comp);
        		comp.bringToFront();
        		comp.set_formats(this.grd_format.formats);
        		comp.set_autofittype("col");
        		comp.set_treeusecheckbox(false);
        		comp.set_treeuseimage(false);
        		comp.set_treeuseline(false);
        		comp.set_binddataset("ds_" + sRootId);
        		comp.set_treeinitstatus('expand,null');
        		comp.addEventHandler("oncellclick", this._fn_menuOncellclick, this);		
        		comp.show();
        		comps.push(comp);
        		nLeft = this.fv_menuGridGap + nLeft + this.fv_menuGridWidth;
        	}
        }

        this._fn_menuOncellclick = function(obj,e)
        {
        	oDs = obj.getBindDataset();
        	sMenuId = oDs.getColumn(e.row,"MENU_ID");
        	application.afn_menuOpen(sMenuId);
        }

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.introFrame_onload, this);

        };

        this.loadIncludeScript("IntroFrame_IntroMenu.xfdl", true);

       
    };
}
)();
