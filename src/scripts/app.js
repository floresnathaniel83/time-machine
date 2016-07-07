import React from 'react'
import ReactDOM from 'react-dom'

//var today = new Date();
//var year = today.getFullYear();

const app = function() {

	

	const AppView = React.createClass ({

		

		getInitialState: function () {
			
			return {
				time: 1900
		
			}


		},

		_changeTime: () => {
			

		},

		render: function () {
			return (

					<div id = "timeContainer">
						<h1>Time Machine</h1>
						<div id = "time">{this.state.time}</div>
						<button id = "timeChanger" onClick = {this._changeTime}></button>	
					</div>

				)
			}

		})
		

			ReactDOM.render(<AppView />, document.querySelector('.container'))

} 

app()