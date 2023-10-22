import React from 'react'
import './projects.css'
import first from '../images/project1.png'
import second from '../images/project2.png'
import third from '../images/project3.png'
import fourth from '../images/project4.png'
import fifth from '../images/project5.png'
import sixth from '../images/project6.png'
import arrow from '../images/arrow.png'
import { Container, Grid, Typography } from '@material-ui/core'

const Projects = () => {
	return (
		<Grid class="projects" id="projects">
			<Typography variant="h2" class="h2">
				Проекты
			</Typography>
			<Grid class="project">
				<Grid class="hoverwrap">
					<img class="pic" src={first} />
					<Typography variant="p" class="hovercap">
						<a href="#">
							Тумба под телевизор
						</a>
					</Typography>
					<img class="arrow" src={arrow} />
				</Grid>
				<Grid class="hoverwrap">
					<img class="pic" src={second} />
					<Typography variant="p" class="hovercap">
						<a href="#">
							Красивая кухня
						</a>
					</Typography>
					<img class="arrow" src={arrow} />
				</Grid>
				<Grid class="hoverwrap">
					<img class="pic" src={third} />
					<Typography variant="p" class="hovercap">
						<a href="#">
							Стул в гостиную
						</a>
					</Typography>
					<img class="arrow" src={arrow} />
				</Grid>
				<Grid class="hoverwrap">
					<img class="pic" src={fourth} />
					<Typography variant="p" class="hovercap">
						<a href="#">
							Шкафная композиция
						</a>
					</Typography>
					<img class="arrow" src={arrow} />
				</Grid>
				<Grid class="hoverwrap">
					<img class="pic" src={fifth} />
					<Typography variant="p" class="hovercap">
						<a href="#">
							Невероятнейшая кровать
						</a>
					</Typography>
					<img class="arrow" src={arrow} />
				</Grid>
				<Grid class="hoverwrap">
					<img class="pic" src={sixth} />
					<Typography variant="p" class="hovercap">
						<a href="#">
						Тумба для красивых фотографий
						</a>
					</Typography>
					<img class="arrow" src={arrow} />
				</Grid>
				<button class="prev-button" aria-label="Посмотреть предыдущий слайд">&lt</button>
				<button class="next-button" aria-label="Посмотреть следующий слайд">&gt</button>
			</Grid>
		</Grid>
	)
}

export default Projects