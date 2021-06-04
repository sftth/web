﻿(function()
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
                this.set_name("aaaa");
                this.set_classname("aaaa");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,890,406);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column0\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "2.81%", "27", null, "365", "60%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "6.69%", "23", null, "303", "12.77%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "49.55%", "27", null, "365", "13.26%", null, this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "6.69%", "23", null, "303", "12.77%", null, this.Div01);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "92.13%", "22", null, "21", "5.51%", null, this);
            obj.set_taborder("2");
            obj.set_text("+");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 365, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 365, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div00");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 890, 406, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("aaaa");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Z201510_2015100104-260104_test.xfdl", function(exports) {

        this.Div00_Grid00_ondrag = function(obj,e)
        {
        	e.dragdata = e.row;
        	e.dragdata = "aaa";
        	return true;
        }

        this.aaaa_ondragmove = function(obj,e)
        {
        	this.Button00.move(e.canvasX +20 , e.clientY+20);
        }

        this.Div01_Grid00_ondrop = function(obj,e)
        {
        	alert(e.dragdata);
        // 	this.Button00.move(0 , 0);
        // 	var nRow = this.Dataset01.addRow();
        // 	this.Dataset01.copyRow(nRow, this.Dataset00, e.dragdata)
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondragmove", this.aaaa_ondragmove, this);
            this.Div00.Grid00.addEventHandler("ondrag", this.Div00_Grid00_ondrag, this);
            this.Div01.Grid00.addEventHandler("ondrop", this.Div01_Grid00_ondrop, this);

        };

        this.loadIncludeScript("Z201510_2015100104-260104_test.xfdl", true);

       
    };
}
)();
