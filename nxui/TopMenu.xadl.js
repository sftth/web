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
            this._addService("default_typedef.xml", "host", "JSP", "http://localhost:8080/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "nexacro14lib", "file", "./nexacro14lib/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "css", "file", "./css/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BaseLibrary", "file", "./nexacro14lib/component/BaseLibrary/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "LgeLibrary", "file", "./nexacro14lib/component/LgeLibrary/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "LgeObject", "file", "./nexacro14lib/component/LgeObject/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "CommonLibrary", "js", "./CommonLibrary/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "CommonObject", "form", "./CommonObject/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "Frame_TopMenu", "form", "./com/Frame_TopMenu/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "guide_COMPONENT", "form", "./com/guide/COMPONENT/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "guide_TEMPLATE", "form", "./com/guide/TEMPLATE/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "guide_SAMPLE", "form", "./com/guide/SAMPLE/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "guide_rMateChart", "form", "./com/guide/rMateChart/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "images", "file", "./images/", "", null, "", "0", "0");

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
            this._addVariable("gv_language", null, false);
            this._addVariable("gv_imagefilesrc", "common/viewImage.do?fileId=#1&fileSeq=#2", false);
            this._addVariable("gv_linkuserid", null, false);
            this._addVariable("gv_linkmenuid", null, false);
            this._addVariable("gv_paramters", null, false);
            this._addVariable("gv_syscode", null, false);
            this._addVariable("gv_userid", null, false);
            this._addVariable("gv_userkey", null, false);
            this._addVariable("gv_tp", null, false);
            this._addVariable("gv_dragFrame", null, false);
            this._addVariable("gv_dropFrame", null, false);
            this._addVariable("gv_dragFrameUrl", null, false);
            this._addVariable("gv_dropFrameUrl", null, false);

            // global image

            // global dataset
            var obj = null;
            obj = new Dataset("gds_devMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ODRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRNT_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">D000</Col><Col id=\"MENU_CAPTION\">시작하기</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_CAPTION\">컴포넌트 소개</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_CAPTION\">기본 컴포넌트</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D501</Col><Col id=\"MENU_CAPTION\">Static, Edit, MaskEdit</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_COMPONENT::Guide01.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D502</Col><Col id=\"MENU_CAPTION\">Combo, ListBox, Spin</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_COMPONENT::Guide02.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D503</Col><Col id=\"MENU_CAPTION\">CheckBox, Radio, Tab, ImageViewer</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_COMPONENT::Guide03.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D504</Col><Col id=\"MENU_CAPTION\">Grid</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_COMPONENT::Guide04.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D505</Col><Col id=\"MENU_CAPTION\">Grid2</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_COMPONENT::Guide05.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D506</Col><Col id=\"MENU_CAPTION\">Button</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_COMPONENT::Guide06.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D507</Col><Col id=\"MENU_CAPTION\">PopupMenu, GroupBox, ProgressBar, Menu....</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_COMPONENT::Guide07.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D508</Col><Col id=\"MENU_CAPTION\">조회영역</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_COMPONENT::Guide08.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D509</Col><Col id=\"MENU_CAPTION\">FreeForm</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_COMPONENT::Guide09.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_CAPTION\">사용자 컴포넌트</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D004</Col><Col id=\"MENU_CAPTION\">그리드</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_SAMPLE::grid_guide.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D003</Col><Col id=\"MENU_CAPTION\">사용자콤보1 (코드+코드명)</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_SAMPLE::combo_guide.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D008</Col><Col id=\"MENU_CAPTION\">사용자콤보2 (멀티선택)</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_SAMPLE::combo_guide2.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D005</Col><Col id=\"MENU_CAPTION\">사용자달력 (기간일력)</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_SAMPLE::periodCalendar_guide.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D009</Col><Col id=\"MENU_CAPTION\">사용자달력 (월력)</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_SAMPLE::monthCalendar_guide.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D010</Col><Col id=\"MENU_CAPTION\">사용자달력 (기간월력)</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_SAMPLE::monthPeriodCalendar_guide.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D001</Col><Col id=\"MENU_CAPTION\">개발 가이드</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D002</Col><Col id=\"MENU_CAPTION\">Form &amp; Script</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_TEMPLATE::dev_index.xfdl</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D006</Col><Col id=\"MENU_CAPTION\">Excel Export</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::excelexport_guide.xfdl</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D007</Col><Col id=\"MENU_CAPTION\">Excel Import</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::excelimport_guide.xfdl</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D011</Col><Col id=\"MENU_CAPTION\">Message</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::message_guide.xfdl</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D012</Col><Col id=\"MENU_CAPTION\">Transaction (NCD)</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::transaction_guide.xfdl</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D021</Col><Col id=\"MENU_CAPTION\">Transaction (Devon)</Col><Col id=\"MENU_URL\">guide_SAMPLE::transaction_guide2.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D013</Col><Col id=\"MENU_CAPTION\">Link</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::menu_link.xfdl</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D014</Col><Col id=\"MENU_CAPTION\">Popup</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::popup_guide.xfdl</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D019</Col><Col id=\"MENU_CAPTION\">Validation</Col><Col id=\"MENU_URL\">guide_SAMPLE::vaildation_check.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_CAPTION\">Sample</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_CAPTION\">CRUD Sample</Col><Col id=\"MENU_URL\">guide_SAMPLE::MessageMngSample.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">D015</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D511</Col><Col id=\"MENU_CAPTION\">File Upload</Col><Col id=\"PRNT_MENU_CD\">[Undefined]</Col><Col id=\"SYS_CD\">[Undefined]</Col><Col id=\"MENU_DESC\">[Undefined]</Col><Col id=\"MENU_URL\">guide_COMPONENT::Guide10.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D512</Col><Col id=\"MENU_CAPTION\">Email Send</Col><Col id=\"MENU_URL\">guide_SAMPLE::email_send.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D700</Col><Col id=\"MENU_CAPTION\">화면패턴</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D711</Col><Col id=\"MENU_CAPTION\">조회영역 TOP</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_CAPTION\">템플릿1</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">guide_TEMPLATE::Temp_01.xfdl</Col><Col id=\"MENU_ID\">D701</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D702</Col><Col id=\"MENU_CAPTION\">템플릿2</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_TEMPLATE::Temp_02.xfdl</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/></Row><Row><Col id=\"MENU_ID\">D703</Col><Col id=\"MENU_CAPTION\">템플릿3</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_TEMPLATE::Temp_03.xfdl</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/></Row><Row><Col id=\"MENU_ID\">D704</Col><Col id=\"MENU_CAPTION\">템플릿4</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_TEMPLATE::Temp_04.xfdl</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/></Row><Row><Col id=\"MENU_ID\">D705</Col><Col id=\"MENU_CAPTION\">템플릿5</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_TEMPLATE::Temp_05.xfdl</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/></Row><Row><Col id=\"MENU_ID\">D706</Col><Col id=\"MENU_CAPTION\">템플릿6</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_TEMPLATE::Temp_06.xfdl</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/></Row><Row><Col id=\"MENU_ID\">D707</Col><Col id=\"MENU_CAPTION\">템플릿7</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_TEMPLATE::Temp_07.xfdl</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/></Row><Row><Col id=\"MENU_ID\">D712</Col><Col id=\"MENU_CAPTION\">조회영역 LEFT</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D721</Col><Col id=\"MENU_CAPTION\">Left템플릿1</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_TEMPLATE::LeftTemp_01.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D722</Col><Col id=\"MENU_CAPTION\">Left템플릿2</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_TEMPLATE::LeftTemp_02.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D723</Col><Col id=\"MENU_CAPTION\">Left템플릿3</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_TEMPLATE::LeftTemp_03.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D724</Col><Col id=\"MENU_CAPTION\">Left템플릿4</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_TEMPLATE::LeftTemp_04.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D725</Col><Col id=\"MENU_CAPTION\">Left템플릿5</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_TEMPLATE::LeftTemp_05.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D726</Col><Col id=\"MENU_CAPTION\">Left템플릿6</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_TEMPLATE::LeftTemp_06.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D727</Col><Col id=\"MENU_CAPTION\">Left템플릿7</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_TEMPLATE::LeftTemp_07.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D800</Col><Col id=\"MENU_CAPTION\">3Part 제품연동</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D880</Col><Col id=\"MENU_CAPTION\">Daum 우편번호</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_SAMPLE::zipCode.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D801</Col><Col id=\"MENU_CAPTION\">TagFree</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">[Undefined]</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D802</Col><Col id=\"MENU_CAPTION\">TagFree 쓰기</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_SAMPLE::tagfree_guide.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D803</Col><Col id=\"MENU_CAPTION\">TagFree 읽기</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_SAMPLE::tagfree_guide2.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_openMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_gridMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuLvl\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"bUse\" type=\"STRING\" size=\"256\"/><Column id=\"bEnbleColumn\" type=\"STRING\" size=\"256\"/><Column id=\"hotkeyColumn\" type=\"STRING\" size=\"256\"/><Column id=\"iconColumn\" type=\"STRING\" size=\"256\"/><Column id=\"menuNmEn\" type=\"STRING\" size=\"256\"/><Column id=\"option\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">100</Col><Col id=\"menuNm\">필터</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"menuNmEn\">Filter On</Col><Col id=\"option\">FILTER</Col><Col id=\"iconColumn\"/></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">110</Col><Col id=\"menuNm\">필터취소</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"menuNmEn\">Filter Off</Col><Col id=\"option\">FILTER</Col><Col id=\"iconColumn\"/></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">199</Col><Col id=\"menuNm\">----------------------</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">0</Col><Col id=\"menuNmEn\">----------------------</Col><Col id=\"option\">FILTER</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">200</Col><Col id=\"menuNm\">소트</Col><Col id=\"option\">SORT</Col><Col id=\"menuNmEn\">Sort On</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"bUse\">Y</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">210</Col><Col id=\"menuNm\">멀티 소트</Col><Col id=\"option\">SORT</Col><Col id=\"menuNmEn\">MulitiSort On</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"bUse\">Y</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">220</Col><Col id=\"menuNm\">소트취소</Col><Col id=\"option\">SORT</Col><Col id=\"menuNmEn\">Sort Off</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"bUse\">Y</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">299</Col><Col id=\"menuNm\">----------------------</Col><Col id=\"menuNmEn\">----------------------</Col><Col id=\"option\">SORT</Col><Col id=\"bEnbleColumn\">0</Col><Col id=\"bUse\">Y</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">300</Col><Col id=\"menuNm\">칼럼숨기기</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"iconColumn\">images::ico_grd_columnHide.png</Col><Col id=\"menuNmEn\">Hide Column</Col><Col id=\"option\">HIDE</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">310</Col><Col id=\"menuNm\">컬럼모두보이기</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"iconColumn\">images::ico_grd_columnView.png</Col><Col id=\"menuNmEn\">Undo Hide</Col><Col id=\"option\">HIDE</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">399</Col><Col id=\"menuNm\">----------------------</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">0</Col><Col id=\"menuNmEn\">----------------------</Col><Col id=\"option\">HIDE</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">400</Col><Col id=\"menuNm\">틀고정</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"iconColumn\">images::ico_grd_fixed.png</Col><Col id=\"menuNmEn\">Freeze Column</Col><Col id=\"option\">FREEZE</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">410</Col><Col id=\"menuNm\">틀고정취소</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"iconColumn\">images::ico_grd_fixedCancel.png</Col><Col id=\"menuNmEn\">Release Column</Col><Col id=\"option\">FREEZE</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">499</Col><Col id=\"menuNm\">----------------------</Col><Col id=\"menuNmEn\">----------------------</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">0</Col><Col id=\"option\">FREEZE</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">10000</Col><Col id=\"menuNm\">전체 초기화</Col><Col id=\"bUse\">Y</Col><Col id=\"bEnbleColumn\">1</Col><Col id=\"menuNmEn\">Reset</Col><Col id=\"option\">RESET</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_message", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TRAN\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MSG_CD\">M1000</Col><Col id=\"MSG_CONT\">#를 # 입력하세요</Col><Col id=\"LANG_CD\">KR</Col></Row><Row><Col id=\"MSG_CD\">LOGIN.FAIL</Col><Col id=\"MSG_CONT\">아이디 또는 비밀번호를 확인하십시오</Col><Col id=\"LANG_CD\">KR</Col></Row><Row><Col id=\"MSG_CONT\">메뉴관리</Col><Col id=\"MSG_TRAN\">Menu Manage</Col><Col id=\"LANG_CD\">KR</Col><Col id=\"MSG_CD\">MENU.MNG</Col></Row><Row><Col id=\"MSG_CONT\">사용자 관리</Col><Col id=\"MSG_TRAN\">User Manage</Col><Col id=\"LANG_CD\">KR</Col><Col id=\"MSG_CD\">USER.MNG</Col></Row><Row><Col id=\"MSG_CONT\">저장</Col><Col id=\"MSG_TRAN\">Save</Col><Col id=\"LANG_CD\">KR</Col><Col id=\"MSG_CD\">SAVE</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_tempTagFree", this);
            obj._setContents("<ColumnInfo><Column id=\"content\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"content\"/></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_language", this);
            obj._setContents("<ColumnInfo><Column id=\"WORD_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"WORD_TRANSLATION\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WORD_KEY\">메뉴관리</Col><Col id=\"WORD_TRANSLATION\">Menu Manage</Col><Col id=\"LANGUAGE\">EN</Col></Row><Row><Col id=\"WORD_KEY\">사용자 관리</Col><Col id=\"WORD_TRANSLATION\">User Manage</Col><Col id=\"LANGUAGE\">EN</Col></Row><Row><Col id=\"WORD_KEY\">저장</Col><Col id=\"WORD_TRANSLATION\">Save</Col><Col id=\"LANGUAGE\">EN</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TIME_ZONE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FORMAT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM_FORMAT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"NUM_FORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"HR_BIZPLC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_LOGIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_AFFILIATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_AU_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ODRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRNT_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">aaa</Col><Col id=\"MENU_CAPTION\">DB에서 </Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">bbb</Col><Col id=\"MENU_CAPTION\">조회해온</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">ccc</Col><Col id=\"MENU_CAPTION\">메뉴</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LEVEL\">3</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_portlet", this);
            obj._setContents("<ColumnInfo><Column id=\"portlet_seq\" type=\"STRING\" size=\"256\"/><Column id=\"portlet_url\" type=\"STRING\" size=\"256\"/><Column id=\"portlet_falg\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"portlet_seq\">1</Col><Col id=\"portlet_url\">guide_SAMPLE::test1.xfdl</Col><Col id=\"portlet_falg\">Y</Col></Row><Row><Col id=\"portlet_seq\">2</Col><Col id=\"portlet_url\">guide_SAMPLE::test2.xfdl</Col><Col id=\"portlet_falg\">Y</Col></Row><Row><Col id=\"portlet_seq\">3</Col><Col id=\"portlet_url\">guide_SAMPLE::test3.xfdl</Col><Col id=\"portlet_falg\">Y</Col></Row><Row><Col id=\"portlet_seq\">4</Col><Col id=\"portlet_url\">guide_SAMPLE::test4.xfdl</Col><Col id=\"portlet_falg\">Y</Col></Row><Row><Col id=\"portlet_seq\">5</Col><Col id=\"portlet_url\">guide_SAMPLE::test5.xfdl</Col><Col id=\"portlet_falg\">Y</Col></Row><Row><Col id=\"portlet_seq\">6</Col><Col id=\"portlet_url\">guide_SAMPLE::test6.xfdl</Col><Col id=\"portlet_falg\">Y</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_devMenuBack", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ODRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRNT_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">D000</Col><Col id=\"MENU_CAPTION\">가이드</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">D001</Col><Col id=\"MENU_CAPTION\">개발가이드</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">D002</Col><Col id=\"MENU_CAPTION\">개발기준</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_TEMPLATE::dev_index.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D004</Col><Col id=\"MENU_CAPTION\">그리드 기능</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::grid_guide.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D003</Col><Col id=\"MENU_CAPTION\">사용자콤보1 (코드+코드명)</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::combo_guide.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D008</Col><Col id=\"MENU_CAPTION\">사용자콤보2 (멀티선택)</Col><Col id=\"MENU_URL\">guide_SAMPLE::combo_guide2.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D005</Col><Col id=\"MENU_CAPTION\">사용자달력 (기간일력)</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::periodCalendar_guide.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D009</Col><Col id=\"MENU_CAPTION\">사용자달력 (월력)</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::monthCalendar_guide.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D010</Col><Col id=\"MENU_CAPTION\">사용자달력 (기간월력)</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::monthPeriodCalendar_guide.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D006</Col><Col id=\"MENU_CAPTION\">엑셀 Export 기능</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::excelexport_guide.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D007</Col><Col id=\"MENU_CAPTION\">엑셀 Import 기능</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::excelimport_guide.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D011</Col><Col id=\"MENU_CAPTION\">메세지 처리 </Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::message_guide.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D012</Col><Col id=\"MENU_CAPTION\">transaction (NCD)</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::transaction_guide.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D021</Col><Col id=\"MENU_CAPTION\">transaction (Devon)</Col><Col id=\"MENU_URL\">guide_SAMPLE::transaction_guide2.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D013</Col><Col id=\"MENU_CAPTION\">메뉴링크</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::menu_link.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D014</Col><Col id=\"MENU_CAPTION\">팝업 가이드</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::popup_guide.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D015</Col><Col id=\"MENU_CAPTION\">CRUD 샘플</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::MessageMngSample.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D018</Col><Col id=\"MENU_CAPTION\">다국어 가이드</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_SAMPLE::language_guide.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D019</Col><Col id=\"MENU_CAPTION\">Vaildation Check</Col><Col id=\"MENU_URL\">guide_SAMPLE::vaildation_check.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D020</Col><Col id=\"MENU_CAPTION\">우편번호(Daum API)</Col><Col id=\"MENU_URL\">guide_SAMPLE::zipCode.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D500</Col><Col id=\"MENU_CAPTION\">기본 컴포넌트가이드</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">D501</Col><Col id=\"MENU_CAPTION\">Static, Edit, MaskEdit</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_COMPONENT::Guide01.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D502</Col><Col id=\"MENU_CAPTION\">Combo, ListBox, Spin</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_COMPONENT::Guide02.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D503</Col><Col id=\"MENU_CAPTION\">CheckBox, Radio, Tab, ImageViewer</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_COMPONENT::Guide03.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D504</Col><Col id=\"MENU_CAPTION\">Grid</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_COMPONENT::Guide04.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D505</Col><Col id=\"MENU_CAPTION\">Grid2</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_COMPONENT::Guide05.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D506</Col><Col id=\"MENU_CAPTION\">Button</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_COMPONENT::Guide06.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D507</Col><Col id=\"MENU_CAPTION\">PopupMenu, GroupBox, ProgressBar, Menu....</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_COMPONENT::Guide07.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D508</Col><Col id=\"MENU_CAPTION\">조회영역</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_COMPONENT::Guide08.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D509</Col><Col id=\"MENU_CAPTION\">FreeForm</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_COMPONENT::Guide09.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D511</Col><Col id=\"MENU_CAPTION\">File Upload</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\">guide_COMPONENT::Guide10.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D700</Col><Col id=\"MENU_CAPTION\">템플릿 가이드</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">D711</Col><Col id=\"MENU_CAPTION\">조회영역 TOP</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_CAPTION\">템플릿1</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">guide_TEMPLATE::Temp_01.xfdl</Col><Col id=\"MENU_ID\">D701</Col></Row><Row><Col id=\"MENU_ID\">D702</Col><Col id=\"MENU_CAPTION\">템플릿2</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\">[Undefined]</Col><Col id=\"MENU_URL\">guide_TEMPLATE::Temp_02.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D703</Col><Col id=\"MENU_CAPTION\">템플릿3</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\">[Undefined]</Col><Col id=\"MENU_URL\">guide_TEMPLATE::Temp_03.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D704</Col><Col id=\"MENU_CAPTION\">템플릿4</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\">[Undefined]</Col><Col id=\"MENU_URL\">guide_TEMPLATE::Temp_04.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D705</Col><Col id=\"MENU_CAPTION\">템플릿5</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\">[Undefined]</Col><Col id=\"MENU_URL\">guide_TEMPLATE::Temp_05.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D706</Col><Col id=\"MENU_CAPTION\">템플릿6</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\">[Undefined]</Col><Col id=\"MENU_URL\">guide_TEMPLATE::Temp_06.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D707</Col><Col id=\"MENU_CAPTION\">템플릿7</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\">[Undefined]</Col><Col id=\"MENU_URL\">guide_TEMPLATE::Temp_07.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D712</Col><Col id=\"MENU_CAPTION\">조회영역 LEFT</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D721</Col><Col id=\"MENU_CAPTION\">Left템플릿1</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">guide_TEMPLATE::LeftTemp_01.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D722</Col><Col id=\"MENU_CAPTION\">Left템플릿2</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\">[Undefined]</Col><Col id=\"MENU_URL\">guide_TEMPLATE::LeftTemp_02.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D723</Col><Col id=\"MENU_CAPTION\">Left템플릿3</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\">[Undefined]</Col><Col id=\"MENU_URL\">guide_TEMPLATE::LeftTemp_03.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D724</Col><Col id=\"MENU_CAPTION\">Left템플릿4</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\">[Undefined]</Col><Col id=\"MENU_URL\">guide_TEMPLATE::LeftTemp_04.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D725</Col><Col id=\"MENU_CAPTION\">Left템플릿5</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\">[Undefined]</Col><Col id=\"MENU_URL\">guide_TEMPLATE::LeftTemp_05.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D726</Col><Col id=\"MENU_CAPTION\">Left템플릿6</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\">[Undefined]</Col><Col id=\"MENU_URL\">guide_TEMPLATE::LeftTemp_06.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D727</Col><Col id=\"MENU_CAPTION\">Left템플릿7</Col><Col id=\"PRNT_MENU_CD\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\">[Undefined]</Col><Col id=\"MENU_URL\">guide_TEMPLATE::LeftTemp_07.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D800</Col><Col id=\"MENU_CAPTION\">3Part 제품연동</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">D801</Col><Col id=\"MENU_CAPTION\">TagFree</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D802</Col><Col id=\"MENU_CAPTION\">TagFree 쓰기</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">guide_SAMPLE::tagfree_guide.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D803</Col><Col id=\"MENU_CAPTION\">TagFree 읽기</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">guide_SAMPLE::tagfree_guide2.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D804</Col><Col id=\"MENU_CAPTION\">rMate Chart</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_URL\"/></Row><Row><Col id=\"MENU_ID\">D805</Col><Col id=\"MENU_CAPTION\">URL로 레이아웃, 데이타 로딩</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">guide_rMateChart::frmLoadingFromURL.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D806</Col><Col id=\"MENU_CAPTION\">함수로 레이아웃, 데이타 로딩</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">guide_rMateChart::frmLoadingByFunction.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D807</Col><Col id=\"MENU_CAPTION\">라벨 사용자 정의</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">guide_rMateChart::frmLabelFunction.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D808</Col><Col id=\"MENU_CAPTION\">라벨 사용자 정의(PieChart)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">guide_rMateChart::frmLabelFunctionPieChart.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D809</Col><Col id=\"MENU_CAPTION\">데이타팁 사용자 정의</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">guide_rMateChart::frmDatatipFunction.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D810</Col><Col id=\"MENU_CAPTION\">클릭 이벤트 처리</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">guide_rMateChart::frmItemClick.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D811</Col><Col id=\"MENU_CAPTION\">조건에 따라 색상 결정하기</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">guide_rMateChart::frmFillFunction.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D812</Col><Col id=\"MENU_CAPTION\">두개의 차트 표시</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">guide_rMateChart::frmTwoChart.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D813</Col><Col id=\"MENU_CAPTION\">슬라이드 차트</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">guide_rMateChart::frmSlideChart.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D814</Col><Col id=\"MENU_CAPTION\">게이지</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">guide_rMateChart::frmGauge.xfdl</Col></Row><Row><Col id=\"MENU_ID\">D815</Col><Col id=\"MENU_CAPTION\">Dataset</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">guide_rMateChart::frmDataset.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;


            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("test");
            this.set_version("");
            this.set_tracemode("none");
            this.set_themeid("common.xtheme");

            if (this._is_attach_childframe)
            	return;

            // frame
            var mainframe = this.createMainFrame("mainframe", "absolute", "0", "0", "1264", "678", null, null, this);
            mainframe.set_resizable("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_openstatus("normal");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("vMainFrameset", "absolute", null, null, null, null, null, null, this);
            this.addChild(frame0.name, frame0);
            this.frame = frame0;
            frame0.set_separatesize("*,0");

            
            var frame1 = new ChildFrame("loginFrame", "absolute", null, null, null, null, null, null, "Frame_TopMenu::LoginFrame.xfdl", frame0);
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("Frame_TopMenu::LoginFrame.xfdl");
            frame1.set_dragmovetype("none");
            frame1.set_showtitlebar("false");
            frame1.style.set_border("1 none #9e9d9dff");
            var frame2 = new VFrameSet("vWorkFrameset", "absolute", null, null, null, null, null, null, frame0);
            frame0.addChild(frame2.name, frame2);
            frame2.set_separatesize("56,30,0,*,0");
            frame2.set_showtitleicon("false");

            
            var frame3 = new ChildFrame("topFrame", "absolute", null, null, null, null, null, null, "", frame2);
            frame2.addChild(frame3.name, frame3);
            frame3.set_showtitlebar("false");
            frame3.set_dragmovetype("none");
            frame3.style.set_background("transparent");
            frame3.style.set_border("0 none #9e9d9dff");
            frame3.style.set_font("9 #ffffff");

            var frame4 = new ChildFrame("tabFrame", "absolute", null, null, null, null, null, null, "", frame2);
            frame2.addChild(frame4.name, frame4);
            frame4.style.set_border("0 none #9e9d9dff");
            frame4.set_dragmovetype("none");
            frame4.set_showtitlebar("false");
            var frame5 = new FrameSet("mdiFrameset", "absolute", null, null, null, null, null, null, frame2);
            frame2.addChild(frame5.name, frame5);
            frame5.style.set_background("transparent");
            frame5.style.set_border("0 none #808080ff");

            
            var frame6 = new ChildFrame("introFrame", "absolute", null, null, null, null, null, null, "", frame2);
            frame2.addChild(frame6.name, frame6);
            frame6.set_dragmovetype("none");
            frame6.set_showtitlebar("false");
            frame6.style.set_border("0 none #9e9d9dff");

            var frame7 = new ChildFrame("hiddenFrame", "absolute", null, null, null, null, null, null, "Frame_TopMenu::HiddenFrame.xfdl", frame2);
            frame2.addChild(frame7.name, frame7);
            frame7.set_dragmovetype("none");
            frame7.set_showtitlebar("false");
            frame7.style.set_border("0 none #9e9d9dff");
            frame7.set_formurl("Frame_TopMenu::HiddenFrame.xfdl");

        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onloadingglobalvariables", this.application_onloadingglobalvariables, this);
            this.addEventHandler("onloadforms", this.application_onloadforms, this);

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler
        this.registerScript("TopMenu.xadl", function(exports) {

        this.av_mainFrame;
        this.av_vMainFrameset;
        this.av_loginFrame;
        this.av_vWorkFrameset;
        this.av_topFrame;
        this.av_mdiFrameset;
        this.av_introFrame;
        this.av_tabFrame;
        this.av_hiddenFrame;
        this.av_gdsMenu;
        this.av_gdsOpenMenu;

        

        this.application_onloadingglobalvariables = function(obj,e)
        {
        	this.av_mainFrame 		= application.mainframe;
        	this.av_vMainFrameset 	= this.av_mainFrame.vMainFrameset;
        	this.av_loginFrame 		= this.av_vMainFrameset.loginFrame;
        	this.av_vWorkFrameset 	= this.av_vMainFrameset.vWorkFrameset;
        	this.av_topFrame 		= this.av_vWorkFrameset.topFrame;
        	this.av_mdiFrameset 	= this.av_vWorkFrameset.mdiFrameset;
        	this.av_introFrame 		= this.av_vWorkFrameset.introFrame;	
        	this.av_tabFrame 		= this.av_vWorkFrameset.tabFrame;
        	this.av_hiddenFrame		= this.av_vWorkFrameset.hiddenFrame;
        	this.av_gdsMenu			= application.gds_menu;
        	this.av_gdsOpenMenu		= application.gds_openMenu;
        	

        	//application.set_locale("ms_MY");
        	
        	

        	// 연계시스템에서 링크시....
        	if(!Base.isEmpty(application.gv_linkmenuid))
        	{
        		this.afn_viewLogin(false);
        		this.afn_viewIntro(false);
        	}	
        	
        	if(nexacro.Browser != "Runtime") { //Runtime 은 로컬에서만 사용
        		var sXadlUrl = application.xadl;
        		
        		// 개발/운영 서버 구분해서 host url 셋팅
        		if(sXadlUrl.indexOf("10.185.221.21") > -1)
        		{
        			application.services["host"].set_url("http://10.185.221.21/");
        		}
        		
        		if(sXadlUrl.indexOf("10.185.221.24") > -1)
        		{
        			application.services["host"].set_url("http://10.185.221.24/");
        		}
        	}
        }

        
        // 로그인 화면  가리기/ 보이기
        this.afn_viewLogin = function(bView)
        {
        	if(bView)
        	{
        		this.av_vMainFrameset.set_separatesize("*,0");
        	} else {
        		this.av_vMainFrameset.set_separatesize("0,*");
        	}
        }

        
        // 인트로 화면 가리기/ 보이기
        this.afn_viewIntro = function(bView)
        {
        	if(bView)
        	{
        		this.av_vWorkFrameset.set_separatesize("56,30,0,*,0");
        	} else {
        	
        		if(!Base.isEmpty(application.gv_linkmenuid))
        		{
        			this.av_vWorkFrameset.set_separatesize("0,0,*,0,0");
        		} else {
        			this.av_vWorkFrameset.set_separatesize("56,30,*,0,0");
        		}
        	}
        }

        
        // 프레임 주소 비우기
        this.afn_setFrameUrl = function ()
        {
        	this.av_topFrame.set_formurl("");
        	this.av_tabFrame.set_formurl("");
        	this.av_introFrame.set_formurl("");

        	this.av_topFrame.set_formurl("Frame_TopMenu::TopFrame.xfdl");
        	this.av_tabFrame.set_formurl("Frame_TopMenu::TabFrame.xfdl");
        	this.av_introFrame.set_formurl("Frame_TopMenu::IntroFrame.xfdl");	
        }

        
        // 로그인 확인여부후 프레임 세팅
        this.afn_loginPass = function()
        {

        	var sXadlUrl = application.xadl;

        	//if(nexacro.Browser == "Runtime" || sXadlUrl.indexOf("localhost") > -1 || sXadlUrl.indexOf("10.185.221.21") > -1)
        	//{
        		application.gds_menu.appendData(application.gds_devMenu);
        	//}	

        	this.afn_setFrameUrl();
        	this.afn_viewLogin(false);

        	if(!Base.isEmpty(application.gv_linkmenuid))
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
        }

        

        // 메뉴 열기
        this.afn_menuOpen = function(sMenuId,oParam)
        {
        	this.av_hiddenFrame.form.fn_menuOpen(sMenuId, oParam);
        }

        // Index로 화면 닫기
        this.afn_tabPageClose = function(nIndex)
        {
        	this.av_hiddenFrame.form.fn_tabPageClose(nIndex);
        }

        // 메뉴코드로 화면닫기
        this.afn_menuClose = function(sMenuId)
        {
        	this.av_hiddenFrame.form.fn_menuClose(sMenuId);
        }

        // 로그아웃 처리
        this.afn_logOut = function() {

        	this.av_vMainFrameset.set_separatesize("*,0");
        	
        	this.av_topFrame.set_formurl("");
        	this.av_tabFrame.set_formurl("");
        	this.av_introFrame.set_formurl("");
        	this.av_loginFrame.set_formurl("");

        	var sWin ;

        	for(i=0; i<application.gds_openMenu.rowcount; i++) 
        	{
        		sWin = application.gds_openMenu.getColumn(i,"WIN_ID");
        		this.av_mdiFrameset.removeChild(sWin);
        	}

        	application.gds_menu.deleteAll();
        	application.gds_openMenu.deleteAll();
        	application.gds_message.deleteAll();
        	application.gds_userInfo.deleteAll();

        	application.afn_viewIntro(true);
        		
        	this.av_loginFrame.set_formurl("Frame_TopMenu::LoginFrame.xfdl");
        }
        
        });


        this.checkLicense("");
        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("common.xtheme");

this.loadCss("css::Common.css");
this.loadCss("css::GFCM.css");
this.loadCss("css::GLAP.css");
this.loadCss("css::MainFrame.css");
this.loadCss("css::TabFrame.css");
this.loadCss("css::TopFrame.css");
this.loadCss("css::WorkFrame.css");
this.loadCss("css::GLAP.css");
this.loadCss("css::GLAP.css");

        this.loadIncludeScript("TopMenu.xadl", true);
    };
}
)();
