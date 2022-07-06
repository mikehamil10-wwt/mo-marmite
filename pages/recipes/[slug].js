import contentfulClient from "../../utils/contentfulClient";

export const getStaticPaths = async () => {
  const res = await contentfulClient.getEntries({
    content_type: "recipe",
  });

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await contentfulClient.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });

  return {
    props: {
      recipe: items[0],
    },
  };
}

export default function RecipeDetails({ recipe }) {
  console.log(recipe);

  return <div>Recipe Details</div>;
}
