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
                this.set_name("Form_Introduce");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,5140);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_01", "absolute", "0", "0", "1224", null, null, "4", this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "1.63%", "2595", null, "691", "0.98%", null, this.div_01);
            obj.set_taborder("61");
            obj.style.set_background("whitesmoke");
            this.div_01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer10", "absolute", "6.37%", "2689", null, "551", "4.33%", null, this.div_01);
            obj.set_taborder("62");
            obj.set_image("URL('Images::12.png')");
            obj.set_stretch("fit");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "1.63%", "1859", null, "675", "0.98%", null, this.div_01);
            obj.set_taborder("63");
            obj.style.set_background("whitesmoke");
            this.div_01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer08", "absolute", "6.37%", "1945", null, "551", "4.33%", null, this.div_01);
            obj.set_taborder("64");
            obj.set_image("URL('Images::13.png')");
            obj.set_stretch("fit");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "1.63%", "1147", null, "675", "0.98%", null, this.div_01);
            obj.set_taborder("65");
            obj.style.set_background("whitesmoke");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "1.63%", "3923", null, "947", "0.98%", null, this.div_01);
            obj.set_taborder("66");
            obj.style.set_background("whitesmoke");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "1.63%", "3355", null, "483", "0.98%", null, this.div_01);
            obj.set_taborder("67");
            obj.style.set_background("whitesmoke");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "1.63%", "611", null, "491", "0.98%", null, this.div_01);
            obj.set_taborder("68");
            obj.style.set_background("whitesmoke");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "54.41%", "171", null, "387", "1.14%", null, this.div_01);
            obj.set_taborder("69");
            obj.style.set_background("whitesmoke");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "1.8%", "171", null, "387", "47.71%", null, this.div_01);
            obj.set_taborder("70");
            obj.style.set_background("whitesmoke");
            this.div_01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "23.37%", "184", null, "340", "50.98%", null, this.div_01);
            obj.set_taborder("71");
            obj.set_image("URL('Images::1.png')");
            this.div_01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer02", "absolute", "78.43%", "186", null, "217", "8.91%", null, this.div_01);
            obj.set_taborder("72");
            obj.set_image("URL('Images::3.png')");
            this.div_01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer01", "absolute", "78.43%", "428", null, "105", "2.61%", null, this.div_01);
            obj.set_taborder("73");
            obj.set_image("URL('Images::2.png')");
            this.div_01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer03", "absolute", "22.63%", "629", null, "359", "32.03%", null, this.div_01);
            obj.set_taborder("74");
            obj.set_image("URL('Images::4.png')");
            this.div_01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer04", "absolute", "69.12%", "632", null, "186", "16.91%", null, this.div_01);
            obj.set_taborder("75");
            obj.set_image("URL('Images::5.png')");
            this.div_01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer05", "absolute", "69.12%", "844", null, "248", "1.72%", null, this.div_01);
            obj.set_taborder("76");
            obj.set_image("URL('Images::6.png')");
            this.div_01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer09", "absolute", "1.96%", "3473", null, "336", "51.72%", null, this.div_01);
            obj.set_taborder("77");
            obj.set_image("URL('Images::7-4.png')");
            obj.set_stretch("fit");
            this.div_01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer15", "absolute", "50.98%", "3471", null, "336", "1.96%", null, this.div_01);
            obj.set_taborder("78");
            obj.set_image("URL('Images::8-3.png')");
            obj.set_stretch("fit");
            this.div_01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer20", "absolute", "2.94%", "4088", null, "446", "39.54%", null, this.div_01);
            obj.set_taborder("79");
            obj.set_image("URL('Images::9.png')");
            obj.set_stretch("fit");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "3.27%", "186", null, "44", "79.08%", null, this.div_01);
            obj.set_taborder("80");
            obj.set_text("Grid");
            obj.style.set_background("darkgray");
            obj.style.set_padding("0 0 0 15");
            obj.style.set_font("bold 12 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "3.92%", "234", null, "20", "78.43%", null, this.div_01);
            obj.set_taborder("81");
            obj.set_text("Filter");
            obj.style.set_font("bold 10 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "3.92%", "258", null, "20", "78.43%", null, this.div_01);
            obj.set_taborder("82");
            obj.set_text("Sort, MulitiSort");
            obj.style.set_font("bold 10 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "3.92%", "282", null, "20", "78.43%", null, this.div_01);
            obj.set_taborder("83");
            obj.set_text("Hide Column");
            obj.style.set_font("bold 10 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "3.92%", "306", null, "20", "78.43%", null, this.div_01);
            obj.set_taborder("84");
            obj.set_text("Freeze Column");
            obj.style.set_font("bold 10 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "3.92%", "330", null, "20", "78.43%", null, this.div_01);
            obj.set_taborder("85");
            obj.set_text("CheckBox All Check");
            obj.style.set_font("bold 10 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "56.21%", "186", null, "44", "26.14%", null, this.div_01);
            obj.set_taborder("86");
            obj.set_text("Combo");
            obj.style.set_background("darkgray");
            obj.style.set_padding("0 0 0 15");
            obj.style.set_font("bold 12 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "56.86%", "242", null, "20", "25.49%", null, this.div_01);
            obj.set_taborder("87");
            obj.set_text("Muliti Selected");
            obj.style.set_font("bold 10 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "56.86%", "266", null, "20", "25.49%", null, this.div_01);
            obj.set_taborder("88");
            obj.set_text("Code, Name Muliti Display");
            obj.style.set_font("bold 10 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "3.59%", "620", null, "44", "78.76%", null, this.div_01);
            obj.set_taborder("89");
            obj.set_text("Calendar");
            obj.style.set_background("darkgray");
            obj.style.set_padding("0 0 0 15");
            obj.style.set_font("bold 12 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "4.25%", "676", null, "20", "78.1%", null, this.div_01);
            obj.set_taborder("90");
            obj.set_text("Day Term Select");
            obj.style.set_font("bold 10 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "4.25%", "700", null, "20", "78.1%", null, this.div_01);
            obj.set_taborder("91");
            obj.set_text("Month Select");
            obj.style.set_font("bold 10 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "4.25%", "724", null, "20", "78.1%", null, this.div_01);
            obj.set_taborder("92");
            obj.set_text("Month Term Select");
            obj.style.set_font("bold 10 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "3.27%", "3381", null, "28", "79.08%", null, this.div_01);
            obj.set_taborder("93");
            obj.set_text("패턴별 템플릿 제공");
            obj.style.set_background("darkgray");
            obj.style.set_padding("0 0 0 15");
            obj.style.set_font("bold 12 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "3.92%", "3421", null, "20", "78.43%", null, this.div_01);
            obj.set_taborder("94");
            obj.set_text("Top Search Area 7ea");
            obj.style.set_font("bold 10 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "3.92%", "3445", null, "20", "78.43%", null, this.div_01);
            obj.set_taborder("95");
            obj.set_text("Left Search Area 7ea");
            obj.style.set_font("bold 10 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "2.94%", "3948", null, "28", "79.41%", null, this.div_01);
            obj.set_taborder("96");
            obj.set_text("3rd 제품 연동");
            obj.style.set_background("darkgray");
            obj.style.set_padding("0 0 0 15");
            obj.style.set_font("bold 12 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "3.51%", "3988", null, "20", "78.76%", null, this.div_01);
            obj.set_taborder("97");
            obj.set_text("Tagfree web Edit");
            obj.style.set_font("bold 10 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "3.51%", "4012", null, "20", "78.76%", null, this.div_01);
            obj.set_taborder("98");
            obj.set_text("rMate Chart");
            obj.style.set_font("bold 10 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "3.51%", "4036", null, "20", "78.76%", null, this.div_01);
            obj.set_taborder("99");
            obj.set_text("Daum 주소 API");
            obj.style.set_font("bold 10 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer06", "absolute", "37.17%", "4240", null, "598", "5.23%", null, this.div_01);
            obj.set_taborder("100");
            obj.set_image("URL('Images::10.png')");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "3.51%", "1176", null, "44", "77.53%", null, this.div_01);
            obj.set_taborder("101");
            obj.set_text("Excel Export, Import 표준");
            obj.style.set_background("darkgray");
            obj.style.set_padding("0 0 0 15");
            obj.style.set_font("bold 12 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "3.51%", "1884", null, "44", "81.45%", null, this.div_01);
            obj.set_taborder("102");
            obj.set_text("Message 처리 표준");
            obj.style.set_background("darkgray");
            obj.style.set_padding("0 0 0 15");
            obj.style.set_font("bold 12 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "3.51%", "2622", null, "44", "81.45%", null, this.div_01);
            obj.set_taborder("103");
            obj.set_text("Popup 및 Link 표준");
            obj.style.set_background("darkgray");
            obj.style.set_padding("0 0 0 15");
            obj.style.set_font("bold 12 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "0.98%", "26", null, "28", "0.98%", null, this.div_01);
            obj.set_taborder("104");
            obj.set_text("넥사크로의 기본기능을 숙지하고 활용하시길 권장합니다. ");
            obj.style.set_background("whitesmoke");
            obj.style.set_padding("0 0 0 15");
            obj.style.set_font("bold 12 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "0.98%", "138", null, "28", "0.98%", null, this.div_01);
            obj.set_taborder("105");
            obj.set_text("넥사크로 패키지에는 다음과 같은 사용자 컴포넌트 및 기능들이 포함되어 있습니다.");
            obj.style.set_background("whitesmoke");
            obj.style.set_padding("0 0 0 15");
            obj.style.set_font("bold 12 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "0.98%", "98", null, "28", "0.98%", null, this.div_01);
            obj.set_taborder("106");
            obj.set_text("프레임(메뉴, MDI, 업무화면, 화면전환, Intro화면)을 제어하는 기능을 포함하고 있습니다.");
            obj.style.set_background("whitesmoke");
            obj.style.set_padding("0 0 0 15");
            obj.style.set_font("bold 12 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer07", "absolute", "6.37%", "1249", null, "551", "4.33%", null, this.div_01);
            obj.set_taborder("107");
            obj.set_image("URL('Images::11.png')");
            obj.set_stretch("fit");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "0.98%", "62", null, "28", "0.98%", null, this.div_01);
            obj.set_taborder("108");
            obj.set_text("LG전자 넥사크로 패키지는 EcoLibrary를 경량화 시킨 BaseLibrary를 사용합니다. (EcoLibrary를 사용할 수 없습니다.)");
            obj.style.set_background("whitesmoke");
            obj.style.set_padding("0 0 0 15");
            obj.style.set_font("bold 12 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("Static35", "absolute", "8", "0", null, "28", "61.6%", null, this.div_01);
            obj.set_taborder("109");
            obj.set_text("* 넥사크로 스튜디오 권장설치 버전 (<fc v='red'>14.0.1.1201</fc>)");
            obj.set_usedecorate("true");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 arial");
            this.div_01.addChild(obj.name, obj);
            obj = new Button("btn_tobe", "absolute", null, "2", "152", "19", "16", null, this.div_01);
            obj.set_taborder("110");
            obj.set_text("TOBESOFT 고객지원센터");
            obj.set_cssclass("btn_WF_GridSave");
            this.div_01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 0, this.div_01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");

            	}
            );
            this.div_01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 5140, this,
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
        this.registerScript("Form_Introduce.xfdl", function(exports) {

        this.fn_resize = function ()
        {
        	this.div_01.set_left((application.mainframe.width - 1224) /2);
        }

        this.div_01_btn_tobe_onclick = function(obj,e)
        {
        	system.execBrowser("support.tobesoft.com");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_resize, this);
            this.addEventHandler("onsize", this.fn_resize, this);
            this.div_01.ImageViewer00.addEventHandler("onclick", this.div_01_ImageViewer00_onclick, this);
            this.div_01.btn_tobe.addEventHandler("onclick", this.div_01_btn_tobe_onclick, this);

        };

        this.loadIncludeScript("Form_Introduce.xfdl", true);

       
    };
}
)();
