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
                this.set_name("COMPONENT_DESC");
                this.set_classname("COMPONENT_DESC");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,498);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">ㅁㅁ</Col><Col id=\"Column2\">AA</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">ㅍㅍ</Col><Col id=\"Column2\">bb</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCategory", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">M</Col><Col id=\"VALUE\">남자</Col></Row><Row><Col id=\"CODE\">F</Col><Col id=\"VALUE\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_NM\"/><Col id=\"CD_TYPE\">M</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static48", "absolute", "0", "53", "143", "95", null, null, this);
            obj.set_taborder("46");
            obj.set_text("message 처리방법1 \r\n(callback 함수선언) ");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "142", "53", null, "95", "0", null, this);
            obj.set_taborder("47");
            obj.set_text("LGE.Core.showAlert(oForm, sMsgID, sParam, sMsgCallBack);\r\nLGE.Core.showConfirm(oForm, sMsgID, sParam, sMsgCallBack);\r\nLGE.Core.showError(oForm, sMsgID, sParam, sMsgCallBack);\r\nvar sMsg = LGE.Biz.getTranslateStr(sMsgID, \"aaa,bbb\");");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("48");
            obj.set_text("Message");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "0", "147", "143", "95", null, null, this);
            obj.set_taborder("49");
            obj.set_text("message 처리방법2 \r\n(callback 함수기술) ");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "142", "147", null, "95", "0", null, this);
            obj.set_taborder("50");
            obj.set_text("LGE.Core.showConfirm(this, \"GRMS00002\", \"aaa,bbb\", function (sPopupId, sResult) {\r\n\tif(sResult == \"OK\") {\r\n\t\talert(\"next~~~~\");\r\n\t}\r\n});");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "0", "241", "143", "31", null, null, this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WFDA_Label");
            obj.set_text("oFrom (object)");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "142", "241", null, "31", "0", null, this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WFDA_Data");
            obj.set_text("message 호출 form");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "0", "271", "143", "31", null, null, this);
            obj.set_taborder("53");
            obj.set_text("sMsgID (string)");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "142", "271", null, "31", "0", null, this);
            obj.set_taborder("54");
            obj.set_text("message code");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "0", "301", "143", "31", null, null, this);
            obj.set_taborder("55");
            obj.set_text("sParam (string)");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "142", "301", null, "31", "0", null, this);
            obj.set_taborder("56");
            obj.set_text("param");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "0", "331", "143", "31", null, null, this);
            obj.set_taborder("57");
            obj.set_text("fCallback (string)");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "142", "331", null, "31", "0", null, this);
            obj.set_taborder("58");
            obj.set_text("message 호출후 사후처리 함수");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "361", "143", "93", null, null, this);
            obj.set_taborder("59");
            obj.set_text("사후처리 함수");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "142", "361", null, "31", "0", null, this);
            obj.set_taborder("60");
            obj.set_text("호출하는 화면에 4번째 인자의 함수가 존재해야 한다.");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "142", "391", null, "63", "0", null, this);
            obj.set_taborder("61");
            obj.set_text("this.fn_msgCallBAck = function(sReturn)\r\n{\r\n\talert(sReturn);  // OK : 확인버튼을 눌러 닫았을때, Cancel : X나 취소버튼을 눌러 닫았을때\r\n}");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "453", "143", "121", null, null, this);
            obj.set_taborder("62");
            obj.set_text("message 종류");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "142", "453", null, "31", "0", null, this);
            obj.set_taborder("63");
            obj.set_text("LGE.Core.showAlert");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "142", "483", null, "31", "0", null, this);
            obj.set_taborder("64");
            obj.set_text("LGE.Core.showConfirm");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "142", "513", null, "31", "0", null, this);
            obj.set_taborder("65");
            obj.set_text("LGE.Core.showError");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "142", "543", null, "31", "0", null, this);
            obj.set_taborder("66");
            obj.set_text(" LGE.Biz.getTranslateStr");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "47.63%", "456", null, "26", "42.57%", null, this);
            obj.set_taborder("67");
            obj.set_text("alert");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "47.63%", "485", null, "26", "42.57%", null, this);
            obj.set_taborder("68");
            obj.set_text("confirm");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "47.63%", "516", null, "26", "42.57%", null, this);
            obj.set_taborder("69");
            obj.set_text("error");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "47.63%", "545", null, "26", "42.57%", null, this);
            obj.set_taborder("70");
            obj.set_text("메세지 받기");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "57.84%", "548", null, "20", "13.07%", null, this);
            obj.set_taborder("71");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "573", "143", "91", null, null, this);
            obj.set_taborder("72");
            obj.set_text("message 종류");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "142", "573", null, "31", "0", null, this);
            obj.set_taborder("73");
            obj.set_text("3번째 인자에 ,로 구분하여 치환대상 문자 나열한다.");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "142", "603", null, "31", "0", null, this);
            obj.set_taborder("74");
            obj.set_text("데에터셋에는 #으로 치환 대상 문자로 등록되어야 한다.");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "142", "633", null, "31", "0", null, this);
            obj.set_taborder("75");
            obj.set_text("호출시 3번째 인자의 수와, 데이터셋의 #문자의 개수가 일치해야 한다.");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 498, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("COMPONENT_DESC");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("message_guide.xfdl", function(exports) {

        // showAlert
        this.Button00_onclick = function(obj,e)
        {
        	// 방법1. callback 함수 선언
        	LGE.Core.showAlert(this, "GRMS00009", "aaa,bbb", "fn_msgCallBack");

        
        	// 방법2. callback 함수 기술
        // 	LGE.Core.showAlert(this, "GRMS00009", "aaa,bbb", function (sPopupId, sResult) {
        // 		if(sResult == "OK") {
        // 			alert("next~~~~");
        // 		}
        // 	});
        }

        // showConfirm
        this.Button01_onclick = function(obj,e)
        {
        	// 방법1. callback 함수 선언
        	//LGE.Core.showConfirm(this, "GRMS00009", "aaa,bbb", "fn_msgCallBack");

        	// 방법2. callback 함수 기술
        	LGE.Core.showConfirm(this, "GRMS00002", "aaa,bbb", function (sPopupId, sResult) {
        		if(sResult == "OK") {
        			alert("next~~~~");
        		}
        	});
        }

        // showError
        this.Button02_onclick = function(obj,e)
        {
        	// 방법1. callback 함수 선언
        	//LGE.Core.showError(this, "GRMS00009", "aaa,bbb", "fn_msgCallBack");

        	// 방법2. callback 함수 기술
        	LGE.Core.showError(this, "GRMS00009", "aaa,bbb", function (sPopupId, sResult) {
        		if(sResult == "OK") {
        			alert("next~~~~");
        		}
        	});
        }

        
        this.fn_msgCallBack = function(sPopupId,sResult)
        {
        	if(sResult == "OK") {
        		alert("functioni next~~~~");
        	};
        }

        
        this.Button03_onclick = function(obj,e)
        {
        	var sMsg = LGE.Biz.getTranslateStr("GRMS00002", "aaa,bbb");
        	this.Edit00.set_value(sMsg);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.COMPONENT_DESC_onload, this);
            this.Button04.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button06.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button07.addEventHandler("onclick", this.Button03_onclick, this);

        };

        this.loadIncludeScript("message_guide.xfdl", true);

       
    };
}
)();
