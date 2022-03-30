import Link from 'next/link'

function login(){
    return(
<body className="page">

<nav className="nav-background" id="top"> 
    <div className="nav-sections">
        <Link href="/">
        <a className="nav-spacing">Home</a>
        </Link>
    </div>
</nav>

    <form className="info-container">
        <div className="title-text">Login</div>

        <div className="block">
            <div className="block">
            <label className="block">Username</label>
            <input className="input" type="text" placeholder="Enter Username" required></input>
            </div>

            <div className="block">
            <label className="block pt-10">Password</label>
            <input className="input" type="password" placeholder="Enter Password" required></input>
            </div>

        <button className="button-layout button-style bg-[#1f56ec] m-3" ><a href="/dashboard">login</a></button>
        </div>

        <div ><a>Create an account <a className="text underline" href="register">here</a></a></div>
    </form>
</body>
    )
}

export default login