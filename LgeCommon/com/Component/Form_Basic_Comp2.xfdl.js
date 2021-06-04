﻿(function()
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
                this.set_name("Form_Basic_Comp2");
                this.set_titletext("Basic Component");
                this._setFormPosition(0,0,1224,483);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"txt\">VMI</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">A</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">AB</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"txt\">ABC</Col><Col id=\"lev\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static20", "absolute", "110", "53", null, "63", "0", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "0", "53", "111", "63", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "141", "63", "80", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "368", "63", "80", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "595", "63", "80", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("readonly");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "822", "63", "80", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("essential");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "141", "84", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_value("0");
            obj.set_text("GSFS");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_type("search");
            obj.set_index("0");

            obj = new Combo("Combo01", "absolute", "368", "84", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_value("0");
            obj.set_text("GSFS");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_enable("false");
            obj.set_index("0");

            obj = new Combo("Combo02", "absolute", "595", "84", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo02_innerdataset = new Dataset("Combo02_innerdataset", this.Combo02);
            Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">nexacro14</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">nexacro14.1</Col></Row></Rows>");
            obj.set_innerdataset(Combo02_innerdataset);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_cssclass("readonly");
            obj.set_text("VMI");
            obj.set_value("0");

            obj = new Combo("Combo03", "absolute", "822", "84", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_value("0");
            obj.set_text("GSFS");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_cssclass("essential");
            obj.set_index("0");

            obj = new Static("Static34", "absolute", "110", "115", null, "98", "0", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "0", "115", "111", "98", null, null, this);
            obj.set_taborder("11");
            obj.set_text("ListBox");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "141", "126", "80", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "368", "126", "80", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00", "absolute", "141", "147", "150", "55", null, null, this);
            this.addChild(obj.name, obj);
            var ListBox00_innerdataset = new Dataset("ListBox00_innerdataset", this.ListBox00);
            ListBox00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">nexacro</Col></Row></Rows>");
            obj.set_innerdataset(ListBox00_innerdataset);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new ListBox("ListBox01", "absolute", "368", "147", "150", "55", null, null, this);
            this.addChild(obj.name, obj);
            var ListBox01_innerdataset = new Dataset("ListBox01_innerdataset", this.ListBox01);
            ListBox01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">nexacro</Col></Row></Rows>");
            obj.set_innerdataset(ListBox01_innerdataset);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");

            obj = new Static("Static40", "absolute", "110", "212", null, "64", "0", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "0", "212", "111", "64", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Spin");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "141", "223", "80", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "368", "223", "80", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "595", "223", "80", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("readonly");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "822", "223", "80", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("essential");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00", "absolute", "141", "244", "150", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_value("1");
            obj.style.set_buttonalign("right");
            obj.style.set_buttonsize("18");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin01", "absolute", "368", "244", "150", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_value("1");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin02", "absolute", "595", "244", "150", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_value("1");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin03", "absolute", "822", "244", "150", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_value("1");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "110", "275", null, "208", "0", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "0", "275", "111", "208", null, null, this);
            obj.set_taborder("27");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "141", "286", "80", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "368", "286", "80", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "595", "286", "80", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("readonly");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "822", "286", "80", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("essential");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "141", "307", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_value("20150707");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("Calendar01", "absolute", "368", "307", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_value("20150707");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Calendar("Calendar02", "absolute", "595", "307", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_value("20150707");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("readonly");

            obj = new Calendar("Calendar03", "absolute", "822", "307", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_value("20150707");
            obj.set_dateformat("yyyy-MMMM-dd");
            obj.set_locale("en_US");
            obj.set_cssclass("essential");

            obj = new Calendar("Calendar04", "absolute", "141", "358", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_value("20150707");
            obj.set_type("spin");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("Calendar05", "absolute", "368", "358", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_value("20150707");
            obj.set_type("spin");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Calendar("Calendar06", "absolute", "595", "358", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_value("20150707");
            obj.set_readonly("true");
            obj.set_type("spin");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("readonly");

            obj = new Calendar("Calendar07", "absolute", "822", "358", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("39");
            obj.set_value("20150707");
            obj.set_type("spin");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("essential");

            obj = new Calendar("Calendar08", "absolute", "1018", "287", "168", "182", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_value("20150707");
            obj.set_type("monthonly");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_border("0 none #808080");

            obj = new Static("Static00", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("41");
            obj.set_text("Combo/ListBox/Spin/Calendar");
            obj.set_cssclass("Guide_header");
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

        this.loadIncludeScript("Form_Basic_Comp2.xfdl", true);

       
    };
}
)();
