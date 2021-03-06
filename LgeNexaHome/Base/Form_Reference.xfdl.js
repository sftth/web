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
                this.set_name("Form_Reference");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"board_title\" type=\"STRING\" size=\"256\"/><Column id=\"from_date\" type=\"STRING\" size=\"256\"/><Column id=\"to_date\" type=\"STRING\" size=\"256\"/><Column id=\"create_user\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_board", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"board_seq\" type=\"STRING\" size=\"256\"/><Column id=\"board_title\" type=\"STRING\" size=\"256\"/><Column id=\"board_content\" type=\"STRING\" size=\"256\"/><Column id=\"board_filegroup\" type=\"STRING\" size=\"256\"/><Column id=\"create_user\" type=\"STRING\" size=\"256\"/><Column id=\"create_username\" type=\"STRING\" size=\"256\"/><Column id=\"create_date\" type=\"STRING\" size=\"256\"/><Column id=\"update_user\" type=\"STRING\" size=\"256\"/><Column id=\"update_date\" type=\"STRING\" size=\"256\"/><Column id=\"file_cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_seq", this);
            obj._setContents("<ColumnInfo><Column id=\"board_seq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_01", "absolute", "0", "0", "1224", null, null, "0", this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_board", "absolute", "0", "39", "650", null, null, "4", this.div_01);
            obj.set_taborder("4");
            obj.set_binddataset("ds_board");
            obj.set_autofittype("col");
            obj.style.set_border("0 solid #9f8f71ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"535\"/><Column size=\"52\"/><Column size=\"131\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"작성자\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"파일\"/><Cell col=\"3\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:create_username\"/><Cell col=\"1\" style=\"align:left;padding:0 0 0 10;selectfont: ;\" text=\"bind:board_title\"/><Cell col=\"2\" displaytype=\"image\" style=\"align:center middle;\" text=\"bind:file_cnt\" expr=\"expr:file_cnt &gt; 0 ? &quot;URL('theme://images/btn_WF_Save.png')&quot; : &quot;&quot;\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:center;selectfont: ;\" text=\"bind:create_date\"/></Band></Format></Formats>");
            this.div_01.addChild(obj.name, obj);
            obj = new Div("div_right", "absolute", "674", "40", null, null, "0", "0", this.div_01);
            obj.set_taborder("5");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "57", null, null, "0", "179", this.div_01.div_right);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_01.div_right.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "0", "29", null, "29", "0", null, this.div_01.div_right);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_01.div_right.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", null, "0", "53", "24", "0", null, this.div_01.div_right);
            obj.set_taborder("15");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_GridSave");
            this.div_01.div_right.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "27", null, "2", "1", null, this.div_01.div_right);
            obj.set_taborder("16");
            obj.style.set_background("#4f5670ff");
            this.div_01.div_right.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "0", "57", "149", null, null, "179", this.div_01.div_right);
            obj.set_taborder("17");
            obj.set_text("내용");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_01.div_right.addChild(obj.name, obj);
            obj = new Static("Static57", "absolute", "0", "29", "149", "29", null, null, this.div_01.div_right);
            obj.set_taborder("18");
            obj.set_text("제목");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_01.div_right.addChild(obj.name, obj);
            obj = new Edit("edt_title", "absolute", "151", "33", null, "21", "3", null, this.div_01.div_right);
            obj.set_taborder("19");
            this.div_01.div_right.addChild(obj.name, obj);
            obj = new Button("btn_add", "absolute", null, "0", "24", "24", "76", null, this.div_01.div_right);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_GridAdd");
            obj.style.set_background("URL('theme://WorkFrame/icon_WF_GridAddN.png')");
            this.div_01.div_right.addChild(obj.name, obj);
            obj = new Button("btn_del", "absolute", null, "0", "24", "24", "53", null, this.div_01.div_right);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_GridDelete");
            obj.style.set_background("@gradation URL('theme://WorkFrame/icon_WF_GridDeleteN.png')");
            this.div_01.div_right.addChild(obj.name, obj);
            obj = new TextArea("txa_content", "absolute", "151", "62", null, null, "3", "183", this.div_01.div_right);
            obj.set_taborder("22");
            this.div_01.div_right.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "0", null, null, "16", "0", "144", this.div_01.div_right);
            obj.set_taborder("23");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Title");
            this.div_01.div_right.addChild(obj.name, obj);
            obj = new Div("div_fileAttach", "absolute", "0", null, null, "129", "0", "6", this.div_01.div_right);
            obj.set_taborder("24");
            obj.set_url("CommonObject::AttachFiles.xfdl");
            this.div_01.div_right.addChild(obj.name, obj);
            obj = new Button("btn_spliter", "absolute", "654", "40", "10", null, null, "0", this.div_01);
            obj.set_taborder("6");
            obj.set_text("::");
            this.div_01.addChild(obj.name, obj);
            obj = new Div("div_Search", "absolute", "0", "0", null, "39", "0", null, this.div_01);
            obj.set_taborder("7");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Bg");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "-1", "0", null, "8", "0", null, this.div_01.div_Search);
            obj.set_taborder("44");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_01.div_Search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "-1", "29", null, "8", "0", null, this.div_01.div_Search);
            obj.set_taborder("45");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_01.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "28", null, "0", "0", this.div_01.div_Search);
            obj.set_taborder("46");
            obj.set_text("w28");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_01.div_Search.addChild(obj.name, obj);
            obj = new Button("btn_Search", "absolute", "862", "8", "68", "21", null, null, this.div_01.div_Search);
            obj.set_taborder("47");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            this.div_01.div_Search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "32", "8", "65", "21", null, null, this.div_01.div_Search);
            obj.set_taborder("48");
            obj.set_text("제목");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_01.div_Search.addChild(obj.name, obj);
            obj = new Edit("edt_title", "absolute", "97", "8", "150", "21", null, null, this.div_01.div_Search);
            obj.set_taborder("49");
            this.div_01.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "30", null, null, "0", this.div_01.div_Search);
            obj.set_taborder("50");
            obj.set_text("w\r30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_01.div_Search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "277", "8", "89", "21", null, null, this.div_01.div_Search);
            obj.set_taborder("51");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_01.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "247", "0", "30", "37", null, null, this.div_01.div_Search);
            obj.set_taborder("52");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_01.div_Search.addChild(obj.name, obj);
            obj = new Div("div_calendar", "absolute", "366", "8", "226", "21", null, null, this.div_01.div_Search);
            obj.set_taborder("53");
            obj.set_url("CommonObject::CalendarTerm.xfdl");
            this.div_01.div_Search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "623", "8", "89", "21", null, null, this.div_01.div_Search);
            obj.set_taborder("54");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_01.div_Search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "593", "0", "30", "37", null, null, this.div_01.div_Search);
            obj.set_taborder("55");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_01.div_Search.addChild(obj.name, obj);
            obj = new Edit("edt_user", "absolute", "689", "8", "150", "21", null, null, this.div_01.div_Search);
            obj.set_taborder("56");
            this.div_01.div_Search.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_01.div_right,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");

            	}
            );
            this.div_01.div_right.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 39, this.div_01.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFSA_Bg");

            	}
            );
            this.div_01.div_Search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 0, this.div_01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");

            	}
            );
            this.div_01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_01.div_right.edt_title","value","ds_board","board_title");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_01.div_right.txa_content","value","ds_board","board_content");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_01.grd_board","binddataset","ds_board","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CommonObject::AttachFiles.xfdl");
            this._addPreloadList("fdl", "CommonObject::CalendarTerm.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Form_Reference.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("Form_Reference.xfdl", function(exports) {

        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        // Form Variables
        this.sFileGroupID = "";
        this.bDeleteMode = false;

        this.fn_resize = function ()
        {
        	this.div_01.set_left((application.mainframe.width - 1224) /2);
        }

        this.Form_Reference_onload = function(obj,e)
        {
        	this.com_fromInit(obj);
        	this.fn_resize();
        }

        // Form Init
        this.fn_formInit = function()
        {
        	this.fn_search();	//search
        }

        // [search]
        this.fn_search = function()
        {
        	var oParam = this.div_01.div_Search.div_calendar.getValue();
        	this.ds_search.setColumn(0,"board_title",	this.div_01.div_Search.edt_title.value);
        	this.ds_search.setColumn(0,"from_date",		oParam.fromdate);
        	this.ds_search.setColumn(0,"to_date",		oParam.todate);
        	this.ds_search.setColumn(0,"create_user",	this.div_01.div_Search.edt_user.value);

        	var sSvcId			= "SearchResult";
        	var sUrl			= "sample/board/retBoardList.do";
        	var sInDs			= "IN_PSET=ds_search";
        	var sOutDs			= "ds_board=dsResult";
        	var sArg			= "";
        	var sCallback 		= "fn_callBack";	
        	LGE.Core.tranDo(this, sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback);
        }

        // call_back
        this.fn_callBack = function(svcid,errcode,errmsg) 
        {
        	if (errcode < 0) 
        	{
        		alert("[" + errcode + "] " + errmsg);
        		return;
        	} 
        	else 
        	{
        		switch (svcid)
        		{
        			case "SearchResult" : 
        				var nCount = this.ds_board.rowcount;
        			break;

        			case "saveResult" : 
        				if (this.bDeleteMode == true)
        				{
        					this.bDeleteMode = false;
        					var sFileGroupID = this.sFileGroupID;
        				}
        				else
        				{
        					var sFileGroupID = this.ds_board.getColumn(this.ds_board.rowposition, "board_seq");
        				}
        	
        				if (Base.isEmpty(sFileGroupID)) 
        				{
        					sFileGroupID = this.ds_seq.getColumn(0, "board_seq");
        				}
        				this.sFileGroupID = sFileGroupID;
        				this.fileSave();	// save_file
        			break;
        		}
        	}
        }

        // [save_file]
        this.fileSave = function()
        {
        	this.div_01.div_right.div_fileAttach.fn_uploadAttachFile(this.sFileGroupID);
        }

        this.div_01_btn_spliter_ondrag = function(obj,e)
        {
        	return true;
        }

        this.div_01_btn_spliter_onmove = function(obj,e)
        {
        	var oLeft 	= this.div_01.grd_board;
        	var oRight 	= this.div_01.div_right;
        	
        	oLeft.set_width(obj.left - 20);
        	oRight.set_left(obj.left + 20);
        }

        this.div_01_ondragmove = function(obj,e)
        {
        	var nPosX;

        	if (e.sourceobject.name == "btn_spliter" && e.button == "lbutton")
        	{	
        		nPosX = nexacro.toNumber(e.clientX);		
        		
        		try
        		{			
        			this.div_01.btn_spliter.setOffsetLeft(nPosX - 5);
        		} 
        		catch(ex)
        		{
        		
        		}
        	}
        }

        this.div_01_div_Search_btn_Search_onclick = function(obj,e)
        {
        	this.fn_search();	//search
        }

        this.ds_board_onrowposchanged = function(obj,e)
        {
        	if (obj.getColumn(e.newrow, "create_user") == application.gv_userID)
        	{
        		this.fn_setMode("W");	// set_mode
        	} 
        	else 
        	{
        		this.fn_setMode("R");	// set_mode
        	}
        	this.div_01.div_right.div_fileAttach.fn_retrieveAttachFiles(obj.getColumn(e.newrow, "board_seq")); // Search File
        }

        // [set_mode]
        this.fn_setMode = function(sMode)
        {
        	var bEnable;
        	var bReadonly;

        	if (sMode == "R")
        	{
        		bEnable = false;
        		bReadonly = true;
        	} 
        	else if (sMode == "W")
        	{
        		bEnable = true;
        		bReadonly = false;
        	}

        	this.div_01.div_right.btn_del.set_enable(bEnable);
        	this.div_01.div_right.btn_save.set_enable(bEnable);
        	this.div_01.div_right.edt_title.set_readonly(bReadonly);
        	this.div_01.div_right.txa_content.set_readonly(bReadonly);
        	this.div_01.div_right.div_fileAttach.btn_addFile.set_enable(bEnable);
        	this.div_01.div_right.div_fileAttach.btn_delFile.set_enable(bEnable);
        }

        this.ds_board_canrowposchange = function(obj,e)
        {
        	if (obj.getRowType(e.oldrow) != 1 && obj.getRowType(e.oldrow) != 0)
        	{
        		alert("변경중인 데이터가 존재합니다. \n이동할 수 없습니다.");
        		return false;
        	}
        }

        this.div_01_div_right_btn_save_onclick = function(obj,e)
        {
        	this.fn_save();	// save_data
        }

        // [save_data]
        this.fn_save = function()
        {
        	// Devon용 실제 저장 정보 전달
           	var sSvcId			= "saveResult";
           	var sUrl			= "sample/board/regBoard.do";
           	var sInDs			= "IN_PSET=ds_board:U";
           	var sOutDs			= "ds_seq=OUT_SEQ";
           	var sArg			= "";
           	var sCallback 		= "fn_callBack";	
           	LGE.Core.tranDo(this, sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback);
        }

        this.div_01_div_right_btn_add_onclick = function(obj,e)
        {
        	if (!this.fn_loginCheck())	// check_login
        	{
        		return;
        	}
        	
        	if (!LGE.Util.isUpdated(this.ds_board))
        	{
        		this.ds_board.addRow();
        		this.ds_board.setColumn(this.ds_board.rowposition,"create_user", application.gv_userID);
        		this.fn_setMode("W");	// set_mode
        		this.div_01.div_right.div_fileAttach.fn_attfile_reset(); // 파일조회
        	} 
        	else 
        	{
        		alert("변경중인 데이터가 존재합니다. \n이동할 수 없습니다.");
        	}
        }

        // [check_login]
        this.fn_loginCheck = function()
        {
        	return application.mainframe.VFrameSetMain.ChildFrame_Top.form.fn_loginCheck();
        }

        this.div_01_div_right_btn_del_onclick = function(obj,e)
        {
        	if (!this.fn_loginCheck())
        	{
        		return;
        	}

        	if (this.confirm("정말로 삭제하시겠습니까?")) 
        	{
        		this.bDeleteMode = true;
        		var nDelRow = this.ds_board.rowposition;
        		this.sFileGroupID = this.ds_board.getColumn(nDelRow, "board_seq");
        		this.div_01.div_right.div_fileAttach.ds_attachFile.deleteAll();
        		this.ds_board.deleteRow(this.ds_board.rowposition);
        	}	
        }

        this.fn_ExtFileUp_onsuccess = function(fileId)
        {
        	this.fn_search();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_board.addEventHandler("onrowposchanged", this.ds_board_onrowposchanged, this);
            this.ds_board.addEventHandler("canrowposchange", this.ds_board_canrowposchange, this);
            this.addEventHandler("onload", this.Form_Reference_onload, this);
            this.addEventHandler("onsize", this.fn_resize, this);
            this.div_01.addEventHandler("ondragmove", this.div_01_ondragmove, this);
            this.div_01.grd_board.addEventHandler("oncellclick", this.div_01_Grid00_oncellclick, this);
            this.div_01.div_right.btn_save.addEventHandler("onclick", this.div_01_div_right_btn_save_onclick, this);
            this.div_01.div_right.btn_add.addEventHandler("onclick", this.div_01_div_right_btn_add_onclick, this);
            this.div_01.div_right.btn_del.addEventHandler("onclick", this.div_01_div_right_btn_del_onclick, this);
            this.div_01.btn_spliter.addEventHandler("ondrag", this.div_01_btn_spliter_ondrag, this);
            this.div_01.btn_spliter.addEventHandler("onmove", this.div_01_btn_spliter_onmove, this);
            this.div_01.div_Search.btn_Search.addEventHandler("onclick", this.div_01_div_Search_btn_Search_onclick, this);
            this.div_01.div_Search.Static00.addEventHandler("onclick", this.div_Search_Static00_onclick, this);
            this.div_01.div_Search.edt_title.addEventHandler("oneditclick", this.div_Search_Edit00_oneditclick, this);
            this.div_01.div_Search.Static03.addEventHandler("onclick", this.div_Search_Static00_onclick, this);
            this.div_01.div_Search.Static05.addEventHandler("onclick", this.div_Search_Static00_onclick, this);
            this.div_01.div_Search.edt_user.addEventHandler("oneditclick", this.div_Search_Edit00_oneditclick, this);

        };

        this.loadIncludeScript("Form_Reference.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
