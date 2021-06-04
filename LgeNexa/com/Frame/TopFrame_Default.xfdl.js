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
                this.set_name("TopFrame");
                this.set_titletext("New Form");
                this.set_cssclass("frm_TF");
                this._setFormPosition(0,0,1224,56);
            }
            this.style.set_background("#333333ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Menu("mnu_main", "absolute", "215", "5", null, "51", "115", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_menu");
            obj.set_captioncolumn("MENU_CAPTION");
            obj.set_idcolumn("MENU_ID");
            obj.set_levelcolumn("MENU_LEVEL");
            obj.style.set_popuptype("normal");
            obj.style.set_background("transparent 0");
            obj.set_cssclass("mnu_TF");

            obj = new Static("sta_ci", "absolute", "20", "13", "175", "31", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_Logo");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "52", "100%", "4", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("#c00c3fff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout", "absolute", null, "0", "40", "52", "0", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_TF_Logout");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 56, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TopFrame");
            		p.set_titletext("New Form");
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
        this.registerScript("TopFrame_Default.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : TopFrame_Default.xfdl
        * PROGRAMMER  : 
        * DATE        : 2016-09-28
        * DESCRIPTION : Top 화면
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        this.TopFrame_onload = function(obj,e)
        {
        	this.ds_menu.copyData(application.gds_menu,true);
        	application.gds_menu.filter("");
        }

        
        this.mnu_main_onmenuclick = function(obj,e)
        {
        	application.afn_menuOpen(e.id);
        }

        this.sta_ci_onclick = function(obj,e)
        {
        	application.afn_viewIntro(true);
        }

        this.btn_logout_onclick = function(obj,e)
        {
        	if(confirm("로그아웃 하시겠습니까?"))
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

        
        this.fn_callBack = function(svcid,errcode,errmsg) {

        	if ( errcode < 0 ) {
        		alert("svcid = " + svcid + "\n errcode=" + errcode + "\n errmsg=" + errmsg);
        		return;
        	} else {
        		application.afn_logOut();
        	}
        }

        
        this.Button00_onclick = function(obj,e)
        {
        	//var oForm = application.av_mdiFrameset["MENU_D220_0"].form.div_biz;
        	//application.av_hiddenFrame.form.fn_changeLanguage(oForm);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.TopFrame_onload, this);
            this.mnu_main.addEventHandler("onmenuclick", this.mnu_main_onmenuclick, this);
            this.sta_ci.addEventHandler("onclick", this.sta_ci_onclick, this);
            this.btn_logout.addEventHandler("onclick", this.btn_logout_onclick, this);

        };

        this.loadIncludeScript("TopFrame_Default.xfdl", true);

       
    };
}
)();
