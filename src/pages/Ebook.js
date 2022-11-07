import React, { useEffect, useState } from "react";
import Data from "../helpers/data.json";


function Ebook(props) {
	useEffect(() => {
		props.changeBG("ebook");
	});
	
	return (
		<main id="main" className="grid-container grid-container--tech flow">
					<div className="flex number-selectors">
				{Data.ebook.map((item, index) => {
					return (
						<article
						
					>
						<header>
							
							<h2 className="text-accent fs-400 ff-sans-cond uppercase">
							{Data.ebook[index].edition}
		
							</h2>
							<p className="fs-700 ff-serif uppercase">
							{Data.ebook[index].language}
		
							</p>
						</header>
						<p className="page-info fs-400 text-accent">
							{Data.ebook[index].price}
						</p>
						<hr></hr>
					</article>
					
					);
				})}
			</div>
			
		</main>
	);
}
export default Ebook;
