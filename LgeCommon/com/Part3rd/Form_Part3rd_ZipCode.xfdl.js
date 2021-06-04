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
                this.set_name("Form_Part3rd_ZipCode");
                this.set_titletext("3rd Part");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("ZipCode");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PostCode", "absolute", "8.82%", "85", null, "20", "85.62%", null, this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Addr", "absolute", "14.3%", "85", null, "20", "50.41%", null, this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Addr2", "absolute", "49.51%", "85", null, "20", "28.59%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Zipcode", "absolute", "4%", "85", null, "20", "91.42%", null, this);
            obj.set_taborder("4");
            obj.set_text("우편번호");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("3rd Part");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Form_Part3rd_ZipCode.xfdl", function(exports) {

        this.btn_Zipcode_onclick = function(obj,e)
        {
        	var sOption 	= "modaless=false, autosize=false, width=0, height=0";
        	LGE.Core.popup(this,"popup_addr","CommonObject::popup_addr.xfdl","", sOption, 
        		function(sId, sResult) 
        		{
        			var oResult = sResult.split("|");
        			if (oResult[0] == "OK") 
        			{
        				if (!Base.isEmpty(oResult[1]))
        				{
        					this.edt_PostCode.set_value(oResult[1]);
        					this.edt_Addr.set_value(oResult[2]);
        					this.edt_Addr2.set_value("");
        					this.edt_Addr2.setFocus();			
        				}	
        			}
        		}
        	);		
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Zipcode.addEventHandler("onclick", this.btn_Zipcode_onclick, this);

        };

        this.loadIncludeScript("Form_Part3rd_ZipCode.xfdl", true);

       
    };
}
)();
