import React, {Component} from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className='fullForm'>

                        <div>
                        <img className='formNoImage' src='https://www.firstgearmotorcar.com/frontend/assets/images/placeholder/inventory-full-placeholder.png'/>
                        </div>

                        <div className='formInputs'>

                        <div>
                            Image URL:
                        </div>

                        <div>
                            <input className='inputFields' type='text' placeholder='Insert Image URL'/>
                        </div>

                        <div>
                            Product Name:
                        </div>

                        <div>
                            <input className='inputFields' type='text' placeholder='Insert Product Name'/>
                        </div>

                        <div>
                            Price:
                        </div>

                        <div>
                            <input  className='inputFields' type='text' placeholder='Insert Price'/>
                        </div>
                    </div>

                        <div className='buttons'>
                            <button>Cancel</button>
                            <button>Add to Inventory</button>
                        </div>
            </div>
        )
    }
}

export default Form;