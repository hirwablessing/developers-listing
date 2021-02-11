import Link from "next/link";
import Image from "next/image";

function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <Image src="/logo.png" width={120} height={75}/>
                </div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/developers"><a>Developer listing</a></Link>
            </nav>
        </div>
    )
}

export default Navbar
