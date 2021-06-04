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
            this._addService("default_typedef.xml", "Frame", "form", "./Frame/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "Images", "file", "./images/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "Base", "form", "./Base/", "", null, "", "0", "0");
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
            this._addVariable("gv_userID", null, false);
            this._addVariable("gv_faqHtml", null, false);

            // global image

            // global dataset
            var obj = null;

            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("LgeNexaHome");
            this.set_version("");
            this.set_tracemode("none");
            this.set_themeid("common.xtheme");
            this.set_locale("ko_KR");

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
            var frame0 = new VFrameSet("VFrameSetMain", "absolute", null, null, null, null, null, null, this);
            this.addChild(frame0.name, frame0);
            this.frame = frame0;
            frame0.set_separatesize("180,*");

            
            var frame1 = new ChildFrame("ChildFrame_Top", "absolute", null, null, null, null, null, null, "Frame::Form_TopFrame.xfdl", frame0);
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("Frame::Form_TopFrame.xfdl");
            frame1.set_dragmovetype("none");
            frame1.set_showtitlebar("false");

            var frame2 = new ChildFrame("ChildFrame_Body", "absolute", null, null, null, null, null, null, "Frame::Form_BodyFrame.xfdl", frame0);
            frame0.addChild(frame2.name, frame2);
            frame2.set_formurl("Frame::Form_BodyFrame.xfdl");
            frame2.set_dragmovetype("none");
            frame2.set_showtitlebar("false");

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
        this.registerScript("LgeNexaHome.xadl", function(exports) {

        this.application_onloadingglobalvariables = function(obj,e)
        {
        	//Runtime 은 로컬에서만 사용
        	if(nexacro.Browser != "Runtime") 
        	{
        		var sXadlUrl = application.xadl;
        		
        		if (sXadlUrl.indexOf("10.185.221.21") > -1)
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
this.loadCss("./css/TopFrame.css");
this.loadCss("./css/WorkFrame.css");

        this.loadIncludeScript("LgeNexaHome.xadl", true);
    };
}
)();
