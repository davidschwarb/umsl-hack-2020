

const axios = require('axios')
const cheerio = require('cheerio')

axios.get('https://myengage.umsl.edu/events.rss').then((response) => {

const $ = cheerio.load(response.data.replace(/<!\[CDATA\[([\s\S]*?)\]\]>(?=\s*<)/gi, "$1"),{
    xmlMode: true
})

const eventTitle = $('item div')

for (let i = 0; i < 2; i++) {
    const titleSpan = $(eventTitle[i]).find('.p-name')[0]

    //console.log(eventTitle[i].children)

    if (titleSpan){
        const titleText = $(titleSpan).text()

        console.log(titleText)
    }
}

const eventLocation = $('item location')

for (let i = 0; i < 1; i++) {
    const titleSpan = $(eventLocation[i])

    if(titleSpan){
        const titleText = $(titleSpan).text()

        console.log(titleText)
    }

}


})