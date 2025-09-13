import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

export type RecipeCardProps = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

const ReceipeCard = (recipeProps: RecipeCardProps) => {
  const { idMeal, strMeal, strMealThumb } = recipeProps;
  return (
    <Link href={`/receipes/${idMeal}`}>
      <Card className="hover:shadow-lg transition cursor-pointer">
        <CardHeader className="p-0">
          <Image src={strMealThumb} height={400} width={400} alt="No Image" />
        </CardHeader>
        <CardContent>
          <CardDescription>${strMeal}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ReceipeCard;
