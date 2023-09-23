import DatePurchase from "./DatePurchase";

export default function Product(props) {
    let amount = props.amount.toLocaleString('en-US', {style : "currency" , currency : 'USD'});
    return (
        <div>
            <article className="product">
                <div>
                    <h2>{props.title}</h2>
                    <div className="price">{amount}</div>    
                </div>   
                <DatePurchase date={props.date} />
            </article>
        </div>
    );
}