/**
 * @fileoverview 넥사크로  공통 Library interface
 * @author  copyright 2015 TOBESOFT {J}
 */
if (!JsNamespace.exist("Base"))
{

    /**
     * @namespace
     * @name LGE.Interface
     * @author
     * @memberof!  Base
     */
    JsNamespace.declare("Base", {

		/**
		 * value의 빈값 여부 반환.<br>
		 * 1. null, undefined type : true 반환<br>
		 * 2. string, array type : length 가 0인 경우 true 반환<br>
		 * 3. object type : 하위 속성이 존재할 경우 true 반환<br>
		 * 4. boolean, number, date type : false 반환
		 *
		 * @param {*} value 확인할 value.
		 * @return {boolean} empty 여부.
		 * @example
		 * var a;	// undefined
		 * trace(Base.isEmpty(a));	// output : true
		 *
		 * var a = null;	// null
		 * trace(Base.isEmpty(a));	// output : true
		 *
		 * var a = "";	// string
		 * trace(Base.isEmpty(a));	// output : true
		 *
		 * var a = "abc";	// string
		 * trace(Base.isEmpty(a));	// output : false
		 *
		 * var a = [];	// array
		 * trace(Base.isEmpty(a));	// output : true
		 *
		 * var a = [1,2,3];	// array
		 * trace(Base.isEmpty(a));	// output : false
		 *
		 * var a = new Array();	// array
		 * trace(Base.isEmpty(a));	// output : true
		 *
		 * var a = new Array(3);	// array
		 * trace(Base.isEmpty(a));	// output : false
		 *
		 * var a = {};	// object
		 * trace(Base.isEmpty(a));	// output : true
		 *
		 * var a = {a:'1', b:'2'};	// object
		 * trace(Base.isEmpty(a));	// output : false
		 *
		 * var a = new Object();	// object
		 * trace(Base.isEmpty(a));	// output : true
		 *
		 * var a = new Object();	// object
		 * a.test = "abc";
		 * trace(Base.isEmpty(a));	// output : false
		 *
		 * var a = true;	// boolean
		 * trace(Base.isEmpty(a));	// output : false
		 *
		 * var a = 0;	// number
		 * trace(Base.isEmpty(a));	// output : false
		 *
		 * var a = new Date();	// date
		 * trace(Base.isEmpty(a));	// output : false
		 *
		 * @memberOf Base
		 */
		isEmpty: function(value)
		{
			// null, undefined ==> true
			if ( value == null ) return true;
			
			// String, Array ==> length == 0
			if ( Base.isString(value) || Base.isArray(value) )
			{
				return value.length == 0 ? true : false;
			}
			else if ( Base.isObject(value) )
			{
				for (var p in value) 
				{
					if ( value.hasOwnProperty(p) )
					{
						return false;
					}
				}
				return true;
			}
			
			return false;
		},


		/**
		 * value의 string 여부 반환
		 * @param {*} value 확인할 value.
		 * @return {boolean} string 여부.
		 * @example
		 * trace(Base.isString("test string!!!"));	// output : true
		 * trace(Base.isString(1234));	// output : false
		 * @memberOf Base
		 */
		isString: function(value) 
		{
			return typeof value === 'string';
		},


		/**
		 * value의 Object 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} Object 여부.
		 * @example
		 * var o = new Object();
	     * trace(Base.isObject(o));	// output : true
	     * 
	     * var o = {};
	     * trace(Base.isObject(o));	// output : true
	     *
	     * var o = [1,2,3];
	     * trace(Base.isObject(o));	// output : false
	     *
	     * var o = new Button();
	     * trace(Base.isObject(o));	// output : false
	     *
	     * var o = new Rect();
	     * trace(Base.isObject(o));	// output : false
	     *
		 * @memberOf Base
		 */
		isObject: function(value)
		{
			if ( value === null || value === undefined ) return false;
			
			// nexacro Component
			if ( Base.isXComponent(value) ) return false;
			
			// nexacro Object (e.g. Dataset)
			if( value instanceof nexacro.Object ) return false;
			
			return typeof value == "object" && 
				   'constructor' in value &&
				   value.constructor === Object;
		},

		/**
		 * value의 nexacro component 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} nexacro component 여부.
		 * @example
		 * var a = new Button();
		 * trace(Base.isXComponent(a));	// output : true
		 *
		 * var a = new Dataset();
		 * trace(Base.isXComponent(a));	// output : false
		 *
		 * var a = new String();
		 * trace(Base.isXComponent(a));	// output : false
		 *
		 * @memberOf Base
		 */
		isXComponent: function(value) 
		{
			if ( value === null || value === undefined  ) return false;
			
			return value instanceof nexacro.Component;
		},


		/**
		 * value의 Array 여부 반환.
		 * @function isArray
		 * @param {*} value 확인할 value.
		 * @return {boolean} Array 여부.
		 * @example
		 * var a = new Array();
		 * trace(Base.isArray(a));	// output : true
		 *
		 * var a = [1,2,3];
		 * trace(Base.isArray(a));	// output : true
		 * @memberOf Base
		 */
		isArray: Array.isArray ? function(value) {
			return Array.isArray(value);
		} :
		function(value) 
		{
			return Base._toString.call( value ) === '[object Array]';
		},

		_toString: (Object.prototype.toString),
		_hasOwnProperty: (Object.prototype.hasOwnProperty),
		_isIE8Below: (nexacro.Browser == "IE" && nexacro.BrowserVersion < 9),


		/**
		 * value의 Function 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} Function 여부.
		 * @example
		 * trace(Base.isFunction(Base.isFunction));	// output : true
		 *
		 * this.testFunction = function()
		 * {
		 * }
		 * trace(Base.isFunction(this.testFunction));	// output : true
		 * @memberOf Base
		 */
		isFunction: function(value)
		{
			return Base._toString.call( value ) === '[object Function]';
		},

		/**
		 * value의 Date 여부 반환.
		 * @param {date} value 확인할 value.
		 * @return {boolean} Date 여부.
		 * @example
		 * var a = new Date();
		 * trace(Base.isDate(a));	// output : true
		 *
		 * var a = "20130501";
		 * trace(Base.isDate(a));	// output : false 	 
		 * @memberOf Base
		 */
		isDate: function(value) 
		{
			return Base._toString.call( value ) === '[object Date]';
		},

		/**
		 * value의 number 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} number 여부.
		 * @example
		 * trace(Base.isNumber(1234));	// output : true
		 * trace(Base.isNumber("1234"));	// output : false		 
		 * @memberOf Base
		 */		
		isNumber: function(value) {
            return typeof value === 'number' && isFinite(value);
        },	


		/**
		 * alphabet character code.
		 * charvalue값 => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f]
		 * @private
		 * @constant
		 * @memberOf Base
		 */
		_ALPHA_CHAR_CODES: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102],

		/**
		 * 유일한 ID 를 반환
		 * @public
		 * @param {string=} prefix id 앞에 붙일 문자열
		 * @param {string=} separator id 생성시 구분용 문자(default: '-' ).
		 * @return {string} id
		 * @example
		 *
		 * trace(Base.getUniqueId()); 
		 * // output : 3e52d1f6-f0d2-4970-a590-ba7656b07859
		 * 
		 * trace(Base.getUniqueId("Button_")); 
		 * // output : Button_4e601da1-63f4-4cfa-849b-01b8a7f14d40
		 * 
		 * trace(Base.getUniqueId("", "_")); 
		 * // output : 4e601da1_63f4_4cfa_849b_01b8a7f14d40
		 * 
		 * trace(Base.getUniqueId("Button_", "_")); 
		 * // output : Button_4e601da1_63f4_4cfa_849b_01b8a7f14d40
		 * 
		 * @memberOf Base
		 */
		getUniqueId: function(prefix, separator)
		{
			if ( Base.isEmpty(prefix) ) prefix = "";
			if ( Base.isEmpty(separator) ) {
				separator = 45;
			} else {
				separator = separator.charCodeAt(0);
			}
			
			var pThis = Base,
				charcode = pThis._ALPHA_CHAR_CODES,
				math = Math;
			var seq = 0;
			var seq0;
			var tmpArray = new Array(36);
			var idx = -1;
			
			while (seq < 8) 
			{
				tmpArray[++idx] = charcode[math.random() * 16 | 0];
				seq++;
			}
			seq = 0;
			while (seq < 3) 
			{
				tmpArray[++idx] = separator;//45 => "-", 95=> "_"
				seq0 = 0;
				while (seq0 < 4) 
				{
					tmpArray[++idx] = charcode[math.random() * 16  | 0];
					seq0++;
				}
				seq++;
			}
			tmpArray[++idx] = separator; //45 => "-", 95=> "_"
			// 끝에서 12자리을 random으로 처리하면 속도가 좀더 개선됨(10만건 생성 약 0.8초 ==> chrome)
			/*
			seq = 0;
			while (seq < 12) 
			{
				tmpArray[++idx] = charcode[math.random() * 16 | 0];
				seq++;
			}
			return prefix + String.fromCharCode.apply(null, tmpArray);
			*/
			// 원래 로직은 끝에서 12자리을 현재 time 구한 8자리 와 random 4자리를 조합한 처리임.(10만건 생성 약 1.3초 ==> chrome)
			/**/
			var tmpStr = (new Date()).getTime();
			tmpStr = ("0000000" + tmpStr.toString(16)).substr(-8);
			seq = 0;
			while (seq < 8) 
			{
				tmpArray[++idx] = tmpStr.charCodeAt(seq);
				seq++;
			}
			seq = 0;
			while (seq < 4) 
			{
				tmpArray[++idx] = charcode[math.random() * 16 | 0];
				seq++;
			}
			return prefix + String.fromCharCode.apply(null, tmpArray);
			
		},


		/**
		 * 입력된 값 또는 수식을 검사해 적당한 값을 반환.<br>
		 * decoce(비교값, CASE1, 결과값1 [, CASE2, 결과값2, ... ], 디폴트 값);<br>
		 * 표현식의 값이 기준값1이면 값1을 출력하고, 기준값2이면 값2를 출력한다.<br>
		 * 그리고 기준값이 없으면 디폴트 값을 출력한다.<br>
		 * @param {*} * 1. 비교값
		 * @param {*} * 2. CASE
		 * @param {*} * 3. 결과값 (2,3 반복)
		 * @param {*=} * (2,3 반복)
		 * @param {*=} * 4.디폴트값
		 * @return {*} decode에 의해서 선택된 값.
		 * @example
		 * trace(Base.decode("1", "1", "One", "2", "Two", "Default")); // output : One;
		 * 
		 * trace(Base.decode(100, 1, "일", 10, "십", 100, "백"));	// output : 백
		 *
		 * @memberOf Base
		 */		 
		decode: function() 
		{
			var i;
			var count = arguments.length;
			for( i = 1 ; i < count ; i+=2 )
			{
				if( arguments[0] === arguments[i] )
				{
					return arguments[i+1];
				}
			}
			
			return arguments[i-2];
		},

		/**
		 * value의 boolean 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} boolean 여부.
		 * @example
		 * trace(Base.isBoolean(true));	// output : true
		 * trace(Base.isBoolean("true"));	// output : false		 
		 * @memberOf Base
		 */
		isBoolean: function(value) 
		{
			return typeof value == 'boolean';
		}, 
		    
		/**
		 * value의 null 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} null 여부.
		 * @example
		 * trace(Base.isNull(null));	// output : true
		 * var a; // undefined
		 * trace(Base.isNull(a));	// output : false		
		 * trace(Base.isNull(""));	// output : false
		 * @memberOf Base
		 */
		isNull: function(value)
		{
			return value === null;
		},		     
		     
		     
		/**
		 * Form 내에서 지정된 접두문자열에 순번이 붙여진 ID 를 반환
		 * @public
		 * @param {form} prefix 순번 앞에 붙일 문자열
		 * @param {string} prefix 순번 앞에 붙일 문자열
		 * @return {string} id
		 * @example
		 *
		 * // this = Form
		 * trace(Base.getSequenceId(this, "Button")); // output : Button0
		 * trace(Base.getSequenceId(this, "Button")); // output : Button1
		 * 
		 * // this = Form
		 * trace(Base.getSequenceId(this, "chk_")); // output : chk_0
		 * trace(Base.getSequenceId(this, "chk_")); // output : chk_1
		 * 
		 * @memberOf Base
		 */		
		getSequenceId: function(form, prefix)
		{
			if ( Base.isEmpty(form) ) 
			{
				//trace({message:"1st argument doesn't exist !!", stack:true});
				return null;
			}
			
			if ( Base.isEmpty(prefix) ) 
			{
				//trace({message:"2nd argument doesn't exist !!", stack:true});
				return null;
			}
			
			if ( !(form instanceof Form) ) 
			{				
				//trace({message:"1st argument must be a Form !!", stack:true});
				return null;
			}
			
			var cache = form._sequenceIdCache;
			if ( Base.isEmpty(cache) )
			{
				cache = form._sequenceIdCache = {};
			}
			
			var sequence = cache[prefix];
			if ( Base.isEmpty(sequence) )
			{
				sequence = -1;
			}
			sequence++;
			
			cache[prefix] = sequence;
			
			return prefix + sequence;
		},		     
		 
		/**
		 * value의 undefined 여부 반환.
		 * @param {*} value 확인할 value.		 
		 * @return {boolean} undefined 여부.
		 * @example
		 * var a;
		 * trace(Base.isUndefined(a));	// output : true
		 *
		 * var a = "";
		 * trace(Base.isUndefined(a));	// output : false
		 * @memberOf Base
		 */
		isUndefined: function(value)
		{
			return value === undefined;
		},		     
		     
		     
		/**
		 * 주어진 두개의 인자에 대하여 동일한 값인지 확인한다.
		 * @public
		 * @param {*} obj1 비교하고자 하는 인자
		 * @param {*} obj2 비교하고자 하는 인자
		 * @return {boolean} 동일하면 true, 아니면 false
		 * @example
		 * // this = Form
		 * var a = {"id1": "apple","id": "kiwi",  "test": [1, 2], "a": Button00};
		 * var b = {"id": "kiwi", "id1": "apple", "test": [1, 2], "a": this};
		 * trace(Base.equals(a, b)); // output : false
		 * 
		 * var a = {"id1": "apple","id": "kiwi",  "test": [1, 2], "a": Button00};
		 * var b = {"id": "kiwi", "id1": "apple", "test": [1, 2], "a": Button00};
		 * trace(Base.equals(a, b)); // output : true
		 * 
		 * @memberOf Base
		 */	
		"equals": function(obj1, obj2)
		{
			if (obj1 === obj2)
			{
				return true;
			}
			if ( Base.isBoolean(obj1) && obj2 == null )
			{
				obj2 = !!obj2;
				return obj1 == obj12;
			}
			if ( Base.isBoolean(obj2) && obj1 == null )
			{
				obj1 = !!obj1;
				return obj1 == obj12;
			}
			if ( obj1 && obj2 )
			{
				if ( obj1.equals )
				{
					return obj1.equals(obj2);
				}
				if ( obj2.equals )
				{
					return obj2.equals(obj1);
				}
			}
			if (Base.isDate(obj1) && Base.isDate(obj2))
			{
				if ( obj1.getTime() == obj2.getTime() )
				{
					return true;
				}
				return false;
			}
			if (Base.isArray(obj1) && Base.isArray(obj2))
			{
				if (obj1.length !== obj2.length)
				{
					return false;
				}
				for (var i = 0, l = obj1.length; i < l; i++)
				{
					if (!Base.equals(obj1[i], obj2[i]))
						return false;
				}
				return true;
			}
			if (obj1 && (typeof obj1 === 'object') && obj1.hasOwnProperty
					&& obj2 && (typeof obj2 === 'object') && obj2.hasOwnProperty )
			{
				if (!Base._checkKeys(obj1, obj2) || !Base._checkKeys(obj2, obj1))
				{
					return false;
				}
				for (var i in obj1)
				{
					if (obj1.hasOwnProperty(i) && !Base.equals(obj1[i], obj2[i]))
					{
						return false;
					}
				}
				return true;
			}
			return obj1 == obj2;
		},		     
		    
		     
		/**
		 * 주어진 두개의 object들의 properties 가 동일 하지 check한다.
		 * Base.equals 함수에 사용된다.
		 * @private
		 * @param {object} o1 비교할 object
		 * @param {object} o2 비교할 object
		 * @return {boolean} 동일하면 true, 아니면 false
		 * @memberOf Base
		 */	
		"_checkKeys": function(o1, o2)
		{
			for (var i in o1)
			{
				if (o1.hasOwnProperty(i) && typeof o2[i] === 'undefined')
				{
					return false;
				}
			}
			return true;
		},		     
		     
		     
		/**
		 * 첫 값의 True/False를 검사해 그 결과에 따라 두번째 또는 세번째 값을 반환.
		 * @param {*} expr 비교할 값. expr의 값으로 True/False 여부를 확인합니다.
		 *                 expr이 Integer인경우 0이면 False아니면 True인식합니다.
		 * @param {*} trueValue expr이 True에 해당하는 값일 경우 Return 되는 값.
		 * @param {*} falseValue expr이 False에 해당하는 값일 경우 Return 되는 값.
		 * @return {*} expr에 따라 Return 된 값.
		 * @example
		 *
		 * trace(Base.iif(2-1=1, "True", "False")); // output : True
		 *
		 * var a = 98;
		 * var b = Base.iif(a > 100, 100, a);
		 * trace(b);	// output : 98
		 *
		 * @memberOf Base
		 */	
		iif: function(expr, trueValue, falseValue) 
		{
			return expr ? trueValue : falseValue;
		},	
			     

		/**
		 * yyyyMMdd형태의 날짜 문자열 여부.( 예 : "20111231" ).
		 * @param {string} value 확인할 value.
		 * @return {boolean} Date 여부.
		 * @example
		 * var a = "20130501";
		 * trace(Base.isStringDate(a));	// output : true 	 
		 * @memberOf Base
		 */
		isStringDate: function(value) 
		{
			var stringWrapper = new String(value);
			
			//[수정]http://www.playnexacro.com/questions/470/에코라이브러리-isstringdate-에서-윤년체크-실패-하였습니다
			value = stringWrapper.toString();
			
			if( value.length !== 8 ) return false;
			
			var iMonth  = Math.floor(stringWrapper.slice(4,6), 10);
			var iDate   = Math.floor(stringWrapper.slice(6,8), 10);
			
			if( iMonth < 1 || iMonth > 12 ) return false;
				
			if( iDate < 1 || iDate > Base.date.getLastDayOfMonth(value) ) return false;
			
			
			return true;
		},			     
			     
		     
    });

}
