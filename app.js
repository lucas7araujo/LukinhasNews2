const dados = {
  "noticias": [
    {
      "id": 1,
      "titulo": "Inteligência Artificial Transforma o Mercado de Trabalho",
      "descricao": "Setores como saúde, finanças e varejo adotam soluções baseadas em IA para aumentar a produtividade.",
      "conteudo": "Relatórios recentes mostram que 68% das empresas no Brasil já utilizam inteligência artificial em algum nível de suas operações. A tecnologia tem sido usada para automatizar processos, analisar grandes volumes de dados e aprimorar o atendimento ao cliente. Especialistas apontam que a IA criará novas profissões, mas exigirá requalificação de trabalhadores.",
      "categoria": "Economia",
      "autor": "Mariana Lemos",
      "destaque": true,
      "data": "17/04/2025",
      "imagem_pincipal": "img/ia.avif",
      "imagens_complementares": [
        { "id": 1, "src": "img/iac1.avif", "descricao": "IA em centros de atendimento" },
        { "id": 2, "src": "img/3d-render-technology-background-with-code-male-head.jpg", "descricao": "Painéis com análise de dados" }
      ]
    },
    {
      "id": 2,
      "titulo": "Cruzeiro Vence Clássico e Sobe na Tabela do Brasileirão",
      "descricao": "Equipe celeste conquista vitória importante e anima torcida no Mineirão.",
      "conteudo": "O Cruzeiro venceu o clássico contra o Atlético-MG por 2 a 1 neste domingo, em partida válida pela 3ª rodada do Campeonato Brasileiro. Com o resultado, a equipe mineira chega a 7 pontos e sobe para a quarta posição na tabela. Os gols foram marcados por Matheus Pereira e Juan Dinenno, enquanto Hulk descontou para o Galo.",
      "categoria": "Esportes",
      "autor": "Rafael Soares",
      "destaque": true,
      "data": "14/05/2024",
      "imagem_pincipal": "img/futebol.jpg",
      "imagens_complementares": [
        { "id": 1, "src": "img/cruzeiroc1.webp", "descricao": "Momento do gol de Matheus Pereira" },
        { "id": 2, "src": "img/cruzeiroc2.avif", "descricao": "Torcida celeste no Mineirão" }
      ]
    },
    {
      "id": 3,
      "titulo": "Venda de Carros a Combustão Cai 23% no Primeiro Trimestre",
      "descricao": "Queda nas vendas reflete aumento da procura por modelos híbridos e elétricos.",
      "conteudo": "Segundo dados da Fenabrave, as vendas de veículos movidos exclusivamente a gasolina ou etanol caíram 23% no primeiro trimestre de 2025 em comparação com o mesmo período de 2024. Em contrapartida, os carros híbridos cresceram 35% e os elétricos 48%. Incentivos fiscais e preocupação ambiental impulsionam a mudança no comportamento dos consumidores.",
      "categoria": "Negócios",
      "autor": "Lucas Martins",
      "destaque": true,
      "data": "12/03/2025",
      "imagem_pincipal": "img/carros.jpg",
      "imagens_complementares": [
        { "id": 1, "src": "img/carrosc1.jpg", "descricao": "Concessionária com frota variada" },
        { "id": 2, "src": "img/carrosc2.webp", "descricao": "Cliente testando carro elétrico" }
      ]
    },

  ]
};

let txtHTML = '';
let indicatorsHTML = '';

for (let i = 0; i < dados.noticias.length; i++) {
  let noticia = dados.noticias[i];

  indicatorsHTML += `
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" 
            class="${i === 0 ? 'active' : ''}" aria-current="${i === 0 ? 'true' : 'false'}" 
            aria-label="Slide ${i + 1}"></button>
    `;

  txtHTML += `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
            <img src="${noticia.imagem_pincipal}" class="d-block w-100" alt="${noticia.titulo}" style="height: 60vh; object-fit: cover;">
            <div class="carousel-caption">
              <h5 class="card-title fs-3 fw-bold">
              <a href="detalhes.html?id=${noticia.id}" class="text-decoration-none text-light">${noticia.titulo}</a></h5>
              <p class="fs-3">${noticia.descricao}</p>
            </div>
        </div>
    `;
}

document.getElementById('carousel-indicators').innerHTML = indicatorsHTML;
document.getElementById('carousel-inner').innerHTML = txtHTML;


