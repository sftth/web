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
                this.set_name("Guide03");
                this.set_classname("Guide01");
                this.set_titletext("CheckBox/Radio/Tab/Imageviewer");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"Column01\" type=\"STRING\" size=\"256\"/><Column id=\"Column02\" type=\"STRING\" size=\"256\"/><Column id=\"Column03\" type=\"STRING\" size=\"256\"/><Column id=\"Column04\" type=\"STRING\" size=\"256\"/><Column id=\"Column05\" type=\"STRING\" size=\"256\"/><Column id=\"Column06\" type=\"STRING\" size=\"256\"/><Column id=\"Column07\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"순번\">1</Col><Col id=\"Column05\">가</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">전체</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">2</Col><Col id=\"Column05\">가나</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">가</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">3</Col><Col id=\"Column05\">가나다</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">가나</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">4</Col><Col id=\"Column05\">가나다라</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">가나다</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">5</Col><Col id=\"Column05\">가나다라마</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">6</Col><Col id=\"Column05\">가나다라마바</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">7</Col><Col id=\"Column05\">가나다라마바사</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">8</Col><Col id=\"Column05\">가나다라마바사아</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사아</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">9</Col><Col id=\"Column05\">가나다라마바사아자</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사아자</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">10</Col><Col id=\"Column05\">가나다라마바사아자차</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사아자차</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"txt\">전체</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">가</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">가나</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"txt\">가나다</Col><Col id=\"lev\">3</Col></Row></Rows>");
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

            obj = new Dataset("ds_Radio02", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">0</Col><Col id=\"data\">VMI</Col></Row><Row><Col id=\"id\">1</Col><Col id=\"data\">VMI</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static59", "absolute", "110", "53", null, "70", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "0", "53", "111", "70", null, null, this);
            obj.set_taborder("16");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "141", "84", "127", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("VMI");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", "368", "84", "127", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("VMI");
            obj.set_value("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02", "absolute", "822", "84", "127", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("VMI");
            obj.set_value("true");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "110", "122", null, "70", "0", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "0", "122", "111", "70", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "141", "133", "80", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "368", "133", "80", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "822", "133", "80", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("essential");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "141", "154", "162", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_codecolumn("id");
            obj.set_datacolumn("data");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_innerdataset("@ds_Radio02");
            obj.set_index("0");

            obj = new Radio("Radio01", "absolute", "368", "154", "162", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_codecolumn("id");
            obj.set_datacolumn("data");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_innerdataset("@ds_Radio02");
            obj.set_index("0");

            obj = new Radio("Radio02", "absolute", "822", "154", "162", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_codecolumn("id");
            obj.set_datacolumn("data");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_cssclass("essential");
            obj.set_innerdataset("@ds_Radio02");
            obj.set_index("0");

            obj = new Static("Static97", "absolute", "0", "191", "111", "187", null, null, this);
            obj.set_taborder("22");
            obj.set_text("Tab");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "110", "191", null, "187", "0", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00", "absolute", "138", "224", "332", "133", null, null, this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("Tab 01");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("Tab 02");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab00);
            obj.set_text("Tab 03");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "110", "377", null, "106", "0", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "0", "377", "111", "106", null, null, this);
            obj.set_taborder("25");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "138", "388", "96", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("stretch=\"none\"");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "842", "388", "128", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("stretch=\"fixaspectratio\"");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "138", "409", "332", "53", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("#ffffffff");
            obj.set_image("URL('theme://MainFrame/img_Login_Logo.png')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01", "absolute", "842", "409", "332", "53", null, null, this);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_image("URL('theme://MainFrame/img_Login_Logo.png')");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "842", "202", "332", "22", null, null, this);
            obj.set_taborder("32");
            obj.set_text("showextrabutton = true");
            obj.set_cssclass("pseudo");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab01", "absolute", "842", "224", "332", "133", null, null, this);
            obj.set_taborder("10");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("true");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab01);
            obj.set_text("tabpage1");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab01);
            obj.set_text("tabpage2");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab01);
            obj.set_text("tabpage3");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.Tab01);
            obj.set_text("tabpage4");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.Tab01);
            obj.set_text("tabpage5");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage6", this.Tab01);
            obj.set_text("tabpage6");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage7", this.Tab01);
            obj.set_text("tabpage7");
            this.Tab01.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "490", "388", "80", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("stretch=\"fit\"");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02", "absolute", "490", "409", "332", "53", null, null, this);
            obj.set_taborder("12");
            obj.set_image("URL('theme://MainFrame/img_Login_Logo.png')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("14");
            obj.set_text("CheckBox/Radio/Tab/Imageviewer");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "138", "202", "330", "22", null, null, this);
            obj.set_taborder("38");
            obj.set_text("showextrabutton = false");
            obj.set_cssclass("pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "490", "202", "332", "22", null, null, this);
            obj.set_taborder("39");
            obj.set_text("tabjustify = true");
            obj.set_cssclass("pseudo");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab02", "absolute", "490", "224", "332", "133", null, null, this);
            obj.set_taborder("9");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_tabjustify("true");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab02);
            obj.set_text("Tab 01");
            this.Tab02.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "0", null, "10", "0", null, this.Tab02.tabpage1);
            obj.set_taborder("0");
            obj.set_text("H10");
            obj.set_visible("false");
            obj.style.set_background("#ff727280");
            obj.style.set_align("center middle");
            this.Tab02.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab02);
            obj.set_text("Tab 02");
            this.Tab02.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab02);
            obj.set_text("Tab 03");
            this.Tab02.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "141", "63", "80", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("normal");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "368", "63", "80", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("disabled");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "595", "63", "80", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("readonly");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "822", "63", "80", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("essential");
            obj.set_cssclass("Pseudo");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03", "absolute", "595", "84", "127", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("VMI");
            obj.set_value("true");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio03", "absolute", "595", "154", "162", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("@ds_Radio02");
            obj.set_codecolumn("id");
            obj.set_datacolumn("data");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab02.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("Tab 01");

            	}
            );
            this.Tab02.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 483, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide01");
            		p.set_titletext("CheckBox/Radio/Tab/Imageviewer");

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

        this.loadIncludeScript("Guide03.xfdl", true);

       
    };
}
)();
