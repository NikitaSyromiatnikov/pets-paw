/** 
*   @returns a simple component to render text
*
*   Has no params
*      
*   Text is defined inside the component but it's unique
*   so I guess there is no need to get the text from props or 
*   Application state
*/
const SidebarText = () => {
    const title = 'Hello!';
    const subtitle = `It's just a pet project. React Redux`;
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