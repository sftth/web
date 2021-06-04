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
                this.set_name("Form_Basic_Comp6");
                this.set_titletext("Basic Component");
                this._setFormPosition(0,0,1224,483);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_icon", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">URL('theme://images/ico_png.png')</Col><Col id=\"Column0\">URL('theme://images/ico_WF_Bin.png')</Col></Row><Row><Col id=\"Column1\">URL('theme://images/btn_WF_Excel.png')</Col><Col id=\"Column0\">URL('theme://images/icon_WF_Write.png')</Col></Row><Row><Col id=\"Column1\">URL('theme://images/file_icon_DOC.png')</Col><Col id=\"Column0\">URL('theme://images/btn_WF_ExcelDownload.png')</Col></Row><Row><Col id=\"Column1\">URL('theme://images/file_icon_ETC.png')</Col><Col id=\"Column0\">URL('theme://images/btn_WF_ExcelUpload.png')</Col></Row><Row><Col id=\"Column1\">URL('theme://images/file_icon_IMG.png')</Col><Col id=\"Column0\">URL('theme://images/btn_WF_FileAdd.png')</Col></Row><Row><Col id=\"Column1\">URL('theme://images/file_icon_PDF.png')</Col><Col id=\"Column0\">URL('theme://images/btn_WF_FileDelete.png')</Col></Row><Row><Col id=\"Column1\">URL('theme://images/file_icon_PPT.png')</Col><Col id=\"Column0\">URL('theme://images/btn_WF_FileDownload.png')</Col></Row><Row><Col id=\"Column1\">URL('theme://images/file_icon_TXT.png')</Col><Col id=\"Column0\">URL('theme://images/btn_WF_FileUpload.png')</Col></Row><Row><Col id=\"Column1\">URL('theme://images/file_icon_XLS.png')</Col><Col id=\"Column0\">URL('theme://images/btn_WF_FileExecute.png')</Col></Row><Row><Col id=\"Column1\">URL('theme://images/file_icon_ZIP.png')</Col><Col id=\"Column0\">URL('theme://images/btn_WF_FolderAdd.png')</Col></Row><Row><Col id=\"Column1\">URL('theme://images/ico_bmp.png')</Col><Col id=\"Column0\">URL('theme://images/btn_WF_FolderDelete.png')</Col></Row><Row><Col id=\"Column1\">URL('theme://images/ico_gif.png')</Col><Col id=\"Column0\">URL('theme://images/btn_WF_Save.png')</Col></Row><Row><Col id=\"Column1\">URL('theme://images/ico_hwp.png')</Col><Col id=\"Column0\">URL('theme://images/btn_WF_GridEndN.png')</Col></Row><Row><Col id=\"Column1\">URL('theme://images/ico_jpg.png')</Col><Col id=\"Column0\"/></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Number\" type=\"STRING\" size=\"256\"/><Column id=\"Column01\" type=\"STRING\" size=\"256\"/><Column id=\"Column02\" type=\"STRING\" size=\"256\"/><Column id=\"Column03\" type=\"STRING\" size=\"256\"/><Column id=\"Column04\" type=\"STRING\" size=\"256\"/><Column id=\"Column05\" type=\"STRING\" size=\"256\"/><Column id=\"Column06\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column07\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Number\">1</Col><Col id=\"Column05\">A</Col><Col id=\"Column06\">123456789</Col><Col id=\"Column01\">A</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">All</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">Delete</Col><Col id=\"Column0\">1</Col><Col id=\"Column1\">URL('theme://images/ico_WF_GridBlue.png')</Col><Col id=\"Column03\">20150707</Col></Row><Row><Col id=\"Number\">2</Col><Col id=\"Column05\">AB</Col><Col id=\"Column06\">3333</Col><Col id=\"Column01\">AB</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">A</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">Delete</Col><Col id=\"Column0\">2</Col><Col id=\"Column1\">URL('theme://images/ico_WF_GridGreen.png')</Col><Col id=\"Column03\">20171108</Col></Row><Row><Col id=\"Number\">3</Col><Col id=\"Column05\">ABC</Col><Col id=\"Column06\">22222</Col><Col id=\"Column01\">ABC</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">AB</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">Delete</Col><Col id=\"Column0\">3</Col><Col id=\"Column1\">URL('theme://images/ico_WF_GridRed.png')</Col></Row><Row><Col id=\"Number\">8</Col><Col id=\"Column05\">ABCDEFGH</Col><Col id=\"Column06\">22222</Col><Col id=\"Column01\">ABCDEFGH</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">Delete</Col><Col id=\"Column0\">8</Col><Col id=\"Column1\">URL('theme://images/ico_WF_GridYellow.png')</Col></Row><Row><Col id=\"Number\">9</Col><Col id=\"Column05\">ABCDEFGHI</Col><Col id=\"Column06\">7777777</Col><Col id=\"Column01\">ABCDEFGHI</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">Delete</Col><Col id=\"Column0\">9</Col><Col id=\"Column1\"/></Row><Row><Col id=\"Number\">10</Col><Col id=\"Column05\">ABCDEFGHIJ</Col><Col id=\"Column06\">33333</Col><Col id=\"Column01\">ABCDEFGHIJ</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">Delete</Col><Col id=\"Column0\">10</Col><Col id=\"Column1\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\">4</Col><Col id=\"Number\">4</Col><Col id=\"Column01\">ABCD</Col><Col id=\"Column02\">ABC</Col><Col id=\"Column03\"/><Col id=\"Column04\">expand</Col><Col id=\"Column05\">ABCD</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">Delete</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\">5</Col><Col id=\"Number\">5</Col><Col id=\"Column01\">ABCDE</Col><Col id=\"Column02\"/><Col id=\"Column03\"/><Col id=\"Column04\">expand</Col><Col id=\"Column05\">ABCDE</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">Delete</Col><Col id=\"lev\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\">6</Col><Col id=\"Number\">6</Col><Col id=\"Column01\">ABCDEF</Col><Col id=\"Column02\"/><Col id=\"Column03\"/><Col id=\"Column04\">expand</Col><Col id=\"Column05\">ABCDEF</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">Delete</Col><Col id=\"lev\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\">7</Col><Col id=\"Number\">7</Col><Col id=\"Column01\">ABCDEFG</Col><Col id=\"Column02\"/><Col id=\"Column03\"/><Col id=\"Column04\">expand</Col><Col id=\"Column05\">ABCDEFG</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">Delete</Col><Col id=\"lev\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
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

            obj = new Dataset("ds_tree", this);
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


            
            // UI Components Initialize
            obj = new Static("Static76", "absolute", "110", "2027", null, "253", "0", null, this);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "110", "1159", null, "443", "0", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "110", "700", null, "460", "0", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "110", "480", null, "221", "0", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "110", "53", null, "428", "0", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "0", "53", "111", "2227", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Grid");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "151", "151", "1032", "235", null, null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_grid");
            obj.set_locale("es_BO");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"168\"/><Column size=\"168\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"42\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/><Row size=\"25\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" style=\"align:center middle;\" text=\"Column0\"/><Cell col=\"1\" text=\"ICO\"/><Cell col=\"2\" text=\"NO\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"Column01\"/><Cell col=\"4\" text=\"Column02\"/><Cell col=\"5\" text=\"Column03\"/><Cell col=\"6\" text=\"Column03\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_Point\" text=\"Column04\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_HeadLink\" text=\"Column05\"/><Cell col=\"9\" text=\"Column06\"/><Cell col=\"10\" text=\"Btn\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"image\" style=\"align:center middle;\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"padding: ;\" text=\"bind:Column01\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"padding: ;\" text=\"bind:lev\" combodataset=\"ds_combo\" combocodecol=\"lev\" combodatacol=\"txt\" combodisplayrowcount=\"-1\" combodisplay=\"display\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"text\" style=\"padding: ;\" text=\"bind:Column03\" mask=\"dd-MMMM-yyyy\" locale=\"en_US\" editdisplay=\"display\" calendardisplay=\"edit\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"normal\" style=\"padding: ;\" text=\"bind:Column03\" mask=\"yyyy-MM-dd HH:mm:ss\" editdisplay=\"display\" calendardisplay=\"display\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"expand\" style=\"padding: ;\" text=\"bind:Column04\" editdisplay=\"display\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('theme://images/grd_WF_Expand.png')\"/><Cell col=\"8\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_BodyLink\" text=\"bind:Column05\"/><Cell col=\"9\" style=\"align: ;\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Column06\" mask=\"###,###,###\"/><Cell col=\"10\" displaytype=\"button\" edittype=\"button\" style=\"align: ;\" text=\"bind:Column07\" editdisplay=\"edit\"/></Band><Band id=\"summary\"><Cell colspan=\"11\" style=\"align:center middle;\" text=\"SUMMERY\"/><Cell col=\"11\" colspan=\"2\" style=\"align:right middle;padding:0 9 0 9;\" text=\"321456789\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "151", "517", "223", "162", null, null, this);
            obj.set_cssclass("grd_WF_Tree");
            obj.set_taborder("6");
            obj.set_binddataset("ds_tree");
            obj.set_autofittype("col");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"205\"/></Columns><Rows><Row size=\"23\"/></Rows><Band id=\"body\" style=\"cellpadding: ;\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:txt\" treelevel=\"bind:lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "151", "490", "80", "24", null, null, this);
            obj.set_taborder("7");
            obj.set_text("Tree Grid");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03", "absolute", "151", "748", "1032", "192", null, null, this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_grid");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"86\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"24\"/><Row size=\"25\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" style=\"align:center middle;\" text=\"Column0\"/><Cell col=\"1\" rowspan=\"2\" text=\"NO\"/><Cell col=\"2\" colspan=\"7\" cssclass=\"Cellgrd_WF_Multihead\" text=\"Component\"/><Cell row=\"1\" col=\"2\" text=\"Edit\"/><Cell row=\"1\" col=\"3\" text=\"Combo\"/><Cell row=\"1\" col=\"4\" text=\"Calendar\"/><Cell row=\"1\" col=\"5\" text=\"Edit+Expand\"/><Cell row=\"1\" col=\"6\" text=\"Normal\"/><Cell row=\"1\" col=\"7\" text=\"Mask\"/><Cell row=\"1\" col=\"8\" text=\"Button\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:순번\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"padding: ;\" text=\"bind:Column01\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"padding: ;\" text=\"bind:lev\" combodataset=\"ds_combo\" combocodecol=\"lev\" combodatacol=\"txt\" combodisplayrowcount=\"-1\" combodisplay=\"display\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"padding: ;\" text=\"bind:Column03\" editdisplay=\"display\" calendardisplay=\"display\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"expand\" style=\"padding: ;\" text=\"bind:Column04\" editdisplay=\"display\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('theme://images/grd_WF_Expand.png')\"/><Cell col=\"6\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_BodyLink\" text=\"bind:Column05\"/><Cell col=\"7\" style=\"align: ;\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Column06\" mask=\"###,###,###\"/><Cell col=\"8\" displaytype=\"button\" edittype=\"button\" style=\"align: ;\" text=\"bind:Column07\" editdisplay=\"edit\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" style=\"align:center middle;\" text=\"Summery\"/><Cell col=\"7\" colspan=\"2\" style=\"align:right middle;padding: ;\" text=\"321456789\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "151", "721", "162", "24", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Multi Head");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04", "absolute", "151", "1207", "1032", "261", null, null, this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_grid");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"86\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"25\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" style=\"align:center middle;\" text=\"Column0\"/><Cell col=\"1\" rowspan=\"2\" text=\"NO\"/><Cell col=\"2\" colspan=\"7\" cssclass=\"Cellgrd_WF_Multihead\" text=\"Component\"/><Cell row=\"1\" col=\"2\" text=\"Edit\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"Combo\"/><Cell row=\"1\" col=\"4\" text=\"Calendar\"/><Cell row=\"1\" col=\"5\" text=\"Edit+Expand\"/><Cell row=\"1\" col=\"6\" text=\"Normal\"/><Cell row=\"1\" col=\"7\" text=\"Mask\"/><Cell row=\"1\" col=\"8\" text=\"Button\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:순번\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"padding: ;\" text=\"bind:Column01\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"padding: ;\" text=\"bind:lev\" combodataset=\"ds_combo\" combocodecol=\"lev\" combodatacol=\"txt\" combodisplayrowcount=\"-1\" combodisplay=\"display\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"padding: ;\" text=\"bind:Column03\" editdisplay=\"display\" calendardisplay=\"display\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"expand\" style=\"padding: ;\" text=\"bind:Column04\" editdisplay=\"display\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('theme://images/grd_WF_Expand.png')\"/><Cell col=\"6\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_BodyLink\" text=\"bind:Column05\"/><Cell col=\"7\" style=\"align: ;\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Column06\" mask=\"###,###,###\"/><Cell col=\"8\" displaytype=\"button\" edittype=\"button\" style=\"padding: ;\" text=\"bind:Column07\" editdisplay=\"edit\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_sum04\" text=\"Total04\"/><Cell col=\"7\" colspan=\"2\" style=\"align:right middle;padding: ;\" cssclass=\"Cellgrd_WF_sum04\" text=\"1,000,000,000\" mask=\"###,###,###\"/><Cell row=\"1\" colspan=\"7\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_sum03\" text=\"Total03\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" style=\"align:right middle;padding: ;\" cssclass=\"Cellgrd_WF_sum03\" text=\"1,000,000,000\"/><Cell row=\"2\" colspan=\"7\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_sum02\" text=\"Total02\"/><Cell row=\"2\" col=\"7\" colspan=\"2\" style=\"align:right middle;padding: ;\" cssclass=\"Cellgrd_WF_sum02\" text=\"1,000,000,000\"/><Cell row=\"3\" colspan=\"7\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_sum01\" text=\"Total01\"/><Cell row=\"3\" col=\"7\" colspan=\"2\" style=\"align:right middle;padding: ;\" cssclass=\"Cellgrd_WF_sum01\" text=\"1,000,000,000\"/><Cell row=\"4\" colspan=\"7\" text=\"Summery\"/><Cell row=\"4\" col=\"7\" colspan=\"2\" style=\"align:right middle;\" text=\"1,000,000,000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "151", "1180", "162", "24", null, null, this);
            obj.set_taborder("11");
            obj.set_text("summ");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "151", "148", null, "3", "219", null, this);
            obj.set_taborder("12");
            obj.set_text("H3");
            obj.set_visible("false");
            obj.style.set_background("#ff727280");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "151", "124", "120", "24", null, null, this);
            obj.set_taborder("13");
            obj.set_text("Default Grid");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "151", "409", "198", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Grid Cell에 들어갈 신호등 이미지");
            obj.set_cssclass("Guide_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "440", "1364", "1", "133", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "426", "1501", "201", "18", null, null, this);
            obj.set_taborder("16");
            obj.set_text("class : <b v='true'>Cellgrd_WF_sum04</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "382", "1525", "201", "18", null, null, this);
            obj.set_taborder("17");
            obj.set_text("class : <b v='true'>Cellgrd_WF_sum03</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "396", "1388", "1", "133", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "364", "1412", "1", "133", null, null, this);
            obj.set_taborder("19");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "350", "1549", "201", "18", null, null, this);
            obj.set_taborder("20");
            obj.set_text("class : <b v='true'>Cellgrd_WF_sum02</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "330", "1437", "1", "133", null, null, this);
            obj.set_taborder("21");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "316", "1574", "201", "18", null, null, this);
            obj.set_taborder("22");
            obj.set_text("class : <b v='true'>Cellgrd_WF_sum01</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "312", "135", "1", "21", null, null, this);
            obj.set_taborder("23");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "303", "115", "240", "18", null, null, this);
            obj.set_taborder("24");
            obj.set_text("class : <b v='true'>Cellgrd_WF_HeadEssential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "888", "73", "200", "18", null, null, this);
            obj.set_taborder("25");
            obj.set_text("class : <b v='true'>Cellgrd_WF_headLink</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "151", "1347", "1", "120", null, null, this);
            obj.set_taborder("26");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "137", "1346", "23", "1", null, null, this);
            obj.set_taborder("27");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "137", "1370", "23", "1", null, null, this);
            obj.set_taborder("28");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "137", "1394", "23", "1", null, null, this);
            obj.set_taborder("29");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "115", "1447", "32", "18", null, null, this);
            obj.set_taborder("30");
            obj.set_text("H : 25");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "115", "1350", "32", "18", null, null, this);
            obj.set_taborder("31");
            obj.set_text("H : 24");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "137", "1418", "23", "1", null, null, this);
            obj.set_taborder("32");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "137", "1442", "23", "1", null, null, this);
            obj.set_taborder("33");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "137", "1467", "23", "1", null, null, this);
            obj.set_taborder("34");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "115", "1374", "32", "18", null, null, this);
            obj.set_taborder("35");
            obj.set_text("H : 24");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "115", "1398", "32", "18", null, null, this);
            obj.set_taborder("36");
            obj.set_text("H : 24");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "115", "1423", "32", "18", null, null, this);
            obj.set_taborder("37");
            obj.set_text("H : 24");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "724", "721", "221", "18", null, null, this);
            obj.set_taborder("38");
            obj.set_text("class : <b v='true'>Cellgrd_WF_Multihead</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "766", "741", "1", "33", null, null, this);
            obj.set_taborder("39");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("40");
            obj.set_text("Grid");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "1072", "124", "111", "24", null, null, this);
            obj.set_taborder("41");
            obj.set_text("Custom Button");
            obj.set_cssclass("btn_WF_Grid");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "958", "124", "111", "24", null, null, this);
            obj.set_taborder("42");
            obj.set_text("Custom Button");
            obj.set_cssclass("btn_WF_Grid");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "116", "152", "43", "25", null, null, this);
            obj.set_taborder("43");
            obj.set_text("h25");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "151", "441", "11", "10", null, null, this);
            obj.set_taborder("44");
            obj.style.set_background("URL('theme://images/ico_WF_GridBlue.png')");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "192", "441", "11", "10", null, null, this);
            obj.set_taborder("45");
            obj.style.set_background("URL('theme://images/ico_WF_GridGreen.png')");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "233", "441", "11", "10", null, null, this);
            obj.set_taborder("46");
            obj.style.set_background("URL('theme://images/ico_WF_GridRed.png')");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "274", "441", "11", "10", null, null, this);
            obj.set_taborder("47");
            obj.style.set_background("URL('theme://images/ico_WF_GridYellow.png')");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "116", "177", "43", "24", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h24");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "115", "779", "32", "18", null, null, this);
            obj.set_taborder("49");
            obj.set_text("H : 25");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "115", "754", "32", "18", null, null, this);
            obj.set_taborder("50");
            obj.set_text("H : 25");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "135", "798", "23", "1", null, null, this);
            obj.set_taborder("51");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "135", "775", "23", "1", null, null, this);
            obj.set_taborder("52");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "135", "749", "23", "1", null, null, this);
            obj.set_taborder("53");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "151", "750", "1", "49", null, null, this);
            obj.set_taborder("54");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "895", "91", "1", "70", null, null, this);
            obj.set_taborder("55");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "384", "517", "223", "162", null, null, this);
            obj.set_cssclass("grd_WF_Tree");
            obj.set_taborder("56");
            obj.set_binddataset("ds_tree");
            obj.set_autofittype("col");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_enable("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"205\"/></Columns><Rows><Row size=\"23\"/><Row size=\"25\" band=\"summ\"/></Rows><Band id=\"body\" style=\"cellpadding: ;\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:txt\" treelevel=\"bind:lev\"/></Band><Band id=\"summary\"><Cell text=\"가나다라\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "116", "361", "43", "25", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h25");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "701", "63", "168", "18", null, null, this);
            obj.set_taborder("58");
            obj.set_text("class : <b v='true'>Cellgrd_WF_Point</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "713", "81", "1", "80", null, null, this);
            obj.set_taborder("59");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "798", "124", "150", "24", null, null, this);
            obj.set_taborder("60");
            obj.set_text("Unit : $");
            obj.set_cssclass("sta_WF_GridTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "151", "385", "1032", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_text("Total : 100");
            obj.set_cssclass("sta_WF_GridTotal");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "941", "417", "273", "18", null, null, this);
            obj.set_taborder("62");
            obj.set_text("class : <b v='true'>Cellgrd_WF_Number (우측정렬)</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "1025", "328", "1", "85", null, null, this);
            obj.set_taborder("63");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "863", "437", "201", "18", null, null, this);
            obj.set_taborder("64");
            obj.set_text("class : <b v='true'>Cellgrd_WF_BodyLink</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "877", "328", "1", "103", null, null, this);
            obj.set_taborder("65");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "489", "437", "273", "18", null, null, this);
            obj.set_taborder("66");
            obj.set_text("class : <b v='true'>sta_WF_GridTotal (조회건수)</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "503", "398", "1", "35", null, null, this);
            obj.set_taborder("67");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "771", "101", "1", "27", null, null, this);
            obj.set_taborder("68");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "891", "83", "168", "18", null, null, this);
            obj.set_taborder("69");
            obj.set_text("class : <b v='true'>sta_WF_GridTxt</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "110", "1601", null, "427", "0", null, this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "151", "1622", "80", "24", null, null, this);
            obj.set_taborder("71");
            obj.set_text("ICON");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid05", "absolute", "151", "1649", "1032", "349", null, null, this);
            obj.set_cssclass("grd_WF_Tree");
            obj.set_taborder("72");
            obj.set_binddataset("ds_icon");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"465\"/><Column size=\"50\"/><Column size=\"465\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ICON\"/><Cell col=\"1\" text=\"이미지 경로\"/><Cell col=\"2\" text=\"ICON\"/><Cell col=\"3\" text=\"이미지 경로\"/></Band><Band id=\"body\" style=\"cellpadding: ;\"><Cell displaytype=\"image\" style=\"align:center middle;\" text=\"bind:Column1\" treelevel=\"bind:lev\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"image\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"3\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid06", "absolute", "151", "984", "1032", "157", null, null, this);
            obj.set_taborder("74");
            obj.set_binddataset("ds_grid");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"71\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" style=\"align:center middle;\" text=\"Column0\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" style=\"linespace: ;\" cssclass=\"CellEssential\" text=\"Column01&#13;&#10;Column02\"/><Cell col=\"3\" text=\"Column02\"/><Cell col=\"4\" text=\"Column03\"/><Cell col=\"5\" text=\"Column04\"/><Cell col=\"6\" text=\"Column05\"/><Cell col=\"7\" text=\"Column06\"/><Cell col=\"8\" text=\"Column07\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:순번\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"padding:2 2 2 2;\" text=\"bind:Column01\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"padding:2 2 2 2;\" text=\"bind:lev\" combodataset=\"Combo\" combocodecol=\"lev\" combodatacol=\"txt\" combodisplayrowcount=\"-1\" combodisplay=\"display\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"padding:2 2 2 2;\" text=\"bind:Column03\" editdisplay=\"display\" calendardisplay=\"display\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"expand\" style=\"padding:2 0 2 2;\" text=\"bind:Column04\" editdisplay=\"display\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('theme://images/grd_WF_Expand.png')\"/><Cell col=\"6\" style=\"padding:0 8 0 8;\" text=\"bind:Column05\"/><Cell col=\"7\" style=\"align:right middle;padding:0 8 0 8;\" text=\"bind:Column06\" mask=\"###,###,###\"/><Cell col=\"8\" displaytype=\"button\" edittype=\"button\" style=\"align:center middle;padding:2 2 2 2;\" text=\"bind:Column07\" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "153", "985", "1", "40", null, null, this);
            obj.set_taborder("75");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "137", "984", "23", "1", null, null, this);
            obj.set_taborder("76");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "137", "1025", "23", "1", null, null, this);
            obj.set_taborder("77");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "115", "996", "32", "18", null, null, this);
            obj.set_taborder("78");
            obj.set_text("H : 42");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "151", "960", "200", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_text("Multi Head (No Line)");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid07", "absolute", "151", "2090", "1035", "144", null, null, this);
            obj.set_taborder("80");
            obj.set_binddataset("ds_grid");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"85\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/><Row size=\"25\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_FreezeColumn\" text=\"Column0\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_FreezeColumn\" text=\"ICO\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_FreezeColumn\" text=\"NO\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_FreezeColumnLast\" text=\"Column01\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_FreezeColumn \" text=\"Column02\"/><Cell col=\"5\" text=\"Column03\"/><Cell col=\"6\" text=\"Column04\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_HeadLink\" text=\"Column05\"/><Cell col=\"8\" text=\"Column06\"/><Cell col=\"9\" text=\"Column07\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_FreezeRow\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"image\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_FreezeRow\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_FreezeRow\" text=\"bind:Column0\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_FreezeRowLast\" text=\"bind:Column01\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"padding: ;\" text=\"bind:lev\" combodataset=\"ds_combo\" combocodecol=\"lev\" combodatacol=\"txt\" combodisplayrowcount=\"-1\" combodisplay=\"display\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"padding: ;\" text=\"bind:Column03\" editdisplay=\"display\" calendardisplay=\"display\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"expand\" style=\"padding: ;\" text=\"bind:Column04\" editdisplay=\"display\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('theme://images/grd_WF_Expand.png')\"/><Cell col=\"7\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_BodyLink\" text=\"bind:Column05\"/><Cell col=\"8\" style=\"align: ;\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Column06\" mask=\"###,###,###\"/><Cell col=\"9\" displaytype=\"button\" edittype=\"button\" style=\"align:center middle;padding:2 2 2 2;\" text=\"bind:Column07\" editdisplay=\"edit\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" style=\"align:center middle;\" text=\"SUMMERY\"/><Cell col=\"8\" colspan=\"2\" style=\"align:right middle;padding:0 9 0 9;\" text=\"321456789\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "151", "2066", "160", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_text("Freeze Column Grid");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "250", "2054", "1", "50", null, null, this);
            obj.set_taborder("82");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "199", "2038", "213", "18", null, null, this);
            obj.set_taborder("83");
            obj.set_text("class : <b v='true'>Cellgrd_WF_FreezeColumn</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "358", "2072", "1", "30", null, null, this);
            obj.set_taborder("84");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "367", "2064", "278", "18", null, null, this);
            obj.set_taborder("85");
            obj.set_text("class : <b v='true'>Cellgrd_WF_FreezeColumnLast</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "316", "2247", "278", "18", null, null, this);
            obj.set_taborder("86");
            obj.set_text("class : <b v='true'>Cellgrd_WF_FreezeRowLast</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "356", "2190", "1", "50", null, null, this);
            obj.set_taborder("87");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "121", "2244", "278", "18", null, null, this);
            obj.set_taborder("88");
            obj.set_text("class : <b v='true'>Cellgrd_WF_FreezeRow</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "214", "2188", "1", "50", null, null, this);
            obj.set_taborder("89");
            obj.style.set_background("red");
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
            this.addEventHandler("onload", this.Form_Basic_Comp6_onload, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("Form_Basic_Comp6.xfdl", true);

       
    };
}
)();
