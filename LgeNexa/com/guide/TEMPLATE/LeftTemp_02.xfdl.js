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
                this.set_name("Temp_02");
                this.set_titletext("Multi Detail");
                this._setFormPosition(0,0,1224,524);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">VMI</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Nexacro</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">Tobesoft</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">XPlatform</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Grid", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ICON\" type=\"STRING\" size=\"256\"/><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Txt\" type=\"STRING\" size=\"256\"/><Column id=\"Number\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Txt\">A</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">1</Col><Col id=\"ICON\">URL('theme://images/ico_WF_GridBlue.png')</Col></Row><Row><Col id=\"Txt\">AB</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">2</Col><Col id=\"ICON\">URL('theme://images/ico_WF_GridGreen.png')</Col></Row><Row><Col id=\"Txt\">ABC</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">3</Col><Col id=\"ICON\">URL('theme://images/ico_WF_GridRed.png')</Col></Row><Row><Col id=\"Txt\">ABCD</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">4</Col><Col id=\"ICON\">URL('theme://images/ico_WF_GridYellow.png')</Col></Row><Row><Col id=\"Txt\">ABCDE</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">5</Col><Col id=\"ICON\"/></Row><Row><Col id=\"Txt\">ABCDEF</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">6</Col></Row><Row><Col id=\"Txt\">ABCDEFG</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">7</Col></Row><Row><Col id=\"Txt\">ABCDEFGH</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">8</Col></Row><Row><Col id=\"Txt\">ABCDEFGHI</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">9</Col></Row><Row><Col id=\"Txt\">ABCDEFGHIJ</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_Data", "absolute", "300", "0", null, null, "0", "0", this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0", "0", null, null, "0", "0", this.div_Data);
            obj.set_taborder("57");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "10", "200", "24", null, null, this.div_Data.Div00);
            obj.set_taborder("0");
            obj.set_text("DC Code Management");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "37", null, null, "0", "20", this.div_Data.Div00);
            obj.set_taborder("6");
            obj.set_binddataset("Grid");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"244\"/><Column size=\"244\"/><Column size=\"244\"/><Column size=\"244\"/><Column size=\"244\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"23\"/></Rows><Band id=\"head\"><Cell text=\"Subsidiary\"/><Cell col=\"1\" text=\"DC Code\"/><Cell col=\"2\" text=\"W/H Code\"/><Cell col=\"3\" text=\"SubInvebtory\"/><Cell col=\"4\" text=\"Description\"/></Band><Band id=\"body\"><Cell displaytype=\"decoratetext\" text=\"bind:Txt\"/><Cell col=\"1\" text=\"bind:Txt\"/><Cell col=\"2\" text=\"bind:Txt\"/><Cell col=\"3\" text=\"bind:Txt\"/><Cell col=\"4\" text=\"bind:Txt\"/></Band></Format></Formats>");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Static("Static52", "absolute", "0", null, null, "21", "0", "0", this.div_Data.Div00);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GridTotal");
            obj.set_text("Total : 100");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", null, "10", "111", "24", "0", null, this.div_Data.Div00);
            obj.set_taborder("41");
            obj.set_text("Custom Button");
            obj.set_cssclass("btn_WF_Grid");
            this.div_Data.Div00.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", null, "10", "111", "24", "114", null, this.div_Data.Div00);
            obj.set_taborder("42");
            obj.set_text("Custom Button");
            obj.set_cssclass("btn_WF_Grid");
            this.div_Data.Div00.addChild(obj.name, obj);

            obj = new Div("div_Search", "absolute", "0", "0", "280", null, null, "0%", this);
            obj.set_taborder("4");
            obj.set_scrollbars("autohorz");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10", "15", "100", "21", null, null, this.div_Search);
            obj.set_taborder("14");
            obj.set_text("Subsidiary");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "110", "15", "159", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("cmb_WF_Essential");
            obj = new Static("Static03", "absolute", "10", "46", "100", "21", null, null, this.div_Search);
            obj.set_taborder("16");
            obj.set_text("DIV_CD");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "110", "46", "159", "21", null, null, this.div_Search);
            obj.set_taborder("17");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "10", null, null, "0", this.div_Search);
            obj.set_taborder("18");
            obj.set_text("w\r\n10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "10", null, "0", "0", this.div_Search);
            obj.set_taborder("19");
            obj.set_text("w10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", null, null, "94", "21", "91", "11", this.div_Search);
            obj.set_taborder("20");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            obj.set_tooltiptext("Inquiry");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", null, "0", "66", "15", "29", null, this.div_Search);
            obj.set_taborder("21");
            obj.set_text("H15");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "10", "78", "100", "21", null, null, this.div_Search);
            obj.set_taborder("23");
            obj.set_text("Use Flag");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "110", "78", "159", "21", null, null, this.div_Search);
            obj.set_taborder("24");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "10", "110", "100", "21", null, null, this.div_Search);
            obj.set_taborder("26");
            obj.set_text("W/H Code");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "110", "110", "159", "21", null, null, this.div_Search);
            obj.set_taborder("27");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "10", "142", "100", "21", null, null, this.div_Search);
            obj.set_taborder("28");
            obj.set_text("Subinventory");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "110", "142", "159", "21", null, null, this.div_Search);
            obj.set_taborder("29");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_SearchSlide", "absolute", "279", "46.76%", "13", "33", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("57");

            	}
            );
            this.div_Data.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");

            	}
            );
            this.div_Data.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 280, 0, this.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_scrollbars("autohorz");
            		p.set_cssclass("div_WFSA_Bg");

            	}
            );
            this.div_Search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 524, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Temp_01");
            		p.set_titletext("Multi Detail");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LeftTemp_02.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("LeftTemp_02.xfdl", function(exports) {

        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        

        this.form_onload = function(obj,e)
        {
        	this.com_fromInit(obj);
        }

        
        this.fn_formInit = function()
        {

        }

        

        

        

        this.btn_SearchSlide_onclick = function(obj,e)
        {
        	this.com_searchSlideLeft();	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_SearchSlide.addEventHandler("onclick", this.btn_SearchSlide_onclick, this);

        };

        this.loadIncludeScript("LeftTemp_02.xfdl", true);

       
    };
}
)();
