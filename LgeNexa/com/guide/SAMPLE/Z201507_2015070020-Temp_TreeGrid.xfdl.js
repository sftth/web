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
            obj = new Button("Button00", "absolute", "6.35%", "28", null, "50", "81.93%", null, this);
            obj.set_taborder("0");
            obj.set_text("Button00");
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

        this.key = CryptoJS.enc.Utf8.parse("nexacro platform");
        this.iv  = CryptoJS.enc.Utf8.parse(1234567812345678);

        this.Button00_onclick = function(obj,e)
        {
         var encrypted = this.dataEncode("nexacro platform 14", this.key, this.iv);
         var decrypted = this.dataDecode(encrypted, this.key, this.iv);
         
         trace(encrypted);
         trace(decrypted);

        }

         //암호화
        this.dataEncode = function(message,key,iv){
           var encrypted = CryptoJS.AES.encrypt(message, key, { iv: iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding});
           return encrypted.toString();
         }
          //복호화
        this.dataDecode = function(encrypted,key,iv){
           var decrypted = CryptoJS.AES.decrypt(encrypted,key,{iv:iv,padding:CryptoJS.pad.ZeroPadding}); 
           return decrypted.toString(CryptoJS.enc.Utf8);
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Dataset00.addEventHandler("oncolumnchanged", this.Dataset00_oncolumnchanged, this);
            this.Dataset00.addEventHandler("onload", this.Dataset00_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("Z201507_2015070020-Temp_TreeGrid.xfdl", true);

       
    };
}
)();
