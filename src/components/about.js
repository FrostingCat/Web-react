import React from 'react'
import './about.css'
import first from '../images/first.png'
import second from '../images/second.png'
import { Card, Container, List, ListItem, ListItemText, Typography } from '@material-ui/core'

const About = () => {
	return (
		<Card class="about" id="about">
			<Typography variant="h2" class="h2">
				Более 5 лет создаем мебель для вашего комфорта
			</Typography>
			<Card class="about-right-text">
				<List
					class="about-upper-text"
					component="div"
				>
					<ListItem>
						<ListItemText>
							<Typography variant="p">
								Мы — команда профессионалов, которые могут произвести любую мебель
								для вашего проекта, а также найти производственное решение любой
								задумки.
							</Typography>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>
							<Typography variant="p">
								Наша основная цель — реализовывать самые смелые задумки, и делать
								это качественно и аккуратно.
							</Typography>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>
							<Typography variant="p">
								В качестве материалов мы используем натуральные — стекло, дерево,
								бетон, камень, металл и эпоксидную смолу.
							</Typography>
						</ListItemText>
					</ListItem>
				</List>
				<List
					class="about-bottom-text"
					component="div"
				>
					<ListItem>
						<ListItemText class="about-info-item">
							<Typography variant="h3" class="h3">
								1 год
							</Typography>
							<Typography variant="p">
								гарантии на всю продукцию
							</Typography>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText class="about-info-item">
							<Typography variant="h3" class="h3">
								300+
							</Typography>
							<Typography variant="p">
								выполненных проектов
							</Typography>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText class="about-info-item">
							<Typography variant="h3" class="h3">
								15 дней
							</Typography>
							<Typography variant="p">
								срок производства
							</Typography>
						</ListItemText>
					</ListItem>
				</List>
			</Card>
		</Card>
	)
}

export default About