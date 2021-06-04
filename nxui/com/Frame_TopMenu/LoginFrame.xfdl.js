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
                this.set_classname("introFrame");
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


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_userId", "absolute", "10", "13", "197", "36", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_displaynulltext("User ID");
            obj.set_cssclass("edt_Login_ID");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edt_userPw", "absolute", "10", "51", "197", "36", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_password("true");
            obj.set_displaynulltext("Password");
            obj.set_cssclass("edt_Login_PW");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_devLogin", "absolute", "208", "12", "113", "76", null, null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("Login");
            this.Div00.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "1.43%", "98", null, "18", "75.08%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("@dsLanguage");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_direction("vertical");
            obj.set_value("KR");
            obj = new ImageViewer("ImageViewer00", "absolute", "13.17%", "30.62%", null, null, "13.17%", "30.46%", this.Div00);
            obj.set_taborder("6");
            obj.set_image("URL('images::LGE_NEXA_CI.png')");
            obj.style.set_border("0 solid #afafafff");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

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

        /*
        this.btn_devLogin_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        {

        	// 임시처리
        	application.gv_language = this.Div00.Radio00.value;
        	application.afn_loginPass();
        }
        */

        
        //this.btn_login_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
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
        	if(Base.isEmpty(this.Div00.edt_userId.value))
        	{
        		alert("Please enter ID");
        		this.Div00.edt_userId.setFocus();
        		return false;
        	}
        	
        	if(Base.isEmpty(this.Div00.edt_userPw.value))
        	{
        		alert("Please enter Password");
        		this.Div00.edt_userPw.setFocus();
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

        	if ( errcode == -3 ) {
        		alert("Login failed. \n\nPlease check your ID or password.");
        		return;
        	} else {
        	
        		//언어정보 글로벌 세팅
        		//gv_language = this.dsUser.getColumn(0,"LANG_CD");
        		
        		//글로벌 변수에 세션정보 세팅
        		this.fn_setGlobalUserInfo();	
        		
        		//메뉴 정보 조회
        		//this.fn_setGlobalMenuInfo();
        		
        		
        		//다른 화면 호출
        		application.gv_language = this.Div00.Radio00.value;
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
        	/*
        	application.gds_userInfo.setColumn(0, "ENG_EMP_NM"           , this.dsUser.getColumn(0, "ENG_EMP_NM"           ));
        	application.gds_userInfo.setColumn(0, "EMP_STAT_CD"          , this.dsUser.getColumn(0, "EMP_STAT_CD"          ));
        	application.gds_userInfo.setColumn(0, "EMAIL_ADDR"           , this.dsUser.getColumn(0, "EMAIL_ADDR"           ));
        	application.gds_userInfo.setColumn(0, "COMP_CD"              , this.dsUser.getColumn(0, "COMP_CD"              ));
        	application.gds_userInfo.setColumn(0, "LANG_CD"              , this.dsUser.getColumn(0, "LANG_CD"              ));
        	application.gds_userInfo.setColumn(0, "TIME_ZONE_CD"         , this.dsUser.getColumn(0, "TIME_ZONE_CD"         ));
        	application.gds_userInfo.setColumn(0, "DATE_FORMAT_TYPE"     , this.dsUser.getColumn(0, "DATE_FORMAT_TYPE"     ));
        	application.gds_userInfo.setColumn(0, "NUM_FORMAT_TYPE"      , this.dsUser.getColumn(0, "NUM_FORMAT_TYPE"      ));
        	application.gds_userInfo.setColumn(0, "CURR_CD"              , this.dsUser.getColumn(0, "CURR_CD"              ));
        	application.gds_userInfo.setColumn(0, "ROLE_CD"              , this.dsUser.getColumn(0, "ROLE_CD"              ));
        	application.gds_userInfo.setColumn(0, "DATE_FORMAT"          , this.dsUser.getColumn(0, "DATE_FORMAT"          ));
        	application.gds_userInfo.setColumn(0, "NUM_FORMAT"           , this.dsUser.getColumn(0, "NUM_FORMAT"           ));
        	application.gds_userInfo.setColumn(0, "HR_BIZPLC_CD"         , this.dsUser.getColumn(0, "HR_BIZPLC_CD"         ));
        	application.gds_userInfo.setColumn(0, "CNTRY_CD"             , this.dsUser.getColumn(0, "CNTRY_CD"             ));
        	application.gds_userInfo.setColumn(0, "CNTRY_NM"             , this.dsUser.getColumn(0, "CNTRY_NM"             ));
        	application.gds_userInfo.setColumn(0, "COMP_NM"              , this.dsUser.getColumn(0, "COMP_NM"              ));
        	application.gds_userInfo.setColumn(0, "USER_LOGIN_ID"        , this.dsUser.getColumn(0, "USER_LOGIN_ID"        ));
        	application.gds_userInfo.setColumn(0, "USER_AFFILIATE_CODE"  , this.dsUser.getColumn(0, "USER_AFFILIATE_CODE"  ));
        	application.gds_userInfo.setColumn(0, "USER_AU_CODE"         , this.dsUser.getColumn(0, "USER_AU_CODE"         ));
        	application.gds_userInfo.setColumn(0, "USER_DEPARTMENT_CODE" , this.dsUser.getColumn(0, "USER_DEPARTMENT_CODE" ));
        	application.gds_userInfo.setColumn(0, "USER_DEPARTMENT_NAME" , this.dsUser.getColumn(0, "USER_DEPARTMENT_NAME" ));
        	*/
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

        
        this.Div00_Radio00_onitemchanged = function(obj,e)
        {
        	application.gv_language = obj.value;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LoginFrame_onload, this);
            this.addEventHandler("onsize", this.LoginFrame_onsize, this);
            this.Div00.edt_userId.addEventHandler("onkeyup", this.div_login_edt_userId_onkeyup, this);
            this.Div00.edt_userId.addEventHandler("oneditclick", this.Div00_edt_userId_oneditclick, this);
            this.Div00.edt_userPw.addEventHandler("onkeyup", this.div_login_edt_userPw_onkeyup, this);
            this.Div00.btn_devLogin.addEventHandler("onclick", this.btn_devLogin_onclick, this);
            this.Div00.Radio00.addEventHandler("onitemchanged", this.Div00_Radio00_onitemchanged, this);

        };

        this.loadIncludeScript("LoginFrame.xfdl", true);

       
    };
}
)();
