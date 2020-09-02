import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './css/Projects.scss'

let dummyProjects = [
	{
		title: 'Music Collab',
		description: 'Need a guitarist and a singer for a short term project',
	},
	{
		title: 'Gaming Reviews',
		description: 'Project details',
	},
	{
		title: 'Developers needed',
		description: 'Large scale project',
	},
	{ title: 'Project 4', description: 'Project details' },
]

export default class Projects extends React.Component {
	dummyRender() {
		return (
			<React.Fragment>
				{dummyProjects.map((p) => (
					<div key={p}>
						<Card className='projects'>
							{/* <Card.Header>{p.title}</Card.Header> */}
							<Card.Body className='projcards'>
								<Card.Title>{p.title}</Card.Title>
								<Card.Text>{p.description}</Card.Text>
								<Button variant='primary'>View</Button>
								<Button variant='primary'>Join</Button>
							</Card.Body>
						</Card>
					</div>
				))}
			</React.Fragment>
		)
	}

	render() {
		return <React.Fragment>{this.dummyRender()}</React.Fragment>
	}
}