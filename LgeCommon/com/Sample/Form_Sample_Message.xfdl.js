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
                this.set_name("Form_Sample_Message");
                this.set_titletext("Sample");
                this._setFormPosition(0,0,1224,524);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static48", "absolute", "0", "53", "143", "95", null, null, this);
            obj.set_taborder("0");
            obj.set_text("message 처리방법1 \r\n(callback 함수선언) ");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "142", "53", null, "95", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("LGE.Core.showAlert(oForm, sMsgID, sParam, sMsgCallBack);\r\nLGE.Core.showConfirm(oForm, sMsgID, sParam, sMsgCallBack);\r\nLGE.Core.showError(oForm, sMsgID, sParam, sMsgCallBack);\r\nvar sMsg = LGE.Biz.getTranslateStr(sMsgID, \"aaa,bbb\");");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("Message");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "0", "147", "143", "95", null, null, this);
            obj.set_taborder("3");
            obj.set_text("message 처리방법2 \r\n(callback 함수기술) ");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "142", "147", null, "95", "0", null, this);
            obj.set_taborder("4");
            obj.set_text("LGE.Core.showConfirm(this, \"GRMS00002\", \"aaa,bbb\", function (sPopupId, sResult) {\r\n\tif(sResult == \"OK\") {\r\n\t\talert(\"next~~~~\");\r\n\t}\r\n});");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "0", "241", "143", "31", null, null, this);
            obj.set_taborder("5");
            obj.set_text("oFrom (object)");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "142", "241", null, "31", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("message 호출 form");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "0", "271", "143", "31", null, null, this);
            obj.set_taborder("7");
            obj.set_text("sMsgID (string)");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "142", "271", null, "31", "0", null, this);
            obj.set_taborder("8");
            obj.set_text("message code");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "0", "301", "143", "31", null, null, this);
            obj.set_taborder("9");
            obj.set_text("sParam (string)");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "142", "301", null, "31", "0", null, this);
            obj.set_taborder("10");
            obj.set_text("param");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "0", "331", "143", "31", null, null, this);
            obj.set_taborder("11");
            obj.set_text("fCallback (string)");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "142", "331", null, "31", "0", null, this);
            obj.set_taborder("12");
            obj.set_text("message 호출후 사후처리 함수");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "361", "143", "93", null, null, this);
            obj.set_taborder("13");
            obj.set_text("사후처리 함수");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "142", "361", null, "31", "0", null, this);
            obj.set_taborder("14");
            obj.set_text("호출하는 화면에 4번째 인자의 함수가 존재해야 한다.");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "142", "391", null, "63", "0", null, this);
            obj.set_taborder("15");
            obj.set_text("this.fn_msgCallBAck = function(sReturn)\r\n{\r\n\talert(sReturn);  // OK : 확인버튼을 눌러 닫았을때, Cancel : X나 취소버튼을 눌러 닫았을때\r\n}");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "453", "143", "121", null, null, this);
            obj.set_taborder("16");
            obj.set_text("message 종류");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "142", "453", null, "31", "0", null, this);
            obj.set_taborder("17");
            obj.set_text("LGE.Core.showAlert");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "142", "483", null, "31", "0", null, this);
            obj.set_taborder("18");
            obj.set_text("LGE.Core.showConfirm");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "142", "513", null, "31", "0", null, this);
            obj.set_taborder("19");
            obj.set_text("LGE.Core.showError");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "142", "543", null, "31", "0", null, this);
            obj.set_taborder("20");
            obj.set_text(" LGE.Biz.getTranslateStr");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Alert", "absolute", "47.57%", "456", null, "26", "42.7%", null, this);
            obj.set_taborder("21");
            obj.set_text("alert");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm", "absolute", "47.57%", "485", null, "26", "42.7%", null, this);
            obj.set_taborder("22");
            obj.set_text("confirm");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Error", "absolute", "47.57%", "516", null, "26", "42.7%", null, this);
            obj.set_taborder("23");
            obj.set_text("error");
            this.addChild(obj.name, obj);

            obj = new Button("btn_GetMessage", "absolute", "47.57%", "545", null, "26", "42.7%", null, this);
            obj.set_taborder("24");
            obj.set_text("메세지 받기");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Message", "absolute", "57.84%", "548", null, "20", "12.97%", null, this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "573", "143", "91", null, null, this);
            obj.set_taborder("26");
            obj.set_text("message 종류");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "142", "573", null, "31", "0", null, this);
            obj.set_taborder("27");
            obj.set_text("3번째 인자에 ,로 구분하여 치환대상 문자 나열한다.");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "142", "603", null, "31", "0", null, this);
            obj.set_taborder("28");
            obj.set_text("데에터셋에는 #으로 치환 대상 문자로 등록되어야 한다.");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "142", "633", null, "31", "0", null, this);
            obj.set_taborder("29");
            obj.set_text("호출시 3번째 인자의 수와, 데이터셋의 #문자의 개수가 일치해야 한다.");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 524, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Sample");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Form_Sample_Message.xfdl", function(exports) {

        // showalert
        this.btn_Alert_onclick = function(obj,e)
        {
        	LGE.Core.showAlert(this, "LGE00001", "aaa,bbb", "fn_msgCallBack");
        }

        // message callback
        this.fn_msgCallBack = function(sPopupId,sResult)
        {
        	if(sResult == "OK") 
        	{
        		this.alert("function next~~~~");
        	};
        }
        this.btn_Confirm_onclick = function(obj,e)
        {
        	LGE.Core.showConfirm(this, "LGE00002", "aaa,bbb", "fn_msgCallBack");
        }

        this.btn_Error_onclick = function(obj,e)
        {
        	// 내부 Callback Function 처리
        	LGE.Core.showError(this, "LGE00003", "aaa,bbb", function (sPopupId, sResult) {
        		if(sResult == "OK") {
        			alert("Error Confirm !!!");
        		}
        	});
        }

        this.btn_GetMessage_onclick = function(obj,e)
        {
        	var sMsg = LGE.Biz.getTranslateStr("LGE00004 : 엘지전자", "aaa,bbb");
        	this.edt_Message.set_value(sMsg);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Alert.addEventHandler("onclick", this.btn_Alert_onclick, this);
            this.btn_Confirm.addEventHandler("onclick", this.btn_Confirm_onclick, this);
            this.btn_Error.addEventHandler("onclick", this.btn_Error_onclick, this);
            this.btn_GetMessage.addEventHandler("onclick", this.btn_GetMessage_onclick, this);

        };

        this.loadIncludeScript("Form_Sample_Message.xfdl", true);

       
    };
}
)();
