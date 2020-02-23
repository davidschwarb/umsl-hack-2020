async function scraperFunction(){
    const thing ={
        eventNameReturn : '',
        eventLocationReturn : ''
    }
        
    
    const axios = require('axios')
    const cheerio = require('cheerio')
    
    const response = await axios.get('https://myengage.umsl.edu/events.rss')
    
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
            thing.eventNameReturn = titleText
        }
    }
    
    const eventLocation = $('item location')
    
    for (let i = 0; i < 1; i++) {
        const titleSpan = $(eventLocation[i])
    
        if(titleSpan){
            const titleText = $(titleSpan).text()
    
            console.log(titleText)
            thing.eventLocation = titleText
        }
    }
        const eventStart = $('item start')
        for (let i = 0; i < 1; i++) {
            const titleSpan = $(eventStart[i])
            if(titleSpan){
                const titleText = $(titleSpan).text()
                console.log(titleText)
                thing.eventStart = titleText
            }
        }
        const eventEnd = $('item end')
        for (let i = 0; i < 1; i++) {
            const titleSpan = $(eventEnd[i])
            if(titleSpan){
                const titleText = $(titleSpan).text()
                console.log(titleText)
                thing.eventEnd = titleText
            }
    }
    
    return thing
    }
    module.exports= scraperFunction