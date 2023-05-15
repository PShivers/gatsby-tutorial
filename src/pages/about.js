import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";

const AboutPage = () => {
	return (
		<main>
			<h1>About Me</h1>
			<Link to="/">Back to Home</Link>
			<p>
				Hi there! I'm the proud creator of this site, which I built with Gatsby.
				This is my first time working with Gatsby so don't expect a whole lot
				from this site.
			</p>
		</main>
	);
};

export const Head = () => <Seo title="About" />;

export default AboutPage;
