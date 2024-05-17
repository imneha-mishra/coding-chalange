const Books=[
    {
        title:"The Great Gatsby",
        author:"F. Scott Fitzgerald",
        year:1925,
    },
    {
        title:"The Kill a Mockingbird",
        author:"Harper Lee",
        year:1960,
    },
    {
        title:"Who are you?",
        author:"George Orewell",
        year:1949,
    },
    {
        title:"Pride and Prejudice",
        author:"Jane Austen",
        year:1813,
    },
];

function logTitle(title){
    title.sorts();
    console.log(title.join(","))
}

function extractTitles(Books,callback){
    const title=Books.map((Book)=>Book.title)
    callback(titles)
}
extractTitles(Books,logTitle);