let noticias2 = [
  {
    "id": 4,
    "titulo": "Tecnologia 5G Chega a Capitais Brasileiras",
    "descricao": "Expansão da cobertura 5G promete transformar a comunicação no Brasil.",
    "conteudo": "A implementação do 5G no Brasil avançou e agora já cobre mais de 10 capitais, com previsão de expansão para o resto do país até 2026. O novo serviço promete internet mais rápida e conectividade sem interrupções, transformando setores como saúde, educação e entretenimento.",
    "categoria": "Tecnologia",
    "autor": "João Souza",
    "destaque": false,
    "data": "16/02/2025",
    "imagem_pincipal": "img/5g.jpeg",
    "imagens_complementares": [
        { "id": 1, "src": "img/5gc1.jpg", "descricao": "Infraestrutura do 5G em uma das capitais" },
        { "id": 2, "src": "img/5gc2.png", "descricao": "Teste de conexão 5G em grande velocidade" }
    ]
},
{
    "id": 5,
    "titulo": "Estudo Revela Que o Home Office Veio Para Ficar",
    "descricao": "Trabalhar de casa continua sendo tendência em diversas empresas brasileiras.",
    "conteudo": "Pesquisas apontam que 72% das empresas brasileiras planejam adotar o home office como modelo permanente ou híbrido. Especialistas indicam que as tecnologias de videoconferência e plataformas de produtividade estão se tornando indispensáveis para manter a eficiência no trabalho remoto.",
    "categoria": "Trabalho",
    "autor": "Fernanda Costa",
    "destaque": true,
    "data": "15/04/2025",
    "imagem_pincipal": "img/homme.avif",
    "imagens_complementares": [
        { "id": 1, "src": "img/hommec1.jpg", "descricao": "Escritório adaptado para home office" },
        { "id": 2, "src": "img/hommec2.webp", "descricao": "Trabalho remoto em ambiente doméstico" }
    ]
},
{
    "id": 6,
    "titulo": "Mercado de Alimentos Orgânicos Cresce 18% no Brasil",
    "descricao": "A demanda por alimentos orgânicos tem aumentado nos últimos anos.",
    "conteudo": "De acordo com a Associação Brasileira de Organizações de Agricultura Orgânica (ABA), o mercado de alimentos orgânicos no Brasil cresceu 18% em 2024. O aumento é impulsionado pela crescente preocupação com a saúde e a sustentabilidade, além da mudança no comportamento do consumidor que busca produtos livres de agrotóxicos.",
    "categoria": "Economia",
    "autor": "Luana Martins",
    "destaque": true,
    "data": "14/04/2025",
    "imagem_pincipal": "img/organico.jpeg",
    "imagens_complementares": [
        { "id": 1, "src": "img/orgc1.jpeg", "descricao": "Feira de alimentos orgânicos" },
        { "id": 2, "src": "img/orgc2.jpeg", "descricao": "Produtos frescos em mercado orgânico" }
    ]
},
{
    "id": 7,
    "titulo": "Novo Projeto de Energia Solar é Iniciado em Minas Gerais",
    "descricao": "A nova usina mineira promete fornecer energia limpa para 1 milhão de pessoas.",
    "conteudo": "A construção da maior usina solar de Minas Gerais foi iniciada nesta semana. Com capacidade para fornecer energia limpa para mais de 1 milhão de pessoas, o projeto é um marco na transição para fontes renováveis de energia no Brasil.",
    "categoria": "Meio Ambiente",
    "autor": "Marcos Pinto",
    "destaque": false,
    "data": "13/01/2025",
    "imagem_pincipal": "img/energia-solar.webp",
    "imagens_complementares": [
        { "id": 1, "src": "img/solarc1.jpg", "descricao": "Obras da usina solar em Minas" },
        { "id": 2, "src": "img/solarc2.webp", "descricao": "Instalação de painéis solares" }
    ]
},
{
    "id": 8,
    "titulo": "Festival Gastronômico Atrai Turistas de Todo o Brasil",
    "descricao": "Evento culinário em São Paulo reúne chefs renomados e mais de 50 mil visitantes.",
    "conteudo": "O Festival Gastronômico de São Paulo, realizado neste final de semana, atraiu mais de 50 mil visitantes de diferentes partes do Brasil. Chefs renomados e pequenas empresas locais apresentaram suas delícias, promovendo a cultura e o turismo da cidade.",
    "categoria": "Cultura",
    "autor": "Isabela Rocha",
    "destaque": true,
    "data": "2025-04-12",
    "imagem_pincipal": "img/festival.jpg",
    "imagens_complementares": [
        { "id": 1, "src": "img/gastroc1.jpg", "descricao": "Chef renomado preparando prato" },
        { "id": 2, "src": "img/gastroc2.jpg", "descricao": "Público no festival de gastronomia" }
    ]
},
{
    "id": 9,
    "titulo": "Avanços na Medicina: Novo Tratamento para o Câncer de Pele",
    "descricao": "Pesquisadores apresentam terapia promissora contra melanoma.",
    "conteudo": "Cientistas brasileiros desenvolveram um novo tratamento para o câncer de pele, mais especificamente o melanoma, que tem mostrado resultados positivos em testes clínicos. O tratamento utiliza uma combinação de imunoterapia e terapias direcionadas, oferecendo novas esperanças para pacientes com esse tipo de câncer.",
    "categoria": "Saúde",
    "autor": "Ricardo Almeida",
    "destaque": false,
    "data": "2025-04-11",
    "imagem_pincipal": "img/medicins.webp",
    "imagens_complementares": [
        { "id": 1, "src": "img/medc1.jpg", "descricao": "Pesquisadores em laboratório" },
        { "id": 2, "src": "img/medc2.jpg", "descricao": "Consulta médica sobre melanoma" }
    ]
},
];

let txtHTML2 = '';

for (let i = 0; i < noticias2.length; i++) {
  let noticia = noticias2[i];

  txtHTML2 += `
    <div class="col">
        <div class="card shadow rounded border-4 border-primary m-2 rounded-3 text-center">
            <img src="${noticia.imagem_pincipal}" class="card-img-top w-50 h-50 p-2 mx-auto d-block" alt="...">
            <div class="card-body">
              <h5 class="card-title fs-3 fw-bold">
              <a href="detalhes.html?id=${noticia.id}" class="text-decoration-none text-dark">${noticia.titulo}</a>
              </h5>
              <p class="card-text fs-3">${noticia.descricao}</p>
            </div>
        </div>
    </div>
  `;
}

document.getElementById('card-post').innerHTML = txtHTML2;
