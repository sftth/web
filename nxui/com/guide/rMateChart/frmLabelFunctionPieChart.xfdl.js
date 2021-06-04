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
                this.set_name("frmLabelFunctionPieChart");
                this.set_classname("frmLabelFunctionPieChart");
                this.set_titletext("PieChart Label Function");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("chart1", "absolute", "1.86%", "2.47%", "95.8%", "95.44%", null, null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmLabelFunctionPieChart");
            		p.set_titletext("PieChart Label Function");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("frmLabelFunctionPieChart.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("frmLabelFunctionPieChart.xfdl", function(exports) {
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
         * nexacroChartH5Sample.html로 제공되고 있습니다.
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
         * 차트에서 레이아웃에 labelJsFunction 기능에 의거하여 함수에서 파이차트에 표시할 라벨을 지정하는 예제입니다.
         * 레이아웃에서 labelJsFunction에 불려질 함수명을 넣어주고
         * 해당 함수에서 표시할 라벨을 만들어 반환하게 됩니다.
         */

        this.makeChartVars = function() {
        	var chartVars = "";

        	//rMateChartH5가 로딩 완료 되었을 때 호출 할 함수를 정의 하십시오.
        	var rMateOnLoadCallFunction = "rMateChartOnLoad";
        	chartVars += "rMateOnLoadCallFunction="+rMateOnLoadCallFunction;

        	return chartVars;
        }

        // chartVars에 rMateOnLoadCallFunction 으로 아래 함수를 설정하여 rMateChartH5가 로딩된후 불려지게 할 수 있습니다.
        this.rMateChartOnLoad = function(id) {
        	this.rMateChartSetLayout(this.chart1, layoutStr);
        	this.rMateChartSetData(this.chart1, chartData);
        }

        this.frmLabelFunctionPieChart_onload = function(obj,e) {

        	// Form이 완선된 후 차트를 생성합니다.
        	this.rMateChartCreate(this.chart1, this.scriptRootUrl, this.htmlUrl, this.makeChartVars());
        }

        this.frmLabelFunctionPieChart_onbeforeclose = function(obj,e) {
        	this.rMateChartClear(this.chart1);
        }

        
        // 스트링 형식으로 레이아웃 정의.
        var layoutStr = '\
        <rMateChart backgroundColor="0xFFFFFF" cornerRadius="12" borderStyle="none">\
        	<Options>\
        		<Caption text="Annual Report"/>\
        	</Options>\
        	<Pie2DChart showDataTips="true">\
        		<series>\
        			<Pie2DSeries field="Profit" nameField="Month" displayName="Profit" labelPosition="inside" labelJsFunction="pieSeriesLabelFunc">\
        			/* \
        				labelJsFunction : Pie2DSeries에서 라벨 표시용 Javascript함수로 \
        					실행시 html파일 또는 Form내에 정의한 해당 함수로 데이터와 함께 불려집니다\
        					이 예제에서는 전달받은 데이터의 Month 필드명과 수치뒤에 %를 붙여 반환하도록 구현되었읍니다\
        			*/ \
        				<showDataEffect>\
        					<SeriesInterpolate/>\
        				</showDataEffect>\
        			</Pie2DSeries>\
        		</series>\
        	</Pie2DChart>\
        </rMateChart>\
        ';

        // 차트 데이터
        var chartData = [{"Month":"Jan","Profit":1000,"Cost":1500,"Revenue":2300},
        				{"Month":"Feb","Profit":1400,"Cost":1400,"Revenue":1200},
        				{"Month":"Mar","Profit":1500,"Cost":1200,"Revenue":1600},
        				{"Month":"Apr","Profit":1900,"Cost":1300,"Revenue":1300},
        				{"Month":"May","Profit":1400,"Cost":900,"Revenue":1000},
        				{"Month":"Jun","Profit":2000,"Cost":1000,"Revenue":1200}];

        
        ///////////////// 아래의 예제 함수들은 rMateChartH5와 연동하여 불려지는 함수들이며 위에 정의한 htmlUrl 의 html 내에도 정의되어야 합니다. - 함수의 사용에 관련된 자세한 내용은 rMateChart for HTML5를 참조하시기 바랍니다.  //////////////////////

        
        /*
        // ------------------------- 폴라계열 수치 필드 사용자 정의 함수 -----------------------------------------------------
        // 칼럼, 파이, 바 챠트에서 labelPosition 속성을 설정한 경우 수치 필드를 사용자 정의하는 함수입니다.
        // layout XML 에서 Series 속성을 넣을때 labelJsFunction 주고, 만든 javascript 함수명을 넣어줍니다
        //
        // 예) <Pie2DSeries field="Profit" nameField="Month" labelPosition="inside" labelJsFunction="pieSeriesLabelFunc">
        //
        // 파라메터 설명
        // seriesId : 해당 시리즈의 아이디.
        // index : 해당 아이템의 인덱스.
        // data : 해당 item의 값을 표현하기 위해 입력된 data(row값에 해당 - data로 입력된 종류에 따라 XML문자열 또는 배열의 Object가 됩니다)
        // values : 해당 item의 값 (배열로 전달되며, 챠트 종류에 따라 아래와 같이 들어옵니다.)
                    PieSeries     0:값 1:퍼센트값
        //
        // 참고 : 수치필드 사용자 정의 시엔 <br>태그와 같은 html형식의 코딩 삽입이 불가능합니다.
        */
        this.pieSeriesLabelFunc = function(seriesId,index,data,values) {
        	return data["Month"]+", "+Number(values[1]).toFixed(2)+"%";
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.frmLabelFunctionPieChart_onload, this);
            this.addEventHandler("onbeforeclose", this.frmLabelFunctionPieChart_onbeforeclose, this);

        };

        this.loadIncludeScript("frmLabelFunctionPieChart.xfdl", true);

       
    };
}
)();
