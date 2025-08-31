import "./App.css";
import PreviewCard from "./components/PreviewCard";
import cardIllustration from "./assets/images/illustration-article.svg";
import authorPhoto from "./assets/images/image-avatar.webp";

function App() {
	return (
		<>
			<header className="header"></header>
			<main className="main">
				<PreviewCard
					illustration={cardIllustration}
					content={{
						tags: ["Learning"],
						published: "Published 21 Dec 2023",
						title: "HTML & CSS foundations",
						description:
							"These languages are the backbone of every website, defining structure, content, and presentation.",
					}}
					author={{
						photo: authorPhoto,
						name: "Greg Hooper",
					}}
				/>
			</main>

			<footer className="footer">
				<div className="attribution">
					Challenge by&nbsp;
					<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
						Frontend Mentor
					</a>
					. Coded by&nbsp;
					<a href="https://github.com/Mi6aRdnv" target="_blank">
						Mi6aRdnv
					</a>
					.
				</div>
			</footer>
		</>
	);
}

export default App;
