import Image from 'next/image';

export default function ProjectCard({ title, image, description }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>{title}</h2>
      <Image src={image} alt={title} width={300} height={200} />
      <p>{description}</p>
    </div>
  );
}
