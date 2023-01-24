function ArticleListByCategory({articles, category}){
    return (
        <div>
            <h2>Showing news for category <i>{category}</i></h2>
            {
                articles.map((article) => {
                    return (
                        <div key={article.id}>
                            <h2>
                                {article.id} {article.title}
                            </h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ArticleListByCategory;

export async function getServerSideProps(context){
    const {params} = context;
    const {category} = params;

    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json();

    return {
        props: {
            articles: data,
            category
        }
    }
}