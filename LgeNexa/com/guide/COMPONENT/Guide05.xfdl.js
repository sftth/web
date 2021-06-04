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
                this.set_name("Guide05");
                this.set_titletext("Grid02");
                this._setFormPosition(0,0,1224,483);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Menu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"Id\" type=\"STRING\" size=\"256\"/><Column id=\"Level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Caption\">2depth Menu01</Col><Col id=\"Id\">00001</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00002</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00003</Col></Row><Row><Col id=\"Caption\">3depth Menu03</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00004</Col></Row><Row><Col id=\"Caption\">3depth Menu04</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00005</Col></Row><Row><Col id=\"Caption\">4depth Menu01</Col><Col id=\"Level\">2</Col><Col id=\"Id\">00006</Col></Row><Row><Col id=\"Caption\">4depth Menu01</Col><Col id=\"Level\">2</Col><Col id=\"Id\">00007</Col></Row><Row><Col id=\"Caption\">2depth Menu02</Col><Col id=\"Id\">00008</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00009</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00010</Col></Row><Row><Col id=\"Caption\">3depth Menu03</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00011</Col></Row><Row><Col id=\"Caption\">3depth Menu04</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00012</Col></Row><Row><Col id=\"Caption\">3depth Menu05</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00013</Col></Row><Row><Col id=\"Caption\">3depth Menu06</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00014</Col></Row><Row><Col id=\"Caption\">2depth Menu03</Col><Col id=\"Id\">00015</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Id\">00016</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Id\">00017</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">3depth Menu03</Col><Col id=\"Id\">00018</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">3depth Menu04</Col><Col id=\"Id\">00019</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">3depth Menu05</Col><Col id=\"Id\">00020</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">3depth Menu06</Col><Col id=\"Id\">00021</Col></Row><Row><Col id=\"Caption\">2depth Menu04</Col><Col id=\"Id\">00022</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00023</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00024</Col></Row><Row><Col id=\"Caption\">3depth Menu03</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00025</Col></Row><Row><Col id=\"Caption\">3depth Menu04</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00026</Col></Row><Row><Col id=\"Caption\">3depth Menu05</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00027</Col></Row><Row><Col id=\"Caption\">3depth Menu06</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00028</Col></Row><Row><Col id=\"Caption\">2depth Menu05</Col><Col id=\"Id\">00029</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Id\">00030</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Id\">00031</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">3depth Menu03</Col><Col id=\"Id\">00032</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">3depth Menu04</Col><Col id=\"Id\">00033</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">3depth Menu05</Col><Col id=\"Id\">00034</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">3depth Menu06</Col><Col id=\"Id\">00035</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Number\" type=\"STRING\" size=\"256\"/><Column id=\"Column01\" type=\"STRING\" size=\"256\"/><Column id=\"Column02\" type=\"STRING\" size=\"256\"/><Column id=\"Column03\" type=\"STRING\" size=\"256\"/><Column id=\"Column04\" type=\"STRING\" size=\"256\"/><Column id=\"Column05\" type=\"STRING\" size=\"256\"/><Column id=\"Column06\" type=\"STRING\" size=\"256\"/><Column id=\"Column07\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Number\">1</Col><Col id=\"Column05\">A</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">A</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">All</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">Button</Col></Row><Row><Col id=\"Number\">2</Col><Col id=\"Column05\">AB</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">AB</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">A</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">Button</Col></Row><Row><Col id=\"Number\">3</Col><Col id=\"Column05\">ABC</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">ABC</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">AB</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">Button</Col></Row><Row><Col id=\"Number\">4</Col><Col id=\"Column05\">ABCD</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">ABCD</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">ABC</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">Button</Col></Row><Row><Col id=\"Number\">5</Col><Col id=\"Column05\">ABCDE</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">ABCDE</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">Button</Col></Row><Row><Col id=\"Number\">6</Col><Col id=\"Column05\">ABCDEF</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">ABCDEF</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">Button</Col></Row><Row><Col id=\"Number\">7</Col><Col id=\"Column05\">ABCDEFG</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">ABCDEFG</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">Button</Col></Row><Row><Col id=\"Number\">8</Col><Col id=\"Column05\">ABCDEFGH</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">ABCDEFGH</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">Button</Col></Row><Row><Col id=\"Number\">9</Col><Col id=\"Column05\">ABCDEFGHI</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">ABCDEFGHI</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">Button</Col></Row><Row><Col id=\"Number\">10</Col><Col id=\"Column05\">ABCDEFGHIJ</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">ABCDEFGHIJ</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">Button</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"txt\">All</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">A</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">AB</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"txt\">ABC</Col><Col id=\"lev\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Tree", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("PopupMenu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"UserData\" type=\"STRING\" size=\"256\"/><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col><Col id=\"idx\">1000</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1001</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1002</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1003</Col><Col id=\"enable\">0</Col></Row><Row><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1004</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1005</Col><Col id=\"enable\">0</Col></Row><Row><Col id=\"UserData\">PopupMenu05</Col><Col id=\"Caption\">PopupMenu05</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1006</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1007</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1008</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1009</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1010</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1011</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1012</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu05</Col><Col id=\"Caption\">PopupMenu05</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1013</Col><Col id=\"enable\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("Grid02");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "110", "53", null, "430", "0", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "0", "53", "111", "430", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Grid");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "151", "88", "1032", "157", null, null, this);
            obj.set_taborder("3");
            obj.set_binddataset("Grid");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"71\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" style=\"align:center middle;\" text=\"Column0\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" style=\"linespace: ;\" cssclass=\"CellEssential\" text=\"Column01&#13;&#10;Column02\"/><Cell col=\"3\" text=\"Column02\"/><Cell col=\"4\" text=\"Column03\"/><Cell col=\"5\" text=\"Column04\"/><Cell col=\"6\" text=\"Column05\"/><Cell col=\"7\" text=\"Column06\"/><Cell col=\"8\" text=\"Column07\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:순번\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"padding:2 2 2 2;\" text=\"bind:Column01\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"padding:2 2 2 2;\" text=\"bind:lev\" combodataset=\"Combo\" combocodecol=\"lev\" combodatacol=\"txt\" combodisplayrowcount=\"-1\" combodisplay=\"display\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"padding:2 2 2 2;\" text=\"bind:Column03\" editdisplay=\"display\" calendardisplay=\"display\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"expand\" style=\"padding:2 0 2 2;\" text=\"bind:Column04\" editdisplay=\"display\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('theme://images/grd_WF_Expand.png')\"/><Cell col=\"6\" style=\"padding:0 8 0 8;\" text=\"bind:Column05\"/><Cell col=\"7\" style=\"align:right middle;padding:0 8 0 8;\" text=\"bind:Column06\" mask=\"###,###,###\"/><Cell col=\"8\" displaytype=\"button\" edittype=\"button\" style=\"align:center middle;padding:2 2 2 2;\" text=\"bind:Column07\" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "153", "89", "1", "40", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "137", "88", "23", "1", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "137", "129", "23", "1", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "115", "100", "32", "18", null, null, this);
            obj.set_taborder("8");
            obj.set_text("H : 42");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "151", "64", "200", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Head text가 두줄로 들어갈 경우");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "151", "298", "1035", "144", null, null, this);
            obj.set_taborder("11");
            obj.set_binddataset("Grid");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"85\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/><Row size=\"25\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_FreezeColumn\" text=\"Column0\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_FreezeColumn\" text=\"ICO\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_FreezeColumn\" text=\"NO\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_FreezeColumnLast\" text=\"Column01\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_FreezeColumn \" text=\"Column02\"/><Cell col=\"5\" text=\"Column03\"/><Cell col=\"6\" text=\"Column04\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_HeadLink\" text=\"Column05\"/><Cell col=\"8\" text=\"Column06\"/><Cell col=\"9\" text=\"Column07\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_FreezeRow\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"image\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_FreezeRow\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_FreezeRow\" text=\"bind:Column0\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_FreezeRowLast\" text=\"bind:Column01\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"padding: ;\" text=\"bind:lev\" combodataset=\"Combo\" combocodecol=\"lev\" combodatacol=\"txt\" combodisplayrowcount=\"-1\" combodisplay=\"display\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"padding: ;\" text=\"bind:Column03\" editdisplay=\"display\" calendardisplay=\"display\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"expand\" style=\"padding: ;\" text=\"bind:Column04\" editdisplay=\"display\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('theme://images/grd_WF_Expand.png')\"/><Cell col=\"7\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_BodyLink\" text=\"bind:Column05\"/><Cell col=\"8\" style=\"align: ;\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Column06\" mask=\"###,###,###\"/><Cell col=\"9\" displaytype=\"button\" edittype=\"button\" style=\"align:center middle;padding:2 2 2 2;\" text=\"bind:Column07\" editdisplay=\"edit\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" style=\"align:center middle;\" text=\"SUMMERY\"/><Cell col=\"8\" colspan=\"2\" style=\"align:right middle;padding:0 9 0 9;\" text=\"321456789\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "151", "274", "160", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Freeze Column Grid");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "250", "262", "1", "50", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "199", "246", "213", "18", null, null, this);
            obj.set_taborder("14");
            obj.set_text("class : <b v='true'>Cellgrd_WF_FreezeColumn</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "358", "280", "1", "30", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "367", "272", "278", "18", null, null, this);
            obj.set_taborder("16");
            obj.set_text("class : <b v='true'>Cellgrd_WF_FreezeColumnLast</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "316", "455", "278", "18", null, null, this);
            obj.set_taborder("17");
            obj.set_text("class : <b v='true'>Cellgrd_WF_FreezeRowLast</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "356", "398", "1", "50", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "121", "452", "278", "18", null, null, this);
            obj.set_taborder("19");
            obj.set_text("class : <b v='true'>Cellgrd_WF_FreezeRow</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "214", "396", "1", "50", null, null, this);
            obj.set_taborder("20");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 483, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide01");
            		p.set_titletext("Grid02");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Guide05.xfdl", function(exports) {

        this.Static03_onclick = function(obj,e)
        {
        	
        }

        this.Static10_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static03.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static10.addEventHandler("onclick", this.Static10_onclick, this);

        };

        this.loadIncludeScript("Guide05.xfdl", true);

       
    };
}
)();
