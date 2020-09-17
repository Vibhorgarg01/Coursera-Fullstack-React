import React, { Component } from 'react';
//import { Media,Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
import DishetailComponent from "./DishDetailComponent";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            selectedDish: null
        };
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
    renderDish(dish) {
        // if (dish != null)
        //     return(
        //         <Card>
        //             <CardImg top src={dish.image} alt={dish.name} />
        //             <CardBody>
        //               <CardTitle>{dish.name}</CardTitle>
        //               <CardText>{dish.description}</CardText>
        //             </CardBody>
        //         </Card>
        //     );
        // else
        //     return(
        //         <div></div>
        //     );
        //     }
    if (dish != null) return <DishetailComponent dish={dish} />;
    else return <div />;
  }

    render() {
        const menu = this.props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1">{/*mt- giving top margin of 5 units*/}
            <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                
                <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          );
      });

        return (
          <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
                <div >
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
          </div>
        );
    }
}

export default Menu;