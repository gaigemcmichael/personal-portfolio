import Image from 'next/image';
import Link from "next/link";

export default function ExperienceCard({
		title,
		company,
		date,
		descriptionPoints,
		imageUrl,
		imageAlt,
		link,
		classes,
	}: {
		title: string;
		company: string;
		date: string;
		descriptionPoints: string[];
		imageUrl: string;
		imageAlt: string;
		link: string;
		classes: string,
	}) {
		return (
			<div className={`rounded-lg p-4 max-w-[600px] sm:max-w-[320px] bg-gray-secondary dark:bg-gray-light text-black dark:text-white-primary border-2 border-blue-primary dark:border-gray-primary shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 ${classes}`}>
				<div className="flex-col gap-8">
					<h2 className="text-lg sm:text-xl font-bold">{company}</h2>
					<h3 className="text-gray-light dark:text-white-primary text-md">{title}</h3>						
					<div className="flex justify-center items-center my-2">
					<Link
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="w-[200px] sm:w-[250px] max-w-full"
					>
						<Image
							src={imageUrl}
							alt={imageAlt}
							width={250}
							height={200}
							className="w-full h-auto object-contain"
						/>
					</Link>
					</div>
					<p className="text-gray-light dark:text-white-primary text-md">{date}</p>						
					<ul className="list-disc list-inside text-left mt-2">
						{descriptionPoints.map((point, index) => (
							<li key={index} className="text-sm">{point}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
	