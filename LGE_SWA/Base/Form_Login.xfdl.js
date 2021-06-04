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
                this._setFormPosition(0,0,217,143);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_User", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("Edit_UserID", "absolute", "10", "13", "197", "36", null, null, this);
            obj.set_taborder("1");
            obj.set_displaynulltext("User ID");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_Password", "absolute", "10", "51", "197", "36", null, null, this);
            obj.set_taborder("2");
            obj.set_password("true");
            obj.set_displaynulltext("Password");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Login", "absolute", "10", "90", "94", "40", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Login");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Exit", "absolute", "113", "90", "94", "40", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Exit");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 217, 143, this,
            	//-- Layout function
            	function(p) {
            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Edit_UserID","value","dsLogin","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Edit_Password","value","dsLogin","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Form_Login.xfdl", function(exports) {

        this.Button_Exit_onclick = function(obj,e)
        {
        	if (this.confirm("시스템을 종료하시겠습니까?"))
        	{
        		application.exit();
        	}
        }

        this.Edit_UserID_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		if (application.gfn_ValidCheck(obj.value))
        		{
        			this.getNextComponent(obj).setFocus();
        		}
        		else
        		{
        			this.alert("UserID 를 입력하세요.");
        			return;
        		}
        	}
        }

        this.Edit_Password_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		if (application.gfn_ValidCheck(obj.value))
        		{
        			this.Button_Login_onclick();
        		}
        		else
        		{
        			this.alert("Password 를 입력하세요.");
        			return;
        		}
        	}
        }

        this.Button_Login_onclick = function(obj,e)
        {
        	application.gv_Query = "select * from user";
        	application.gv_Query += " where user_id = '" + this.Edit_UserID.value + "'";
        	application.gv_Query += "   and password = '" + this.Edit_Password.value + "'";

        	this.transaction("search_login" ,"host::LGE_SWA/Service/search.jsp","","ds_User=ds_out","","fn_Callback");
        }

        this.fn_Callback = function(SvcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0)
        	{
        		alert(SvcID + " : [" + ErrorCode + "] " + ErrorMsg);
        		return;
        	}
        	
        	if (SvcID == "search_login")
        	{
        		if (this.ds_User.rowcount <= 0)
        		{
        			this.alert("사용자 정보가 없습니다. \n\r\n\r아이디/패스워드를 다시한번 확인해 주십시오.");
        			return;
        		}
        		else
        		{
        			application.gv_User_ID = this.ds_User.getColumn(0, "USER_ID");
        			application.gv_User_NM = this.ds_User.getColumn(0, "USER_NM");
        			this.alert("[" + application.gv_User_NM + "] 님 환영합니다.");
        			this.close("SUCCESS");
        			
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Edit_UserID.addEventHandler("onkeydown", this.Edit_UserID_onkeydown, this);
            this.Edit_Password.addEventHandler("onkeydown", this.Edit_Password_onkeydown, this);
            this.Button_Login.addEventHandler("onclick", this.Button_Login_onclick, this);
            this.Button_Exit.addEventHandler("onclick", this.Button_Exit_onclick, this);

        };

        this.loadIncludeScript("Form_Login.xfdl", true);

       
    };
}
)();
