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
                this.set_name("COMPONENT_DESC");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,498);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">ㅁㅁ</Col><Col id=\"Column2\">AA</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">ㅍㅍ</Col><Col id=\"Column2\">bb</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCategory", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">M</Col><Col id=\"VALUE\">남자</Col></Row><Row><Col id=\"CODE\">F</Col><Col id=\"VALUE\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_NM\"/><Col id=\"CD_TYPE\">M</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize

            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 498, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("COMPONENT_DESC");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("COMPONENT_DESC.xfdl", "lib_xcommon::Comm.xjs");
        this.registerScript("COMPONENT_DESC.xfdl", function(exports) {

        if (this.executeIncludeScript) { this.executeIncludeScript("lib_xcommon::Comm.xjs", null, exports); }	//include "lib_xcommon::Comm.xjs";

        

        this.COMPONENT_DESC_onload = function(obj,e)
        {
        	LGE.Grid.setGrid(obj, this.grdList, "test", true);
        }

        

        this.grdList_onheadclick = function(obj,e)
        {
        	this.gfn_gridSort(obj, e);
        }

        this.grdList_onrbuttonup = function(obj,e)
        {
        	//사용할메뉴설정 : FILTER, SORT, HIDE, FREEZE, CONFIG (default : all)
        	var oOption = ["SORT", "HIDE", "FREEZE", "CONFIG"];
        	this.gfn_openGridMenu(obj, e, oOption);		
        }

        this.Grid00_onheadclick = function(obj,e)
        {
        	this.gfn_gridSort(obj, e);	
        }

        this.Grid00_onrbuttonup = function(obj,e)
        {
        	//사용할메뉴설정 : FILTER, SORT, HIDE, FREEZE, CONFIG (default : all)
        	var oOption = ["SORT", "HIDE", "FREEZE", "CONFIG"];
        	this.gfn_openGridMenu(obj, e, oOption);	
        }

        this.div_result_grdList_onrbuttonup = function(obj,e)
        {
        	//사용할메뉴설정 : FILTER, SORT, HIDE, FREEZE, CONFIG (default : all)
        	var oOption = ["SORT", "HIDE", "FREEZE", "CONFIG"];
        	this.gfn_openGridMenu(obj, e, oOption);		
        }

        

        this.Button00_onclick = function(obj,e)
        {
        	alert(this.cbCategory.getValue());
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.COMPONENT_DESC_onload, this);

        };

        this.loadIncludeScript("COMPONENT_DESC.xfdl", true);

       
    };
}
)();
