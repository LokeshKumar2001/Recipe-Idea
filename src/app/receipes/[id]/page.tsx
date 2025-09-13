import Image from "next/image";
import { getMealById } from "../../../../lib/api";
import Link from "next/link";

interface RecipeDetailsProps {
  params: {
    id: string;
  };
}

type RecipeRaw = {
  [key: string]: string | null;
};

interface IngredientProps {
  ingredient: string;
  measure: string;
}

function extractingIngredients(recipe: RecipeRaw): IngredientProps[] {
  const ingredients: IngredientProps[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure?.trim() ?? "",
      });
    }
  }
  return ingredients;
}

export default async function RecipeDetails({ params }: RecipeDetailsProps) {
  const recipe = await getMealById(params.id);
  const ingredients: IngredientProps[] = extractingIngredients(recipe);

  if (!recipe) {
    return <div className="p-6 max-w-3xl mx-auto">Receipe not Found</div>;
  }

  return (
    <div className="ml-8 mx-auto space-y-2 ">
      <h1 className="text-2xl font-bold mb-4">{recipe.strMeal}</h1>
      {recipe.strTags && (
        <p className="text-sm text-gray-600">
          <strong>Tags: </strong>
          {recipe.strTags}
        </p>
      )}
      <div className="flex flex-col md:flex-row  ">
        <div className="w-full md:w-1/2 space-y-4">
          <div className="w-full aspect-video relative rounded shadow overflow-hidden">
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal || "Meal image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <p className="text-sm text-gray-700">
            <strong>Category:</strong> {recipe.strCategory}
            <br />
            <strong>Origin:</strong> {recipe.strArea}
          </p>
        </div>

        <div className=" max-w-screen md:w-1/2 px-6 bg-gray-100">
          <div className="mt-6 mb-6 p-6 bg-white rounded-lg shadow max-w-2xl w-full">
            <h2 className="text-2xl font-semibold mb-4">
              Required Ingredients:
            </h2>
            <p className="text-gray-800 leading-relaxed flex flex-wrap">
              {ingredients.map((item, index) => (
                <span key={index} className="mr-1">
                  {item.ingredient}
                  {index < ingredients.length - 1 && ","}
                </span>
              ))}
            </p>
          </div>

          <div className="rounded-lg shadow   md:w-1/2 px-6 bg-white mt-6 mb-6 p-6  max-w-2xl w-full">
            <h2 className="text-xl font-semibold mb-4">Measurements</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-800 overflow-y-auto max-h-96">
              {ingredients.map((item, idx) => (
                <li key={idx}>
                  {item.measure} {item.ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p className="whitespace-pre-line leading-relaxed">
          {recipe.strInstructions}
        </p>
        <p>{recipe.strSource}</p>
        {recipe.strYoutube && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Video</h2>
            <iframe
              width={"100%"}
              height={"600"}
              src={`https://www.youtube.com/embed/${new URL(
                recipe.strYoutube
              ).searchParams.get("v")}`}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              className="rounded"
            ></iframe>
          </div>
        )}

        {recipe.strSource && (
          <p>
            <strong>Reference:</strong>{" "}
            <Link
              href={recipe.strSource}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {recipe.strSource}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
