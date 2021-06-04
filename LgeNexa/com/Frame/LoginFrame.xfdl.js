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
                this._setFormPosition(0,0,1260,650);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\">guest</Col><Col id=\"PASSWORD\">guest123</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"5\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInput", this);
            obj._setContents("<ColumnInfo><Column id=\"CAT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLanguage", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">EN</Col><Col id=\"name\">English </Col></Row><Row><Col id=\"code\">KR</Col><Col id=\"name\">한국어</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMenuType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Default</Col><Col id=\"name\">Default Menu</Col></Row><Row><Col id=\"code\">FullMenu</Col><Col id=\"name\">Full Down Menu</Col></Row><Row><Col id=\"code\">PopupMenu</Col><Col id=\"name\">Popup Menu</Col></Row><Row><Col id=\"code\">IntroMenu</Col><Col id=\"name\">Intro Menu</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOpenMenuListType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Top</Col><Col id=\"name\">Top</Col></Row><Row><Col id=\"code\">Bottom</Col><Col id=\"name\">Bottom</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_login", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_userId", "absolute", "10", "13", "197", "36", null, null, this.div_login);
            obj.set_taborder("2");
            obj.set_displaynulltext("User ID");
            obj.set_cssclass("edt_Login_ID");
            this.div_login.addChild(obj.name, obj);
            obj = new Edit("edt_userPw", "absolute", "10", "51", "197", "36", null, null, this.div_login);
            obj.set_taborder("3");
            obj.set_password("true");
            obj.set_displaynulltext("Password");
            obj.set_cssclass("edt_Login_PW");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("btn_devLogin", "absolute", "208", "12", "113", "76", null, null, this.div_login);
            obj.set_taborder("4");
            obj.set_text("Login");
            this.div_login.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "13.17%", "30.62%", null, null, "13.17%", "30.46%", this.div_login);
            obj.set_taborder("6");
            obj.set_image("URL('images::LGE_NEXA_CI.png')");
            obj.style.set_border("0 solid #afafafff");
            this.div_login.addChild(obj.name, obj);
            obj = new Radio("rad_menuType", "absolute", "146", "125", "512", "18", null, null, this.div_login);
            this.div_login.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_innerdataset("@dsMenuType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_value("Default");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Radio("rad_lang", "absolute", "146", "101", "256", "18", null, null, this.div_login);
            this.div_login.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("@dsLanguage");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_direction("vertical");
            obj.set_value("KR");
            obj = new Static("sta_language", "absolute", "15", "98", "104", "24", null, null, this.div_login);
            obj.set_taborder("10");
            obj.set_text("Language");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div_login.addChild(obj.name, obj);
            obj = new Static("sta_menuType", "absolute", "15", "122", "104", "24", null, null, this.div_login);
            obj.set_taborder("11");
            obj.set_text("Menu Type");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div_login.addChild(obj.name, obj);
            obj = new Static("sta_menuType00", "absolute", "15", "146", "104", "24", null, null, this.div_login);
            obj.set_taborder("12");
            obj.set_text("Open Menu List");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div_login.addChild(obj.name, obj);
            obj = new Radio("rad_openMenuListType", "absolute", "146", "149", "256", "18", null, null, this.div_login);
            this.div_login.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_innerdataset("@dsOpenMenuListType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_value("Top");
            obj.set_direction("vertical");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_login,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");

            	}
            );
            this.div_login.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1260, 650, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("introFrame");
            		p.set_titletext("Intro Page");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div00.edt_userId","value","dsLogin","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.edt_userPw","value","dsLogin","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_login.edt_userId","value","dsLogin","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_login.edt_userPw","value","dsLogin","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LoginFrame.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("LoginFrame.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : LoginFrame.xfdl
        * PROGRAMMER  : 
        * DATE        : 2016-09-28
        * DESCRIPTION : Login 
        * to do check : - 사용자 확인 transaction
                        - SSO 사용자 로그인 처리 transaction
                        - 로그인전 확보해야 할 정보 (메뉴, 공통코드, 메세지등)
                        - 사용자 확인, 사전정보가 확보되면, 최종적으로 application.afn_loginPass(); 호출
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        

        
        /*----------------------------------------------------------------------------------
         Library Include
        -----------------------------------------------------------------------------------*/
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        
        this.btn_devLogin_onclick = function(obj,e)
        {
        	if(!this.fn_checkValid()) return;

        	
        	// login check
        	var userId = this.dsLogin.getColumn(0, "USER_ID");
        	var passwd = this.dsLogin.getColumn(0, "PASSWORD");

        	//var sSvcId = "nexacro/login.ncd";
        	var sSvcId = "login/doLogin.ajax";
        	var sInDs  = "IN_PSET=dsLogin";
        	var sOutDs = "dsUser=OUT_USER";
        	var sArg   = "";
        	var sCallback = "fn_callBack";
        	var bShowProgress = true;
        	var bAsync = true;

        

        	this.transaction( "tr_login"
        					, application.services["host"].url + sSvcId
        					, sInDs
        					, sOutDs		
        					, sArg
        					, sCallback
        					, false
        					, 0
        					, false);
        }

        this.fn_checkValid = function()
        {
        	if(Base.isEmpty(this.div_login.edt_userId.value))
        	{
        		alert("Please enter ID");
        		this.div_login.edt_userId.setFocus();
        		return false;
        	}
        	
        	if(Base.isEmpty(this.div_login.edt_userPw.value))
        	{
        		alert("Please enter Password");
        		this.div_login.edt_userPw.setFocus();
        		return false;
        	}	
        	
        	return true;
        }

        

        

        this.fn_ssoLogin = function()
        {
        	this.dsLogin.clearData();
        	this.dsLogin.addRow();
        	
        	//this.dsLogin.setColumn(0,"SSO_USER_ID" , application.gv_userid  );
        	//this.dsLogin.setColumn(0,"SSO_USER_KEY", application.gv_userkey );

        	var sInDs  = "IN_PSET=dsLogin";
        	var sOutDs = "dsUser=OUT_USER";
        	var sArg   = "";
        	var sCallback = "fn_callBack";
        	var bShowProgress = true;
        	var bAsync = true;
        	
        	this.transaction( "tr_ssoLogin"
        					, application.services["host"].url + "nexacro/ssoLogin.ncd"
        					, sInDs
        					, sOutDs		
        					, sArg
        					, sCallback
        					, false
        					, 2	
        					, false);
        }

        
        this.fn_callBack = function(svcid,errcode,errmsg) {
        	
        	if ( errcode < 0 ) {
        		if(errcode == -3){
        			alert("Login failed. \n\nPlease check your ID or password.");
        		} else {
        			
        		}
        		return;
        	} else {
        		
        		
        	
        		// 설정
        		application.gv_language 		= this.div_login.rad_lang.value;
        		application.gv_menuType 		= this.div_login.rad_menuType.value;
        		application.gv_openMenuListType = this.div_login.rad_openMenuListType.value;
        		
        		
        		//글로벌 변수에 세션정보 세팅
        		this.fn_setGlobalUserInfo();	
        		
        		//메뉴 정보 조회
        		//this.fn_setGlobalMenuInfo();

        		// 최종 로그인 통과
        		application.afn_loginPass();
        	}
        }

        this.fn_resize = function ()
        {
        	var nWidth = this.div_login.getOffsetWidth();
        	var nHeight = this.div_login.getOffsetHeight();

          	var nLeft = (application.mainframe.width  / 2) - Math.round((this.div_login.getOffsetWidth())  / 2);
          	var nTop  = (application.mainframe.height / 2) - Math.round((this.div_login.getOffsetHeight()) / 2);
        	
        	this.div_login.set_left(nLeft);
        	this.div_login.set_top(nTop);
        	
        }
        this.LoginFrame_onload = function(obj,e)
        {

        	// User Id와 Menu Id를 받았을 경우
        	if(!Base.isEmpty(application.gv_linkuserid) && !Base.isEmpty(application.gv_linkmenuid))
        	{
        		this.fn_ssoLogin();
        	} 	
        }

        this.LoginFrame_onsize = function(obj,e)
        {
        	//this.fn_resize();
        }

        
        this.div_login_edt_userId_onkeyup = function(obj,e)
        {
        	this.dsLogin.setColumn(0,"USER_ID", obj.value);	
        }

        this.div_login_edt_userPw_onkeyup = function(obj,e)
        {
        	this.dsLogin.setColumn(0,"PASSWORD", obj.value);
        }

        
        //글로벌 변수에 세션정보 세팅
        this.fn_setGlobalUserInfo = function() {

        	//기존정보 삭제처리
        	application.gds_userInfo.clearData();
        	application.gds_userInfo.addRow();

        	//변수 세팅
        	application.gds_userInfo.setColumn(0, "USER_ID"              , this.dsUser.getColumn(0, "USER_ID"              ));
        	application.gds_userInfo.setColumn(0, "USER_NM"              , this.dsUser.getColumn(0, "USER_NM"              ));
        	application.gds_userInfo.setColumn(0, "EMP_NO"               , this.dsUser.getColumn(0, "EMP_NO"               ));
        	application.gds_userInfo.setColumn(0, "TEL_NO"               , this.dsUser.getColumn(0, "TEL_NO"               ));
        }

        this.fn_setGlobalMessageInfo = function() {

        	this.dsInput.clearData();
        	this.dsInput.addRow();
        	this.dsInput.setColumn(0, "CAT_TYPE", "SYSTEM");
        	this.dsInput.setColumn(0, "SYS_CD"  , "GRMS");
        	this.dsInput.setColumn(0, "LANG_CD" , gv_language );
        	this.dsInput.setColumn(0, "USE_FLAG", "Y");
        	
        	var sSvcId 			= "BRC_COM_RetrieveNexaMsgList";
        	var sActId 			= "BRC_COM_RetrieveNexaMsgList";
        	var sInDs  			= "IN_SEARCH=dsInput";
        	var sOutDs 			= "gds_message=OUT_MSG";
        	var sArg   			= "";
        	var sCallback 		= "fn_msgCallBack";
        	var bShowProgress 	= true;
        	var bAsync 			= true;

        	LGE.Core.tran(this, sSvcId, sActId, sInDs, sOutDs, sArg, sCallback, bShowProgress, bAsync);
        }

        
        this.fn_msgCallBack = function(svcid,errcode,errmsg) {
        	if ( errcode < 0 ) {
        		alert("svcid = " + svcid + "\n errcode=" + errcode + "\n errmsg=" + errmsg);
        		return;
        	} else {
        		// 성공시 login pass
        		application.afn_loginPass();
        	}
        }

        this.fn_setGlobalMenuInfo = function() {

        	this.dsInput.clearData();
        	this.dsInput.addRow();
        	this.dsInput.setColumn(0, "SYS_CD", application.gv_syscode);

        	var sSvcId 			= "BRC_COM_RetrieveMenuData";
        	var sActId 			= "BRC_COM_RetrieveMenuData"; 
        	var sInDs  			= "IN_SEARCH=dsInput";
        	var sOutDs 			= "gds_menu=OUT_MENU";
        	var sArg   			= "";
        	var sCallback 		= "fn_menuCallBack";
        	var bShowProgress 	= true;
        	var bAsync 			= true;

        	LGE.Core.tran(this, sSvcId, sActId, sInDs, sOutDs, sArg, sCallback, bShowProgress, bAsync);
        }

        
        this.fn_menuCallBack = function(svcid,errcode,errmsg) {
        	if ( errcode < 0 ) {
        		alert("svcid = " + svcid + "\n errcode=" + errcode + "\n errmsg=" + errmsg);
        		
        	} else {
        		this.fn_setGlobalMessageInfo();
        	}
        }

        
        this.div_login_rad_lang_onitemchanged = function(obj,e)
        {
        	application.gv_language = obj.value;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LoginFrame_onload, this);
            this.addEventHandler("onsize", this.LoginFrame_onsize, this);
            this.div_login.edt_userId.addEventHandler("onkeyup", this.div_login_edt_userId_onkeyup, this);
            this.div_login.edt_userId.addEventHandler("oneditclick", this.Div00_edt_userId_oneditclick, this);
            this.div_login.edt_userPw.addEventHandler("onkeyup", this.div_login_edt_userPw_onkeyup, this);
            this.div_login.btn_devLogin.addEventHandler("onclick", this.btn_devLogin_onclick, this);
            this.div_login.rad_menuType.addEventHandler("onitemchanged", this.Div00_Radio00_onitemchanged, this);
            this.div_login.rad_lang.addEventHandler("onitemchanged", this.div_login_rad_lang_onitemchanged, this);
            this.div_login.rad_openMenuListType.addEventHandler("onitemchanged", this.Div00_Radio00_onitemchanged, this);

        };

        this.loadIncludeScript("LoginFrame.xfdl", true);

       
    };
}
)();
