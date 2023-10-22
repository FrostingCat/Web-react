import React from 'react'
import './hero.css'
import first from '../images/first.png'
import second from '../images/second.png'
import { Box, Card, Container, Typography } from '@material-ui/core'
import { BrowserRouter, Link } from 'react-router-dom'

const Hero = () => {
	return (
		<Card class="hero">
			<div class="upper-text">
				<Typography variant="h1" class="h1" >Эксклюзивная и нестандартная мебель для дома</Typography>
				<p>
					<a class="order" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
						target="_blank">
						Заказать проект
					</a>
				</p>
			</div>
			<Typography variant="p" class="text">Мы можем произвести любую мебель для вашего проекта и найти
				производственное решение любой задумки.
			</Typography>
			<p>
				<a class="order-mob" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
					target="_blank">
					Заказать проект
				</a>
			</p>
			<img class="right-pic" src={first} />
			<img class="left-pic" src={second} />
		</Card>
	)
}

export default Hero