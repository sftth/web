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
                this.set_name("Temp_03");
                this.set_classname("Temp_01");
                this.set_titletext("Master Detail (n:1)");
                this._setFormPosition(0,0,1224,524);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"required\" type=\"STRING\" size=\"256\"/><Column id=\"number\" type=\"STRING\" size=\"256\"/><Column id=\"zero\" type=\"STRING\" size=\"256\"/><Column id=\"min\" type=\"STRING\" size=\"256\"/><Column id=\"max\" type=\"STRING\" size=\"256\"/><Column id=\"minlength\" type=\"STRING\" size=\"256\"/><Column id=\"maxlength\" type=\"STRING\" size=\"256\"/><Column id=\"specialchar\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"resident\" type=\"STRING\" size=\"256\"/><Column id=\"business\" type=\"STRING\" size=\"256\"/><Column id=\"corporate\" type=\"STRING\" size=\"256\"/><Column id=\"cellphone\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"interphone\" type=\"STRING\" size=\"256\"/><Column id=\"hhmmss\" type=\"STRING\" size=\"256\"/><Column id=\"hhmm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"required\">aaa</Col><Col id=\"number\">1111</Col><Col id=\"zero\">0</Col><Col id=\"min\">11</Col><Col id=\"max\">45</Col><Col id=\"minlength\">abcdef</Col><Col id=\"maxlength\">ab</Col><Col id=\"specialchar\">abc</Col><Col id=\"email\">g@naver.com</Col><Col id=\"resident\">1111111111118</Col><Col id=\"business\">2208162517</Col><Col id=\"corporate\">1101114617142</Col><Col id=\"cellphone\">01022334455</Col><Col id=\"phone\">027443823</Col><Col id=\"interphone\">+8234345678</Col><Col id=\"hhmmss\">121212</Col><Col id=\"hhmm\">1245</Col></Row><Row><Col id=\"required\">bbb</Col><Col id=\"number\">2222</Col><Col id=\"zero\">0</Col><Col id=\"min\">22</Col><Col id=\"max\">39</Col><Col id=\"minlength\">123456</Col><Col id=\"maxlength\">12</Col><Col id=\"specialchar\">abcd</Col><Col id=\"email\">a@gmail.com</Col><Col id=\"resident\">1111111111118</Col><Col id=\"business\">2208162517</Col><Col id=\"corporate\">1101114617142</Col><Col id=\"cellphone\">01022334455</Col><Col id=\"phone\">027443823</Col><Col id=\"interphone\">+8234345777</Col><Col id=\"hhmmss\">104545</Col><Col id=\"hhmm\">1123</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_Data", "absolute", "0", "327", null, null, "0", "-134", this);
            obj.set_taborder("5");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);
            obj = new Static("Static56", "absolute", "0", "31", null, "29", "0", null, this.div_Data);
            obj.set_taborder("267");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "0", "59", null, "29", "0", null, this.div_Data);
            obj.set_taborder("268");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0%", "115", "100%", "29", null, null, this.div_Data);
            obj.set_taborder("269");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_background("#ffffffff");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "87", null, "29", "0", null, this.div_Data);
            obj.set_taborder("270");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "3", "200", "24", null, null, this.div_Data);
            obj.set_taborder("271");
            obj.set_text("Validation Check");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static61", "absolute", "0%", "115", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("300");
            obj.set_text("resident");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0%", "87", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("301");
            obj.set_text("maxlength");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "0%", "59", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("302");
            obj.set_text("min");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static57", "absolute", "0%", "31", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("303");
            obj.set_text("required");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", null, "3", "111", "24", "0", null, this.div_Data);
            obj.set_taborder("312");
            obj.set_text("Check");
            obj.set_cssclass("btn_WF_Grid");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "13.07%", "63", "18.95%", "21", null, null, this.div_Data);
            obj.set_taborder("314");
            obj.set_value("10");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "13.07%", "35", "18.95%", "21", null, null, this.div_Data);
            obj.set_taborder("315");
            obj.set_value("aaa");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "13.07%", "91", "18.95%", "21", null, null, this.div_Data);
            obj.set_taborder("316");
            obj.set_value("abc");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "13.07%", "119", "18.95%", "21", null, null, this.div_Data);
            obj.set_taborder("317");
            obj.set_value("111111-1111118");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0%", "143", "100%", "29", null, null, this.div_Data);
            obj.set_taborder("318");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_background("#ffffffff");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0%", "171", "100%", "29", null, null, this.div_Data);
            obj.set_taborder("319");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_background("#ffffffff");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0%", "143", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("321");
            obj.set_text("cellphone");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "13.07%", "147", "18.95%", "21", null, null, this.div_Data);
            obj.set_taborder("322");
            obj.set_value("01022334455");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0%", "171", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("325");
            obj.set_text("hhmmss");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "13.07%", "175", "18.95%", "21", null, null, this.div_Data);
            obj.set_taborder("326");
            obj.set_value("121055");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "32.68%", "31", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("327");
            obj.set_text("number");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit07", "absolute", "45.75%", "35", "21.41%", "21", null, null, this.div_Data);
            obj.set_taborder("328");
            obj.set_value("123");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "32.68%", "59", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("329");
            obj.set_text("max");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit08", "absolute", "45.75%", "63", "21.41%", "21", null, null, this.div_Data);
            obj.set_taborder("330");
            obj.set_value("50");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "32.68%", "87", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("331");
            obj.set_text("specialchar");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit09", "absolute", "45.75%", "91", "21.41%", "21", null, null, this.div_Data);
            obj.set_taborder("332");
            obj.set_value("abccd");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "32.68%", "115", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("333");
            obj.set_text("business");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit10", "absolute", "45.75%", "119", "21.41%", "21", null, null, this.div_Data);
            obj.set_taborder("334");
            obj.set_value("2208162517");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "32.68%", "143", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("335");
            obj.set_text("phone");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit11", "absolute", "45.75%", "147", "21.41%", "21", null, null, this.div_Data);
            obj.set_taborder("336");
            obj.set_value("027443823");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "67.32%", "31", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("341");
            obj.set_text("zero");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit14", "absolute", "80.39%", "35", "19.36%", "21", null, null, this.div_Data);
            obj.set_taborder("342");
            obj.set_value("0");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "67.32%", "59", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("343");
            obj.set_text("minlength");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit15", "absolute", "80.39%", "63", "19.36%", "21", null, null, this.div_Data);
            obj.set_taborder("344");
            obj.set_value("abcde");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "67.32%", "87", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("345");
            obj.set_text("email");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit16", "absolute", "80.39%", "91", "19.36%", "21", null, null, this.div_Data);
            obj.set_taborder("346");
            obj.set_value("abd@naver.com");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "67.32%", "115", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("347");
            obj.set_text("corporate");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit17", "absolute", "80.39%", "119", "19.36%", "21", null, null, this.div_Data);
            obj.set_taborder("348");
            obj.set_value("1101114617142");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "67.32%", "143", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("349");
            obj.set_text("interphone");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit18", "absolute", "80.39%", "147", "19.36%", "21", null, null, this.div_Data);
            obj.set_taborder("350");
            obj.set_value("+8234345678");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "32.68%", "171", "12.83%", "29", null, null, this.div_Data);
            obj.set_taborder("351");
            obj.set_text("hhmm");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit19", "absolute", "45.75%", "175", "21.41%", "21", null, null, this.div_Data);
            obj.set_taborder("352");
            obj.set_value("1225");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "31", null, "2", "0", null, this.div_Data);
            obj.set_taborder("313");
            obj.style.set_background("#4f5670ff");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "210", "200", "24", null, null, this.div_Data);
            obj.set_taborder("353");
            obj.set_text("Grid Validation Check");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "240", null, null, "0", "0", this.div_Data);
            obj.set_taborder("354");
            obj.set_binddataset("Dataset00");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"required\"/><Cell col=\"1\" text=\"number\"/><Cell col=\"2\" text=\"zero\"/><Cell col=\"3\" text=\"min\"/><Cell col=\"4\" text=\"max\"/><Cell col=\"5\" text=\"minlength\"/><Cell col=\"6\" text=\"maxlength\"/><Cell col=\"7\" text=\"specialchar\"/><Cell col=\"8\" text=\"email\"/><Cell col=\"9\" text=\"resident\"/><Cell col=\"10\" text=\"business\"/><Cell col=\"11\" text=\"corporate\"/><Cell col=\"12\" text=\"cellphone\"/><Cell col=\"13\" text=\"phone\"/><Cell col=\"14\" text=\"interphone\"/><Cell col=\"15\" text=\"hhmmss\"/><Cell col=\"16\" text=\"hhmm\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:required\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:number\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:zero\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:min\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:max\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:minlength\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:maxlength\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:specialchar\"/><Cell col=\"8\" edittype=\"textarea\" text=\"bind:email\"/><Cell col=\"9\" edittype=\"normal\" text=\"bind:resident\"/><Cell col=\"10\" edittype=\"normal\" text=\"bind:business\"/><Cell col=\"11\" edittype=\"normal\" text=\"bind:corporate\"/><Cell col=\"12\" edittype=\"normal\" text=\"bind:cellphone\"/><Cell col=\"13\" edittype=\"normal\" text=\"bind:phone\"/><Cell col=\"14\" edittype=\"normal\" text=\"bind:interphone\"/><Cell col=\"15\" edittype=\"normal\" text=\"bind:hhmmss\"/><Cell col=\"16\" edittype=\"normal\" text=\"bind:hhmm\"/></Band></Format></Formats>");
            this.div_Data.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", null, "212", "111", "24", "0", null, this.div_Data);
            obj.set_taborder("355");
            obj.set_text("Check");
            obj.set_cssclass("btn_WF_Grid");
            this.div_Data.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "0", "53", "143", "31", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("7");
            obj.set_text("Validation");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "142", "53", null, "31", "0", null, this);
            obj.set_taborder("8");
            obj.set_text("LGE.Valid.checkValidObject(oForm,  oValid)");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("bold antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "83", "143", "31", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WFDA_Label");
            obj.set_text("Description");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "142", "83", null, "31", "0", null, this);
            obj.set_taborder("10");
            obj.set_text("데이터 유효성 검증");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "113", "143", "31", null, null, this);
            obj.set_taborder("11");
            obj.set_text("oForm");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "142", "113", null, "31", "0", null, this);
            obj.set_taborder("12");
            obj.set_text("호출 Form");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "143", "143", "31", null, null, this);
            obj.set_taborder("13");
            obj.set_text("oValid");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "142", "143", null, "31", "0", null, this);
            obj.set_taborder("14");
            obj.set_text("검증 object");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "173", "143", "143", null, null, this);
            obj.set_taborder("15");
            obj.set_text("oValid");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "142", "173", null, "143", "0", null, this);
            obj.set_taborder("16");
            obj.set_text("oValid = \t\r\n\t[\r\n\t\t {objid:this.div_Data.Edit01,  \t\t\tcolumn:\"\", \t\t\trequired:true}\r\n\t\t,{objid:this.div_Data.Edit07,\t\t \tcolumn:\"\", \t\t\tnumber:true,required:true}\r\n\t];\r\n\r\nif (!LGE.Valid.checkValidObject(this, oValid)){\r\n\ttrace(\"validation failed!!\");\r\n\treturn false;\r\n}");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_font("antialias 9 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.style.set_background("transparent");

            	}
            );
            this.div_Data.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 524, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Temp_01");
            		p.set_titletext("Master Detail (n:1)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("vaildation_check.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("vaildation_check.xfdl", function(exports) {

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
        this.form_onload = function(obj,e)
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

        
        this.fn_checkVaildation = function()
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
        		trace("validation failed!!");
        		return false;
        	}
        	
        	alert("Pass");
        }

        

        

        this.fn_checkVaildationGrid = function(obj,e)
        {
        	oValid = 	
        		[
        			 {objid:this.div_Data.Grid00,  			column:"required", 			required:true}
         			,{objid:this.div_Data.Grid00,		 	column:"number", 			number:true}
         			,{objid:this.div_Data.Grid00,  			column:"zero", 				zero:true,required:true}
         			,{objid:this.div_Data.Grid00,  			column:"min", 				min:10}
        			,{objid:this.div_Data.Grid00,  			column:"max", 				max:50}
        			,{objid:this.div_Data.Grid00,  			column:"minlength", 		minlength:5,required:true}
         			,{objid:this.div_Data.Grid00,  			column:"maxlength", 		maxlength:3,required:true}
         			,{objid:this.div_Data.Grid00,  			column:"specialchar", 		specialchar:true}
         			,{objid:this.div_Data.Grid00,  			column:"email", 			email:true}
         			,{objid:this.div_Data.Grid00,  			column:"resident", 			resident:true}
         			,{objid:this.div_Data.Grid00,  			column:"business", 			business:true}
         			,{objid:this.div_Data.Grid00,  			column:"corporate", 		corporate:true}
         			,{objid:this.div_Data.Grid00,  			column:"cellphone", 		cellphone:true}
         			,{objid:this.div_Data.Grid00,  			column:"phone", 			phone:true}
         			,{objid:this.div_Data.Grid00,  			column:"interphone", 		interphone:true}
         			,{objid:this.div_Data.Grid00,  			column:"hhmmss", 			hhmmss:true}
         			,{objid:this.div_Data.Grid00,  			column:"hhmm", 				hhmm:true}
        		];
        	
        	if (!LGE.Valid.checkValidObject(this, oValid)){
        		trace("validation failed!!");
        		return false;
        	}
        	
        	alert("Pass Grid");	
        }

        

        this.div_Data_Grid00_onkeydown = function(obj,e)
        {

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_Data.Button00.addEventHandler("onclick", this.fn_checkVaildation, this);
            this.div_Data.Grid00.addEventHandler("onkeydown", this.div_Data_Grid00_onkeydown, this);
            this.div_Data.Button01.addEventHandler("onclick", this.fn_checkVaildationGrid, this);

        };

        this.loadIncludeScript("vaildation_check.xfdl", true);

       
    };
}
)();
