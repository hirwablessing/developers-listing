import Link from 'next/link';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';

function NotFound() {
    const router = useRouter();
    
    useEffect(() => {
        
        setTimeout(() =>{
            router.push("/")
        },300)
        
    }, [])
    return (
        <>
        <Head>
        <title>Developer list | About page</title>
        <meta name="description" content="developers list"/>
      </Head>
        <div className="notFound">
            <h1>Oooops....</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link> and try again.</p>
        </div>
        </>
    )
}

export default NotFound
