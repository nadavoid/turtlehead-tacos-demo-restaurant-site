import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider
} from "@yext/pages/components";
import { TemplateProps } from "@yext/pages";

export interface PageLayoutProps {
  children?: React.ReactNode;
  _site?: any;
  templateData: TemplateProps;
}

const PageLayout = ({ children, _site, templateData }: PageLayoutProps) => {
  return (
    <AnalyticsProvider templateData={templateData} enableDebugging={true}>
    <div className="min-h-screen">
      <AnalyticsScopeProvider name={"header"}>
        <Header _site={_site} />
      </AnalyticsScopeProvider>
      {children}
      <Footer _site={_site} />
    </div>
    </AnalyticsProvider>
  );
};

export default PageLayout;
