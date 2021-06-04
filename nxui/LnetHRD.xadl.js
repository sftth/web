(function()
{
    return function()
    {
        // Theme, Component URI Setting
        this._theme_uri = "./_theme_/";
        this._globalvar_uri = "globalvars.xml";
        this.loadTypedefition = function()
        {
            // this._addService(prefixid, type, url, cachelevel, codepage, language, version, communication);
            this._addService("default_typedef.xml", "host", "JSP", "http://localhost:8080/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "tagfreeUrl", "file", "resource/tagfree/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "nexacro14lib", "file", "./nexacro14lib/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "css", "css", "./css/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "images", "file", "./images/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "img", "file", "./img/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "font", "file", "./font/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "EcoLibrary", "file", "./nexacro14lib/component/EcoLibrary/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "LgeLibrary", "file", "./nexacro14lib/component/LgeLibrary/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "LgeObject", "file", "./nexacro14lib/component/LgeObject/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "CommonLibrary", "js", "./CommonLibrary/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "CommonObject", "form", "./CommonObject/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "Frame_Admin", "form", "./com/Frame_Admin/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "Frame_User", "form", "./com/Frame_User/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "Frame_HRD", "form", "./com/Frame_HRD/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "BizLibrary", "js", "./BizLibrary/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "base.base", "form", "./base/base", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "cop.ads", "form", "./cop/ads/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "cop.auth", "form", "./cop/auth/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "cop.cmm", "form", "./cop/cmm/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "cop.coi", "form", "./cop/coi/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "cop.cos", "form", "./cop/cos/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "cop.lnp", "form", "./cop/lnp/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "cop.ser", "form", "./cop/ser/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "cop.usr", "form", "./cop/usr/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "cop.bbs", "form", "./cop/bbs/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "cop.smr", "form", "./cop/smr/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "cop.lep", "form", "./cop/lep/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "cop.rpt", "form", "./cop/rpt/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "lnr.ldr", "form", "./lnr/ldr/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "lnr.usr", "form", "./lnr/usr/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "pcop.lep", "form", "./pcop/lep/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "pcop.coi", "form", "./pcop/coi/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "pcop.ram", "form", "./pcop/ram/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "pcop.ser", "form", "./pcop/ser/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "pcop.res", "form", "./pcop/res/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "plnr.main", "form", "./plnr/main/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "plnr.usr", "form", "./plnr/usr/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "commonUtil", "form", "./commonUtil/", "", null, "", "", "0");

            this._component_uri = (this._arg_compurl ? this._arg_compurl : "./nexacro14lib/component/");
            // load components
            var registerclass = [
            		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
            		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
            		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
            		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
            		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
            		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
            		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
            		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
            		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
            		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
            		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
            		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
            		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
            		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
            		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
            		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
            		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
            		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
            		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
            		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
            		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
            		{"id":"ExtCombo", "classname":"nexacro.ExtCombo", "type":"JavaScript"},
            		{"id":"ExtFileUpload", "classname":"nexacro.ExtFileUpload", "type":"JavaScript"},
            		{"id":"ExtFileDownload", "classname":"nexacro.ExtFileDownload", "type":"JavaScript"},
            		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"}
            ];
            this._addClasses(registerclass);
        };
        
        this.on_loadGlobalVariables = function()
        {
            // global variable
            this._addVariable("gv_syscode", null, false);
            this._addVariable("gv_userid", null, false);
            this._addVariable("gv_sitecode", null, false);
            this._addVariable("gv_language", null, false);
            this._addVariable("gv_linkuserid", null, false);
            this._addVariable("gv_linkmenuid", null, false);
            this._addVariable("gv_paramters", null, false);
            this._addVariable("gv_userkey", null, false);
            this._addVariable("gv_tp", null, false);
            this._addVariable("gv_imagefilesrc", "common/viewImage.do?fileId=#1&fileSeq=#2", false);
            this._addVariable("gv_limeUrl", "http://10.185.218.54/limesurvey/index.php", false);
            this._addVariable("gv_edXUrl", "http://10.185.219.94", false);
            this._addVariable("gv_edXAdminUrl", "http://10.185.219.94:18010", false);
            this._addVariable("gv_webUrl", "http://165.186.129.198:6110/", false);
            this._addVariable("gv_autho_sitecode", null, false);
            this._addVariable("gv_autho_region", null, false);
            this._addVariable("gv_autho_subsidiary", null, false);
            this._addVariable("gv_autho_updept", null, false);
            this._addVariable("gv_autho_dept", null, false);
            this._addVariable("gv_autho_level", null, false);

            // global image

            // global dataset
            var obj = null;
            obj = new Dataset("gds_userInfo", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"adminYn\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"tempSiteCode\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"retVal\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"JSESSIONID\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"userSeq\" type=\"STRING\" size=\"256\"/><Column id=\"empno\" type=\"STRING\" size=\"256\"/><Column id=\"empName\" type=\"STRING\" size=\"256\"/><Column id=\"empEname\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"email_original\" type=\"STRING\" size=\"256\"/><Column id=\"siteCode\" type=\"STRING\" size=\"256\"/><Column id=\"langCode\" type=\"STRING\" size=\"256\"/><Column id=\"dateFormat\" type=\"STRING\" size=\"256\"/><Column id=\"jobCode\" type=\"STRING\" size=\"256\"/><Column id=\"jobName\" type=\"STRING\" size=\"256\"/><Column id=\"titleCode\" type=\"STRING\" size=\"256\"/><Column id=\"titleName\" type=\"STRING\" size=\"256\"/><Column id=\"titleEname\" type=\"STRING\" size=\"256\"/><Column id=\"titleYear\" type=\"STRING\" size=\"256\"/><Column id=\"positionName\" type=\"STRING\" size=\"256\"/><Column id=\"hipoCode\" type=\"STRING\" size=\"256\"/><Column id=\"fseYn\" type=\"STRING\" size=\"256\"/><Column id=\"fromDate\" type=\"STRING\" size=\"256\"/><Column id=\"toDate\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"currentCompanyHireDate\" type=\"STRING\" size=\"256\"/><Column id=\"hireType\" type=\"STRING\" size=\"256\"/><Column id=\"operatorYn\" type=\"STRING\" size=\"256\"/><Column id=\"assignmentCategory\" type=\"STRING\" size=\"256\"/><Column id=\"place\" type=\"STRING\" size=\"256\"/><Column id=\"autho\" type=\"STRING\" size=\"256\"/><Column id=\"authoId\" type=\"STRING\" size=\"256\"/><Column id=\"authogroupName\" type=\"STRING\" size=\"256\"/><Column id=\"authogroupEname\" type=\"STRING\" size=\"256\"/><Column id=\"authoLevel\" type=\"STRING\" size=\"256\"/><Column id=\"authoSiteCode\" type=\"STRING\" size=\"256\"/><Column id=\"leaderEmpno\" type=\"STRING\" size=\"256\"/><Column id=\"leaderUserSeq\" type=\"STRING\" size=\"256\"/><Column id=\"leaderEmpName\" type=\"STRING\" size=\"256\"/><Column id=\"leaderEmpEname\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"deptName\" type=\"STRING\" size=\"256\"/><Column id=\"deptEname\" type=\"STRING\" size=\"256\"/><Column id=\"deptAllName\" type=\"STRING\" size=\"256\"/><Column id=\"deptAllEname\" type=\"STRING\" size=\"256\"/><Column id=\"hqDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"hqDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"deptLevel1\" type=\"STRING\" size=\"256\"/><Column id=\"locatoinCode\" type=\"STRING\" size=\"256\"/><Column id=\"subsidiary\" type=\"STRING\" size=\"256\"/><Column id=\"regionCode\" type=\"STRING\" size=\"256\"/><Column id=\"regionCode1\" type=\"STRING\" size=\"256\"/><Column id=\"regionCode2\" type=\"STRING\" size=\"256\"/><Column id=\"regionCode3\" type=\"STRING\" size=\"256\"/><Column id=\"zoneCode\" type=\"STRING\" size=\"256\"/><Column id=\"zoneCode1\" type=\"STRING\" size=\"256\"/><Column id=\"zoneCode2\" type=\"STRING\" size=\"256\"/><Column id=\"zoneCode3\" type=\"STRING\" size=\"256\"/><Column id=\"baseCode\" type=\"STRING\" size=\"256\"/><Column id=\"regionAllName\" type=\"STRING\" size=\"256\"/><Column id=\"regionAllEname\" type=\"STRING\" size=\"256\"/><Column id=\"adminFg\" type=\"STRING\" size=\"256\"/><Column id=\"deptLevel\" type=\"STRING\" size=\"256\"/><Column id=\"ssoId\" type=\"STRING\" size=\"256\"/><Column id=\"ssoFg\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"ldrFg\" type=\"STRING\" size=\"256\"/><Column id=\"authoRegion\" type=\"STRING\" size=\"256\"/><Column id=\"authoSubsidiary\" type=\"STRING\" size=\"256\"/><Column id=\"authoUpdept\" type=\"STRING\" size=\"256\"/><Column id=\"authoDept\" type=\"STRING\" size=\"256\"/><Column id=\"fseEmpno\" type=\"STRING\" size=\"256\"/><Column id=\"fseUserSeq\" type=\"STRING\" size=\"256\"/><Column id=\"courseCode\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"STRING\" size=\"256\"/><Column id=\"eduStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"isBdUser\" type=\"STRING\" size=\"256\"/><Column id=\"intraFg\" type=\"STRING\" size=\"256\"/><Column id=\"lmsRegionCode\" type=\"STRING\" size=\"256\"/><Column id=\"lmsRegionCodeOfSubsidiary\" type=\"STRING\" size=\"256\"/><Column id=\"lmsSubsidiaryCode\" type=\"STRING\" size=\"256\"/><Column id=\"currAutho\" type=\"STRING\" size=\"256\"/><Column id=\"currAuthoId\" type=\"STRING\" size=\"256\"/><Column id=\"currAuthogroupName\" type=\"STRING\" size=\"256\"/><Column id=\"currAuthogroupEname\" type=\"STRING\" size=\"256\"/><Column id=\"currAuthoLevel\" type=\"STRING\" size=\"256\"/><Column id=\"currAuthoSiteCode\" type=\"STRING\" size=\"256\"/><Column id=\"currLangAuthoId\" type=\"STRING\" size=\"256\"/><Column id=\"lgEmployeeYn\" type=\"STRING\" size=\"256\"/><Column id=\"internetConnectYn\" type=\"STRING\" size=\"256\"/><Column id=\"lgeFlag\" type=\"STRING\" size=\"256\"/><Column id=\"menuPath\" type=\"STRING\" size=\"256\"/><Column id=\"mobileNum\" type=\"STRING\" size=\"256\"/><Column id=\"instructorYn\" type=\"STRING\" size=\"256\"/><Column id=\"attribute10\" type=\"STRING\" size=\"256\"/><Column id=\"authYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_language", this);
            obj._setContents("<ColumnInfo><Column id=\"idiom_seq\" type=\"int\" size=\"4\"/><Column id=\"idiom_id\" type=\"string\" size=\"32\"/><Column id=\"idiom_lang_cd\" type=\"string\" size=\"32\"/><Column id=\"idiom_type_cd\" type=\"string\" size=\"32\"/><Column id=\"idiom_txt\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_code", this);
            obj._setContents("<ColumnInfo><Column id=\"group_code\" type=\"string\" size=\"32\"/><Column id=\"code\" type=\"string\" size=\"32\"/><Column id=\"code_name\" type=\"string\" size=\"32\"/><Column id=\"attribute1\" type=\"string\" size=\"32\"/><Column id=\"attribute2\" type=\"string\" size=\"32\"/><Column id=\"attribute3\" type=\"string\" size=\"32\"/><Column id=\"attribute4\" type=\"string\" size=\"32\"/><Column id=\"attribute5\" type=\"string\" size=\"32\"/><Column id=\"attribute6\" type=\"string\" size=\"32\"/><Column id=\"attribute7\" type=\"string\" size=\"32\"/><Column id=\"attribute8\" type=\"string\" size=\"32\"/><Column id=\"attribute9\" type=\"string\" size=\"32\"/><Column id=\"attribute10\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"menu_id\" type=\"string\" size=\"32\"/><Column id=\"site_code\" type=\"string\" size=\"32\"/><Column id=\"menu_nm\" type=\"string\" size=\"32\"/><Column id=\"idiom_id\" type=\"string\" size=\"32\"/><Column id=\"menu_path\" type=\"string\" size=\"32\"/><Column id=\"source_nm\" type=\"string\" size=\"32\"/><Column id=\"menu_gbn\" type=\"string\" size=\"32\"/><Column id=\"menu_desc\" type=\"string\" size=\"32\"/><Column id=\"menu_level\" type=\"int\" size=\"4\"/><Column id=\"sort_no\" type=\"int\" size=\"4\"/><Column id=\"use_fg\" type=\"string\" size=\"32\"/><Column id=\"sys_cd\" type=\"string\" size=\"32\"/><Column id=\"work_id\" type=\"string\" size=\"32\"/><Column id=\"work_nm\" type=\"string\" size=\"32\"/><Column id=\"sub_sys_id\" type=\"string\" size=\"32\"/><Column id=\"menu_mode\" type=\"string\" size=\"32\"/><Column id=\"menu_grp\" type=\"string\" size=\"32\"/><Column id=\"job_id\" type=\"string\" size=\"32\"/><Column id=\"menu_remark\" type=\"string\" size=\"32\"/><Column id=\"menu_type\" type=\"string\" size=\"32\"/><Column id=\"target_fg\" type=\"string\" size=\"32\"/><Column id=\"up_menu_id\" type=\"string\" size=\"32\"/><Column id=\"top_menu_id\" type=\"string\" size=\"32\"/><Column id=\"hrd_login_yn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_openMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_gridMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuLvl\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"bUse\" type=\"STRING\" size=\"256\"/><Column id=\"bEnbleColumn\" type=\"STRING\" size=\"256\"/><Column id=\"hotkeyColumn\" type=\"STRING\" size=\"256\"/><Column id=\"iconColumn\" type=\"STRING\" size=\"256\"/><Column id=\"menuNmEn\" type=\"STRING\" size=\"256\"/><Column id=\"option\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">100</Col><Col id=\"menuNm\">필터</Col><Col id=\"bUse\">N</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"iconColumn\">images::ico_grd_filter.png</Col><Col id=\"menuNmEn\">Filter</Col><Col id=\"option\">NOT USE</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">200</Col><Col id=\"menuNm\">다중필터</Col><Col id=\"bUse\">N</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"iconColumn\">images::ico_grd_multiFilter.png</Col><Col id=\"menuNmEn\">Custom Filter</Col><Col id=\"option\">NOT USE</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">300</Col><Col id=\"menuNm\">필터모두제거</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"iconColumn\">images::ico_grd_filterDelete.png</Col><Col id=\"menuNmEn\">Filter Cancel</Col><Col id=\"option\">FILTER</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">400</Col><Col id=\"menuNm\">정렬모두제거</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"iconColumn\">images::ico_grd_alignDelete.png</Col><Col id=\"menuNmEn\">Sort Cancel</Col><Col id=\"option\">SORT</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">800</Col><Col id=\"menuNm\">칼럼숨기기</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"iconColumn\">images::ico_grd_columnHide.png</Col><Col id=\"menuNmEn\">Hide Column</Col><Col id=\"option\">HIDE</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">900</Col><Col id=\"menuNm\">컬럼모두보이기</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"iconColumn\">images::ico_grd_columnView.png</Col><Col id=\"menuNmEn\">Undo Hide</Col><Col id=\"option\">HIDE</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">1000</Col><Col id=\"menuNm\">틀고정</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"iconColumn\">images::ico_grd_fixed.png</Col><Col id=\"menuNmEn\">Freeze Column</Col><Col id=\"option\">FREEZE</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">1100</Col><Col id=\"menuNm\">틀고정취소</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"iconColumn\">images::ico_grd_fixedCancel.png</Col><Col id=\"menuNmEn\">Release Column</Col><Col id=\"option\">FREEZE</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_message", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TRAN\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MSG_CD\">M1000</Col><Col id=\"MSG_CONT\">#를 # 입력하세요</Col><Col id=\"LANG_CD\">EN</Col></Row><Row><Col id=\"MSG_CD\">LOGIN.FAIL</Col><Col id=\"MSG_CONT\">아이디 또는 비밀번호를 확인하십시오</Col><Col id=\"LANG_CD\">EN</Col></Row><Row><Col id=\"MSG_CONT\">메뉴관리</Col><Col id=\"MSG_TRAN\">Menu Manage</Col><Col id=\"LANG_CD\">EN</Col><Col id=\"MSG_CD\">MENU.MNG</Col></Row><Row><Col id=\"MSG_CONT\">사용자 관리</Col><Col id=\"MSG_TRAN\">User Manage</Col><Col id=\"LANG_CD\">EN</Col><Col id=\"MSG_CD\">USER.MNG</Col></Row><Row><Col id=\"MSG_CONT\">저장</Col><Col id=\"MSG_TRAN\">Save</Col><Col id=\"LANG_CD\">EN</Col><Col id=\"MSG_CD\">SAVE</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_tempTagFree", this);
            obj._setContents("<ColumnInfo><Column id=\"content\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"content\"/></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_aes", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"iv\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"key\">TOBESOFT12345678</Col><Col id=\"iv\">1234567812345678</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_userAuthoInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"dept_code\" type=\"STRING\" size=\"256\"/><Column id=\"dept_name\" type=\"STRING\" size=\"256\"/><Column id=\"region_code\" type=\"STRING\" size=\"256\"/><Column id=\"region_name\" type=\"STRING\" size=\"256\"/><Column id=\"subsidiary_code\" type=\"STRING\" size=\"256\"/><Column id=\"subsidiary_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;


            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("LnetHRD");
            this.set_themeid("lgeNet.xtheme");
            this.set_version("");
            this.set_tracemode("");
            this.set_loadingimage("images::LNetloading.gif");
            this.set_httpretry("0");

            if (this._is_attach_childframe)
            	return;

            // frame
            var mainframe = this.createMainFrame("mainframe", "absolute", null, null, "1264", "678", null, null, this);
            mainframe.set_resizable("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_showtitleicon("true");
            mainframe.set_showstatusbar("false");
            mainframe.style.set_border("0 none #808080");
            mainframe.set_titletext("LearningNet - 국가인적자원개발컨소시엄");
            mainframe.set_showcascadetitletext("false");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("vWorkFrameset", "absolute", null, null, null, null, null, null, this);
            this.addChild(frame0.name, frame0);
            this.frame = frame0;
            frame0.set_separatesize("50,*,0");

            
            var frame1 = new ChildFrame("topFrame", "absolute", null, null, null, null, null, null, "", frame0);
            frame0.addChild(frame1.name, frame1);
            frame1.set_showtitlebar("false");
            frame1.set_dragmovetype("none");

            var frame2 = new ChildFrame("workFrame", "absolute", null, null, null, null, null, null, "", frame0);
            frame0.addChild(frame2.name, frame2);
            frame2.set_showtitlebar("false");
            frame2.set_dragmovetype("none");

            var frame3 = new ChildFrame("hiddenFrame", "absolute", null, null, null, null, null, null, "Frame_HRD::HiddenFrame.xfdl", frame0);
            frame0.addChild(frame3.name, frame3);
            frame3.set_dragmovetype("none");
            frame3.set_showtitlebar("false");
            frame3.set_formurl("Frame_HRD::HiddenFrame.xfdl");

        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onloadingglobalvariables", this.application_onloadingglobalvariables, this);

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler
        this.registerScript("LnetHRD.xadl", function() {

        this.av_mainFrame;
        this.av_vWorkFrameset;
        this.av_topFrame;
        this.av_workFrame;
        this.av_hiddenFrame;
        this.av_gdsMenu;
        this.av_gdsOpenMenu;

        

        this.application_onloadingglobalvariables = function(obj,e)
        {
        	// 로그인하지 않은 경우 부품 Default
        	application.gv_sitecode = "103";
        	application.gv_autho_sitecode = "103";
        	application.gv_language = "ko";
        	application.gv_syscode = "P";
        	
        	av_mainFrame 		= application.mainframe;
        	av_vWorkFrameset 	= av_mainFrame.vWorkFrameset;
        	av_topFrame 		= av_vWorkFrameset.topFrame;
        	av_workFrame 		= av_vWorkFrameset.workFrame;
        	av_hiddenFrame 		= av_vWorkFrameset.hiddenFrame;
        	av_gdsMenu			= application.gds_menu;
        	av_gdsOpenMenu		= application.gds_openMenu;
        	
        	//this.loadStyle("css::nxui_FontFace.css"); 

        	this.afn_loadCssFile("./css/nxui_FontFace.css");
        	
        	// 연계시스템에서 링크시....
        	/*
        	if(!Eco.isEmpty(application.gv_linkmenuid))
        	{
        		this.afn_viewLogin(false);
        	}
        	*/
        	
        	if(nexacro.Browser != "Runtime") { //Runtime 은 로컬에서만 사용
        		var sXadlUrl = application.xadl;
        		//개발인경우
        		if(sXadlUrl.indexOf("10.185.219.170:8180") > -1)//개발 WAS 접속 경우
        		{
        			application.services["host"].set_url("http://10.185.219.170:8180/");
        			
        			application.gv_limeUrl = "http://10.185.218.54/limesurvey/index.php";
        			application.gv_edXUrl = "http://10.185.219.94";
        			application.gv_edXAdminUrl = "http://10.185.219.94:18010";
        			application.gv_webUrl = "http://165.186.129.198:6110/";
        		}
        		else if(sXadlUrl.indexOf("165.186.129.198:6110") > -1) //개발 웹서버 접속 경우 
        		{
        			application.services["host"].set_url("http://165.186.129.198:6110/");
        			
        			application.gv_limeUrl = "http://10.185.218.54/limesurvey/index.php";
        			application.gv_edXUrl = "http://10.185.219.94";
        			application.gv_edXAdminUrl = "http://10.185.219.94:18010";
        			application.gv_webUrl = "http://165.186.129.198:6110/";
        		}
        		else if(sXadlUrl.indexOf("10.185.218.47:6110") > -1) //개발 내부 웹서버 접속 경우 
        		{
        			application.services["host"].set_url("http://10.185.218.47:6110/");
        			
        			application.gv_limeUrl = "http://10.185.218.54/limesurvey/index.php";
        			application.gv_edXUrl = "http://10.185.219.94";
        			application.gv_edXAdminUrl = "http://10.185.219.94:18010";
        			application.gv_webUrl = "http://10.185.218.47:6110/";
        		}
        		else if(sXadlUrl.indexOf("165.186.129.252") > -1) //운영 외부웹서버 
        		{
        			application.services["host"].set_url("http://165.186.129.252/");
        			
        			application.gv_limeUrl = "http://survey.lge.com/limesurvey/index.php";
        			application.gv_edXUrl = "http://edxlearning.lge.com";
        			application.gv_edXAdminUrl = "http://studiolearning.lge.com";
        			application.gv_webUrl = "http://165.186.129.252/";
        		}
        		else if(sXadlUrl.indexOf("165.186.129.43") > -1) //운영 외부웹서버 1
        		{
        			application.services["host"].set_url("http://165.186.129.43/");
        			
        			application.gv_limeUrl = "http://survey.lge.com/limesurvey/index.php";
        			application.gv_edXUrl = "http://edxlearning.lge.com";
        			application.gv_edXAdminUrl = "http://studiolearning.lge.com";
        			application.gv_webUrl = "http://165.186.129.43/";
        		}
        		else if(sXadlUrl.indexOf("165.186.129.44") > -1) //운영 외부웹서버 2
        		{
        			application.services["host"].set_url("http://165.186.129.44/");
        			
        			application.gv_limeUrl = "http://survey.lge.com/limesurvey/index.php";
        			application.gv_edXUrl = "http://edxlearning.lge.com";
        			application.gv_edXAdminUrl = "http://studiolearning.lge.com";
        			application.gv_webUrl = "http://165.186.129.44/";
        		}
        		else if(sXadlUrl.indexOf("10.185.219.221") > -1) //운영 내부웹서버 
        		{
        			application.services["host"].set_url("http://10.185.219.221:6110/");
        			
        			application.gv_limeUrl = "http://survey.lge.com/limesurvey/index.php";
        			application.gv_edXUrl = "http://edxlearning.lge.com";
        			application.gv_edXAdminUrl = "http://studiolearning.lge.com";
        			application.gv_webUrl = "http://10.185.219.221:6110/";
        		}
        		else if(sXadlUrl.indexOf("10.185.219.195") > -1) //운영 내부웹서버 1
        		{
        			application.services["host"].set_url("http://10.185.219.195:6110/");
        			
        			application.gv_limeUrl = "http://survey.lge.com/limesurvey/index.php";
        			application.gv_edXUrl = "http://edxlearning.lge.com";
        			application.gv_edXAdminUrl = "http://studiolearning.lge.com";
        			application.gv_webUrl = "http://10.185.219.195:6110/";
        		}
        		else if(sXadlUrl.indexOf("10.185.219.28") > -1) //운영 내부웹서버 2
        		{
        			application.services["host"].set_url("http://10.185.219.28:6110/");
        			
        			application.gv_limeUrl = "http://survey.lge.com/limesurvey/index.php";
        			application.gv_edXUrl = "http://edxlearning.lge.com";
        			application.gv_edXAdminUrl = "http://studiolearning.lge.com";
        			application.gv_webUrl = "http://10.185.219.28:6110/";
        		}
        		else if(sXadlUrl.indexOf("newlearningnet.lge.com") > -1)
        		{
        			application.services["host"].set_url("http://newlearningnet.lge.com/");
        			
        			application.gv_limeUrl = "http://survey.lge.com/limesurvey/index.php";
        			application.gv_edXUrl = "http://edxlearning.lge.com";
        			application.gv_edXAdminUrl = "http://studiolearning.lge.com";
        			application.gv_webUrl = "http://newlearningnet.lge.com/";
        		}
        		else if(sXadlUrl.indexOf("learningnet.lge.com") > -1)
        		{
        			application.services["host"].set_url("http://learningnet.lge.com/");
        			
        			application.gv_limeUrl = "http://survey.lge.com/limesurvey/index.php";
        			application.gv_edXUrl = "http://edxlearning.lge.com";
        			application.gv_edXAdminUrl = "http://studiolearning.lge.com";
        			application.gv_webUrl = "http://learningnet.lge.com/";
        		}
        		else if(sXadlUrl.indexOf("learning.lge.com") > -1)
        		{
        			application.services["host"].set_url("http://learning.lge.com/");
        			
        			application.gv_limeUrl = "http://survey.lge.com/limesurvey/index.php";
        			application.gv_edXUrl = "http://edxlearning.lge.com";
        			application.gv_edXAdminUrl = "http://studiolearning.lge.com";
        			application.gv_webUrl = "http://learning.lge.com/";
        		}
        		else if(sXadlUrl.indexOf("newhrd.lge.com") > -1)
        		{
        			application.services["host"].set_url("http://newhrd.lge.com/");
        			
        			application.gv_limeUrl = "http://survey.lge.com/limesurvey/index.php";
        			application.gv_edXUrl = "http://edxlearning.lge.com";
        			application.gv_edXAdminUrl = "http://studiolearning.lge.com";
        			application.gv_webUrl = "http://newhrd.lge.com/";
        		}
        		else if(sXadlUrl.indexOf("hrd.lge.com") > -1)
        		{
        			application.services["host"].set_url("http://hrd.lge.com/");
        			
        			application.gv_limeUrl = "http://survey.lge.com/limesurvey/index.php";
        			application.gv_edXUrl = "http://edxlearning.lge.com";
        			application.gv_edXAdminUrl = "http://studiolearning.lge.com";
        			application.gv_webUrl = "http://hrd.lge.com/";
        		}
        		else if(sXadlUrl.indexOf("glms.lge.com") > -1)
        		{
        			application.services["host"].set_url("http://glms.lge.com/");
        			
        			application.gv_limeUrl = "http://survey.lge.com/limesurvey/index.php";
        			application.gv_edXUrl = "http://edxlearning.lge.com";
        			application.gv_edXAdminUrl = "http://studiolearning.lge.com";
        			application.gv_webUrl = "http://glms.lge.com/";
        		}
        		else if(sXadlUrl.indexOf("learningdev.lge.com:6110") > -1) // 개발용 EDX 테스트용
        		{
        			application.services["host"].set_url("http://learningdev.lge.com:6110/");
        			
        			application.gv_limeUrl = "http://10.185.218.54/limesurvey/index.php";
        			application.gv_edXUrl = "http://10.185.219.94";
        			application.gv_edXAdminUrl = "http://10.185.219.94:18010";
        			application.gv_webUrl = "http://learningdev.lge.com:6110/";
        		}
        		/*
        		else if(sXadlUrl.indexOf("learndev.lge.com") > -1) //개발 웹서버 접속 경우 
        		{
        			application.services["host"].set_url("http://pusrmdev.lge.com/ ");
        		}
        		*/
        		
        		//운영인경우
        		/*
        		else if(sXadlUrl.indexOf("pusrm.lge.com") > -1)
        		{
        			application.services["host"].url = "http://pusrm.lge.com/";
        		}
        		else if(sXadlUrl.indexOf("10.185.218.83") > -1)
        		{
        			application.services["host"].url = "http://10.185.218.83/";
        		}
        		*/
        	}
        }

        this.afn_loadCssFile = function(cssPath)
        {
        	if(nexacro.Browser == "Runtime") { //Runtime
        		return;
        	}
        	
        	//var cssPath = './css/nxui_FontFace.css';
        	var l = document.createElement('link');
        	var h = document.getElementsByTagName('head')[0];
        	
        	l.rel = 'stylesheet';
        	l.type = "text/css";
        	l.href = cssPath;
        	
        	h.appendChild(l);
        } 

        
        // 로그인 화면  가리기/ 보이기
        this.afn_viewLogin = function(bView)
        {
        	/*
        	if(bView) {
        		av_vMainFrameset.set_separatesize("*,0");
        	} else {
        		av_vMainFrameset.set_separatesize("0,*");
        	}
        	*/
        }

        
        // 프레임 주소 비우기
        this.afn_setFrameUrl = function()
        {
        	av_topFrame.set_formurl("");
        	av_workFrame.set_formurl("");
        	
        	av_topFrame.set_formurl("Frame_HRD::TopFrame.xfdl");
        	av_workFrame.set_formurl("Frame_HRD::WorkFrame.xfdl");
        }

        
        // 로그인 확인여부후 프레임 세팅
        this.afn_loginPass = function()
        {
        	this.afn_setFrameUrl();
        	this.afn_viewLogin(false);
        	
        	/*
        	if(!Eco.isEmpty(application.gv_linkmenuid))
        	{
        		// ^ 변수 구분값
        		// : key, value 구분값
        		var sParamters = application.gv_paramters;
        		var aParam = sParamters.split("^");
        		var sParam = {};
        		
        		for(i=0; i<aParam.length; i++) {
        			aResult = aParam[i].split(":");
        			eval("sParam."+ aResult[0] + " = '" + aResult[1] + "';");
        		}	
        		application.afn_menuOpen(application.gv_linkmenuid,sParam);	
        	}
        	*/
        }

        
        // 메뉴 열기
        this.afn_menuOpen = function(sMenuId,oParam)
        {
        	av_workFrame.form.fn_OpenMenu(sMenuId, oParam);
        }

        
        // 메뉴 경로 열기
        this.afn_menupathOpen = function(sMenuId,sPath,sTitle,oParam)
        {
        	av_workFrame.form.fn_OpenMenuPath(sMenuId, sPath, sTitle, oParam);
        }

        
        this.afn_logOut = function()
        {
        	//application.afn_viewLogin(true);
        	
        	av_topFrame.set_formurl("");
        	av_workFrame.set_formurl("");
        	
        	//application.gds_menu.clearData();
        	//application.gds_message.clearData();
        	application.gds_userInfo.clearData();
        	
        	/*
        	application.gv_language = "";
        	application.gv_userid = "";
        	application.gv_sitecode = "";
        	application.gv_autho_sitecode = "";
        	*/
        	// 로그인하지 않은 경우 부품 Default
        	application.gv_sitecode = "103";
        	application.gv_autho_sitecode = "103";
        	application.gv_language = "ko";
        	application.gv_syscode = "P";
        	
        	application.afn_setFrameUrl();
        }

        
        this.afn_refershLeftStatus = function()
        {
        	if(application.gds_userInfo.getRowCount() == 1)
        	{
        		av_workFrame.form.div_Work.div_Left.fn_run("retrieveLeaderLearningStatus");
        	}
        }
        
        });


        this.checkLicense("");
        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("lgeNet.xtheme");

this.loadCss("css::Common.css");
this.loadCss("css::Home.css");
this.loadCss("css::LeftFrame.css");
this.loadCss("css::Login.css");
this.loadCss("css::MdiFrame.css");
this.loadCss("css::TopFrame.css");
this.loadCss("css::WorkFrame.css");
this.loadCss("css::MainFrame.css");

        this.loadIncludeScript("LnetHRD.xadl");
    };
}
)();
