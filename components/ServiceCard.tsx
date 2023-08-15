import Link from "next/link";

interface ServiceCardProps {
    colorClass: string;
    title: string;
    description: string;
    link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ colorClass, title, description, link }) => {
    return (
        <li className={`p-4 border border-gray-dark rounded-md hover:bg-gray-light transition bg-${colorClass}`}>
            <Link href={link}>
                <h2 className="text-xl border-b-2 border-green-dark font-semibold mb-2 max-w-[10em]">{title}</h2>
                <p className="text-brown">{description}</p>
            </Link>
        </li>
    );
}

export default ServiceCard;