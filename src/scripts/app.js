import React from 'react'
import ReactDOM from 'react-dom'

const app = function() {

	const getCurrentYear = function() {
			var d = new Date()
			return d.getFullYear()
		}

	var counter = 1000
		
	const BackToTheFuture = React.createClass({
		getInitialState: function () {
			return {
				year: getCurrentYear(),
				docBrown: ''
				
			}

		},

		_fluxCapacitorFuture: function () {
			if(this.state.docBrown === 'toTheFuture'){
			this.state.year += 1
			this.setState({
				year: this.state.year

			})

			counter *= 0.9
			this.future = setTimeout(this._fluxCapacitorFuture, counter)
		}
	},

		_fluxCapacitorPast: function () {
			if(this.state.docBrown === 'toThePast'){
			this.state.year -= 1
			this.setState({
				year: this.state.year
		
			})

			counter *= 0.9
			this.past = setTimeout(this._fluxCapacitorPast, counter)
		}
	},

		_stopTime: function () {
				this.state.docBrown = 'stop'
				this.setState({
					docBrown: this.state.docBrown

			})


			},

		_moveBack: function () {
		
			this.state.docBrown = "toThePast"
			this.setState({
				docBrown: this.state.docBrown
				})

			this._fluxCapacitorPast()

		},

		_moveForward: function () {
			this.state.docBrown = "toTheFuture"
			this.setState({
				docBrown: this.state.docBrown
				})
			
			this._fluxCapacitorFuture()
			
			
		},
		
		render:	function () {
			var future = ''
			var past = ''
			var stop = ''
			if(this.state.docBrown === 'toTheFuture') {
					future = 'toTheFuture'
			} else if(this.state.docBrown === 'toThePast') {
					past = 'toThePast'
			} else if(this.state.docBrown === 'stop') {
					stop = 'stop'
			}

			return (
					<div id = "timeContainer">
						<h1 className="font-effect-anaglyph">Back To The Future</h1>
						<div className="font-effect-anaglyph" id= "time">{this.state.year}</div>
						<div id= 'navBar'>
							<button id = {past} onClick = {this._moveBack}>past</button>
							<button id = {stop} onClick = {this._stopTime}>stop</button>
							<button id = {future} onClick = {this._moveForward}>future</button>
							
						</div>
					</div>
				)
			}
		})

		ReactDOM.render(<BackToTheFuture />, document.querySelector('.container'))
}

app()

