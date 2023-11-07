import * as React from "react";
import "../index.css";
import {
  GetHeadConfig,
  GetPath,
  Template,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import PageLayout from "../components/PageLayout";
import {
  provideHeadless,
  Environment,
  SearchHeadlessProvider,
} from "@yext/search-headless-react";
import { FilterSearch } from "@yext/search-ui-react";

import {
  HeadlessConfig,
} from "@yext/search-headless-react";
import StoreLocator from "../components/StoreLocator";


export const getPath: GetPath<TemplateProps> = () => {
  return `locator`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "Turtlehead Tacos Locations",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const headlessConfig: HeadlessConfig = {
  apiKey: "19e60df2d6195a71bacb18b5fdd989a5",
  experienceKey: "turtlehead-tacos-locator",
  locale: "en",
  verticalKey: "locations",
  environment: Environment.SANDBOX,
};

const searcher = provideHeadless(headlessConfig);

const Locator: Template<TemplateRenderProps> = () => {
  return (
    <PageLayout>
      <SearchHeadlessProvider searcher={searcher}>
        <div className="mx-auto max-w-7xl px-4">
          <StoreLocator />
        </div>
      </SearchHeadlessProvider>
    </PageLayout>
  );
};

export default Locator;