import React from 'react'
import ReactDOM from 'react-dom'

import Backbone from 'backbone'

var futureInterval
var pastInterval
	
const AppView = React.createClass ({

	

	getInitialState: function () {
		
		return {
			time: 2016
	
		}


	},

	componentWillMount: function () {
		Backbone.Events.on('backToTheFuture', (payload) => {
			this.setState({
				time: payload


			})
			

		})


	},

	render: function () {
		return (

				<div id = "appContainer">
					
					<Header />
					<TimeContainer currentYear = {this.state.time} />
					<TimeButtons currentYear = {this.state.time}/>
					
						
				</div>

			)
		}

	})

	const TimeButtons = React.createClass ({
		_future: function () {
			var newYear = this.props.currentYear + 1
        	Backbone.Events.trigger('backToTheFuture', newYear)
        	

		},


		_moveForward: function () {
			var futureYear = this.props.currentYear + 1
			Backbone.Events.trigger ('backToTheFuture', futureYear)
			futureInterval = setInterval(this._future,1000)
			
		},

		_past: function () {
			var newYear = this.props.currentYear - 1
        	Backbone.Events.trigger('backToTheFuture', newYear)

		},
		

		_moveBack: function () {
			var pastYear = this.props.currentYear - 1
			Backbone.Events.trigger ('backToTheFuture', pastYear)
			pastInterval = setInterval(this._past,1000)


		},

		_stopTime: function () {
			clearInterval(futureInterval)
			clearInterval(pastInterval)

		},

		
		
		render:	function () {
			console.log(this.props.currentYear)
			return (
					<div id = "timeButtonsContainer">
						<button id = "future" onClick = {this._moveForward}>future</button>
						<button id = "stop" onClick = {this._stopTime}>stop</button>
						<button id = "past" onClick = {this._moveBack}>past</button>
					</div>
				)
			}
	})

	const Header = React.createClass ({
		render: function () {
			return (

				<div id = 'headerContainer'>

					<h1>Time Machine</h1>

				</div>


				)

		}
		

	})

	const TimeContainer = React.createClass ({
			render: function () {
				return (


						<div id = "time">{this.props.currentYear}</div>
					)

		}

	})

	

	ReactDOM.render(<AppView />, document.querySelector('.container'))

