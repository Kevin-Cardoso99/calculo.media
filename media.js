<meta charset="UTF-8">

<script>

	function pulaLInha () {

		document.write("<br>");

	}

	function mostra(frase) {

		document.write(frase);
		pulaLInha(); 
	}

	function calculaMedia(media, n1, n2, n3, n4) {

	return (n1 + n2 + n3 + n4) / media
	}


	var nome = prompt("Qual seu nome?");
	var notas = parseInt(prompt(nome + ", quantas notas você tem?"))
	var nota1 = parseInt(prompt(nome +", informa a primeira nota: "));
	var nota2 = parseInt(prompt(nome + ", informe a segunda nota: "));
	var nota3 = parseInt(prompt(nome + ", informe a terceira nota: "));
	var nota4 = parseInt(prompt(nome + ", informe a quarta nota: "))

	mediaTotal = calculaMedia(notas, nota1, nota2, nota3, nota4);

	alert("Sua média final é: " + mediaTotal);

	





	</script>
