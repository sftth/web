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
                this.set_name("headFrame");
                this.set_titletext("LG전자 넥사크로 패키지");
                this.set_scrollbars("none");
                this.set_cssclass("frm_TF");
                this._setFormPosition(0,0,1224,180);
            }
            this.style.set_background("transparent");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CONST_MENU_CAPTION\" type=\"STRING\" size=\"200\" value=\"aaa\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ODRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRNT_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">H100</Col><Col id=\"MENU_CAPTION\">소개</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_URL\">bizform::introduce.xfdl</Col></Row><Row><Col id=\"MENU_ID\">H200</Col><Col id=\"MENU_CAPTION\">데모</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">H300</Col><Col id=\"MENU_CAPTION\">기술노트</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">H310</Col><Col id=\"MENU_CAPTION\">성능향상 가이드</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PRNT_MENU_ID\">H300</Col><Col id=\"MENU_URL\">bizform::performance_guide.xfdl</Col></Row><Row><Col id=\"MENU_ID\">H320</Col><Col id=\"MENU_CAPTION\">XAPI-설명서</Col><Col id=\"PRNT_MENU_ID\">H300</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_URL\">bizform::xapi_doc.xfdl</Col></Row><Row><Col id=\"MENU_ID\">H330</Col><Col id=\"MENU_CAPTION\">Download</Col><Col id=\"PRNT_MENU_ID\">H300</Col><Col id=\"MENU_URL\">bizform::download.xfdl</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">H400</Col><Col id=\"MENU_CAPTION\">자주하는 질문</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_URL\">bizform::faq.xfdl</Col></Row><Row><Col id=\"MENU_ID\">H500</Col><Col id=\"MENU_CAPTION\">자료실</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_URL\">bizform::reference.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "0", "141", null, "39", "0", null, this);
            obj.set_taborder("4");
            obj.set_text("Static01");
            obj.style.set_background("#333333ff");
            this.addChild(obj.name, obj);

            obj = new Menu("mnu_main", "absolute", "0", "141", "1224", null, null, "0", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@ds_menu");
            obj.set_idcolumn("MENU_ID");
            obj.set_captioncolumn("MENU_CAPTION");
            obj.set_levelcolumn("MENU_LEVEL");
            obj.style.set_expandimage("URL('theme://images/icon_PopupMenu_Expand.png')");
            obj.style.set_itempadding("0 20 0 20");
            obj.style.set_itembackground("#333333ff");
            obj.style.set_popupbackground("#ffffffff");
            obj.style.set_popupborder("1 solid #c00c3fff");
            obj.style.set_popupitempadding("0 10 0 13");
            obj.style.set_popupfont("bold 10 LG스마트체,Arial");
            obj.style.set_popupitembackground("transparent");
            obj.style.set_popupitemborder("0 none #808080ff");
            obj.style.set_popuptype("normal");
            obj.style.set_background("#333333ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("antialias bold 14 LG스마트체,Arial");
            obj.style.set_cursor("hand");
            obj.set_visible("true");

            obj = new ImageViewer("ImageViewer00", "absolute", "0", "3", null, "120", "0", null, this);
            obj.set_taborder("0");
            obj.set_image("URL('images::LGE_NEXA_CI.png')");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #e5e5e5ff");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "3", "1224", "40", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Button("btn01", "absolute", "0", "6", "244", "34", null, null, this.div_menu);
            obj.set_taborder("0");
            obj.set_text("소개");
            obj.style.set_background("@gradation");
            this.div_menu.addChild(obj.name, obj);
            obj = new Button("btn02", "absolute", "244", "6", "244", "34", null, null, this.div_menu);
            obj.set_taborder("1");
            obj.set_text("데모");
            this.div_menu.addChild(obj.name, obj);
            obj = new Button("btn03", "absolute", "488", "6", "244", "34", null, null, this.div_menu);
            obj.set_taborder("2");
            obj.set_text("NexacroPlatform 기술노트");
            this.div_menu.addChild(obj.name, obj);
            obj = new Button("btn04", "absolute", "732", "6", "244", "34", null, null, this.div_menu);
            obj.set_taborder("3");
            obj.set_text("자주하는 질문");
            this.div_menu.addChild(obj.name, obj);
            obj = new Button("btn05", "absolute", "976", "6", "244", "34", null, null, this.div_menu);
            obj.set_taborder("4");
            obj.set_text("자료실");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "113", null, "28", "0%", null, this);
            obj.set_taborder("2");
            obj.set_text("* 넥사크로 스튜디오 권장설치 버전 (<fc v='red'>14.0.1.1201</fc>) 2017년 7월 1일 기준");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 40, this.div_menu,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_menu.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 180, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("headFrame");
            		p.set_titletext("LG전자 넥사크로 패키지");
            		p.set_scrollbars("none");
            		p.style.set_background("transparent");
            		p.set_cssclass("frm_TF");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("headFrame.xfdl", function(exports) {

        this.bodyform = "";

        this.headFrame_onload = function(obj,e)
        {
        	this.fn_resize();
        }

        this.fn_resize = function ()
        {
        	this.mnu_main.set_left((application.mainframe.width - 1224) /2);
        }

        
        this.headFrame_onsize = function(obj,e)
        {
        	this.fn_resize();
        }

        this.fn_menuOpen = function(sUrl)
        {
        	application.mainframe.vFramesetMain.bodyFrame.form.div_biz.set_url(sUrl);
        }

        

        

        

        this.div_menu_btn05_onclick = function(obj,e)
        {
        	
        }

        
        this.fn_loginCheck = function()
        {
        	if(Base.isEmpty(application.gv_userID))
        	{
        		this.fn_menuOpen("frame::loginFrame.xfdl");	
        		return false;
        	} else {
        		this.fn_menuOpen("bizform::reference.xfdl");	
        		return true;
        	}
        }

        this.mnu_main_onmenuclick = function(obj,e)
        {
        	// 데모
        	if(e.id == "H200")
        	{
        		var sUrl = application.services["host"].url  + "index.html";
        		window.open(sUrl,"_blank", "width=1280,height=800,resizable=yes");	
        		return;
        	}

        
        	var nRow = this.ds_menu.findRow("MENU_ID", e.id);
        //	var nRow = application.gds_menu.findRow("MENU_ID", e.id);
        	if(nRow < 0) return;
        	
        	var sUrl = this.ds_menu.getColumn(nRow, "MENU_URL");
        //	var sUrl = application.gds_menu.getColumn(nRow, "MENU_URL");
        	if(Base.isEmpty(sUrl)) return;

        	
        	this.fn_menuOpen(sUrl);
        	

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize", this.headFrame_onsize, this);
            this.addEventHandler("onload", this.headFrame_onload, this);
            this.mnu_main.addEventHandler("onmenuclick", this.mnu_main_onmenuclick, this);
            this.div_menu.btn01.addEventHandler("onclick", this.div_menu_btn01_onclick, this);
            this.div_menu.btn02.addEventHandler("onclick", this.div_menu_btn02_onclick, this);
            this.div_menu.btn03.addEventHandler("onclick", this.div_menu_btn03_onclick, this);
            this.div_menu.btn04.addEventHandler("onclick", this.div_menu_btn04_onclick, this);
            this.div_menu.btn05.addEventHandler("onclick", this.div_menu_btn05_onclick, this);

        };

        this.loadIncludeScript("headFrame.xfdl", true);

       
    };
}
)();
