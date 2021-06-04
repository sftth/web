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
            this._addService("default_typedef.xml", "Base", "form", "./Base/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "host", "JSP", "http://localhost:8080/", "", null, "", "", "0");

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
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"}
            ];
            this._addClasses(registerclass);
        };
        
        this.on_loadGlobalVariables = function()
        {
            // global variable
            this._addVariable("gv_Query", null, "true");
            this._addVariable("gv_User_ID", null, false);
            this._addVariable("gv_User_NM", null, false);

            // global image

            // global dataset
            var obj = null;

            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("LGE_SWA");
            this.set_version("");
            this.set_tracemode("none");
            this.set_themeid("default.xtheme");

            if (this._is_attach_childframe)
            	return;

            // frame
            var mainframe = this.createMainFrame("mainframe", "absolute", "0", "0", "1024", "768", null, null, this);
            mainframe.set_resizable("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("childframe", "absolute", null, null, null, null, null, null, "", this);
            this.addChild(obj.name, obj);
            this.frame = obj;
            obj.set_formurl(application._quickview_formurl);
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj = null;
        };
        
        this.on_initEvent = function()
        {

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler
        this.registerScript("LGE_SWA.xadl", function(exports) {
        // Host Url 선언
        this.av_host_127 = "127.0.0.1";
        this.av_host_Local = "localhost";
        this.av_host_Real = "10.185.221.21";
        this.av_host_Dev = "10.185.221.24";

        
        this.application_onloadingglobalvariables = function(obj,e)
        {
        		//Runtime 은 로컬에서만 사용
        	if(nexacro.Browser != "Runtime") 
        	{
        		var sXadl_Url = application.xadl;
        		
        		var sProt = sXadl_Url.substr(0,5);	
                		
        		if (sProt != "https")
        		{
        			sProt = "http";
        		}
        		
        // 		if (sXadl_Url.indexOf("10.185.221.21") > -1)
        // 		{
        // 			application.services["host"].set_url(sProt + "://10.185.221.21/");
        // 		}

        		// 개발/운영 서버 구분해서 host url 셋팅
        		if (sXadl_Url.indexOf(this.av_host_127) > -1)
        		{ 
        			application.services["host"].set_url(sProt + "://" + this.av_host_127 + ":8080/");			
        		}
        		else if (sXadl_Url.indexOf(this.av_host_Local) > -1)
        		{
        			application.services["host"].set_url(sProt + "://" + this.av_host_Local + ":8080/");
        		}
        		else if (sXadl_Url.indexOf(this.av_host_Real) > -1)   
        		{
        			application.services["host"].set_url(sProt + "://" + this.av_host_Real + "/"); // 운영서버
        		}
        		else if (sXadl_Url.indexOf(this.av_host_Dev) > -1)
        		{
        			application.services["host"].set_url(sProt + "://" + this.av_host_Dev + "/"); // 개발서버
        		}
        	}
        }

        this.gfn_GetToday = function()
        {
        	var sDate = new Date();
        	var sToday;
        	
        	sToday = sDate.getFullYear();
        	sToday += (sDate.getMonth() + 1).toString().padLeft(2,"0");
        	sToday += sDate.getDate().toString().padLeft(2,"0");
        	
        	return sToday;
        }

        this.gfn_GetTime = function()
        {
        	var sDate = new Date();
        	var sTime;
        	
        	sTime = sDate.getHours().toString().padLeft(2,"0");
        	sTime += sDate.getMinutes().toString().padLeft(2,"0");
        	sTime += sDate.getSeconds().toString().padLeft(2,"0");
        	
        	return sTime;
        }

        this.gfn_ValidCheck = function(vData)
        {
        	if ((vData == undefined) || (vData == null) || (vData == ""))
        	{
        		return false;
        	}
        	else
        	{
        		return true;
        	}
        }
        
        });


        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("default.xtheme");


        this.loadIncludeScript("LGE_SWA.xadl", true);
    };
}
)();
