import Image from 'next/image';

export default function ExperienceCard({
		title,
		company,
		date,
		descriptionPoints,
		imageUrl,
		imageAlt,
		classes,
	}: {
		title: string;
		company: string;
		date: string;
		descriptionPoints: string[];
		imageUrl: string;
		imageAlt: string;
		classes: string,
	}) {
		return (
			<div className={`rounded-lg p-4 max-w-80 bg-gray-secondary border-2 border-blue-primary shadow-lg ${classes}`}>
				<div className="flex-col gap-4">
					<h2 className="card-title">{company}</h2>
					<h3 className="text-gray-light">{title}</h3>
					<Image
						src={imageUrl}
						alt={imageAlt}
						width="250"
						height="200"
					/>
					<p className="text-gray-light">{date}</p>
					<ul className="list-disc list-inside text-left mt-2">
						{descriptionPoints.map((point, index) => (
							<li key={index} className="text-sm">{point}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
	