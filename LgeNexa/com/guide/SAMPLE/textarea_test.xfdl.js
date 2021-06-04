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
                this.set_name("textarea_test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("Edit19", "absolute", "149", "70", "126", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "0", "66", null, "29", "20", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "0%", "66", "12.25%", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Title");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("txtTitle", "absolute", "12.5%", "70", "37.09%", "21", null, null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit28", "absolute", "149", "98", "126", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "0", "94", null, "29", "20", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "0%", "94", "12.25%", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Master No");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "24.92%", "94", "12.25%", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("Version");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "49.84%", "66", "12.25%", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Request No");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "49.84%", "94", "12.25%", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Receive Date");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "74.75%", "66", "9.8%", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Registration Date");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "74.75%", "94", "9.8%", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("Progress Status");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("txtReqNo", "absolute", "62.34%", "70", "12.17%", "21", null, null, this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("txtRegDate", "absolute", "84.8%", "70", null, "21", "29", null, this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("txtReceiveDate", "absolute", "62.34%", "98", "12.17%", "21", null, null, this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("txtProgStat", "absolute", "84.8%", "98", null, "21", "29", null, this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("txtVersion", "absolute", "37.42%", "98", "12.17%", "21", null, null, this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("txtMstNo", "absolute", "12.5%", "98", "12.17%", "21", null, null, this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0", "65", null, "2", "20", null, this);
            obj.set_taborder("18");
            obj.style.set_background("#4f5670ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "0", "124", null, "85", "20", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "0%", "124", "12.25%", "85", null, null, this);
            obj.set_taborder("20");
            obj.set_text("Contents Summary");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "12.66%", "126", null, "80", "1.96%", null, this);
            obj.set_taborder("21");
            obj.set_autosizingtype("row");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"109\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell edittype=\"textarea\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("textarea_test");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item5","txtTitle","value","dsMaster","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","txtReqNo","text","dsMaster","REGUL_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","txtRegDate","text","dsMaster","REGISTRATION_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","txtReceiveDate","text","dsMaster","RECEIVE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","txtProgStat","text","dsMaster","STATUS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","txtVersion","text","dsMaster","VERSION");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","txtMstNo","text","dsMaster","REGUL_MASTER_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("textarea_test.xfdl", true);

       
    };
}
)();
