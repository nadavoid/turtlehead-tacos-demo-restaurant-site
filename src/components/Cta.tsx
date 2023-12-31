import * as React from "react";
import { twMerge } from "tailwind-merge";
import { Link, useAnalytics } from "@yext/pages/components";

export interface CtaProps {
  buttonText: string;
  url?: string;
  style?: string;
}

const Cta = ({ buttonText, url, style }: CtaProps) => {
  const conversionData = {
    cid: "9416750b-23e0-4f1d-aacc-ef3aa5b64911",
    cv: "12"
  };
  const analytics = useAnalytics();
  const visitor = {
    id: "1234",
    idMethod: "MY_ID_METHOD"
  };

  return (
    <Link
      href={url}
      className={twMerge(
        "py-4 px-6 text-base font-bold rounded-lg hover:scale-[1.02] duration-250",
        style
      )}
      target=""
      rel="noopener noreferrer"
      eventName={`cta Click: ${buttonText}`}
      conversionDetails={conversionData}
      onClick={analytics?.identify(visitor)}
    >
      {buttonText}
    </Link>
  );
};

export default Cta;
