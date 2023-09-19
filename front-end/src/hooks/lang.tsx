import { useSearchParams } from "react-router-dom";

export function useLang(): "ES" | "FR" | "UA" | "EN" {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "EN";
  console.log(lang);

  switch (lang) {
    case "ES":
    case "FR":
    case "UA":
      return lang;
    case "EN":
    default:
      return "EN";
  }
}
