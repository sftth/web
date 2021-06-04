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
                this.set_name("frm");
                this.set_classname("zipCode");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edtPostCode", "absolute", "8.82%", "5", null, "20", "85.62%", null, this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddr", "absolute", "14.3%", "5", null, "20", "50.41%", null, this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddr2", "absolute", "49.51%", "5", null, "20", "28.59%", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "4%", "5", null, "20", "91.42%", null, this);
            obj.set_taborder("3");
            obj.set_text("우편번호");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("zipCode");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("zipCode.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("zipCode.xfdl", function(exports) {
        /*==================================================================================
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : 
        * PROGRAMMER  : 
        * DATE        : 2017.03.21
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
        this.frm_onload = function(obj,e)
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
        	var sOption 	= "modaless=false, autosize=false, width=0, height=0";
        	LGE.Core.popup(this,"popup_addr","CommonObject::popup_addr.xfdl","", sOption, function (sId, sResult) {
        		var oResult = sResult.split("|");
        		if(oResult[0] == "OK") {
        			if(!Base.isEmpty(oResult[1])){
        				this.edtPostCode.set_value(oResult[1]);
        				this.edtAddr.set_value(oResult[2]);
        				this.edtAddr2.set_value("");
        				this.edtAddr2.setFocus();			
        			}	
        		}
        	});		
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.frm_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("zipCode.xfdl", true);

       
    };
}
)();
