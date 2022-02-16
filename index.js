console.log("HI ABHI");
//e98644fc57974247ab9d43d20a62a3f3
let newsAccordian=document.getElementById('newsAccordian');

const xhr=new XMLHttpRequest();

xhr.open('GET','https://newsapi.org/v2/everything?q=Apple&from=2022-02-16&sortBy=popularity&apiKey=e98644fc57974247ab9d43d20a62a3f3',true);


xhr.onload=function()
{
 if (this.status===200)
    {
    let json=JSON.parse(this.responseText);     
    let articles=json.articles;
    console.log(articles);
    let newsHtml="";
    articles.forEach(function(element,index) 
    {
    
                let news=`<div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    <b><span class="badge bg-success">Booletines-${index+1}</span></b><br>${element["title"]}
                    </button>
                </h2>
        <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    
                   ${element["content"]} <a href="${element["url"]}" target="_blank">Read More</a> 
                </div>
        </div>
    </div>`
    newsHtml+=news;
});
newsAccordian.innerHTML=newsHtml;
}
else
{
    console.log("Error");
}
}





xhr.send();









