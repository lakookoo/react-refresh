function CoreConcept({image, title, description}) {
	return (
		<li>
			<img src={image} alt={title} />
			<h3>Title</h3>
			<p>{description}</p>
		</li>
	);
}

export default CoreConcept;