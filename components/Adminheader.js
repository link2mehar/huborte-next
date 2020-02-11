import Link from 'next/link';
import styled from 'styled-components'

const Ul = styled.ul`
    list-style:none;
    margin:0;
    padding:0;
    display:flex;
    a{
        color:#000 !important;
    }

`

const Adminheader = () => {

    return(
        <nav>
            <Ul>
                <li>
                    <Link href="/admin" >Dashboard</Link>   
                </li>
                <li>
                    <Link href="/admin/products" >All products</Link>   
                </li>
                <li>
                    <Link href="/admin/add_product" >Add product</Link>   
                </li>
                <li>
                    <Link href="/admin/orders" >Orders</Link>   
                </li>
            </Ul>
        </nav>
    )
}
export default Adminheader