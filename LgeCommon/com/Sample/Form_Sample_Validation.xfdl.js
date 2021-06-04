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
                this.set_name("Form_Sample_Validation");
                this.set_titletext("Sample");
                this._setFormPosition(0,0,1224,677);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"required\" type=\"STRING\" size=\"256\"/><Column id=\"number\" type=\"STRING\" size=\"256\"/><Column id=\"zero\" type=\"STRING\" size=\"256\"/><Column id=\"min\" type=\"STRING\" size=\"256\"/><Column id=\"max\" type=\"STRING\" size=\"256\"/><Column id=\"minlength\" type=\"STRING\" size=\"256\"/><Column id=\"maxlength\" type=\"STRING\" size=\"256\"/><Column id=\"specialchar\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"resident\" type=\"STRING\" size=\"256\"/><Column id=\"business\" type=\"STRING\" size=\"256\"/><Column id=\"corporate\" type=\"STRING\" size=\"256\"/><Column id=\"cellphone\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"interphone\" type=\"STRING\" size=\"256\"/><Column id=\"hhmmss\" type=\"STRING\" size=\"256\"/><Column id=\"hhmm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"required\">aaa</Col><Col id=\"number\">1111</Col><Col id=\"zero\">0</Col><Col id=\"min\">11</Col><Col id=\"max\">45</Col><Col id=\"minlength\">abcdef</Col><Col id=\"maxlength\">ab</Col><Col id=\"specialchar\">abc</Col><Col id=\"email\">g@naver.com</Col><Col id=\"resident\">1111111111118</Col><Col id=\"business\">2208162517</Col><Col id=\"corporate\">1101114617142</Col><Col id=\"cellphone\">01022334455</Col><Col id=\"phone\">027443823</Col><Col id=\"interphone\">+8234345678</Col><Col id=\"hhmmss\">121212</Col><Col id=\"hhmm\">1245</Col></Row><Row><Col id=\"required\">bbb</Col><Col id=\"number\">2222</Col><Col id=\"zero\">0</Col><Col id=\"min\">22</Col><Col id=\"max\">39</Col><Col id=\"minlength\">123456</Col><Col id=\"maxlength\">12</Col><Col id=\"specialchar\">abcd</Col><Col id=\"email\">a@gmail.com</Col><Col id=\"resident\">1111111111118</Col><Col id=\"business\">2208162517</Col><Col id=\"corporate\">1101114617142</Col><Col id=\"cellphone\">01022334455</Col><Col id=\"phone\">027443823</Col><Col id=\"interphone\">+8234345777</Col><Col id=\"hhmmss\">104545</Col><Col id=\"hhmm\">1123</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_Data", "absolute", "0", "335", null, null, "0", "-142", this);
            obj.set_taborder("0");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);
            obj = new Static("Static56", "absolute", "0", "63", null, "29", "0", null, this.div_Data);
            obj.set_taborder("356");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "0", "91", null, "29", "0", null, this.div_Data);
            obj.set_taborder("357");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0%", "147", "100%", "29", null, null, this.div_Data);
            obj.set_taborder("358");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_background("#ffffffff");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "119", null, "29", "0", null, this.div_Data);
            obj.set_taborder("359");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "35", "200", "24", null, null, this.div_Data);
            obj.set_taborder("360");
            obj.set_text("Validation Check");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static61", "absolute", "0%", "147", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("361");
            obj.set_text("resident");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0%", "119", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("362");
            obj.set_text("maxlength");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "0%", "91", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("363");
            obj.set_text("min");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static57", "absolute", "0%", "63", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("364");
            obj.set_text("required");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Button("btn_DetailCheck", "absolute", null, "35", "111", "24", "8", null, this.div_Data);
            obj.set_taborder("365");
            obj.set_text("Check");
            obj.set_cssclass("btn_WF_Grid");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "13.07%", "95", "18.95%", "21", null, null, this.div_Data);
            obj.set_taborder("366");
            obj.set_value("10");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "13.07%", "67", "18.95%", "21", null, null, this.div_Data);
            obj.set_taborder("367");
            obj.set_value("aaa");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "13.07%", "123", "18.95%", "21", null, null, this.div_Data);
            obj.set_taborder("368");
            obj.set_value("abc");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "13.07%", "151", "18.95%", "21", null, null, this.div_Data);
            obj.set_taborder("369");
            obj.set_value("111111-1111118");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0%", "175", "100%", "29", null, null, this.div_Data);
            obj.set_taborder("370");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_background("#ffffffff");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0%", "203", "100%", "29", null, null, this.div_Data);
            obj.set_taborder("371");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_background("#ffffffff");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0%", "175", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("372");
            obj.set_text("cellphone");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "13.07%", "179", "18.95%", "21", null, null, this.div_Data);
            obj.set_taborder("373");
            obj.set_value("01022334455");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0%", "203", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("374");
            obj.set_text("hhmmss");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "13.07%", "207", "18.95%", "21", null, null, this.div_Data);
            obj.set_taborder("375");
            obj.set_value("121055");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "32.68%", "63", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("376");
            obj.set_text("number");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit07", "absolute", "45.75%", "67", "21.41%", "21", null, null, this.div_Data);
            obj.set_taborder("377");
            obj.set_value("123");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "32.68%", "91", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("378");
            obj.set_text("max");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit08", "absolute", "45.75%", "95", "21.41%", "21", null, null, this.div_Data);
            obj.set_taborder("379");
            obj.set_value("50");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "32.68%", "119", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("380");
            obj.set_text("specialchar");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit09", "absolute", "45.75%", "123", "21.41%", "21", null, null, this.div_Data);
            obj.set_taborder("381");
            obj.set_value("abccd");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "32.68%", "147", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("382");
            obj.set_text("business");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit10", "absolute", "45.75%", "151", "21.41%", "21", null, null, this.div_Data);
            obj.set_taborder("383");
            obj.set_value("2208162517");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "32.68%", "175", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("384");
            obj.set_text("phone");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit11", "absolute", "45.75%", "179", "21.41%", "21", null, null, this.div_Data);
            obj.set_taborder("385");
            obj.set_value("027443823");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "67.32%", "63", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("386");
            obj.set_text("zero");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit14", "absolute", "80.39%", "67", "19.36%", "21", null, null, this.div_Data);
            obj.set_taborder("387");
            obj.set_value("0");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "67.32%", "91", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("388");
            obj.set_text("minlength");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit15", "absolute", "80.39%", "95", "19.36%", "21", null, null, this.div_Data);
            obj.set_taborder("389");
            obj.set_value("abcde");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "67.32%", "119", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("390");
            obj.set_text("email");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit16", "absolute", "80.39%", "123", "19.36%", "21", null, null, this.div_Data);
            obj.set_taborder("391");
            obj.set_value("abd@naver.com");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "67.32%", "147", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("392");
            obj.set_text("corporate");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit17", "absolute", "80.39%", "151", "19.36%", "21", null, null, this.div_Data);
            obj.set_taborder("393");
            obj.set_value("1101114617142");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "67.32%", "175", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("394");
            obj.set_text("interphone");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit18", "absolute", "80.39%", "179", "19.36%", "21", null, null, this.div_Data);
            obj.set_taborder("395");
            obj.set_value("+8234345678");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "32.68%", "203", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("396");
            obj.set_text("hhmm");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit19", "absolute", "45.75%", "207", "21.41%", "21", null, null, this.div_Data);
            obj.set_taborder("397");
            obj.set_value("1225");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "63", null, "2", "0", null, this.div_Data);
            obj.set_taborder("398");
            obj.style.set_background("#4f5670ff");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "242", "200", "24", null, null, this.div_Data);
            obj.set_taborder("399");
            obj.set_text("Grid Validation Check");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Grid("grd_validation", "absolute", "0", "272", null, null, "0", "116", this.div_Data);
            obj.set_taborder("400");
            obj.set_binddataset("ds_grid");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"required\"/><Cell col=\"1\" text=\"number\"/><Cell col=\"2\" text=\"zero\"/><Cell col=\"3\" text=\"min\"/><Cell col=\"4\" text=\"max\"/><Cell col=\"5\" text=\"minlength\"/><Cell col=\"6\" text=\"maxlength\"/><Cell col=\"7\" text=\"specialchar\"/><Cell col=\"8\" text=\"email\"/><Cell col=\"9\" text=\"resident\"/><Cell col=\"10\" text=\"business\"/><Cell col=\"11\" text=\"corporate\"/><Cell col=\"12\" text=\"cellphone\"/><Cell col=\"13\" text=\"phone\"/><Cell col=\"14\" text=\"interphone\"/><Cell col=\"15\" text=\"hhmmss\"/><Cell col=\"16\" text=\"hhmm\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:required\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:number\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:zero\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:min\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:max\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:minlength\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:maxlength\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:specialchar\"/><Cell col=\"8\" edittype=\"textarea\" text=\"bind:email\"/><Cell col=\"9\" edittype=\"normal\" text=\"bind:resident\"/><Cell col=\"10\" edittype=\"normal\" text=\"bind:business\"/><Cell col=\"11\" edittype=\"normal\" text=\"bind:corporate\"/><Cell col=\"12\" edittype=\"normal\" text=\"bind:cellphone\"/><Cell col=\"13\" edittype=\"normal\" text=\"bind:phone\"/><Cell col=\"14\" edittype=\"normal\" text=\"bind:interphone\"/><Cell col=\"15\" edittype=\"normal\" text=\"bind:hhmmss\"/><Cell col=\"16\" edittype=\"normal\" text=\"bind:hhmm\"/></Band></Format></Formats>");
            this.div_Data.addChild(obj.name, obj);
            obj = new Button("btn_GridCheck", "absolute", null, "244", "111", "24", "8", null, this.div_Data);
            obj.set_taborder("401");
            obj.set_text("Check");
            obj.set_cssclass("btn_WF_Grid");
            this.div_Data.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "0", "53", "143", "31", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("Validation");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "142", "53", null, "31", "0", null, this);
            obj.set_taborder("3");
            obj.set_text("LGE.Valid.checkValidObject(oForm,  oValid)");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("bold antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "83", "143", "31", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Description");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "142", "83", null, "31", "0", null, this);
            obj.set_taborder("5");
            obj.set_text("데이터 유효성 검증");
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
            obj.set_text("호출 Form");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "143", "143", "31", null, null, this);
            obj.set_taborder("8");
            obj.set_text("oValid");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "142", "143", null, "31", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("검증 object");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "173", "143", "183", null, null, this);
            obj.set_taborder("10");
            obj.set_text("oValid");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "142", "173", null, "183", "0", null, this);
            obj.set_taborder("11");
            obj.set_text("oValid = \t\r\n\t[\r\n\t\t {objid:this.div_Data.Edit01,  \t\t\tcolumn:\"\", \t\t\trequired:true}\r\n\t\t,{objid:this.div_Data.Edit07,\t\t \tcolumn:\"\", \t\t\tnumber:true,required:true}\r\n\t];\r\n\r\nif (!LGE.Valid.checkValidObject(this, oValid))\r\n{\r\n\tthis.alert(\"validation failed!!\");\r\n\treturn false;\r\n}");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent");

            	}
            );
            this.div_Data.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 677, this,
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
        this.addIncludeScript("Form_Sample_Validation.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("Form_Sample_Validation.xfdl", function(exports) {

        // Library Include
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        // Form onload
        this.Form_Sample_Popup_Sub_onload = function(obj,e)
        {
        	this.com_fromInit(obj);
        }
        this.div_Data_btn_DetailCheck_onclick = function(obj,e)
        {
        	oValid = 	
        		[
        			 {objid:this.div_Data.Edit01,  			column:"", 			required:true}
         			,{objid:this.div_Data.Edit07,		 	column:"", 			number:true,required:true}
         			,{objid:this.div_Data.Edit14,  			column:"", 			zero:true}
         			,{objid:this.div_Data.Edit00,  			column:"", 			min:10}
        			,{objid:this.div_Data.Edit08,  			column:"", 			max:50}
        			
        			,{objid:this.div_Data.Edit15,  			column:"", 			minlength:5}
         			,{objid:this.div_Data.Edit02,  			column:"", 			maxlength:3}
         			,{objid:this.div_Data.Edit09,  			column:"", 			specialchar:true}
         			,{objid:this.div_Data.Edit16,  			column:"", 			email:true}
         			,{objid:this.div_Data.Edit03,  			column:"", 			resident:true}

         			,{objid:this.div_Data.Edit10,  			column:"", 			business:true}
         			,{objid:this.div_Data.Edit17,  			column:"", 			corporate:true}
         			,{objid:this.div_Data.Edit04,  			column:"", 			cellphone:true}
         			,{objid:this.div_Data.Edit11,  			column:"", 			phone:true}
         			,{objid:this.div_Data.Edit18,  			column:"", 			interphone:true}

         			,{objid:this.div_Data.Edit06,  			column:"", 			hhmmss:true}
         			,{objid:this.div_Data.Edit19,  			column:"", 			hhmm:true}
        		];
        	
        	if (!LGE.Valid.checkValidObject(this, oValid)){
        		this.alert("validation failed!!");
        		return false;
        	}
        	
        	this.alert("Pass Detail~~");
        }

        this.div_Data_btn_GridCheck_onclick = function(obj,e)
        {
        	oValid = 	
        		[
        			 {objid:this.div_Data.grd_validation,  			column:"required", 			required:true}
         			,{objid:this.div_Data.grd_validation,		 	column:"number", 			number:true}
         			,{objid:this.div_Data.grd_validation,  			column:"zero", 				zero:true,required:true}
         			,{objid:this.div_Data.grd_validation,  			column:"min", 				min:10}
        			,{objid:this.div_Data.grd_validation,  			column:"max", 				max:50}
        			,{objid:this.div_Data.grd_validation,  			column:"minlength", 		minlength:5,required:true}
         			,{objid:this.div_Data.grd_validation,  			column:"maxlength", 		maxlength:3,required:true}
         			,{objid:this.div_Data.grd_validation,  			column:"specialchar", 		specialchar:true}
         			,{objid:this.div_Data.grd_validation,  			column:"email", 			email:true}
         			,{objid:this.div_Data.grd_validation,  			column:"resident", 			resident:true}
         			,{objid:this.div_Data.grd_validation,  			column:"business", 			business:true}
         			,{objid:this.div_Data.grd_validation,  			column:"corporate", 		corporate:true}
         			,{objid:this.div_Data.grd_validation,  			column:"cellphone", 		cellphone:true}
         			,{objid:this.div_Data.grd_validation,  			column:"phone", 			phone:true}
         			,{objid:this.div_Data.grd_validation,  			column:"interphone", 		interphone:true}
         			,{objid:this.div_Data.grd_validation,  			column:"hhmmss", 			hhmmss:true}
         			,{objid:this.div_Data.grd_validation,  			column:"hhmm", 				hhmm:true}
        		];
        	
        	if (!LGE.Valid.checkValidObject(this, oValid)){
        		this.alert("validation failed!!");
        		return false;
        	}
        	
        	this.alert("Pass Grid~~");	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_Data.btn_DetailCheck.addEventHandler("onclick", this.div_Data_btn_DetailCheck_onclick, this);
            this.div_Data.btn_GridCheck.addEventHandler("onclick", this.div_Data_btn_GridCheck_onclick, this);

        };

        this.loadIncludeScript("Form_Sample_Validation.xfdl", true);

       
    };
}
)();
