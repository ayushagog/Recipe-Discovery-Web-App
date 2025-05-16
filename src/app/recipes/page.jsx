import { Section } from "@/components/Section";
import { getRecipes } from "@/library/api-call";
import React from "react";

export default async function page() {
  const recipes= await getRecipes();
  // console.log(recipes);
  return (
    <Section data={recipes}/>
      );
}
