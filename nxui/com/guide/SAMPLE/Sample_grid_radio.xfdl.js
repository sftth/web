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
                this.set_name("Sample_grid_radio");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">東京都</Col><Col id=\"Column1\">AAA</Col><Col id=\"Column2\">100</Col><Col id=\"Column3\">10</Col><Col id=\"Column4\">1</Col></Row><Row><Col id=\"Column0\">神奈川県</Col><Col id=\"Column1\">AAA</Col><Col id=\"Column2\">110</Col><Col id=\"Column3\">11</Col><Col id=\"Column4\">0</Col></Row><Row><Col id=\"Column0\">埼玉県</Col><Col id=\"Column1\">BBB</Col><Col id=\"Column2\">200</Col><Col id=\"Column3\">20</Col><Col id=\"Column4\">0</Col></Row><Row><Col id=\"Column0\">千葉県</Col><Col id=\"Column1\">CCC</Col><Col id=\"Column2\">210</Col><Col id=\"Column3\">21</Col><Col id=\"Column4\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">0</Col><Col id=\"Column5\">1</Col><Col id=\"Column4\">案件１</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column2\">0</Col><Col id=\"Column5\">2</Col><Col id=\"Column4\">案件２</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">案件３</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">1</Col><Col id=\"Column5\">4</Col><Col id=\"Column4\">案件４</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "1.07%", "40", null, "126", "33.89%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_selecttype("cell");
            obj.style.set_accessibility("enable all '그리드' '' ''");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"108\" band=\"left\"/><Column size=\"98\"/><Column size=\"104\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"accessibility: ;controlaccessibility:enable all '전체선택' '' '' ;\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"controlaccessibility: ;\" text=\"bind:Column4\"/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:Column2\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16", "13", "652", "25", null, null, this);
            obj.set_taborder("0");
            obj.set_text("１．GridのCheckboxを使ってRadioを実装－Row基準");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "16", "184", "652", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("２．GridのCheckboxを使ってRadioを実装－Column基準");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "1.07%", "211", null, "132", "33.89%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"123\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"タイトル\"/><Cell col=\"2\" text=\"合意\"/><Cell col=\"3\" text=\"承認\"/><Cell col=\"4\" text=\"却下\"/><Cell col=\"5\" text=\"保留\"/></Band><Band id=\"body\"><Cell text=\"bind:Column5\"/><Cell col=\"1\" text=\"bind:Column4\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column1\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column2\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "1.07%", "395", null, "126", "33.98%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset00");
            obj.set_selecttype("cell");
            obj.style.set_accessibility("enable all '그리드' '' ''");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"108\" band=\"left\"/><Column size=\"98\"/><Column size=\"104\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"accessibility: ;controlaccessibility:enable all '전체선택' '' '' ;\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/></Band><Band id=\"body\"><Cell displaytype=\"image\" edittype=\"none\" style=\"backgroundimage:EXPR(Column4 == 1?'Image::Radio_button_on.png':'Image::Radio_button_off.png');\" text=\"bind:Column4\"/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:Column2\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "16", "368", "652", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("３．Cell.displaytypeをimageにしてRadioを実装");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample_grid_radio.xfdl", function(exports) {

        this.Grid00_oncellclick = function(obj,e)
        {
        	if (e.cell == 0)
        	{
        		this.Dataset00.set_enableevent(false);
        		for(var i=0; i<this.Dataset00.rowcount; i++)
        		{
        			if (e.row == i)
        			{
        				this.Dataset00.setColumn(e.row,"Column4","1");
        			}else{
        				this.Dataset00.setColumn(i,"Column4","0");
        			}	
        		}
        		this.Dataset00.set_enableevent(true);
        	}
        }

        this.Grid01_onlbuttonup = function(obj,e)
        {
        	var ColIdx = e.col;
        	for(var i = 0; i < this.Grid01.getCellCount("head"); i++)
        	{
        		this.Dataset01.setColumn(e.row, i, 0);
        	}
        	this.Dataset01.setColumn(e.row, ColIdx, 1);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.Grid01.addEventHandler("onlbuttonup", this.Grid01_onlbuttonup, this);
            this.Grid02.addEventHandler("oncellclick", this.Grid00_oncellclick, this);

        };

        this.loadIncludeScript("Sample_grid_radio.xfdl", true);

       
    };
}
)();
