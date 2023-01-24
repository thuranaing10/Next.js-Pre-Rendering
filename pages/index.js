import Link from 'next/link';

function Home(){
  return (
    <div>
        <h1>Next JS Pre Rendering</h1>
        <Link href="/users">
            Users
        </Link>
    </div>
  )
}

export default Home;