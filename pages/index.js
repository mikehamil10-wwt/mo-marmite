import RecipeCard from "../components/RecipeCard";
import contentfulClient from "../utils/contentfulClient";

export async function getStaticProps() {
  const res = await contentfulClient.getEntries({
    content_type: "recipe",
  });

  return {
    props: {
      recipes: res.items,
    },
    revalidate: 1,
  };
}

export default function Recipes({ recipes }) {
  // console.log(recipes);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  );
}
