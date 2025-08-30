/*
One flexible way to implement this is to store the format info separately besides the user input in plain text, and connect them through the indices.
In above example, we can use following data structure.

{
  text: 'Shaku syntax is now supported on https://t.co/UpkmJ7yGKG! Give it a try to annotate your code ! kudos to @JSer_ZANP for making such a great tool !',
  entities: {
    "urls": [
      {
        "displayUrl": "BFE.dev",
        "url": "https://t.co/UpkmJ7yGKG",
        "indices": [33, 56]
      }
    ],
    "mentions": [
      {
        "screenName": "JSer_ZANP",
        "indices": [105, 115]
      }
    ]
  }
}
You are now required to create a function to render above data structure into html string. The fields should explain by itself.

There is no emoji in the text. You don't need to worry about the index offset.
For mention, you should redirect to https://x.com/{screeName}
There are no overlaps within the entities.
 */
// o/p- Shaku syntax is now supported on <a href="https://t.co/UpkmJ7yGKG">BFE.dev</a>! Give it a try to annotate your code ! kudos to <a href="https://x.com/JSer_ZANP">@JSer_ZANP</a> for making such a great tool !

let input = {
    text: 'Shaku syntax is now supported on https://t.co/UpkmJ7yGKG! Give it a try to annotate your code ! kudos to @JSer_ZANP for making such a great tool !',
    entities: {
        "urls": [
            {
                "displayUrl": "BFE.dev",
                "url": "https://t.co/UpkmJ7yGKG",
                "indices": [33, 56]
            }
        ],
        "mentions": [
            {
                "screenName": "JSer_ZANP",
                "indices": [105, 115]
            }
        ]
    }
};
function createLink(displayUrl,url){
    return  `<a href="${url}">${displayUrl}</a>`
}
function createMentions(screenName){
    const url= `https://x.com/${screenName}`;
    return `<a href="${url}">@${screenName}</a>`
}
function renderTextWithEntities(text, entities) {
    const urlsArr=entities.urls;
    const mentionsArr=entities.mentions;
    let result=[];
    for(let i=0;i<urlsArr.length;i++){
        let convertedLink=createLink(urlsArr[i].displayUrl,urlsArr[i].url)
        result.push({
            html:convertedLink,
            start:urlsArr[i].indices[0],
            end:urlsArr[i].indices[1]
        })
    }
    for(let i=0;i<mentionsArr.length;i++){
        let convertedLink=createMentions(mentionsArr[i].screenName)
        result.push({
            html:convertedLink,
            start:mentionsArr[i].indices[0],
            end:mentionsArr[i].indices[1]
        })
    }
    result=result.sort((a,b)=>a.start-b.start);
    let ans="";
    let prev=0;
    for (let i = 0; i < result.length; i++) {
        ans+=text.slice(prev,result[i].start);
        ans+=result[i].html;
        prev=result[i].end;
    }
    ans+=text.slice(prev)
    return ans;
}

console.log(renderTextWithEntities(input.text,input.entities));

