// JavaScript Document
// Give the user their income every 5 seconds
var money = 1000;
var research = 1;
var car_research_cost = 1000;
var tool_research_cost = 75;
/*
var bank_money = 0;
var bank_level = 1;
*/
//Nicks Dongle
/*
var car_upgrade

function disable_car_button() {
	document.getElementById("nk")
if "nk" 
	}
*/

function generate() {
	money += 100 * research;
	update();
}
//CAR RESEARCH
function research_car() {
	if(money >= car_research_cost) {
		research = research + 0.1;
		money -=car_research_cost;
		car_research_cost *= 1.1;
		update();
	}
	else {
		alert("you cant afford that");
	}
	
}
//TOOL REASEARCH
function research_tool() {
	if(money >= tool_research_cost) {
		research = research + 0.01;
		money -=tool_research_cost;
		tool_research_cost *= 1.01;
		update();
	}
	else {
		alert("you cant afford that");
	}
}
/*
//BANK
function put_money_in() {
	var input = Number(prompt("How much money would you like to put in?"));
	if(input>money) {
		alert("you do not have enough money");
	}
	else {
		money -=input;
		bank_money = bank_money + input;
	}
	update();
}

function take_money_out() {
	var input = Number(prompt("How much money would you like to withdraw?"));
	if(input>bank_money) {
		alert("you do not have that much money in the bank");
	}
	else {
		money = money + input;
		bank_money -=input;
	}
	update();
}
/*
function bank_generate() {
	*/
// update the value stored in javascript onto the page.
function update() {
	document.getElementById("d").value = money.toFixed(2);
	//document.getElementById("b").value = bank_money.toFixed(2);
	setCookie();
}
 
 
window.onload = setInterval(generate, 5000);

// COOKIE	

function setCookie() {
    var exdays = 365;
	var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = "money=" + money + ";" + expires;
    document.cookie = "research=" + research + ";" + expires;
	document.cookie = "car_research_cost=" + car_research_cost + ";" + expires;
	document.cookie = "tool_research_cost=" + tool_research_cost + ";" + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function loadCookies() {
	money = Number(getCookie("money"));
	research = Number(getCookie("research"));
	car_research_cost = Number(getCookie("car_research_cost"));
	tool_research_cost = Number(getCookie("tool_research_cost"));
	update();
}

function clearCookies() {
	document.cookie = "money=1000";
	document.cookie = "research=1";
	document.cookie = "car_research_cost=1000";
	document.cookie = "tool_research_cost=75";
	location.reload();
}
