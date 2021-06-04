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
            obj = new Static("Static48", "absolute", "0", "53", "143", "31", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("20");
            obj.set_text("Transaction for NCD");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "142", "53", null, "31", "0", null, this);
            obj.set_taborder("21");
            obj.set_text("LGE.Core.tran (oForm, sSvcId, sActId,  sInDs, sOutDs, sArg, sCallback, bShowProgress, bAsync);");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("bold antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "83", "143", "31", null, null, this);
            obj.set_taborder("22");
            obj.set_text("oForm");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "142", "83", null, "31", "0", null, this);
            obj.set_taborder("23");
            obj.set_text("transaction 호출 form");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "113", "143", "31", null, null, this);
            obj.set_taborder("24");
            obj.set_text("sSvcId");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "142", "113", null, "31", "0", null, this);
            obj.set_taborder("25");
            obj.set_text("transaction  고유  ID");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "0", "143", "143", "31", null, null, this);
            obj.set_taborder("26");
            obj.set_text("sActId");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "142", "143", null, "31", "0", null, this);
            obj.set_taborder("27");
            obj.set_text("bizacter  아이디(서버모듈과의 약속된 아이디 필요)");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "0", "173", "143", "31", null, null, this);
            obj.set_taborder("28");
            obj.set_text(" sInDs");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "142", "173", null, "31", "0", null, this);
            obj.set_taborder("29");
            obj.set_text("input dataset (서버용이름=보내는 데이터셋)");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "0", "203", "143", "31", null, null, this);
            obj.set_taborder("30");
            obj.set_text("sOutDs");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "142", "203", null, "31", "0", null, this);
            obj.set_taborder("31");
            obj.set_text("output dataset (받는 데이터셋=서버용이름)");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "233", "143", "31", null, null, this);
            obj.set_taborder("32");
            obj.set_text("sArg");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "142", "233", null, "31", "0", null, this);
            obj.set_taborder("33");
            obj.set_text("파라미터");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "263", "143", "31", null, null, this);
            obj.set_taborder("34");
            obj.set_text("sCallback");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "142", "263", null, "31", "0", null, this);
            obj.set_taborder("35");
            obj.set_text("사후처리 함수명");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "293", "143", "31", null, null, this);
            obj.set_taborder("36");
            obj.set_text("bShowProgress");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "142", "293", null, "31", "0", null, this);
            obj.set_taborder("37");
            obj.set_text("커서 디스플레이 여부");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "323", "143", "31", null, null, this);
            obj.set_taborder("38");
            obj.set_text("bAsync");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "142", "323", null, "31", "0", null, this);
            obj.set_taborder("39");
            obj.set_text("비동기여부 (true : async  false: sync)");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "0", "353", "143", "145", null, null, this);
            obj.set_taborder("40");
            obj.set_text("exercise");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "142", "353", null, "145", "0", null, this);
            obj.set_taborder("41");
            obj.set_text("var sSvcId\t\t= \"SearchSample\";\r\nvar sActId\t\t= \"sample/employee/retrieveEmployee.do\";\r\nvar sInDs\t\t= \"dsInput=dsInput\";\r\nvar sOutDs\t\t= \"dsResult=dsResult\";\r\nvar sArg\t\t            = \"\";\r\nvar sCallback \t\t= \"fn_callBack\";\r\nvar bShowProgress\t= true;\r\nvar bAsync\t\t= true;\r\n\r\nLGE.Core.tran(this, sSvcId, sActid, sInDs, sOutDs, sArg, sCallback, bShowProgress, bAsync);");
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
        this.addIncludeScript("transaction_guide.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("transaction_guide.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.COMPONENT_DESC_onload, this);

        };

        this.loadIncludeScript("transaction_guide.xfdl", true);

       
    };
}
)();
