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
                this.set_name("loginFrame");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\"/><Col id=\"PASSWORD\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"5\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_login", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_userId", "absolute", "35.11%", "197", "16.12%", "36", null, null, this.div_login);
            obj.set_taborder("14");
            obj.set_displaynulltext("User ID");
            obj.set_cssclass("edt_Login_ID");
            this.div_login.addChild(obj.name, obj);
            obj = new Edit("edt_userPw", "absolute", "35.11%", "235", "16.12%", "36", null, null, this.div_login);
            obj.set_taborder("15");
            obj.set_password("true");
            obj.set_displaynulltext("Password");
            obj.set_cssclass("edt_Login_PW");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("btn_devLogin", "absolute", "51.31%", "196", "9.25%", "76", null, null, this.div_login);
            obj.set_taborder("16");
            obj.set_text("Login");
            this.div_login.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_login,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");

            	}
            );
            this.div_login.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

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

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("loginFrame.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("loginFrame.xfdl", function(exports) {

        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        
        this.loginFrame_onload = function(obj,e)
        {
        	this.com_fromInit(obj);
        }

        
        this.fn_formInit = function()
        {
        	
        }

        
        this.btn_devLogin_onclick = function(obj,e)
        {
        	if (Base.isEmpty(this.div_login.edt_userId.value))
        	{
        		this.alert("Please Input your ID !!");
        		this.div_login.edt_userId.setFocus();
        		
        		return;
        	}

        	if (Base.isEmpty(this.div_login.edt_userPw.value))
        	{
        		this.alert("Please Input your Password !!");
        		this.div_login.edt_userPw.setFocus();
        		
        		return;
        	}

        	// login check
        	var userId = this.dsLogin.getColumn(0, "USER_ID");
        	var passwd = this.dsLogin.getColumn(0, "PASSWORD");

        	// Devon용
        	var sSvcId			= "SearchSample";
        	var sUrl			= "login/doLogin.ajax";//"sample/second/retrieveEmployee.do";
        	var sInDs			= "IN_PSET=dsLogin";
        	var sOutDs			= "dsUser=OUT_USER";
        	var sArg			= "";
        	var sCallback 		= "fn_callBack";	
        	LGE.Core.tranDo(this, sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback);
        	//
        }

        
        this.fn_callBack = function(svcid,errcode,errmsg) {

        	//alert(svcid);
        	//	alert(errcode);
        	

        	if ( errcode < 0 ) {
        		this.alert("[" + svcid + " : " + errcode + "] " + errmsg);
        		return;
        		
        	} else {
        		switch (svcid)
        		{
        			case "SearchSample" : 
        				this.fn_loginPass();
        			break;
        		}
        	}
        }

        
        // 로그인 성공했을때 호출
        this.fn_loginPass = function()
        {
        	application.gv_userID = this.div_login.edt_userId.value;
        	application.mainframe.vFramesetMain.headFrame.form.fn_loginCheck();	
        }

        
        this.div_login_edt_userId_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		if (Base.isEmpty(obj.value))
        		{
        			this.alert("Please Input your ID !!");
        			obj.setFocus();
        		}
        		else
        		{
        			this.div_login.edt_userPw.setFocus();
        		}
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.loginFrame_onload, this);
            this.div_login.edt_userId.addEventHandler("onkeydown", this.div_login_edt_userId_onkeydown, this);
            this.div_login.btn_devLogin.addEventHandler("onclick", this.btn_devLogin_onclick, this);

        };

        this.loadIncludeScript("loginFrame.xfdl", true);

       
    };
}
)();
