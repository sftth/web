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
                this.set_name("treeCheck");
                this.set_classname("treeCheck");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_devMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">D000</Col><Col id=\"MENU_CAPTION\">가이드</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"CHK\"/></Row><Row><Col id=\"MENU_ID\">D001</Col><Col id=\"MENU_CAPTION\">개발가이드</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">D002</Col><Col id=\"MENU_CAPTION\">개발기준</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D004</Col><Col id=\"MENU_CAPTION\">그리드 기능</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D003</Col><Col id=\"MENU_CAPTION\">사용자콤보1 (코드+코드명)</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D008</Col><Col id=\"MENU_CAPTION\">사용자콤보2 (멀티선택)</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D005</Col><Col id=\"MENU_CAPTION\">사용자달력 (기간일력)</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D009</Col><Col id=\"MENU_CAPTION\">사용자달력 (월력)</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D010</Col><Col id=\"MENU_CAPTION\">사용자달력 (기간월력)</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D006</Col><Col id=\"MENU_CAPTION\">엑셀 Export 기능</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D007</Col><Col id=\"MENU_CAPTION\">엑셀 Import 기능</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D011</Col><Col id=\"MENU_CAPTION\">메세지 처리 </Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D012</Col><Col id=\"MENU_CAPTION\">transaction 가이드</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D013</Col><Col id=\"MENU_CAPTION\">메뉴링크</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D014</Col><Col id=\"MENU_CAPTION\">팝업 가이드</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D015</Col><Col id=\"MENU_CAPTION\">메시지관리-샘플</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D500</Col><Col id=\"MENU_CAPTION\">기본 컴포넌트가이드</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">D501</Col><Col id=\"MENU_CAPTION\">Static, Edit, MaskEdit</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D502</Col><Col id=\"MENU_CAPTION\">Combo, ListBox, Spin</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D503</Col><Col id=\"MENU_CAPTION\">CheckBox, Radio, Tab, ImageViewer</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D504</Col><Col id=\"MENU_CAPTION\">Grid</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D505</Col><Col id=\"MENU_CAPTION\">Grid2</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D506</Col><Col id=\"MENU_CAPTION\">Button</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D507</Col><Col id=\"MENU_CAPTION\">PopupMenu, GroupBox, ProgressBar, Menu....</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D508</Col><Col id=\"MENU_CAPTION\">조회영역</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D509</Col><Col id=\"MENU_CAPTION\">FreeForm</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D510</Col><Col id=\"MENU_CAPTION\">Alert, Confirm, Error(사용금지)</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D700</Col><Col id=\"MENU_CAPTION\">템플릿 가이드</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_CAPTION\">템플릿1</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">D701</Col></Row><Row><Col id=\"MENU_ID\">D702</Col><Col id=\"MENU_CAPTION\">템플릿2</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D703</Col><Col id=\"MENU_CAPTION\">템플릿3</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D704</Col><Col id=\"MENU_CAPTION\">템플릿4</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D705</Col><Col id=\"MENU_CAPTION\">템플릿5</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D706</Col><Col id=\"MENU_CAPTION\">템플릿6</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">D707</Col><Col id=\"MENU_CAPTION\">템플릿7</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">M010000</Col><Col id=\"MENU_CAPTION\">XRF</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">M010100</Col><Col id=\"MENU_CAPTION\">계획수립</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">M010101</Col><Col id=\"MENU_CAPTION\">연간검사계획</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">M010102</Col><Col id=\"MENU_CAPTION\">월간검사계획</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">M010200</Col><Col id=\"MENU_CAPTION\">정밀검사</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">M010201</Col><Col id=\"MENU_CAPTION\">정밀검사요청목록</Col><Col id=\"MENU_LEVEL\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "17", "16", null, "477", "768", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_devMenu");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"421\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"MENU_CAPTION\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:MENU_CAPTION\" treelevel=\"bind:MENU_LEVEL\" treecheck=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("treeCheck");
            		p.set_titletext("New Form");

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
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);

        };

        this.loadIncludeScript("treeCheck.xfdl", true);

       
    };
}
)();
