import Link from "next/link";

function PostList({posts}){
    console.log(posts);
    return (
        <div>
            <h1>Post List</h1>
            {
                posts.map((post) => {
                    return (
                        
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`} passHref>
                                <h4>{post.id}. {post.title}</h4>
                            </Link>
                            <hr />
                        </div>
                       
                    )
                })
            }
        </div>
    )
}

export default PostList;

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
        props: {
            posts: data
        }
    }
}