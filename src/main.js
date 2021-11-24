const $ = element => document.querySelector(element);


fetch("https://s3.amazonaws.com/dolartoday/data.json")
	.then(res => res.json())
	.then(res => {
		console.log(res.USD.promedio_real)
		console.log(res.EUR.sicad1)
		$("#dolar").innerText = res.USD.promedio_real
		$("#euro").innerText = res.EUR.sicad1
	})