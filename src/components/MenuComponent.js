import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


    function RenderMenuItem ({dish, Clickevent}) {
      return (
        <Card onClick={()=>Clickevent(dish.id)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle> {dish.name} </CardTitle>
            </CardImgOverlay>
        </Card>
      );
    }

    // function Menu (props) {}
    const Menu=(props) => {
        // map (JS keyword): iterating over every dish in the dishes array here
        const menu = props.dishes.map((dish) => {
            return (
                // key: every item require key attribute to specift it.
                // the key helps React to recognise each one of these elements, uniquely. 

                <div key={dish.id} className="col-12 col-md-5 m-1">
                  {
                    // (dishId) => this.onDishSelect(dishId)
                  }
                  <RenderMenuItem dish={dish} Clickevent={props.onClick} />         
                </div>    
            );
        }); // take the JS objects

        console.log('Menu component render is invoked')

         // return what needs to diaplay on the UI in this conponent. (return view)
        return ( 
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }


export default Menu;