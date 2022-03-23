import useReadingProgress from '../Custom-Hooks/useReadingProgress';

const NavBar = () => {
    // Invoke the hook
    const value = useReadingProgress();
    // console.log(value);

    return(
        <nav className="bg-dark py-3 text-light sticky-top">
            <div className="container d-flex justify-content-between align-items-center">
                <a href="#">
                    Dev Sprint
                </a>
                <div className="d-flex">
                    <ul>
                        <li>
                            Home 
                        </li>
                    </ul>
                    <ul>
                        <li>
                            About 
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Services 
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Contact 
                        </li>
                    </ul>
                </div>
            </div>
            <span
                style={{transform:`translateX(${value-100}%)`}}
                className='progressBar'
            />
        </nav>
    )
}

export default NavBar