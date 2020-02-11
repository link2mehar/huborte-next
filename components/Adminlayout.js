import Adminheader from './Adminheader.js'
import PleaseSignIn from './PleasesignIn';
import Permissions from './Permissions';
const Adminlayout = props =>{

    return(
        <div>
            <PleaseSignIn>
                <Permissions>
                    <Adminheader />
                    {props.children}
                </Permissions>
            </PleaseSignIn>
        </div>
        
    )
}
export default Adminlayout