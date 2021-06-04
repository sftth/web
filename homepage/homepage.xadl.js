(function()
{
    return function()
    {
        // Theme, Component URI Setting
        this._theme_uri = "./_theme_/";
        this._globalvar_uri = "globalvars.xml";
        this.loadTypedefition = function()
        {
            // this._addService(prefixid, type, url, cachelevel, codepage, language, version, communication);
            this._addService("default_typedef.xml", "frame", "form", "./frame/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "images", "file", "./images/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "bizform", "form", "./bizform/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "nexacro14lib", "file", "./nexacro14lib/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "host", "JSP", "http://localhost:8080/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BaseLibrary", "file", "./nexacro14lib/component/BaseLibrary/", "", null, "", "", "0");
            this._addService("default_typedef.xml", "LgeLibrary", "file", "./nexacro14lib/component/LgeLibrary/", "", null, "", "", "0");
            this._addService("default_typedef.xml", "CommonLibrary", "js", "./CommonLibrary/", "", null, "", "", "0");
            this._addService("default_typedef.xml", "CommonObject", "form", "./CommonObject/", "", null, "", "", "0");

            this._component_uri = (this._arg_compurl ? this._arg_compurl : "./nexacro14lib/component/");
            // load components
            var registerclass = [
            		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
            		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
            		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
            		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
            		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
            		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
            		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
            		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
            		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
            		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
            		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
            		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
            		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
            		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
            		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
            		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
            		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
            		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
            		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
            		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
            		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
            		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
            		{"id":"ExtCombo", "classname":"nexacro.ExtCombo", "type":"JavaScript"},
            		{"id":"ExtFileUpload", "classname":"nexacro.ExtFileUpload", "type":"JavaScript"},
            		{"id":"ExtFileDownload", "classname":"nexacro.ExtFileDownload", "type":"JavaScript"}
            ];
            this._addClasses(registerclass);
        };
        
        this.on_loadGlobalVariables = function()
        {
            // global variable
            this._addVariable("gv_faqHtml", null, false);
            this._addVariable("gv_userID", null, false);

            // global image

            // global dataset
            var obj = null;
            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CONST_MENU_CAPTION\" type=\"STRING\" size=\"200\" value=\"aaa\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ODRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRNT_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">H100</Col><Col id=\"MENU_CAPTION\">소개</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_URL\">bizform::introduce.xfdl</Col></Row><Row><Col id=\"MENU_ID\">H200</Col><Col id=\"MENU_CAPTION\">데모</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">H300</Col><Col id=\"MENU_CAPTION\">NexacroPlatform 기술노트</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">H310</Col><Col id=\"MENU_CAPTION\">성능향상 가이드</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PRNT_MENU_ID\">H300</Col><Col id=\"MENU_URL\">bizform::performance_guide.xfdl</Col></Row><Row><Col id=\"MENU_ID\">H320</Col><Col id=\"MENU_CAPTION\">XAPI-설명서</Col><Col id=\"PRNT_MENU_ID\">H300</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_URL\">bizform::xapi_doc.xfdl</Col></Row><Row><Col id=\"MENU_ID\">H400</Col><Col id=\"MENU_CAPTION\">자주하는 질문</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_URL\">bizform::faq.xfdl</Col></Row><Row><Col id=\"MENU_ID\">H500</Col><Col id=\"MENU_CAPTION\">자료실</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_URL\">bizform::reference.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;


            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("homepage");
            this.set_version("");
            this.set_tracemode("none");
            this.set_themeid("common.xtheme");

            if (this._is_attach_childframe)
            	return;

            // frame
            var mainframe = this.createMainFrame("mainframe", "absolute", "0", "0", "1264", "678", null, null, this);
            mainframe.set_resizable("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("vFramesetMain", "absolute", null, null, null, null, null, null, this);
            this.addChild(frame0.name, frame0);
            this.frame = frame0;
            frame0.set_separatesize("180,*");

            
            var frame1 = new ChildFrame("headFrame", "absolute", null, null, null, null, null, null, "frame::headFrame.xfdl", frame0);
            frame0.addChild(frame1.name, frame1);
            frame1.set_showtitlebar("false");
            frame1.set_dragmovetype("none");
            frame1.set_formurl("frame::headFrame.xfdl");

            var frame2 = new ChildFrame("bodyFrame", "absolute", null, null, null, null, null, null, "frame::bodyFrame.xfdl", frame0);
            frame0.addChild(frame2.name, frame2);
            frame2.set_showtitlebar("false");
            frame2.set_dragmovetype("none");
            frame2.set_formurl("frame::bodyFrame.xfdl");

        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onloadingglobalvariables", this.application_onloadingglobalvariables, this);

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler
        this.registerScript("homepage.xadl", function(exports) {

        

        this.application_onloadingglobalvariables = function(obj,e)
        {

        	if(nexacro.Browser != "Runtime") { //Runtime 은 로컬에서만 사용
        		var sXadlUrl = application.xadl;
        		

        		if(sXadlUrl.indexOf("10.185.221.21") > -1)
        		{
        			application.services["host"].set_url("http://10.185.221.21/");
        		}
        	}	
        	
        }
        
        });


        this.checkLicense("");
        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("common.xtheme");

this.loadCss("./css/Common.css");
this.loadCss("./css/GFCM.css");
this.loadCss("./css/GLAP.css");
this.loadCss("./css/MainFrame.css");
this.loadCss("./css/Paging.css");
this.loadCss("./css/TabFrame.css");
this.loadCss("./css/TopFrame.css");
this.loadCss("./css/WorkFrame.css");

        this.loadIncludeScript("homepage.xadl", true);
    };
}
)();
