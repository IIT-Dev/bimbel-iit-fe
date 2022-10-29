import * as React from "react"
import type { HeadFC } from "gatsby"
import '../styles/global.css'
import {StaticImage} from "gatsby-plugin-image";
import '../images/header.png'
import {withPrefix} from "gatsby";
import {AppLogo, HeaderMessage, SubHeaderMessage} from "../data/homepage";
import {ProductsItem} from "../components/index/products";
const background = require("../images/header.png")

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const IndexPage = () => {
  return (
      <body className="leading-normal tracking-normal text-indigo-400 pt-8 bg-cover bg-fixed" style={{backgroundImage:`url(${"../../header.png"})`}}>
      <div className="h-full">
        <div className="w-full container mx-auto">
          <div className="w-full flex items-center justify-between">

            {/*Header logo was here*/}
            <AppLogo/>

            <div className="flex w-1/2 justify-end content-center">
              {/*<a className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"*/}
              {/*   href="https://twitter.com/intent/tweet?url=#">*/}
              {/*  <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">*/}
              {/*    <path*/}
              {/*        d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"*/}
              {/*    ></path>*/}
              {/*  </svg>*/}
              {/*</a>*/}
              {/*<a*/}
              {/*    className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"*/}
              {/*    href="https://www.facebook.com/sharer/sharer.php?u=#"*/}
              {/*>*/}
              {/*  <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">*/}
              {/*    <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>*/}
              {/*  </svg>*/}
              {/*</a>*/}
            </div>
          </div>
        </div>

        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">

          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <HeaderMessage/>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
              {SubHeaderMessage}
            </p>

            {/*<form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">*/}
            {/*  <div className="mb-4">*/}
            {/*    <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="emailaddress">*/}
            {/*      Signup for our newsletter*/}
            {/*    </label>*/}
            {/*    <input*/}
            {/*        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"*/}
            {/*        id="emailaddress"*/}
            {/*        type="text"*/}
            {/*        placeholder="you@somewhere.com"*/}
            {/*    />*/}
            {/*  </div>*/}

            {/*  <div className="flex items-center justify-between pt-4">*/}
            {/*    <button*/}
            {/*        className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"*/}
            {/*        type="button"*/}
            {/*    >*/}
            {/*      Sign Up*/}
            {/*    </button>*/}
            {/*  </div>*/}
            {/*</form>*/}
          </div>


          <div className="w-full xl:w-3/5 p-12 overflow-hidden">
            <StaticImage src={"../images/coding.svg"} alt={"gambar"} className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"/>
          </div>


        </div>

        <ProductsItem/>
      </div>
      </body>
  )
}

export default IndexPage

export const Head: HeadFC = () =>{
  return(
      <>
        <title>Belajar Bersama IIT HMIF</title>
      </>

  )
}
