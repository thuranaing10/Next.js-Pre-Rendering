function NewsArticleList({articles}){
    return (
        <div>
            <h1>List of News Atricle</h1>
            {
                articles.map((article) => {
                    return (
                        <h2 key={article.id}>
                            {article.id} {article.title} | {article.category}
                        </h2>
                    )
                })
            }
        </div>
    )
}

export default NewsArticleList

export async function getServerSideProps(){
    const response = await fetch("http://localhost:4000/news");
    const data = await response.json();

    return {
        props:{
            articles: data
        }
    }
}