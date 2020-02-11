import Shop from '../components/Shop'


const ShopPage = props => {


    return(
            <Shop page = {parseFloat(props.query.page) || 1}/>
    )

}
export default ShopPage