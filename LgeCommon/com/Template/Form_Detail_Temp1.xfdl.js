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
                this.set_name("Form_Detail_Temp1");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "964", "282", null, "57", "0", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static150", "absolute", "0", "622", null, "29", "0", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "0", "594", null, "29", "0", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "0", "226", null, "29", "0", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "254", null, "29", "0", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "282", "816", "29", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "0", "310", "816", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "0", "226", "150", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "815", "226", "150", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "0", "254", "150", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "407", "254", "150", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "815", "254", "150", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label_E");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "282", "150", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label_E");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "407", "282", "150", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label_E");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "815", "282", "150", "57", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("15");
            obj.set_text("Detail Area ");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "406", null, "29", "0", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "0", "434", null, "29", "0", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "0", "500", null, "29", "0", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "0", "528", null, "29", "0", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "310", "150", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03", "absolute", "153", "258", "251", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");

            obj = new Combo("Combo06", "absolute", "153", "286", "251", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_cssclass("essential");

            obj = new Combo("Combo11", "absolute", "153", "314", "251", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");

            obj = new Static("Static61", "absolute", "407", "310", "150", "29", null, null, this);
            obj.set_taborder("24");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo17", "absolute", "560", "286", "252", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_cssclass("essential");

            obj = new Calendar("Calendar06", "absolute", "560", "314", "252", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_cssclass("WF_Essential");

            obj = new Edit("Edit09", "absolute", "968", "258", null, "21", "4", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "152", "838", "154", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "755", "225", "24", null, null, this);
            obj.set_taborder("29");
            obj.set_text("Output type");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "199", "340", "1", "20", null, null, this);
            obj.set_taborder("30");
            obj.set_text("Static07");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "153", "230", "184", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "0", "500", "150", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02", "absolute", "153", "504", "455", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("33");

            obj = new Static("Static35", "absolute", "611", "500", "150", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "764", "504", null, "21", "4", null, this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "0", "406", "150", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "0", "379", "110", "24", null, null, this);
            obj.set_taborder("37");
            obj.set_text("1단일때");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "153", "410", null, "21", "4", null, this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "0", "473", "110", "24", null, null, this);
            obj.set_taborder("39");
            obj.set_text("2단일때");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "0", "661", "110", "24", null, null, this);
            obj.set_taborder("40");
            obj.set_text("4단일때");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "0", "434", "150", "29", null, null, this);
            obj.set_taborder("41");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "153", "438", null, "21", "4", null, this);
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "0", "528", "150", "29", null, null, this);
            obj.set_taborder("43");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04", "absolute", "153", "532", "455", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("44");

            obj = new Static("Static48", "absolute", "611", "528", "150", "29", null, null, this);
            obj.set_taborder("45");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "764", "532", null, "21", "4", null, this);
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Static("Static125", "absolute", "855", "519", "57", "17", null, null, this);
            obj.set_taborder("47");
            obj.set_text("1px 겹침");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static126", "absolute", "811", "528", "41", "1", null, null, this);
            obj.set_taborder("48");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static128", "absolute", "207", "493", "14", "17", null, null, this);
            obj.set_taborder("49");
            obj.set_text("3");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static127", "absolute", "157", "501", "43", "3", null, null, this);
            obj.set_taborder("50");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static129", "absolute", "157", "525", "43", "3", null, null, this);
            obj.set_taborder("51");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static130", "absolute", "207", "518", "14", "17", null, null, this);
            obj.set_taborder("52");
            obj.set_text("3");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static219", "absolute", "127", "500", "1", "57", null, null, this);
            obj.set_taborder("53");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static220", "absolute", "122", "500", "10", "1", null, null, this);
            obj.set_taborder("54");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static222", "absolute", "122", "528", "10", "1", null, null, this);
            obj.set_taborder("55");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static223", "absolute", "108", "508", "20", "17", null, null, this);
            obj.set_taborder("56");
            obj.set_text("29");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static224", "absolute", "108", "536", "20", "17", null, null, this);
            obj.set_taborder("57");
            obj.set_text("29");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "167", "360", "169", "18", null, null, this);
            obj.set_taborder("58");
            obj.set_text("class : <b v='true'>sta_WFDA_Data</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "107", "750", "322", "18", null, null, this);
            obj.set_taborder("59");
            obj.set_text("class : <b v='true'>sta_WFDA_LabelCenter(중간정렬)</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Button("Button21", "absolute", "748", "258", "64", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("ABCD");
            obj.set_tooltiptext("ABCD");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "560", "258", "186", "21", null, null, this);
            obj.set_taborder("61");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "23", "75", "1021", "83", null, null, this);
            obj.set_taborder("62");
            obj.set_text("- Input Area에 들어가는 Label Component와 입력 Component 그리고 배경 Component는 한 조합으로 쓰이고 각각 컴포넌트들의  heigt값은 고정이나 width는 가변적임.\r\n- Label Component의 width값은 150px이 Default 이며, 상황에 따라 사이즈 변경이 가능하다.\r\n- Detail Area에 사용되는 버튼은 Default Button을 사용한다.");
            obj.set_cssclass("sta_GID_txt02");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "407", "226", "150", "29", null, null, this);
            obj.set_taborder("63");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "339", "230", "65", "21", null, null, this);
            obj.set_taborder("64");
            obj.set_text("Button");
            obj.set_tooltiptext("Button");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "968", "230", "162", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">nexacro</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("65");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static76", "absolute", "150", "226", "3", "113", null, null, this);
            obj.set_taborder("66");
            obj.set_text("w3");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "404", "226", "3", "113", null, null, this);
            obj.set_taborder("67");
            obj.set_text("w3");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "557", "226", "3", "113", null, null, this);
            obj.set_taborder("68");
            obj.set_text("w3");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "812", "226", "3", "113", null, null, this);
            obj.set_taborder("69");
            obj.set_text("w3");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "965", "226", "3", "113", null, null, this);
            obj.set_taborder("70");
            obj.set_text("w3");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "1220", "226", "3", "113", null, null, this);
            obj.set_taborder("71");
            obj.set_text("w3");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit19", "absolute", "149", "692", "126", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "0", "688", null, "29", "0", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "0", "688", "150", "29", null, null, this);
            obj.set_taborder("74");
            obj.set_text("Detail Lebel");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit24", "absolute", "153", "692", "149", "21", null, null, this);
            obj.set_taborder("75");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit28", "absolute", "149", "720", "126", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "0", "716", null, "29", "0", null, this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "0", "716", "150", "29", null, null, this);
            obj.set_taborder("78");
            obj.set_text("Detail Lebel");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "305", "688", "150", "29", null, null, this);
            obj.set_taborder("79");
            obj.set_text("Detail Lebel");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", "458", "692", "149", "21", null, null, this);
            obj.set_taborder("80");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "305", "716", "150", "29", null, null, this);
            obj.set_taborder("81");
            obj.set_text("Detail Lebel");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14", "absolute", "458", "720", "149", "21", null, null, this);
            obj.set_taborder("82");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "610", "688", "150", "29", null, null, this);
            obj.set_taborder("83");
            obj.set_text("Detail Lebel");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16", "absolute", "763", "692", "149", "21", null, null, this);
            obj.set_taborder("84");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "610", "716", "150", "29", null, null, this);
            obj.set_taborder("85");
            obj.set_text("Detail Lebel");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit18", "absolute", "763", "720", "149", "21", null, null, this);
            obj.set_taborder("86");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "915", "688", "150", "29", null, null, this);
            obj.set_taborder("87");
            obj.set_text("Detail Lebel");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit21", "absolute", "1068", "692", null, "21", "4", null, this);
            obj.set_taborder("88");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "915", "716", "150", "29", null, null, this);
            obj.set_taborder("89");
            obj.set_text("Detail Lebel");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit23", "absolute", "1068", "720", null, "21", "4", null, this);
            obj.set_taborder("90");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "782", "306", "29", null, null, this);
            obj.set_taborder("91");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_LabelTitle");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "968", "286", null, "49", "4", null, this);
            obj.set_taborder("92");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "594", "150", "29", null, null, this);
            obj.set_taborder("93");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "814", "594", "150", "29", null, null, this);
            obj.set_taborder("94");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static148", "absolute", "407", "594", "150", "29", null, null, this);
            obj.set_taborder("95");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05", "absolute", "560", "230", "252", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("96");

            obj = new Static("Static149", "absolute", "0", "622", "150", "29", null, null, this);
            obj.set_taborder("97");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static151", "absolute", "407", "622", "150", "29", null, null, this);
            obj.set_taborder("98");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static153", "absolute", "814", "622", "150", "29", null, null, this);
            obj.set_taborder("99");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "153", "626", "251", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("100");

            obj = new Edit("Edit25", "absolute", "967", "626", null, "21", "4", null, this);
            obj.set_taborder("101");
            this.addChild(obj.name, obj);

            obj = new Static("Static155", "absolute", "0", "566", "110", "24", null, null, this);
            obj.set_taborder("102");
            obj.set_text("3단일때");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit26", "absolute", "153", "598", "251", "21", null, null, this);
            obj.set_taborder("103");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit29", "absolute", "560", "598", "251", "21", null, null, this);
            obj.set_taborder("104");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit27", "absolute", "560", "626", "251", "21", null, null, this);
            obj.set_taborder("105");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit31", "absolute", "967", "598", null, "21", "4", null, this);
            obj.set_taborder("106");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15", "absolute", "153", "720", "149", "21", null, null, this);
            obj.set_taborder("107");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "112", "205", "1", "20", null, null, this);
            obj.set_taborder("108");
            obj.set_text("Static07");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "63", "191", "161", "18", null, null, this);
            obj.set_taborder("109");
            obj.set_text("class : <b v='true'>sta_WFDA_Label</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "122", "556", "10", "1", null, null, this);
            obj.set_taborder("110");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "305", "782", "150", "85", null, null, this);
            obj.set_taborder("111");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_LabelTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "454", "782", "150", "29", null, null, this);
            obj.set_taborder("112");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "603", "782", "313", "29", null, null, this);
            obj.set_taborder("113");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "915", "782", "150", "29", null, null, this);
            obj.set_taborder("114");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "1064", "782", null, "29", "0", null, this);
            obj.set_taborder("115");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "0", "810", "153", "29", null, null, this);
            obj.set_taborder("116");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_LabelCenter");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "152", "810", "154", "29", null, null, this);
            obj.set_taborder("117");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_LabelCenter");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "454", "810", "150", "29", null, null, this);
            obj.set_taborder("118");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "603", "810", "313", "29", null, null, this);
            obj.set_taborder("119");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "915", "810", "150", "29", null, null, this);
            obj.set_taborder("120");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "1064", "810", null, "29", "0", null, this);
            obj.set_taborder("121");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "0", "838", "153", "29", null, null, this);
            obj.set_taborder("122");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "454", "838", "150", "29", null, null, this);
            obj.set_taborder("123");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "603", "838", "313", "29", null, null, this);
            obj.set_taborder("124");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "915", "838", "150", "29", null, null, this);
            obj.set_taborder("125");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "1064", "838", null, "29", "0", null, this);
            obj.set_taborder("126");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "335", "844", "1", "30", null, null, this);
            obj.set_taborder("127");
            obj.set_text("Static07");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "325", "878", "322", "18", null, null, this);
            obj.set_taborder("128");
            obj.set_text("class : <b v='true'>sta_WFDA_LabelTitle</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "117", "770", "1", "50", null, null, this);
            obj.set_taborder("129");
            obj.set_text("Static07");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "0", "225", null, "2", "0", null, this);
            obj.set_taborder("130");
            obj.style.set_background("#4f5670ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "0", "405", null, "2", "0", null, this);
            obj.set_taborder("131");
            obj.style.set_background("#4f5670ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "0", "499", null, "2", "0", null, this);
            obj.set_taborder("132");
            obj.style.set_background("#4f5670ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "0", "593", null, "2", "0", null, this);
            obj.set_taborder("133");
            obj.style.set_background("#4f5670ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "0", "687", null, "2", "0", null, this);
            obj.set_taborder("134");
            obj.style.set_background("#4f5670ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "0", "781", null, "2", "0", null, this);
            obj.set_taborder("135");
            obj.style.set_background("#4f5670ff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Form_Detail_Temp1.xfdl", true);

       
    };
}
)();
