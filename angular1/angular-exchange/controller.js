var exchangeApp=angular.module('exchangeApp',['exchangeService']);

exchangeApp.controller('exchangeCtrl',['currencyConverter',function exchangeCtrl(currencyConverter){
	this.number=1;
	this.price=2;
	this.inCurr='EUR';

	this.currencies=currencyConverter.currencies;
	this.usdToForeignRates={
		USD:1,
		EUR:0.74,
		CNY:6.09
	};
	this.total=function total(outCurr){
		return currencyConverter.convert(this.number*this.price,this.inCurr,outCurr);
	};
	
	this.pay=function pay(){
		alert("谢谢");
	}


}]);