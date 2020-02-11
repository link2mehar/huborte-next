
import User from './User';
import PleaseSignIn from './PleasesignIn';
const Profile = () => {


    return(
        <>
            <PleaseSignIn>
                <User>
                    {({data}) => {
                        if(data){
                            const {me} = data;
                            
                            return(
                                <>
                                
                                {me && (
                                    <>
                                        <div className="d-flex">
                                            <div>
                                                <h4>Welcome {me.name}</h4>
                                                <h5>Your Order details are :</h5>
                                                <div >

                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                </>
                            )
                        }
                        return <h1>Please login to view your profile</h1>
                    }}
                </User>
            </PleaseSignIn>
            
        </>
        
    )

}
export default Profile