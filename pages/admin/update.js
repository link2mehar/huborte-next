import UpdateItem  from '../../components/UpdateItem'
import Adminlayout from '../../components/Adminlayout'

const UpdateProduct = props =>{


    return(
        <Adminlayout>
            <UpdateItem id ={ props.query.id} />
        </Adminlayout>
        
    )

}
export default UpdateProduct;