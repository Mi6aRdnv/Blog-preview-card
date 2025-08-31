import cardImage from "../assets/images/illustration-article.svg";
import authorPhoto from "../assets/images/image-avatar.webp";
import "./PreviewCard.css";

export default function PreviewCard() {
	return (
		<div className="card">
			<div className="card__img-box">
				<img src={cardImage} alt="" className="card__img" />
			</div>

			<div className="card__content">
				<div className="card__tags">
					<div className="card__tag">Learning</div>
				</div>
				<p className="card__data-publication">Published 21 Dec 2023</p>
				<h2 className="card__title">HTML & CSS foundations</h2>
				<p className="card__description">
					These languages are the backbone of every website, defining structure,
					content, and presentation.
				</p>
			</div>

			<div className="card__author">
				<img src={authorPhoto} alt="" className="card__author-photo" />
				<p className="card__author-name">Greg Hooper</p>
			</div>
		</div>
	);
}
