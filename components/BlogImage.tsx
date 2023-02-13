import sanityClient from '@sanity/client';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

// If you're using a private dataset you probably have to configure a separate write/read client.
// https://www.sanity.io/help/js-client-usecdn-token
const configuredSanityClient = sanityClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: true
});

const Page = ({ mySanityData }) => {
	const imageProps = useNextSanityImage(
		configuredSanityClient,
		mySanityData.image
	);

	return (
		<Img
			{...imageProps}
			style={{ width: '100%', height: 'auto' }} // layout="responsive" prior to Next 13.0.0
			sizes="(max-width: 800px) 100vw, 800px"
			placeholder="blur"
			blurDataURL={mySanityData.image.asset.metadata.lqip}
		/>
	);
};

// Replace this with your logic for fetching data from the Sanity API.
export const getServerSideProps = async function (context) {
	const { slug = '' } = context.query;

	const data = await configuredSanityClient.fetch(
		`{
			"mySanityData": *[_type == "mySanityType" && slug.current == $slug][0] {
				image {
					asset->{
						...,
						metadata
					}
				}
			}
		}`,
		{ slug }
	);

	return { props: data };
};

export default Page;