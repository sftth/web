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
                this.set_name("Form_Sample_Transaction_Devon");
                this.set_titletext("Sample");
                this._setFormPosition(0,0,1224,498);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static48", "absolute", "0", "53", "143", "31", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("Transaction for Devon");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "142", "53", null, "31", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("LGE.Core.tranDo (oForm, sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback, bShowProgress, bAsync);");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("bold antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "83", "143", "31", null, null, this);
            obj.set_taborder("3");
            obj.set_text("oForm");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "142", "83", null, "31", "0", null, this);
            obj.set_taborder("4");
            obj.set_text("transaction 호출 form");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "113", "143", "31", null, null, this);
            obj.set_taborder("5");
            obj.set_text("sSvcId");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "142", "113", null, "31", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("transaction  고유  ID");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "0", "143", "143", "31", null, null, this);
            obj.set_taborder("7");
            obj.set_text("sUrl");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "142", "143", null, "31", "0", null, this);
            obj.set_taborder("8");
            obj.set_text("서비스 URL");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "0", "173", "143", "31", null, null, this);
            obj.set_taborder("9");
            obj.set_text(" sInDs");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "142", "173", null, "31", "0", null, this);
            obj.set_taborder("10");
            obj.set_text("input dataset (서버용이름=보내는 데이터셋)");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "0", "203", "143", "31", null, null, this);
            obj.set_taborder("11");
            obj.set_text("sOutDs");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "142", "203", null, "31", "0", null, this);
            obj.set_taborder("12");
            obj.set_text("output dataset (받는 데이터셋=서버용이름)");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "0", "233", "143", "31", null, null, this);
            obj.set_taborder("13");
            obj.set_text("sArg");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "142", "233", null, "31", "0", null, this);
            obj.set_taborder("14");
            obj.set_text("파라미터");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "0", "263", "143", "31", null, null, this);
            obj.set_taborder("15");
            obj.set_text("sCallback");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "142", "263", null, "31", "0", null, this);
            obj.set_taborder("16");
            obj.set_text("사후처리 함수명");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "0", "293", "143", "31", null, null, this);
            obj.set_taborder("17");
            obj.set_text("bShowProgress");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "142", "293", null, "31", "0", null, this);
            obj.set_taborder("18");
            obj.set_text("커서 디스플레이 여부");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "0", "323", "143", "31", null, null, this);
            obj.set_taborder("19");
            obj.set_text("bAsync");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "142", "323", null, "31", "0", null, this);
            obj.set_taborder("20");
            obj.set_text("비동기여부 (true : async  false: sync)");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "0", "353", "143", "145", null, null, this);
            obj.set_taborder("21");
            obj.set_text("exercise");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "142", "353", null, "145", "0", null, this);
            obj.set_taborder("22");
            obj.set_text("var sSvcId\t\t= \"SearchSample\";\r\nvar sUrl\t\t            = \"sample/employee/retrieveEmployee.do\";\r\nvar sInDs\t\t= \"dsInput=dsInput\";\r\nvar sOutDs\t\t= \"dsResult=dsResult\";\r\nvar sArg\t\t            = \"\";\r\nvar sCallback \t\t= \"fn_callBack\";\r\nvar bShowProgress\t= true;\r\nvar bAsync\t\t= true;\r\n\r\nLGE.Core.tranDo(this, sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback, bShowProgress, bAsync);");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 498, this,
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Form_Sample_Transaction_Devon.xfdl", true);

       
    };
}
)();
