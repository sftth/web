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
                this.set_name("Temp_TreeGrid");
                this.set_classname("Temp_TreeGrid");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"state\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"level\">0</Col><Col id=\"state\">0</Col><Col id=\"Column3\">고객지원</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"level\">1</Col><Col id=\"state\">1</Col><Col id=\"Column3\">강감</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"level\">1</Col><Col id=\"state\">1</Col><Col id=\"Column3\">강신</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"chk\">0</Col><Col id=\"state\">1</Col><Col id=\"Column3\">dd</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"chk\">0</Col><Col id=\"state\">1</Col><Col id=\"Column3\">dd</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"level\">0</Col><Col id=\"state\">0</Col><Col id=\"Column3\">기술지원</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"level\">1</Col><Col id=\"state\">1</Col><Col id=\"Column3\">오</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"level\">1</Col><Col id=\"state\">1</Col><Col id=\"Column3\">우</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"level\">1</Col><Col id=\"state\">1</Col><Col id=\"Column3\">가가ㅏㄱ</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"level\">0</Col><Col id=\"state\">0</Col><Col id=\"Column3\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "2.83%", "22", null, "386", "57.42%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_treeusebutton("use");
            obj.set_treeuseexpandkey("false");
            obj.set_treeuseline("true");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"258\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:Column3\" treelevel=\"bind:level\" treecheck=\"bind:chk\" treestate=\"bind:state\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Temp_TreeGrid");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Z201507_2015070020-Temp_TreeGrid.xfdl", function(exports) {

        
        this.Dataset00_oncolumnchanged = function(obj,e)
        {
        	this.gfn_childCheck(obj,e, "chk", "level");
        }

        
        this.gfn_childCheck = function (obj,e,sCheckColumn,sLevelColumn) 
        {
        	obj.set_enableevent(false);

        	if(e.col==0){
        	
        		var nstate = obj.getColumn(e.row,sCheckColumn);
        		var nlevel = obj.getColumn(e.row,sLevelColumn);

        		for(var i=e.row+1;i<obj.getRowCount();i++)
        		{
        			if(obj.getColumn(i,sLevelColumn)!=nlevel && nlevel<obj.getColumn(i,sLevelColumn))
        			{
        				obj.setColumn(i, sCheckColumn, nstate);
        			} else {
        				break;
        			}
        		}
        	}
        	obj.set_enableevent(true);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Dataset00.addEventHandler("oncolumnchanged", this.Dataset00_oncolumnchanged, this);
            this.Dataset00.addEventHandler("onload", this.Dataset00_onload, this);
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);

        };

        this.loadIncludeScript("Z201507_2015070020-Temp_TreeGrid.xfdl", true);

       
    };
}
)();
