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
                this.set_name("Temp_ExcelExportImport_Client");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column3\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column4\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">asd</Col><Col id=\"Column1\">50.5</Col><Col id=\"Column2\">50.5</Col><Col id=\"Column3\">1212312</Col><Col id=\"Column4\"/></Row><Row><Col id=\"Column0\">f</Col><Col id=\"Column1\">030</Col><Col id=\"Column2\">030</Col><Col id=\"Column3\">123123</Col><Col id=\"Column4\"/></Row><Row><Col id=\"Column3\">123</Col><Col id=\"Column2\">312</Col><Col id=\"Column1\">dfa</Col><Col id=\"Column0\">sdf</Col><Col id=\"Column4\"/></Row><Row><Col id=\"Column0\">asdf</Col><Col id=\"Column1\">fas</Col><Col id=\"Column2\">234</Col><Col id=\"Column3\">23123123123</Col></Row><Row><Col id=\"Column0\">asd</Col><Col id=\"Column1\">dfas</Col><Col id=\"Column2\">22</Col><Col id=\"Column3\">1231</Col></Row><Row><Col id=\"Column0\">asdf</Col><Col id=\"Column1\">df</Col><Col id=\"Column2\">21.2135</Col><Col id=\"Column3\">1231231233</Col></Row><Row><Col id=\"Column0\">asd</Col><Col id=\"Column1\">fas</Col><Col id=\"Column2\">5212</Col><Col id=\"Column3\">123123123</Col></Row><Row><Col id=\"Column0\">f</Col><Col id=\"Column1\">asdf</Col><Col id=\"Column2\">23</Col><Col id=\"Column3\">123123123</Col></Row><Row><Col id=\"Column3\">123</Col><Col id=\"Column2\">234</Col><Col id=\"Column1\">dfa</Col><Col id=\"Column0\">sdf</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "35", "14", "107", "45", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Export");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "44.82%", "14", null, "45", "44.24%", null, this);
            obj.set_taborder("1");
            obj.set_text("Import");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "40", "88", "461", "240", null, null, this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" style=\"line:0 solid crimson crimson;\" text=\"Column3\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"line:1 solid black ;\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:Column2\" mask=\"#,##0.####\"/><Cell col=\"3\" displaytype=\"number\" style=\"line: ;\" text=\"bind:Column3\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"expr:&quot;=SUM(C&quot;+(currow+2)+&quot;:D&quot;+(currow+2)+&quot;)&quot;\"/></Band><Band id=\"summary\"><Cell displaytype=\"number\" text=\"0\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format><Format id=\"format_copy\"><Columns><Column size=\"151\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"format copy\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" style=\"line:0 solid crimson crimson;\" text=\"Column3\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:Column2\" mask=\"#,##0.####\"/><Cell col=\"3\" displaytype=\"number\" style=\"line: ;\" text=\"bind:Column3\"/></Band><Band id=\"summary\"><Cell displaytype=\"number\" text=\"0\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "50.98%", "88", null, "242", "2.34%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"Column5\"/><Cell col=\"6\" disptype=\"normal\" text=\"Column6\"/><Cell col=\"7\" disptype=\"normal\" text=\"Column7\"/><Cell col=\"8\" disptype=\"normal\" text=\"Column8\"/><Cell col=\"9\" disptype=\"normal\" text=\"Column9\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:Column5\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:Column6\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:Column7\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:Column8\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "3.91%", "375", null, "227", "51.07%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "15.82%", "14", null, "45", "72.95%", null, this);
            obj.set_taborder("5");
            obj.set_text("Export Format");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Temp_ExcelImport_Client");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Z201701_2017010236-Temp_ExcelExportImport_Client.xfdl", function(exports) {
        this.Button01_onclick = function(obj,e)
        {
        	//var url = "http://172.10.13.122:8080/nexacroXeni/XImport";
        	var url = "http://localhost:8080/XImport";
        	//this.Dataset00.clear();
        	this.Dataset00.clearData()
        	
        	if(this.Import00) {

        		//var objDelete = this.removeChild("Import00");
        		//trace(objDelete);
        		this.importObj.destroy();
        		this.importObj = null;
        	}

        	this.importObj = new nexacro.ExcelImportObject("Import00",this);
        	this.addChild("Import00",this.importObj);
        	this.importObj.set_importtype(nexacro.ImportTypes.EXCEL2007);
        	this.importObj.addEventHandler("onsuccess", this.Import00_onsuccess, this);
        	this.importObj.addEventHandler("onerror", this.Import00_onerror, this);	

        	this.importObj.set_importurl(url);
        //	this.importObj.importData("local", "[command=getsheetdata;output=outDs;body=Sheet1!A2;]", "[Dataset00=outDs]");
        //	this.importObj.importData("local", "[command=getsheetdata;output=outDs;Head=Sheet1!A1:XX1;body=Sheet1!A2;]", "[Dataset00=outDs]"); // head body
        //	this.importObj.importData("local", "[command=getsheetdata;output=outDs;body=Sheet1!A2;]", "[Dataset00=outDs]"); // body
        //	this.importObj.importData("local", "Sheet1!A2", "Dataset00","domain='tobe.com'");
        	this.importObj.importData("local", "Sheet1!A2", "Dataset00");
        }

        //onsuccess Event
        this.Import00_onsuccess = function(obj,e)
        {
        	this.TextArea00.set_value(this.TextArea00.value + "\n=========== onsuccess event start============");
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.eventid: " + e.eventid);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromobject: " + e.fromobject);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromreferenceobject: " + e.fromreferenceobject);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.url: " +  e.url);
        	
        	trace(this.Dataset00.saveXML());
        	
        	//this.Grid00.createFormat();
        	//this.Grid01.createFormat();
        	//this.Grid02.createFormat();
        	
        	
        }

        //onerror Event
        this.Import00_onerror = function(obj,e)
        {
        	this.TextArea00.set_value(this.TextArea00.value + "\n=========== onerror event start============");
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.eventid: " + e.eventid);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromobject: " + e.fromobject);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromreferenceobject: " + e.fromreferenceobject);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.errorcode: " +  e.errorcode);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.errormsg: " + e.errormsg);
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();

        	this.exportObj.addEventHandler("onprogress", this.Export00_onprogress, this);
        	this.exportObj.addEventHandler("onsuccess", this.Export00_onsuccess, this);
        	this.exportObj.addEventHandler("onerror", this.Export00_onerror, this);
        	
        	
        	
        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	//this.exportObj.set_exportactivemode('active');
        	this.exportObj.set_exportfilename("2015125_한글파일");	
        	//this.exportObj.set_exportfilename("한글 파일");	
        	this.exportObj.set_exporturl("http://localhost:8080/XExportImport");
        	//this.exportObj.set_exporturl("http://172.10.13.122:9090/nexacroXeni/XExportImport");
        	
        	this.exportObj.set_exportmessageprocess("%d번째 [ %d / %d ]");
        	this.exportObj.set_exportuitype("exportprogress");
        	this.exportObj.set_exporteventtype("itemrecord");
        	
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1");
        	//this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1","","","","","","","","cellline");
        	//this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid01, "Sheet1!A15");
        	//this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid01, "Sheet1!A" + (this.all[this.Grid00.binddataset].rowcount+5));
        	//this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1", "allband","allrecord","suppress","image","","color","");
        	//this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1", "allband","allrecord","suppress","image","","color,background","height");
        	
        	
        	
        	trace("exporturl== "+this.exportObj.exporturl);
        	var result = this.exportObj.exportData();
        	//var result = this.exportObj.exportData("filepassword=abc1234");
        }

        this.Export00_onprogress = function(obj,e) 
        {
        // 	this.TextArea00.set_value(this.TextArea00.value + "\n=========== onprogress event start================");
        // 	this.TextArea00.set_value(this.TextArea00.value + "\ne.eventid 				:"+e.eventid 				);
        // 	this.TextArea00.set_value(this.TextArea00.value + "\ne.id 					:"+e.id 					);
        // 	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromobject 			:"+e.fromobject 			);
        // 	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromreferenceobject 	:"+e.fromreferenceobject 	);
        // 	this.TextArea00.set_value(this.TextArea00.value + "\ne.itemindex 			:"+e.itemindex 				);
        // 	this.TextArea00.set_value(this.TextArea00.value + "\ne.itemtype 			:"+e.itemtype 				);
        // 	this.TextArea00.set_value(this.TextArea00.value + "\ne.recordindex 			:"+e.recordindex  			);	
        }

        this.Export00_onerror = function(obj,e) 
        {
        	this.setWaitCursor(false, true);
        	trace("onerror");
        }

        this.Export00_onsuccess = function(obj,e) 
        {
        	trace("onsuccess");
        	trace("url  : " + e.url);
        	return;
        	
        	for(a in e) {
        	
        		trace(a+" : "+e[a]);
        	}
        	
        }

        
        this.Button02_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();

        	this.exportObj.addEventHandler("onprogress", this.Export00_onprogress, this);
        	this.exportObj.addEventHandler("onsuccess", this.Export00_onsuccess, this);
        	this.exportObj.addEventHandler("onerror", this.Export00_onerror, this);
        	
        	
        	
        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	//this.exportObj.set_exportactivemode('active');
        	//this.exportObj.set_exportfilename("2015125_한글파일");	
        	this.exportObj.set_exportfilename("한글 파일");	
        	this.exportObj.set_exporturl("http://localhost:8080/XExportImport");
        	//this.exportObj.set_exporturl("http://172.10.13.122:8080/nexacroXeni/XExportImport");
        	//this.exportObj.set_exporturl("http://172.10.13.122:9090/nexacroXeni/XExportImport");
        	
        	this.exportObj.set_exportmessageprocess("%d번째 [ %d / %d ]");
        	this.exportObj.set_exportuitype("exportprogress");
        	this.exportObj.set_exporteventtype("itemrecord");
        	
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1");
        	//this.Grid00.set_formatid("format_copy");
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid01, "Sheet2!A1");
        	//this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid01, "Sheet1!A" + (this.all[this.Grid00.binddataset].rowcount+5));
        	//this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1", "allband","allrecord","suppress","image","","color","");
        	//this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1", "allband","allrecord","suppress","image","","color,background","height");
        	
        	
        	
        	trace("exporturl== "+this.exportObj.exporturl);
        	var result = this.exportObj.exportData();
        	//var result = this.exportObj.exportData("filepassword=abc1234");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("Z201701_2017010236-Temp_ExcelExportImport_Client.xfdl", true);

       
    };
}
)();
