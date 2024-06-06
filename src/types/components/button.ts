import React from "react";

export type variant = "filled" | "outlined" | "text";
export type size = "sm" | "md" | "lg";
export type children = React.ReactNode;
export type color = "white" | "black" | "amber";
export type className = string;

export const buttonSizes = ["sm", "md", "lg"];
export const buttonColors = ["white", "black", "amber"];
export const buttonVariants = ["filled", "outlined", "text"];
