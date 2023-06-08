let celsius=document.getElementById("celsius");
let fahrenheit=document.getElementById("fahrenheit");
let kelvin=document.getElementById("kelvin");

function celToFar_Kel(){
	let tf=(parseFloat(celsius.value)*9/5)+32;
	let tk=(parseFloat(celsius.value))+273.15;
	fahrenheit.value=parseFloat(tf.toFixed(2));
	kelvin.value=parseFloat(tk.toFixed(2));
}
function farToCel_Kel(){
	let tc=(parseFloat((fahrenheit.value)-32)*5/9);
	let tfk=(parseFloat(tc))+273.15;
	celsius.value=parseFloat(tc.toFixed(2));
	kelvin.value=parseFloat(tfk.toFixed(2));
}
function kelToCel_Far(){
	let tkf=(parseFloat(kelvin.value-273.15)*9/5)+32;
	let tkc=(parseFloat(kelvin.value-273.15));
	fahrenheit.value=parseFloat(tkf.toFixed(2));
	celsius.value=parseFloat(tkc.toFixed(2));
}