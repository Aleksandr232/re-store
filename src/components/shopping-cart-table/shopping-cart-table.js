import React from "react";
import './shopping-cart-table.css';

const ShoppingCartTable=()=>{
    return(
        <div className="shopping-cart-table">
            <h2>Ваш заказ</h2>
            <table className="table">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>номер</th>
                    <th>итог</th>
                    <th>цена</th>
                    <th>акция</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Джек Лондон</td>
                    <td>2</td>
                    <td>250₽</td>
                    <td>
                    <button className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                    </button>
                    <button className="btn btn-outline-success btn-sm float-right">
                     <i className="fa fa-plus-circle" />
                    </button>
                    <button className="btn btn-outline-warning btn-sm float-right">
                    <i className="fa fa-minus-circle" />
                    </button>
                    </td>
                    </tr>
                </tbody>
            </table>

            <div className="total">
                Итог: 250
            </div>
        </div>
    );
};

export default ShoppingCartTable