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
                this.set_name("Form_Search_Top_Temp6");
                this.set_titletext("Search Template");
                this._setFormPosition(0,0,1224,524);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">VMI</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Nexacro</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">Tobesoft</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">XPlatform</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_grid", this);
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
            obj = new Div("div_Data", "absolute", "0", "39", null, null, "0", "0", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "10", "200", "24", null, null, this.div_Data);
            obj.set_taborder("286");
            obj.set_text("DC Code Management");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "367", "10", "200", "24", null, null, this.div_Data);
            obj.set_taborder("287");
            obj.set_text("DC Code Management");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "328", "50", "8", "409", null, null, this.div_Data);
            obj.set_taborder("288");
            obj.set_text("w\r\n8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "359", "50", "8", "409", null, null, this.div_Data);
            obj.set_taborder("289");
            obj.set_text("w\r\n8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Button("Button07", "absolute", "336", "219", "23", "23", null, null, this.div_Data);
            obj.set_taborder("290");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.div_Data.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "336", "246", "23", "23", null, null, this.div_Data);
            obj.set_taborder("291");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "336", "242", "23", "4", null, null, this.div_Data);
            obj.set_taborder("292");
            obj.set_text("h4");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "37", "328", null, null, "20", this.div_Data);
            obj.set_taborder("293");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"226\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" cssclass=\"Cellgrd_WF_Multihead\" text=\"Subsidiary\"/><Cell row=\"1\" text=\"Code\"/><Cell row=\"1\" col=\"1\" text=\"Code Name\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:No\"/><Cell col=\"1\" text=\"bind:Txt\"/></Band></Format></Formats>");
            this.div_Data.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "367", "37", null, null, "0", "20", this.div_Data);
            obj.set_taborder("294");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"170\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DC Code\"/><Cell col=\"1\" text=\"DC Type\"/><Cell col=\"2\" text=\"Base Address\"/><Cell col=\"3\" text=\"Detail Address\"/><Cell col=\"4\" text=\"Zone Type\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"1\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"2\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"3\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"4\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/></Band></Format></Formats>");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static52", "absolute", "367", null, null, "21", "0", "0", this.div_Data);
            obj.set_taborder("295");
            obj.set_text("Total : 100");
            obj.set_cssclass("sta_WF_GridTotal");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", null, "328", "21", null, "0", this.div_Data);
            obj.set_taborder("296");
            obj.set_text("Total : 100");
            obj.set_cssclass("sta_WF_GridTotal");
            this.div_Data.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", null, "10", "111", "24", "0", null, this.div_Data);
            obj.set_taborder("297");
            obj.set_text("Custom Button");
            obj.set_cssclass("btn_WF_Grid");
            this.div_Data.addChild(obj.name, obj);
            obj = new Button("Button03", "absolute", null, "10", "111", "24", "114", null, this.div_Data);
            obj.set_taborder("298");
            obj.set_text("Custom Button");
            obj.set_cssclass("btn_WF_Grid");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "198", "0", "30", "37", null, null, this.div_Data);
            obj.set_taborder("299");
            obj.set_text("h37");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);

            obj = new Div("div_Search", "absolute", "0", "0", null, "39", "0", null, this);
            obj.set_taborder("1");
            obj.set_scrollbars("autohorz");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "30", "8", "80", "21", null, null, this.div_Search);
            obj.set_taborder("57");
            obj.set_text("Subsidiary");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "110", "8", "150", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("58");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("cmb_WF_Essential");
            obj = new Static("Static03", "absolute", "290", "8", "67", "21", null, null, this.div_Search);
            obj.set_taborder("59");
            obj.set_text("Use Flag");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "357", "8", "150", "21", null, null, this.div_Search);
            obj.set_taborder("60");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "384", null, null, "8", "730", "0", this.div_Search);
            obj.set_taborder("61");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "384", "0", null, "8", "730", null, this.div_Search);
            obj.set_taborder("62");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("63");
            obj.set_text("w\r\n20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "260", "0", "30", "37", null, null, this.div_Search);
            obj.set_taborder("64");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", null, "0", "66", "8", "29", null, this.div_Search);
            obj.set_taborder("65");
            obj.set_text("H8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", null, "8", "94", "21", "20", null, this.div_Search);
            obj.set_taborder("66");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            obj.set_tooltiptext("Inquiry");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "20", null, "0", "0", this.div_Search);
            obj.set_taborder("67");
            obj.set_text("w20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", null, "38", "33", "13", "48.61%", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Down");
            this.addChild(obj.name, obj);


            
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
            obj = new Layout("default", "", 0, 39, this.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_scrollbars("autohorz");
            		p.set_cssclass("div_WFSA_Bg");

            	}
            );
            this.div_Search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 524, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Search Template");

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

        this.loadIncludeScript("Form_Search_Top_Temp6.xfdl", true);

       
    };
}
)();
