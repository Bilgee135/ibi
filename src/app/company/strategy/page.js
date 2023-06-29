import Format1 from "@/app/layouts/format1"
import Content from "../Content"

import data from "../company.json"

export default function Strategy(){
    let pData = {
        "title" : "",
        "heroimg" : "",
        "subtitle" : ""
    }
    let id = 4 //----------------------------------------------COMPANY STRATEGY ID: 4-------------------------//
    data.map(function(curlylist) {
        if ( curlylist["id"] === 4) {
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
