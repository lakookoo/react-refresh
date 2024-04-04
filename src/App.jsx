import React from "react";
import { CORE_CONCEPTS } from "./data.js"
import  reactImg  from "./assets/react-core-concepts.png"


function Header() {
	return (<header>
		<img src={reactImg} alt="Stylized atom" />
		<h1>React Essentials</h1>
		<p>
			Fundamental React concepts you will need for almost any app you are
			going to build!
		</p>
	</header>
	);
}

function CoreConcept(props) {
	return (
		<li>
			<img src={props.image} alt="..." />
			<h3>Title</h3>
			<p>Description</p>
		</li>
	);
}

function App() {
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						<CoreConcept
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
							image={CORE_CONCEPTS[0].image}
						/>
						<CoreConcept
							title={CORE_CONCEPTS[1].title}
							description={CORE_CONCEPTS[1].description}
							image={CORE_CONCEPTS[1].image}
						/>
						<CoreConcept
							title={CORE_CONCEPTS[2].title}
							description={CORE_CONCEPTS[2].description}
							image={CORE_CONCEPTS[2].image}
						/>
						<CoreConcept
							title={CORE_CONCEPTS[3].title}
							description={CORE_CONCEPTS[3].description}
							image={CORE_CONCEPTS[3].image}
						/>
					</ul>
				</section>


			</main>
		</div>
	);
}

export default App;
