import "./PreviewCard.css";

export default function PreviewCard({ illustration, content, author }) {
	return (
		<div className="card">
			{/* Illustration */}
			<div className="card__img-box">
				<img src={illustration} alt="Illustration" className="card__img" />
			</div>

			{/* Content */}
			<div className="card__content">
				<div className="card__tags">
					{content.tags?.map((tag, index) => (
						<div className="card__tag" key={index}>
							{tag}
						</div>
					))}
				</div>
				<p className="card__data-publication">{content.published}</p>
				<h2 className="card__title">{content.title}</h2>
				<p className="card__description">{content.description}</p>
			</div>

			{/* Author */}
			<div className="card__author">
				<img
					src={author.photo}
					alt="Author photo"
					className="card__author-photo"
				/>
				<p className="card__author-name">{author.name}</p>
			</div>
		</div>
	);
}
