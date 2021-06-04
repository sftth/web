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
                this.set_name("Form_Work");
                this._setFormPosition(0,0,1020,630);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Project", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STEP\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_Detail", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"RESPONSE\" type=\"STRING\" size=\"256\"/><Column id=\"START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_Step", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">착수</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">분석</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_Type", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">InitialMeeting</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">분석</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_Condition", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"DATA\">ALL</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"DATA\">착수</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"DATA\">분배</Col></Row><Row><Col id=\"CODE\">+01</Col><Col id=\"DATA\">착수+</Col></Row><Row><Col id=\"CODE\">+02</Col><Col id=\"DATA\">분배+</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("Edit_REQ", "absolute", "79", null, "259", "30", null, "179", this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Title_Project", "absolute", "5", "5", "332", "30", null, null, this);
            obj.set_taborder("23");
            obj.set_text("Project");
            obj.style.set_background("lightgrey");
            obj.style.set_align("center middle");
            obj.style.set_font("12 bold Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Title_Detail", "absolute", "342", "5", null, "30", "5", null, this);
            obj.set_taborder("24");
            obj.set_text("Detail");
            obj.style.set_background("lightgrey");
            obj.style.set_align("center middle");
            obj.style.set_font("12 bold Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_Project", "absolute", "5", "112", "332", null, null, "208", this);
            obj.set_taborder("25");
            obj.set_binddataset("ds_Project");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"168\"/><Column size=\"66\"/><Column size=\"96\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"프로젝트명\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"유형\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:STEP\" combodataset=\"ds_Step\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:TYPE\" combodataset=\"ds_Type\" combocodecol=\"CODE\" combodatacol=\"NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_Detail", "absolute", "342", "112", null, null, "5", "208", this);
            obj.set_taborder("26");
            obj.set_binddataset("ds_Detail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"452\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작업일\"/><Cell col=\"1\" text=\"업무\"/><Cell col=\"2\" text=\"시작\"/><Cell col=\"3\" text=\"끝\"/><Cell col=\"4\" text=\"M/D\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:DATE\" calendardisplay=\"edit\"/><Cell col=\"1\" text=\"bind:WORK\"/><Cell col=\"2\" text=\"bind:START_TIME\" mask=\"##:##\"/><Cell col=\"3\" text=\"bind:END_TIME\" mask=\"##:##\"/><Cell col=\"4\" text=\"bind:WORK_TIME\" mask=\"##:##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label01", "absolute", "5", null, "75", "30", null, "179", this);
            obj.set_taborder("27");
            obj.set_text("Req No.");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label02", "absolute", "5", null, "75", "30", null, "150", this);
            obj.set_taborder("28");
            obj.set_text("프로젝트명");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label03", "absolute", "5", null, "75", "30", null, "121", this);
            obj.set_taborder("29");
            obj.set_text("단계");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label04", "absolute", "5", null, "75", "30", null, "92", this);
            obj.set_taborder("30");
            obj.set_text("유형");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_PROJECT", "absolute", "79", null, "258", "30", null, "150", this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_STEP", "absolute", "79", null, "258", "30", null, "121", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_innerdataset("@ds_Step");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");

            obj = new Combo("Combo_TYPE", "absolute", "79", null, "258", "30", null, "92", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_innerdataset("@ds_Type");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");

            obj = new Button("Button_STEP", "absolute", "56", null, "20", "20", null, "126", this);
            obj.set_taborder("31");
            obj.set_text("+");
            obj.style.set_font("12 bold Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_TYPE", "absolute", "56", null, "20", "20", null, "97", this);
            obj.set_taborder("32");
            obj.set_text("+");
            obj.style.set_font("12 bold Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label00", "absolute", "342", null, "75", "30", null, "179", this);
            obj.set_taborder("33");
            obj.set_text("Req No.");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_DET_REQ", "absolute", "416", null, "112", "30", null, "179", this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label05", "absolute", "528", null, "67", "30", null, "179", this);
            obj.set_taborder("34");
            obj.set_text("업무");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_WORK", "absolute", "594", null, null, "30", "5", "179", this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label06", "absolute", "342", null, "75", "30", null, "121", this);
            obj.set_taborder("35");
            obj.set_text("Start Time");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label07", "absolute", "342", null, "75", "30", null, "92", this);
            obj.set_taborder("36");
            obj.set_text("End Time");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label08", "absolute", "342", null, "75", "30", null, "63", this);
            obj.set_taborder("37");
            obj.set_text("Work Time");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit_START", "absolute", "416", null, "113", "30", null, "121", this);
            obj.set_taborder("16");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_align("center middle");
            obj.set_mask("##:##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label09", "absolute", "528", null, "67", "59", null, "121", this);
            obj.set_taborder("38");
            obj.set_text("처리");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label10", "absolute", "342", null, "75", "30", null, "150", this);
            obj.set_taborder("39");
            obj.set_text("Date");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar_DATE", "absolute", "416", null, "113", "30", null, "150", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");

            obj = new Static("Static_Label11", "absolute", "528", null, "67", "59", null, "63", this);
            obj.set_taborder("40");
            obj.set_text("F/U");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit_END", "absolute", "416", null, "113", "30", null, "92", this);
            obj.set_taborder("17");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit_WORK", "absolute", "416", null, "113", "30", null, "63", this);
            obj.set_taborder("18");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea_PROCESS", "absolute", "594", null, null, "59", "5", "121", this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea_RESPONSE", "absolute", "594", null, null, "59", "5", "63", this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label12", "absolute", "5", null, "75", "88", null, "5", this);
            obj.set_taborder("41");
            obj.set_text("메모");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea_CONTENT", "absolute", "79", null, "258", "88", null, "5", this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label13", "absolute", "342", null, "75", "59", null, "5", this);
            obj.set_taborder("42");
            obj.set_text("메모");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea_DET_CONTENT", "absolute", "416", null, null, "59", "5", "5", this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "41", "48", "28", null, null, this);
            obj.set_taborder("43");
            obj.set_text("단계(↑)");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_STEP_OPTION", "absolute", "56", "40", "211", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@ds_Step");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");

            obj = new Button("Button_Search", "absolute", "274", "40", "62", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Search");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Add", "absolute", "140", "76", "62", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Add");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Delete", "absolute", "207", "76", "62", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Delete");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Save", "absolute", "274", "76", "62", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Save");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Add_Det", "absolute", null, "76", "62", "30", "140", null, this);
            obj.set_taborder("11");
            obj.set_text("Add");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Delete_Det", "absolute", null, "76", "62", "30", "73", null, this);
            obj.set_taborder("12");
            obj.set_text("Delete");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Save_Det", "absolute", null, "76", "62", "30", "5", null, this);
            obj.set_taborder("13");
            obj.set_text("Save");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Search_Det", "absolute", null, "76", "62", "30", "207", null, this);
            obj.set_taborder("10");
            obj.set_text("Search");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1020, 630, this,
            	//-- Layout function
            	function(p) {
            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Edit_REQ","value","ds_Project","REQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Edit_PROJECT","value","ds_Project","NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Combo_STEP","value","ds_Project","STEP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Combo_TYPE","value","ds_Project","TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Edit_DET_REQ","value","ds_Detail","REQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Edit_WORK","value","ds_Detail","WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Calendar_DATE","value","ds_Detail","DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","MaskEdit_START","value","ds_Detail","START_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","MaskEdit_END","value","ds_Detail","END_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","MaskEdit_WORK","value","ds_Detail","WORK_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","TextArea_PROCESS","value","ds_Detail","PROCESS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","TextArea_RESPONSE","value","ds_Detail","RESPONSE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","TextArea_CONTENT","value","ds_Project","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","TextArea_DET_CONTENT","value","ds_Detail","RESPONSE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Form_Work.xfdl", function(exports) {

        this.Button_Search_onclick = function(obj,e)
        {
        	this.fn_Search_Project();
        }

        this.fn_Search_Project = function()
        {
        	application.gv_Query  = "select * from project_mas";
        	application.gv_Query += " where user_id = '" + application.gv_User_ID + "'";
        	
        	if (this.Combo_STEP_OPTION.index >= 0)
        	{
        		application.gv_Query += "  and step >= " + this.Combo_STEP_OPTION.value;
        	}
        	
        	application.gv_Query += " order by req desc "

        	this.transaction("search_project" ,"host::LGE_SWA/Service/search.jsp","","ds_Project=ds_out","","fn_Callback");
        }

        this.fn_Callback = function(SvcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0)
        	{
        		alert(SvcID + " : [" + ErrorCode + "] " + ErrorMsg);
        		return;
        	}

        	if (SvcID == "search_project")
        	{
        		if (this.ds_Project.rowcount > 0)
        		{
        			this.fn_Search_Detail(0);
        		}
        		return;
        	}
        	
        	if (SvcID == "search_step")
        	{
        		application.gv_Query = "select * from project_code";
        		application.gv_Query += " where type = 'TYPE'";
        		application.gv_Query += " order by code";

        		this.transaction("search_type" ,"host::LGE_SWA/Service/search.jsp","","ds_Type=ds_out","","fn_Callback");
        	}
        	
        	if (SvcID == "search_type")
        	{
        		this.fn_Search_Project();
        	}
        	
        	if (SvcID == "save_project")
        	{
        		alert("프로젝트정보 저장완료!");
        		return;
        	}
        	
        	if (SvcID == "save_detail")
        	{
        		alert("상세정보 저장완료!");
        		return;
        	}
        }

        this.Button_Add_onclick = function(obj,e)
        {
        	if (this.fn_Check_Project())
        	{
        		return false;
        	}
        	
        	if (this.fn_Check_Detail())
        	{
        		return false;
        	}
        	
        	var nRow = this.ds_Project.addRow();
        	this.ds_Project.setColumn(nRow, "USER_ID", application.gv_User_ID);
        	this.Edit_PROJECT.setFocus();
        }

        this.fn_Check_Project = function()
        {
        	if (this.ds_Project.rowcount == 0)
        	{
        		return false;
        	}
        	
        	if (this.ds_Project.getRowType(this.ds_Project.rowposition) != 1)
        	{
        		this.alert("프로젝트 정보를 먼저 저장후 신규 프로젝트를 등록하십시오.");
        		return true;
        	}
        }

        this.ds_Project_canrowposchange = function(obj,e)
        {	
        	var nRow = e.oldrow;
        	
        	if (nRow < 0)
        	{
        		return true;
        	}
        	
        	if ((obj.getRowType(nRow) != 1) && (obj.getRowType(nRow) != 8))
        	{
        		this.alert("프로젝트 정보를 저장 후 이동하십시오.");
        		return false;
        	}
        	
        	if (this.fn_Check_Detail())
        	{
        		return false;
        	}
        	
        	if (obj.getRowType(e.newrow) == 2)
        	{
        		this.ds_Detail.clearData();
        	}
        	else
        	{
        		this.fn_Search_Detail(e.newrow);
        	}
        	
        	return true;
        }

        this.fn_Search_Detail = function(nRow)
        {
        	application.gv_Query = "select * from project_det";
        	application.gv_Query += " where project_req = " + this.ds_Project.getColumn(nRow, "REQ");
        	application.gv_Query += " order by date desc, req desc";
        	
        	this.transaction("search_detail" ,"host::LGE_SWA/Service/search.jsp","","ds_Detail=ds_out","","fn_Callback");
        }

        this.fn_Check_Detail = function()
        {
        	if ((this.ds_Detail.getCaseCount("dataset.getRowType(currow)!=1") != 0) || (this.ds_Detail.getDeletedRowCount() != 0))
        	{
        		if (confirm("상세정보의 변경사항이 있습니다. \n\r변경사항을 저장후 하십시오."))
        		{
        			return true;
        		}
        		else
        		{
        			if (confirm("변경된 상세정보가 전부 무시됩니다. \n\r진행하시겠습니까?"))
        			{
        				return false;
        			}
        			return true;
        		}
        	}
        }

        this.Button_Delete_onclick = function(obj,e)
        {
        	if (this.ds_Project.rowcount == 0)
        	{
        		this.alert("삭제할 데이터가 없습니다.");
        		return;
        	}
        	
        	if (this.confirm("정말 삭제하시겠습니까?\n\r('Save' 작업이 함께 진행됩니다.)"))
        	{
        		if ((this.ds_Detail.rowcount > 0) || (this.ds_Detail.getDeletedRowCount() != 0))
        		{
        			this.alert("상세 일정이 있습니다.\n\r상세 일정을 먼저 삭제/저장하세요.");
        		}
        		else
        		{
        			this.ds_Project.deleteRow(this.ds_Project.rowposition);
        			this.transaction("save_project" ,"host::LGE_SWA/Service/save_project_mas.jsp","ds_in=ds_Project:U","","","fn_Callback");
        		}
        	}
        }

        this.Button_Save_onclick = function(obj,e)
        {
        	if ((this.ds_Project.getCaseCount("dataset.getRowType(currow)!=1") == 0) && (this.ds_Project.getDeletedRowCount() != 0))
        	{
        		this.alert("저장할 내용이 없습니다.");
        		return;
        	}

        	if (this.confirm("추가/변경/삭제된 내용을 저장하시겠습니까?"))
        	{
        		this.transaction("save_project" ,"host::LGE_SWA/Service/save_project_mas.jsp","ds_in=ds_Project:U","","","fn_Callback");
        	}
        }

        this.Button_Add_Det_onclick = function(obj,e)
        {
        	var nPrjReq = this.ds_Project.getColumn(this.ds_Project.rowposition, "REQ");;
        	var nRow = this.ds_Detail.insertRow(0);
        	
        	this.Calendar_DATE.setFocus();

        	this.ds_Detail.setColumn(nRow, "PROJECT_REQ", nPrjReq) ;
        	this.ds_Detail.setColumn(nRow, "DATE", application.gfn_GetToday()) ;
        	this.ds_Detail.setColumn(nRow, "WORK", "작업~") ;
        }

        this.Button_Delete_Det_onclick = function(obj,e)
        {
        	if (this.confirm("정말 삭제하시겠습니까?"))
        	{
        		this.ds_Detail.deleteRow(this.ds_Detail.rowposition);
        	}
        }

        this.Button_Save_Det_onclick = function(obj,e)
        {
        	if ((this.ds_Detail.getCaseCount("dataset.getRowType(currow)!=1") == 0) && (this.ds_Detail.getDeletedRowCount() == 0))
        	{
        		this.alert("저장할 내용이 없습니다.");
        		return;
        	}

        	if (this.confirm("추가/변경/삭제된 내용을 저장하시겠습니까?"))
        	{
        		this.transaction("save_detail" ,"host::LGE_SWA/Service/save_project_det.jsp","ds_in=ds_Detail:U","","","fn_Callback");
        	}
        }

        this.Button_Search_Det_onclick = function(obj,e)
        {
        	if (this.ds_Project.rowcount > 0)
        	{
        		this.fn_Search_Detail(this.ds_Project.rowposition);
        	}
        }

        this.Form_Work_onload = function(obj,e)
        {
        	this.fn_ManageCode("LOGIN", "Form_Login.xfdl");
        }

        this.fn_Search_Code = function()
        {
        	application.gv_Query = "select * from project_code";
        	application.gv_Query += " where type = 'STEP'";
        	application.gv_Query += " order by code";

        	this.transaction("search_step" ,"host::LGE_SWA/Service/search.jsp","","ds_Step=ds_out","","fn_Callback");
        }

        this.Button_STEP_onclick = function(obj,e)
        {
        	this.fn_ManageCode("STEP", "Form_Code.xfdl");
        }

        this.fn_ManageCode = function(sCode,sFormName)
        {
        	newChild = new nexacro.ChildFrame;
        	newChild.init("Child_" + sCode, "absolute", 10, 10, 600, 500, null, null, "Base::" + sFormName);

        	newChild.set_showtitlebar(false);
        	newChild.set_showstatusbar(false);
        	newChild.set_dragmovetype("none");
        	newChild.set_openalign("center middle");
        	newChild.showModal(this.getOwnerFrame(), {sCode:sCode}, this, "fn_Callback_Modal");
        }

        this.fn_Callback_Modal = function(sFormID,vReturn)
        {
        	if (sFormID == "Child_LOGIN" && vReturn == "SUCCESS")
        	{
        		this.parent.Div_Top.Static_User.set_text("[" + application.gv_User_ID + "] " + application.gv_User_NM + "님");
        		this.fn_Search_Code();
        	}
        }

        this.Button_TYPE_onclick = function(obj,e)
        {
        	this.fn_ManageCode("TYPE", "Form_Code.xfdl");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_Project.addEventHandler("canrowposchange", this.ds_Project_canrowposchange, this);
            this.addEventHandler("onload", this.Form_Work_onload, this);
            this.Button_STEP.addEventHandler("onclick", this.Button_STEP_onclick, this);
            this.Button_TYPE.addEventHandler("onclick", this.Button_TYPE_onclick, this);
            this.Button_Search.addEventHandler("onclick", this.Button_Search_onclick, this);
            this.Button_Add.addEventHandler("onclick", this.Button_Add_onclick, this);
            this.Button_Delete.addEventHandler("onclick", this.Button_Delete_onclick, this);
            this.Button_Save.addEventHandler("onclick", this.Button_Save_onclick, this);
            this.Button_Add_Det.addEventHandler("onclick", this.Button_Add_Det_onclick, this);
            this.Button_Delete_Det.addEventHandler("onclick", this.Button_Delete_Det_onclick, this);
            this.Button_Save_Det.addEventHandler("onclick", this.Button_Save_Det_onclick, this);
            this.Button_Search_Det.addEventHandler("onclick", this.Button_Search_Det_onclick, this);

        };

        this.loadIncludeScript("Form_Work.xfdl", true);

       
    };
}
)();
