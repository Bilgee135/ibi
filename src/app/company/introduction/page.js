import Format1 from "@/app/layouts/format1"
import Content from "../Content"

import data from "../company.json"

export default function Company(){
    let pData = {
        "title" : "",
        "heroimg" : "",
        "subtitle" : ""
    }
    let id = 0 //----------------------------------------------COMPANY INTRODUCTION ID: 0-------------------------//
    data.map(function(curlylist) {
        if ( curlylist["id"] === id) {
            pData = {
                "title" : curlylist["title"],
                "heroimg" : curlylist["heroimg"],
                "subtitle" : curlylist["subtitle"]
            }
        }
    })

    return (
        <Format1 Content={ Content } data={ pData } id={ id } />
    )
}
