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
                this.set_name("grid_guide");
                this.set_classname("grid_guide");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"DIV_CD_NAME\" type=\"INT\" size=\"256\"/><Column id=\"DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_SHRT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_KOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_LVL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_LVL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_LVL_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DIV_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DIV_CD_NAME\">1</Col><Col id=\"DIV_CD\">1</Col><Col id=\"DIV_NAME\">AAA</Col><Col id=\"DIV_SHRT_NAME\">HAA</Col><Col id=\"DIV_KOR_NAME\">HAA</Col><Col id=\"USE_FLAG\">Y</Col><Col id=\"DIV_LVL_CD\">CMPNY</Col><Col id=\"DIV_LVL_NAME\">Company</Col><Col id=\"DIV_LVL_NUM\">1</Col><Col id=\"UP_DIV_CD\">ALL</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"DIV_CD_NAME\">2</Col><Col id=\"DIV_CD\">2</Col><Col id=\"DIV_NAME\">AAA</Col><Col id=\"DIV_SHRT_NAME\">REF A Water Purifier</Col><Col id=\"DIV_KOR_NAME\">냉장고 사업부</Col><Col id=\"USE_FLAG\">N</Col><Col id=\"DIV_LVL_CD\">BIZ_DIV</Col><Col id=\"DIV_LVL_NAME\">Business Division</Col><Col id=\"DIV_LVL_NUM\">2</Col><Col id=\"UP_DIV_CD\">HNA</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"DIV_CD_NAME\">3</Col><Col id=\"DIV_CD\">3</Col><Col id=\"DIV_NAME\">REF</Col><Col id=\"DIV_SHRT_NAME\">REF</Col><Col id=\"DIV_KOR_NAME\">냉장고</Col><Col id=\"USE_FLAG\">A</Col><Col id=\"DIV_LVL_CD\">DIV</Col><Col id=\"DIV_LVL_NAME\">Division</Col><Col id=\"DIV_LVL_NUM\">3</Col><Col id=\"UP_DIV_CD\">CFT</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"DIV_CD_NAME\">4</Col><Col id=\"DIV_CD\">45</Col><Col id=\"DIV_NAME\">Water Purifier BD</Col><Col id=\"DIV_SHRT_NAME\">Water Purifier BD</Col><Col id=\"DIV_KOR_NAME\">정수기 BD</Col><Col id=\"USE_FLAG\">N</Col><Col id=\"DIV_LVL_CD\">DIV_GR</Col><Col id=\"DIV_LVL_NAME\">Company</Col><Col id=\"DIV_LVL_NUM\">3</Col><Col id=\"UP_DIV_CD\">CFT</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"DIV_CD_NAME\">4</Col><Col id=\"DIV_CD\">5</Col><Col id=\"DIV_NAME\">Water Purifier</Col><Col id=\"DIV_SHRT_NAME\">Water Purifier</Col><Col id=\"DIV_KOR_NAME\">정수기</Col><Col id=\"USE_FLAG\">N</Col><Col id=\"DIV_LVL_CD\">DIV</Col><Col id=\"DIV_LVL_NAME\">Division</Col><Col id=\"DIV_LVL_NUM\">4</Col><Col id=\"UP_DIV_CD\">CBT</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"DIV_CD_NAME\">0</Col><Col id=\"DIV_CD\">6</Col><Col id=\"DIV_NAME\">Other_HiMS CAC</Col><Col id=\"DIV_SHRT_NAME\">Other_HiMS CAC</Col><Col id=\"DIV_KOR_NAME\">하이엠텍 CAC</Col><Col id=\"USE_FLAG\">Y</Col><Col id=\"DIV_LVL_CD\">DIV</Col><Col id=\"DIV_LVL_NAME\">Division</Col><Col id=\"DIV_LVL_NUM\">4</Col><Col id=\"UP_DIV_CD\">CBT</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"DIV_CD_NAME\">0</Col><Col id=\"DIV_CD\">7</Col><Col id=\"DIV_NAME\">REF A Water Purifier Intra BU</Col><Col id=\"DIV_SHRT_NAME\">REF A Water Purifier_Intra_BU</Col><Col id=\"DIV_KOR_NAME\">REFAWater Purifier_Intra_BU</Col><Col id=\"USE_FLAG\">Y</Col><Col id=\"DIV_LVL_CD\">DIV</Col><Col id=\"DIV_LVL_NAME\">Division</Col><Col id=\"DIV_LVL_NUM\">3</Col><Col id=\"UP_DIV_CD\">CFT</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"DIV_CD_NAME\">0</Col><Col id=\"DIV_CD\">78</Col><Col id=\"DIV_NAME\">W/M A VCC</Col><Col id=\"DIV_SHRT_NAME\">W/M A VCC</Col><Col id=\"DIV_KOR_NAME\">세탁기 사업부</Col><Col id=\"USE_FLAG\">Y</Col><Col id=\"DIV_LVL_CD\">BIZ_DIV</Col><Col id=\"DIV_LVL_NAME\">Business Division</Col><Col id=\"DIV_LVL_NUM\">2</Col><Col id=\"UP_DIV_CD\">HNA</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"DIV_CD_NAME\">0</Col><Col id=\"DIV_CD\">12</Col><Col id=\"DIV_NAME\">W/M</Col><Col id=\"DIV_SHRT_NAME\">W/M</Col><Col id=\"DIV_KOR_NAME\">세탁기</Col><Col id=\"USE_FLAG\">B</Col><Col id=\"DIV_LVL_CD\">DIV</Col><Col id=\"DIV_LVL_NAME\">Division</Col><Col id=\"DIV_LVL_NUM\">3</Col><Col id=\"UP_DIV_CD\">DIT</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"DIV_CD_NAME\">0</Col><Col id=\"DIV_CD\">2</Col><Col id=\"DIV_NAME\">VCC BD</Col><Col id=\"DIV_SHRT_NAME\">VCC BD</Col><Col id=\"DIV_KOR_NAME\">청소기 BD</Col><Col id=\"USE_FLAG\">B</Col><Col id=\"DIV_LVL_CD\">DIV</Col><Col id=\"DIV_LVL_NAME\">Division</Col><Col id=\"DIV_LVL_NUM\">3</Col><Col id=\"UP_DIV_CD\">DIT</Col><Col id=\"CHK\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"DATA\">AAA</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">BBB</Col></Row><Row><Col id=\"CODE\">A</Col><Col id=\"DATA\">aaBB</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"DATA\">AAbb</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "0", "292", null, null, "0", "0", this);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_selecttype("area");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_binddataset("Dataset00");
            obj.set_scrollbars("autoboth");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_extendsizetype("none");
            obj.style.set_font("antialias 9 LG스마트체,Arial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"174\"/><Column size=\"136\"/><Column size=\"162\"/><Column size=\"174\"/><Column size=\"638\"/><Column size=\"224\"/><Column size=\"239\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\"/><Cell col=\"1\"/><Cell col=\"2\" colspan=\"2\" text=\"Merge\"/><Cell col=\"4\" rowspan=\"2\" text=\"DIV_NAME\"/><Cell col=\"5\" rowspan=\"2\" style=\"font: ;\" text=\"DIV_SHRT_NAME\"/><Cell col=\"6\" colspan=\"3\" text=\"Merge\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\" text=\"DIV_CD_NAME\"/><Cell row=\"1\" col=\"3\" text=\"DIV_CD\"/><Cell row=\"1\" col=\"6\" text=\"DIV_KOR_NAME\"/><Cell row=\"1\" col=\"7\" text=\"USE_FLAG\"/><Cell row=\"1\" col=\"8\" text=\"DIV_LVL_CD\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:CHK\"/><Cell col=\"1\" style=\"align:center;\" expr=\"expr:comp.parent.Dataset00.rowcount - currow\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" text=\"bind:DIV_CD_NAME\"/><Cell col=\"3\" text=\"bind:DIV_CD\"/><Cell col=\"4\" text=\"bind:DIV_NAME\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:DIV_SHRT_NAME\"/><Cell col=\"6\" edittype=\"textarea\" text=\"bind:DIV_KOR_NAME\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:USE_FLAG\" combodataset=\"Dataset01\" combocodecol=\"CODE\" combodatacol=\"DATA\"/><Cell col=\"8\" text=\"bind:DIV_LVL_CD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "0", "53", "183", "79", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WFDA_Label");
            obj.set_text("* 그리드 필터\r\n* 그리드 소트\r\n* 그리드 Copy & Paste");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "182", "53", null, "79", "0", null, this);
            obj.set_taborder("11");
            obj.set_text("this.fn_formInit = function()\r\n{\r\n    // LGE.Grid.setGrid(this, oGrid, bFilter, bSort, bMultiSort); // 소트, 필터셋팅\r\n    // LGE.Grid.setGridCopyPaste(this, this.Grid00); // copy \r\n}");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("12");
            obj.set_text("Grid");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "131", "183", "79", null, null, this);
            obj.set_taborder("13");
            obj.set_text("* 그리드 전체체크");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "182", "131", null, "79", "0", null, this);
            obj.set_taborder("14");
            obj.set_text("this.Grid00_onheadclick = function(obj:Grid, e:nexacro.GridClickEventInfo)\r\n{\r\n\t// 그리드 전체 체크\r\n\tLGE.Grid.setGridCheckAll(obj, e);\t\r\n}");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0", "209", "183", "79", null, null, this);
            obj.set_taborder("15");
            obj.set_text("* 우클릭 : 틀고정\r\n* 우클릭 : 컬럼 숨기기");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "182", "209", null, "79", "0", null, this);
            obj.set_taborder("16");
            obj.set_text("this.div_Data_Div00_Grid00_onrbuttonup = function(obj:Grid, e:nexacro.GridMouseEventInfo)\r\n{\r\n\t// 그리드 우클릭 메뉴 (숨기기, 틀고정)\r\n\tLGE.Grid.openGridMenu(obj, e);\r\n}");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "89.46%", "63", null, "33", "0.74%", null, this);
            obj.set_taborder("9");
            obj.set_text("grid 초기화");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("grid_guide");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("grid_guide.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("grid_guide.xfdl", function(exports) {
        /*==================================================================================
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : 
        * PROGRAMMER  : 
        * DATE        : 2016.07.26
        * DESCRIPTION : 
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *------------------------------------------------------------------
        * 그리드 필터
        * 그리트 소트
        * 그리드 멀티소프
        * 그리드 전체체크
        * 우클릭 : 틀고정
        * 우클릭 : 컬럼 숨기기
        *------------------------------------------------------------------
        ==================================================================================*/

        /*----------------------------------------------------------------------------------
         Library Include
        -----------------------------------------------------------------------------------*/
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        

        /*----------------------------------------------------------------------------------
         Form Variable
        -----------------------------------------------------------------------------------*/

        
        /*----------------------------------------------------------------------------------
         Form onLoad
          - this.com_fromInit(obj)를 필수 호출하되, 이외의 함수는 호출하지 않는다.
        -----------------------------------------------------------------------------------*/
        this.grid_guide_onload = function(obj,e)
        {
        	this.com_fromInit(obj);
        }

        this.fn_aaa = function(a)
        {
        	trace(a);
        }

        
        /*----------------------------------------------------------------------------------
         fn_formInit
          - form load시 설정은 이곳에서 한다.
        -----------------------------------------------------------------------------------*/
        this.fn_formInit = function()
        {
        	// 그리드 필터, 소트 세팅
        	// LGE.Grid.setGrid(this, oGrid, bFilter, bSort, bMultiSort);
        	
        	//LGE.Grid.setGridCopyPaste(this, this.Grid00);
        	

        	
        	
        }

        this.Grid00_onheadclick = function(obj,e)
        {
        	// 그리드 전체 체크
        	LGE.Grid.setGridCheckAll(obj, e);
        }

        this.div_Data_Div00_Grid00_onrbuttonup = function(obj,e)
        {
        	// 그리드 우클릭 메뉴
        	LGE.Grid.openGridMenu(obj, e);
        }

        this.Button00_onclick = function(obj,e)
        {
        	// 초기화
        	LGE.Grid.initGrid(this.Grid00);
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.grid_guide_onload, this);
            this.addEventHandler("onsize", this.grid_guide_onsize, this);
            this.Grid00.addEventHandler("onrbuttonup", this.div_Data_Div00_Grid00_onrbuttonup, this);
            this.Grid00.addEventHandler("onheadclick", this.Grid00_onheadclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("grid_guide.xfdl", true);

       
    };
}
)();
