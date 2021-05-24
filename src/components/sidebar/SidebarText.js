/*
*   A simple component to render text
*
*   Has no params
*      
*   Text is defined inside the component but it's unique
*   so I guess there is no need to get the text from props or 
*   Application state
*/
const SidebarText = () => {
    const title = 'Hello intern!';
    const subtitle = 'Welcome to MSI Frontend test 2021'
    const text = 'Lets start using The Dogs Api';

    return (
        <div className="sidebar-text">
            <h1 className="sidebar-text-title">{title}</h1>
            <p className="sidebar-text-subtitle">{subtitle}</p>
            <p className="sidebar-text-text">{text}</p>
        </div>
    );
}

export default SidebarText;