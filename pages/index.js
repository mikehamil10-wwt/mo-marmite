import { createClient } from "contentful";

export async function getStaticProps() {
  const contentful = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await contentful.getEntries({
    content_type: "recipe",
  });

  return {
    props: {
      recipes: res.items,
    },
  };
}

export default function Recipes({ recipes }) {
  console.log(recipes);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.sys.id}>{recipe.fields.title}</div>
      ))}
    </div>
  );
}
