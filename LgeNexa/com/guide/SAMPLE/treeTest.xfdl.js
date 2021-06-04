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
                this.set_name("treeTest");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,498);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"TREE_LEVEL\" type=\"string\" size=\"256\"/><Column id=\"CAPTION1\" type=\"string\" size=\"256\"/><Column id=\"CAPTION2\" type=\"string\" size=\"256\"/><Column id=\"CAPTION3\" type=\"string\" size=\"256\"/><Column id=\"CAPTION4\" type=\"string\" size=\"256\"/><Column id=\"CAPTION5\" type=\"string\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TREE_LEVEL\">1</Col><Col id=\"CAPTION1\">AAAA</Col><Col id=\"CAPTION2\">BBBB</Col><Col id=\"CAPTION3\">CCCC</Col><Col id=\"CAPTION4\">DDDD</Col><Col id=\"CAPTION5\">EEEE</Col></Row><Row><Col id=\"TREE_LEVEL\">2</Col><Col id=\"CAPTION1\">AAAA</Col><Col id=\"CAPTION2\">BBBB</Col><Col id=\"CAPTION3\">CCCC</Col><Col id=\"CAPTION4\">DDDD</Col><Col id=\"CAPTION5\">EEEE</Col></Row><Row><Col id=\"TREE_LEVEL\">3</Col><Col id=\"CAPTION1\">AAAA</Col><Col id=\"CAPTION2\">BBBB</Col><Col id=\"CAPTION3\">CCCC</Col><Col id=\"CAPTION4\">DDDD</Col><Col id=\"CAPTION5\">EEEE</Col></Row><Row><Col id=\"TREE_LEVEL\">4</Col><Col id=\"CAPTION1\">AAAA</Col><Col id=\"CAPTION2\">BBBB</Col><Col id=\"CAPTION3\">CCCC</Col><Col id=\"CAPTION4\">DDDD</Col><Col id=\"CAPTION5\">EEEE</Col></Row><Row><Col id=\"TREE_LEVEL\">1</Col><Col id=\"CAPTION1\">AAAA</Col><Col id=\"CAPTION2\">BBBB</Col><Col id=\"CAPTION3\">CCCC</Col><Col id=\"CAPTION4\">DDDD</Col><Col id=\"CAPTION5\">EEEE</Col></Row><Row><Col id=\"TREE_LEVEL\">2</Col><Col id=\"CAPTION1\">AAAA</Col><Col id=\"CAPTION2\">BBBB</Col><Col id=\"CAPTION3\">CCCC</Col><Col id=\"CAPTION4\">DDDD</Col><Col id=\"CAPTION5\">EEEE</Col></Row><Row><Col id=\"TREE_LEVEL\">3</Col><Col id=\"CAPTION1\">AAAA</Col><Col id=\"CAPTION2\">BBBB</Col><Col id=\"CAPTION3\">CCCC</Col><Col id=\"CAPTION4\">DDDD</Col><Col id=\"CAPTION5\">EEEE</Col></Row><Row><Col id=\"TREE_LEVEL\">4</Col><Col id=\"CAPTION1\">AAAA</Col><Col id=\"CAPTION2\">BBBB</Col><Col id=\"CAPTION3\">CCCC</Col><Col id=\"CAPTION4\">DDDD</Col><Col id=\"CAPTION5\">EEEE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_result", "absolute", "3", "8", "1061", null, null, "14", this);
            obj.set_taborder("0");
            obj.set_selecttype("cell");
            obj.set_cellsizingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("true");
            obj.set_treeinitstatus("expand,null");
            obj.set_binddataset("Dataset00");
            obj.style.set_treelinetype("0 dotted #929aa5ff");
            obj.set_treeuseline("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"24\" band=\"left\"/><Column size=\"259\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"115\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"65\"/><Column size=\"59\"/><Column size=\"55\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"69\"/><Column size=\"89\"/><Column size=\"83\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"사업부명\" wordwrap=\"english\"/><Cell col=\"2\" text=\"사용여부\" wordwrap=\"english\"/><Cell col=\"3\" text=\"사업부 레벨명\" wordwrap=\"english\"/><Cell col=\"4\" text=\"사업부 레벨\" wordwrap=\"english\"/><Cell col=\"5\" text=\"상위 사업부\" wordwrap=\"english\"/><Cell col=\"6\" text=\"본부\" wordwrap=\"english\"/><Cell col=\"7\" text=\"사업 담당\" wordwrap=\"english\"/><Cell col=\"8\" text=\"사업부그룹여부\" wordwrap=\"english\"/><Cell col=\"9\" text=\"최종보고대상여부\" wordwrap=\"english\" tooltiptext=\"200001\"/><Cell col=\"10\" text=\"개별결산여부\" wordwrap=\"english\" tooltiptext=\"200002\"/><Cell col=\"11\" text=\"연결결산여부\" wordwrap=\"english\" tooltiptext=\"200003\"/><Cell col=\"12\" text=\"정렬순서\" wordwrap=\"english\"/><Cell col=\"13\" text=\"B2B 전용여부\" wordwrap=\"english\"/><Cell col=\"14\" text=\"구분결산배부대상여부\" wordwrap=\"english\"/><Cell col=\"15\" text=\"B2B 유형\" wordwrap=\"english\"/><Cell col=\"16\" text=\"조정 사업부\" wordwrap=\"english\" tooltiptext=\"200004\"/><Cell col=\"17\" text=\"소스 시스템\" wordwrap=\"english\" tooltiptext=\"200005\"/><Cell col=\"18\" text=\"최종 수정자\" wordwrap=\"english\"/><Cell col=\"19\" text=\"최종 수정 일시\" wordwrap=\"english\"/><Cell col=\"20\" text=\"최초 등록자\" wordwrap=\"english\"/><Cell col=\"21\" text=\"최초 등록 일시\"/></Band><Band id=\"body\"><Cell cssclass=\"padding7\" text=\"expr:currow\"/><Cell col=\"1\" displaytype=\"tree\" edittype=\"tree\" style=\"align:left;background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:CAPTION1\" treestartlevel=\"1\" treelevel=\"bind:TREE_LEVEL\"/><Cell col=\"2\" style=\"background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:CAPTION2\"/><Cell col=\"3\" style=\"background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:CAPTION3\"/><Cell col=\"4\" style=\"align:right;background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:CAPTION4\"/><Cell col=\"5\" style=\"align:left;background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:CAPTION5\"/><Cell col=\"6\" style=\"align:left;background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:CMPNY_NAME\"/><Cell col=\"7\" style=\"align:left;background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:BIZDIV_NAME\"/><Cell col=\"8\" style=\"background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:SUMM_FLAG\"/><Cell col=\"9\" style=\"background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:LAST_RPT_UNIT_FLAG\"/><Cell col=\"10\" style=\"background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:ENTT_CLOSING_FLAG\"/><Cell col=\"11\" style=\"background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:CLOSING_DIV_FLAG\"/><Cell col=\"12\" style=\"align:right;background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:SORT_ORDER\"/><Cell col=\"13\" style=\"background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:B2B_ONLY_FLAG\"/><Cell col=\"14\" style=\"background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:ALLOCATION_FLAG\"/><Cell col=\"15\" style=\"background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:B2B_DIV_TYPE\"/><Cell col=\"16\" style=\"background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:ADJ_DIV_CD\"/><Cell col=\"17\" style=\"background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:SRC_SYS_CD\"/><Cell col=\"18\" style=\"background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:LAST_UPD_USR_ID\"/><Cell col=\"19\" style=\"background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:LAST_UPD_DATE\"/><Cell col=\"20\" style=\"background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:CREATION_USR_ID\"/><Cell col=\"21\" style=\"background:EXPR((USE_FLAG=='N') ? '#efefef' : '');background2:EXPR((USE_FLAG=='N') ? '#efefef' : '');font:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');selectfont:EXPR((DIV_LVL_NUM==1) ? 'bold antialias 9 Malgun Gothic' : '');\" cssclass=\"padding7\" text=\"bind:CREATION_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "87.58%", "14", null, "50", "2.61%", null, this);
            obj.set_taborder("1");
            obj.set_text("3레벨 이상 접기");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 498, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("treeTest");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("treeTest.xfdl", function(exports) {

        
        this.fn_treeOpen = function()
        {
        	var nCnt = this.Dataset00.rowcount;
        	var nLevel;
        	

        		this.grd_result.set_enableredraw(false);
        	
        	for(var i=nCnt; i>=0; i--)
        	{
         		nLevel = parseInt(this.Dataset00.getColumn(i,"TREE_LEVEL"));
        		if(nLevel > 2)
        		{
        			this.grd_result.setTreeStatus(this.grd_result.getTreeRow(i),false);
        		}
        	}
        	
        	this.grd_result.set_enableredraw(true);
        }

        
        this.Button00_onclick = function(obj,e)
        {
        	this.fn_treeOpen();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.treeTest_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("treeTest.xfdl", true);

       
    };
}
)();
