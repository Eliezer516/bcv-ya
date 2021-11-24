const $ = element => document.querySelector(element);


fetch("https://s3.amazonaws.com/dolartoday/data.json")
	.then(res => res.json())
	.then(res => {
		$("#dolarBCV").innerText   = res.USD.promedio_real
		$("#dolarToday").innerText = res.USD.dolartoday
	})