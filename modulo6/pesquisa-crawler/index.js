const cheerio = require('cheerio')
const axios = require('axios')

const url = "http://applicant-test.us-east-1.elasticbeanstalk.com/"

// const textoHtml = `
// <html>
// <head>
// <title> Lista de aprovados</title>
// </head>
// <ul id="nomes">
// <li class="primeiro"> Gabriel</li>
// <li class="segundo"> Pedro</li>
// <li class="terceiro"> Ana</li>
// </ul>
// <body>
// </body>
// </html>
// `
// const $ = cheerio.load(textoHtml)

// const dados = $('.primeiro').text()

// console.log(dados)

const getResponse = async ()=>{
    try {
        
        const response = await axios.get("https://www.labenu.com.br/")
        const $ = cheerio.load(response.data)

        const dado = $('div .heading-68').text()
        
        console.log(dado)

    } catch (error) {
        console.log(error)
    }
}

getResponse()


