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
            this._addService("default_typedef.xml", "host", "JSP", "http://nip-web-demo-mw.apps-crc.testing/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "nexacro14lib", "file", "./nexacro14lib/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "css", "file", "./css/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "images", "file", "./images/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BaseLibrary", "file", "./nexacro14lib/component/BaseLibrary/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "LgeLibrary", "file", "./nexacro14lib/component/LgeLibrary/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "LgeObject", "file", "./nexacro14lib/component/LgeObject/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "CommonLibrary", "js", "./CommonLibrary/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "CommonObject", "form", "./CommonObject/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "Frame", "form", "./com/Frame/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "Component", "form", "./com/Component/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "Template", "form", "./com/Template/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "Sample", "form", "./com/Sample", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "Part3rd", "form", "./com/Part3rd/", "", null, "", "0", "0");

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
            		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
            		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"}
            ];
            this._addClasses(registerclass);
        };
        
        this.on_loadGlobalVariables = function()
        {
            // global variable
            this._addVariable("gv_linkmenuid", null, false);
            this._addVariable("gv_openMenuListType", "Top", false);
            this._addVariable("gv_paramters", null, false);
            this._addVariable("gv_linkuserid", null, false);
            this._addVariable("gv_userid", null, false);
            this._addVariable("gv_userkey", null, false);

            // global image

            // global dataset
            var obj = null;
            obj = new Dataset("gds_devMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ODRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRNT_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">D000</Col><Col id=\"MENU_CAPTION\">시작하기</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"PRNT_MENU_ID\"/><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_CAPTION\">컴포넌트 소개</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PRNT_MENU_ID\">D000</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_ID\">D100</Col></Row><Row><Col id=\"MENU_CAPTION\">기본 컴포넌트</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PRNT_MENU_ID\">D100</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_ID\">D110</Col></Row><Row><Col id=\"MENU_ID\">D111</Col><Col id=\"MENU_CAPTION\">Static, Edit, MaskEdit, TextArea</Col><Col id=\"PRNT_MENU_ID\">D110</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Component::Form_Basic_Comp1.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D112</Col><Col id=\"MENU_CAPTION\">Combo, ListBox, Spin, Calendar</Col><Col id=\"PRNT_MENU_ID\">D110</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Component::Form_Basic_Comp2.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D113</Col><Col id=\"MENU_CAPTION\">CheckBox, Radio, Tab, ImageViewer</Col><Col id=\"PRNT_MENU_ID\">D110</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Component::Form_Basic_Comp3.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D114</Col><Col id=\"MENU_CAPTION\">PopupMenu, GroupBox, ProgressBar, Menu, FileUp/Down</Col><Col id=\"PRNT_MENU_ID\">D110</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Component::Form_Basic_Comp4.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\">[Undefined]</Col><Col id=\"SEQ\">[Undefined]</Col><Col id=\"PRNT_SEQ\">[Undefined]</Col><Col id=\"SPARE_COLUMN1\">[Undefined]</Col><Col id=\"SPARE_COLUMN2\">[Undefined]</Col><Col id=\"SPARE_COLUMN3\">[Undefined]</Col><Col id=\"SPARE_COLUMN4\">[Undefined]</Col><Col id=\"SPARE_COLUMN5\">[Undefined]</Col></Row><Row><Col id=\"MENU_ID\">D115</Col><Col id=\"MENU_CAPTION\">Button</Col><Col id=\"PRNT_MENU_ID\">D110</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Component::Form_Basic_Comp5.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D116</Col><Col id=\"MENU_CAPTION\">Grid</Col><Col id=\"PRNT_MENU_ID\">D110</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Component::Form_Basic_Comp6.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_CAPTION\">사용자 컴포넌트</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PRNT_MENU_ID\">D100</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_ID\">D120</Col></Row><Row><Col id=\"MENU_ID\">D121</Col><Col id=\"MENU_CAPTION\">사용자콤보1 (코드+코드명)</Col><Col id=\"PRNT_MENU_ID\">D120</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Component::Form_User_Comp1.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D122</Col><Col id=\"MENU_CAPTION\">사용자콤보2 (멀티선택)</Col><Col id=\"PRNT_MENU_ID\">D120</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Component::Form_User_Comp2.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D123</Col><Col id=\"MENU_CAPTION\">사용자달력 (기간일력)</Col><Col id=\"PRNT_MENU_ID\">D120</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Component::Form_User_Comp3.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D124</Col><Col id=\"MENU_CAPTION\">사용자달력 (월력)</Col><Col id=\"PRNT_MENU_ID\">D120</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Component::Form_User_Comp4.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D125</Col><Col id=\"MENU_CAPTION\">사용자달력 (기간월력)</Col><Col id=\"PRNT_MENU_ID\">D120</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Component::Form_User_Comp5.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D126</Col><Col id=\"MENU_CAPTION\">사용자그리드</Col><Col id=\"PRNT_MENU_ID\">D120</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Component::Form_User_Comp6.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D200</Col><Col id=\"MENU_CAPTION\">화면패턴</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PRNT_MENU_ID\">D000</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D210</Col><Col id=\"MENU_CAPTION\">화면영역</Col><Col id=\"PRNT_MENU_ID\">D200</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">[Undefined]</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D211</Col><Col id=\"MENU_CAPTION\">화면기본1</Col><Col id=\"PRNT_MENU_ID\">D210</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Default_Temp1.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D212</Col><Col id=\"MENU_CAPTION\">조회영역1</Col><Col id=\"PRNT_MENU_ID\">D210</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Search_Temp1.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D216</Col><Col id=\"MENU_CAPTION\">상세영역1</Col><Col id=\"PRNT_MENU_ID\">D210</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Detail_Temp1.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col></Row><Row><Col id=\"MENU_ID\">D220</Col><Col id=\"MENU_CAPTION\">조회영역 TOP</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PRNT_MENU_ID\">D200</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_CAPTION\">템플릿1 (Top)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_URL\">Template::Form_Search_Top_Temp1.xfdl</Col><Col id=\"MENU_ID\">D221</Col><Col id=\"PRNT_MENU_ID\">D220</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D222</Col><Col id=\"MENU_CAPTION\">템플릿2 (Top)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Search_Top_Temp2.xfdl</Col><Col id=\"PRNT_MENU_ID\">D220</Col><Col id=\"SYS_CD\"/></Row><Row><Col id=\"MENU_ID\">D223</Col><Col id=\"MENU_CAPTION\">템플릿3 (Top)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Search_Top_Temp3.xfdl</Col><Col id=\"PRNT_MENU_ID\">D220</Col><Col id=\"SYS_CD\"/></Row><Row><Col id=\"MENU_ID\">D224</Col><Col id=\"MENU_CAPTION\">템플릿4 (Top)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Search_Top_Temp4.xfdl</Col><Col id=\"PRNT_MENU_ID\">D220</Col><Col id=\"SYS_CD\"/></Row><Row><Col id=\"MENU_ID\">D225</Col><Col id=\"MENU_CAPTION\">템플릿5 (Top)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Search_Top_Temp5.xfdl</Col><Col id=\"PRNT_MENU_ID\">D220</Col><Col id=\"SYS_CD\"/></Row><Row><Col id=\"MENU_ID\">D226</Col><Col id=\"MENU_CAPTION\">템플릿6 (Top)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Search_Top_Temp6.xfdl</Col><Col id=\"PRNT_MENU_ID\">D220</Col><Col id=\"SYS_CD\"/></Row><Row><Col id=\"MENU_ID\">D227</Col><Col id=\"MENU_CAPTION\">템플릿7 (Top)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Search_Top_Temp7.xfdl</Col><Col id=\"PRNT_MENU_ID\">D220</Col><Col id=\"SYS_CD\"/></Row><Row><Col id=\"MENU_ID\">D230</Col><Col id=\"MENU_CAPTION\">조회영역 LEFT</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PRNT_MENU_ID\">D200</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/></Row><Row><Col id=\"MENU_ID\">D231</Col><Col id=\"MENU_CAPTION\">템플릿1 (Left)</Col><Col id=\"PRNT_MENU_ID\">D230</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Search_Left_Temp1.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D232</Col><Col id=\"MENU_CAPTION\">템플릿2 (Left)</Col><Col id=\"PRNT_MENU_ID\">D230</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Search_Left_Temp2.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D233</Col><Col id=\"MENU_CAPTION\">템플릿3 (Left)</Col><Col id=\"PRNT_MENU_ID\">D230</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Search_Left_Temp3.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D234</Col><Col id=\"MENU_CAPTION\">템플릿4 (Left)</Col><Col id=\"PRNT_MENU_ID\">D230</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Search_Left_Temp4.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D235</Col><Col id=\"MENU_CAPTION\">템플릿5 (Left)</Col><Col id=\"PRNT_MENU_ID\">D230</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Search_Left_Temp5.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D236</Col><Col id=\"MENU_CAPTION\">템플릿6 (Left)</Col><Col id=\"PRNT_MENU_ID\">D230</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Search_Left_Temp6.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D237</Col><Col id=\"MENU_CAPTION\">템플릿7 (Left)</Col><Col id=\"PRNT_MENU_ID\">D230</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Template::Form_Search_Left_Temp7.xfdl</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D300</Col><Col id=\"MENU_CAPTION\">개발샘플</Col><Col id=\"PRNT_MENU_ID\">D000</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">[Undefined]</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">D301</Col><Col id=\"MENU_CAPTION\">Popup</Col><Col id=\"PRNT_MENU_ID\">D300</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Sample::Form_Sample_Popup.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D302</Col><Col id=\"MENU_CAPTION\">Validation</Col><Col id=\"PRNT_MENU_ID\">D300</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Sample::Form_Sample_Validation.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D303</Col><Col id=\"MENU_CAPTION\">Messsage</Col><Col id=\"PRNT_MENU_ID\">D300</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Sample::Form_Sample_Message.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D304</Col><Col id=\"MENU_CAPTION\">Link</Col><Col id=\"PRNT_MENU_ID\">D300</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Sample::Form_Sample_Link.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D305</Col><Col id=\"MENU_CAPTION\">Transaction (Devon)</Col><Col id=\"PRNT_MENU_ID\">D300</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Sample::Form_Sample_Transaction_Devon.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D306</Col><Col id=\"MENU_CAPTION\">Transaction (NCD)</Col><Col id=\"PRNT_MENU_ID\">D300</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Sample::Form_Sample_Transaction_NCD.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D307</Col><Col id=\"MENU_CAPTION\">Excel Export</Col><Col id=\"PRNT_MENU_ID\">D300</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Sample::Form_Sample_Excel_Export.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D308</Col><Col id=\"MENU_CAPTION\">Excel Import</Col><Col id=\"PRNT_MENU_ID\">D300</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Sample::Form_Sample_Excel_Import.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D309</Col><Col id=\"MENU_CAPTION\">CRUD</Col><Col id=\"PRNT_MENU_ID\">D300</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Sample::Form_Sample_CRUD.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D310</Col><Col id=\"MENU_CAPTION\">Send Email</Col><Col id=\"PRNT_MENU_ID\">D300</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Sample::Form_Sample_Email.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D311</Col><Col id=\"MENU_CAPTION\">Paging Click</Col><Col id=\"PRNT_MENU_ID\">D300</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Sample::Form_Sample_Paging_Click.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D312</Col><Col id=\"MENU_CAPTION\">Paging Scroll</Col><Col id=\"PRNT_MENU_ID\">D300</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Sample::Form_Sample_Paging_Scroll.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D313</Col><Col id=\"MENU_CAPTION\">File Up/Download</Col><Col id=\"PRNT_MENU_ID\">D300</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Sample::Form_Sample_FileUpDownload.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D314</Col><Col id=\"MENU_CAPTION\">File Upload</Col><Col id=\"PRNT_MENU_ID\">D300</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Sample::Form_Sample_FileUpload.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_ODRG\"/><Col id=\"SEQ\"/><Col id=\"PRNT_SEQ\"/><Col id=\"SPARE_COLUMN1\"/><Col id=\"SPARE_COLUMN2\"/><Col id=\"SPARE_COLUMN3\"/><Col id=\"SPARE_COLUMN4\"/><Col id=\"SPARE_COLUMN5\"/></Row><Row><Col id=\"MENU_ID\">D400</Col><Col id=\"MENU_CAPTION\">3rd Part 연동</Col><Col id=\"PRNT_MENU_ID\">D000</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">[Undefined]</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">D410</Col><Col id=\"MENU_CAPTION\">Daum 우편번호</Col><Col id=\"PRNT_MENU_ID\">D400</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Part3rd::Form_Part3rd_ZipCode.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D420</Col><Col id=\"MENU_CAPTION\">TagFree 쓰기</Col><Col id=\"PRNT_MENU_ID\">D400</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Part3rd::Form_Part3rd_TagFree.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D421</Col><Col id=\"MENU_CAPTION\">TagFree 읽기</Col><Col id=\"PRNT_MENU_ID\">D400</Col><Col id=\"SYS_CD\"/><Col id=\"MENU_DESC\"/><Col id=\"MENU_URL\">Part3rd::Form_Part3rd_TagFree2.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"MSG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TRAN\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MSG_CD\">GRMS00002</Col><Col id=\"MSG_TRAN\">confirm 한글</Col><Col id=\"LANG_CD\">KR</Col></Row><Row><Col id=\"MSG_CD\">GRMS00009</Col><Col id=\"MSG_TRAN\">alert message</Col><Col id=\"LANG_CD\">EN</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_tempTagFree", this);
            obj._setContents("<ColumnInfo><Column id=\"content\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"content\"/></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_language", this);
            obj._setContents("<ColumnInfo><Column id=\"WORD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WORD_TRAN\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WORD_CD\">메뉴관리</Col><Col id=\"WORD_TRAN\">Menu Manage</Col><Col id=\"LANG_CD\">EN</Col></Row><Row><Col id=\"WORD_CD\">사용자 관리</Col><Col id=\"WORD_TRAN\">User Manage</Col><Col id=\"LANG_CD\">EN</Col></Row><Row><Col id=\"WORD_CD\">저장</Col><Col id=\"WORD_TRAN\">Save</Col><Col id=\"LANG_CD\">EN</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TIME_ZONE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FORMAT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM_FORMAT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"NUM_FORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"HR_BIZPLC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_LOGIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_AFFILIATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_AU_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CONST_MENU_CAPTION\" type=\"STRING\" size=\"200\" value=\"aaa\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ODRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRNT_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPARE_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"SPARE_COLUMN5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;


            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("LgeCommon");
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
            mainframe.style.set_background("#ffffffff");
            mainframe.style.set_border("1px solid #3d3d3dff");
            mainframe.style.set_color("#ffffffff");
            mainframe.style.set_titlebarheight("40");
            mainframe.set_titletext("LGE Common");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet_Main", "absolute", null, null, null, null, null, null, this);
            this.addChild(frame0.name, frame0);
            this.frame = frame0;
            frame0.set_separatesize("*,0");
            frame0.set_openstatus("normal");

            
            var frame1 = new ChildFrame("ChildFrame_Login", "absolute", null, null, null, null, null, null, "Frame::Form_Login.xfdl", frame0);
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("Frame::Form_Login.xfdl");
            frame1.set_dragmovetype("none");
            frame1.set_showtitlebar("false");
            frame1.style.set_background("#ffffffff");
            frame1.style.set_border("1px none #9e9d9dff");
            frame1.style.set_align("left middle");
            frame1.style.set_titlebarheight("40");
            var frame2 = new VFrameSet("VFrameSet_Work", "absolute", null, null, null, null, null, null, frame0);
            frame0.addChild(frame2.name, frame2);
            frame2.set_separatesize("56,30,0,*,0");
            frame2.set_showtitleicon("false");
            frame2.set_openstatus("normal");

            
            var frame3 = new ChildFrame("ChildFrame_Top", "absolute", null, null, null, null, null, null, "", frame2);
            frame2.addChild(frame3.name, frame3);
            frame3.set_dragmovetype("none");
            frame3.set_showtitlebar("false");
            frame3.style.set_background("transparent");
            frame3.style.set_border("0px none #929d9dff");
            frame3.style.set_align("left middle");
            frame3.style.set_titlebarheight("40");

            var frame4 = new ChildFrame("ChildFrame_Tab_Top", "absolute", null, null, null, null, null, null, "", frame2);
            frame2.addChild(frame4.name, frame4);
            frame4.set_dragmovetype("none");
            frame4.set_showtitlebar("false");
            frame4.style.set_background("#ffffffff");
            frame4.style.set_border("0px none #9e9d9dff");
            frame4.style.set_align("left middle");
            frame4.style.set_titlebarheight("40");
            var frame5 = new FrameSet("FrameSet_Mdi", "absolute", null, null, null, null, null, null, frame2);
            frame2.addChild(frame5.name, frame5);
            frame5.style.set_background("transparent");
            frame5.style.set_border("0px none #808080ff");

            
            var frame6 = new ChildFrame("ChildFrame_Intro", "absolute", null, null, null, null, null, null, "", frame2);
            frame2.addChild(frame6.name, frame6);
            frame6.set_dragmovetype("none");
            frame6.set_showtitlebar("false");
            frame6.style.set_background("#ffffffff");
            frame6.style.set_border("0px none #9e9d9dff");
            frame6.style.set_align("left middle");
            frame6.style.set_titlebarheight("40");

            var frame7 = new ChildFrame("ChildFrame_Hidden", "absolute", null, null, null, null, null, null, "Frame::Form_Hidden.xfdl", frame2);
            frame2.addChild(frame7.name, frame7);
            frame7.set_formurl("Frame::Form_Hidden.xfdl");
            frame7.set_dragmovetype("none");
            frame7.set_showtitlebar("false");
            frame7.style.set_background("#ffffffff");
            frame7.style.set_border("0px none #9e9d9dff");
            frame7.style.set_align("left middle");
            frame7.style.set_titlebarheight("40");

            var frame8 = new ChildFrame("ChildFrame_Tab_Bottom", "absolute", null, null, null, null, null, null, "", frame2);
            frame2.addChild(frame8.name, frame8);
            frame8.set_showtitlebar("false");
            frame8.set_dragmovetype("none");
            frame8.style.set_background("#ffffffff");
            frame8.style.set_border("0px none #808080ff");
            frame8.style.set_align("left middle");
            frame8.style.set_titlebarheight("40");

        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onloadingglobalvariables", this.application_onloadingglobalvariables, this);
            this.addEventHandler("onerror", this.application_onerror, this);

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler
        this.registerScript("LgeCommon.xadl", function(exports) {
        // Application Variable 선언
        /* ============================================ */
        // Frame  선언
        this.av_mainFrame;
        this.av_VFrameSet_Main;
        this.av_ChildFrame_Login;
        this.av_VFrameSet_Work;
        this.av_ChildFrame_Top;
        this.av_FrameSet_Mdi;
        this.av_ChildFrame_Intro;
        this.av_ChildFrame_Tab;
        this.av_ChildFrame_Hidden;

        // Dataset 선언
        this.av_gds_menu;
        this.av_gds_openMenu;

        // Host Url 선언
        this.av_host_127 = "127.0.0.1";
        this.av_host_Local = "localhost";
        this.av_host_Real = "10.185.221.21";
        this.av_host_Dev = "10.185.221.24";

        // Work Frame Area Size
        this.av_work_Top = "56";
        this.av_work_Tab = "30";
        /* ============================================ */

        // Gloval Variables Loading 후 작업
        this.application_onloadingglobalvariables = function(obj,e)
        {
        	this.av_mainFrame 			= application.mainframe;
        	this.av_VFrameSet_Main 		= this.av_mainFrame.VFrameSet_Main;
        	this.av_ChildFrame_Login	= this.av_VFrameSet_Main.ChildFrame_Login;
        	this.av_VFrameSet_Work 		= this.av_VFrameSet_Main.VFrameSet_Work;
        	this.av_ChildFrame_Top 		= this.av_VFrameSet_Work.ChildFrame_Top;
        	this.av_FrameSet_Mdi 		= this.av_VFrameSet_Work.FrameSet_Mdi;
        	this.av_ChildFrame_Intro 	= this.av_VFrameSet_Work.ChildFrame_Intro;	
        	this.av_ChildFrame_Tab 		= this.av_VFrameSet_Work.ChildFrame_Tab_Top;
        	this.av_ChildFrame_Hidden	= this.av_VFrameSet_Work.ChildFrame_Hidden;
        	this.av_gds_menu			= application.gds_menu;
        	this.av_gds_openMenu		= application.gds_openMenu;

        	// 연계시스템에서 링크시....
        	if (!Base.isEmpty(application.gv_linkmenuid))
        	{
        		this.afn_viewLogin(false);	// onload_1
        		this.afn_viewIntro(false);	// onload_2
        	}
        	
        	// Runtime 은 로컬에서만 사용
        	if (nexacro.Browser != "Runtime") 
        	{ 
        		var sXadl_Url = application.xadl;
        		
        		var sProt = sXadl_Url.substr(0,5); 		
        		
        		if (sProt != "https")
        		{
        			sProt = "http";
        		}
        				
        		// 개발/운영 서버 구분해서 host url 셋팅
        		if (sXadl_Url.indexOf(this.av_host_127) > -1)
        		{ 
        			application.services["host"].set_url(sProt + "://" + this.av_host_127 + ":8080/");			
        		}
        		else if (sXadl_Url.indexOf(this.av_host_Local) > -1)
        		{
        			application.services["host"].set_url(sProt + "://" + this.av_host_Local + ":8080/");
        		}
        		else if (sXadl_Url.indexOf(this.av_host_Real) > -1)   
        		{
        			application.services["host"].set_url(sProt + "://" + this.av_host_Real + "/"); // 운영서버
        		}
        		else if (sXadl_Url.indexOf(this.av_host_Dev) > -1)
        		{
        			application.services["host"].set_url(sProt + "://" + this.av_host_Dev + "/"); // 개발서버
        		}
        	}
        }

        // [onload_1] 로그인 화면  가리기/ 보이기
        this.afn_viewLogin = function(bView)
        {
        	if (bView)
        	{
        		this.av_VFrameSet_Main.set_separatesize("*,0");
        	} 
        	else 
        	{
        		this.av_VFrameSet_Main.set_separatesize("0,*");
        	}
        }

        // [onload_2] 인트로 화면 가리기/ 보이기
        this.afn_viewIntro = function(bView)
        {
        	if (application.gv_openMenuListType == "Top")
        	{
        		if (bView)
        		{
        			this.av_VFrameSet_Work.set_separatesize(this.av_work_Top + "," + this.av_work_Tab + ",0,*,0,0");
        		} 
        		else 
        		{
        			if (!Base.isEmpty(application.gv_linkmenuid))
        			{
        				this.av_VFrameSet_Work.set_separatesize("0,0,*,0,0,0");
        			} 
        			else 
        			{
        				this.av_VFrameSet_Work.set_separatesize(this.av_work_Top + "," + this.av_work_Tab + ",*,0,0,0");
        			}
        		}
        	} 
        	else 
        	{
        		if (bView)
        		{
        			this.av_VFrameSet_Work.set_separatesize(this.av_work_Top + ",0,0,*,0," + this.av_work_Tab);
        		} 
        		else 
        		{
        			if (!Base.isEmpty(application.gv_linkmenuid))
        			{
        				this.av_VFrameSet_Work.set_separatesize("0,0,*,0,0,0");
        			} 
        			else 
        			{
        				this.av_VFrameSet_Work.set_separatesize(this.av_work_Top + ",0,*,0,0," + this.av_work_Tab);
        			}
        		}
        	}
        }

        // [pass_1] 로그인 확인후 Frame Setting
        this.afn_loginPass = function()
        {
        	if (application.gv_openMenuListType == "Top")
        	{
        		application.av_ChildFrame_Tab = application.av_VFrameSet_Work.ChildFrame_Tab_Top;
        	} 
        	else 
        	{
        		application.av_ChildFrame_Tab = application.av_VFrameSet_Work.ChildFrame_Tab_Bottom;
        	}

        	application.gds_menu.appendData(application.gds_devMenu);

        	this.afn_setFrameUrl();		// login_1
        	this.afn_viewLogin(false);	// onload_1
        	this.afn_viewIntro(true);	// onload_2
        	
        	if (!Base.isEmpty(application.gv_linkmenuid))
        	{
        		// ^ 변수 구분값
        		// : key, value 구분값
        		var sParamters = application.gv_paramters;
        		var aParam = sParamters.split("^");
        		var sParam = {};
        		
        		for (var i=0; i<aParam.length; i++) 
        		{
        			aResult = aParam[i].split(":");
        			eval("sParam." + aResult[0] + " = '" + aResult[1] + "';");
        		}	
        		application.afn_menuOpen(application.gv_linkmenuid, sParam);	//login_2
        	}
        }

        // [login_1] 프레임 주소 비우기
        this.afn_setFrameUrl = function ()
        {
        	this.av_ChildFrame_Top.set_formurl("");
        	this.av_ChildFrame_Tab.set_formurl("");
        	this.av_ChildFrame_Intro.set_formurl("");

        	var sTopFrameUrl = "Frame::Form_TopFrame_" + application.gv_menuType + ".xfdl";

        	this.av_ChildFrame_Top.set_formurl(sTopFrameUrl);
        	this.av_ChildFrame_Tab.set_formurl("Frame::Form_TabFrame.xfdl");
        	
        	if (application.gv_menuType == "IntroMenu")
        	{
        		this.av_ChildFrame_Intro.set_formurl("Frame::Form_IntroFrame_Menu.xfdl");	
        	} 
        	else 
        	{
        		this.av_ChildFrame_Intro.set_formurl("Frame::Form_IntroFrame.xfdl");	
        	}
        }

        // [login_2] Menu Open
        this.afn_menuOpen = function(sMenuId,oParam)
        {
        	this.av_ChildFrame_Hidden.form.fn_menuOpen(sMenuId, oParam);
        }

        // Index로 화면 닫기
        this.afn_tabPageClose = function(nIndex)
        {
        	this.av_ChildFrame_Hidden.form.fn_tabPageClose(nIndex);
        }

        // 메뉴코드로 화면닫기
        this.afn_menuClose = function(sMenuId)
        {
        	this.av_ChildFrame_Hidden.form.fn_menuClose(sMenuId);
        }

        // 로그아웃 처리
        this.afn_logOut = function() {

        	this.av_VFrameSet_Main.set_separatesize("*,0");
        	
        	this.av_ChildFrame_Top.set_formurl("");
        	this.av_ChildFrame_Tab.set_formurl("");
        	this.av_ChildFrame_Intro.set_formurl("");
        	this.av_ChildFrame_Login.set_formurl("");

        	var sWin;

        	for (var i=0; i<application.gds_openMenu.rowcount; i++) 
        	{
        		sWin = application.gds_openMenu.getColumn(i, "WIN_ID");
        		this.av_FrameSet_Mdi.removeChild(sWin);
        	}

        	application.gds_menu.deleteAll();
        	application.gds_openMenu.deleteAll();
        	application.gds_userInfo.deleteAll();

        	application.afn_viewIntro(true);	// onload_2
        		
        	this.av_ChildFrame_Login.set_formurl("Frame::Form_Login.xfdl");
        }

        // 오류처리
        this.application_onerror = function(obj,e)
        {
        	// 통신장애
        	if(e.statuscode == 12029)
        	{
        		this.alert(e.errormsg);
        		return false;
        	}
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
this.loadCss("css::Paging.css");
this.loadCss("css::TabFrame.css");
this.loadCss("css::WorkFrame.css");
this.loadCss("css::TopFrame.css");

        this.loadIncludeScript("LgeCommon.xadl", true);
    };
}
)();
