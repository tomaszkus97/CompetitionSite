import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import GetStarted from "../components/sections/getstarted"
import Infos from "../components/sections/maininfo"

const IndexPage = () => (
  <Layout>
    <SEO title="MPP2020" />
    <Navigation />
    <Header />
    <Infos/>
    <Features />
    <GetStarted />
  </Layout>
)

export default IndexPage
