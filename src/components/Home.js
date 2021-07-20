import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default class Home extends Component {
	constructor() {
		super();
		console.log("from home constructor.");
	}

	runScript = () => {
		const script = document.createElement('script');

		script.src = "./ScrapePage";
		script.async = true;

		document.body.appendChild(script);
	}

	render() {
		return (
			<div>
				<p>something in the home component.</p>
				<Form>
					<Form.Group>
						<Form.Label>First Input: </Form.Label>
						<Form.Control placeholder="something "/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Second Input: </Form.Label>
						<Form.Control placeholder="something else"/>
					</Form.Group>
					<Form.Group>
						<Button variant="primary">Submit</Button>
					</Form.Group>
				</Form>
			</div>
		)
	}
}