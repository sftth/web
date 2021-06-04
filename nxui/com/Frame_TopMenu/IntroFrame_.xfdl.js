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
                this._setFormPosition(0,0,1260,564);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">3</Col></Row><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">4</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">5</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">6</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">7</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">8</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static10", "absolute", "0", "0", null, "23", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("h23");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "0", "20", null, null, "0", this);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "0", "20", null, "0", "0", this);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00", "absolute", "20", "63", null, null, "20", "20", this);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_tabjustify("true");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("소개");
            this.Tab00.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "0", "0", null, null, "0", "0", this.Tab00.tabpage1);
            obj.set_taborder("0");
            obj.set_value("\r\n 1. 메뉴가 상단에 위치한 프레임구조로 제작되었다.\r\n\r\n 2. 프레임(메뉴, MDI, 업무화면, 화면전환, Intro화면)을 제어하는 기능을 포함하고 있다.\r\n\r\n 3. Grid \r\n      - 필터\r\n      - 소트 \r\n      - 전체체크\r\n      - 틀고정\r\n      - 컬럼숨기기\r\n\r\n     Combo \r\n      - 코드+코드명 동시표현,\r\n      - 멀티선택\r\n\r\n     Calendar \r\n      - 기간일력\r\n      - 월력\r\n      - 기간월력\r\n\r\n     위 기능이 포함된 사용자 컴포넌트를 포함하고 있다.\r\n\r\n 4. 팝업\r\n    화면링크\r\n    엑셀업/다운로드의\r\n    기능을 공통으로 수행하는 표준이 포함되어 있다.\r\n\r\n\r\n 5. 데이터와 연계되는 기능\r\n    메시지, 다국어, 파일 업/다운로드을 제공하고 있으나 \r\n    프로젝트의 환경에 따라 변경될 수 있다.\r\n\r\n\r\n 6. 화면 페턴별\r\n    조회영역 Top 배치 7본,\r\n    조회영역 Left 배치 7본, \r\n    총 14본의 템플릿을 제공하고 있습니다.\r\n\r\n\r\n 7. 패키지 내에서 제공되는 theme(디자인 구성요소) 이외의 구성요소를 제공하지 않는다.\r\n\r\n\r\n8. 3Part 제품(TagFree, rMateChart)은 넥사크로 연동의 표준을 제공하나, \r\n    각제품의 사용 또는 기술에 대한문의는 개발사에 문의해야 한다.\r\n\r\n    TagFree\r\n     - http://www.tagfree.com/\r\n     - 02-539-8871\r\n\r\n    rMateChart\r\n     - http://www.riamore.net/\r\n     - 02-2655-9767\r\n\r\n");
            obj.set_readonly("true");
            obj.style.set_border("1 none #aaadbbff");
            obj.style.set_font("antialias 12 LG스마트체,Arial");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("도입효과");
            this.Tab00.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "0", "0", null, null, "0", "0", this.Tab00.tabpage2);
            obj.set_taborder("0");
            obj.set_value("\r\n- 넥사크로 공통개발자를 투입하지 않고 프로젝트를 진행할 수 있다.\r\n  시간단축, 인력비용 절감\r\n\r\n- 패키지 변경사항이 많아 넥사크로 공통개발자를 투입되더라도 2~3개월정도 시간을 단축시킬수 있다.\r\n  시간단축");
            obj.set_readonly("true");
            obj.style.set_border("1 none #aaadbbff");
            obj.style.set_font("antialias 12 LG스마트체,Arial");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab00);
            obj.set_text("고려사항");
            this.Tab00.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "0", "0", null, null, "0", "0", this.Tab00.tabpage3);
            obj.set_taborder("0");
            obj.set_value("\r\n화면개발자\r\n - 본 넥사크로 패키지로 프로젝트를 진행하려면 넥사크로 개발경력은 필수입니다.\r\n\r\n\r\n디자이너 or 퍼블리셔\r\n - 본 넥사크로 패키지 디자인을 변경하려면 디자이너 or 퍼블리셔가 필요할 수 있다.\r\n\r\n\r\n공통개발자\r\n - 본 넥사크로 패키지 공통영역의 추가개발, 변경이 필요하다면 공통개발자가 필요할 수 있다.");
            obj.set_readonly("true");
            obj.style.set_border("1 none #aaadbbff");
            obj.style.set_font("antialias 12 LG스마트체,Arial");
            this.Tab00.tabpage3.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.Tab00);
            obj.set_text("History");
            this.Tab00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "38", null, "29", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WFDA_Data");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0%", "38", "12.3%", "29", null, null, this.Tab00.tabpage4);
            obj.set_taborder("4");
            obj.set_text("Description");
            obj.set_cssclass("sta_WFDA_Label");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "0", "37", null, "2", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("11");
            obj.style.set_background("#4f5670ff");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "66", null, "29", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WFDA_Data");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "12.46%", "42", "87.13%", "21", null, null, this.Tab00.tabpage4);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_value("넥사크로 패키기 개발 착수");
            obj.style.set_padding("3 0 0 3");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new TextArea("TextArea01", "absolute", "12.46%", "70", "87.13%", "21", null, null, this.Tab00.tabpage4);
            obj.set_taborder("17");
            obj.style.set_padding("3 0 0 3");
            obj.set_readonly("true");
            obj.set_value("LG전자 산하 넥사크로 도입 시스템 수집 및 점검");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0%", "66", "12.3%", "29", null, null, this.Tab00.tabpage4);
            obj.set_taborder("20");
            obj.set_text("Remark");
            obj.set_cssclass("sta_WFDA_Label");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "1", "14", "100", "21", null, null, this.Tab00.tabpage4);
            obj.set_taborder("21");
            obj.set_text("2016-08");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("antialias bold 12 LG스마트체,Arial");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "134", null, "29", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WFDA_Data");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0%", "134", "12.3%", "29", null, null, this.Tab00.tabpage4);
            obj.set_taborder("23");
            obj.set_text("Description");
            obj.set_cssclass("sta_WFDA_Label");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0", "133", null, "2", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("25");
            obj.style.set_background("#4f5670ff");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new TextArea("TextArea03", "absolute", "12.46%", "138", "87.13%", "21", null, null, this.Tab00.tabpage4);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_value("LG전자 넥사크로 패키기 배포");
            obj.style.set_padding("3 0 0 3");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "1", "110", "100", "21", null, null, this.Tab00.tabpage4);
            obj.set_taborder("31");
            obj.set_text("2016-10");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("antialias bold 12 LG스마트체,Arial");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "162", null, "29", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WFDA_Data");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new TextArea("TextArea04", "absolute", "12.46%", "166", "87.13%", "21", null, null, this.Tab00.tabpage4);
            obj.set_taborder("57");
            obj.set_value("최초배포");
            obj.set_readonly("true");
            obj.style.set_padding("3 0 0 3");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0%", "162", "12.3%", "29", null, null, this.Tab00.tabpage4);
            obj.set_taborder("58");
            obj.set_text("Remark");
            obj.set_cssclass("sta_WFDA_Label");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "230", null, "29", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WFDA_Data");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0%", "230", "12.3%", "29", null, null, this.Tab00.tabpage4);
            obj.set_taborder("60");
            obj.set_text("Description");
            obj.set_cssclass("sta_WFDA_Label");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0", "229", null, "2", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("61");
            obj.style.set_background("#4f5670ff");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new TextArea("TextArea02", "absolute", "12.46%", "234", "87.13%", "21", null, null, this.Tab00.tabpage4);
            obj.set_taborder("62");
            obj.set_value("LG전자 넥사크로 패키기 변경");
            obj.set_readonly("true");
            obj.style.set_padding("3 0 0 3");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "1", "206", "100", "21", null, null, this.Tab00.tabpage4);
            obj.set_taborder("63");
            obj.set_text("2016-11");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("antialias bold 12 LG스마트체,Arial");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "258", null, "77", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WFDA_Data");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new TextArea("TextArea05", "absolute", "12.46%", "262", "87.13%", "69", null, null, this.Tab00.tabpage4);
            obj.set_taborder("65");
            obj.set_value("그리드 필터 모듈 개선\r\n - 대소문자 구분없이 필터 가능하게 수정\r\n - 콤보박스의 경우 콤보의 Data로 필터가능하게 수정\r\n - 기타 버그사항 수정");
            obj.set_readonly("true");
            obj.style.set_padding("3 0 0 3");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0%", "258", "12.3%", "77", null, null, this.Tab00.tabpage4);
            obj.set_taborder("66");
            obj.set_text("Remark");
            obj.set_cssclass("sta_WFDA_Label");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "0", "386", null, "29", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WFDA_Data");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0%", "386", "12.3%", "29", null, null, this.Tab00.tabpage4);
            obj.set_taborder("68");
            obj.set_text("Description");
            obj.set_cssclass("sta_WFDA_Label");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "0", "385", null, "2", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("69");
            obj.style.set_background("#4f5670ff");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new TextArea("TextArea06", "absolute", "12.46%", "390", "87.13%", "21", null, null, this.Tab00.tabpage4);
            obj.set_taborder("70");
            obj.set_value("LG전자 넥사크로 패키기 요구사항 반영");
            obj.set_readonly("true");
            obj.style.set_padding("3 0 0 3");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "1", "362", "100", "21", null, null, this.Tab00.tabpage4);
            obj.set_taborder("71");
            obj.set_text("2017-01");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("antialias bold 12 LG스마트체,Arial");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "0", "414", null, "149", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WFDA_Data");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new TextArea("TextArea07", "absolute", "12.46%", "418", "87.13%", "141", null, null, this.Tab00.tabpage4);
            obj.set_taborder("73");
            obj.set_value("팝업 / 메세지박스 Callback처리 개선\r\n - 기존 Callback함수를 선언하는 방식에서\r\n   직접 기술할수 있는 기능 추가\r\n\r\n기간달력 UI개선\r\n -  컴포넌트내에 월을 직접 선택할수 있게 변경\r\n\r\n기타 버그사항 수정");
            obj.set_readonly("true");
            obj.style.set_padding("3 0 0 3");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "0%", "414", "12.3%", "149", null, null, this.Tab00.tabpage4);
            obj.set_taborder("74");
            obj.set_text("Remark");
            obj.set_cssclass("sta_WFDA_Label");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "0", "626", null, "29", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WFDA_Data");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "0%", "626", "12.3%", "29", null, null, this.Tab00.tabpage4);
            obj.set_taborder("84");
            obj.set_text("Description");
            obj.set_cssclass("sta_WFDA_Label");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "0", "625", null, "2", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("85");
            obj.style.set_background("#4f5670ff");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new TextArea("TextArea10", "absolute", "12.46%", "630", "87.13%", "21", null, null, this.Tab00.tabpage4);
            obj.set_taborder("86");
            obj.set_value("LG전자 넥사크로 패키기 가이드 추가");
            obj.set_readonly("true");
            obj.style.set_padding("3 0 0 3");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "1", "602", "100", "21", null, null, this.Tab00.tabpage4);
            obj.set_taborder("87");
            obj.set_text("2017-02");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("antialias bold 12 LG스마트체,Arial");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "0", "654", null, "125", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WFDA_Data");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new TextArea("TextArea11", "absolute", "12.46%", "658", "87.13%", "117", null, null, this.Tab00.tabpage4);
            obj.set_taborder("89");
            obj.set_value("3rd 제품 가이드 추가\r\n - rMateChart 연동 가이드 추가\r\n - rMateChart 샘플 추가(7본)\r\n\r\nLeft 조회영역 템플릿 추가\r\n - 좌측에 조회영역을 배치한 템플릿 7본 제작");
            obj.set_readonly("true");
            obj.style.set_padding("3 0 0 3");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "0%", "654", "12.3%", "125", null, null, this.Tab00.tabpage4);
            obj.set_taborder("90");
            obj.set_text("Remark");
            obj.set_cssclass("sta_WFDA_Label");
            this.Tab00.tabpage4.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "20", "23", "216", "24", null, null, this);
            obj.set_taborder("7");
            obj.set_text("LG전자 넥사크로 패키지");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("소개");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("도입효과");

            	}
            );
            this.Tab00.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage3,
            	//-- Layout function
            	function(p) {
            		p.set_text("고려사항");

            	}
            );
            this.Tab00.tabpage3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage4,
            	//-- Layout function
            	function(p) {
            		p.set_text("History");

            	}
            );
            this.Tab00.tabpage4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1260, 564, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("introFrame");
            		p.set_titletext("Intro Page");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("IntroFrame_.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : IntroFrame.xfdl
        * PROGRAMMER  : 
        * DATE        : 2016-09-28
        * DESCRIPTION : Intro 화면
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        
        this.introFrame_onload = function(obj,e)
        {
        	
        }

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.introFrame_onload, this);

        };

        this.loadIncludeScript("IntroFrame_.xfdl", true);

       
    };
}
)();
