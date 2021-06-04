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
                this.set_name("Guide04");
                this.set_titletext("Grid01");
                this._setFormPosition(0,0,1224,497);
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
            obj._setContents("<ColumnInfo><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Number\" type=\"STRING\" size=\"256\"/><Column id=\"Column01\" type=\"STRING\" size=\"256\"/><Column id=\"Column02\" type=\"STRING\" size=\"256\"/><Column id=\"Column03\" type=\"STRING\" size=\"256\"/><Column id=\"Column04\" type=\"STRING\" size=\"256\"/><Column id=\"Column05\" type=\"STRING\" size=\"256\"/><Column id=\"Column06\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column07\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Number\">1</Col><Col id=\"Column05\">A</Col><Col id=\"Column06\">123456789</Col><Col id=\"Column01\">A</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">All</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">Delete</Col><Col id=\"Column0\">1</Col><Col id=\"Column1\">URL('theme://images/ico_WF_GridBlue.png')</Col><Col id=\"Column03\">20150707</Col></Row><Row><Col id=\"Number\">2</Col><Col id=\"Column05\">AB</Col><Col id=\"Column06\">3333</Col><Col id=\"Column01\">AB</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">A</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">Delete</Col><Col id=\"Column0\">2</Col><Col id=\"Column1\">URL('theme://images/ico_WF_GridGreen.png')</Col><Col id=\"Column03\">20171108</Col></Row><Row><Col id=\"Number\">3</Col><Col id=\"Column05\">ABC</Col><Col id=\"Column06\">22222</Col><Col id=\"Column01\">ABC</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">AB</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">Delete</Col><Col id=\"Column0\">3</Col><Col id=\"Column1\">URL('theme://images/ico_WF_GridRed.png')</Col></Row><Row><Col id=\"Number\">8</Col><Col id=\"Column05\">ABCDEFGH</Col><Col id=\"Column06\">22222</Col><Col id=\"Column01\">ABCDEFGH</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">Delete</Col><Col id=\"Column0\">8</Col><Col id=\"Column1\">URL('theme://images/ico_WF_GridYellow.png')</Col></Row><Row><Col id=\"Number\">9</Col><Col id=\"Column05\">ABCDEFGHI</Col><Col id=\"Column06\">7777777</Col><Col id=\"Column01\">ABCDEFGHI</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">Delete</Col><Col id=\"Column0\">9</Col><Col id=\"Column1\"/></Row><Row><Col id=\"Number\">10</Col><Col id=\"Column05\">ABCDEFGHIJ</Col><Col id=\"Column06\">33333</Col><Col id=\"Column01\">ABCDEFGHIJ</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">Delete</Col><Col id=\"Column0\">10</Col><Col id=\"Column1\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\">4</Col><Col id=\"Number\">4</Col><Col id=\"Column01\">ABCD</Col><Col id=\"Column02\">ABC</Col><Col id=\"Column03\"/><Col id=\"Column04\">expand</Col><Col id=\"Column05\">ABCD</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">Delete</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\">5</Col><Col id=\"Number\">5</Col><Col id=\"Column01\">ABCDE</Col><Col id=\"Column02\"/><Col id=\"Column03\"/><Col id=\"Column04\">expand</Col><Col id=\"Column05\">ABCDE</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">Delete</Col><Col id=\"lev\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\">6</Col><Col id=\"Number\">6</Col><Col id=\"Column01\">ABCDEF</Col><Col id=\"Column02\"/><Col id=\"Column03\"/><Col id=\"Column04\">expand</Col><Col id=\"Column05\">ABCDEF</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">Delete</Col><Col id=\"lev\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\">7</Col><Col id=\"Number\">7</Col><Col id=\"Column01\">ABCDEFG</Col><Col id=\"Column02\"/><Col id=\"Column03\"/><Col id=\"Column04\">expand</Col><Col id=\"Column05\">ABCDEFG</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">Delete</Col><Col id=\"lev\"/></Row></Rows>");
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

            obj = new Dataset("PopupMenu01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"UserData\" type=\"STRING\" size=\"256\"/><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"Chk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"UserData\">Hold Release</Col><Col id=\"Caption\">Hold Release</Col><Col id=\"idx\">1000</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">Order Sheet(Print)</Col><Col id=\"Caption\">Order Sheet(Print)</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1001</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">Order Sheet(E-Mail)</Col><Col id=\"Caption\">Order Sheet(E-Mail)</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1003</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">Freeze Column</Col><Col id=\"Caption\">Freeze Column</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1004</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">Release Column</Col><Col id=\"Caption\">Release Column</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1005</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">Hide Column</Col><Col id=\"Caption\">Hide Column</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1006</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">Undo Hide</Col><Col id=\"Caption\">Undo Hide</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1007</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">Filter</Col><Col id=\"Caption\">Filter</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1008</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"UserData\">Custom Filter</Col><Col id=\"Caption\">Custom Filter</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1009</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"idx\">1010</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">Filter Cancel</Col><Col id=\"Caption\">Filter Cancel</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"idx\">1011</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">Custom Sort</Col><Col id=\"Caption\">Custom Sort</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"idx\">1012</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">Sort Cancel</Col><Col id=\"Caption\">Sort Cancel</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"idx\">1013</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">Save Layout</Col><Col id=\"Caption\">Save Layout</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"idx\">1014</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">Delete Layout</Col><Col id=\"Caption\">Delete Layout</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"idx\">1015</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">Load Layout</Col><Col id=\"Caption\">Load Layout</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row><Row><Col id=\"idx\">1016</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">Layout Reset</Col><Col id=\"Caption\">Layout Reset</Col><Col id=\"enable\">1</Col><Col id=\"Chk\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ICON", this);
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


            
            // UI Components Initialize
            obj = new Static("Static11", "absolute", "110", "960", null, "443", "0", null, this);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "110", "700", null, "261", "0", null, this);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "110", "480", null, "221", "0", null, this);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "110", "53", null, "428", "0", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "0", "53", "111", "1792", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Grid");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "151", "151", "1032", "235", null, null, this);
            obj.set_taborder("3");
            obj.set_binddataset("Grid");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_locale("es_BO");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"168\"/><Column size=\"168\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"42\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/><Row size=\"25\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" style=\"align:center middle;\" text=\"Column0\"/><Cell col=\"1\" text=\"ICO\"/><Cell col=\"2\" text=\"NO\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"Column01\"/><Cell col=\"4\" text=\"Column02\"/><Cell col=\"5\" text=\"Column03\"/><Cell col=\"6\" text=\"Column03\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_Point\" text=\"Column04\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_HeadLink\" text=\"Column05\"/><Cell col=\"9\" text=\"Column06\"/><Cell col=\"10\" text=\"Btn\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"image\" style=\"align:center middle;\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"padding: ;\" text=\"bind:Column01\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"padding: ;\" text=\"bind:lev\" combodataset=\"Combo\" combocodecol=\"lev\" combodatacol=\"txt\" combodisplayrowcount=\"-1\" combodisplay=\"display\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"text\" style=\"padding: ;\" text=\"bind:Column03\" mask=\"dd-MMMM-yyyy\" locale=\"en_US\" editdisplay=\"display\" calendardisplay=\"edit\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"normal\" style=\"padding: ;\" text=\"bind:Column03\" mask=\"yyyy-MM-dd HH:mm:ss\" editdisplay=\"display\" calendardisplay=\"display\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"expand\" style=\"padding: ;\" text=\"bind:Column04\" editdisplay=\"display\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('theme://images/grd_WF_Expand.png')\"/><Cell col=\"8\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_BodyLink\" text=\"bind:Column05\"/><Cell col=\"9\" style=\"align: ;\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Column06\" mask=\"###,###,###\"/><Cell col=\"10\" displaytype=\"button\" edittype=\"button\" style=\"align: ;\" text=\"bind:Column07\" editdisplay=\"edit\"/></Band><Band id=\"summary\"><Cell colspan=\"11\" style=\"align:center middle;\" text=\"SUMMERY\"/><Cell col=\"11\" colspan=\"2\" style=\"align:right middle;padding:0 9 0 9;\" text=\"321456789\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "151", "517", "223", "162", null, null, this);
            obj.set_cssclass("grd_WF_Tree");
            obj.set_taborder("9");
            obj.set_binddataset("Tree");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeuseline("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"205\"/></Columns><Rows><Row size=\"23\"/></Rows><Band id=\"body\" style=\"cellpadding: ;\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:txt\" treelevel=\"bind:lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "151", "490", "80", "24", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Tree Grid");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03", "absolute", "151", "748", "1032", "192", null, null, this);
            obj.set_taborder("11");
            obj.set_binddataset("Grid");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"86\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"24\"/><Row size=\"25\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" style=\"align:center middle;\" text=\"Column0\"/><Cell col=\"1\" rowspan=\"2\" text=\"NO\"/><Cell col=\"2\" colspan=\"7\" cssclass=\"Cellgrd_WF_Multihead\" text=\"Component\"/><Cell row=\"1\" col=\"2\" text=\"Edit\"/><Cell row=\"1\" col=\"3\" text=\"Combo\"/><Cell row=\"1\" col=\"4\" text=\"Calendar\"/><Cell row=\"1\" col=\"5\" text=\"Edit+Expand\"/><Cell row=\"1\" col=\"6\" text=\"Normal\"/><Cell row=\"1\" col=\"7\" text=\"Mask\"/><Cell row=\"1\" col=\"8\" text=\"Button\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:순번\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"padding: ;\" text=\"bind:Column01\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"padding: ;\" text=\"bind:lev\" combodataset=\"Combo\" combocodecol=\"lev\" combodatacol=\"txt\" combodisplayrowcount=\"-1\" combodisplay=\"display\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"padding: ;\" text=\"bind:Column03\" editdisplay=\"display\" calendardisplay=\"display\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"expand\" style=\"padding: ;\" text=\"bind:Column04\" editdisplay=\"display\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('theme://images/grd_WF_Expand.png')\"/><Cell col=\"6\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_BodyLink\" text=\"bind:Column05\"/><Cell col=\"7\" style=\"align: ;\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Column06\" mask=\"###,###,###\"/><Cell col=\"8\" displaytype=\"button\" edittype=\"button\" style=\"align: ;\" text=\"bind:Column07\" editdisplay=\"edit\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" style=\"align:center middle;\" text=\"Summery\"/><Cell col=\"7\" colspan=\"2\" style=\"align:right middle;padding: ;\" text=\"321456789\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "151", "721", "162", "24", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Multi Head");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04", "absolute", "151", "1008", "1032", "261", null, null, this);
            obj.set_taborder("13");
            obj.set_binddataset("Grid");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"86\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"25\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" style=\"align:center middle;\" text=\"Column0\"/><Cell col=\"1\" rowspan=\"2\" text=\"NO\"/><Cell col=\"2\" colspan=\"7\" cssclass=\"Cellgrd_WF_Multihead\" text=\"Component\"/><Cell row=\"1\" col=\"2\" text=\"Edit\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"Combo\"/><Cell row=\"1\" col=\"4\" text=\"Calendar\"/><Cell row=\"1\" col=\"5\" text=\"Edit+Expand\"/><Cell row=\"1\" col=\"6\" text=\"Normal\"/><Cell row=\"1\" col=\"7\" text=\"Mask\"/><Cell row=\"1\" col=\"8\" text=\"Button\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:순번\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"padding: ;\" text=\"bind:Column01\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"padding: ;\" text=\"bind:lev\" combodataset=\"Combo\" combocodecol=\"lev\" combodatacol=\"txt\" combodisplayrowcount=\"-1\" combodisplay=\"display\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"padding: ;\" text=\"bind:Column03\" editdisplay=\"display\" calendardisplay=\"display\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"expand\" style=\"padding: ;\" text=\"bind:Column04\" editdisplay=\"display\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('theme://images/grd_WF_Expand.png')\"/><Cell col=\"6\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_BodyLink\" text=\"bind:Column05\"/><Cell col=\"7\" style=\"align: ;\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Column06\" mask=\"###,###,###\"/><Cell col=\"8\" displaytype=\"button\" edittype=\"button\" style=\"padding: ;\" text=\"bind:Column07\" editdisplay=\"edit\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_sum04\" text=\"Total04\"/><Cell col=\"7\" colspan=\"2\" style=\"align:right middle;padding: ;\" cssclass=\"Cellgrd_WF_sum04\" text=\"1,000,000,000\" mask=\"###,###,###\"/><Cell row=\"1\" colspan=\"7\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_sum03\" text=\"Total03\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" style=\"align:right middle;padding: ;\" cssclass=\"Cellgrd_WF_sum03\" text=\"1,000,000,000\"/><Cell row=\"2\" colspan=\"7\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_sum02\" text=\"Total02\"/><Cell row=\"2\" col=\"7\" colspan=\"2\" style=\"align:right middle;padding: ;\" cssclass=\"Cellgrd_WF_sum02\" text=\"1,000,000,000\"/><Cell row=\"3\" colspan=\"7\" style=\"padding: ;\" cssclass=\"Cellgrd_WF_sum01\" text=\"Total01\"/><Cell row=\"3\" col=\"7\" colspan=\"2\" style=\"align:right middle;padding: ;\" cssclass=\"Cellgrd_WF_sum01\" text=\"1,000,000,000\"/><Cell row=\"4\" colspan=\"7\" text=\"Summery\"/><Cell row=\"4\" col=\"7\" colspan=\"2\" style=\"align:right middle;\" text=\"1,000,000,000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "151", "981", "162", "24", null, null, this);
            obj.set_taborder("14");
            obj.set_text("summ");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "151", "148", null, "3", "219", null, this);
            obj.set_taborder("22");
            obj.set_text("H3");
            obj.set_visible("false");
            obj.style.set_background("#ff727280");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "151", "124", "120", "24", null, null, this);
            obj.set_taborder("28");
            obj.set_text("Default Grid");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "151", "409", "198", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("Grid Cell에 들어갈 신호등 이미지");
            obj.set_cssclass("Guide_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "440", "1165", "1", "133", null, null, this);
            obj.set_taborder("46");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "426", "1302", "201", "18", null, null, this);
            obj.set_taborder("47");
            obj.set_text("class : <b v='true'>Cellgrd_WF_sum04</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "382", "1326", "201", "18", null, null, this);
            obj.set_taborder("48");
            obj.set_text("class : <b v='true'>Cellgrd_WF_sum03</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "396", "1189", "1", "133", null, null, this);
            obj.set_taborder("49");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "364", "1213", "1", "133", null, null, this);
            obj.set_taborder("50");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "350", "1350", "201", "18", null, null, this);
            obj.set_taborder("51");
            obj.set_text("class : <b v='true'>Cellgrd_WF_sum02</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "330", "1238", "1", "133", null, null, this);
            obj.set_taborder("52");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "316", "1375", "201", "18", null, null, this);
            obj.set_taborder("53");
            obj.set_text("class : <b v='true'>Cellgrd_WF_sum01</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "312", "135", "1", "21", null, null, this);
            obj.set_taborder("58");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "303", "115", "240", "18", null, null, this);
            obj.set_taborder("59");
            obj.set_text("class : <b v='true'>Cellgrd_WF_HeadEssential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "888", "73", "200", "18", null, null, this);
            obj.set_taborder("61");
            obj.set_text("class : <b v='true'>Cellgrd_WF_headLink</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "151", "1148", "1", "120", null, null, this);
            obj.set_taborder("62");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "137", "1147", "23", "1", null, null, this);
            obj.set_taborder("63");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "137", "1171", "23", "1", null, null, this);
            obj.set_taborder("64");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "137", "1195", "23", "1", null, null, this);
            obj.set_taborder("65");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "115", "1248", "32", "18", null, null, this);
            obj.set_taborder("66");
            obj.set_text("H : 25");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "115", "1151", "32", "18", null, null, this);
            obj.set_taborder("67");
            obj.set_text("H : 24");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "137", "1219", "23", "1", null, null, this);
            obj.set_taborder("68");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "137", "1243", "23", "1", null, null, this);
            obj.set_taborder("69");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "137", "1268", "23", "1", null, null, this);
            obj.set_taborder("70");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "115", "1175", "32", "18", null, null, this);
            obj.set_taborder("71");
            obj.set_text("H : 24");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "115", "1199", "32", "18", null, null, this);
            obj.set_taborder("72");
            obj.set_text("H : 24");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "115", "1224", "32", "18", null, null, this);
            obj.set_taborder("73");
            obj.set_text("H : 24");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "724", "721", "221", "18", null, null, this);
            obj.set_taborder("78");
            obj.set_text("class : <b v='true'>Cellgrd_WF_Multihead</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "766", "741", "1", "33", null, null, this);
            obj.set_taborder("79");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("Grid01");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "1072", "124", "111", "24", null, null, this);
            obj.set_taborder("81");
            obj.set_text("Custom Button");
            obj.set_cssclass("btn_WF_Grid");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "958", "124", "111", "24", null, null, this);
            obj.set_taborder("82");
            obj.set_text("Custom Button");
            obj.set_cssclass("btn_WF_Grid");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "116", "152", "43", "25", null, null, this);
            obj.set_taborder("83");
            obj.set_text("h25");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "151", "441", "11", "10", null, null, this);
            obj.set_taborder("84");
            obj.style.set_background("URL('theme://images/ico_WF_GridBlue.png')");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "192", "441", "11", "10", null, null, this);
            obj.set_taborder("85");
            obj.style.set_background("URL('theme://images/ico_WF_GridGreen.png')");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "233", "441", "11", "10", null, null, this);
            obj.set_taborder("86");
            obj.style.set_background("URL('theme://images/ico_WF_GridRed.png')");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "274", "441", "11", "10", null, null, this);
            obj.set_taborder("87");
            obj.style.set_background("URL('theme://images/ico_WF_GridYellow.png')");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "116", "177", "43", "24", null, null, this);
            obj.set_taborder("88");
            obj.set_text("h24");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "115", "779", "32", "18", null, null, this);
            obj.set_taborder("89");
            obj.set_text("H : 25");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "115", "754", "32", "18", null, null, this);
            obj.set_taborder("90");
            obj.set_text("H : 25");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "135", "798", "23", "1", null, null, this);
            obj.set_taborder("91");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "135", "775", "23", "1", null, null, this);
            obj.set_taborder("92");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "135", "749", "23", "1", null, null, this);
            obj.set_taborder("93");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "151", "750", "1", "49", null, null, this);
            obj.set_taborder("94");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "895", "91", "1", "70", null, null, this);
            obj.set_taborder("60");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "384", "517", "223", "162", null, null, this);
            obj.set_cssclass("grd_WF_Tree");
            obj.set_taborder("98");
            obj.set_binddataset("Tree");
            obj.set_autofittype("col");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_enable("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"205\"/></Columns><Rows><Row size=\"23\"/><Row size=\"25\" band=\"summ\"/></Rows><Band id=\"body\" style=\"cellpadding: ;\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:txt\" treelevel=\"bind:lev\"/></Band><Band id=\"summary\"><Cell text=\"가나다라\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "116", "361", "43", "25", null, null, this);
            obj.set_taborder("99");
            obj.set_text("h25");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "701", "63", "168", "18", null, null, this);
            obj.set_taborder("100");
            obj.set_text("class : <b v='true'>Cellgrd_WF_Point</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "713", "81", "1", "80", null, null, this);
            obj.set_taborder("101");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "798", "124", "150", "24", null, null, this);
            obj.set_taborder("102");
            obj.set_text("Unit : $");
            obj.set_cssclass("sta_WF_GridTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "151", "385", "1032", "21", null, null, this);
            obj.set_taborder("103");
            obj.set_text("Total : 100");
            obj.set_cssclass("sta_WF_GridTotal");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "941", "417", "273", "18", null, null, this);
            obj.set_taborder("56");
            obj.set_text("class : <b v='true'>Cellgrd_WF_Number (우측정렬)</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "1025", "328", "1", "85", null, null, this);
            obj.set_taborder("57");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "863", "437", "201", "18", null, null, this);
            obj.set_taborder("54");
            obj.set_text("class : <b v='true'>Cellgrd_WF_BodyLink</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "877", "328", "1", "103", null, null, this);
            obj.set_taborder("55");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "489", "437", "273", "18", null, null, this);
            obj.set_taborder("104");
            obj.set_text("class : <b v='true'>sta_WF_GridTotal (조회건수)</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "503", "398", "1", "35", null, null, this);
            obj.set_taborder("105");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "771", "101", "1", "27", null, null, this);
            obj.set_taborder("106");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "891", "83", "168", "18", null, null, this);
            obj.set_taborder("107");
            obj.set_text("class : <b v='true'>sta_WF_GridTxt</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "110", "1402", null, "443", "0", null, this);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "151", "1423", "80", "24", null, null, this);
            obj.set_taborder("108");
            obj.set_text("ICON");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid05", "absolute", "151", "1450", "1032", "349", null, null, this);
            obj.set_cssclass("grd_WF_Tree");
            obj.set_taborder("109");
            obj.set_binddataset("ICON");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"465\"/><Column size=\"50\"/><Column size=\"465\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ICON\"/><Cell col=\"1\" text=\"이미지 경로\"/><Cell col=\"2\" text=\"ICON\"/><Cell col=\"3\" text=\"이미지 경로\"/></Band><Band id=\"body\" style=\"cellpadding: ;\"><Cell displaytype=\"image\" style=\"align:center middle;\" text=\"bind:Column1\" treelevel=\"bind:lev\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"image\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"3\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02", "absolute", "464", "120", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("111");
            obj.set_value("20150707");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MMMM-dd");
            obj.set_cssclass("readonly");
            obj.set_locale("en_US");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide01");
            		p.set_titletext("Grid01");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Guide04.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("Guide04.xfdl", function(exports) {

        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        this.Button01_onclick = function(obj,e)
        {
        	alert(this.Grid00.getCellText(0,8));
        	alert(this.Grid00.getCellValue(0,8));
        }

        this.Button02_onclick = function(obj,e)
        {
        	var aGrid = [];
        	aGrid[0] = this.Grid00;
        	
        	var aSheetName = [];
        	aSheetName[0] = "Sheet0";
        	
        	LGE.Core.exportExcel(this, aGrid, "ExportSample", aSheetName);	
        }

        this.Guide04_onload = function(obj,e)
        {
        	this.com_fromInit(obj);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Guide04_onload, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("Guide04.xfdl", true);

       
    };
}
)();
