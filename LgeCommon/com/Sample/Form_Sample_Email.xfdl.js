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
                this.set_name("Form_Sample_Email");
                this.set_titletext("Sample");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_email", this);
            obj._setContents("<ColumnInfo><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_Data", "absolute", "0", "7", null, null, "0", "32", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "11", "200", "24", null, null, this.div_Data);
            obj.set_taborder("140");
            obj.set_text("email");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "149", "38", null, "29", "0", null, this.div_Data);
            obj.set_taborder("141");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "38", "150", "29", null, null, this.div_Data);
            obj.set_taborder("142");
            obj.set_text("email");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "0", "37", null, "2", "0", null, this.div_Data);
            obj.set_taborder("143");
            obj.style.set_background("#4f5670ff");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "66", "150", "29", null, null, this.div_Data);
            obj.set_taborder("144");
            obj.set_text("title");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "149", "66", null, "29", "0", null, this.div_Data);
            obj.set_taborder("145");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "94", "150", "325", null, null, this.div_Data);
            obj.set_taborder("146");
            obj.set_text("content");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "149", "94", null, "325", "0", null, this.div_Data);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "159", "42", "446", "21", null, null, this.div_Data);
            obj.set_taborder("148");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "159", "70", "446", "21", null, null, this.div_Data);
            obj.set_taborder("149");
            this.div_Data.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "159", "100", null, "313", "8", null, this.div_Data);
            obj.set_taborder("150");
            this.div_Data.addChild(obj.name, obj);
            obj = new Button("btn_Send", "absolute", "89.13%", "427", null, "26", "1.06%", null, this.div_Data);
            obj.set_taborder("151");
            obj.set_text("Send");
            this.div_Data.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");

            	}
            );
            this.div_Data.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Sample");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_Data.Edit00","value","ds_email","email");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_Data.Edit01","value","ds_email","title");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_Data.TextArea00","value","ds_email","content");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Form_Sample_Email.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("Form_Sample_Email.xfdl", function(exports) {

        // Library Include
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        this.div_Data_btn_Send_onclick = function(obj,e)
        {
        	var sSvcId			= "SendMail";
        	var sUrl			= "sample/second/mailSendDo.do";
        	var sInDs			= "dsInput=ds_email";
        	var sOutDs			= "";
        	var sArg			= "";
        	var sCallback 		= "fn_callBack";
        	var bShowProgress	= true;
        	var bAsync			= true;

        	LGE.Core.tranDo(this, sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback, bShowProgress, bAsync);
        }

        // Callback
        this.fn_callBack = function(svcid,errcode,errmsg) {

        	if ( errcode < 0 ) 
        	{
        		alert("[" + errcode + "] " + errmsg);
        		return;
        	} 
        	else 
        	{ 
        		alert(errmsg);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_Data.btn_Send.addEventHandler("onclick", this.div_Data_btn_Send_onclick, this);

        };

        this.loadIncludeScript("Form_Sample_Email.xfdl", true);

       
    };
}
)();
