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
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_CD_NAME\" type=\"string\" size=\"256\"/><Column id=\"DIV_CD\" type=\"string\" size=\"256\"/><Column id=\"DIV_NAME\" type=\"string\" size=\"256\"/><Column id=\"DIV_SHRT_NAME\" type=\"string\" size=\"256\"/><Column id=\"DIV_KOR_NAME\" type=\"string\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"string\" size=\"256\"/><Column id=\"DIV_LVL_CD\" type=\"string\" size=\"256\"/><Column id=\"DIV_LVL_NAME\" type=\"string\" size=\"256\"/><Column id=\"DIV_LVL_NUM\" type=\"string\" size=\"256\"/><Column id=\"UP_DIV_CD\" type=\"string\" size=\"256\"/><Column id=\"UP_DIV_NAME\" type=\"string\" size=\"256\"/><Column id=\"CMPNY_CD\" type=\"string\" size=\"256\"/><Column id=\"CMPNY_NAME\" type=\"string\" size=\"256\"/><Column id=\"BIZDIV_CD\" type=\"string\" size=\"256\"/><Column id=\"BIZDIV_NAME\" type=\"string\" size=\"256\"/><Column id=\"SUMM_FLAG\" type=\"string\" size=\"256\"/><Column id=\"LAST_RPT_UNIT_FLAG\" type=\"string\" size=\"256\"/><Column id=\"ENTT_CLOSING_FLAG\" type=\"string\" size=\"256\"/><Column id=\"CLOSING_DIV_FLAG\" type=\"string\" size=\"256\"/><Column id=\"SORT_ORDER\" type=\"string\" size=\"256\"/><Column id=\"B2B_ONLY_FLAG\" type=\"string\" size=\"256\"/><Column id=\"ALLOCATION_FLAG\" type=\"string\" size=\"256\"/><Column id=\"B2B_DIV_TYPE\" type=\"string\" size=\"256\"/><Column id=\"ADJ_DIV_CD\" type=\"string\" size=\"256\"/><Column id=\"SRC_SYS_CD\" type=\"string\" size=\"256\"/><Column id=\"LAST_UPD_DATE\" type=\"string\" size=\"256\"/><Column id=\"LAST_UPD_USR_ID\" type=\"string\" size=\"256\"/><Column id=\"CREATION_USR_ID\" type=\"string\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"string\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DIV_CD_NAME\">[HNA] HAA</Col><Col id=\"DIV_CD\">HNA</Col><Col id=\"DIV_NAME\">HAA</Col><Col id=\"DIV_SHRT_NAME\">HAA</Col><Col id=\"DIV_KOR_NAME\">HAA</Col><Col id=\"USE_FLAG\">Y</Col><Col id=\"DIV_LVL_CD\">CMPNY</Col><Col id=\"DIV_LVL_NAME\">Company</Col><Col id=\"DIV_LVL_NUM\">1</Col><Col id=\"UP_DIV_CD\">ALL</Col><Col id=\"UP_DIV_NAME\">ALL</Col><Col id=\"CMPNY_CD\">HNA</Col><Col id=\"CMPNY_NAME\">HAA</Col><Col id=\"BIZDIV_CD\"/><Col id=\"BIZDIV_NAME\"/><Col id=\"SUMM_FLAG\">Y</Col><Col id=\"LAST_RPT_UNIT_FLAG\">N</Col><Col id=\"ENTT_CLOSING_FLAG\">N</Col><Col id=\"CLOSING_DIV_FLAG\">N</Col><Col id=\"SORT_ORDER\">411000000</Col><Col id=\"B2B_ONLY_FLAG\">N</Col><Col id=\"ALLOCATION_FLAG\">N</Col><Col id=\"B2B_DIV_TYPE\">N</Col><Col id=\"ADJ_DIV_CD\"/><Col id=\"SRC_SYS_CD\">N</Col><Col id=\"LAST_UPD_DATE\">2016-08-31 07:08</Col><Col id=\"LAST_UPD_USR_ID\">kimhs</Col><Col id=\"CREATION_USR_ID\">kimhs</Col><Col id=\"CREATION_DATE\">2016-08-31 07:08</Col><Col id=\"CHK\"/></Row><Row><Col id=\"DIV_CD_NAME\">[CFT] REF A Water Purifier</Col><Col id=\"DIV_CD\">CFT</Col><Col id=\"DIV_NAME\">REF A Water Purifier</Col><Col id=\"DIV_SHRT_NAME\">REF A Water Purifier</Col><Col id=\"DIV_KOR_NAME\">냉장고 사업부</Col><Col id=\"USE_FLAG\">Y</Col><Col id=\"DIV_LVL_CD\">BIZ_DIV</Col><Col id=\"DIV_LVL_NAME\">Business Division</Col><Col id=\"DIV_LVL_NUM\">2</Col><Col id=\"UP_DIV_CD\">HNA</Col><Col id=\"UP_DIV_NAME\">HAA</Col><Col id=\"CMPNY_CD\">HNA</Col><Col id=\"CMPNY_NAME\">HAA</Col><Col id=\"BIZDIV_CD\">CFT</Col><Col id=\"BIZDIV_NAME\">REF A Water Purifier</Col><Col id=\"SUMM_FLAG\">Y</Col><Col id=\"LAST_RPT_UNIT_FLAG\">N</Col><Col id=\"ENTT_CLOSING_FLAG\">N</Col><Col id=\"CLOSING_DIV_FLAG\">N</Col><Col id=\"SORT_ORDER\">411010000</Col><Col id=\"B2B_ONLY_FLAG\">N</Col><Col id=\"ALLOCATION_FLAG\">N</Col><Col id=\"B2B_DIV_TYPE\">N</Col><Col id=\"ADJ_DIV_CD\"/><Col id=\"SRC_SYS_CD\">N</Col><Col id=\"LAST_UPD_DATE\">2016-08-31 07:08</Col><Col id=\"LAST_UPD_USR_ID\">kimhs</Col><Col id=\"CREATION_USR_ID\">kimhs</Col><Col id=\"CREATION_DATE\">2016-08-31 07:08</Col><Col id=\"CHK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "0", "415", null, null, "0", "0", this);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_selecttype("area");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"174\"/><Column size=\"136\"/><Column size=\"174\"/><Column size=\"264\"/><Column size=\"239\"/><Column size=\"195\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\"/><Cell col=\"1\" text=\"DIV_CD_NAME\"/><Cell col=\"2\" text=\"DIV_CD\"/><Cell col=\"3\" text=\"DIV_SHRT_NAME\"/><Cell col=\"4\" text=\"DIV_KOR_NAME\"/><Cell col=\"5\" text=\"DIV_LVL_CD\"/><Cell col=\"6\" text=\"상세정보\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:DIV_CD_NAME\"/><Cell col=\"2\" text=\"bind:DIV_CD\"/><Cell col=\"3\" text=\"bind:DIV_SHRT_NAME\"/><Cell col=\"4\" text=\"bind:DIV_KOR_NAME\"/><Cell col=\"5\" text=\"bind:DIV_LVL_CD\"/><Cell col=\"6\" displaytype=\"button\" style=\"align:center;\" text=\"팝업열기\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "0", "53", "143", "31", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "142", "53", null, "31", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("LGE.Core.popup(oForm, sPopupid, sUrl, sParam, sOption,sCallback);");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("bold antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("3");
            obj.set_text("Popup");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "83", "143", "31", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Description");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "142", "83", null, "31", "0", null, this);
            obj.set_taborder("5");
            obj.set_text("Popup 화면 열기");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "113", "143", "31", null, null, this);
            obj.set_taborder("6");
            obj.set_text("oForm");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "142", "113", null, "31", "0", null, this);
            obj.set_taborder("7");
            obj.set_text("호출 FORM");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "143", "143", "31", null, null, this);
            obj.set_taborder("8");
            obj.set_text("sPopupid");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "142", "143", null, "31", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("Popup 고유 ID");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "173", "143", "31", null, null, this);
            obj.set_taborder("10");
            obj.set_text("sUrl");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "142", "173", null, "31", "0", null, this);
            obj.set_taborder("11");
            obj.set_text("Popup 화면 URL");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "203", "143", "31", null, null, this);
            obj.set_taborder("12");
            obj.set_text("sParam");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "142", "203", null, "31", "0", null, this);
            obj.set_taborder("13");
            obj.set_text("전달 파라미터");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0", "233", "143", "31", null, null, this);
            obj.set_taborder("14");
            obj.set_text("sOption");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "142", "233", null, "31", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            obj.set_text("Popup Option");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "263", "143", "31", null, null, this);
            obj.set_taborder("16");
            obj.set_text("sCallback");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "142", "263", null, "31", "0", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            obj.set_text("Callback 함수명");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "293", "143", "119", null, null, this);
            obj.set_taborder("18");
            obj.set_text("exercise");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "142", "293", null, "119", "0", null, this);
            obj.set_taborder("19");
            obj.set_text("var sDivCd \t= this.Dataset00.getColumn(e.row,\"DIV_CD\");\r\nvar sOption \t= \"modaless=false, autosize=true,resizable=false\";\r\nLGE.Core.popup(this,\"popup01\",\"guide_SAMPLE::popupTemp.xfdl\",{argDivCd:sDivCd}, sOption, function (sId, sResult) {\r\n\tif(sResult == \"OK\") {\r\n\t\talert(\"사후처리~~~~~~\");\r\n\t}\r\n});");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
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
        this.addIncludeScript("popup_guide.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("popup_guide.xfdl", function(exports) {
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

        
        /*----------------------------------------------------------------------------------
         fn_formInit
          - form load시 설정은 이곳에서 한다.
        -----------------------------------------------------------------------------------*/
        this.fn_formInit = function()
        {

        }

        this.Grid00_oncellclick = function(obj,e)
        {
        	if(e.cell == 6)
        	{
        		var sDivCd 		= this.Dataset00.getColumn(e.row,"DIV_CD");
        		var sOption 	= "modaless=false, autosize=true,resizable=false";
        		LGE.Core.popup(this,"popup01","guide_SAMPLE::popupTemp.xfdl",{argDivCd:sDivCd}, sOption, function (sId, sResult) {
        			if(sResult == "OK") {
        				alert("사후처리~~~~~~");
        			}
        		});
        	}	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.grid_guide_onload, this);
            this.Grid00.addEventHandler("onrbuttonup", this.div_Data_Div00_Grid00_onrbuttonup, this);
            this.Grid00.addEventHandler("onheadclick", this.Grid00_onheadclick, this);
            this.Grid00.addEventHandler("oncelldblclick", this.Grid00_oncelldblclick, this);
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);

        };

        this.loadIncludeScript("popup_guide.xfdl", true);

       
    };
}
)();
