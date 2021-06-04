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
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            obj = new Static("Static56", "absolute", "0", null, null, "29", "0", "84", this.div_Data);
            obj.set_taborder("267");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "0", null, null, "29", "0", "56", this.div_Data);
            obj.set_taborder("268");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0%", null, "100%", "29", null, "0", this.div_Data);
            obj.set_taborder("269");
            obj.set_cssclass("sta_WFDA_Data");
            obj.style.set_background("#ffffffff");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "8", null, null, "29", "7", "28", this.div_Data);
            obj.set_taborder("270");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "10", "200", "24", null, null, this.div_Data);
            obj.set_taborder("271");
            obj.set_text("DC Code Management");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", null, "200", "24", null, "116", this.div_Data);
            obj.set_taborder("272");
            obj.set_text("DC Code Mapping");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", null, null, "10", "0", "140", this.div_Data);
            obj.set_taborder("273");
            obj.set_text("h10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "200", "335", "30", "37", null, null, this.div_Data);
            obj.set_taborder("274");
            obj.set_text("h37");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "80.3%", null, null, "57", "0", "0", this.div_Data);
            obj.set_taborder("276");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0%", null, "12.25%", "29", null, "28", this.div_Data);
            obj.set_taborder("277");
            obj.set_text("Management");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static38", "absolute", "0%", null, "36.6%", "29", null, "0", this.div_Data);
            obj.set_taborder("278");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static54", "absolute", "0%", null, "24.43%", "29", null, "84", this.div_Data);
            obj.set_taborder("279");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_LabelTitle");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit09", "absolute", "80.72%", null, "18.95%", "21", null, "60", this.div_Data);
            obj.set_taborder("280");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "49.03%", null, "18.94%", "21", null, "60", this.div_Data);
            obj.set_taborder("282");
            this.div_Data.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "80.74%", null, "18.4%", "21", null, "88", this.div_Data);
            this.div_Data.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.div_Data.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">nexacro</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("283");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("Static88", "absolute", "985", null, "3", "113", null, "0", this.div_Data);
            obj.set_taborder("286");
            obj.set_text("w3");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static89", "absolute", "1220", null, "3", "113", null, "0", this.div_Data);
            obj.set_taborder("287");
            obj.set_text("w3");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "80.74%", null, "18.94%", "49", null, "4", this.div_Data);
            obj.set_taborder("288");
            this.div_Data.addChild(obj.name, obj);
            obj = new Combo("Combo05", "absolute", "49.02%", null, "18.95%", "21", null, "88", this.div_Data);
            this.div_Data.addChild(obj.name, obj);
            obj.set_taborder("289");
            obj = new Grid("Grid00", "absolute", "0", "37", null, null, "0", "170", this.div_Data);
            obj.set_taborder("290");
            obj.set_binddataset("Grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"226\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"175\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" cssclass=\"Cellgrd_WF_Multihead\" text=\"Subsidiary\"/><Cell col=\"2\" rowspan=\"2\" text=\"DC Code\"/><Cell col=\"3\" rowspan=\"2\" text=\"DC Type\"/><Cell col=\"4\" rowspan=\"2\" text=\"Base Address\"/><Cell col=\"5\" rowspan=\"2\" text=\"Detail Address\"/><Cell col=\"6\" rowspan=\"2\" text=\"Zone Type\"/><Cell row=\"1\" text=\"Code\"/><Cell row=\"1\" col=\"1\" text=\"Code Name\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:No\"/><Cell col=\"1\" text=\"bind:Txt\"/><Cell col=\"2\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"3\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"4\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/></Band></Format></Formats>");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static52", "absolute", "0", null, null, "21", "0", "150", this.div_Data);
            obj.set_taborder("291");
            obj.set_text("Total : 100");
            obj.set_cssclass("sta_WF_GridTotal");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0%", null, "12.25%", "29", null, "56", this.div_Data);
            obj.set_taborder("292");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_LabelCenter");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "12.12%", null, "12.34%", "29", null, "56", this.div_Data);
            obj.set_taborder("293");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_LabelCenter");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "24.35%", null, "12.25%", "113", null, "0", this.div_Data);
            obj.set_taborder("294");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_LabelTitle");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "12.12%", null, "12.34%", "29", null, "28", this.div_Data);
            obj.set_taborder("295");
            obj.set_text("Management");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0%", null, "12.25%", "29", null, "0", this.div_Data);
            obj.set_taborder("296");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "12.12%", null, "12.34%", "29", null, "0", this.div_Data);
            obj.set_taborder("297");
            obj.set_cssclass("sta_WFDA_Data");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "0.33%", null, "11.6%", "21", null, "4", this.div_Data);
            obj.set_taborder("298");
            obj.set_value("Management");
            obj.set_cssclass("essential");
            this.div_Data.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "12.55%", null, "11.69%", "21", null, "4", this.div_Data);
            obj.set_taborder("299");
            obj.set_value("Management");
            obj.set_cssclass("readonly");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static61", "absolute", "36.52%", null, "12.25%", "29", null, "0", this.div_Data);
            obj.set_taborder("300");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "36.52%", null, "12.25%", "29", null, "28", this.div_Data);
            obj.set_taborder("301");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "36.52%", null, "12.25%", "29", null, "56", this.div_Data);
            obj.set_taborder("302");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static57", "absolute", "36.52%", null, "12.25%", "29", null, "84", this.div_Data);
            obj.set_taborder("303");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Combo("Combo17", "absolute", "49.02%", null, "18.95%", "21", null, "32", this.div_Data);
            this.div_Data.addChild(obj.name, obj);
            obj.set_taborder("304");
            obj = new Calendar("Calendar06", "absolute", "49.02%", null, "18.95%", "21", null, "4", this.div_Data);
            this.div_Data.addChild(obj.name, obj);
            obj.set_taborder("305");
            obj.set_cssclass("WF_Essential");
            obj = new Static("Static60", "absolute", "68.22%", null, "12.25%", "29", null, "84", this.div_Data);
            obj.set_taborder("306");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static45", "absolute", "68.22%", null, "12.25%", "29", null, "56", this.div_Data);
            obj.set_taborder("307");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "68.22%", null, "12.25%", "57", null, "0", this.div_Data);
            obj.set_taborder("308");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", null, "10", "150", "24", "235", null, this.div_Data);
            obj.set_taborder("310");
            obj.set_text("Unit : $");
            obj.set_cssclass("sta_WF_GridTxt");
            this.div_Data.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", null, "10", "111", "24", "114", null, this.div_Data);
            obj.set_taborder("311");
            obj.set_text("Custom Button");
            obj.set_cssclass("btn_WF_Grid");
            this.div_Data.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", null, "10", "111", "24", "0", null, this.div_Data);
            obj.set_taborder("312");
            obj.set_text("Custom Button");
            obj.set_cssclass("btn_WF_Grid");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", null, null, "2", "0", "111", this.div_Data);
            obj.set_taborder("313");
            obj.style.set_background("#4f5670ff");
            this.div_Data.addChild(obj.name, obj);

            obj = new Div("div_Search", "absolute", "0", "0", "280", null, null, "0%", this);
            obj.set_taborder("8");
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

            obj = new Button("btn_SearchSlide", "absolute", "279", "46.76%", "13", "33", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");

            	}
            );
            this.div_Data.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 280, 0, this.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
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
            		p.set_titletext("Master Detail (n:1)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LeftTemp_03.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("LeftTemp_03.xfdl", function(exports) {

        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        

        this.Temp_02_onload = function(obj,e)
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
            this.btn_SearchSlide.addEventHandler("onclick", this.btn_SearchSlide_onclick, this);

        };

        this.loadIncludeScript("LeftTemp_03.xfdl", true);

       
    };
}
)();
