export default function Header(){
    let name = "Veer";
    return( 
    <>
    <header>
        <h1>{`Welcome ${name} to CodeCraft Intranet`}</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="emp_mgmt.html">Employee Management</a></li>
            </ul>
        </nav>
    </header>
    </>
);
}