import React from 'react';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { FaUser } from "react-icons/fa";
import checkIconMobile from "../../assets/mobile/checkpoint.svg";
import { useSpring, animated } from 'react-spring';

const Content = () => {
	const customer = useSpring({
		customers: 10245,
		from: {
			customers: 0
		}
	});

	const card = useSpring({
		cards: 12045,
		from: {
			cards: 0
		}
	})

	return (
		<section className="md:flex md:flex-row">
			<div className="mx-4 text-bold flex flex-col items-center shadow-md rounded-[24px] bg-gradient-to-b from-white/40 to-transparent md:w-[20%]">
				<div className="mt-12 gap-8 flex items-start">
					<FaUser size={"22px"} className="mt-[12px]" />
					<div className="text-26">
						<animated.div>
							{customer.customers.to((value) => Math.floor(value))}
						</animated.div>
						<p className="text-13 font-semibold mb-[36px] md:text-16">
							Customers
						</p>
					</div>
				</div>

				<div className="mt-12 gap-8 flex items-start">
					<BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
					<div className="text-26">
						<animated.div>
							{card.cards.to((value) => Math.floor(value))}
						</animated.div>
						<p className="text-13 font-semibold mb-[36px] md:text-16">
							Card Issued
						</p>
					</div>
				</div>
			</div>

			<div className="text-13 flex flex-col w-full mt-[90px] font-semibold md:w-[30%] md:ml-[20%] md:text-16 md:mt-0">
				<div className="check-content">
					<img src={checkIconMobile} alt="check-icon-mobile" />
					<p>Card reports send to your phone every weeks</p>
				</div>
				<div className="check-content">
					<img src={checkIconMobile} alt="check-icon-mobile" />
					<p>No external fees</p>
				</div>
				<div className="check-content">
					<img src={checkIconMobile} alt="check-icon-mobile" />
					<p>Set spending limits and restrictions</p>
				</div>
			</div>
		</section>
	)
}

export default Content;