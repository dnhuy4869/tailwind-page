import React from 'react';
import cards from "../../assets/desktop/isocard.svg";

const Slogan = () => {
	return (
		<section className="text-36 relative my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
			<div className="text-center md:col-start-2 md:col-span-1">
				<p className="">
					Earn <span className="text-purple-300">More</span>
				</p>
				<p className="">
					Pay Less
				</p>
				<button className="text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-pink-500 transition-all duration-200 md:text-25 md:px-8 md:py-[8px]">
					Start
				</button>
			</div>

			<div className="mt-[69px] md:absolute md:right-[-5rem]">
				<img src={cards} alt="credit-cards" />
			</div>
		</section>
	)
}

export default Slogan;