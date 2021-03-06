		var box = document.getElementById('display');
		var box2 = document.getElementById('display2');
		var history = document.getElementById('textHistory');
		var change = false;


	//FUNCTION FOR DISPLAYING A CARACTER/NUMBER
		var displayKey = function(x){
			box.value += x;

			if(x == 'C'){
				box.value = '';
				box2.value = '';
			}
		}

	//FUNCTION FOR SAVING SOME VALUES ON DISPLAY2
		var saveValue = function(x){
			box2.value += box.value + x;
			box.value = '';
		}

	//FUNCTION FOR - BUTTON
		var btnsub = function (){
			if(box.value == '0' || box.value == '')
			box.value = '-';
			else
			saveValue('-');
		}

	//FUNCTION FOR + BUTTON
		var btnadd = function(){
			saveValue('+');
		}

	//FUNCTION FOR / BUTTON	
		var btndiv = function(x){
			saveValue(x);
		}

	//FUNCTION FOR %(Mod) BUTTON
		var btnrst = function(){
			saveValue('%');
		}

	//FUNCTION FOR * BUTTON
		var btnmul = function(X){
			saveValue(x);
		}

	//FUNCTION FOR = BUTTON
		var btnequal = function(){
			//find the operation we want to do
			var str1 = box2.value;
			var len = str1.length-1;
			var x = str1.substring(len,len+1);

			//verify and do the correct calculation
			if(x == '^'){
				btnequal2();
			}
			else{
			var expresion = box2.value + box.value;
			box.value =eval(expresion);
			document.history.textHistory.value += expresion + ' = ' + box.value + '\n';
			box2.value = '';
			}
		}

	//FUNCTION FOR CALCULATE X at Y
		var btnequal2 = function(){
			var str1 = box2.value;
			var len = str1.length-1;

			var x = Number(str1.substring(0,len));
			var y = box.value;

			var result = Math.pow(x,y);

			box.value = result;
			document.history.textHistory.value += str1 + y + ' = ' + result + '\n';
			box2.value = '';
		}

	//FUNCTION FOR SQRT BUTTON
		var btnsqrt = function(){
			var x = box.value;
			var result = Math.sqrt(x);

			box.value = result;
			document.history.textHistory.value += '√' + x + ' = ' + result + '\n';
		}

	//FUNCTION FOR SQUARE BUTTON
		var btnsquare = function(){
			document.history.textHistory.value += box.value;
			var x = box.value;
			var result = Math.pow(x,2);

			box.value = result;
			document.history.textHistory.value += '^2 = ' + result + '\n';
		}

	//FUNCTION FOR XatY BUTTON
		var btnxaty = function(){
			saveValue('^');
		}

	//FUNCTION FOR FACTORIAL BUTTON
		var btnfact = function(){
			var fact=1;
			var n = box.value;

			if(n == 0 || n == 1){
				box.value = 1;
				document.history.textHistory.value += n + '! = ' + 1 +'\n';
			}else{
				for (var i = 1;i<=n;i++)
					fact *= i;

				box.value = fact;
				document.history.textHistory.value += n + '! = ' + fact + '\n';
			}
		}

	//FUNCTION FOR DELET BUTTON/BACKSPACE BUTTON
		var btndel = function(){
				var v = box.value;
				var len = v.length-1;
				var newV = v.substring(0,len);
				box.value = newV;
			}

	//FUNCTION FOR SHOW AND HIDE THE HISTORY OF OPERATION DONE IN CALCULATOR
		var popUpHistory =function(){
		var currentName = document.getElementById('textHistory');

		if (currentName.style.visibility != 'visible')
			currentName.style.visibility = 'visible' ;
		else
			currentName.style.visibility = 'hidden' ;
		}

	//FUNCTION FOR CHANGING BUTTONS 
		var changeButton = function (){
			var a = document.getElementById('facthex');
			var b = document.getElementById('xybin');
			var c = document.getElementById('negate');

			if(!change){
				a.value ='HEX';
				a.onclick = hexConvertion;
				b.value = 'BIN';
				b.onclick = binaryConvertion;
				c.value = '±';
				c.onclick = btnneg;
				change = true;
			}

			else{
				a.value = 'n!';
				a.onclick = btnfact;
				b.value = 'x^y';
				b.onclick = btnxaty;
				c.value = '%';
				c.onclick = btnrst;
				change = false;
			}
		}

	//FUNCTION FOR NEGATE BUTTON
		var btnneg = function(){
			var x = box.value;
			var x2;
			var stringHistory;

			if(x > 0){
				x2 = ~x + 1;
				stringHistory = 'negate(' + x + ')';
				box.value = x2 ;
				document.history.textHistory.value +=  stringHistory + ' = ' + x2 + '\n';
			}else if (x < 0){
				x2 = ~x + 1;
				stringHistory = 'negate(' + x + ')';
				box.value = x2 ;
				document.history.textHistory.value += stringHistory + ' = ' + x2 + '\n';
			}else if (x == 0){
				stringHistory = 'negate(' + x + ')';
				box.value = x ;
				document.history.textHistory.value += stringHistory + ' = ' + x + '\n';
			}
		}

	//FUNCTION FOR HEXA CONVERTION 
		var hexConvertion = function (){
			var number = box.value;
			var rem;
			var valueArray = [];
			var digits = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

			if(number >= 0){
				//algoritmul initial -- mai jos am utilizat o functie din JS care face conversia
				while(number > 0){
					rem = number % 16;
					number = Math.floor(number / 16);
					valueArray.push(rem);
				}
					var i = valueArray.length;
					var j = 0;
					var hexValue = [];

				while (i > 0){
					hexValue[j] = digits[valueArray.pop()];
					j++;
					i--;
				}

				box2.value = hexValue.join("");
				document.history.textHistory.value += 'HEX: ' + hexValue.join("") + '\n';
			}else if (number < 0){
				//am utilizat in cazul de fata si functia de conversie care o pune la dispozitie JS
				valueArray = (number).toString(16);
				document.history.textHistory.value += 'HEX: ' + valueArray.join("") + '\n';
			}
		}

	//FUNCTION FOR BINARY CONVERTION
		var binaryConvertion = function(){
			var number = box.value;
			var rem ;
			var bitsArray = [];
			var negbits;
			var i = 0;
			var aux = [];
			
			if(number > 0)
			{
				//la fel am uitilizat functia de conversie 
				aux = (number >>> 0).toString(2);
				document.history.textHistory.value += 'BIN: ' + aux +'\n';
				
				//aici am lasat si algoritmul pe care l-am implementat initial
				/*do{
					rem = number % 2;
					bitsArray.push(rem);
					number = Math.floor(number / 2);
				}while( number > 0);
				bitsArray.push(number);

				bitsArray.reverse();

				box2.value = bitsArray.join("");
				document.history.textHistory.value += 'BIN: ' + bitsArray.join("");
				document.history.textHistory.value +='\n';*/
			}else if(number < 0){
					
				aux = (-3 >>> 0).toString(2);
				box2.value = aux;
				document.history.textHistory.value += 'BIN: ' + aux +'\n';
			}
			
		}