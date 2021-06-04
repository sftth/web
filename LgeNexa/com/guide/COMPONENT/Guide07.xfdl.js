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
                this.set_name("Guide07");
                this.set_titletext("PopupMenu/GroupBox/ProgressBar/Menu");
                this._setFormPosition(0,0,1224,483);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Dataset("Menu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"Id\" type=\"STRING\" size=\"256\"/><Column id=\"Level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Caption\">EDI PO</Col><Col id=\"Id\">00001</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">EDI PO 1</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00002</Col></Row><Row><Col id=\"Caption\">EDI PO 2</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00003</Col></Row><Row><Col id=\"Caption\">EDI PO 3</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00004</Col></Row><Row><Col id=\"Caption\">EDI PO 4</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00005</Col></Row><Row><Col id=\"Caption\">EDI PO 4-1</Col><Col id=\"Level\">2</Col><Col id=\"Id\">00006</Col></Row><Row><Col id=\"Caption\">EDI PO 4-2</Col><Col id=\"Level\">2</Col><Col id=\"Id\">00007</Col></Row><Row><Col id=\"Caption\">Pending</Col><Col id=\"Id\">00008</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">Pending 1</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00009</Col></Row><Row><Col id=\"Caption\">Pending 2</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00010</Col></Row><Row><Col id=\"Caption\">Pending 3</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00011</Col></Row><Row><Col id=\"Caption\">Pending 4</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00012</Col></Row><Row><Col id=\"Caption\">Pending 5</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00013</Col></Row><Row><Col id=\"Caption\">Pending 6</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00014</Col></Row><Row><Col id=\"Caption\">Order</Col><Col id=\"Id\">00015</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">Order 1</Col><Col id=\"Id\">00016</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">Order 2</Col><Col id=\"Id\">00017</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">Order 3</Col><Col id=\"Id\">00018</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">Order 4</Col><Col id=\"Id\">00019</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">Order 5</Col><Col id=\"Id\">00020</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">Order 6</Col><Col id=\"Id\">00021</Col></Row><Row><Col id=\"Caption\">Return</Col><Col id=\"Id\">00022</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">Return 1</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00023</Col></Row><Row><Col id=\"Caption\">Return 2</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00024</Col></Row><Row><Col id=\"Caption\">Return 3</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00025</Col></Row><Row><Col id=\"Caption\">Return 4</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00026</Col></Row><Row><Col id=\"Caption\">Return 5</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00027</Col></Row><Row><Col id=\"Caption\">Return 6</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00028</Col></Row><Row><Col id=\"Caption\">Return 7</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00029</Col></Row><Row><Col id=\"Caption\">Return 8</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00030</Col></Row><Row><Col id=\"Caption\">Return 9</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00031</Col></Row><Row><Col id=\"Caption\">Return 10</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00032</Col></Row><Row><Col id=\"Caption\">Deliverty Agent</Col><Col id=\"Id\">00033</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">Deliverty Agent 1</Col><Col id=\"Id\">00034</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">Deliverty Agent 2</Col><Col id=\"Id\">00035</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">Deliverty Agent 3</Col><Col id=\"Id\">00036</Col></Row><Row><Col id=\"Level\">0</Col><Col id=\"Caption\">PSI</Col><Col id=\"Id\">00037</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">PSI 1</Col><Col id=\"Id\">00038</Col></Row><Row><Col id=\"Level\">1</Col><Col id=\"Caption\">PSI 2</Col><Col id=\"Id\">00039</Col></Row><Row><Col id=\"Caption\">Inventory</Col><Col id=\"Id\">00040</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">Inventory 1</Col><Col id=\"Id\">00041</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">Inventory 2</Col><Col id=\"Id\">00042</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">Inventory 3</Col><Col id=\"Id\">00043</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">Report</Col><Col id=\"Id\">00044</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">Report 1</Col><Col id=\"Id\">00045</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">Report 2</Col><Col id=\"Id\">00046</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">Report 3</Col><Col id=\"Id\">00047</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">Admin</Col><Col id=\"Id\">00048</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">Admin 1</Col><Col id=\"Id\">00049</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">Admin 2</Col><Col id=\"Id\">00050</Col><Col id=\"Level\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("PopupMenu02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"UserData\" type=\"STRING\" size=\"256\"/><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"Chk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"UserData\">1</Col><Col id=\"Caption\">Hold Release</Col><Col id=\"idx\">1000</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">2</Col><Col id=\"Caption\">Order Sheet(Print)</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1001</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">3</Col><Col id=\"Caption\">Order Sheet(E-Mail)</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1003</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">4</Col><Col id=\"Caption\">Freeze Column</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1004</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">5</Col><Col id=\"Caption\">Release Column</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1005</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">6</Col><Col id=\"Caption\">Hide Column</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1006</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">7</Col><Col id=\"Caption\">Undo Hide</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1007</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">8</Col><Col id=\"Caption\">Filter</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1008</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">9</Col><Col id=\"Caption\">Custom Filter</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1009</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"idx\">1010</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">10</Col><Col id=\"Caption\">Filter Cancel</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"idx\">1011</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">11</Col><Col id=\"Caption\">Custom Sort</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"idx\">1012</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">12</Col><Col id=\"Caption\">Sort Cancel</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"idx\">1013</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">13</Col><Col id=\"Caption\">Save Layout</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"idx\">1014</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">14</Col><Col id=\"Caption\">Delete Layout</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"idx\">1015</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">15</Col><Col id=\"Caption\">Load Layout</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"idx\">1016</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">16</Col><Col id=\"Caption\">Layout Reset</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "110", "421", null, "62", "0", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "110", "352", null, "70", "0", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("PopupMenu / GroupBox / ProgressBar/ Menu");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "110", "53", null, "133", "0", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "0", "53", "111", "133", null, null, this);
            obj.set_taborder("11");
            obj.set_text("PopupMenu");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "110", "280", null, "73", "0", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "0", "280", "111", "73", null, null, this);
            obj.set_taborder("13");
            obj.set_text("ProgressBar");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00", "absolute", "141", "313", "262", "16", null, null, this);
            obj.set_taborder("3");
            obj.set_text("1/100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "141", "292", "80", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar01", "absolute", "586", "313", "262", "16", null, null, this);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_text("1/100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "586", "292", "80", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "11.52%", "69", null, "21", "78.76%", null, this);
            obj.set_taborder("0");
            obj.set_text("PopupMenu");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "110", "185", null, "96", "0", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "0", "185", "111", "96", null, null, this);
            obj.set_taborder("17");
            obj.set_text("GroupBox");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "141", "196", "80", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "354", "196", "80", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00", "absolute", "141", "217", "127", "43", null, null, this);
            obj.set_text("그룹박스");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01", "absolute", "354", "217", "127", "43", null, null, this);
            obj.set_text("그룹박스");
            obj.set_taborder("2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00", "absolute", "141", "359", "892", "56", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("@Menu");
            obj.set_idcolumn("Id");
            obj.set_captioncolumn("Caption");
            obj.set_levelcolumn("Level");

            obj = new Static("Static80", "absolute", "0", "352", "111", "70", null, null, this);
            obj.set_taborder("20");
            obj.set_text("Menu");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "409", "311", "120", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Progress Test");
            obj.set_tooltiptext("Progress Test");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", "141", "442", "389", "21", null, null, this);
            obj.set_taborder("7");
            obj.getSetter("retry").set("0");
            obj.set_tooltiptext("Upload");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "421", "111", "62", null, null, this);
            obj.set_taborder("23");
            obj.set_text("FileUpload/\r\nFileDownload");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "560", "442", "100", "21", null, null, this);
            obj.set_taborder("8");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload");
            obj.set_tooltiptext("FileDownload");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu01", "absolute", "11.52%", "90", null, "75", "76.39%", null, this);
            this.addChild(obj.name, obj);
            obj.set_innerdataset("@PopupMenu");
            obj.set_idcolumn("idx");
            obj.set_captioncolumn("Caption");
            obj.set_levelcolumn("lev");
            obj.set_enablecolumn("enable");
            obj.set_userdatacolumn("UserData");

            obj = new PopupMenu("PopupMenu03", "absolute", "81.74%", "63", "170", "112", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_innerdataset("@PopupMenu02");
            obj.set_idcolumn("idx");
            obj.set_captioncolumn("Caption");
            obj.set_levelcolumn("lev");
            obj.set_enablecolumn("enable");
            obj.set_userdatacolumn("enable");
            obj.set_cssclass("pmnu_WF_GridFilter");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 483, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide01");
            		p.set_titletext("PopupMenu/GroupBox/ProgressBar/Menu");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Guide07.xfdl", function(exports) {
        this.Button00_onclick = function(obj,e)
        {
        	this.PopupMenu03.trackPopupByComponent(obj, 0, nexacro.toNumber(obj.height));
        }

        this.Button01_onclick = function(obj,e)
        {
        	var i, j;
        	this.ProgressBar00.pos = 0;
        	for( i = 0 ; i < 200 ; i+=2 )
        	{
        		this.ProgressBar00.stepIt();
        		this.updateWindow();
        	}
        }

        this.Menu00_onmenuclick = function(obj,e)
        {
        	
        }
        /**/
        this.Button00_onclick = function(obj,e)
        {
        	var nX   = system.clientToScreenX(obj, 0);
            var nY   = system.clientToScreenY(obj, 21);
        	this.PopupMenu01.trackPopup(nX, nY);
        }

        this.PopupMenu00_onmenuclick = function(obj,e)
        {
        	
        }

        this.PopupMenu03_onmenuclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.PopupMenu01.addEventHandler("onmenuclick", this.PopupMenu00_onmenuclick, this);
            this.PopupMenu03.addEventHandler("onmenuclick", this.PopupMenu03_onmenuclick, this);

        };

        this.loadIncludeScript("Guide07.xfdl", true);

       
    };
}
)();
