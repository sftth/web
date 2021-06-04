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
                this.set_name("language_guide");
                this.set_classname("tagfree_guide");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", null, "0", "64", "26", "1", null, this);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "0.08%", "54", null, "154", "0.08%", null, this);
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"361\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"메뉴관리\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "0%", "318", null, null, "0%", "0", this);
            obj.set_taborder("3");
            obj.set_binddataset("gds_message");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"MSG_CD\"/><Cell col=\"1\" text=\"MSG_CONT\"/><Cell col=\"2\" text=\"MSG_TRAN\"/><Cell col=\"3\" text=\"LANG_CD\"/></Band><Band id=\"body\"><Cell edittype=\"readonly\" text=\"bind:MSG_CD\"/><Cell col=\"1\" text=\"bind:MSG_CONT\"/><Cell col=\"2\" text=\"bind:MSG_TRAN\"/><Cell col=\"3\" text=\"bind:LANG_CD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "224", "311", "44", null, null, this);
            obj.set_taborder("4");
            obj.set_text("참조 데이터셋");
            obj.style.set_background("aliceblue");
            obj.style.set_padding("0 0 0 10");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "312", "224", null, "44", "0.08%", null, this);
            obj.set_taborder("5");
            obj.set_text("gds_message");
            obj.style.set_background("beige");
            obj.style.set_padding("0 0 0 10");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "270", "311", "44", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인방법");
            obj.style.set_background("aliceblue");
            obj.style.set_padding("0 0 0 10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "312", "270", null, "44", "0.25%", null, this);
            obj.set_taborder("7");
            obj.set_text("로그인시 언어변경후 다국어 가이드 화면을 다시열어 확인한다.");
            obj.style.set_background("beige");
            obj.style.set_padding("0 0 0 10");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("tagfree_guide");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("language_guide.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("language_guide.xfdl", function(exports) {
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
        *
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
        this.language_guide_onload = function(obj,e)
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

        

        

        

        this.Button00_onclick = function(obj,e)
        {
        	trace(application.gds_message.saveXML());
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.language_guide_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("language_guide.xfdl", true);

       
    };
}
)();
