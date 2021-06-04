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
                this.set_name("grid_ck_test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,767,453);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "3.13%", "80", null, "344", "1.96%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"expr:comp.parent.ck_func(currow)\"/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "7.04%", "28", null, "22", "76.14%", null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 453, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("grid_ck_test");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("grid_ck_test.xfdl", function(exports) {
        this.ck_arr = [];

        this.ck_func = function(nRow)
        {	
        	return this.ck_arr[nRow] == null ? 0 :  this.ck_arr[nRow];
        }

        
        this.Grid00_oncellclick = function(obj,e)
        {
        	if(e.cell == 0 )
        	{
        		this.ck_arr[e.row] = this.ck_arr[e.row] == null ? 1 : this.ck_arr[e.row]^1;
        		this.Grid00.redraw();
        	}
        	
        	
        }

        this.Grid00_onheadclick = function(obj,e)
        {
        	if(e.cell == 0 )
        	{
        		var ck = this.Grid00.getCellProperty('head', 0 , 'text')^1;
        		for(var i = 0 ; i < this.Dataset00.rowcount ; i++)
        		{
        			this.ck_arr[i] = ck;
        		}
        		this.Grid00.setCellProperty('head', 0 , 'text', ck )
        		this.Grid00.redraw();
        	}
        }

        this.Button00_onclick = function(obj,e)
        {
        	for(var i = 0 ; i < this.ck_arr.length ; i++)
        	{
        		if(this.ck_arr[i])
        		{
        			trace("선택된 Row : " + i); 
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.Grid00.addEventHandler("onheadclick", this.Grid00_onheadclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("grid_ck_test.xfdl", true);

       
    };
}
)();
