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
                this.set_name("Form_Basic_Comp1");
                this.set_titletext("Basic Component");
                this._setFormPosition(0,0,1224,483);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "0", "243", "111", "69", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "110", "243", null, "69", "0", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "141", "254", "80", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "581", "254", "80", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("readonly");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "361", "254", "80", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "801", "254", "80", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("essential");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "141", "275", "150", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_value("VMI");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "361", "275", "150", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_value("VMI");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "581", "275", "150", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_value("VMI");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "801", "275", "150", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_value("VMI");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "110", "311", null, "69", "0", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "311", "111", "69", null, null, this);
            obj.set_taborder("11");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "141", "322", "80", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "361", "322", "80", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "581", "322", "80", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("readonly");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "801", "322", "80", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("essential");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "141", "343", "150", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_value("1234567890");
            obj.set_mask(",");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "361", "343", "150", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_value("1234567890");
            obj.set_mask(",");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "581", "343", "150", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_value("1234567890");
            obj.set_readonly("true");
            obj.set_mask(",");
            obj.set_cssclass("readonly");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "801", "343", "150", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_value("1234567890");
            obj.set_mask(",");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "110", "379", null, "104", "0", null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "0", "379", "111", "104", null, null, this);
            obj.set_taborder("21");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "141", "390", "80", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "361", "390", "80", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "581", "390", "80", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("readonly");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "801", "390", "80", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("essential");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "141", "411", "150", "56", null, null, this);
            obj.set_taborder("26");
            obj.set_value("VMI\r\nVMI\r\nVMI\r\nVMI\r\n");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "361", "411", "150", "56", null, null, this);
            obj.set_taborder("27");
            obj.set_value("VMI\r\nVMI\r\nVMI\r\nVMI\r\n");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02", "absolute", "581", "411", "150", "56", null, null, this);
            obj.set_taborder("28");
            obj.set_value("VMI\r\nVMI\r\nVMI\r\nVMI\r\n");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03", "absolute", "801", "411", "150", "56", null, null, this);
            obj.set_taborder("29");
            obj.set_value("VMI\r\nVMI\r\nVMI\r\nVMI\r\n");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "110", "53", null, "191", "0", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "0", "53", "111", "191", null, null, this);
            obj.set_taborder("31");
            obj.set_text("Static");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "138", "82", "182", "40", null, null, this);
            obj.set_taborder("32");
            obj.set_text("<fs v='12'>ABCDEFGHIJKLMNOP\r\n0123456789</fs>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "138", "172", "98", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("Title");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static105", "absolute", "675", "58", "255", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("※ usedecorate =\"<b v='true'>true</b>\"");
            obj.set_usedecorate("true");
            obj.getSetter("class").set("sta_WF_Info_Orange");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea04", "absolute", "675", "79", null, "145", "20", null, this);
            obj.set_taborder("35");
            obj.set_value("fs 글자의 크기(fontsize)를 지정합니다.  ex)<fs v='12'></fs>\r\nfc 글자의 색상(fontcolor)를 지정합니다.  ex)<fc v='red'></fc><fc v='#FF00FF'></fc>\r\nff 글자의 종류(fontface)를 지정합니다.  ex)<ff v='굴림'></ff>\r\nb 굵은글씨를(bold)를 지정합니다. ex)<b v='true'></b>\r\ni 이텔릭체를 (italic)를 지정합니다.  ex)<i v='true'></i>\r\nu 언더라인을(underline)를 지정합니다.  ex)<u v='true'></u>\r\ns 취소선(strike)를 지정합니다.  ex)<s v='true'></s>");
            obj.set_readonly("true");
            obj.set_linespace("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("36");
            obj.set_text("Static/Edit/MaskEdit/TextArea");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "332", "82", "182", "40", null, null, this);
            obj.set_taborder("37");
            obj.set_text("ABCDEFGHIJKLMNOP\r\n0123456789");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "141", "58", "80", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "332", "58", "80", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Attachment", "absolute", "335", "170", "200", "24", null, null, this);
            obj.set_taborder("40");
            obj.set_text("Attachment");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 483, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Basic Component");

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

        this.loadIncludeScript("Form_Basic_Comp1.xfdl", true);

       
    };
}
)();
