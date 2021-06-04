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
                this.set_name("Form_Login");
                this.set_titletext("Intro Page");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\">guest</Col><Col id=\"PASSWORD\">guest123</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"5\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Div("div_Login", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_userId", "absolute", "10", "13", "197", "36", null, null, this.div_Login);
            obj.set_taborder("24");
            obj.set_displaynulltext("User ID");
            obj.set_cssclass("edt_Login_ID");
            this.div_Login.addChild(obj.name, obj);
            obj = new Edit("edt_userPw", "absolute", "10", "51", "197", "36", null, null, this.div_Login);
            obj.set_taborder("25");
            obj.set_password("true");
            obj.set_displaynulltext("Password");
            obj.set_cssclass("edt_Login_PW");
            this.div_Login.addChild(obj.name, obj);
            obj = new Button("btn_devLogin", "absolute", "208", "12", "113", "76", null, null, this.div_Login);
            obj.set_taborder("26");
            obj.set_text("Login");
            this.div_Login.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer_Intro", "absolute", "13.18%", "30.6%", null, null, "13.18%", "30.47%", this.div_Login);
            obj.set_taborder("27");
            obj.set_image("URL('images::LGE_NEXA_CI.png')");
            obj.style.set_border("0 solid #afafafff");
            this.div_Login.addChild(obj.name, obj);
            obj = new Radio("rad_menuType", "absolute", "146", "125", "512", "18", null, null, this.div_Login);
            this.div_Login.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_innerdataset("dsMenuType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_value("Default");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Radio("rad_lang", "absolute", "146", "101", "256", "18", null, null, this.div_Login);
            this.div_Login.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_innerdataset("dsLanguage");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_value("KR");
            obj.set_direction("vertical");
            obj.set_index("1");
            obj = new Static("sta_language", "absolute", "15", "98", "104", "24", null, null, this.div_Login);
            obj.set_taborder("30");
            obj.set_text("Language");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div_Login.addChild(obj.name, obj);
            obj = new Static("sta_menuType", "absolute", "15", "122", "104", "24", null, null, this.div_Login);
            obj.set_taborder("31");
            obj.set_text("Menu Type");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div_Login.addChild(obj.name, obj);
            obj = new Static("sta_menuType00", "absolute", "15", "146", "104", "24", null, null, this.div_Login);
            obj.set_taborder("32");
            obj.set_text("Open Menu List");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div_Login.addChild(obj.name, obj);
            obj = new Radio("rad_openMenuListType", "absolute", "146", "149", "256", "18", null, null, this.div_Login);
            this.div_Login.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_innerdataset("dsOpenMenuListType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_value("Top");
            obj.set_direction("vertical");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Login,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");

            	}
            );
            this.div_Login.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Intro Page");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","div_login.edt_userId","value","dsLogin","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_login.edt_userPw","value","dsLogin","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_Login.edt_userId","value","dsLogin","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_Login.edt_userPw","value","dsLogin","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Form_Login.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("Form_Login.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : Form_Login.xfdl
        * PROGRAMMER  : 
        * DATE        : 2018-04-19
        * DESCRIPTION : Login 
        * to do check : - 사용자 확인 transaction
                        - SSO 사용자 로그인 처리 transaction
                        - 로그인전 확보해야 할 정보 (메뉴, 공통코드, 메세지등)
                        - 사용자 확인 및 사전정보가 확보되면 최종적으로 application.afn_loginPass(); 호출
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

        // Form onload
        this.Form_Login_onload = function(obj,e)
        {
        	// UserId 와 MenuId 를 받았을 경우
        	if(!Base.isEmpty(application.gv_linkuserid) && !Base.isEmpty(application.gv_linkmenuid))
        	{
        		this.fn_ssoLogin();	//sso_login
        	} 	
        }

        // [sso_login] SSO
        this.fn_ssoLogin = function()
        {
        	this.dsLogin.clearData();
        	this.dsLogin.addRow();
        	
        	this.dsLogin.setColumn(0,"SSO_USER_ID" , application.gv_userid);
        	this.dsLogin.setColumn(0,"SSO_USER_KEY", application.gv_userkey);

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

        this.fn_callBack = function(SvcId,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) 
        	{
        		if (ErrorCode == -3)
        		{
        			this.alert("Login failed. \n\nPlease check your ID or password.");
        		} 
         		else 
         		{
        			this.alert("[" + SvcId + ":" + ErrorCode + "] " + ErrorMsg);
         		}
        		return;
        	} 
        	else 
        	{
        		// 설정
        		application.gv_language 		= this.div_Login.rad_lang.value;
        		application.gv_menuType 		= this.div_Login.rad_menuType.value;
        		application.gv_openMenuListType = this.div_Login.rad_openMenuListType.value;
        		
        		//글로벌 변수에 세션정보 세팅
        		this.fn_setGlobalUserInfo();	// set_1
        		
        		// 최종 로그인 통과
        		application.afn_loginPass();	// pass_1
        	}
        }

        // [set_1] 글로벌 변수에 세션정보 세팅
        this.fn_setGlobalUserInfo = function() 
        {
        	//기존정보 삭제처리
        	application.gds_userInfo.clearData();
        	application.gds_userInfo.addRow();

        	//변수 세팅
        	application.gds_userInfo.setColumn(0, "USER_ID"	, this.dsUser.getColumn(0, "USER_ID"));
        	application.gds_userInfo.setColumn(0, "USER_NM"	, this.dsUser.getColumn(0, "USER_NM"));
        	application.gds_userInfo.setColumn(0, "EMP_NO"	, this.dsUser.getColumn(0, "EMP_NO"));
        	application.gds_userInfo.setColumn(0, "TEL_NO"	, this.dsUser.getColumn(0, "TEL_NO"));
        }

        // Login
        this.div_Login_btn_devLogin_onclick = function(obj,e)
        {
        	if (!this.fn_checkValid())	// check_1
        	{
        		return;
        	}

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

        // [check_1] Validation Check
        this.fn_checkValid = function()
        {
        	if (Base.isEmpty(this.div_Login.edt_userId.value))
        	{
        		this.alert("Please enter ID");
        		this.div_Login.edt_userId.setFocus();
        		return false;
        	}
        	
        	if (Base.isEmpty(this.div_Login.edt_userPw.value))
        	{
        		this.alert("Please enter Password");
        		this.div_Login.edt_userPw.setFocus();
        		return false;
        	}	
        	
        	return true;
        }

        this.div_Login_edt_userId_onkeyup = function(obj,e)
        {
        	this.dsLogin.setColumn(0,"USER_ID", obj.value);
        }

        this.div_Login_edt_userPw_onkeyup = function(obj,e)
        {
        	this.dsLogin.setColumn(0,"PASSWORD", obj.value);
        }

        this.div_Login_rad_lang_onitemchanged = function(obj,e)
        {
        	application.gv_language = obj.value;
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_Login_onload, this);
            this.div_Login.edt_userId.addEventHandler("onkeyup", this.div_Login_edt_userId_onkeyup, this);
            this.div_Login.edt_userPw.addEventHandler("onkeyup", this.div_Login_edt_userPw_onkeyup, this);
            this.div_Login.btn_devLogin.addEventHandler("onclick", this.div_Login_btn_devLogin_onclick, this);
            this.div_Login.rad_lang.addEventHandler("onitemchanged", this.div_Login_rad_lang_onitemchanged, this);

        };

        this.loadIncludeScript("Form_Login.xfdl", true);

       
    };
}
)();
