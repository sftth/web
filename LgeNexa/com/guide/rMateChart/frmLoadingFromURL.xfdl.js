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
                this.set_name("frmLoadingFromURL");
                this.set_titletext("Loading from URL");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("chart1", "absolute", "19", "21", "96.58%", "91.02%", null, null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "71.19%", "94.79%", "11.72%", "3.39%", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Add Preloader");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "83.69%", "94.79%", "14.75%", "3.39%", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Remove Preloader");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmLoadingFromURL");
            		p.set_titletext("Loading from URL");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("frmLoadingFromURL.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("frmLoadingFromURL.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        /*
         * rMate Chart for HTML5 nexacro 샘플 소스
         *
         * rMateChartH5 version : 3.0
         * nexacro version : 14
         *
         * nexacro과 rMateChart for HTML5 간에 데이타를 주고 받는 모듈을 포함하여
         * rMateChartH5의 기능을 구현한 예제입니다.
         * 
         * rMateChart for HTML5 는 HTML5 표준과 자바스크립트로 구현된 차트 제품으로
         * nexacro의 Runtime 모드에서는 Plugin 상태에서 실행되고
         * HTML5 모드에서는 브라우져의 iframe내에서 실행되게 됩니다.
         * 이를 위해 차트 개발시 nexacro의 WebBrowser 컴포넌트(onusernotify가 지원되는 버젼)로 작성되어야 하며
         * rMateChartH5 Kit for nexacro을 통해 Runtime과 HTML5를 동시에 지원할 수 있게 됩니다.
         * 이때 WebBrowser 컴포넌트내에 넣어질 html을 필요하게 되며 이에 대한 예제는 Kit에서
         * XPlatformChartH5Sample.html로 제공되고 있습니다.
         * 
         * Runtime모드로 실행될 때는 아래의 함수를 사용하는 기능은 nexacro과의 연동이 안되어
         * html내어서 별도의 동명의 자바스크립트 함수로 구현되어야 하며, 이때 함수내에서
         * nexacro내의 기능과 연동하여 사용할 수는 없습니다. (HTML5모드에서는 가능)
         *    labelJsFunction
         *    dataTipJsFunction
         *    fillJsFunction
         *    insideLabelJsFunction
         *    outsideLabelJsFunction
         *    totalLabelJsFunction
         *    tickLabelJsFunction
         *    innerTipJsFunction
         *    targetTipJsFunction
         *    seriesLabelFunc
         * 
         * - 주의사항
         *  HTML5 모드로 실행하는 경우 nexacroChartH5Sample.html은 iframe내에서 실행되므로 동일한 서버에서 불려져야
         *  브라우져의 보안정책에 위배되지 않게 됩니다. 다른 서버에서 불려질 경우 제대로 작동하지 문제가 발생하니
         *  유의하시기 바랍니다.
         */

        /*
         * chartVars 선언에 의해 차트의 레이아웃과 데이타를 지정한 url에서 읽어오는 예제입니다.
         */

        this.makeChartVars = function() {
        	var chartVars = "";

        	// 차트 레이아웃 URL 경로.
        	var layoutURL = encodeURIComponent("./LayoutXml/Column_3D_Layout.xml");
        	chartVars += "layoutURL="+layoutURL;

        	// 데이타를 URL 경로를 통해 가져올 경우 설정하십시오.
        	var dataURL = encodeURIComponent("./DataXml/singleData.xml");
        	chartVars += "&dataURL="+dataURL;

        	return chartVars;
        }

        this.frmLoadingFromURL_onload = function(obj,e) {

        	// Form이 완선된 후 차트를 생성합니다.
        	this.rMateChartCreate(this.chart1, this.scriptRootUrl, this.htmlUrl, this.makeChartVars());
        }

        this.frmLoadingFromURL_onbeforeclose = function(obj,e) {
        	this.rMateChartClear(this.chart1);
        }

        this.Button00_onclick = function(obj,e) {
        	this.rMateChartShowAdditionalPreloader(this.chart1);
        }

        this.Button01_onclick = function(obj,e) {
        	this.rMateChartRemoveAdditionalPreloader(this.chart1);
        }

        ///////////////// 아래의 예제 함수들은 rMateChartH5와 연동하여 불려지는 함수들이며 위에 정의한 htmlUrl 의 html 내에도 정의되어야 합니다. - 함수의 사용에 관련된 자세한 내용은 rMateChart for HTML5를 참조하시기 바랍니다.  //////////////////////

        
        /*
        // ------------------------- 수치 필드 사용자 정의 함수 -----------------------------------------------------
        // 챠트의 시리즈에서 labelPosition 속성을 설정한 경우 수치 필드를 사용자 정의하는 함수입니다.
        // layout XML 에서 Series 속성을 넣을때 라벨펑션을 설정하고 속성 값으로 javascript 함수명을 넣어줍니다
        //
        // 예) <Column2DSeries yField="Profit" labelPosition="outside" outsideLabelJsFunction="seriesLabelFunc">
        //
        // 파라메터 설명
        // seriesID : 해당 시리즈의 ID.
        // index : 해당 시리즈 아이템의 인덱스.
        // data : 해당 item의 값을 표현하기 위해 입력된 data(row값에 해당 - data로 입력된 종류에 따라 XML문자열 또는 배열의 Object가 됩니다)
        // values : 해당 item의 값 (배열로 전달되며, 챠트 종류에 따라 아래와 같이 들어옵니다.)

        			Pie2DSeries,Pie3DSeries			0:값 1:퍼센트값
        			Bubble3DSeries,Matrix2DSeries   0:x축값 1:y축값 2:z값

        			Pie,Bubble시리즈를 제외한 모든 시리즈   0:x축값 1:y축값 2:min값
        			* min값은 type을 '100%' 또는 'stacked' 인 경우만 유효합니다. 쌓아올릴 경우 해당 데이터의 시작값을 의미합니다.
        //
        */
        this.seriesLabelFunc = function(seriesID,index,data,values) {
        	//trace(values);
        	return "$" + values[1];
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbeforeclose", this.frmLoadingFromURL_onbeforeclose, this);
            this.addEventHandler("onload", this.frmLoadingFromURL_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("frmLoadingFromURL.xfdl", true);

       
    };
}
)();
